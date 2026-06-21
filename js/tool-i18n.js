(function() {
    'use strict';

    var MESSAGES = {
        en: {
            'tool.intro.badge': 'Redaction Tool · Not an Editor',
            'tool.intro.title': '100% Local Data Redaction',
            'tool.intro.lead': 'Mask and remove sensitive information from images and PDFs before you share. This is <strong>not</strong> a photo or document editor — it only redacts private data.',
            'tool.intro.trust1': 'Mask IDs, faces, and account numbers',
            'tool.intro.trust2': 'Works Offline',
            'tool.intro.trust3': 'No Data Leaves Your Device',
            'tool.intro.trust4': 'Multi-Page PDF Support',
            'tool.pages.title': 'Pages',
            'tool.thumb.prev': 'Previous thumbnails',
            'tool.thumb.next': 'Next thumbnails',
            'tool.thumb.loading': 'Generating previews…',
            'tool.page.prev': '← Previous',
            'tool.page.label': 'Page',
            'tool.page.of': 'of',
            'tool.page.next': 'Next →',
            'tool.drop.title': 'Drop your file here',
            'tool.drop.subtitle': 'or click to browse files',
            'tool.drop.formats': 'Supports JPG, PNG, GIF, WebP, PDF',
            'tool.float.title': 'Open next file',
            'tool.float.hint': 'Drop image or PDF here',
            'tool.color.label': 'Fill Color',
            'tool.color.clear': 'Clear Color',
            'tool.color.palette': 'Color palette',
            'tool.history.undo': 'Undo',
            'tool.history.redo': 'Redo',
            'tool.effect.label': 'Effect Type',
            'tool.effect.pixelate': 'Mosaic (Pixelate)',
            'tool.effect.blur': 'Gaussian Blur',
            'tool.effect.blackout': 'Black Out',
            'tool.effect.reset': 'Reset to Original',
            'tool.mobile.apply': 'Apply Redaction',
            'tool.export.download': 'Download Redacted File',
            'tool.notify.pdfLoaded': 'PDF loaded successfully',
            'tool.notify.selectArea': 'Click and drag to select an area',
            'tool.notify.effectApplied': 'Effect applied',
            'tool.notify.nothingUndo': 'Nothing to undo',
            'tool.notify.undone': 'Undone',
            'tool.notify.nothingRedo': 'Nothing to redo',
            'tool.notify.redone': 'Redone',
            'tool.notify.reset': 'Reset to original',
            'tool.notify.generatingPdf': 'Generating PDF…',
            'tool.notify.downloaded': 'Downloaded: {name}',
            'tool.notify.pdfExported': 'PDF exported: {name}',
            'tool.alert.invalidFile': 'Please upload a valid image file (JPG, PNG, GIF, WebP) or PDF',
            'tool.alert.pdfError': 'Error loading PDF file.',
            'tool.alert.uploadFirst': 'Please upload a file first',
            'tool.alert.pdfExportError': 'Error exporting PDF. Please try again.'
        },
        zh: {
            'tool.intro.badge': '脱敏工具 · 非编辑器',
            'tool.intro.title': '100% 本地数据脱敏',
            'tool.intro.lead': '分享前遮盖并移除图片与 PDF 中的敏感信息。这<strong>不是</strong>图片或文档编辑工具，仅用于数据脱敏。',
            'tool.intro.trust1': '遮盖身份证、人脸与账号',
            'tool.intro.trust2': '支持离线使用',
            'tool.intro.trust3': '数据不离开您的设备',
            'tool.intro.trust4': '支持多页 PDF',
            'tool.pages.title': '页面',
            'tool.thumb.prev': '上一组缩略图',
            'tool.thumb.next': '下一组缩略图',
            'tool.thumb.loading': '正在生成预览…',
            'tool.page.prev': '← 上一页',
            'tool.page.label': '第',
            'tool.page.of': '页，共',
            'tool.page.next': '下一页 →',
            'tool.drop.title': '将文件拖放到这里',
            'tool.drop.subtitle': '或点击浏览文件',
            'tool.drop.formats': '支持 JPG、PNG、GIF、WebP、PDF',
            'tool.float.title': '打开新文件',
            'tool.float.hint': '拖放图片或 PDF',
            'tool.color.label': '填充颜色',
            'tool.color.clear': '清除颜色',
            'tool.color.palette': '调色板',
            'tool.history.undo': '撤销',
            'tool.history.redo': '重做',
            'tool.effect.label': '效果类型',
            'tool.effect.pixelate': '马赛克（像素化）',
            'tool.effect.blur': '高斯模糊',
            'tool.effect.blackout': '完全遮盖',
            'tool.effect.reset': '恢复原图',
            'tool.mobile.apply': '应用脱敏',
            'tool.export.download': '下载脱敏文件',
            'tool.notify.pdfLoaded': 'PDF 加载成功',
            'tool.notify.selectArea': '点击并拖动以框选区域',
            'tool.notify.effectApplied': '效果已应用',
            'tool.notify.nothingUndo': '没有可撤销的操作',
            'tool.notify.undone': '已撤销',
            'tool.notify.nothingRedo': '没有可重做的操作',
            'tool.notify.redone': '已重做',
            'tool.notify.reset': '已恢复原图',
            'tool.notify.generatingPdf': '正在生成 PDF…',
            'tool.notify.downloaded': '已下载：{name}',
            'tool.notify.pdfExported': 'PDF 已导出：{name}',
            'tool.alert.invalidFile': '请上传有效的图片（JPG、PNG、GIF、WebP）或 PDF 文件',
            'tool.alert.pdfError': 'PDF 文件加载失败。',
            'tool.alert.uploadFirst': '请先上传文件',
            'tool.alert.pdfExportError': 'PDF 导出失败，请重试。'
        }
    };

    function detectToolLang() {
        var list = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || 'en'];
        for (var i = 0; i < list.length; i++) {
            var code = String(list[i] || '').toLowerCase();
            if (code.indexOf('zh') === 0) return 'zh';
        }
        return 'en';
    }

    var toolLang = detectToolLang();

    function t(key, vars) {
        var dict = MESSAGES[toolLang] || MESSAGES.en;
        var text = dict[key];
        if (text == null) text = MESSAGES.en[key];
        if (text == null) text = key;
        if (vars) {
            Object.keys(vars).forEach(function(k) {
                text = text.replace('{' + k + '}', vars[k]);
            });
        }
        return text;
    }

    function applyToolI18n(root) {
        root = root || document.getElementById('workspace');
        if (!root) return;

        root.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (!key) return;
            el.textContent = t(key);
        });

        root.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            if (!key) return;
            el.innerHTML = t(key);
        });

        root.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-aria');
            if (!key) return;
            el.setAttribute('aria-label', t(key));
        });

        root.querySelectorAll('[data-i18n-title]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-title');
            if (!key) return;
            el.setAttribute('title', t(key));
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        applyToolI18n();
    });

    window.toolT = t;
    window.applyToolI18n = applyToolI18n;
    window.toolLang = toolLang;
})();
