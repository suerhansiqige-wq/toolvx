const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace mobileSelectionPanel with mobileApplySection
html = html.replace(
  /<div id="mobileSelectionPanel"[\s\S]*?<div id="exportSection"/,
  '<div id="mobileApplySection" class="lg:hidden hidden">\n                        <button onclick="applyMobileBox()" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">\n                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\n                            <span>应用打码</span>\n                        </button>\n                    </div>\n                    <div id="exportSection"'
);

// Replace old mobile JS with new mobile JS
const oldJS = `let mobileSelection = null;

        function handleMobileCanvasClick(e) {
            if (window.innerWidth >= 1024) return;
            if (!currentImage) return;
            
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            
            const clickX = (e.clientX - rect.left) * scaleX;
            const clickY = (e.clientY - rect.top) * scaleY;
            
            const w = canvas.width * 0.3;
            const h = canvas.height * 0.3;
            
            mobileSelection = {
                x: Math.max(0, Math.min(clickX - w / 2, canvas.width - w)),
                y: Math.max(0, Math.min(clickY - h / 2, canvas.height - h)),
                width: Math.min(w, canvas.width),
                height: Math.min(h, canvas.height)
            };
            
            updateMobileSelectionUI();
            drawMobileSelectionPreview();
            showMobileSelectionControls();
        }

        function drawMobileSelectionPreview() {
            if (!mobileSelection) return;
            redrawCanvas();
            drawSelectionPreview(
                {x: mobileSelection.x, y: mobileSelection.y},
                {x: mobileSelection.x + mobileSelection.width, y: mobileSelection.y + mobileSelection.height}
            );
        }

        function updateMobileSelectionUI() {
            if (!mobileSelection) return;
            document.getElementById('msX').value = Math.round(mobileSelection.x);
            document.getElementById('msY').value = Math.round(mobileSelection.y);
            document.getElementById('msW').value = Math.round(mobileSelection.width);
            document.getElementById('msH').value = Math.round(mobileSelection.height);
        }

        function updateMobileSelectionFromInputs() {
            if (!mobileSelection) return;
            mobileSelection.x = parseInt(document.getElementById('msX').value) || 0;
            mobileSelection.y = parseInt(document.getElementById('msY').value) || 0;
            mobileSelection.width = parseInt(document.getElementById('msW').value) || 100;
            mobileSelection.height = parseInt(document.getElementById('msH').value) || 100;
            drawMobileSelectionPreview();
        }

        function applyMobileSelection() {
            if (!mobileSelection) return;
            applyEffect(mobileSelection.x, mobileSelection.y, mobileSelection.width, mobileSelection.height);
            hideMobileSelectionControls();
            mobileSelection = null;
        }

        function cancelMobileSelection() {
            hideMobileSelectionControls();
            mobileSelection = null;
            redrawCanvas();
        }

        function showMobileSelectionControls() {
            const panel = document.getElementById('mobileSelectionPanel');
            if (panel) panel.classList.remove('hidden');
        }

        function hideMobileSelectionControls() {
            const panel = document.getElementById('mobileSelectionPanel');
            if (panel) panel.classList.add('hidden');
        }`;

