        function toolMsg(key, vars) {
            if (typeof window.toolT === 'function') return window.toolT(key, vars);
            return key;
        }

        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        
        let originalImage = null, currentImage = null, canvas = null, ctx = null;
        let selectionStart = null, selectionEnd = null;
        let pdfDoc = null, currentPage = 1, totalPages = 1, isPDF = false;
        let fillColor = '#000000'; // Default fill color for blackout effect
        let hasCustomColorSelected = true; // Whether a custom color is actively selected
        let originalFileName = ''; // Store original file name
        let originalFileType = ''; // Store original file type (e.g., 'image/jpeg', 'image/png')
        let redactedPages = []; // Store redacted page data for PDF export
        let historyStack = []; // Undo history stack
        let redoStack = []; // Redo history stack
        let historyLock = false;
        let restoreVersion = 0;
        let pageThumbnails = [];
        let thumbViewPage = 0;
        let thumbGenToken = 0;
        const THUMBS_PER_VIEW = 5;
        const THUMB_MAX_WIDTH = 120;
        const THUMB_JPEG_QUALITY = 0.6;
        const DEFAULT_EFFECT_INTENSITY = 30;
        const DEFAULT_BLUR_INTENSITY = 55;

        // Detect chat app built-in browsers and show guide overlay
        (function detectChatAppBrowser() {
            const ua = navigator.userAgent.toLowerCase();
            const chatAppKeywords = [
                'micromessenger',  // WeChat
                'wechat',
                'qq/',             // QQ
                'tim',             // TIM
                'dingtalk',        // DingTalk
                'alipayclient',    // Alipay
                'alipay',
                'lark',            // Lark/Feishu
                'feishu',
                'weibo',           // Weibo
                'wxwork',          // WeChat Work
                'whatsapp',        // WhatsApp
                'fbav',            // Facebook App
                'fban',
                'instagram',       // Instagram
                'line/',           // LINE
                'twitter',         // Twitter/X App
                'snapchat',        // Snapchat
                'telegram'         // Telegram
            ];
            const isChatAppBrowser = chatAppKeywords.some(keyword => ua.includes(keyword));
            if (isChatAppBrowser) {
                const overlay = document.getElementById('chatAppOverlay');
                if (overlay) {
                    overlay.classList.add('active');
                }
            }
        })();

        document.addEventListener('DOMContentLoaded', function() {
            canvas = document.getElementById('mainCanvas');
            ctx = canvas.getContext('2d');
            setupEventListeners();
            setupColorPicker();
            updateColorPicker();
            
            // Default: no color selected
            clearFillColor();

            document.addEventListener('keydown', function(e) {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
                if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
                if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
            });
        });

        function setupEventListeners() {
            const fileInput = document.getElementById('fileInput');
            const emptyState = document.getElementById('emptyState');
            const floatingUpload = document.getElementById('floatingUpload');

            setupUploadZone(emptyState);
            setupUploadZone(floatingUpload);
            if (floatingUpload) {
                floatingUpload.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInput.click();
                    }
                });
            }

            fileInput.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    handleFile(e.target.files[0]);
                    e.target.value = '';
                }
            });

            const thumbViewPrev = document.getElementById('thumbViewPrev');
            const thumbViewNext = document.getElementById('thumbViewNext');
            if (thumbViewPrev) thumbViewPrev.addEventListener('click', () => changeThumbView(-1));
            if (thumbViewNext) thumbViewNext.addEventListener('click', () => changeThumbView(1));
            
            canvas.addEventListener('mousedown', handleCanvasMouseDown);
            canvas.addEventListener('mousemove', handleCanvasMouseMove);
            canvas.addEventListener('mouseup', handleCanvasMouseUp);
            canvas.addEventListener('mouseleave', handleCanvasMouseUp);
            canvas.addEventListener('click', handleMobileCanvasClick);
            canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
            canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
            canvas.addEventListener('touchend', handleTouchEnd);
        }

        function setupUploadZone(zone) {
            if (!zone) return;
            const fileInput = document.getElementById('fileInput');
            zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
            zone.addEventListener('dragleave', () => { zone.classList.remove('dragover'); });
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('dragover');
                if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
            });
            zone.addEventListener('click', () => { fileInput.click(); });
        }

        function updateColorPicker() {
            // Color picker is always active, no additional setup needed
        }

        function normalizeHex(color) {
            let hex = (color || '').trim().toUpperCase();
            if (!hex.startsWith('#')) hex = '#' + hex;
            if (!/^#[0-9A-F]{6}$/.test(hex)) return null;
            return hex;
        }

        function hexToRgb(hex) {
            const normalized = normalizeHex(hex);
            if (!normalized) return null;
            const h = normalized.slice(1);
            return {
                r: parseInt(h.slice(0, 2), 16),
                g: parseInt(h.slice(2, 4), 16),
                b: parseInt(h.slice(4, 6), 16)
            };
        }

        function rgbToHex(r, g, b) {
            return '#' + [r, g, b].map(function(v) {
                const clamped = Math.max(0, Math.min(255, Math.round(v)));
                const s = clamped.toString(16);
                return s.length === 1 ? '0' + s : s;
            }).join('').toUpperCase();
        }

        function hslToHex(h, s, l) {
            h = ((h % 360) + 360) % 360;
            s = Math.max(0, Math.min(100, s)) / 100;
            l = Math.max(0, Math.min(100, l)) / 100;
            const c = (1 - Math.abs(2 * l - 1)) * s;
            const x = c * (1 - Math.abs((h / 60) % 2 - 1));
            const m = l - c / 2;
            let r = 0, g = 0, b = 0;
            if (h < 60) { r = c; g = x; }
            else if (h < 120) { r = x; g = c; }
            else if (h < 180) { g = c; b = x; }
            else if (h < 240) { g = x; b = c; }
            else if (h < 300) { r = x; b = c; }
            else { r = c; b = x; }
            return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
        }

        function buildColorPalette() {
            const colors = [];
            const presetRows = [
                ['#FFFFFF', '#000000', '#EEECE1', '#1F497D', '#4F81BD', '#C0504D', '#9BBB59', '#8064A2', '#4BACC6', '#F79646', '#FFFF00', '#FF0000', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'],
                ['#F2F2F2', '#808080', '#DDD9C3', '#948A54', '#DA9694', '#C3D69B', '#B2A2C7', '#92CDDC', '#FAC090', '#C4BD97', '#FFFF99', '#FF8080', '#80FF80', '#80FFFF', '#8080FF', '#FF80FF'],
                ['#D8D8D8', '#595959', '#C4BC96', '#767171', '#B1A064', '#A5A556', '#8FAADC', '#75BDDE', '#F4B382', '#A69F7E', '#FFFF66', '#FF6666', '#66FF66', '#66FFFF', '#6666FF', '#FF66FF'],
                ['#BFBFBF', '#404040', '#938953', '#4A452A', '#7F7F4D', '#6F8C4D', '#5F7F9F', '#4BACC6', '#E68E3C', '#7F684E', '#FFFF00', '#FF0000', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF']
            ];
            presetRows.forEach(function(row) { colors.push.apply(colors, row); });
            for (let r = 0; r < 11; r++) {
                for (let c = 0; c < 16; c++) {
                    const hue = c * (360 / 16);
                    const lightness = Math.max(10, 78 - r * 6);
                    const saturation = 45 + (r % 3) * 18;
                    colors.push(hslToHex(hue, saturation, lightness));
                }
            }
            return colors;
        }

        function renderColorPalette() {
            const grid = document.getElementById('colorPalette');
            if (!grid || grid.dataset.built === '1') return;
            const colors = buildColorPalette();
            colors.forEach(function(color) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'color-swatch';
                btn.style.backgroundColor = color;
                btn.dataset.color = color;
                btn.title = color;
                btn.setAttribute('role', 'option');
                btn.addEventListener('click', function() { setFillColor(color); });
                grid.appendChild(btn);
            });
            grid.dataset.built = '1';
        }

        function updatePaletteSelection() {
            document.querySelectorAll('#colorPalette .color-swatch').forEach(function(btn) {
                btn.classList.toggle('selected', hasCustomColorSelected && btn.dataset.color === fillColor);
                btn.setAttribute('aria-selected', hasCustomColorSelected && btn.dataset.color === fillColor ? 'true' : 'false');
            });
        }

        function updateActiveColorLabel() {
            const label = document.getElementById('activeColorLabel');
            if (label) {
                label.textContent = hasCustomColorSelected ? fillColor : 'None';
            }
        }

        function setupColorPicker() {
            renderColorPalette();
        }

        function setFillColor(color) {
            const normalized = normalizeHex(color);
            if (!normalized) return;
            fillColor = normalized;
            hasCustomColorSelected = true;
            updatePaletteSelection();
            updateActiveColorLabel();
        }

        function clearFillColor() {
            hasCustomColorSelected = false;
            updatePaletteSelection();
            updateActiveColorLabel();
        }

        // Mobile box selection state
        let mobileBox = null;
        let isDraggingHandle = false;
        let activeHandle = null;
        let initialTouchPos = null;
        let initialBoxState = null;
        let mobileZoom = 1;
        let lastTouchDist = 0;
        let isPinching = false;
        let lastTouchTime = 0;

        function getCanvasCoordinates(clientX, clientY) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (clientX - rect.left) * scaleX,
                y: (clientY - rect.top) * scaleY
            };
        }

        function handleMobileCanvasClick(e) {
            if (window.innerWidth >= 1024) return;
            if (!currentImage) return;
            if (isDraggingHandle || isPinching) return;
            if (Date.now() - lastTouchTime < 300) return;

            const pos = getCanvasCoordinates(e.clientX, e.clientY);
            const boxSize = Math.min(canvas.width, canvas.height) * 0.25;

            mobileBox = {
                x: Math.max(0, Math.min(pos.x - boxSize / 2, canvas.width - boxSize)),
                y: Math.max(0, Math.min(pos.y - boxSize / 2, canvas.height - boxSize)),
                width: Math.min(boxSize, canvas.width),
                height: Math.min(boxSize, canvas.height)
            };

            drawMobileBox();
            showMobileApply();
        }

        function drawMobileBox() {
            if (!mobileBox) return;
            redrawCanvas();
            drawSelectionPreview(
                {x: mobileBox.x, y: mobileBox.y},
                {x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height}
            );

            const handleRadius = 22;
            const handles = [
                {x: mobileBox.x, y: mobileBox.y},
                {x: mobileBox.x + mobileBox.width, y: mobileBox.y},
                {x: mobileBox.x, y: mobileBox.y + mobileBox.height},
                {x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height}
            ];

            const ctx = canvas.getContext('2d');
            ctx.save();
            handles.forEach(h => {
                ctx.beginPath();
                ctx.arc(h.x, h.y, handleRadius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 3;
                ctx.stroke();
            });
            ctx.restore();
        }

        function getHandleAt(x, y) {
            if (!mobileBox) return null;
            const handleRadius = 22;
            const handles = [
                {name: 'tl', x: mobileBox.x, y: mobileBox.y},
                {name: 'tr', x: mobileBox.x + mobileBox.width, y: mobileBox.y},
                {name: 'bl', x: mobileBox.x, y: mobileBox.y + mobileBox.height},
                {name: 'br', x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height}
            ];
            for (const h of handles) {
                const dist = Math.hypot(x - h.x, y - h.y);
                if (dist <= handleRadius + 5) {
                    return h.name;
                }
            }
            return null;
        }

        function handleTouchStart(e) {
            if (window.innerWidth >= 1024) return;
            if (!currentImage) return;

            if (e.touches.length === 2) {
                e.preventDefault();
                isPinching = true;
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                lastTouchDist = Math.hypot(dx, dy);
                return;
            }

            if (e.touches.length === 1 && mobileBox) {
                const pos = getCanvasCoordinates(e.touches[0].clientX, e.touches[0].clientY);
                const handle = getHandleAt(pos.x, pos.y);
                if (handle) {
                    e.preventDefault();
                    isDraggingHandle = true;
                    activeHandle = handle;
                    initialTouchPos = pos;
                    initialBoxState = { ...mobileBox };
                }
            }
        }

        function handleTouchMove(e) {
            if (window.innerWidth >= 1024) return;

            if (isPinching && e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.hypot(dx, dy);
                if (lastTouchDist > 0) {
                    const scale = dist / lastTouchDist;
                    mobileZoom = Math.max(1, Math.min(4, mobileZoom * scale));
                    canvas.style.transform = `scale(${mobileZoom})`;
                    canvas.style.transformOrigin = 'top left';
                }
                lastTouchDist = dist;
                return;
            }

            if (isDraggingHandle && e.touches.length === 1) {
                e.preventDefault();
                const pos = getCanvasCoordinates(e.touches[0].clientX, e.touches[0].clientY);
                const dx = pos.x - initialTouchPos.x;
                const dy = pos.y - initialTouchPos.y;

                if (activeHandle === 'tl') {
                    mobileBox.x = Math.min(initialBoxState.x + dx, initialBoxState.x + initialBoxState.width);
                    mobileBox.y = Math.min(initialBoxState.y + dy, initialBoxState.y + initialBoxState.height);
                    mobileBox.width = Math.max(20, initialBoxState.x + initialBoxState.width - mobileBox.x);
                    mobileBox.height = Math.max(20, initialBoxState.y + initialBoxState.height - mobileBox.y);
                } else if (activeHandle === 'tr') {
                    mobileBox.y = Math.min(initialBoxState.y + dy, initialBoxState.y + initialBoxState.height);
                    mobileBox.width = Math.max(20, initialBoxState.width + dx);
                    mobileBox.height = Math.max(20, initialBoxState.y + initialBoxState.height - mobileBox.y);
                } else if (activeHandle === 'bl') {
                    mobileBox.x = Math.min(initialBoxState.x + dx, initialBoxState.x + initialBoxState.width);
                    mobileBox.width = Math.max(20, initialBoxState.x + initialBoxState.width - mobileBox.x);
                    mobileBox.height = Math.max(20, initialBoxState.height + dy);
                } else if (activeHandle === 'br') {
                    mobileBox.width = Math.max(20, initialBoxState.width + dx);
                    mobileBox.height = Math.max(20, initialBoxState.height + dy);
                }

                drawMobileBox();
                return;
            }
        }

        function handleTouchEnd(e) {
            if (window.innerWidth >= 1024) return;
            if (e.touches.length === 0) {
                if (isDraggingHandle || isPinching) {
                    lastTouchTime = Date.now();
                }
                isDraggingHandle = false;
                activeHandle = null;
                initialTouchPos = null;
                initialBoxState = null;
                if (isPinching) {
                    isPinching = false;
                    lastTouchDist = 0;
                }
            } else if (e.touches.length === 1 && isPinching) {
                isPinching = false;
                lastTouchDist = 0;
            }
        }

        function applyMobileBox() {
            if (!mobileBox) return;
            applyEffect(mobileBox.x, mobileBox.y, mobileBox.width, mobileBox.height);
            mobileBox = null;
            mobileZoom = 1;
            canvas.style.transform = '';
            canvas.style.transformOrigin = '';
            const applySection = document.getElementById('mobileApplySection');
            if (applySection) applySection.classList.add('hidden');
        }

        function showMobileApply() {
            const applySection = document.getElementById('mobileApplySection');
            if (applySection) applySection.classList.remove('hidden');
        }

        async function handleFile(file) {
            if (!file) return;
            pageThumbnails = [];
            thumbViewPage = 0;
            thumbGenToken++;
            
            if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                await handlePDF(file);
                return;
            }
            
            if (!file.type.startsWith('image/')) {
                alert(toolMsg('tool.alert.invalidFile'));
                return;
            }
            
            // Store original file information
            originalFileName = file.name;
            originalFileType = file.type;
            
            isPDF = false;
            pdfDoc = null;
            document.getElementById('pageControls').classList.add('hidden');
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = async function() {
                    originalImage = img;
                    currentImage = img;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    showWorkspace();
                    await layoutCanvasView(img.width, img.height);
                    initHistoryState();
                    generateImageThumbnail();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        async function handlePDF(file) {
            try {
                // Store original file information FIRST
                originalFileName = file.name;
                originalFileType = file.type;
                
                const arrayBuffer = await file.arrayBuffer();
                pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                isPDF = true;
                totalPages = pdfDoc.numPages;
                currentPage = 1;
                
                // Initialize redacted pages array
                redactedPages = new Array(totalPages).fill(null);
                
                document.getElementById('pageControls').classList.remove('hidden');
                updatePageInfo();
                showWorkspace();
                await renderPDFPage(1);
                generatePDFThumbnails();
                showNotification(toolMsg('tool.notify.pdfLoaded'));
            } catch (error) {
                console.error('Error loading PDF:', error);
                alert(toolMsg('tool.alert.pdfError'));
            }
        }

        async function renderPDFPage(pageNum) {
            if (!pdfDoc) return;
            try {
                const page = await pdfDoc.getPage(pageNum);
                const baseViewport = page.getViewport({ scale: 1 });

                document.getElementById('canvasWrapper').classList.remove('hidden');
                updateContainerForAspectRatio(baseViewport.width, baseViewport.height);
                await waitForLayout();

                const { width: cw, height: ch } = getCanvasContainerSize();
                const fitScale = Math.min(cw / baseViewport.width, ch / baseViewport.height);
                const scale = Math.min(Math.max(fitScale, 1), 2.5);
                const viewport = page.getViewport({ scale });
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                if (redactedPages[pageNum - 1]) {
                    await loadImageFromDataUrl(redactedPages[pageNum - 1]);
                    await layoutCanvasView(canvas.width, canvas.height);
                } else {
                    await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                    await syncCurrentImageFromCanvas();
                    await layoutCanvasView(baseViewport.width * scale, baseViewport.height * scale);
                }

                updatePageInfo();
                initHistoryState();
                if (isPDF && pageThumbnails.length >= pageNum && canvas.width > 0) {
                    pageThumbnails[pageNum - 1] = canvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY);
                    updateThumbnailImages();
                } else {
                    renderThumbnailSidebar();
                }
            } catch (error) {
                console.error('Error rendering PDF page:', error);
            }
        }

        async function goToPage(pageNum) {
            if (pageNum < 1 || pageNum > totalPages || pageNum === currentPage) {
                renderThumbnailSidebar();
                return;
            }
            currentPage = pageNum;
            await renderPDFPage(currentPage);
            ensureThumbViewForPage(currentPage);
            renderThumbnailSidebar();
        }

        function getThumbViewport(page) {
            const base = page.getViewport({ scale: 1 });
            const scale = Math.min(THUMB_MAX_WIDTH / base.width, 0.12);
            return page.getViewport({ scale });
        }

        async function createPDFThumbnailData(pageNum, targetCanvas) {
            if (redactedPages[pageNum - 1]) return redactedPages[pageNum - 1];
            const page = await pdfDoc.getPage(pageNum);
            const viewport = getThumbViewport(page);
            targetCanvas.width = viewport.width;
            targetCanvas.height = viewport.height;
            const tCtx = targetCanvas.getContext('2d', { alpha: false });
            tCtx.fillStyle = '#ffffff';
            tCtx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);
            await page.render({ canvasContext: tCtx, viewport }).promise;
            return targetCanvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY);
        }

        function updateThumbnailImages() {
            const list = document.getElementById('thumbnailList');
            if (!list) return;
            list.querySelectorAll('.thumb-item').forEach(function(item) {
                const pageNum = parseInt(item.dataset.page, 10);
                const data = pageThumbnails[pageNum - 1];
                if (!data) return;
                const img = item.querySelector('img');
                if (img && img.getAttribute('src') !== data) {
                    img.src = data;
                }
                item.classList.remove('thumb-loading');
            });
        }

        async function ensureThumbnailsForRange(startPage, endPage) {
            if (!pdfDoc || !isPDF) return;
            const token = thumbGenToken;
            const pending = [];
            for (let p = startPage; p <= endPage; p++) {
                if (!pageThumbnails[p - 1]) pending.push(p);
            }
            if (!pending.length) return;

            if (pending.includes(1) && currentPage === 1 && canvas.width > 0) {
                pageThumbnails[0] = canvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY);
                updateThumbnailImages();
                const idx = pending.indexOf(1);
                if (idx !== -1) pending.splice(idx, 1);
            }
            if (!pending.length) {
                scheduleBackgroundThumbnails(token);
                return;
            }

            await Promise.all(pending.map(async function(pageNum) {
                if (token !== thumbGenToken) return;
                try {
                    const tCanvas = document.createElement('canvas');
                    pageThumbnails[pageNum - 1] = await createPDFThumbnailData(pageNum, tCanvas);
                } catch (err) {
                    console.error('Thumbnail error page', pageNum, err);
                }
            }));

            if (token === thumbGenToken) updateThumbnailImages();
            scheduleBackgroundThumbnails(token);
        }

        function scheduleBackgroundThumbnails(token) {
            const missing = [];
            for (let i = 1; i <= totalPages; i++) {
                if (!pageThumbnails[i - 1]) missing.push(i);
            }
            if (!missing.length || token !== thumbGenToken) return;

            const run = async function() {
                const sharedCanvas = document.createElement('canvas');
                for (let j = 0; j < missing.length; j++) {
                    if (token !== thumbGenToken) return;
                    const pageNum = missing[j];
                    if (pageThumbnails[pageNum - 1]) continue;
                    try {
                        pageThumbnails[pageNum - 1] = await createPDFThumbnailData(pageNum, sharedCanvas);
                        if (token === thumbGenToken) updateThumbnailImages();
                    } catch (err) {
                        console.error('Thumbnail error page', pageNum, err);
                    }
                    await new Promise(function(r) { setTimeout(r, 0); });
                }
            };

            if (typeof requestIdleCallback !== 'undefined') {
                requestIdleCallback(function() { run(); }, { timeout: 1500 });
            } else {
                setTimeout(run, 30);
            }
        }

        function generatePDFThumbnails() {
            pageThumbnails = new Array(totalPages).fill(null);
            if (canvas.width > 0) {
                pageThumbnails[0] = canvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY);
            }
            ensureThumbViewForPage(currentPage);
            renderThumbnailSidebar();
        }

        function generateImageThumbnail() {
            pageThumbnails = [canvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY)];
            thumbViewPage = 0;
            renderThumbnailSidebar();
        }

        function ensureThumbViewForPage(pageNum) {
            thumbViewPage = Math.floor((pageNum - 1) / THUMBS_PER_VIEW);
        }

        function changeThumbView(delta) {
            const totalViews = Math.ceil(pageThumbnails.length / THUMBS_PER_VIEW);
            thumbViewPage = Math.max(0, Math.min(thumbViewPage + delta, totalViews - 1));
            renderThumbnailSidebar();
        }

        function renderThumbnailSidebar() {
            const list = document.getElementById('thumbnailList');
            const pagination = document.getElementById('thumbPagination');
            if (!list) return;

            if (!pageThumbnails.length) {
                list.innerHTML = '';
                if (pagination) pagination.classList.add('hidden');
                return;
            }

            const total = pageThumbnails.length;
            const startIdx = thumbViewPage * THUMBS_PER_VIEW;
            const endIdx = Math.min(startIdx + THUMBS_PER_VIEW, total);

            list.innerHTML = '';
            for (let i = startIdx; i < endIdx; i++) {
                const pageNum = i + 1;
                const item = document.createElement('div');
                item.className = 'thumb-item' + (pageNum === currentPage ? ' active' : '');
                item.dataset.page = String(pageNum);

                const img = document.createElement('img');
                img.alt = 'Page ' + pageNum;
                if (pageThumbnails[i]) {
                    img.src = pageThumbnails[i];
                } else {
                    item.classList.add('thumb-loading');
                }

                const label = document.createElement('span');
                label.className = 'thumb-label';
                label.textContent = String(pageNum);

                item.appendChild(img);
                item.appendChild(label);
                item.addEventListener('click', () => {
                    if (isPDF) goToPage(pageNum);
                });
                list.appendChild(item);
            }

            const totalViews = Math.ceil(total / THUMBS_PER_VIEW);
            if (pagination) {
                if (total > THUMBS_PER_VIEW) {
                    pagination.classList.remove('hidden');
                    const prevBtn = document.getElementById('thumbViewPrev');
                    const nextBtn = document.getElementById('thumbViewNext');
                    const info = document.getElementById('thumbViewInfo');
                    if (prevBtn) prevBtn.disabled = thumbViewPage === 0;
                    if (nextBtn) nextBtn.disabled = thumbViewPage >= totalViews - 1;
                    if (info) info.textContent = (startIdx + 1) + '-' + endIdx + ' / ' + total;
                } else {
                    pagination.classList.add('hidden');
                }
            }

            if (isPDF && pdfDoc && total > 0) {
                ensureThumbnailsForRange(startIdx + 1, endIdx);
            }
        }

        function updateCurrentPageThumbnail() {
            if (!pageThumbnails.length || currentPage - 1 >= pageThumbnails.length) return;
            pageThumbnails[currentPage - 1] = canvas.toDataURL('image/jpeg', THUMB_JPEG_QUALITY);
            renderThumbnailSidebar();
        }

        async function changePage(delta) {
            const newPage = currentPage + delta;
            if (newPage >= 1 && newPage <= totalPages) {
                await goToPage(newPage);
            }
        }

        function updatePageInfo() {
            document.getElementById('currentPage').textContent = currentPage;
            document.getElementById('totalPages').textContent = totalPages;
            document.getElementById('prevPage').disabled = currentPage === 1;
            document.getElementById('nextPage').disabled = currentPage === totalPages;
        }

        function showWorkspace() {
            document.getElementById('workspace').classList.add('tool-active');
            document.getElementById('canvasWrapper').classList.remove('hidden');
            document.getElementById('emptyState').classList.add('hidden');
            document.getElementById('historyControls').classList.remove('hidden');
            document.getElementById('effectControls').classList.remove('hidden');
            document.getElementById('exportSection').classList.remove('hidden');
            updateHistoryButtons();
        }

        function loadImageFromDataUrl(dataUrl) {
            return new Promise(function(resolve, reject) {
                const img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    currentImage = img;
                    originalImage = img;
                    resolve();
                };
                img.onerror = reject;
                img.src = dataUrl;
            });
        }

        function syncCurrentImageFromCanvas() {
            return loadImageFromDataUrl(canvas.toDataURL('image/png'));
        }

        function initHistoryState() {
            if (!canvas || !canvas.width) {
                historyStack = [];
                redoStack = [];
                updateHistoryButtons();
                return;
            }
            historyStack = [canvas.toDataURL('image/png')];
            redoStack = [];
            updateHistoryButtons();
        }

        function commitHistoryState() {
            if (!canvas || !canvas.width) return;
            const state = canvas.toDataURL('image/png');
            historyStack.push(state);
            redoStack = [];
            updateHistoryButtons();
            const img = new Image();
            img.onload = function() {
                currentImage = img;
                if (isPDF) {
                    saveRedactedPage();
                } else if (pageThumbnails.length) {
                    updateCurrentPageThumbnail();
                }
            };
            img.src = state;
        }

        function getAvailablePreviewSize() {
            const workspace = document.getElementById('workspace');
            const toolActive = workspace && workspace.classList.contains('tool-active');
            const isDesktop = window.innerWidth >= 1024;
            const leftW = isDesktop ? (toolActive ? 180 : 280) : 0;
            const sideW = isDesktop ? 280 : 0;
            const maxW = isDesktop
                ? Math.min(window.innerWidth - leftW - sideW - 64, 960)
                : Math.min(window.innerWidth * 0.92, 960);
            const maxH = Math.min(window.innerHeight - 100, window.innerHeight * 0.78);
            return { maxW: Math.max(maxW, 280), maxH: Math.max(maxH, 280) };
        }

        function getCanvasContainerSize() {
            const container = document.getElementById('canvasWrapper');
            if (!container) return { width: 800, height: 600 };
            const pad = 24;
            let w = container.clientWidth - pad;
            let h = container.clientHeight - pad;

            if (w < 100 || h < 100) {
                const { maxW, maxH } = getAvailablePreviewSize();
                w = maxW - pad;
                h = maxH - pad;
            }

            return {
                width: Math.max(w, 200),
                height: Math.max(h, 200)
            };
        }

        function updateContainerForAspectRatio(aspectW, aspectH) {
            const container = document.getElementById('canvasWrapper');
            if (!container || !aspectW || !aspectH) return;

            const { maxW, maxH } = getAvailablePreviewSize();
            let boxW = maxW;
            let boxH = boxW * (aspectH / aspectW);
            if (boxH > maxH) {
                boxH = maxH;
                boxW = boxH * (aspectW / aspectH);
            }
            container.style.width = '100%';
            container.style.maxWidth = Math.round(boxW) + 'px';
            container.style.height = Math.max(Math.round(boxH), 300) + 'px';
            container.style.marginLeft = 'auto';
            container.style.marginRight = 'auto';
        }

        function fitCanvasToContainer() {
            const container = document.getElementById('canvasWrapper');
            if (!container || !canvas || !canvas.width || !canvas.height) return;

            canvas.style.transform = '';
            canvas.style.transformOrigin = '';

            const { width: cw, height: ch } = getCanvasContainerSize();
            const scale = Math.min(cw / canvas.width, ch / canvas.height);
            const displayW = Math.min(Math.max(1, Math.floor(canvas.width * scale)), cw);
            const displayH = Math.min(Math.max(1, Math.floor(canvas.height * scale)), ch);

            canvas.style.width = displayW + 'px';
            canvas.style.height = displayH + 'px';
            centerCanvasInView();
        }

        function centerCanvasInView() {
            const container = document.getElementById('canvasWrapper');
            if (!container) return;
            requestAnimationFrame(function() {
                container.scrollLeft = Math.max(0, (container.scrollWidth - container.clientWidth) / 2);
                container.scrollTop = Math.max(0, (container.scrollHeight - container.clientHeight) / 2);
            });
        }

        function waitForLayout() {
            return new Promise(function(resolve) {
                requestAnimationFrame(function() {
                    requestAnimationFrame(resolve);
                });
            });
        }

        async function layoutCanvasView(aspectW, aspectH) {
            document.getElementById('canvasWrapper').classList.remove('hidden');
            updateContainerForAspectRatio(aspectW, aspectH);
            await waitForLayout();
            fitCanvasToContainer();
            await waitForLayout();
            centerCanvasInView();
        }

        function enableManualSelect() {
            if (!currentImage) {
                alert(toolMsg('tool.alert.uploadFirst'));
                return;
            }
            canvas.style.cursor = 'crosshair';
            showNotification(toolMsg('tool.notify.selectArea'));
        }

        function handleCanvasMouseDown(e) {
            if (historyLock || !currentImage) return;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            selectionStart = { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
        }

        function handleCanvasMouseMove(e) {
            if (historyLock || !selectionStart || !currentImage) return;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            selectionEnd = { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
            
            // Only redraw the base image and selection preview
            ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
            drawSelectionPreview(selectionStart, selectionEnd);
        }

        function handleCanvasMouseUp(e) {
            if (historyLock || !selectionStart || !currentImage) return;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            selectionEnd = { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
            
            const x = Math.min(selectionStart.x, selectionEnd.x);
            const y = Math.min(selectionStart.y, selectionEnd.y);
            const width = Math.abs(selectionEnd.x - selectionStart.x);
            const height = Math.abs(selectionEnd.y - selectionStart.y);
            
            // Clear selection state first
            selectionStart = null;
            selectionEnd = null;
            
            if (width > 10 && height > 10) {
                // Redraw canvas to remove selection preview before applying effect
                redrawCanvas();
                
                // Apply effect immediately after clearing the preview
                applyEffect(x, y, width, height);
                showNotification(toolMsg('tool.notify.effectApplied'));
            } else {
                // Just redraw if selection is too small
                redrawCanvas();
            }
        }

        function drawSelectionPreview(start, end) {
            const x = Math.min(start.x, end.x);
            const y = Math.min(start.y, end.y);
            const width = Math.abs(end.x - start.x);
            const height = Math.abs(end.y - start.y);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.strokeRect(x, y, width, height);
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
            ctx.fillRect(x, y, width, height);
        }

        function applyEffect(x, y, width, height) {
            const effectType = document.getElementById('effectType').value;
            
            switch(effectType) {
                case 'pixelate':
                    applyPixelate(x, y, width, height, DEFAULT_EFFECT_INTENSITY);
                    break;
                case 'blur':
                    applyBlur(x, y, width, height, DEFAULT_BLUR_INTENSITY);
                    break;
                case 'blackout':
                    applyBlackout(x, y, width, height);
                    break;
            }

            commitHistoryState();
        }

        function saveRedactedPage() {
            const pageData = canvas.toDataURL('image/png');
            redactedPages[currentPage - 1] = pageData;
            updateCurrentPageThumbnail();
        }

        /**
         * Compress and resize image data for optimal PDF export.
         * Limits max width to control file size while maintaining readability.
         */
        function compressImageData(dataUrl, maxWidth, quality) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = function() {
                    let w = img.width;
                    let h = img.height;

                    // Scale down if exceeds max width
                    if (w > maxWidth) {
                        h = Math.round((maxWidth / w) * h);
                        w = maxWidth;
                    }

                    const cvs = document.createElement('canvas');
                    cvs.width = w;
                    cvs.height = h;
                    const c = cvs.getContext('2d');
                    c.drawImage(img, 0, 0, w, h);

                    resolve(cvs.toDataURL('image/jpeg', quality));
                };
                img.onerror = function(err) {
                    reject(err);
                };
                img.src = dataUrl;
            });
        }

        function applyPixelate(x, y, width, height, blockSize) {
            const effectiveBlockSize = Math.max(blockSize, 20);
            const startX = Math.floor(x);
            const startY = Math.floor(y);
            const areaWidth = Math.ceil(width);
            const areaHeight = Math.ceil(height);

            const imageData = ctx.getImageData(startX, startY, areaWidth, areaHeight);
            const data = imageData.data;
            const w = imageData.width;
            const h = imageData.height;

            // Parse selected fill color
            let customR = 0, customG = 0, customB = 0;
            if (hasCustomColorSelected) {
                const hex = fillColor.replace('#', '');
                customR = parseInt(hex.substr(0, 2), 16);
                customG = parseInt(hex.substr(2, 2), 16);
                customB = parseInt(hex.substr(4, 2), 16);
            }

            for (let blockY = 0; blockY < h; blockY += effectiveBlockSize) {
                for (let blockX = 0; blockX < w; blockX += effectiveBlockSize) {
                    let r = 0, g = 0, b = 0, count = 0;
                    const endY = Math.min(blockY + effectiveBlockSize, h);
                    const endX = Math.min(blockX + effectiveBlockSize, w);

                    if (hasCustomColorSelected) {
                        r = customR;
                        g = customG;
                        b = customB;
                    } else {
                        // Calculate average color for the block
                        for (let dy = blockY; dy < endY; dy++) {
                            for (let dx = blockX; dx < endX; dx++) {
                                const idx = (dy * w + dx) * 4;
                                r += data[idx];
                                g += data[idx + 1];
                                b += data[idx + 2];
                                count++;
                            }
                        }
                        if (count === 0) continue;
                        r = Math.round(r / count);
                        g = Math.round(g / count);
                        b = Math.round(b / count);
                    }

                    // Apply color to entire block
                    for (let dy = blockY; dy < endY; dy++) {
                        for (let dx = blockX; dx < endX; dx++) {
                            const idx = (dy * w + dx) * 4;
                            data[idx] = r;
                            data[idx + 1] = g;
                            data[idx + 2] = b;
                            data[idx + 3] = 255; // Full opacity
                        }
                    }
                }
            }
            ctx.putImageData(imageData, startX, startY);
        }

        function applyBlur(x, y, width, height, radius) {
            const effectiveRadius = Math.max(radius, 5);
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = Math.ceil(width);
            tempCanvas.height = Math.ceil(height);
            const tempCtx = tempCanvas.getContext('2d');

            // Fill with selected color first
            tempCtx.fillStyle = fillColor;
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

            // Draw the selection area on top
            tempCtx.drawImage(canvas, Math.floor(x), Math.floor(y), Math.ceil(width), Math.ceil(height), 0, 0, Math.ceil(width), Math.ceil(height));

            // Apply blur filter
            tempCtx.filter = `blur(${effectiveRadius}px)`;
            tempCtx.drawImage(tempCanvas, 0, 0);

            // Draw blurred result back to main canvas
            ctx.drawImage(tempCanvas, 0, 0, Math.ceil(width), Math.ceil(height), Math.floor(x), Math.floor(y), Math.ceil(width), Math.ceil(height));
        }

        function applyBlackout(x, y, width, height) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(width), Math.ceil(height));
        }

        let canvasResizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(canvasResizeTimer);
            canvasResizeTimer = setTimeout(async function() {
                if (!canvas || !canvas.width || !currentImage) return;
                await layoutCanvasView(canvas.width, canvas.height);
            }, 150);
        });

        function redrawCanvas() {
            if (!currentImage) return;
            // Use drawImage directly without clearRect to avoid flickering
            ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
        }

        function undo() {
            if (historyLock || historyStack.length <= 1) {
                if (!historyLock) showNotification(toolMsg('tool.notify.nothingUndo'));
                return;
            }
            redoStack.push(historyStack.pop());
            restoreCanvasState(historyStack[historyStack.length - 1]);
            updateHistoryButtons();
            showNotification(toolMsg('tool.notify.undone'));
        }

        function redo() {
            if (historyLock || redoStack.length === 0) {
                if (!historyLock) showNotification(toolMsg('tool.notify.nothingRedo'));
                return;
            }
            const nextState = redoStack.pop();
            historyStack.push(nextState);
            restoreCanvasState(nextState);
            updateHistoryButtons();
            showNotification(toolMsg('tool.notify.redone'));
        }

        function restoreCanvasState(dataUrl) {
            const version = ++restoreVersion;
            historyLock = true;
            const img = new Image();
            img.onload = function() {
                if (version !== restoreVersion) return;
                currentImage = img;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                historyLock = false;
                if (isPDF) {
                    saveRedactedPage();
                } else if (pageThumbnails.length) {
                    updateCurrentPageThumbnail();
                }
            };
            img.onerror = function() {
                if (version === restoreVersion) historyLock = false;
            };
            img.src = dataUrl;
        }

        function updateHistoryButtons() {
            const undoBtn = document.getElementById('undoBtn');
            const redoBtn = document.getElementById('redoBtn');
            if (undoBtn) undoBtn.disabled = historyStack.length <= 1;
            if (redoBtn) redoBtn.disabled = redoStack.length === 0;
        }

        async function resetImage() {
            if (!originalImage) return;
            
            if (isPDF && pdfDoc) {
                redactedPages[currentPage - 1] = null;
                await renderPDFPage(currentPage);
                await regenerateSinglePDFThumbnail(currentPage);
            } else {
                currentImage = originalImage;
                redrawCanvas();
                updateCurrentPageThumbnail();
            }

            initHistoryState();

            showNotification(toolMsg('tool.notify.reset'));
        }

        async function regenerateSinglePDFThumbnail(pageNum) {
            if (!pdfDoc || pageNum < 1 || pageNum > totalPages) return;
            try {
                const tCanvas = document.createElement('canvas');
                pageThumbnails[pageNum - 1] = await createPDFThumbnailData(pageNum, tCanvas);
                updateThumbnailImages();
            } catch (err) {
                console.error('Error regenerating thumbnail:', err);
            }
        }

        function downloadImage() {
            if (!canvas) return;

            // Handle PDF export
            if (isPDF && pdfDoc) {
                exportAsPDF();
                return;
            }

            showProgress(0);
            
            // Determine output format based on original file type
            let mimeType = 'image/png';
            let extension = 'png';
            let quality = 0.92; // High quality with good compression for JPEG
            
            if (originalFileType) {
                // Use the same format as the original file
                if (originalFileType.includes('jpeg') || originalFileType.includes('jpg')) {
                    mimeType = 'image/jpeg';
                    extension = 'jpg';
                    quality = 0.92; // High quality JPEG compression (92% quality)
                } else if (originalFileType.includes('webp')) {
                    mimeType = 'image/webp';
                    extension = 'webp';
                    quality = 0.85; // WebP provides better compression at lower quality values
                } else if (originalFileType.includes('gif')) {
                    mimeType = 'image/gif';
                    extension = 'gif';
                    quality = 1.0; // GIF doesn't support quality parameter
                }
                // Default to PNG for other formats (PNG uses lossless compression)
            }
            
            // Use original filename for export (preserves all characters including non-English)
            const fileName = originalFileName;
            
            // For PNG, use high compression level
            if (mimeType === 'image/png') {
                canvas.toBlob(function(blob) {
                    // Create a File object with the exact name
                    const file = new File([blob], fileName, { type: mimeType });
                    
                    // Use URL.createObjectURL with the File object
                    const url = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    
                    // Additional attributes for better compatibility
                    link.setAttribute('download', fileName);
                    link.setAttribute('filename', fileName);
                    
                    document.body.appendChild(link);
                    
                    // Trigger download
                    link.click();
                    
                    // Cleanup
                    setTimeout(() => {
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                    }, 100);
                    
                    showNotification(toolMsg('tool.notify.downloaded', { name: fileName }));
                    hideProgress();
                }, mimeType);
            } else {
                // For JPEG/WebP, use quality parameter for high compression
                canvas.toBlob(function(blob) {
                    // Create a File object with the exact name
                    const file = new File([blob], fileName, { type: mimeType });

                    // Use URL.createObjectURL with the File object
                    const url = URL.createObjectURL(file);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;

                    // Additional attributes for better compatibility
                    link.setAttribute('download', fileName);
                    link.setAttribute('filename', fileName);

                    document.body.appendChild(link);

                    // Trigger download
                    link.click();

                    // Cleanup
                    setTimeout(() => {
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                    }, 100);

                    showNotification(toolMsg('tool.notify.downloaded', { name: fileName }));
                    hideProgress();
                }, mimeType, quality);
            }
        }

        async function exportAsPDF() {
            try {
                showNotification(toolMsg('tool.notify.generatingPdf'));

                const { jsPDF } = window.jspdf;

                // Dynamic quality settings based on page count to keep file under 2MB
                // while maintaining the highest possible clarity
                let MAX_RENDER_WIDTH, JPEG_QUALITY;
                if (totalPages <= 8) {
                    MAX_RENDER_WIDTH = 1200; JPEG_QUALITY = 0.85;
                } else if (totalPages <= 16) {
                    MAX_RENDER_WIDTH = 900;  JPEG_QUALITY = 0.82;
                } else if (totalPages <= 30) {
                    MAX_RENDER_WIDTH = 700;  JPEG_QUALITY = 0.78;
                } else if (totalPages <= 50) {
                    MAX_RENDER_WIDTH = 500;  JPEG_QUALITY = 0.74;
                } else {
                    MAX_RENDER_WIDTH = 400;  JPEG_QUALITY = 0.70;
                }

                // Gather original page dimensions and orientation from the source PDF
                const pageInfos = [];
                for (let i = 0; i < totalPages; i++) {
                    const page = await pdfDoc.getPage(i + 1);
                    const viewport = page.getViewport({ scale: 1 });
                    const isLandscape = viewport.width > viewport.height;
                    pageInfos.push({
                        width: viewport.width,
                        height: viewport.height,
                        isLandscape: isLandscape
                    });
                }

                // Create PDF with first page's original dimensions and orientation
                const firstPage = pageInfos[0];
                const pdf = new jsPDF({
                    compress: true,
                    unit: 'pt',
                    format: [Math.min(firstPage.width, firstPage.height), Math.max(firstPage.width, firstPage.height)],
                    orientation: firstPage.isLandscape ? 'landscape' : 'portrait'
                });

                // Save current page first
                saveRedactedPage();

                for (let i = 0; i < totalPages; i++) {
                    showProgress(Math.round(((i + 1) / totalPages) * 100));

                    if (i > 0) {
                        // Add page with the same original dimensions and orientation as the source
                        const pageInfo = pageInfos[i];
                        pdf.addPage(
                            [Math.min(pageInfo.width, pageInfo.height), Math.max(pageInfo.width, pageInfo.height)],
                            pageInfo.isLandscape ? 'landscape' : 'portrait'
                        );
                    }

                    let pageData = redactedPages[i];
                    const pageInfo = pageInfos[i];

                    if (!pageData) {
                        // Render original page with optimized resolution
                        const page = await pdfDoc.getPage(i + 1);
                        // Calculate scale to target ~1200px render width
                        const scale = MAX_RENDER_WIDTH / pageInfo.width;
                        const viewport = page.getViewport({ scale: scale });

                        const tempCanvas = document.createElement('canvas');
                        tempCanvas.width = viewport.width;
                        tempCanvas.height = viewport.height;
                        const tempCtx = tempCanvas.getContext('2d');

                        await page.render({ canvasContext: tempCtx, viewport: viewport }).promise;

                        // Export as JPEG with optimized quality
                        pageData = tempCanvas.toDataURL('image/jpeg', JPEG_QUALITY);
                    } else {
                        // Compress redacted (PNG) pages
                        if (pageData.startsWith('data:image/png')) {
                            pageData = await compressImageData(pageData, MAX_RENDER_WIDTH, JPEG_QUALITY);
                        }
                    }

                    // Add image to fill the entire page exactly
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();
                    pdf.addImage(pageData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
                }

                const fileName = originalFileName || 'document.pdf';
                const pdfBlob = pdf.output('blob', { compression: 'FAST' });
                const url = URL.createObjectURL(pdfBlob);

                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();

                setTimeout(() => {
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }, 100);

                showNotification(toolMsg('tool.notify.pdfExported', { name: fileName }));
                hideProgress();
            } catch (error) {
                console.error('Error exporting PDF:', error);
                alert(toolMsg('tool.alert.pdfExportError'));
            }
        }

        // Download progress bar controls
        function showProgress(percent) {
            const progress = document.getElementById('downloadProgress');
            const bar = document.getElementById('downloadProgressBar');
            progress.classList.remove('hidden');
            bar.style.width = percent + '%';
        }

        function hideProgress() {
            const progress = document.getElementById('downloadProgress');
            const bar = document.getElementById('downloadProgressBar');
            showProgress(100);
            setTimeout(() => {
                progress.classList.add('hidden');
                bar.style.width = '0%';
            }, 400);
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            notification.textContent = message;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.3s';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        window.undo = undo;
        window.redo = redo;
        window.changePage = changePage;
        window.clearFillColor = clearFillColor;
        window.resetImage = resetImage;
        window.downloadImage = downloadImage;
        window.applyMobileBox = applyMobileBox;
    