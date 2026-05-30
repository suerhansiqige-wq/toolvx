/**
 * Internationalization (i18n) System for toolvx.com
 * Auto-detects user's preferred language and translates the page
 * Hidden mode - no visible language switcher
 */

// Supported languages configuration
const SUPPORTED_LANGUAGES = {
    'en': {
        name: 'English',
        flag: '🇺',
        direction: 'ltr'
    },
    'zh': {
        name: '中文',
        flag: '🇨',
        direction: 'ltr'
    },
    'es': {
        name: 'Español',
        flag: '🇪',
        direction: 'ltr'
    },
    'fr': {
        name: 'Français',
        flag: '🇫🇷',
        direction: 'ltr'
    },
    'de': {
        name: 'Deutsch',
        flag: '🇩🇪',
        direction: 'ltr'
    },
    'ja': {
        name: '日本語',
        flag: '🇯🇵',
        direction: 'ltr'
    },
    'ko': {
        name: '한국어',
        flag: '🇰',
        direction: 'ltr'
    },
    'pt': {
        name: 'Português',
        flag: '🇵🇹',
        direction: 'ltr'
    },
    'ru': {
        name: 'Русский',
        flag: '🇷',
        direction: 'ltr'
    },
    'ar': {
        name: 'العربية',
        flag: '🇸🇦',
        direction: 'rtl'
    }
};