const newJS = `let mobileBox = null;
        let isDraggingHandle = false;
        let activeHandle = null;
        let initialTouchPos = null;
        let initialBoxState = null;
        let mobileZoom = 1.0;
        let lastTouchDist = 0;
        let isPinching = false;

        function getCanvasCoordinates(clientX, clientY) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
        }

        function handleMobileCanvasClick(e) {
            if (window.innerWidth >= 1024) return;
            if (!currentImage || isDraggingHandle) return;
            const pos = getCanvasCoordinates(e.clientX, e.clientY);
            const handleSize = 44 * (canvas.width / canvas.getBoundingClientRect().width);
            if (mobileBox) {
                const handles = {
                    'tl': {x: mobileBox.x, y: mobileBox.y},
                    'tr': {x: mobileBox.x + mobileBox.width, y: mobileBox.y},
                    'bl': {x: mobileBox.x, y: mobileBox.y + mobileBox.height},
                    'br': {x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height}
                };
                let clickedHandle = null;
                for (const [name, h] of Object.entries(handles)) {
                    if (Math.abs(pos.x - h.x) < handleSize && Math.abs(pos.y - h.y) < handleSize) { clickedHandle = name; break; }
                }
                if (clickedHandle) return;
                if (pos.x >= mobileBox.x && pos.x <= mobileBox.x + mobileBox.width && pos.y >= mobileBox.y && pos.y <= mobileBox.y + mobileBox.height) return;
            }
            const boxSize = Math.min(150, canvas.width * 0.25, canvas.height * 0.25);
            mobileBox = {
                x: Math.max(0, Math.min(pos.x - boxSize / 2, canvas.width - boxSize)),
                y: Math.max(0, Math.min(pos.y - boxSize / 2, canvas.height - boxSize)),
                width: boxSize, height: boxSize
            };
            showMobileApply();
            drawMobileBox();
        }

        function drawMobileBox() {
            if (!mobileBox) return;
            redrawCanvas();
            const handleSize = 44 * (canvas.width / canvas.getBoundingClientRect().width);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.strokeRect(mobileBox.x, mobileBox.y, mobileBox.width, mobileBox.height);
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
            ctx.fillRect(mobileBox.x, mobileBox.y, mobileBox.width, mobileBox.height);
            const handles = [
                {x: mobileBox.x, y: mobileBox.y},
                {x: mobileBox.x + mobileBox.width, y: mobileBox.y},
                {x: mobileBox.x, y: mobileBox.y + mobileBox.height},
                {x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height}
            ];
            handles.forEach(h => {
                ctx.beginPath();
                ctx.arc(h.x, h.y, handleSize / 2, 0, Math.PI * 2);
                ctx.fillStyle = '#3b82f6';
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
            });
        }

        function getHandleAt(x, y) {
            if (!mobileBox) return null;
            const handleSize = 44 * (canvas.width / canvas.getBoundingClientRect().width);
            const handles = { 'tl': {x: mobileBox.x, y: mobileBox.y}, 'tr': {x: mobileBox.x + mobileBox.width, y: mobileBox.y}, 'bl': {x: mobileBox.x, y: mobileBox.y + mobileBox.height}, 'br': {x: mobileBox.x + mobileBox.width, y: mobileBox.y + mobileBox.height} };
            for (const [name, h] of Object.entries(handles)) {
                if (Math.abs(x - h.x) < handleSize && Math.abs(y - h.y) < handleSize) return name;
            }
            return null;
        }

        function handleTouchStart(e) {
            if (window.innerWidth >= 1024) return;
            if (!currentImage) return;
            if (e.touches.length === 2) {
                isPinching = true;
                lastTouchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                e.preventDefault();
            } else if (e.touches.length === 1 && mobileBox) {
                const pos = getCanvasCoordinates(e.touches[0].clientX, e.touches[0].clientY);
                const handle = getHandleAt(pos.x, pos.y);
                if (handle) {
                    isDraggingHandle = true;
                    activeHandle = handle;
                    initialTouchPos = {x: pos.x, y: pos.y};
                    initialBoxState = {...mobileBox};
                    e.preventDefault();
                }
            }
        }

        function handleTouchMove(e) {
            if (window.innerWidth >= 1024) return;
            if (e.touches.length === 2 && isPinching) {
                const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                const newZoom = Math.max(1, Math.min(4, mobileZoom * (dist / lastTouchDist)));
                if (Math.abs(newZoom - mobileZoom) > 0.05) {
                    mobileZoom = newZoom;
                    lastTouchDist = dist;
                    const wrapper = document.getElementById('canvasWrapper');
                    if (wrapper) { wrapper.style.transform = 'scale(' + mobileZoom + ')'; wrapper.style.transformOrigin = 'center center'; }
                }
                e.preventDefault();
            } else if (e.touches.length === 1 && isDraggingHandle && mobileBox && initialTouchPos && initialBoxState) {
                const pos = getCanvasCoordinates(e.touches[0].clientX, e.touches[0].clientY);
                const dx = pos.x - initialTouchPos.x;
                const dy = pos.y - initialTouchPos.y;
                switch (activeHandle) {
                    case 'tl': mobileBox.x = Math.min(initialBoxState.x + dx, initialBoxState.x + initialBoxState.width - 20); mobileBox.y = Math.min(initialBoxState.y + dy, initialBoxState.y + initialBoxState.height - 20); mobileBox.width = Math.max(20, initialBoxState.width - dx); mobileBox.height = Math.max(20, initialBoxState.height - dy); break;
                    case 'tr': mobileBox.y = Math.min(initialBoxState.y + dy, initialBoxState.y + initialBoxState.height - 20); mobileBox.width = Math.max(20, initialBoxState.width + dx); mobileBox.height = Math.max(20, initialBoxState.height - dy); break;
                    case 'bl': mobileBox.x = Math.min(initialBoxState.x + dx, initialBoxState.x + initialBoxState.width - 20); mobileBox.width = Math.max(20, initialBoxState.width - dx); mobileBox.height = Math.max(20, initialBoxState.height + dy); break;
                    case 'br': mobileBox.width = Math.max(20, initialBoxState.width + dx); mobileBox.height = Math.max(20, initialBoxState.height + dy); break;
                }
                drawMobileBox();
                e.preventDefault();
            }
        }

        function handleTouchEnd(e) {
            if (window.innerWidth >= 1024) return;
            if (e.touches.length === 0) { isDraggingHandle = false; activeHandle = null; isPinching = false; }
            else if (e.touches.length === 1) { isPinching = false; }
        }

        function applyMobileBox() {
            if (!mobileBox) return;
            applyEffect(mobileBox.x, mobileBox.y, mobileBox.width, mobileBox.height);
            mobileBox = null;
            const section = document.getElementById('mobileApplySection');
            if (section) section.classList.add('hidden');
            redrawCanvas();
            const wrapper = document.getElementById('canvasWrapper');
            if (wrapper) { wrapper.style.transform = ''; }
            mobileZoom = 1.0;
        }

        function showMobileApply() {
            const section = document.getElementById('mobileApplySection');
            if (section) section.classList.remove('hidden');
        }`;

if (html.includes(oldJS)) {
    html = html.replace(oldJS, newJS);
    fs.writeFileSync('index.html', html);
    console.log('Done');
} else {
    console.log('Old JS not found');
}