// Translations database
const TRANSLATIONS = {
    // Navigation
    'nav.home': {
        'en': 'Home',
        'zh': '首页',
        'es': 'Inicio',
        'fr': 'Accueil',
        'de': 'Startseite',
        'ja': 'ホーム',
        'ko': '홈',
        'pt': 'Início',
        'ru': 'Главная',
        'ar': 'الرئيسية'
    },
    'nav.blog': {
        'en': 'Blog',
        'zh': '博客',
        'es': 'Blog',
        'fr': 'Blog',
        'de': 'Blog',
        'ja': 'ブログ',
        'ko': '블로그',
        'pt': 'Blog',
        'ru': 'Блог',
        'ar': 'المدونة'
    },
    'nav.features': {
        'en': 'Features',
        'zh': '功能',
        'es': 'Características',
        'fr': 'Fonctionnalités',
        'de': 'Funktionen',
        'ja': '機能',
        'ko': '기능',
        'pt': 'Recursos',
        'ru': 'Возможности',
        'ar': 'الميزات'
    },
    'nav.faq': {
        'en': 'FAQ',
        'zh': '常见问题',
        'es': 'Preguntas frecuentes',
        'fr': 'FAQ',
        'de': 'FAQ',
        'ja': 'よくある質問',
        'ko': '자주 묻는 질문',
        'pt': 'Perguntas frequentes',
        'ru': 'Часто задаваемые вопросы',
        'ar': 'الأسئلة الشائعة'
    },
    
    // Hero Section
    'hero.title': {
        'en': '100% Local Image & PDF Redaction<br/>Zero Server Upload Required',
        'zh': '100% 本地图片与PDF编辑<br/>无需上传到服务器',
        'es': 'Edición de imágenes y PDF 100% local<br/>Sin necesidad de subir al servidor',
        'fr': 'Édition d\'images et PDF 100% locale<br/>Aucun téléchargement requis',
        'de': '100% lokale Bild- und PDF-Bearbeitung<br/>Kein Server-Upload erforderlich',
        'ja': '100% ローカル画像とPDF編集<br/>サーバーアップロード不要',
        'ko': '100% 로컬 이미지 및 PDF 편집<br/>서버 업로드 불필요',
        'pt': 'Edição de imagens e PDF 100% local<br/>Sem necessidade de upload',
        'ru': '100% локальное редактирование изображений и PDF<br/>Загрузка на сервер не требуется',
        'ar': 'تحرير الصور وملفات PDF محليًا بنسبة 100٪<br/>لا حاجة للتحميل على الخادم'
    },
    
    'hero.description': {
        'en': 'Protect your privacy when sharing sensitive documents. Blur faces, mask ID numbers, and redact confidential information entirely in your browser.',
        'zh': '分享敏感文档时保护您的隐私。在浏览器中模糊面部、遮盖身份证号码并编辑机密信息。',
        'es': 'Proteja su privacidad al compartir documentos confidenciales. Desenfoque rostros, oculte números de identificación y edite información confidencial completamente en su navegador.',
        'fr': 'Protégez votre vie privée lors du partage de documents sensibles. Floutez les visages, masquez les numéros d\'identification et éditez les informations confidentielles entièrement dans votre navigateur.',
        'de': 'Schützen Sie Ihre Privatsphäre beim Teilen sensibler Dokumente. Verwischen Sie Gesichter, maskieren Sie Ausweisnummern und bearbeiten Sie vertrauliche Informationen vollständig in Ihrem Browser.',
        'ja': '機密文書を共有する際にプライバシーを保護します。ブラウザ内で顔をぼかし、ID番号をマスクし、機密情報を完全に編集できます。',
        'ko': '민감한 문서를 공유할 때 개인 정보를 보호하세요. 브라우저에서 얼굴 흐리기, ID 번호 마스킹 및 기밀 정보 편집을 완전히 수행합니다.',
        'pt': 'Proteja sua privacidade ao compartilhar documentos confidenciais. Desfoque rostos, mascare números de identificação e edite informações confidenciais inteiramente no seu navegador.',
        'ru': 'Защитите свою конфиденциальность при обмене чувствительными документами. Размывайте лица, маскируйте идентификационные номера и редактируйте конфиденциальную информацию прямо в браузере.',
        'ar': 'احمِ خصوصيتك عند مشاركة المستندات الحساسة. طمس الوجوه، وإخفاء أرقام الهوية، وتحرير المعلومات السرية بالكامل في متصفحك.'
    },
    
    // Security Badges
    'badge.offline': {
        'en': 'Works Offline',
        'zh': '离线工作',
        'es': 'Funciona sin conexión',
        'fr': 'Fonctionne hors ligne',
        'de': 'Funktioniert offline',
        'ja': 'オフラインで動作',
        'ko': '오프라인 작동',
        'pt': 'Funciona offline',
        'ru': 'Работает офлайн',
        'ar': 'يعمل دون اتصال'
    },
    
    'badge.no_upload': {
        'en': 'No Data Leaves Your Device',
        'zh': '数据不离开设备',
        'es': 'Los datos no salen de su dispositivo',
        'fr': 'Aucune donnée ne quitte votre appareil',
        'de': 'Keine Daten verlassen Ihr Gerät',
        'ja': 'データはデバイスから流出しません',
        'ko': '데이터가 장치를 떠나지 않음',
        'pt': 'Nenhum dado sai do seu dispositivo',
        'ru': 'Данные не покидают ваше устройство',
        'ar': 'لا تغادر البيانات جهازك'
    },
    
    'badge.manual': {
        'en': 'Manual Selection Only',
        'zh': '仅手动选择',
        'es': 'Solo selección manual',
        'fr': 'Sélection manuelle uniquement',
        'de': 'Nur manuelle Auswahl',
        'ja': '手動選択のみ',
        'ko': '수동 선택만',
        'pt': 'Apenas seleção manual',
        'ru': 'Только ручной выбор',
        'ar': 'الاختيار اليدوي فقط'
    },
    
    'badge.pdf_support': {
        'en': 'Multi-Page PDF Support',
        'zh': '多页PDF支持',
        'es': 'Soporte para PDF de varias páginas',
        'fr': 'Support PDF multi-pages',
        'de': 'Mehrseitige PDF-Unterstützung',
        'ja': '複数ページのPDF対応',
        'ko': '다중 페이지 PDF 지원',
        'pt': 'Suporte a PDF de várias páginas',
        'ru': 'Поддержка многостраничных PDF',
        'ar': 'دعم ملفات PDF متعددة الصفحات'
    },
    
    // Workspace
    'workspace.title': {
        'en': 'Document Redaction Workspace',
        'zh': '文档编辑工作区',
        'es': 'Espacio de trabajo de edición de documentos',
        'fr': 'Espace de travail d\'édition de documents',
        'de': 'Dokumentenbearbeitungsarbeitsbereich',
        'ja': '文書編集ワークスペース',
        'ko': '문서 편집 작업 공간',
        'pt': 'Espaço de trabalho de edição de documentos',
        'ru': 'Рабочая область редактирования документов',
        'ar': 'مساحة عمل تحرير المستندات'
    },
    
    'workspace.subtitle': {
        'en': 'Professional privacy protection for your sensitive documents',
        'zh': '为您的敏感文档提供专业隐私保护',
        'es': 'Protección profesional de la privacidad para sus documentos confidenciales',
        'fr': 'Protection professionnelle de la vie privée pour vos documents sensibles',
        'de': 'Professioneller Datenschutz für Ihre sensiblen Dokumente',
        'ja': '機密文書のためのプロフェッショナルなプライバシー保護',
        'ko': '민감한 문서를 위한 전문적인 개인 정보 보호',
        'pt': 'Proteção profissional de privacidade para seus documentos confidenciais',
        'ru': 'Профессиональная защита конфиденциальности для ваших чувствительных документов',
        'ar': 'حماية الخصوصية المهنية لمستنداتك الحساسة'
    },
    
    // Drop Zone
    'dropzone.text': {
        'en': 'Drag & drop files here or click to browse',
        'zh': '拖放文件到此处或点击浏览',
        'es': 'Arrastre y suelte archivos aquí o haga clic para explorar',
        'fr': 'Glissez-déposez des fichiers ici ou cliquez pour parcourir',
        'de': 'Dateien hierher ziehen und ablegen oder klicken zum Durchsuchen',
        'ja': 'ファイルをここにドラッグ＆ドロップまたはクリックして参照',
        'ko': '파일을 여기로 드래그 앤 드롭하거나 클릭하여 찾아보기',
        'pt': 'Arraste e solte arquivos aqui ou clique para navegar',
        'ru': 'Перетащите файлы сюда или нажмите для выбора',
        'ar': 'اسحب وأفلت الملفات هنا أو انقر للاستعراض'
    },
    
    'dropzone.supported': {
        'en': 'Supported formats: JPG, PNG, GIF, WebP, PDF',
        'zh': '支持的格式：JPG、PNG、GIF、WebP、PDF',
        'es': 'Formatos admitidos: JPG, PNG, GIF, WebP, PDF',
        'fr': 'Formats pris en charge : JPG, PNG, GIF, WebP, PDF',
        'de': 'Unterstützte Formate: JPG, PNG, GIF, WebP, PDF',
        'ja': '対応フォーマット：JPG、PNG、GIF、WebP、PDF',
        'ko': '지원 형식: JPG, PNG, GIF, WebP, PDF',
        'pt': 'Formatos suportados: JPG, PNG, GIF, WebP, PDF',
        'ru': 'Поддерживаемые форматы: JPG, PNG, GIF, WebP, PDF',
        'ar': 'التنسيقات المدعومة: JPG, PNG, GIF, WebP, PDF'
    },
    
    // Footer
    'footer.description': {
        'en': 'Free, secure, and private image editing tools. Your files never leave your device.',
        'zh': '免费、安全、私密的图像编辑工具。您的文件绝不会离开您的设备。',
        'es': 'Herramientas gratuitas, seguras y privadas de edición de imágenes. Sus archivos nunca salen de su dispositivo.',
        'fr': 'Outils gratuits, sécurisés et privés d\'édition d\'images. Vos fichiers ne quittent jamais votre appareil.',
        'de': 'Kostenlose, sichere und private Bildbearbeitungstools. Ihre Dateien verlassen niemals Ihr Gerät.',
        'ja': '無料で安全なプライベート画像編集ツール。ファイルはデバイスから流出しません。',
        'ko': '무료, 안전하고 비공개 이미지 편집 도구. 파일이 장치를 떠나지 않습니다.',
        'pt': 'Ferramentas gratuitas, seguras e privadas de edição de imagens. Seus arquivos nunca saem do seu dispositivo.',
        'ru': 'Бесплатные, безопасные и конфиденциальные инструменты редактирования изображений. Ваши файлы никогда не покидают ваше устройство.',
        'ar': 'أدوات مجانية وآمنة وخاصة لتحرير الصور. ملفاتك لا تغادر جهازك أبدًا.'
    },
    
    'footer.quickLinks': {
        'en': 'Quick Links',
        'zh': '快速链接',
        'es': 'Enlaces rápidos',
        'fr': 'Liens rapides',
        'de': 'Schnelllinks',
        'ja': 'クイックリンク',
        'ko': '빠른 링크',
        'pt': 'Links rápidos',
        'ru': 'Быстрые ссылки',
        'ar': 'روابط سريعة'
    },
    
    'footer.popularArticles': {
        'en': 'Popular Articles',
        'zh': '热门文章',
        'es': 'Artículos populares',
        'fr': 'Articles populaires',
        'de': 'Beliebte Artikel',
        'ja': '人気の記事',
        'ko': '인기 기사',
        'pt': 'Artigos populares',
        'ru': 'Популярные статьи',
        'ar': 'المقالات الشائعة'
    },
    
    'footer.legal': {
        'en': 'Legal',
        'zh': '法律',
        'es': 'Legal',
        'fr': 'Légal',
        'de': 'Rechtliches',
        'ja': '法的情報',
        'ko': '법적',
        'pt': 'Jurídico',
        'ru': 'Юридическая информация',
        'ar': 'قانوني'
    },
    
    'footer.copyright': {
        'en': 'Free online image and PDF editing tools',
        'zh': '免费在线图像和PDF编辑工具',
        'es': 'Herramientas gratuitas de edición de imágenes y PDF en línea',
        'fr': 'Outils gratuits d\'édition d\'images et PDF en ligne',
        'de': 'Kostenlose Online-Tools zur Bild- und PDF-Bearbeitung',
        'ja': '無料オンライン画像とPDF編集ツール',
        'ko': '무료 온라인 이미지 및 PDF 편집 도구',
        'pt': 'Ferramentas gratuitas de edição de imagens e PDF online',
        'ru': 'Бесплатные онлайн-инструменты для редактирования изображений и PDF',
        'ar': 'أدوات مجانية لتحرير الصور وملفات PDF عبر الإنترنت'
    },
    
    'footer.tagline': {
        'en': 'Privacy-first photo editing. No uploads. No tracking. 100% secure.',
        'zh': '隐私优先的照片编辑。无上传。无跟踪。100%安全。',
        'es': 'Edición de fotos con prioridad de privacidad. Sin cargas. Sin rastreo. 100% seguro.',
        'fr': 'Édition photo axée sur la confidentialité. Aucun téléchargement. Aucun suivi. 100% sécurisé.',
        'de': 'Datenschutzorientierte Fotobearbeitung. Keine Uploads. Kein Tracking. 100% sicher.',
        'ja': 'プライバシー優先の写真編集。アップロードなし。追跡なし。100%安全。',
        'ko': '개인 정보 우선 사진 편집. 업로드 없음. 추적 없음. 100% 안전.',
        'pt': 'Edição de fotos com foco na privacidade. Sem uploads. Sem rastreamento. 100% seguro.',
        'ru': 'Редактирование фото с приоритетом конфиденциальности. Без загрузок. Без отслеживания. 100% безопасно.',
        'ar': 'تحرير الصور مع الأولوية للخصوصية. بدون تحميلات. بدون تتبع. آمن بنسبة 100٪.'
    }
};

// Detect user's preferred language
function detectUserLanguage() {
    // Try multiple methods to detect language
    
    // Method 1: Check URL parameter (highest priority)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && SUPPORTED_LANGUAGES[langParam]) {
        return langParam;
    }
    
    // Method 2: Check localStorage (user preference)
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && SUPPORTED_LANGUAGES[savedLang]) {
        return savedLang;
    }
    
    // Method 3: Check browser language settings
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
        // Get base language code (e.g., 'en-US' -> 'en')
        const baseLang = browserLang.split('-')[0].toLowerCase();
        if (SUPPORTED_LANGUAGES[baseLang]) {
            return baseLang;
        }
    }
    
    // Method 4: Check navigator.languages array
    if (navigator.languages && navigator.languages.length > 0) {
        for (let lang of navigator.languages) {
            const baseLang = lang.split('-')[0].toLowerCase();
            if (SUPPORTED_LANGUAGES[baseLang]) {
                return baseLang;
            }
        }
    }
    
    // Default to English
    return 'en';
}

// Apply translations to the page
function applyTranslations(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = SUPPORTED_LANGUAGES[language].direction;
    
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
            // Check if translation contains HTML
            const translation = TRANSLATIONS[key][language];
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        } else if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
            // Fallback to English
            const translation = TRANSLATIONS[key]['en'];
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferred_language', language);
    
    // Log detected language (hidden mode - console only)
    console.log(`🌐 Language detected: ${SUPPORTED_LANGUAGES[language].flag} ${SUPPORTED_LANGUAGES[language].name} (${language})`);
}

// Initialize i18n system
function initI18n() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const detectedLang = detectUserLanguage();
            applyTranslations(detectedLang);
        });
    } else {
        const detectedLang = detectUserLanguage();
        applyTranslations(detectedLang);
    }
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        detectUserLanguage,
        applyTranslations,
        SUPPORTED_LANGUAGES,
        TRANSLATIONS
    };
}

// Auto-initialize
initI18n();
