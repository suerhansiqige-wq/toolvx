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
        flag: '🇷',
        direction: 'ltr'
    },
    'de': {
        name: 'Deutsch',
        flag: '🇩🇪',
        direction: 'ltr'
    },
    'ja': {
        name: '日本語',
        flag: '🇵',
        direction: 'ltr'
    },
    'ko': {
        name: '한국어',
        flag: '',
        direction: 'ltr'
    },
    'pt': {
        name: 'Português',
        flag: '🇹',
        direction: 'ltr'
    },
    'ru': {
        name: 'Русский',
        flag: '🇷',
        direction: 'ltr'
    },
    'ar': {
        name: 'العربية',
        flag: '🇦',
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
    
    'nav.contact': {
        'en': 'Contact',
        'zh': '联系我们',
        'es': 'Contacto',
        'fr': 'Contact',
        'de': 'Kontakt',
        'ja': 'お問い合わせ',
        'ko': '문의하기',
        'pt': 'Contato',
        'ru': 'Контакты',
        'ar': 'اتصل بنا'
    },
    
    // Hero Section
    'hero.title': {
        'en': '100% Local Image & PDF Redaction<br/>Zero Server Upload Required',
        'zh': '100% 本地图片与PDF脱敏<br/>无需上传到服务器',
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
        'zh': 'ToolVX 是一款专注于企业与个人数据清洗的免费在线脱敏工具。我们通过安全的本地化处理提供即时高效的图片脱敏与 PDF 脱敏，实现终极的隐私保护。您可以直接在浏览器中轻松实现人脸模糊、证件遮蔽，并执行不可逆的敏感数据移除。全方位保障照片匿名化并完成文档安全净化，不留任何服务器追踪痕迹。',
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
        'zh': '文档脱敏工作区',
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
    
    // Upload Section
    'upload.prompt': {
        'en': 'Upload an image or PDF to start redacting',
        'zh': '上传图片或PDF开始脱敏',
        'es': 'Suba una imagen o PDF para comenzar a editar',
        'fr': 'Téléchargez une image ou un PDF pour commencer l\'édition',
        'de': 'Laden Sie ein Bild oder PDF hoch, um mit der Bearbeitung zu beginnen',
        'ja': '編集を開始するには画像またはPDFをアップロードしてください',
        'ko': '편집을 시작하려면 이미지 또는 PDF를 업로드하세요',
        'pt': 'Carregue uma imagem ou PDF para começar a editar',
        'ru': 'Загрузите изображение или PDF, чтобы начать редактирование',
        'ar': 'قم بتحميل صورة أو ملف PDF لبدء التحرير'
    },
    
    'dropzone.title': {
        'en': 'Drop your file here',
        'zh': '将文件拖放到此处',
        'es': 'Suelte su archivo aquí',
        'fr': 'Déposez votre fichier ici',
        'de': 'Legen Sie Ihre Datei hier ab',
        'ja': 'ファイルをここにドロップ',
        'ko': '파일을 여기에 드롭하세요',
        'pt': 'Solte seu arquivo aqui',
        'ru': 'Перетащите файл сюда',
        'ar': 'أسقط ملفك هنا'
    },
    
    'dropzone.or': {
        'en': 'or click to browse files',
        'zh': '或点击浏览文件',
        'es': 'o haga clic para explorar archivos',
        'fr': 'ou cliquez pour parcourir les fichiers',
        'de': 'oder klicken Sie zum Durchsuchen von Dateien',
        'ja': 'またはクリックしてファイルを参照',
        'ko': '또는 클릭하여 파일 찾아보기',
        'pt': 'ou clique para procurar arquivos',
        'ru': 'или нажмите, чтобы выбрать файлы',
        'ar': 'أو انقر لاستعراض الملفات'
    },
    
    // How to Use Section
    'howto.title': {
        'en': 'How to Use PrivacyMask Pro',
        'zh': '如何使用 PrivacyMask Pro',
        'es': 'Cómo usar PrivacyMask Pro',
        'fr': 'Comment utiliser PrivacyMask Pro',
        'de': 'So verwenden Sie PrivacyMask Pro',
        'ja': 'PrivacyMask Proの使い方',
        'ko': 'PrivacyMask Pro 사용 방법',
        'pt': 'Como usar o PrivacyMask Pro',
        'ru': 'Как использовать PrivacyMask Pro',
        'ar': 'كيفية استخدام PrivacyMask Pro'
    },
    
    'howto.subtitle': {
        'en': 'Follow these simple steps to protect your privacy when sharing sensitive documents',
        'zh': '按照这些简单步骤在分享敏感文档时保护您的隐私',
        'es': 'Siga estos sencillos pasos para proteger su privacidad al compartir documentos confidenciales',
        'fr': 'Suivez ces étapes simples pour protéger votre vie privée lors du partage de documents sensibles',
        'de': 'Befolgen Sie diese einfachen Schritte, um Ihre Privatsphäre beim Teilen sensibler Dokumente zu schützen',
        'ja': '機密文書を共有する際にプライバシーを保護するための簡単な手順に従ってください',
        'ko': '민감한 문서를 공유할 때 개인 정보를 보호하기 위한 간단한 단계를 따르세요',
        'pt': 'Siga estes passos simples para proteger sua privacidade ao compartilhar documentos confidenciais',
        'ru': 'Следуйте этим простым шагам, чтобы защитить свою конфиденциальность при обмене чувствительными документами',
        'ar': 'اتبع هذه الخطوات البسيطة لحماية خصوصيتك عند مشاركة المستندات الحساسة'
    },
    
    // How to Use Steps
    'step1.title': {
        'en': 'Upload Your File',
        'zh': '上传您的文件',
        'es': 'Suba su archivo',
        'fr': 'Téléchargez votre fichier',
        'de': 'Laden Sie Ihre Datei hoch',
        'ja': 'ファイルをアップロード',
        'ko': '파일 업로드',
        'pt': 'Carregue seu arquivo',
        'ru': 'Загрузите файл',
        'ar': 'قم بتحميل ملفك'
    },
    
    'step1.desc': {
        'en': 'Click the upload area or drag and drop your image (JPG, PNG, GIF, WebP) or PDF file. All processing happens locally in your browser.',
        'zh': '点击上传区域或拖放您的图片（JPG、PNG、GIF、WebP）或PDF文件。所有处理都在浏览器中本地进行。',
        'es': 'Haga clic en el área de carga o arrastre y suelte su imagen (JPG, PNG, GIF, WebP) o archivo PDF. Todo el procesamiento ocurre localmente en su navegador.',
        'fr': 'Cliquez sur la zone de téléchargement ou glissez-déposez votre image (JPG, PNG, GIF, WebP) ou fichier PDF. Tout le traitement se fait localement dans votre navigateur.',
        'de': 'Klicken Sie auf den Upload-Bereich oder ziehen Sie Ihr Bild (JPG, PNG, GIF, WebP) oder PDF-Datei per Drag & Drop. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
        'ja': 'アップロード領域をクリックするか、画像（JPG、PNG、GIF、WebP）またはPDFファイルをドラッグ＆ドロップします。すべての処理はブラウザでローカルに行われます。',
        'ko': '업로드 영역을 클릭하거나 이미지(JPG, PNG, GIF, WebP) 또는 PDF 파일을 드래그 앤 드롭하세요. 모든 처리는 브라우저에서 로컬로 발생합니다.',
        'pt': 'Clique na área de upload ou arraste e solte sua imagem (JPG, PNG, GIF, WebP) ou arquivo PDF. Todo o processamento ocorre localmente no seu navegador.',
        'ru': 'Нажмите на область загрузки или перетащите изображение (JPG, PNG, GIF, WebP) или файл PDF. Вся обработка происходит локально в вашем браузере.',
        'ar': 'انقر على منطقة التحميل أو اسحب وأفلت صورتك (JPG, PNG, GIF, WebP) أو ملف PDF. تتم جميع المعالجة محليًا في متصفحك.'
    },
    
    'step2.title': {
        'en': 'Choose Color & Effect',
        'zh': '选择颜色和效果',
        'es': 'Elija color y efecto',
        'fr': 'Choisissez couleur et effet',
        'de': 'Wählen Sie Farbe und Effekt',
        'ja': '色と効果を選択',
        'ko': '색상 및 효과 선택',
        'pt': 'Escolha cor e efeito',
        'ru': 'Выберите цвет и эффект',
        'ar': 'اختر اللون والتأثير'
    },
    
    'step2.desc': {
        'en': 'Select a custom color if needed, then choose your effect type: Mosaic (Pixelate), Gaussian Blur, or Black Out. Adjust intensity as desired.',
        'zh': '如果需要选择自定义颜色，然后选择效果类型：马赛克（像素化）、高斯模糊或 blackout。根据需要调整强度。',
        'es': 'Seleccione un color personalizado si es necesario, luego elija su tipo de efecto: Mosaico (Pixelar), Desenfoque Gaussiano o Negro. Ajuste la intensidad según desee.',
        'fr': 'Sélectionnez une couleur personnalisée si nécessaire, puis choisissez votre type d\'effet : Mosaïque (Pixéliser), Flou gaussien ou Noir. Ajustez l\'intensité selon vos souhaits.',
        'de': 'Wählen Sie bei Bedarf eine benutzerdefinierte Farbe und dann Ihren Effekttyp: Mosaik (Verpixeln), Gaußscher Weichzeichner oder Schwarzout. Passen Sie die Intensität nach Wunsch an.',
        'ja': '必要に応じてカスタムカラーを選択し、次に効果タイプを選択します：モザイク（ピクセル化）、ガウスぼかし、またはブラックアウト。必要に応じて強度を調整します。',
        'ko': '필요한 경우 사용자 정의 색상을 선택한 다음 효과 유형을 선하세요: 모자이크(픽셀화), 가우시안 블러 또는 블랙아웃. 원하는 대로 강도를 조정합니다.',
        'pt': 'Selecione uma cor personalizada se necessário, depois escolha seu tipo de efeito: Mosaico (Pixelizar), Desfoque Gaussiano ou Preto. Ajuste a intensidade conforme desejado.',
        'ru': 'При необходимости выберите пользовательский цвет, затем выберите тип эффекта: Мозаика (Пикселизация), Размытие по Гауссу или Затемнение. Настройте интенсивность по желанию.',
        'ar': 'حدد لونًا مخصصًا إذا لزم الأمر، ثم اختر نوع التأثير: فسيفساء (بكسل)، ضبابية غاوسية، أو أسود. اضبط الشدة حسب الرغبة.'
    },
    
    'step3.title': {
        'en': 'Select Area to Redact',
        'zh': '选择要脱敏的区域',
        'es': 'Seleccione área para editar',
        'fr': 'Sélectionnez la zone à éditer',
        'de': 'Bereich zum Bearbeiten auswählen',
        'ja': '編集する領域を選択',
        'ko': '편집할 영역 선',
        'pt': 'Selecione a área para editar',
        'ru': 'Выберите область для редактирования',
        'ar': 'حدد المنطقة للتحرير'
    },
    
    'step3.desc': {
        'en': 'Click "Select Area to Redact" button, then click and drag on the image to select the area you want to mask. Release to apply the effect automatically.',
        'zh': '点击"选择要脱敏的区域"按钮，然后在图像上点击并拖动以选择要遮盖的区域。释放以自动应用效果。',
        'es': 'Haga clic en el botón "Seleccionar área para editar", luego haga clic y arrastre en la imagen para seleccionar el área que desea ocultar. Suelte para aplicar el efecto automáticamente.',
        'fr': 'Cliquez sur le bouton "Sélectionner la zone à éditer", puis cliquez et faites glisser sur l\'image pour sélectionner la zone que vous souhaitez masquer. Relâchez pour appliquer l\'effet automatiquement.',
        'de': 'Klicken Sie auf die Schaltfläche "Bereich zum Bearbeiten auswählen" und klicken und ziehen Sie dann auf dem Bild, um den Bereich auszuwählen, den Sie maskieren möchten. Lassen Sie los, um den Effekt automatisch anzuwenden.',
        'ja': '"編集する領域を選択"ボタンをクリックし、次に画像上でクリックしてドラッグしてマスクする領域を選択します。効果を自動的に適用するには離します。',
        'ko': '"편집할 영역 선" 버튼을 클릭한 다음 이미지에서 클릭하고 드래그하여 마스킹할 영역을 선택하세요. 효과를 자동으로 적용하려면 놓으세요.',
        'pt': 'Clique no botão "Selecionar área para editar", depois clique e arraste na imagem para selecionar a área que deseja mascarar. Solte para aplicar o efeito automaticamente.',
        'ru': 'Нажмите кнопку "Выбрать область для редактирования", затем нажмите и перетащите на изображении, чтобы выбрать область, которую хотите замаскировать. Отпустите, чтобы применить эффект автоматически.',
        'ar': 'انقر فوق زر "تحديد المنطقة للتحرير"، ثم انقر واسحب على الصورة لتحديد المنطقة التي تريد إخفاءها. حرر لتطبيق التأثير تلقائيًا.'
    },
    
    'step4.title': {
        'en': 'Repeat if Needed',
        'zh': '如需要重复操作',
        'es': 'Repita si es necesario',
        'fr': 'Répétez si nécessaire',
        'de': 'Wiederholen Sie bei Bedarf',
        'ja': '必要に応じて繰り返す',
        'ko': '필요하면 반복',
        'pt': 'Repita se necessário',
        'ru': 'Повторите при необходимости',
        'ar': 'كرر إذا لزم الأمر'
    },
    
    'step4.desc': {
        'en': 'You can select multiple areas and apply different effects. Each selection is processed immediately. Use "Reset to Original" to start over.',
        'zh': '您可以选择多个区域并应用不同的效果。每个选择都会立即处理。使用"重置为原始"重新开始。',
        'es': 'Puede seleccionar múltiples áreas y aplicar diferentes efectos. Cada selección se procesa inmediatamente. Use "Restablecer a original" para comenzar de nuevo.',
        'fr': 'Vous pouvez sélectionner plusieurs zones et appliquer différents effets. Chaque sélection est traitée immédiatement. Utilisez "Réinitialiser à l\'original" pour recommencer.',
        'de': 'Sie können mehrere Bereiche auswählen und verschiedene Effekte anwenden. Jede Auswahl wird sofort verarbeitet. Verwenden Sie "Auf Original zurücksetzen", um von vorne zu beginnen.',
        'ja': '複数の領域を選択して異なる効果を適用できます。各選択はすぐに処理されます。「オリジナルにリセット」を使用して最初からやり直します。',
        'ko': '여러 영역을 선택하고 다른 효과를 적용할 수 있습니다. 각 택은 즉시 처리됩니다. "원본으로 재설정"을 사용하여 다시 시작합니다.',
        'pt': 'Você pode selecionar várias áreas e aplicar diferentes efeitos. Cada seleção é processada imediatamente. Use "Redefinir para original" para começar de novo.',
        'ru': 'Вы можете выбрать несколько областей и применить разные эффекты. Каждый выбор обрабатывается немедленно. Используйте "Сбросить к оригиналу", чтобы начать заново.',
        'ar': 'يمكنك تحديد مناطق متعددة وتطبيق تأثيرات مختلفة. تتم معالجة كل اختيار على الفور. استخدم "إعادة التعيين إلى الأصلي" للبدء من جديد.'
    },
    
    'step5.title': {
        'en': 'Export Your File',
        'zh': '导出您的文件',
        'es': 'Exporte su archivo',
        'fr': 'Exportez votre fichier',
        'de': 'Exportieren Sie Ihre Datei',
        'ja': 'ファイルをエクスポート',
        'ko': '파일 내보내기',
        'pt': 'Exporte seu arquivo',
        'ru': 'Экспортируйте файл',
        'ar': 'قم بتصدير ملفك'
    },
    
    'step5.title': {
        'en': 'Navigate PDF Pages',
        'zh': '导航PDF页面',
        'es': 'Navegue páginas PDF',
        'fr': 'Naviguez les pages PDF',
        'de': 'Navigieren Sie PDF-Seiten',
        'ja': 'PDFページをナビゲート',
        'ko': 'PDF 페이지 탐색',
        'pt': 'Navegue pelas páginas do PDF',
        'ru': 'Навигация по страницам PDF',
        'ar': 'تنقل بين صفحات PDF'
    },
    
    'step5.desc': {
        'en': 'For multi-page PDFs, use the Previous/Next buttons to navigate between pages. Edit each page independently before exporting.',
        'zh': '对于多页PDF，使用上一页/下一页按钮在页面之间导航。导出前独立脱敏每个页面。',
        'es': 'Para PDF de varias páginas, use los botones Anterior/Siguiente para navegar entre páginas. Edite cada página independientemente antes de exportar.',
        'fr': 'Pour les PDF multi-pages, utilisez les boutons Précédent/Suivant pour naviguer entre les pages. Modifiez chaque page indépendamment avant l\'exportation.',
        'de': 'Verwenden Sie bei mehrseitigen PDFs die Schaltflächen Zurück/Weiter, um zwischen den Seiten zu navigieren. Bearbeiten Sie jede Seite unabhängig, bevor Sie sie exportieren.',
        'ja': '複数ページのPDFの場合、前へ/次へボタンを使用してページ間を移動します。エクスポート前に各ページを独立して編集します。',
        'ko': '다중 페이지 PDF의 경우 이전/다음 버튼을 사용하여 페이지 간에 이동합니다. 내보내기 전에 각 페이지를 독립적으로 편집합니다.',
        'pt': 'Para PDFs de várias páginas, use os botões Anterior/Próximo para navegar entre as páginas. Edite cada página independentemente antes de exportar.',
        'ru': 'Для многостраничных PDF используйте кнопки Назад/Вперед для навигации между страницами. Отредактируйте каждую страницу независимо перед экспортом.',
        'ar': 'بالنسبة لملفات PDF متعددة الصفحات، استخدم أزرار السابق/التالي للتنقل بين الصفحات. قم بتحرير كل صفحة بشكل مستقل قبل التصدير.'
    },
    
    'step6.title': {
        'en': 'Download Result',
        'zh': '下载结果',
        'es': 'Descargue el resultado',
        'fr': 'Téléchargez le résultat',
        'de': 'Laden Sie das Ergebnis herunter',
        'ja': '結果をダウンロード',
        'ko': '결과 다운로드',
        'pt': 'Baixe o resultado',
        'ru': 'Скачайте результат',
        'ar': 'قم بتنزيل النتيجة'
    },
    
    'step6.desc': {
        'en': 'Click "Download" to save your edited file with the original filename preserved. For PDFs, all edited pages are combined into a single file.',
        'zh': '点击"下载"保存您脱敏的文件，保留原始文件名。对于PDF，所有脱敏过的页面将合并为一个文件。',
        'es': 'Haga clic en "Descargar" para guardar su archivo editado con el nombre de archivo original conservado. Para PDF, todas las páginas editadas se combinan en un solo archivo.',
        'fr': 'Cliquez sur "Télécharger" pour enregistrer votre fichier édité avec le nom de fichier d\'origine préservé. Pour les PDF, toutes les pages éditées sont combinées en un seul fichier.',
        'de': 'Klicken Sie auf "Herunterladen", um Ihre bearbeitete Datei mit beibehaltenem ursprünglichem Dateinamen zu speichern. Bei PDFs werden alle bearbeiteten Seiten in einer einzigen Datei kombiniert.',
        'ja': '"ダウンロード"をクリックして、元のファイル名を保持したまま編集したファイルを保存します。PDFの場合、すべての編集されたページが1つのファイルに結合されます。',
        'ko': '"다운로드"를 클릭하여 원본 파일명을 유지한 채 편집한 파일을 저장하세요. PDF의 경우 모든 편집된 페이지가 단일 파일로 결합됩니다.',
        'pt': 'Clique em "Baixar" para salvar seu arquivo editado com o nome de arquivo original preservado. Para PDFs, todas as páginas editadas são combinadas em um único arquivo.',
        'ru': 'Нажмите "Скачать", чтобы сохранить отредактированный файл с сохранением исходного имени файла. Для PDF все отредактированные страницы объединяются в один файл.',
        'ar': 'انقر فوق "تنزيل" لحفظ ملفك المُحرر مع الحفاظ على اسم الملف الأصلي. بالنسبة لملفات PDF، يتم دمج جميع الصفحات المُحررة في ملف واحد.'
    },
    
    // Footer
    'footer.description': {
        'en': 'Free, secure, and private image redaction tools. Your files never leave your device.',
        'zh': '免费、安全、私密的图像脱敏工具。您的文件绝不会离开您的设备。',
        'es': 'Herramientas gratuitas, seguras y privadas de edición de imágenes. Sus archivos nunca salen de su dispositivo.',
        'fr': 'Outils gratuits, sécurisés et privés d\'édition d\'images. Vos fichiers ne quittent jamais votre appareil.',
        'de': 'Kostenlose, sichere und private Bildbearbeitungstools. Ihre Dateien verlassen niemals Ihr Gerät.',
        'ja': '無料で安全なプライベート画像編集ツール。ファイルはデバイスから流出しません。',
        'ko': '무료, 안전하고 비공개 이미지 편집 도구. 파일이 장치를 떠나지 않습니다.',
        'pt': 'Ferramentas gratuitas, seguras e privadas de edição de imagens. Seus arquivos nunca saem do seu dispositivo.',
        'ru': 'Бесплатные, безопасные и конфиденциальные инструменты редактирования изображений. Ваши файлы никогда не покидают ваше устройство.',
        'ar': 'أدوات مجانية وآمنة وخاصة لتحرير الصور. ملفاتك لا تغادر جهازك أبدًا.'
    },
    
    // Control Panel
    'control.useCustomColor': {
        'en': 'Use custom color',
        'zh': '使用自定义颜色',
        'es': 'Usar color personalizado',
        'fr': 'Utiliser une couleur personnalisée',
        'de': 'Benutzerdefinierte Farbe verwenden',
        'ja': 'カスタムカラーを使用',
        'ko': '사용자 정의 색상 사용',
        'pt': 'Usar cor personalizada',
        'ru': 'Использовать пользовательский цвет',
        'ar': 'استخدم لون مخصص'
    },
    
    'control.selectArea': {
        'en': 'Select Area to Redact',
        'zh': '选择要脱敏的区域',
        'es': 'Seleccionar área para editar',
        'fr': 'Sélectionner la zone à éditer',
        'de': 'Bereich zum Bearbeiten auswählen',
        'ja': '編集する領域を選択',
        'ko': '편집할 영역 선택',
        'pt': 'Selecionar área para editar',
        'ru': 'Выбрать область для редактирования',
        'ar': 'حدد المنطقة للتحرير'
    },
    
    'control.effectType': {
        'en': 'Effect Type',
        'zh': '效果类型',
        'es': 'Tipo de efecto',
        'fr': 'Type d\'effet',
        'de': 'Effekttyp',
        'ja': '効果タイプ',
        'ko': '효과 유형',
        'pt': 'Tipo de efeito',
        'ru': 'Тип эффекта',
        'ar': 'نوع التأثير'
    },
    
    'control.effect.mosaic': {
        'en': 'Mosaic (Pixelate)',
        'zh': '马赛克（像素化）',
        'es': 'Mosaico (Pixelar)',
        'fr': 'Mosaïque (Pixéliser)',
        'de': 'Mosaik (Verpixeln)',
        'ja': 'モザイク（ピクセル化）',
        'ko': '모자이크 (픽셀화)',
        'pt': 'Mosaico (Pixelizar)',
        'ru': 'Мозаика (Пикселизация)',
        'ar': 'فسيفساء (بكسل)'
    },
    
    'control.effect.blur': {
        'en': 'Gaussian Blur',
        'zh': '高斯模糊',
        'es': 'Desenfoque Gaussiano',
        'fr': 'Flou gaussien',
        'de': 'Gaußscher Weichzeichner',
        'ja': 'ガウスぼかし',
        'ko': '가우시안 블러',
        'pt': 'Desfoque Gaussiano',
        'ru': 'Размытие по Гауссу',
        'ar': 'ضبابية غاوسية'
    },
    
    'control.effect.blackout': {
        'en': 'Black Out',
        'zh': '涂黑',
        'es': 'Oscurecer',
        'fr': 'Obscurcir',
        'de': 'Schwärzen',
        'ja': '黒塗り',
        'ko': '블랙아웃',
        'pt': 'Escurecer',
        'ru': 'Затемнение',
        'ar': 'تعتيم'
    },
    
    'control.intensity': {
        'en': 'Intensity:',
        'zh': '强度：',
        'es': 'Intensidad:',
        'fr': 'Intensité :',
        'de': 'Intensität:',
        'ja': '強度：',
        'ko': '강도:',
        'pt': 'Intensidade:',
        'ru': 'Интенсивность:',
        'ar': 'الشدة:'
    },
    
    'control.customColor': {
        'en': 'Custom color',
        'zh': '自定义颜色',
        'es': 'Color personalizado',
        'fr': 'Couleur personnalisée',
        'de': 'Benutzerdefinierte Farbe',
        'ja': 'カスタムカラー',
        'ko': '사용자 정의 색상',
        'pt': 'Cor personalizada',
        'ru': 'Пользовательский цвет',
        'ar': 'لون مخصص'
    },
    
    'control.reset': {
        'en': 'Reset to Original',
        'zh': '重置为原始',
        'es': 'Restablecer a original',
        'fr': 'Réinitialiser à l\'original',
        'de': 'Auf Original zurücksetzen',
        'ja': 'オリジナルにリセット',
        'ko': '원본으로 재설정',
        'pt': 'Redefinir para original',
        'ru': 'Сбросить к оригиналу',
        'ar': 'إعادة التعيين إلى الأصلي'
    },
    
    'control.download': {
        'en': 'Download Redacted File',
        'zh': '下载脱敏后的文件',
        'es': 'Descargar archivo editado',
        'fr': 'Télécharger le fichier édité',
        'de': 'Bearbeitete Datei herunterladen',
        'ja': '編集したファイルをダウンロード',
        'ko': '편집된 파일 다운로드',
        'pt': 'Baixar arquivo editado',
        'ru': 'Скачать отредактированный файл',
        'ar': 'تنزيل الملف المُحرر'
    },
    
    // PDF Navigation
    'pdf.prev': {
        'en': '← Previous',
        'zh': '← 上一页',
        'es': '← Anterior',
        'fr': '← Précédent',
        'de': '← Zurück',
        'ja': '← 前へ',
        'ko': '← 이전',
        'pt': '← Anterior',
        'ru': '← Назад',
        'ar': '← السابق'
    },
    
    'pdf.pageInfo': {
        'en': 'Page',
        'zh': '第',
        'es': 'Página',
        'fr': 'Page',
        'de': 'Seite',
        'ja': 'ページ',
        'ko': '페이지',
        'pt': 'Página',
        'ru': 'Страница',
        'ar': 'صفحة'
    },
    
    'pdf.of': {
        'en': 'of',
        'zh': '页，共',
        'es': 'de',
        'fr': 'sur',
        'de': 'von',
        'ja': '/',
        'ko': '/',
        'pt': 'de',
        'ru': 'из',
        'ar': 'من'
    },
    
    'pdf.next': {
        'en': 'Next →',
        'zh': '下一页 →',
        'es': 'Siguiente →',
        'fr': 'Suivant →',
        'de': 'Weiter →',
        'ja': '次へ →',
        'ko': '다음 →',
        'pt': 'Próximo →',
        'ru': 'Вперёд →',
        'ar': 'التالي →'
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
        'en': 'Free online image and PDF redaction tools',
        'zh': '免费在线图像和PDF脱敏工具',
        'es': 'Herramientas gratuitas de edición de imágenes y PDF en línea',
        'fr': 'Outils gratuits d\'édition d\'images et PDF en ligne',
        'de': 'Kostenlose Online-Tools zur Bild- und PDF-Bearbeitung',
        'ja': '無料オンライン画像とPDF編集ツール',
        'ko': '무료 온라인 이미지 및 PDF 편집 도구',
        'pt': 'Ferramentas gratuitas de edição de imagens e PDF online',
        'ru': 'Бесплатные онлайн-инструменты для редактирования изображений и PDF',
        'ar': 'أدوات مجانية لتحرير الصور وملفات PDF عبر الإنترنت'
    },
    
    // Footer - Popular Articles
    'footer.article.blurFaces': {
        'en': 'Blur Faces Guide',
        'zh': '模糊面部指南',
        'es': 'Guía para difuminar rostros',
        'fr': 'Guide pour flouter les visages',
        'de': 'Gesichter verwischen Anleitung',
        'ja': '顔をぼかすガイド',
        'ko': '얼굴 흐리기 가이드',
        'pt': 'Guia para desfocar rostos',
        'ru': 'Руководство по размытию лиц',
        'ar': 'دليل طمس الوجوه'
    },
    
    'footer.article.privacyGuide': {
        'en': 'Privacy Guide',
        'zh': '隐私指南',
        'es': 'Guía de privacidad',
        'fr': 'Guide de confidentialité',
        'de': 'Datenschutz-Leitfaden',
        'ja': 'プライバシーガイド',
        'ko': '개인 정보 보호 가이드',
        'pt': 'Guia de privacidade',
        'ru': 'Руководство по конфиденциальности',
        'ar': 'دليل الخصوصية'
    },
    
    'footer.article.pdfTools': {
        'en': 'PDF Tools',
        'zh': 'PDF工具',
        'es': 'Herramientas PDF',
        'fr': 'Outils PDF',
        'de': 'PDF-Tools',
        'ja': 'PDFツール',
        'ko': 'PDF 도구',
        'pt': 'Ferramentas PDF',
        'ru': 'Инструменты PDF',
        'ar': 'أدوات PDF'
    },
    
    // Footer - Legal Pages
    'footer.legal.privacy': {
        'en': 'Privacy Policy',
        'zh': '隐私政策',
        'es': 'Política de privacidad',
        'fr': 'Politique de confidentialité',
        'de': 'Datenschutzerklärung',
        'ja': 'プライバシーポリシー',
        'ko': '개인 정보 보호 정책',
        'pt': 'Política de privacidade',
        'ru': 'Политика конфиденциальности',
        'ar': 'سياسة الخصوصية'
    },
    
    'footer.legal.terms': {
        'en': 'Terms of Service',
        'zh': '服务条款',
        'es': 'Términos de servicio',
        'fr': 'Conditions d\'utilisation',
        'de': 'Nutzungsbedingungen',
        'ja': '利用規約',
        'ko': '서비스 약관',
        'pt': 'Termos de serviço',
        'ru': 'Условия использования',
        'ar': 'شروط الخدمة'
    },
    
    'footer.legal.cookie': {
        'en': 'Cookie Policy',
        'zh': 'Cookie政策',
        'es': 'Política de cookies',
        'fr': 'Politique relative aux cookies',
        'de': 'Cookie-Richtlinie',
        'ja': 'Cookieポリシー',
        'ko': '쿠키 정책',
        'pt': 'Política de cookies',
        'ru': 'Политика использования файлов cookie',
        'ar': 'سياسة ملفات تعريف الارتباط'
    },
    
    'footer.tagline': {
        'en': 'Privacy-first photo redaction. No uploads. No tracking. 100% secure.',
        'zh': '隐私优先的照片脱敏。无上传。无跟踪。100%安全。',
        'es': 'Edición de fotos con prioridad de privacidad. Sin cargas. Sin rastreo. 100% seguro.',
        'fr': 'Édition photo axée sur la confidentialité. Aucun téléchargement. Aucun suivi. 100% sécurisé.',
        'de': 'Datenschutzorientierte Fotobearbeitung. Keine Uploads. Kein Tracking. 100% sicher.',
        'ja': 'プライバシー優先の写真編集。アップロードなし。追跡なし。100%安全。',
        'ko': '개인 정보 우선 사진 편집. 업로드 없음. 추적 없음. 100% 안전.',
        'pt': 'Edição de fotos com foco na privacidade. Sem uploads. Sem rastreamento. 100% seguro.',
        'ru': 'Редактирование фото с приоритетом конфиденциальности. Без загрузок. Без отслеживания. 100% безопасно.',
        'ar': 'تحرير الصور مع الأولوية للخصوصية. بدون تحميلات. بدون تتبع. آمن بنسبة 100٪.'
    },
    
    // Brand Name
    'brand.name': {
        'en': 'PrivacyMask Pro',
        'zh': 'PrivacyMask Pro',
        'es': 'PrivacyMask Pro',
        'fr': 'PrivacyMask Pro',
        'de': 'PrivacyMask Pro',
        'ja': 'PrivacyMask Pro',
        'ko': 'PrivacyMask Pro',
        'pt': 'PrivacyMask Pro',
        'ru': 'PrivacyMask Pro',
        'ar': 'PrivacyMask Pro'
    },
    
    // Features Section
    'features.title': {
        'en': 'Key Features',
        'zh': '主要功能',
        'es': 'Características principales',
        'fr': 'Fonctionnalités clés',
        'de': 'Hauptfunktionen',
        'ja': '主な機能',
        'ko': '주요 기능',
        'pt': 'Principais recursos',
        'ru': 'Ключевые возможности',
        'ar': 'الميزات الرئيسية'
    },
    
    'feature.clientSide.title': {
        'en': '100% Client-Side Processing',
        'zh': '100% 客户端处理',
        'es': 'Procesamiento 100% del lado del cliente',
        'fr': 'Traitement 100% côté client',
        'de': '100% clientseitige Verarbeitung',
        'ja': '100% クライアントサイド処理',
        'ko': '100% 클라이언트 측 처리',
        'pt': 'Processamento 100% do lado do cliente',
        'ru': '100% обработка на стороне клиента',
        'ar': 'معالجة بنسبة 100٪ من جانب العميل'
    },
    
    'feature.clientSide.desc': {
        'en': 'Your files never leave your device. All redaction happens directly in your browser for maximum privacy and security.',
        'zh': '您的文件绝不会离开您的设备。所有脱敏都在浏览器中直接进行，以实现最大的隐私和安全性。',
        'es': 'Sus archivos nunca salen de su dispositivo. Toda la edición ocurre directamente en su navegador para máxima privacidad y seguridad.',
        'fr': 'Vos fichiers ne quittent jamais votre appareil. Toute l\'édition se fait directement dans votre navigateur pour une confidentialité et une sécurité maximales.',
        'de': 'Ihre Dateien verlassen niemals Ihr Gerät. Die gesamte Bearbeitung erfolgt direkt in Ihrem Browser für maximale Privatsphäre und Sicherheit.',
        'ja': 'ファイルはデバイスから流出しません。すべての編集は最大限のプライバシーとセキュリティのためにブラウザで直接行われます。',
        'ko': '파일이 장치를 떠나지 않습니다. 모든 편집은 최대 개인 정보 보호와 보안을 위해 브라우저에서 직접 발생합니다.',
        'pt': 'Seus arquivos nunca saem do seu dispositivo. Toda a edição ocorre diretamente no seu navegador para máxima privacidade e segurança.',
        'ru': 'Ваши файлы никогда не покидают ваше устройство. Вся обработка происходит прямо в вашем браузере для максимальной конфиденциальности и безопасности.',
        'ar': 'ملفاتك لا تغادر جهازك أبدًا. تتم جميع عمليات التحرير مباشرة في متصفحك لأقصى قدر من الخصوصية والأمان.'
    },
    
    'feature.manualControl.title': {
        'en': 'Manual Selection Control',
        'zh': '手动选择控制',
        'es': 'Control de selección manual',
        'fr': 'Contrôle de sélection manuelle',
        'de': 'Manuelle Auswahlsteuerung',
        'ja': '手動選択制御',
        'ko': '수동 선택 제어',
        'pt': 'Controle de seleção manual',
        'ru': 'Ручное управление выбором',
        'ar': 'التحكم في الاختيار اليدوي'
    },
    
    'feature.manualControl.desc': {
        'en': 'You have complete control over which areas to redact. No automatic detection - you decide exactly what gets masked.',
        'zh': '您可以完全控制要脱敏的区域。没有自动检测 - 您决定确切要遮盖的内容。',
        'es': 'Tiene control completo sobre qué áreas editar. Sin detección automática: usted decide exactamente qué se oculta.',
        'fr': 'Vous avez un contrôle complet sur les zones à éditer. Pas de détection automatique - vous décidez exactement ce qui est masqué.',
        'de': 'Sie haben die vollständige Kontrolle darüber, welche Bereiche bearbeitet werden sollen. Keine automatische Erkennung - Sie entscheiden genau, was maskiert wird.',
        'ja': '編集する領域を完全に制御できます。自動検出なし - マスクする内容を正確に決定します。',
        'ko': '편집할 영역을 완전히 제어할 수 있습니다. 자동 감지 없음 - 마스킹할 내용을 정확히 결정합니다.',
        'pt': 'Você tem controle completo sobre quais áreas editar. Sem detecção automática - você decide exatamente o que é mascarado.',
        'ru': 'У вас есть полный контроль над тем, какие области редактировать. Никакого автоматического обнаружения - вы решаете, что именно маскируется.',
        'ar': 'لديك تحكم كامل في المناطق التي تريد تحريرها. لا يوجد كشف تلقائي - أنت تقرر بالضبط ما يتم إخفاؤه.'
    },
    
    'feature.multipleEffects.title': {
        'en': 'Multiple Effect Types',
        'zh': '多种效果类型',
        'es': 'Múltiples tipos de efectos',
        'fr': 'Plusieurs types d\'effets',
        'de': 'Mehrere Effekttypen',
        'ja': '複数の効果タイプ',
        'ko': '다양한 효과 유형',
        'pt': 'Múltiplos tipos de efeitos',
        'ru': 'Несколько типов эффектов',
        'ar': 'أنواع تأثيرات متعددة'
    },
    
    'feature.multipleEffects.desc': {
        'en': 'Choose from Mosaic (pixelation), Gaussian Blur, or solid color blackout. Customize colors and intensity for perfect results.',
        'zh': '从马赛克（像素化）、高斯模糊或纯色涂黑中选择。自定义颜色和强度以获得完美效果。',
        'es': 'Elija entre Mosaico (pixelación), Desenfoque Gaussiano u oscurecimiento de color sólido. Personalice colores e intensidad para resultados perfectos.',
        'fr': 'Choisissez entre Mosaïque (pixélisation), Flou gaussien ou obscurcissement de couleur unie. Personnalisez les couleurs et l\'intensité pour des résultats parfaits.',
        'de': 'Wählen Sie aus Mosaik (Verpixelung), Gaußscher Weichzeichner oder einfarbigem Schwarzout. Passen Sie Farben und Intensität für perfekte Ergebnisse an.',
        'ja': 'モザイク（ピクセル化）、ガウスぼかし、または単色ブラックアウトから選択します。完璧な結果のために色と強度をカスタマイズします。',
        'ko': '모자이크(픽셀화), 가우시안 블러 또는 단색 블랙아웃 중에서 선택하세요. 완벽한 결과를 위해 색상과 강도를 사용자 정의합니다.',
        'pt': 'Escolha entre Mosaico (pixelização), Desfoque Gaussiano ou obscurecimento de cor sólida. Personalize cores e intensidade para resultados perfeitos.',
        'ru': 'Выбирайте из Мозаики (пикселизации), Размытия по Гауссу или сплошного затемнения. Настройте цвета и интенсивность для идеальных результатов.',
        'ar': 'اختر من بين الفسيفساء (البكسل)، الضبابية الغاوسية، أو التعتيم بلون خالص. قم بتخصيص الألوان والشدة للحصول على نتائج مثالية.'
    },
    
    'feature.pdfSupport.title': {
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
    
    'feature.pdfSupport.desc': {
        'en': 'Edit multiple pages in a single PDF file. Navigate between pages, apply different effects, and export as complete multi-page PDF.',
        'zh': '在单个PDF文件中脱敏多个页面。在页面之间导航，应用不同的效果，并导出为完整的多页PDF。',
        'es': 'Edite múltiples páginas en un solo archivo PDF. Navegue entre páginas, aplique diferentes efectos y exporte como PDF multipágina completo.',
        'fr': 'Modifiez plusieurs pages dans un seul fichier PDF. Naviguez entre les pages, appliquez différents effets et exportez en tant que PDF multi-pages complet.',
        'de': 'Bearbeiten Sie mehrere Seiten in einer einzigen PDF-Datei. Navigieren Sie zwischen den Seiten, wenden Sie verschiedene Effekte an und exportieren Sie als vollständiges mehrseitiges PDF.',
        'ja': '単一のPDFファイルで複数のページを編集します。ページ間を移動し、異なる効果を適用し、完全な複数ページのPDFとしてエクスポートします。',
        'ko': '단일 PDF 파일에서 여러 페이지를 편집합니다. 페이지 간에 이동하고, 다른 효과를 적용하며, 완전한 다중 페이지 PDF로 내보냅니다.',
        'pt': 'Edite várias páginas em um único arquivo PDF. Navegue entre as páginas, aplique diferentes efeitos e exporte como PDF multipágina completo.',
        'ru': 'Редактируйте несколько страниц в одном файле PDF. Перемещайтесь между страницами, применяйте различные эффекты и экспортируйте как полный многостраничный PDF.',
        'ar': 'قم بتحرير صفحات متعددة في ملف PDF واحد. تنقل بين الصفحات، وطبق تأثيرات مختلفة، وقم بالتصدير كملف PDF متعدد الصفحات كامل.'
    },
    
    'feature.filenamePreservation.title': {
        'en': 'Original Filename Preservation',
        'zh': '原始文件名保留',
        'es': 'Conservación del nombre de archivo original',
        'fr': 'Préservation du nom de fichier original',
        'de': 'Beibehaltung des ursprünglichen Dateinamens',
        'ja': '元のファイル名の保持',
        'ko': '원본 파일명 보존',
        'pt': 'Preservação do nome de arquivo original',
        'ru': 'Сохранение исходного имени файла',
        'ar': 'الحفاظ على اسم الملف الأصلي'
    },
    
    'feature.filenamePreservation.desc': {
        'en': 'Exported files keep their original names, including all characters (Chinese, Japanese, Korean, etc.). No random renaming.',
        'zh': '导出的文件保留其原始名称，包括所有字符（中文、日文、韩文等）。没有随机重命名。',
        'es': 'Los archivos exportados conservan sus nombres originales, incluidos todos los caracteres (chino, japonés, coreano, etc.). Sin cambio de nombre aleatorio.',
        'fr': 'Les fichiers exportés conservent leurs noms originaux, y compris tous les caractères (chinois, japonais, coréen, etc.). Pas de renommage aléatoire.',
        'de': 'Exportierte Dateien behalten ihre ursprünglichen Namen bei, einschließlich aller Zeichen (Chinesisch, Japanisch, Koreanisch usw.). Keine zufällige Umbenennung.',
        'ja': 'エクスポートされたファイルは、すべての文字（中国語、日本語、韓国語など）を含む元のファイル名を保持します。ランダムな名前変更はありません。',
        'ko': '내보낸 파일은 모든 문자(중국어, 일본어, 한국어 등)를 포함하여 원래 이름을 유지합니다. 무작위 이름 변경이 없습니다.',
        'pt': 'Os arquivos exportados mantêm seus nomes originais, incluindo todos os caracteres (chinês, japonês, coreano, etc.). Sem renomeação aleatória.',
        'ru': 'Экспортированные файлы сохраняют свои исходные имена, включая все символы (китайские, японские, корейские и т. д.). Без случайного переименования.',
        'ar': 'تحافظ الملفات المُصدَّرة على أسمائها الأصلية، بما في ذلك جميع الأحرف (الصينية، اليابانية، الكورية، إلخ). بدون إعادة تسمية عشوائية.'
    },
    
    'feature.offline.title': {
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
    
    'feature.offline.desc': {
        'en': 'Once loaded, the tool works completely offline. No internet connection required after initial page load.',
        'zh': '加载后，该工具完全可以离线工作。初始页面加载后不需要互联网连接。',
        'es': 'Una vez cargado, la herramienta funciona completamente sin conexión. No se requiere conexión a Internet después de la carga inicial de la página.',
        'fr': 'Une fois chargé, l\'outil fonctionne complètement hors ligne. Aucune connexion Internet n\'est requise après le chargement initial de la page.',
        'de': 'Sobald es geladen ist, funktioniert das Tool vollständig offline. Nach dem ersten Laden der Seite ist keine Internetverbindung erforderlich.',
        'ja': '読み込まれると、ツールは完全にオフラインで動作します。初期ページ読み込み後はインターネット接続は不要です。',
        'ko': '로드되면 도구는 완전히 오프라인으로 작동합니다. 초기 페이지 로드 후에는 인터넷 연결이 필요하지 않습니다.',
        'pt': 'Uma vez carregado, a ferramenta funciona completamente offline. Nenhuma conexão com a Internet é necessária após o carregamento inicial da página.',
        'ru': 'После загрузки инструмент работает полностью офлайн. После первоначальной загрузки страницы подключение к Интернету не требуется.',
        'ar': 'بمجرد التحميل، تعمل الأداة بالكامل دون اتصال. لا يلزم وجود اتصال بالإنترنت بعد التحميل الأولي للصفحة.'
    },
    
    // SEO Content Section
    'seo.whyChoose.title': {
        'en': 'Why Choose Our Free Image Redaction Tool?',
        'zh': '为什么选择我们的免费图像脱敏工具？',
        'es': '¿Por qué elegir nuestra herramienta gratuita de edición de imágenes?',
        'fr': 'Pourquoi choisir notre outil gratuit d\'édition d\'images ?',
        'de': 'Warum unser kostenloses Bildbearbeitungstool wählen?',
        'ja': 'なぜ無料の画像編集ツールを選ぶのか？',
        'ko': '왜 무료 이미지 편집 도구를 선택해야 하나요?',
        'pt': 'Por que escolher nossa ferramenta gratuita de edição de imagens?',
        'ru': 'Почему выбрать наш бесплатный инструмент для редактирования изображений?',
        'ar': 'لماذا تختار أداة تحرير الصور المجانية الخاصة بنا؟'
    },
    
    'seo.useCases.title': {
        'en': 'Popular Use Cases',
        'zh': '热门用例',
        'es': 'Casos de uso populares',
        'fr': 'Cas d\'utilisation populaires',
        'de': 'Beliebte Anwendungsfälle',
        'ja': '人気の使用例',
        'ko': '인기 사용 사례',
        'pt': 'Casos de uso populares',
        'ru': 'Популярные варианты использования',
        'ar': 'حالات الاستخدام الشائعة'
    },
    
    'seo.faq.title': {
        'en': 'Frequently Asked Questions About Image Redaction',
        'zh': '关于图像脱敏的常见问题',
        'es': 'Preguntas frecuentes sobre la edición de imágenes',
        'fr': 'Questions fréquemment posées sur l\'édition d\'images',
        'de': 'Häufig gestellte Fragen zur Bildbearbeitung',
        'ja': '画像編集に関するよくある質問',
        'ko': '이미지 편집에 관한 자주 묻는 질문',
        'pt': 'Perguntas frequentes sobre edição de imagens',
        'ru': 'Часто задаваемые вопросы о редактировании изображений',
        'ar': 'الأسئلة الشائعة حول تحرير الصور'
    }
};

// SEO Why Choose Section
TRANSLATIONS['seo.whyChoose.free'] = {
    'en': '100% Free Online Photo Redaction Tool',
    'zh': '100%免费在线照片脱敏器',
    'es': 'Editor de fotos en línea 100% gratuito',
    'fr': 'Éditeur de photos en ligne 100% gratuit',
    'de': '100% kostenloser Online-Fotoeditor',
    'ja': '100%無料オンライン写真編集ツール',
    'ko': '100% 무료 온라인 사진 편집기',
    'pt': 'Editor de fotos online 100% gratuito',
    'ru': '100% бесплатный онлайн-редактор фото',
    'ar': 'محرر صور مجاني بنسبة 100٪ عبر الإنترنت'
};

TRANSLATIONS['seo.whyChoose.noReg'] = {
    'en': 'No registration, no watermarks, no limits',
    'zh': '无需注册，无水印，无限制',
    'es': 'Sin registro, sin marcas de agua, sin límites',
    'fr': 'Aucune inscription, aucun filigrane, aucune limite',
    'de': 'Keine Registrierung, keine Wasserzeichen, keine Einschränkungen',
    'ja': '登録不要、透かしなし、制限なし',
    'ko': '등록 불필요, 워터마크 없음, 제한 없음',
    'pt': 'Sem registro, sem marcas d\'água, sem limites',
    'ru': 'Без регистрации, без водяных знаков, без ограничений',
    'ar': 'بدون تسجيل، بدون علامات مائية، بدون حدود'
};

TRANSLATIONS['seo.whyChoose.privacy'] = {
    'en': 'Complete Privacy Protection',
    'zh': '完整隐私保护',
    'es': 'Protección completa de la privacidad',
    'fr': 'Protection complète de la vie privée',
    'de': 'Vollständiger Datenschutz',
    'ja': '完全なプライバシー保護',
    'ko': '완전한 개인 정보 보호',
    'pt': 'Proteção completa da privacidade',
    'ru': 'Полная защита конфиденциальности',
    'ar': 'حماية كاملة للخصوصية'
};

TRANSLATIONS['seo.whyChoose.noUpload'] = {
    'en': 'Your files never leave your device',
    'zh': '您的文件绝不会离开您的设备',
    'es': 'Sus archivos nunca salen de su dispositivo',
    'fr': 'Vos fichiers ne quittent jamais votre appareil',
    'de': 'Ihre Dateien verlassen niemals Ihr Gerät',
    'ja': 'ファイルはデバイスから流出しません',
    'ko': '파일이 장치를 떠나지 않습니다',
    'pt': 'Seus arquivos nunca saem do seu dispositivo',
    'ru': 'Ваши файлы никогда не покидают ваше устройство',
    'ar': 'ملفاتك لا تغادر جهازك أبدًا'
};

TRANSLATIONS['seo.whyChoose.offline'] = {
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
};

TRANSLATIONS['seo.whyChoose.noInternet'] = {
    'en': 'No internet required after page loads',
    'zh': '页面加载后无需互联网',
    'es': 'No se requiere Internet después de cargar la página',
    'fr': 'Aucune connexion Internet requise après le chargement de la page',
    'de': 'Nach dem Laden der Seite ist keine Internetverbindung erforderlich',
    'ja': 'ページ読み込み後はインターネット不要',
    'ko': '페이지 로드 후 인터넷 불필요',
    'pt': 'Nenhuma conexão com a Internet necessária após o carregamento da página',
    'ru': 'После загрузки страницы интернет не требуется',
    'ar': 'لا يلزم وجود اتصال بالإنترنت بعد تحميل الصفحة'
};

TRANSLATIONS['seo.whyChoose.multiFormat'] = {
    'en': 'Multi-format Support',
    'zh': '多格式支持',
    'es': 'Soporte para múltiples formatos',
    'fr': 'Support multi-formats',
    'de': 'Unterstützung mehrerer Formate',
    'ja': '複数フォーマット対応',
    'ko': '다중 형식 지원',
    'pt': 'Suporte a múltiplos formatos',
    'ru': 'Поддержка нескольких форматов',
    'ar': 'دعم تنسيقات متعددة'
};

TRANSLATIONS['seo.whyChoose.formats'] = {
    'en': 'JPG, PNG, GIF, WebP, and PDF files',
    'zh': 'JPG、PNG、GIF、WebP和PDF文件',
    'es': 'Archivos JPG, PNG, GIF, WebP y PDF',
    'fr': 'Fichiers JPG, PNG, GIF, WebP et PDF',
    'de': 'JPG-, PNG-, GIF-, WebP- und PDF-Dateien',
    'ja': 'JPG、PNG、GIF、WebP、PDFファイル',
    'ko': 'JPG, PNG, GIF, WebP 및 PDF 파일',
    'pt': 'Arquivos JPG, PNG, GIF, WebP e PDF',
    'ru': 'Файлы JPG, PNG, GIF, WebP и PDF',
    'ar': 'ملفات JPG وPNG وGIF وWebP وPDF'
};

TRANSLATIONS['seo.whyChoose.professional'] = {
    'en': 'Professional Results',
    'zh': '专业效果',
    'es': 'Resultados profesionales',
    'fr': 'Résultats professionnels',
    'de': 'Professionelle Ergebnisse',
    'ja': 'プロフェッショナルな結果',
    'ko': '전문적인 결과',
    'pt': 'Resultados profissionais',
    'ru': 'Профессиональные результаты',
    'ar': 'نتائج احترافية'
};

TRANSLATIONS['seo.whyChoose.customControl'] = {
    'en': 'Custom colors, adjustable intensity, precise control',
    'zh': '自定义颜色、可调强度、精确控制',
    'es': 'Colores personalizados, intensidad ajustable, control preciso',
    'fr': 'Couleurs personnalisées, intensité réglable, contrôle précis',
    'de': 'Benutzerdefinierte Farben, einstellbare Intensität, präzise Steuerung',
    'ja': 'カスタムカラー、調整可能な強度、精密な制御',
    'ko': '사용자 정의 색상, 조정 가능한 강도, 정밀한 제어',
    'pt': 'Cores personalizadas, intensidade ajustável, controle preciso',
    'ru': 'Пользовательские цвета, регулируемая интенсивность, точный контроль',
    'ar': 'ألوان مخصصة، شدة قابلة للتعديل، تحكم دقيق'
};

// Blog Page
TRANSLATIONS['blog.tryTool'] = {
    'en': 'Try Free Tool',
    'zh': '试用免费工具',
    'es': 'Probar herramienta gratuita',
    'fr': 'Essayer l\'outil gratuit',
    'de': 'Kostenloses Tool ausprobieren',
    'ja': '無料ツールを試す',
    'ko': '무료 도구 사용해 보기',
    'pt': 'Experimente a ferramenta gratuita',
    'ru': 'Попробовать бесплатный инструмент',
    'ar': 'جرب الأداة المجانية'
};

TRANSLATIONS['blog.title'] = {
    'en': 'Privacy & Security Blog',
    'zh': '隐私与安全博客',
    'es': 'Blog de privacidad y seguridad',
    'fr': 'Blog sur la confidentialité et la sécurité',
    'de': 'Datenschutz- und Sicherheitsblog',
    'ja': 'プライバシーとセキュリティブログ',
    'ko': '개인 정보 보호 및 보안 블로그',
    'pt': 'Blog de privacidade e segurança',
    'ru': 'Блог о конфиденциальности и безопасности',
    'ar': 'مدونة الخصوصية والأمان'
};

TRANSLATIONS['blog.subtitle'] = {
    'en': 'Expert guides to protect your digital identity, secure your documents, and share photos safely online',
    'zh': '保护您的数字身份、保护文档安全以及在线安全分享照片的专业指南',
    'es': 'Guías expertas para proteger su identidad digital, asegurar sus documentos y compartir fotos de forma segura en línea',
    'fr': 'Guides d\'experts pour protéger votre identité numérique, sécuriser vos documents et partager des photos en toute sécurité en ligne',
    'de': 'Expertenleitfäden zum Schutz Ihrer digitalen Identität, zur Sicherung Ihrer Dokumente und zum sicheren Teilen von Fotos online',
    'ja': 'デジタルアイデンティティを保護し、文書を保護し、オンラインで写真を安全に共有するための専門ガイド',
    'ko': '디지털 신원을 보호하고 문서를 안전하게 보호하며 온라인에서 사진을 안전하게 공유하는 전문가 가이드',
    'pt': 'Guias especializados para proteger sua identidade digital, proteger seus documentos e compartilhar fotos com segurança online',
    'ru': 'Экспертные руководства по защите вашей цифровой идентичности, обеспечению безопасности документов и безопасному обмену фотографиями в Интернете',
    'ar': 'أدلة الخبراء لحماية هويتك الرقمية، وتأمين مستنداتك، ومشاركة الصور بأمان عبر الإنترنت'
};

TRANSLATIONS['blog.articles'] = {
    'en': 'Articles',
    'zh': '文章',
    'es': 'Artículos',
    'fr': 'Articles',
    'de': 'Artikel',
    'ja': '記事',
    'ko': '기사',
    'pt': 'Artigos',
    'ru': 'Статьи',
    'ar': 'المقالات'
};

TRANSLATIONS['blog.freeResources'] = {
    'en': 'Free Resources',
    'zh': '免费资源',
    'es': 'Recursos gratuitos',
    'fr': 'Ressources gratuites',
    'de': 'Kostenlose Ressourcen',
    'ja': '無料リソース',
    'ko': '무료 리소스',
    'pt': 'Recursos gratuitos',
    'ru': 'Бесплатные ресурсы',
    'ar': 'موارد مجانية'
};

TRANSLATIONS['blog.privacyFirst'] = {
    'en': 'Privacy First',
    'zh': '隐私优先',
    'es': 'Privacidad primero',
    'fr': 'Confidentialité d\'abord',
    'de': 'Datenschutz zuerst',
    'ja': 'プライバシーファースト',
    'ko': '개인 정보 우선',
    'pt': 'Privacidade em primeiro lugar',
    'ru': 'Конфиденциальность прежде всего',
    'ar': 'الخصوصية أولاً'
};

// Detect user's preferred language
function detectUserLanguage() {
    console.log(' Starting language detection...');
    
    // Try multiple methods to detect language
    
    // Method 1: Check URL parameter (highest priority)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && SUPPORTED_LANGUAGES[langParam]) {
        console.log(`✅ Language detected from URL: ${langParam}`);
        return langParam;
    }
    
    // Method 2: Check localStorage (user preference)
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && SUPPORTED_LANGUAGES[savedLang]) {
        console.log(`✅ Language detected from localStorage: ${savedLang}`);
        return savedLang;
    }
    
    // Method 3: Check browser language settings
    const browserLang = navigator.language || navigator.userLanguage;
    console.log(`📱 Browser language detected: ${browserLang}`);
    if (browserLang) {
        // Get base language code (e.g., 'en-US' -> 'en')
        const baseLang = browserLang.split('-')[0].toLowerCase();
        if (SUPPORTED_LANGUAGES[baseLang]) {
            console.log(`✅ Using browser language: ${baseLang}`);
            return baseLang;
        }
    }
    
    // Method 4: Check navigator.languages array
    if (navigator.languages && navigator.languages.length > 0) {
        console.log(` Navigator languages: ${navigator.languages.join(', ')}`);
        for (let lang of navigator.languages) {
            const baseLang = lang.split('-')[0].toLowerCase();
            if (SUPPORTED_LANGUAGES[baseLang]) {
                console.log(`✅ Using navigator language: ${baseLang}`);
                return baseLang;
            }
        }
    }
    
    // Default to English
    console.log(`⚠️ No supported language detected, defaulting to English`);
    return 'en';
}

// Apply translations to the page
function applyTranslations(language) {
    console.log(` Applying translations for language: ${language}`);
    document.documentElement.lang = language;
    document.documentElement.dir = SUPPORTED_LANGUAGES[language].direction;
    
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`📊 Found ${elements.length} elements with data-i18n attribute`);
    
    let translatedCount = 0;
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
            translatedCount++;
        } else if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
            // Fallback to English
            const translation = TRANSLATIONS[key]['en'];
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn(`⚠️ No translation found for key: ${key}`);
        }
    });
    
    console.log(`✅ Successfully translated ${translatedCount}/${elements.length} elements`);
    
    // Handle placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    console.log(`📊 Found ${placeholderElements.length} elements with data-i18n-placeholder attribute`);
    let placeholderTranslatedCount = 0;
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
            element.setAttribute('placeholder', TRANSLATIONS[key][language]);
            placeholderTranslatedCount++;
        } else if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
            element.setAttribute('placeholder', TRANSLATIONS[key]['en']);
            placeholderTranslatedCount++;
        } else {
            console.warn(`⚠️ No translation found for placeholder key: ${key}`);
        }
    });
    console.log(`✅ Successfully translated ${placeholderTranslatedCount}/${placeholderElements.length} placeholder elements`);
    
    // Save preference to localStorage
    localStorage.setItem('preferred_language', language);
    
    // Log detected language (hidden mode - console only)
    console.log(` Language applied: ${SUPPORTED_LANGUAGES[language].flag} ${SUPPORTED_LANGUAGES[language].name} (${language})`);
}

// Initialize i18n system
function initI18n() {
    console.log('🔧 initI18n called, document.readyState:', document.readyState);
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        console.log(' Waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('✅ DOMContentLoaded fired');
            const detectedLang = detectUserLanguage();
            applyTranslations(detectedLang);
        });
    } else {
        console.log('✅ DOM already ready');
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

TRANSLATIONS['seo.faq.title'] = {
    'en': 'Frequently Asked Questions About Image Redaction',
    'zh': '关于图像脱敏的常见问题',
    'es': 'Preguntas frecuentes sobre la edición de imágenes',
    'fr': 'Questions fréquemment posées sur l\'édition d\'images',
    'de': 'Häufig gestellte Fragen zur Bildbearbeitung',
    'ja': '画像編集に関するよくある質問',
    'ko': '이미지 편집에 관한 자주 묻는 질문',
    'pt': 'Perguntas frequentes sobre edição de imagens',
    'ru': 'Часто задаваемые вопросы о редактировании изображений',
    'ar': 'الأسئلة الشائعة حول تحرير الصور'
};

// Use Cases Section
TRANSLATIONS['usecase.blurFaces'] = {
    'en': 'Blur Faces in Photos',
    'zh': '照片中模糊面部',
    'es': 'Difuminar rostros en fotos',
    'fr': 'Flouter les visages dans les photos',
    'de': 'Gesichter in Fotos verwischen',
    'ja': '写真の顔をぼかす',
    'ko': '사진에서 얼굴 흐리기',
    'pt': 'Desfocar rostos em fotos',
    'ru': 'Размытие лиц на фотографиях',
    'ar': 'طمس الوجوه في الصور'
};

TRANSLATIONS['usecase.blurFaces.desc'] = {
    'en': 'Protect identity in screenshots and social media posts',
    'zh': '保护截图和社交媒体帖子中的身份',
    'es': 'Proteger la identidad en capturas de pantalla y publicaciones en redes sociales',
    'fr': 'Protéger l\'identité dans les captures d\'écran et les publications sur les réseaux sociaux',
    'de': 'Identität in Screenshots und Social-Media-Beiträgen schützen',
    'ja': 'スクリーンショットやソーシャルメディア投稿での身元を保護',
    'ko': '스크린샷 및 소셜 미디어 게시물에서 신원 보호',
    'pt': 'Proteger identidade em capturas de tela e publicações em redes sociais',
    'ru': 'Защита личности на скриншотах и в публикациях в социальных сетях',
    'ar': 'حماية الهوية في لقطات الشاشة ومنشورات وسائل التواصل الاجتماعي'
};

TRANSLATIONS['usecase.maskID'] = {
    'en': 'Mask ID Card Numbers',
    'zh': '遮盖身份证号码',
    'es': 'Ocultar números de tarjeta de identificación',
    'fr': 'Masquer les numéros de carte d\'identité',
    'de': 'Ausweisnummern maskieren',
    'ja': 'IDカード番号をマスク',
    'ko': '신분증 번호 마스킹',
    'pt': 'Mascarar números de cartão de identificação',
    'ru': 'Маскировка номеров удостоверений личности',
    'ar': 'إخفاء أرقام بطاقات الهوية'
};

TRANSLATIONS['usecase.maskID.desc'] = {
    'en': 'Hide sensitive information on passports, driver\'s licenses',
    'zh': '隐藏护照、驾驶执照上的敏感信息',
    'es': 'Ocultar información sensible en pasaportes y licencias de conducir',
    'fr': 'Masquer les informations sensibles sur les passeports et permis de conduire',
    'de': 'Sensible Informationen auf Pässen und Führerscheinen verbergen',
    'ja': 'パスポートや運転免許証の機密情報を隠す',
    'ko': '여권 및 운전면허증의 민감한 정보 숨기기',
    'pt': 'Ocultar informações sensíveis em passaportes e carteiras de motorista',
    'ru': 'Скрытие конфиденциальной информации в паспортах и водительских правах',
    'ar': 'إخفاء المعلومات الحساسة على جوازات السفر ورخص القيادة'
};

TRANSLATIONS['usecase.redactBank'] = {
    'en': 'Redact Bank Statements',
    'zh': '脱敏银行对账单',
    'es': 'Editar extractos bancarios',
    'fr': 'Éditer les relevés bancaires',
    'de': 'Kontoauszüge bearbeiten',
    'ja': '銀行取引明細書を編集',
    'ko': '은행 명세서 편집',
    'pt': 'Editar extratos bancários',
    'ru': 'Редактирование банковских выписок',
    'ar': 'تحرير كشوف الحسابات البنكية'
};

TRANSLATIONS['usecase.redactBank.desc'] = {
    'en': 'Obscure account numbers and financial data',
    'zh': '遮盖账号和财务数据',
    'es': 'Ocultar números de cuenta y datos financieros',
    'fr': 'Obscurcir les numéros de compte et les données financières',
    'de': 'Kontonummern und Finanzdaten verbergen',
    'ja': '口座番号と財務データを隠す',
    'ko': '계좌 번호 및 재무 데이터 가리기',
    'pt': 'Ocultar números de conta e dados financeiros',
    'ru': 'Сокрытие номеров счетов и финансовых данных',
    'ar': 'إخفاء أرقام الحسابات والبيانات المالية'
};

TRANSLATIONS['usecase.editPDF'] = {
    'en': 'Edit PDF Documents',
    'zh': '脱敏PDF文档',
    'es': 'Editar documentos PDF',
    'fr': 'Éditer des documents PDF',
    'de': 'PDF-Dokumente bearbeiten',
    'ja': 'PDF文書を編集',
    'ko': 'PDF 문서 편집',
    'pt': 'Editar documentos PDF',
    'ru': 'Редактирование PDF-документов',
    'ar': 'تحرير مستندات PDF'
};

TRANSLATIONS['usecase.editPDF.desc'] = {
    'en': 'Multi-page PDF support with page-by-page redaction',
    'zh': '多页PDF支持，逐页脱敏',
    'es': 'Soporte para PDF de varias páginas con edición página por página',
    'fr': 'Support PDF multi-pages avec édition page par page',
    'de': 'Mehrseitige PDF-Unterstützung mit seitenweiser Bearbeitung',
    'ja': 'ページごとの編集ができる複数ページのPDF対応',
    'ko': '페이지별 편집이 가능한 다중 페이지 PDF 지원',
    'pt': 'Suporte a PDF de várias páginas com edição página por página',
    'ru': 'Поддержка многостраничных PDF с постраничным редактированием',
    'ar': 'دعم ملفات PDF متعددة الصفحات مع التحرير صفحة بصفحة'
};

TRANSLATIONS['usecase.hideCreditCard'] = {
    'en': 'Hide Credit Card Info',
    'zh': '隐藏信用卡信息',
    'es': 'Ocultar información de tarjeta de crédito',
    'fr': 'Masquer les informations de carte de crédit',
    'de': 'Kreditkarteninformationen verbergen',
    'ja': 'クレジットカード情報を隠す',
    'ko': '신용카드 정보 숨기기',
    'pt': 'Ocultar informações de cartão de crédito',
    'ru': 'Скрытие информации о кредитной карте',
    'ar': 'إخفاء معلومات بطاقة الائتمان'
};

TRANSLATIONS['usecase.hideCreditCard.desc'] = {
    'en': 'Secure payment receipts and invoices',
    'zh': '保护支付收据和发票安全',
    'es': 'Asegurar recibos de pago y facturas',
    'fr': 'Sécuriser les reçus de paiement et les factures',
    'de': 'Zahlungsbelege und Rechnungen sichern',
    'ja': '支払い領収書と請求書を安全に',
    'ko': '결제 영수증 및 송장 보안',
    'pt': 'Proteger recibos de pagamento e faturas',
    'ru': 'Защита платежных квитанций и счетов-фактур',
    'ar': 'تأمين إيصالات الدفع والفواتير'
};

TRANSLATIONS['usecase.anonymizeScreenshots'] = {
    'en': 'Anonymize Screenshots',
    'zh': '匿名化截图',
    'es': 'Anonimizar capturas de pantalla',
    'fr': 'Anonymiser les captures d\'écran',
    'de': 'Screenshots anonymisieren',
    'ja': 'スクリーンショットを匿名化',
    'ko': '스크린샷 익명화',
    'pt': 'Anonimizar capturas de tela',
    'ru': 'Анонимизация скриншотов',
    'ar': 'إخفاء هوية لقطات الشاشة'
};

TRANSLATIONS['usecase.anonymizeScreenshots.desc'] = {
    'en': 'Remove personal data before sharing online',
    'zh': '在线分享前删除个人数据',
    'es': 'Eliminar datos personales antes de compartir en línea',
    'fr': 'Supprimer les données personnelles avant de partager en ligne',
    'de': 'Persönliche Daten vor dem Online-Teilen entfernen',
    'ja': 'オンラインで共有する前に個人データを削除',
    'ko': '온라인 공유 전 개인 데이터 제거',
    'pt': 'Remover dados pessoais antes de compartilhar online',
    'ru': 'Удаление личных данных перед публикацией в Интернете',
    'ar': 'إزالة البيانات الشخصية قبل المشاركة عبر الإنترنت'
};

// FAQ Section
TRANSLATIONS['faq.q1.title'] = {
    'en': 'What is image redaction and why do I need it?',
    'zh': '什么是图像脱敏，为什么我需要它？',
    'es': '¿Qué es la edición de imágenes y por qué la necesito?',
    'fr': 'Qu\'est-ce que l\'édition d\'images et pourquoi en ai-je besoin ?',
    'de': 'Was ist Bildbearbeitung und warum brauche ich sie?',
    'ja': '画像編集とは何ですか？なぜ必要ですか？',
    'ko': '이미지 편집이란 무엇이며 왜 필요한가요?',
    'pt': 'O que é edição de imagens e por que preciso disso?',
    'ru': 'Что такое редактирование изображений и зачем оно мне нужно?',
    'ar': 'ما هو تحرير الصور ولماذا أحتاج إليه؟'
};

TRANSLATIONS['faq.q1.answer'] = {
    'en': 'Image redaction is the process of permanently removing or obscuring sensitive information from photos and documents. Whether you\'re sharing a screenshot online, submitting documents for verification, or posting photos on social media, redaction helps protect your privacy by hiding personal data like faces, ID numbers, addresses, and financial information. Our free online tool makes this process simple and secure.',
    'zh': '图像脱敏是从照片和文档中永久删除或遮盖敏感信息的过程。无论您是在线分享截图、提交文档进行验证，还是在社交媒体上发布照片，脱敏都可以通过隐藏面部、身份证号、地址和财务信息等个人数据来帮助保护您的隐私。我们的免费在线工具使这一过程简单而安全。',
    'es': 'La edición de imágenes es el proceso de eliminar u ocultar permanentemente información sensible de fotos y documentos. Ya sea que comparta una captura de pantalla en línea, envíe documentos para verificación o publique fotos en redes sociales, la edición ayuda a proteger su privacidad ocultando datos personales como rostros, números de identificación, direcciones e información financiera. Nuestra herramienta gratuita en línea hace que este proceso sea simple y seguro.',
    'fr': 'L\'édition d\'images est le processus de suppression ou d\'obscurcissement permanent des informations sensibles des photos et documents. Que vous partagiez une capture d\'écran en ligne, soumettiez des documents pour vérification ou publiiez des photos sur les réseaux sociaux, l\'édition aide à protéger votre vie privée en masquant les données personnelles comme les visages, les numéros d\'identification, les adresses et les informations financières. Notre outil gratuit en ligne rend ce processus simple et sécurisé.',
    'de': 'Bildbearbeitung ist der Prozess des dauerhaften Entfernens oder Verbergens sensibler Informationen aus Fotos und Dokumenten. Ob Sie einen Screenshot online teilen, Dokumente zur Überprüfung einreichen oder Fotos in sozialen Medien veröffentlichen, die Bearbeitung hilft, Ihre Privatsphäre zu schützen, indem sie persönliche Daten wie Gesichter, Ausweisnummern, Adressen und Finanzinformationen verbirgt. Unser kostenloses Online-Tool macht diesen Prozess einfach und sicher.',
    'ja': '画像編集は、写真や文書から機密情報を永久に削除または隠すプロセスです。スクリーンショットをオンラインで共有する場合、確認のために文書を提出する場合、またはソーシャルメディアで写真を投稿する場合でも、編集は顔、ID番号、住所、財務情報などの個人データを隠すことでプライバシーを保護するのに役立ちます。当社の無料オンラインツールはこのプロセスをシンプルかつ安全にします。',
    'ko': '이미지 편집은 사진과 문서에서 민감한 정보를 영구적으로 제거하거나 가리는 과정입니다. 스크린샷을 온라인으로 공유하거나, 검증을 위해 문서를 제출하거나, 소셜 미디어에 사진을 게시하는 경우에도 편집은 얼굴, ID 번호, 주소, 재무 정보와 같은 개인 데이터를 숨겨 개인 정보를 보호하는 데 도움이 됩니다. 당사 무료 온라인 도구는 이 과정을 간단하고 안전하게 만듭니다.',
    'pt': 'A edição de imagens é o processo de remover ou obscurecer permanentemente informações confidenciais de fotos e documentos. Quer você esteja compartilhando uma captura de tela online, enviando documentos para verificação ou publicando fotos nas redes sociais, a edição ajuda a proteger sua privacidade ocultando dados pessoais como rostos, números de identificação, endereços e informações financeiras. Nossa ferramenta online gratuita torna esse processo simples e seguro.',
    'ru': 'Редактирование изображений - это процесс постоянного удаления или сокрытия конфиденциальной информации из фотографий и документов. Независимо от того, делитесь ли вы скриншотом в Интернете, отправляете документы для проверки или публикуете фотографии в социальных сетях, редактирование помогает защитить вашу конфиденциальность, скрывая личные данные, такие как лица, идентификационные номера, адреса и финансовая информация. Наш бесплатный онлайн-инструмент делает этот процесс простым и безопасным.',
    'ar': 'تحرير الصور هو عملية إزالة أو طمس المعلومات الحساسة من الصور والمستندات بشكل دائم. سواء كنت تشارك لقطة شاشة عبر الإنترنت، أو تقدم مستندات للتحقق، أو تنشر صورًا على وسائل التواصل الاجتماعي، فإن التحرير يساعد في حماية خصوصيتك من خلال إخفاء البيانات الشخصية مثل الوجوه وأرقام الهوية والعناوين والمعلومات المالية. أداتنا المجانية عبر الإنترنت تجعل هذه العملية بسيطة وآمنة.'
};

TRANSLATIONS['faq.q2.title'] = {
    'en': 'How does this local image redaction tool protect my privacy?',
    'zh': '这个本地图像脱敏器如何保护我的隐私？',
    'es': '¿Cómo protege mi privacidad este editor de imágenes local?',
    'fr': 'Comment cet éditeur d\'images local protège-t-il ma vie privée ?',
    'de': 'Wie schützt dieser lokale Bildeditor meine Privatsphäre?',
    'ja': 'このローカル画像エディターはどのようにしてプライバシーを保護しますか？',
    'ko': '이 로컬 이미지 편집기는 어떻게 내 개인 정보를 보호하나요?',
    'pt': 'Como este editor de imagens local protege minha privacidade?',
    'ru': 'Как этот локальный редактор изображений защищает мою конфиденциальность?',
    'ar': 'كيف يحمي محرر الصور المحلي هذا خصوصيتي؟'
};

TRANSLATIONS['faq.q2.answer'] = {
    'en': 'Unlike most online photo redaction tools, our tool processes everything 100% locally in your browser. This means your images and PDFs are never uploaded to any server. All redaction happens on your own device using JavaScript, ensuring complete confidentiality. This is crucial when handling sensitive documents like passport copies, bank statements, medical records, or confidential business documents.',
    'zh': '与大多数在线照片脱敏器不同，我们的工具在浏览器中100%本地处理所有内容。这意味着您的图片和PDF永远不会上传到任何服务器。所有脱敏都使用JavaScript在您自己的设备上完成，确保完全机密。这在处理护照副本、银行对账单、医疗记录或机密商业文档等敏感文档时至关重要。',
    'es': 'A diferencia de la mayoría de los editores de fotos en línea, nuestra herramienta procesa todo 100% localmente en su navegador. Esto significa que sus imágenes y PDF nunca se cargan en ningún servidor. Toda la edición ocurre en su propio dispositivo usando JavaScript, garantizando completa confidencialidad. Esto es crucial al manejar documentos confidenciales como copias de pasaportes, extractos bancarios, registros médicos o documentos comerciales confidenciales.',
    'fr': 'Contrairement à la plupart des éditeurs de photos en ligne, notre outil traite tout 100% localement dans votre navigateur. Cela signifie que vos images et PDF ne sont jamais téléchargés sur un serveur. Tout l\'édition se fait sur votre propre appareil en utilisant JavaScript, garantissant une confidentialité complète. C\'est crucial lors du traitement de documents sensibles comme des copies de passeport, des relevés bancaires, des dossiers médicaux ou des documents commerciaux confidentiels.',
    'de': 'Im Gegensatz zu den meisten Online-Fotoeditoren verarbeitet unser Tool alles 100% lokal in Ihrem Browser. Das bedeutet, dass Ihre Bilder und PDFs niemals auf einen Server hochgeladen werden. Die gesamte Bearbeitung erfolgt auf Ihrem eigenen Gerät mit JavaScript, was vollständige Vertraulichkeit gewährleistet. Dies ist entscheidend beim Umgang mit sensiblen Dokumenten wie Passkopien, Kontoauszügen, medizinischen Aufzeichnungen oder vertraulichen Geschäftsdokumenten.',
    'ja': 'ほとんどのオンライン写真エディターとは異なり、当社のツールはブラウザ内で100%ローカルにすべてを処理します。これは、画像やPDFがサーバーにアップロードされないことを意味します。すべての編集はJavaScriptを使用して自分のデバイス上で行われ、完全な機密性を確保します。これは、パスポートのコピー、銀行取引明細書、医療記録、または機密ビジネス文書などの機密文書を扱う際に重要です。',
    'ko': '대부분의 온라인 사진 편집기와 달리 당사의 도구는 브라우저에서 100% 로컬로 모든 것을 처리합니다. 이는 이미지와 PDF가 서버에 업로드되지 않음을 의미합니다. 모든 편집은 JavaScript를 사용하여 사용자의 장치에서 발생하여 완전한 기밀성을 보장합니다. 이는 여권 사본, 은행 명세서, 의료 기록 또는 기밀 비즈니스 문서와 같은 민감한 문서를 처리할 때 중요합니다.',
    'pt': 'Ao contrário da maioria dos editores de fotos online, nossa ferramenta processa tudo 100% localmente no seu navegador. Isso significa que suas imagens e PDFs nunca são carregados em nenhum servidor. Toda a edição acontece no seu próprio dispositivo usando JavaScript, garantindo total confidencialidade. Isso é crucial ao lidar com documentos confidenciais como cópias de passaporte, extratos bancários, registros médicos ou documentos comerciais confidenciais.',
    'ru': 'В отличие от большинства онлайн-редакторов фотографий, наш инструмент обрабатывает все 100% локально в вашем браузере. Это означает, что ваши изображения и PDF никогда не загружаются на сервер. Вся обработка происходит на вашем собственном устройстве с использованием JavaScript, обеспечивая полную конфиденциальность. Это имеет решающее значение при работе с конфиденциальными документами, такими как копии паспортов, банковские выписки, медицинские записи или конфиденциальные бизнес-документы.',
    'ar': 'على عكس معظم محررات الصور عبر الإنترنت، تعالج أداتنا كل شيء بنسبة 100٪ محليًا في متصفحك. هذا يعني أن صورك وملفات PDF لا يتم تحميلها أبدًا على أي خادم. تحدث جميع عمليات التحرير على جهازك الخاص باستخدام JavaScript، مما يضمن السرية التامة. هذا أمر بالغ الأهمية عند التعامل مع المستندات الحساسة مثل نسخ جوازات السفر وكشوف الحسابات البنكية والسجلات الطبية أو مستندات الأعمال السرية.'
};

TRANSLATIONS['faq.q3.title'] = {
    'en': 'Can I redact multi-page PDF files for free?',
    'zh': '我可以免费脱敏多页PDF文件吗？',
    'es': '¿Puedo editar archivos PDF de varias páginas gratis?',
    'fr': 'Puis-je éditer des fichiers PDF multi-pages gratuitement ?',
    'de': 'Kann ich mehrseitige PDF-Dateien kostenlos bearbeiten?',
    'ja': '複数ページのPDFファイルを無料で編集できますか？',
    'ko': '다중 페이지 PDF 파일을 무료로 편집할 수 있나요?',
    'pt': 'Posso editar arquivos PDF de várias páginas gratuitamente?',
    'ru': 'Могу ли я бесплатно редактировать многостраничные PDF-файлы?',
    'ar': 'هل يمكنني تحرير ملفات PDF متعددة الصفحات مجانًا؟'
};

TRANSLATIONS['faq.q3.answer'] = {
    'en': 'Yes! Our free PDF redaction tool supports multi-page documents. You can navigate through pages, redact each page individually, and export the entire document as a single PDF file. Each page maintains its quality, and the exported PDF preserves all your redactions. This is perfect for redacting contracts, legal documents, reports, or any multi-page PDF that needs sensitive information removed.',
    'zh': '是的！我们的免费PDF脱敏工具支持多页文档。您可以浏览页面，单独脱敏每个页面，并将整个文档导出为单个PDF文件。每个页面都保持其质量，导出的PDF保留所有您的脱敏。这非常适合脱敏合同、法律文档、报告或任何需要删除敏感信息的多页PDF。',
    'es': '¡Sí! Nuestra herramienta gratuita de edición de PDF admite documentos de varias páginas. Puede navegar por las páginas, editar cada página individualmente y exportar todo el documento como un solo archivo PDF. Cada página mantiene su calidad y el PDF exportado conserva todas sus ediciones. Esto es perfecto para editar contratos, documentos legales, informes o cualquier PDF de varias páginas que necesite eliminar información confidencial.',
    'fr': 'Oui ! Notre outil gratuit d\'édition PDF prend en charge les documents multi-pages. Vous pouvez naviguer à travers les pages, éditer chaque page individuellement et exporter l\'ensemble du document en tant que fichier PDF unique. Chaque page conserve sa qualité et le PDF exporté préserve toutes vos éditions. C\'est parfait pour éditer des contrats, des documents juridiques, des rapports ou tout PDF multi-pages nécessitant la suppression d\'informations sensibles.',
    'de': 'Ja! Unser kostenloses PDF-Bearbeitungstool unterstützt mehrseitige Dokumente. Sie können durch Seiten navigieren, jede Seite einzeln bearbeiten und das gesamte Dokument als einzelne PDF-Datei exportieren. Jede Seite behält ihre Qualität und die exportierte PDF bewahrt alle Ihre Bearbeitungen. Dies ist perfekt zum Bearbeiten von Verträgen, juristischen Dokumenten, Berichten oder allen mehrseitigen PDFs, bei denen sensible Informationen entfernt werden müssen.',
    'ja': 'はい！当社の無料PDF編集ツールは複数ページの文書に対応しています。ページを移動し、各ページを個別に編集し、文書全体を単一のPDFファイルとしてエクスポートできます。各ページは品質を維持し、エクスポートされたPDFはすべての編集を保持します。これは、契約書、法律文書、レポート、または機密情報を削除する必要がある複数ページのPDFを編集するのに最適です。',
    'ko': '네! 당사 무료 PDF 편집 도구는 다중 페이지 문서를 지원합니다. 페이지를 탐색하고 각 페이지를 개별적으로 편집하며 전체 문서를 단일 PDF 파일로 내보낼 수 있습니다. 각 페이지는 품질을 유지하고 내보낸 PDF는 모든 편집을 보존합니다. 이는 계약서, 법률 문서, 보고서 또는 민감한 정보를 제거해야 하는 다중 페이지 PDF를 편집하는 데 완벽합니다.',
    'pt': 'Sim! Nossa ferramenta gratuita de edição de PDF suporta documentos de várias páginas. Você pode navegar pelas páginas, editar cada página individualmente e exportar todo o documento como um único arquivo PDF. Cada página mantém sua qualidade e o PDF exportado preserva todas as suas edições. Isso é perfeito para editar contratos, documentos legais, relatórios ou qualquer PDF de várias páginas que precise remover informações confidenciais.',
    'ru': 'Да! Наш бесплатный инструмент для редактирования PDF поддерживает многостраничные документы. Вы можете перемещаться по страницам, редактировать каждую страницу отдельно и экспортировать весь документ как один PDF-файл. Каждая страница сохраняет свое качество, а экспортированный PDF сохраняет все ваши правки. Это идеально подходит для редактирования контрактов, юридических документов, отчетов или любых многостраничных PDF, из которых нужно удалить конфиденциальную информацию.',
    'ar': 'نعم! أداة تحرير PDF المجانية الخاصة بنا تدعم المستندات متعددة الصفحات. يمكنك التنقل بين الصفحات وتحرير كل صفحة على حدة وتصدير المستند بأكمله كملف PDF واحد. تحافظ كل صفحة على جودتها ويحافظ ملف PDF المُصدَّر على جميع تحريراتك. هذا مثالي لتحرير العقود والمستندات القانونية والتقارير أو أي ملف PDF متعدد الصفحات يحتاج إلى إزالة المعلومات الحساسة.'
};

TRANSLATIONS['faq.q4.title'] = {
    'en': 'What\'s the best way to blur faces in photos?',
    'zh': '在照片中模糊面部的最佳方法是什么？',
    'es': '¿Cuál es la mejor manera de difuminar rostros en fotos?',
    'fr': 'Quelle est la meilleure façon de flouter les visages dans les photos ?',
    'de': 'Was ist der beste Weg, um Gesichter in Fotos zu verwischen?',
    'ja': '写真の顔をぼかす最良の方法は何ですか？',
    'ko': '사진에서 얼굴을 흐리는 가장 좋은 방법은 무엇인가요?',
    'pt': 'Qual é a melhor maneira de desfocar rostos em fotos?',
    'ru': 'Какой лучший способ размыть лица на фотографиях?',
    'ar': 'ما هي أفضل طريقة لطمس الوجوه في الصور؟'
};

TRANSLATIONS['faq.q4.answer'] = {
    'en': 'To blur faces effectively: (1) Upload your photo to our tool, (2) Select the area covering the face by clicking and dragging, (3) Choose a solid color or blur effect, (4) Adjust the intensity if needed for complete coverage, (5) Export the edited image. For best results, make sure the selection completely covers facial features. You can use black or white boxes for maximum obscurity, or choose a skin-tone color for a more natural look.',
    'zh': '要有效模糊面部：(1) 将照片上传到我们的工具，(2) 通过点击并拖动选择覆盖面部的区域，(3) 选择纯色或模糊效果，(4) 如果需要，调整强度以实现完全覆盖，(5) 导出脱敏后的图像。为了获得最佳效果，请确保选择完全覆盖面部特征。您可以使用黑色或白色方框以获得最大程度的隐蔽性，或者选择肤色以获得更自然的外观。',
    'es': 'Para difuminar rostros eficazmente: (1) Suba su foto a nuestra herramienta, (2) Seleccione el área que cubre el rostro haciendo clic y arrastrando, (3) Elija un color sólido o efecto de desenfoque, (4) Ajuste la intensidad si es necesario para una cobertura completa, (5) Exporte la imagen editada. Para obtener mejores resultados, asegúrese de que la selección cubra completamente las características faciales. Puede usar cajas negras o blancas para máxima oscuridad, o elegir un color de tono de piel para un aspecto más natural.',
    'fr': 'Pour flouter efficacement les visages : (1) Téléchargez votre photo sur notre outil, (2) Sélectionnez la zone couvrant le visage en cliquant et en faisant glisser, (3) Choisissez une couleur unie ou un effet de flou, (4) Ajustez l\'intensité si nécessaire pour une couverture complète, (5) Exportez l\'image éditée. Pour de meilleurs résultats, assurez-vous que la sélection couvre complètement les traits du visage. Vous pouvez utiliser des boîtes noires ou blanches pour une obscurité maximale, ou choisir une couleur de ton de peau pour un aspect plus naturel.',
    'de': 'Um Gesichter effektiv zu verwischen: (1) Laden Sie Ihr Foto in unser Tool hoch, (2) Wählen Sie den Bereich, der das Gesicht bedeckt, indem Sie klicken und ziehen, (3) Wählen Sie eine einfarbige Farbe oder einen Weichzeichnereffekt, (4) Passen Sie die Intensität bei Bedarf für vollständige Abdeckung an, (5) Exportieren Sie das bearbeitete Bild. Für beste Ergebnisse stellen Sie sicher, dass die Auswahl die Gesichtszüge vollständig abdeckt. Sie können schwarze oder weiße Kästen für maximale Undurchsichtigkeit verwenden oder eine Hautfarbe für ein natürlicheres Aussehen wählen.',
    'ja': '顔を効果的にぼかすには：(1) 写真をツールにアップロード、(2) クリックしてドラッグして顔を覆う領域を選択、(3) 単色またはぼかし効果を選択、(4) 完全なカバーageのために必要に応じて強度を調整、(5) 編集した画像をエクスポート。最良の結果を得るには、選択が顔の特徴を完全に覆っていることを確認してください。最大の不透明性のために黒または白のボックスを使用するか、より自然な外観のために肌色を選択できます。',
    'ko': '얼굴을 효과적으로 흐리게 하려면: (1) 사진을 도구에 업로드, (2) 클릭하고 드래그하여 얼굴을 덮는 영역 선택, (3) 단색 또는 흐림 효과 선택, (4) 완전한 커버리지를 위해 필요하면 강도 조정, (5) 편집된 이미지 내보내기. 최상의 결과를 얻으려면 선택이 얼굴 특징을 완전히 덮는지 확인하세요. 최대 불투명도를 위해 검은색 또는 흰색 상자를 사용하거나 더 자연스러운 외관을 위해 피부 톤 색상을 선택할 수 있습니다.',
    'pt': 'Para desfocar rostos efetivamente: (1) Carregue sua foto em nossa ferramenta, (2) Selecione a área cobrindo o rosto clicando e arrastando, (3) Escolha uma cor sólida ou efeito de desfoque, (4) Ajuste a intensidade se necessário para cobertura completa, (5) Exporte a imagem editada. Para melhores resultados, certifique-se de que a seleção cubra completamente as características faciais. Você pode usar caixas pretas ou brancas para máxima obscuridade, ou escolher uma cor de tom de pele para uma aparência mais natural.',
    'ru': 'Чтобы эффективно размыть лица: (1) Загрузите фотографию в наш инструмент, (2) Выберите область, покрывающую лицо, щелкнув и перетащив, (3) Выберите сплошной цвет или эффект размытия, (4) При необходимости отрегулируйте интенсивность для полного покрытия, (5) Экспортируйте отредактированное изображение. Для лучших результатов убедитесь, что выбор полностью покрывает черты лица. Вы можете использовать черные или белые коробки для максимальной непрозрачности или выбрать цвет тона кожи для более естественного вида.',
    'ar': 'لطمس الوجوه بفعالية: (1) ارفع صورتك إلى أداتنا، (2) حدد المنطقة التي تغطي الوجه بالنقر والسحب، (3) اختر لونًا خالصًا أو تأثير ضبابي، (4) اضبط الشدة إذا لزم الأمر للتغطية الكاملة، (5) صدّر الصورة المُحررة. للحصول على أفضل النتائج، تأكد من أن التحديد يغطي ملامح الوجه بالكامل. يمكنك استخدام مربعات سوداء أو بيضاء لأقصى قدر من الغموض، أو اختيار لون بشرة لمظهر أكثر طبيعية.'
};

TRANSLATIONS['faq.q5.title'] = {
    'en': 'Is this really a free alternative to paid redaction software?',
    'zh': '这真的是付费脱敏软件的免费替代品吗？',
    'es': '¿Es realmente una alternativa gratuita al software de edición de pago?',
    'fr': 'Est-ce vraiment une alternative gratuite aux logiciels d\'édition payants ?',
    'de': 'Ist dies wirklich eine kostenlose Alternative zu kostenpflichtiger Bearbeitungssoftware?',
    'ja': 'これは本当に有料編集ソフトウェアの無料代替品ですか？',
    'ko': '이것이 정말로 유료 편집 소프트웨어의 무료 대안인가요?',
    'pt': 'Esta é realmente uma alternativa gratuita ao software de edição pago?',
    'ru': 'Действительно ли это бесплатная альтернатива платному программному обеспечению для редактирования?',
    'ar': 'هل هذا حقًا بديل مجاني لبرامج التحرير المدفوعة؟'
};

TRANSLATIONS['faq.q5.answer'] = {
    'en': 'Absolutely! Our tool is completely free with no hidden costs. Unlike expensive software like Adobe Acrobat Pro or subscription-based services, we offer professional-grade redaction features at no cost. There are no watermarks, no usage limits, and no registration required. We believe privacy protection should be accessible to everyone.',
    'zh': '绝对是的！我们的工具完全免费，没有隐藏成本。与Adobe Acrobat Pro等昂贵软件或基于订阅的服务不同，我们免费提供专业级脱敏功能。没有水印，没有使用限制，也不需要注册。我们相信隐私保护应该对每个人都可以访问。',
    'es': '¡Absolutamente! Nuestra herramienta es completamente gratuita sin costos ocultos. A diferencia del software costoso como Adobe Acrobat Pro o los servicios basados en suscripción, ofrecemos funciones de edición de nivel profesional sin costo. No hay marcas de agua, no hay límites de uso y no se requiere registro. Creemos que la protección de la privacidad debería ser accesible para todos.',
    'fr': 'Absolument ! Notre outil est entièrement gratuit sans coûts cachés. Contrairement aux logiciels coûteux comme Adobe Acrobat Pro ou aux services basés sur un abonnement, nous offrons des fonctionnalités d\'édition de niveau professionnel sans frais. Il n\'y a pas de filigranes, pas de limites d\'utilisation et aucune inscription requise. Nous croyons que la protection de la vie privée devrait être accessible à tous.',
    'de': 'Absolut! Unser Tool ist völlig kostenlos ohne versteckte Kosten. Im Gegensatz zu teurer Software wie Adobe Acrobat Pro oder abonnementbasierten Diensten bieten wir professionelle Bearbeitungsfunktionen kostenlos an. Es gibt keine Wasserzeichen, keine Nutzungsbeschränkungen und keine Registrierung erforderlich. Wir glauben, dass Datenschutz für alle zugänglich sein sollte.',
    'ja': 'もちろんです！当社のツールは隠れたコストなしで完全に無料です。Adobe Acrobat Proなどの高価なソフトウェアやサブスクリプションベースのサービスとは異なり、プロフェッショナルグレードの編集機能を無償で提供します。透かしはなく、使用制限もなく、登録も不要です。プライバシー保護は誰にでもアクセスできるべきだと信じています。',
    'ko': '물론입니다! 당사 도구는 숨겨진 비용 없이 완전히 무료입니다. Adobe Acrobat Pro와 같은 비싼 소프트웨어나 구독 기반 서비스와 달리 당사는 프로페셔널급 편집 기능을 무상으로 제공합니다. 워터마크가 없고 사용 제한이 없으며 등록이 필요하지 않습니다. 당사는 개인 정보 보호가 모두에게 접근 가능해야 한다고 믿습니다.',
    'pt': 'Absolutamente! Nossa ferramenta é completamente gratuita sem custos ocultos. Ao contrário de softwares caros como Adobe Acrobat Pro ou serviços baseados em assinatura, oferecemos recursos de edição de nível profissional sem custo. Não há marcas d\'água, não há limites de uso e nenhum registro é necessário. Acreditamos que a proteção da privacidade deve ser acessível a todos.',
    'ru': 'Абсолютно! Наш инструмент совершенно бесплатен без скрытых расходов. В отличие от дорогого программного обеспечения, такого как Adobe Acrobat Pro, или сервисов на основе подписки, мы предлагаем профессиональные функции редактирования бесплатно. Нет водяных знаков, нет ограничений на использование и не требуется регистрация. Мы считаем, что защита конфиденциальности должна быть доступна каждому.',
    'ar': 'بالتأكيد! أداتنا مجانية تمامًا بدون تكاليف خفية. على عكس البرامج باهظة الثمن مثل Adobe Acrobat Pro أو الخدمات القائمة على الاشتراك، نقدم ميزات تحرير احترافية بدون تكلفة. لا توجد علامات مائية، ولا حدود للاستخدام، ولا يلزم التسجيل. نعتقد أن حماية الخصوصية يجب أن تكون متاحة للجميع.'
};

TRANSLATIONS['faq.q6.title'] = {
    'en': 'Which file formats can I edit and export?',
    'zh': '我可以脱敏和导出哪些文件格式？',
    'es': '¿Qué formatos de archivo puedo editar y exportar?',
    'fr': 'Quels formats de fichier puis-je éditer et exporter ?',
    'de': 'Welche Dateiformate kann ich bearbeiten und exportieren?',
    'ja': 'どのファイル形式を編集およびエクスポートできますか？',
    'ko': '어떤 파일 형식을 편집하고 내보낼 수 있나요?',
    'pt': 'Quais formatos de arquivo posso editar e exportar?',
    'ru': 'Какие форматы файлов я могу редактировать и экспортировать?',
    'ar': 'ما هي تنسيقات الملفات التي يمكنني تحريرها وتصديرها؟'
};

TRANSLATIONS['faq.q6.answer'] = {
    'en': 'We support all major image formats including JPG/JPEG, PNG, GIF, and WebP. For PDF files, you can import and export multi-page documents. The tool preserves the original file format when exporting - if you upload a JPG, you can download as JPG; if you upload a PDF, you get a PDF back. This ensures compatibility with your workflow.',
    'zh': '我们支持所有主要图像格式，包括JPG/JPEG、PNG、GIF和WebP。对于PDF文件，您可以导入和导出多页文档。该工具在导出时保留原始文件格式 - 如果您上传JPG，则可以下载为JPG；如果您上传PDF，则会得到PDF。这确保了与工作流的兼容性。',
    'es': 'Admitimos todos los formatos de imagen principales, incluidos JPG/JPEG, PNG, GIF y WebP. Para archivos PDF, puede importar y exportar documentos de varias páginas. La herramienta conserva el formato de archivo original al exportar: si carga un JPG, puede descargarlo como JPG; si carga un PDF, obtiene un PDF. Esto garantiza la compatibilidad con su flujo de trabajo.',
    'fr': 'Nous prenons en charge tous les principaux formats d\'image, y compris JPG/JPEG, PNG, GIF et WebP. Pour les fichiers PDF, vous pouvez importer et exporter des documents multi-pages. L\'outil conserve le format de fichier original lors de l\'exportation - si vous téléchargez un JPG, vous pouvez le télécharger en JPG ; si vous téléchargez un PDF, vous obtenez un PDF. Cela garantit la compatibilité avec votre flux de travail.',
    'de': 'Wir unterstützen alle gängigen Bildformate, einschließlich JPG/JPEG, PNG, GIF und WebP. Für PDF-Dateien können Sie mehrseitige Dokumente importieren und exportieren. Das Tool behält das ursprüngliche Dateiformat beim Exportieren bei - wenn Sie ein JPG hochladen, können Sie es als JPG herunterladen; wenn Sie ein PDF hochladen, erhalten Sie ein PDF zurück. Dies gewährleistet die Kompatibilität mit Ihrem Arbeitsablauf.',
    'ja': 'JPG/JPEG、PNG、GIF、WebPを含むすべての主要な画像形式をサポートしています。PDFファイルの場合、複数ページのドキュメントをインポートおよびエクスポートできます。ツールはエクスポート時に元のファイル形式を保持します-JPGをアップロードするとJPGとしてダウンロードできます。PDFをアップロードするとPDFが返されます。これにより、ワークフローとの互換性が確保されます。',
    'ko': 'JPG/JPEG, PNG, GIF 및 WebP를 포함한 모든 주요 이미지 형식을 지원합니다. PDF 파일의 경우 다중 페이지 문서를 가져오고 내보낼 수 있습니다. 도구는 내보낼 때 원래 파일 형식을 유지합니다. JPG를 업로드하면 JPG로 다운로드할 수 있고 PDF를 업로드하면 PDF를 받습니다. 이렇게 하면 워크플로우와의 호환성이 보장됩니다.',
    'pt': 'Suportamos todos os principais formatos de imagem, incluindo JPG/JPEG, PNG, GIF e WebP. Para arquivos PDF, você pode importar e exportar documentos de várias páginas. A ferramenta preserva o formato de arquivo original ao exportar - se você carregar um JPG, pode baixá-lo como JPG; se você carregar um PDF, recebe um PDF de volta. Isso garante compatibilidade com seu fluxo de trabalho.',
    'ru': 'Мы поддерживаем все основные форматы изображений, включая JPG/JPEG, PNG, GIF и WebP. Для файлов PDF вы можете импортировать и экспортировать многостраничные документы. Инструмент сохраняет исходный формат файла при экспорте - если вы загружаете JPG, вы можете скачать его как JPG; если вы загружаете PDF, вы получаете PDF обратно. Это обеспечивает совместимость с вашим рабочим процессом.',
    'ar': 'ندعم جميع تنسيقات الصور الرئيسية بما في ذلك JPG/JPEG وPNG وGIF وWebP. بالنسبة لملفات PDF، يمكنك استيراد وتصدير المستندات متعددة الصفحات. تحافظ الأداة على تنسيق الملف الأصلي عند التصدير - إذا قمت بتحميل JPG، فيمكنك تنزيله كـ JPG؛ وإذا قمت بتحميل PDF، فستحصل على PDF مرة أخرى. يضمن هذا التوافق مع سير عملك.'
};

TRANSLATIONS['faq.q7.title'] = {
    'en': 'How do I hide ID numbers and credit card information?',
    'zh': '如何隐藏身份证号码和信用卡信息？',
    'es': '¿Cómo oculto números de identificación e información de tarjetas de crédito?',
    'fr': 'Comment masquer les numéros d\'identification et les informations de carte de crédit ?',
    'de': 'Wie verberge ich Ausweisnummern und Kreditkarteninformationen?',
    'ja': 'ID番号とクレジットカード情報を隠すにはどうすればよいですか？',
    'ko': '신분증 번호와 신용카드 정보를 숨기려면 어떻게 해야 하나요?',
    'pt': 'Como escondo números de identificação e informações de cartão de crédito?',
    'ru': 'Как скрыть номера удостоверений личности и информацию о кредитной карте?',
    'ar': 'كيف أخفي أرقام الهوية ومعلومات بطاقة الائتمان؟'
};

TRANSLATIONS['faq.q7.answer'] = {
    'en': 'For maximum security when hiding sensitive numbers: (1) Upload your document image, (2) Carefully select the area containing the ID number, SSN, or credit card digits, (3) Use a solid black or white box for complete coverage, (4) Make sure the selection extends slightly beyond the text edges, (5) Preview to ensure nothing is visible, (6) Export securely. Always double-check that all sensitive data is fully obscured before sharing.',
    'zh': '隐藏敏感号码时的最大安全性：(1) 上传文档图像，(2) 仔细选择包含身份证号、社会安全号或信用卡数字的区域，(3) 使用纯黑色或白色方框以实现完全覆盖，(4) 确保选择略微超出文本边缘，(5) 预览以确保没有任何内容可见，(6) 安全导出。在分享之前，务必仔细检查所有敏感数据是否完全被遮盖。',
    'es': 'Para máxima seguridad al ocultar números sensibles: (1) Suba la imagen de su documento, (2) Seleccione cuidadosamente el área que contiene el número de identificación, SSN o dígitos de tarjeta de crédito, (3) Use una caja negra o blanca sólida para cobertura completa, (4) Asegúrese de que la selección se extienda ligeramente más allá de los bordes del texto, (5) Obtenga una vista previa para asegurarse de que nada sea visible, (6) Exporte de forma segura. Siempre verifique dos veces que todos los datos sensibles estén completamente ocultos antes de compartir.',
    'fr': 'Pour une sécurité maximale lors du masquage de numéros sensibles : (1) Téléchargez l\'image de votre document, (2) Sélectionnez soigneusement la zone contenant le numéro d\'identification, le SSN ou les chiffres de la carte de crédit, (3) Utilisez une boîte noire ou blanche unie pour une couverture complète, (4) Assurez-vous que la sélection s\'étend légèrement au-delà des bords du texte, (5) Prévisualisez pour vous assurer que rien n\'est visible, (6) Exportez en toute sécurité. Vérifiez toujours deux fois que toutes les données sensibles sont complètement masquées avant de partager.',
    'de': 'Für maximale Sicherheit beim Verbergen sensibler Nummern: (1) Laden Sie Ihr Dokumentbild hoch, (2) Wählen Sie sorgfältig den Bereich aus, der die Ausweisnummer, Sozialversicherungsnummer oder Kreditkartenziffern enthält, (3) Verwenden Sie ein solides schwarzes oder weißes Feld für vollständige Abdeckung, (4) Stellen Sie sicher, dass die Auswahl leicht über die Textkanten hinausgeht, (5) Zeigen Sie eine Vorschau an, um sicherzustellen, dass nichts sichtbar ist, (6) Exportieren Sie sicher. Überprüfen Sie immer doppelt, ob alle sensiblen Daten vollständig verborgen sind, bevor Sie sie teilen.',
    'ja': '機密番号を隠す際の最大限のセキュリティ：(1) 文書画像をアップロード、(2) ID番号、社会保障番号、またはクレジットカードの数字を含む領域を注意深く選択、(3) 完全なカバーageのために純粋な黒または白のボックスを使用、(4) 選択がテキストエッジをわずかに超えていることを確認、(5) 何も表示されていないことを確認するためにプレビュー、(6) 安全にエクスポート。共有する前に、すべての機密データが完全に隠されていることを常に再確認してください。',
    'ko': '민감한 번호를 숨길 때 최대 보안을 위해: (1) 문서 이미지 업로드, (2) 신분증 번호, 사회 보장 번호 또는 신용카드 숫자가 포함된 영역을 주의 깊게 선택, (3) 완전한 커버리지를 위해 단색 검은색 또는 흰색 상자 사용, (4) 선택이 텍스트 가장자리를 약간 넘어서도록 확인, (5) 아무것도 표시되지 않는지 미리보기로 확인, (6) 안전하게 내보내기. 공유하기 전에 모든 민감한 데이터가 완전히 가려졌는지 항상 다시 확인하세요.',
    'pt': 'Para segurança máxima ao ocultar números confidenciais: (1) Carregue a imagem do seu documento, (2) Selecione cuidadosamente a área contendo o número de identificação, CPF ou dígitos do cartão de crédito, (3) Use uma caixa preta ou branca sólida para cobertura completa, (4) Certifique-se de que a seleção se estenda ligeiramente além das bordas do texto, (5) Visualize para garantir que nada esteja visível, (6) Exporte com segurança. Sempre verifique duas vezes se todos os dados confidenciais estão completamente ocultos antes de compartilhar.',
    'ru': 'Для максимальной безопасности при скрытии конфиденциальных номеров: (1) Загрузите изображение документа, (2) Тщательно выберите область, содержащую номер удостоверения личности, номер социального страхования или цифры кредитной карты, (3) Используйте сплошной черный или белый прямоугольник для полного покрытия, (4) Убедитесь, что выбор немного выходит за края текста, (5) Предварительный просмотр, чтобы убедиться, что ничего не видно, (6) Безопасный экспорт. Всегда дважды проверяйте, что все конфиденциальные данные полностью скрыты перед публикацией.',
    'ar': 'للحصول على أقصى قدر من الأمان عند إخفاء الأرقام الحساسة: (1) ارفع صورة مستندك، (2) حدد بعناية المنطقة التي تحتوي على رقم الهوية أو رقم الضمان الاجتماعي أو أرقام بطاقة الائتمان، (3) استخدم مربعًا أسود أو أبيض خالصًا للتغطية الكاملة، (4) تأكد من أن التحديد يمتد قليلاً خارج حواف النص، (5) اعرض معاينة للتأكد من عدم ظهور أي شيء، (6) صدّر بأمان. تحقق دائمًا مرتين من أن جميع البيانات الحساسة مغطاة بالكامل قبل المشاركة.'
};

TRANSLATIONS['faq.q8.title'] = {
    'en': 'Does this tool work on mobile devices?',
    'zh': '这个工具可以在移动设备上使用吗？',
    'es': '¿Funciona esta herramienta en dispositivos móviles?',
    'fr': 'Cet outil fonctionne-t-il sur les appareils mobiles ?',
    'de': 'Funktioniert dieses Tool auf mobilen Geräten?',
    'ja': 'このツールはモバイルデバイスで動作しますか？',
    'ko': '이 도구는 모바일 기기에서 작동하나요?',
    'pt': 'Esta ferramenta funciona em dispositivos móveis?',
    'ru': 'Работает ли этот инструмент на мобильных устройствах?',
    'ar': 'هل تعمل هذه الأداة على الأجهزة المحمولة؟'
};

TRANSLATIONS['faq.q8.answer'] = {
    'en': 'Yes! Our responsive design works perfectly on smartphones and tablets running iOS or Android. You can upload photos directly from your camera roll, take new photos, or select PDF files. The touch-friendly interface makes it easy to select areas for redaction on smaller screens. Everything runs in your mobile browser - no app installation needed.',
    'zh': '是的！我们的响应式设计在运行iOS或Android的智能手机和平板电脑上完美工作。您可以直接从相机胶卷上传照片、拍摄新照片或选择PDF文件。触摸友好的界面使在小屏幕上选择脱敏区域变得容易。一切都在您的移动浏览器中运行 - 无需安装应用程序。',
    'es': '¡Sí! Nuestro diseño responsivo funciona perfectamente en teléfonos inteligentes y tabletas que ejecutan iOS o Android. Puede cargar fotos directamente desde su carrete de cámara, tomar nuevas fotos o seleccionar archivos PDF. La interfaz amigable con el tacto facilita la selección de áreas para editar en pantallas más pequeñas. Todo se ejecuta en su navegador móvil: no es necesaria la instalación de aplicaciones.',
    'fr': 'Oui ! Notre conception réactive fonctionne parfaitement sur les smartphones et les tablettes exécutant iOS ou Android. Vous pouvez télécharger des photos directement depuis votre pellicule, prendre de nouvelles photos ou sélectionner des fichiers PDF. L\'interface conviviale au toucher facilite la sélection des zones à éditer sur les petits écrans. Tout s\'exécute dans votre navigateur mobile - aucune installation d\'application n\'est nécessaire.',
    'de': 'Ja! Unser responsives Design funktioniert einwandfrei auf Smartphones und Tablets mit iOS oder Android. Sie können Fotos direkt aus Ihrer Kamerarolle hochladen, neue Fotos aufnehmen oder PDF-Dateien auswählen. Die berührungsfreundliche Oberfläche erleichtert die Auswahl von Bereichen zur Bearbeitung auf kleineren Bildschirmen. Alles läuft in Ihrem mobilen Browser - keine App-Installation erforderlich.',
    'ja': 'はい！当社のレスポンシブデザインは、iOSまたはAndroidを実行しているスマートフォンやタブレットで完璧に機能します。カメラロールから直接写真をアップロードしたり、新しい写真を撮ったり、PDFファイルを選択したりできます。タッチフレンドリーなインターフェースにより、小さな画面で編集する領域を簡単に選択できます。すべてはモバイルブラウザで実行され、アプリのインストールは不要です。',
    'ko': '네! 당사 반응형 디자인은 iOS 또는 Android를 실행하는 스마트폰과 태블릿에서 완벽하게 작동합니다. 카메라 롤에서 직접 사진을 업로드하거나 새 사진을 찍거나 PDF 파일을 선택할 수 있습니다. 터치 친화적 인터페이스는 작은 화면에서 편집할 영역을 쉽게 선택할 수 있게 해줍니다. 모든 것이 모바일 브라우저에서 실행되며 앱 설치가 필요하지 않습니다.',
    'pt': 'Sim! Nosso design responsivo funciona perfeitamente em smartphones e tablets executando iOS ou Android. Você pode carregar fotos diretamente do seu rolo da câmera, tirar novas fotos ou selecionar arquivos PDF. A interface amigável ao toque facilita a seleção de áreas para edição em telas menores. Tudo é executado no seu navegador móvel - não é necessária instalação de aplicativo.',
    'ru': 'Да! Наш адаптивный дизайн отлично работает на смартфонах и планшетах под управлением iOS или Android. Вы можете загружать фотографии прямо из фотопленки, делать новые фотографии или выбирать файлы PDF. Удобный сенсорный интерфейс облегчает выбор областей для редактирования на меньших экранах. Все работает в вашем мобильном браузере - установка приложения не требуется.',
    'ar': 'نعم! تصميمنا المتجاوب يعمل بشكل مثالي على الهواتف الذكية والأجهزة اللوحية التي تعمل بنظام iOS أو Android. يمكنك تحميل الصور مباشرة من لفة الكاميرا الخاصة بك، أو التقاط صور جديدة، أو تحديد ملفات PDF. تجعل الواجهة الصديقة للمس من السهل تحديد المناطق للتحرير على الشاشات الأصغر. كل شيء يعمل في متصفحك المحمول - لا حاجة لتثبيت التطبيق.'
};

// Additional SEO Content Features
TRANSLATIONS['seo.feature1.title'] = {
    'en': '🔒 Secure Document Redaction',
    'zh': '🔒 安全的文档脱敏',
    'es': '🔒 Edición segura de documentos',
    'fr': '🔒 Édition sécurisée de documents',
    'de': '🔒 Sichere Dokumentenbearbeitung',
    'ja': '🔒 安全な文書編集',
    'ko': '🔒 안전한 문서 편집',
    'pt': '🔒 Edição segura de documentos',
    'ru': '🔒 Безопасное редактирование документов',
    'ar': '🔒 تحرير المستندات الآمن'
};

TRANSLATIONS['seo.feature1.desc'] = {
    'en': 'Redact sensitive documents safely with our client-side processor. Perfect for legal documents, medical records, financial statements, and personal identification cards. No data leaves your device.',
    'zh': '使用我们的客户端处理器安全地脱敏敏感文档。非常适合法律文档、医疗记录、财务报表和个人身份证件。数据不会离开您的设备。',
    'es': 'Edite documentos confidenciales de forma segura con nuestro procesador del lado del cliente. Perfecto para documentos legales, registros médicos, estados financieros y tarjetas de identificación personal. Ningún dato sale de su dispositivo.',
    'fr': 'Modifiez des documents sensibles en toute sécurité avec notre processeur côté client. Parfait pour les documents juridiques, les dossiers médicaux, les relevés financiers et les cartes d\'identité personnelles. Aucune donnée ne quitte votre appareil.',
    'de': 'Bearbeiten Sie sensible Dokumente sicher mit unserem clientseitigen Prozessor. Perfekt für juristische Dokumente, medizinische Aufzeichnungen, Finanzberichte und persönliche Ausweise. Keine Daten verlassen Ihr Gerät.',
    'ja': 'クライアントサイドプロセッサーで機密文書を安全に編集。法律文書、医療記録、財務諸表、個人身分証明書に最適です。データはデバイスから流出しません。',
    'ko': '클라이언트 측 프로세서를 사용하여 민감한 문서를 안전하게 편집하세요. 법률 문서, 의료 기록, 재무제표 및 개인 신분증에 이상적입니다. 데이터가 장치를 떠나지 않습니다.',
    'pt': 'Edite documentos confidenciais com segurança com nosso processador do lado do cliente. Perfeito para documentos legais, registros médicos, demonstrações financeiras e cartões de identificação pessoal. Nenhum dado sai do seu dispositivo.',
    'ru': 'Безопасно редактируйте конфиденциальные документы с помощью нашего клиентского процессора. Идеально подходит для юридических документов, медицинских записей, финансовых отчетов и личных удостоверений личности. Данные не покидают ваше устройство.',
    'ar': 'قم بتحرير المستندات الحساسة بأمان باستخدام معالجنا من جانب العميل. مثالي للمستندات القانونية والسجلات الطبية والبيانات المالية وبطاقات التعريف الشخصية. لا تغادر البيانات جهازك.'
};

TRANSLATIONS['seo.feature2.title'] = {
    'en': '📸 Photo Privacy Protection',
    'zh': '📸 照片隐私保护',
    'es': '📸 Protección de privacidad de fotos',
    'fr': '📸 Protection de la vie privée des photos',
    'de': '📸 Foto-Datenschutz',
    'ja': '📸 写真プライバシー保護',
    'ko': '📸 사진 개인 정보 보호',
    'pt': '📸 Proteção de privacidade de fotos',
    'ru': '📸 Защита конфиденциальности фотографий',
    'ar': '📸 حماية خصوصية الصور'
};

TRANSLATIONS['seo.feature2.desc'] = {
    'en': 'Protect identities in photos before sharing on social media. Blur faces, obscure license plates, hide addresses in screenshots. Essential for journalists, researchers, and privacy-conscious users.',
    'zh': '在社交媒体上分享之前保护照片中的身份。模糊面部、遮盖车牌、隐藏截图中的地址。记者、研究人员和注重隐私的用户必备。',
    'es': 'Proteja identidades en fotos antes de compartir en redes sociales. Difumine rostros, oculte matrículas, oculte direcciones en capturas de pantalla. Esencial para periodistas, investigadores y usuarios conscientes de la privacidad.',
    'fr': 'Protégez les identités dans les photos avant de partager sur les réseaux sociaux. Floutez les visages, obscurcissez les plaques d\'immatriculation, cachez les adresses dans les captures d\'écran. Essentiel pour les journalistes, les chercheurs et les utilisateurs soucieux de la vie privée.',
    'de': 'Schützen Sie Identitäten in Fotos, bevor Sie sie in sozialen Medien teilen. Verwischen Sie Gesichter, verbergen Sie Kennzeichen, verstecken Sie Adressen in Screenshots. Unverzichtbar für Journalisten, Forscher und datenschutzbewusste Benutzer.',
    'ja': 'ソーシャルメディアで共有する前に写真の身元を保護。顔をぼかし、ナンバープレートを隠し、スクリーンショットの住所を隠す。ジャーナリスト、研究者、プライバシー意識の高いユーザーに必須です。',
    'ko': '소셜 미디어에 공유하기 전에 사진의 신원을 보호하세요. 얼굴을 흐리게 하고, 번호판을 가리고, 스크린샷의 주소를 숨기세요. 기자, 연구원 및 개인 정보 보호 의식이 높은 사용자에게 필수적입니다.',
    'pt': 'Proteja identidades em fotos antes de compartilhar nas redes sociais. Desfoque rostos, oculte placas de licença, esconda endereços em capturas de tela. Essencial para jornalistas, pesquisadores e usuários preocupados com a privacidade.',
    'ru': 'Защитите личности на фотографиях перед публикацией в социальных сетях. Размывайте лица, скрывайте номерные знаки, прячьте адреса на скриншотах. Необходимо для журналистов, исследователей и пользователей, заботящихся о конфиденциальности.',
    'ar': 'احمِ الهويات في الصور قبل المشاركة على وسائل التواصل الاجتماعي. طمس الوجوه، وإخفاء لوحات التراخيص، وإخفاء العناوين في لقطات الشاشة. ضروري للصحفيين والباحثين والمستخدمين الواعين بالخصوصية.'
};

TRANSLATIONS['seo.feature3.title'] = {
    'en': '📄 PDF Redaction Made Easy',
    'zh': '📄 PDF脱敏变得简单',
    'es': '📄 Edición de PDF facilitada',
    'fr': '📄 Édition PDF simplifiée',
    'de': '📄 PDF-Bearbeitung leicht gemacht',
    'ja': '📄 PDF編集が簡単に',
    'ko': '📄 PDF 편집이 쉬워졌습니다',
    'pt': '📄 Edição de PDF facilitada',
    'ru': '📄 Редактирование PDF стало проще',
    'ar': '📄 تحرير PDF أصبح سهلاً'
};

TRANSLATIONS['seo.feature3.desc'] = {
    'en': 'Professional PDF redaction without expensive software. Redact text, mask images, hide sensitive data across multiple pages. Export as clean PDF ready for sharing or archiving.',
    'zh': '无需昂贵软件的专业PDF脱敏。跨多页脱敏文本、遮盖图像、隐藏敏感数据。导出为干净的PDF，准备分享或存档。',
    'es': 'Edición profesional de PDF sin software costoso. Edite texto, oculte imágenes, oculte datos confidenciales en varias páginas. Exporte como PDF limpio listo para compartir o archivar.',
    'fr': 'Édition PDF professionnelle sans logiciel coûteux. Éditez du texte, masquez des images, cachez des données sensibles sur plusieurs pages. Exportez en tant que PDF propre prêt à partager ou archiver.',
    'de': 'Professionelle PDF-Bearbeitung ohne teure Software. Bearbeiten Sie Text, maskieren Sie Bilder, verbergen Sie sensible Daten über mehrere Seiten. Exportieren Sie als sauberes PDF, bereit zum Teilen oder Archivieren.',
    'ja': '高価なソフトウェアなしでプロフェッショナルなPDF編集。テキストを編集し、画像をマスクし、複数ページにわたって機密データを隠します。共有またはアーカイブの準備ができているクリーンなPDFとしてエクスポート。',
    'ko': '비싼 소프트웨어 없이 전문적인 PDF 편집. 텍스트를 편집하고, 이미지를 마스킹하며, 여러 페이지에 걸쳐 민감한 데이터를 숨기세요. 공유하거나 보관할 준비가 된 깔끔한 PDF로 내보냅니다.',
    'pt': 'Edição profissional de PDF sem software caro. Edite texto, mascare imagens, oculte dados confidenciais em várias páginas. Exporte como PDF limpo pronto para compartilhar ou arquivar.',
    'ru': 'Профессиональное редактирование PDF без дорогого программного обеспечения. Редактируйте текст, маскируйте изображения, скрывайте конфиденциальные данные на нескольких страницах. Экспортируйте как чистый PDF, готовый к публикации или архивированию.',
    'ar': 'تحرير PDF احترافي بدون برامج باهظة الثمن. حرر النصوص، وأخفِ الصور، واخبئ البيانات الحساسة عبر صفحات متعددة. صدّر كملف PDF نظيف جاهز للمشاركة أو الأرشفة.'
};

// Keywords Section
TRANSLATIONS['seo.keywords.title'] = {
    'en': 'Related Search Terms',
    'zh': '相关搜索词',
    'es': 'Términos de búsqueda relacionados',
    'fr': 'Termes de recherche associés',
    'de': 'Verwandte Suchbegriffe',
    'ja': '関連検索語',
    'ko': '관련 검색어',
    'pt': 'Termos de pesquisa relacionados',
    'ru': 'Похожие поисковые запросы',
    'ar': 'مصطلحات البحث ذات الصلة'
};

TRANSLATIONS['seo.keywords.list'] = {
    'en': 'free online image redaction tool, how to blur faces in photos online, mask sensitive information in screenshots, hide ID card number in image, secure photo redaction tool no upload, offline image redaction software, edit PDF without Adobe, free PDF redaction tool online, blur license plate in photo, anonymize document before sharing, remove personal data from images, protect privacy in photos, obscure credit card number in receipt, hide social security number in document, free alternative to Photoshop for redaction, browser-based image redaction tool secure, client-side photo processing tool, edit bank statement PDF free, redact medical records online, hide email address in screenshot, mosaic effect for photos online, pixelate faces in images free, whiteout text in image online, black box redaction tool, multi-page PDF redaction tool free, edit contract PDF online secure',
    'zh': '免费在线图像脱敏工具，如何在线模糊照片中的面部，遮盖截图中的敏感信息，隐藏图像中的身份证号码，安全照片脱敏器无上传，离线图像脱敏软件，无需Adobe脱敏PDF，免费在线PDF脱敏工具，模糊照片中的车牌，分享前匿名化文档，从图像中删除个人数据，保护照片中的隐私，遮盖收据中的信用卡号码，隐藏文档中的社会安全号码，Photoshop脱敏的免费替代品，基于浏览器的安全图像脱敏器，客户端照片处理工具，免费脱敏银行对账单PDF，在线脱敏医疗记录，隐藏截图中的电子邮件地址，在线照片马赛克效果，免费像素化图像中的面部，在线图像中涂白文本，黑盒脱敏工具，免费多页PDF脱敏器，安全在线脱敏合同PDF',
    'es': 'herramienta gratuita de edición de imágenes en línea, cómo difuminar rostros en fotos en línea, ocultar información confidencial en capturas de pantalla, ocultar número de tarjeta de identificación en imagen, editor de fotos seguro sin carga, software de edición de imágenes sin conexión, editar PDF sin Adobe, herramienta gratuita de edición de PDF en línea, difuminar matrícula en foto, anonimizar documento antes de compartir, eliminar datos personales de imágenes, proteger privacidad en fotos, ocultar número de tarjeta de crédito en recibo, ocultar número de seguridad social en documento, alternativa gratuita a Photoshop para edición, editor de imágenes basado en navegador seguro, herramienta de procesamiento de fotos del lado del cliente, editar extracto bancario PDF gratis, editar registros médicos en línea, ocultar dirección de correo electrónico en captura de pantalla, efecto mosaico para fotos en línea, pixelar rostros en imágenes gratis, tachar texto en imagen en línea, herramienta de edición de caja negra, editor de PDF de varias páginas gratis, editar contrato PDF en línea seguro',
    'fr': 'outil gratuit d\'édition d\'images en ligne, comment flouter les visages dans les photos en ligne, masquer les informations sensibles dans les captures d\'écran, masquer le numéro de carte d\'identité dans l\'image, éditeur de photos sécurisé sans téléchargement, logiciel d\'édition d\'images hors ligne, modifier PDF sans Adobe, outil gratuit d\'édition PDF en ligne, flouter la plaque d\'immatriculation dans la photo, anonymiser le document avant de partager, supprimer les données personnelles des images, protéger la vie privée dans les photos, masquer le numéro de carte de crédit sur le reçu, masquer le numéro de sécurité sociale dans le document, alternative gratuite à Photoshop pour l\'édition, éditeur d\'images basé sur un navigateur sécurisé, outil de traitement de photos côté client, modifier le relevé bancaire PDF gratuitement, éditer les dossiers médicaux en ligne, masquer l\'adresse e-mail dans la capture d\'écran, effet mosaïque pour les photos en ligne, pixéliser les visages dans les images gratuitement, corriger le texte dans l\'image en ligne, outil d\'édition de boîte noire, éditeur PDF multi-pages gratuit, modifier le contrat PDF en ligne sécurisé',
    'de': 'kostenloses Online-Bildbearbeitungstool, wie man Gesichter in Fotos online verwischt, sensible Informationen in Screenshots maskieren, Ausweisnummer im Bild verbergen, sicherer Fotoeditor ohne Upload, Offline-Bildbearbeitungssoftware, PDF ohne Adobe bearbeiten, kostenloses PDF-Bearbeitungstool online, Kennzeichen im Foto verwischen, Dokument vor dem Teilen anonymisieren, persönliche Daten aus Bildern entfernen, Privatsphäre in Fotos schützen, Kreditkartennummer auf Quittung verbergen, Sozialversicherungsnummer im Dokument verbergen, kostenlose Alternative zu Photoshop zum Bearbeiten, browserbasierter sicherer Bildeditor, clientseitiges Fotobearbeitungstool, Kontoauszug PDF kostenlos bearbeiten, medizinische Aufzeichnungen online bearbeiten, E-Mail-Adresse im Screenshot verbergen, Mosaikeffekt für Fotos online, Gesichter in Bildern kostenlos verpixeln, Text im Bild online schwärzen, Blackbox-Bearbeitungstool, mehrseitiger PDF-Editor kostenlos, Vertrag PDF online sicher bearbeiten',
    'ja': '無料オンライン画像編集ツール、オンラインで写真の顔をぼかす方法、スクリーンショットの機密情報をマスク、画像のID番号を隠す、アップロード不要の安全な写真エディター、オフライン画像編集ソフトウェア、AdobeなしでPDFを編集、無料オンラインPDF編集ツール、写真のナンバープレートをぼかす、共有前に文書を匿名化、画像から個人データを削除、写真のプライバシーを保護、領収書のクレジットカード番号を隠す、文書の社会保障番号を隠す、編集用のPhotoshopの無料代替品、ブラウザベースの安全な画像エディター、クライアントサイドの写真処理ツール、銀行取引明細書PDFを無料で編集、オンラインで医療記録を編集、スクリーンショットのメールアドレスを隠す、オンライン写真のモザイク効果、画像の顔を無料でピクセル化、オンラインで画像のテキストを塗りつぶし、ブラックボックス編集ツール、無料の複数ページPDFエディター、安全にオンラインで契約PDFを編集',
    'ko': '무료 온라인 이미지 편집 도구, 온라인에서 사진의 얼굴을 흐리게 하는 방법, 스크린샷의 민감한 정보 마스킹, 이미지의 신분증 번호 숨기기, 업로드 불필요한 안전한 사진 편집기, 오프라인 이미지 편집 소프트웨어, Adobe 없이 PDF 편집, 무료 온라인 PDF 편집 도구, 사진의 번호판 흐리기, 공유 전 문서 익명화, 이미지에서 개인 데이터 제거, 사진의 개인 정보 보호, 영수증의 신용카드 번호 숨기기, 문서의 사회 보장 번호 숨기기, 편집을 위한 Photoshop 무료 대안, 브라우저 기반 안전한 이미지 편집기, 클라이언트 측 사진 처리 도구, 은행 명세서 PDF 무료 편집, 온라인에서 의료 기록 편집, 스크린샷의 이메일 주소 숨기기, 온라인 사진 모자이크 효과, 이미지의 얼굴 무료 픽셀화, 온라인에서 이미지의 텍스트 칠하기, 블랙박스 편집 도구, 무료 다중 페이지 PDF 편집기, 안전하게 온라인에서 계약 PDF 편집',
    'pt': 'ferramenta gratuita de edição de imagens online, como desfocar rostos em fotos online, mascarar informações confidenciais em capturas de tela, ocultar número de cartão de identificação na imagem, editor de fotos seguro sem upload, software de edição de imagens offline, editar PDF sem Adobe, ferramenta gratuita de edição de PDF online, desfocar placa de carro na foto, anonimizar documento antes de compartilhar, remover dados pessoais de imagens, proteger privacidade em fotos, ocultar número de cartão de crédito no recibo, ocultar número de seguridade social no documento, alternativa gratuita ao Photoshop para edição, editor de imagens baseado em navegador seguro, ferramenta de processamento de fotos do lado do cliente, editar extrato bancário PDF grátis, editar registros médicos online, ocultar endereço de e-mail na captura de tela, efeito mosaico para fotos online, pixelizar rostos em imagens grátis, corrigir texto na imagem online, ferramenta de edição de caixa preta, editor de PDF de várias páginas grátis, editar contrato PDF online seguro',
    'ru': 'бесплатный онлайн-инструмент для редактирования изображений, как размыть лица на фотографиях онлайн, маскировать конфиденциальную информацию на скриншотах, скрыть номер удостоверения личности на изображении, безопасный фоторедактор без загрузки, офлайн-программа для редактирования изображений, редактировать PDF без Adobe, бесплатный онлайн-инструмент для редактирования PDF, размыть номерной знак на фото, анонимизировать документ перед публикацией, удалить личные данные с изображений, защитить конфиденциальность на фотографиях, скрыть номер кредитной карты на квитанции, скрыть номер социального страхования в документе, бесплатная альтернатива Photoshop для редактирования, браузерный безопасный редактор изображений, клиентский инструмент обработки фотографий, редактировать банковскую выписку PDF бесплатно, редактировать медицинские записи онлайн, скрыть адрес электронной почты на скриншоте, эффект мозаики для фото онлайн, пикселизировать лица на изображениях бесплатно, закрасить текст на изображении онлайн, инструмент редактирования черного ящика, бесплатный многостраничный редактор PDF, безопасно редактировать контракт PDF онлайн',
    'ar': 'أداة مجانية لتحرير الصور عبر الإنترنت، كيفية طمس الوجوه في الصور عبر الإنترنت، إخفاء المعلومات الحساسة في لقطات الشاشة، إخفاء رقم بطاقة الهوية في الصورة، محرر صور آمن بدون تحميل، برنامج تحرير الصور دون اتصال، تحرير PDF بدون Adobe، أداة مجانية لتحرير PDF عبر الإنترنت، طمس لوحة الترخيص في الصورة، إخفاء هوية المستند قبل المشاركة، إزالة البيانات الشخصية من الصور، حماية الخصوصية في الصور، إخفاء رقم بطاقة الائتمان في الإيصال، إخفاء رقم الضمان الاجتماعي في المستند، بديل مجاني لـ Photoshop للتحرير، محرر صور قائم على المتصفح آمن، أداة معالجة صور من جانب العميل، تحرير كشف حساب بنكي PDF مجانًا، تحرير السجلات الطبية عبر الإنترنت، إخفاء عنوان البريد الإلكتروني في لقطة الشاشة، تأثير الفسيفساء للصور عبر الإنترنت، بكسلة الوجوه في الصور مجانًا، تصحيح النص في الصورة عبر الإنترنت، أداة تحرير الصندوق الأسود، محرر PDF متعدد الصفحات مجاني، تحرير عقد PDF عبر الإنترنت بأمان'
};

// ==================== CONTACT PAGE TRANSLATIONS ====================

// Contact Page - Main
TRANSLATIONS['contact.title'] = {
    'en': 'Contact Us',
    'zh': '联系我们',
    'es': 'Contáctenos',
    'fr': 'Contactez-nous',
    'de': 'Kontaktieren Sie uns',
    'ja': 'お問い合わせ',
    'ko': '문의하기',
    'pt': 'Fale Conosco',
    'ru': 'Свяжитесь с нами',
    'ar': 'اتصل بنا'
};

TRANSLATIONS['contact.subtitle'] = {
    'en': 'We\'re here to help! Get in touch with our team.',
    'zh': '我们随时为您提供帮助！与我们的团队联系。',
    'es': '¡Estamos aquí para ayudar! Póngase en contacto con nuestro equipo.',
    'fr': 'Nous sommes là pour vous aider ! Contactez notre équipe.',
    'de': 'Wir sind hier, um zu helfen! Nehmen Sie Kontakt mit unserem Team auf.',
    'ja': 'お手伝いします！チームにご連絡ください。',
    'ko': '저희가 도와드리겠습니다! 팀에 문의하세요.',
    'pt': 'Estamos aqui para ajudar! Entre em contato com nossa equipe.',
    'ru': 'Мы здесь, чтобы помочь! Свяжитесь с нашей командой.',
    'ar': 'نحن هنا للمساعدة! تواصل مع فريقنا.'
};

TRANSLATIONS['contact.getInTouch'] = {
    'en': 'Get in Touch',
    'zh': '联系方式',
    'es': 'Póngase en contacto',
    'fr': 'Prenez contact',
    'de': 'Kontakt aufnehmen',
    'ja': 'お問い合わせ',
    'ko': '연락처',
    'pt': 'Entre em contato',
    'ru': 'Связаться с нами',
    'ar': 'تواصل معنا'
};

TRANSLATIONS['contact.emailSupport'] = {
    'en': 'Email Support',
    'zh': '邮件支持',
    'es': 'Soporte por correo electrónico',
    'fr': 'Support par e-mail',
    'de': 'E-Mail-Support',
    'ja': 'メールサポート',
    'ko': '이메일 지원',
    'pt': 'Suporte por e-mail',
    'ru': 'Поддержка по электронной почте',
    'ar': 'دعم البريد الإلكتروني'
};

TRANSLATIONS['contact.emailDesc'] = {
    'en': 'For general inquiries, technical support, or feedback:',
    'zh': '一般咨询、技术支持或反馈：',
    'es': 'Para consultas generales, soporte técnico o comentarios:',
    'fr': 'Pour les demandes générales, le support technique ou les commentaires :',
    'de': 'Für allgemeine Anfragen, technischen Support oder Feedback:',
    'ja': '一般的な問い合わせ、技術サポート、フィードバック用：',
    'ko': '일반 문의, 기술 지원 또는 피드백용:',
    'pt': 'Para perguntas gerais, suporte técnico ou feedback:',
    'ru': 'Для общих вопросов, технической поддержки или отзывов:',
    'ar': 'للاستفسارات العامة والدعم الفني أو الملاحظات:'
};

TRANSLATIONS['contact.responseTime'] = {
    'en': 'Response time: Within 30 days',
    'zh': '响应时间：30天内',
    'es': 'Tiempo de respuesta: Dentro de 30 días',
    'fr': 'Délai de réponse : Sous 30 jours',
    'de': 'Antwortzeit: Innerhalb von 30 Tagen',
    'ja': '応答時間：30日以内',
    'ko': '응답 시간: 30일 이내',
    'pt': 'Tempo de resposta: Em até 30 dias',
    'ru': 'Время ответа: В течение 30 дней',
    'ar': 'وقت الاستجابة: خلال 30 يومًا'
};

TRANSLATIONS['contact.responseTimeTitle'] = {
    'en': 'Response Time',
    'zh': '响应时间',
    'es': 'Tiempo de respuesta',
    'fr': 'Délai de réponse',
    'de': 'Antwortzeit',
    'ja': '応答時間',
    'ko': '응답 시간',
    'pt': 'Tempo de resposta',
    'ru': 'Время ответа',
    'ar': 'وقت الاستجابة'
};

TRANSLATIONS['contact.responseTimeDesc'] = {
    'en': 'We typically respond to all inquiries within:',
    'zh': '我们通常在以下时间内回复所有询问：',
    'es': 'Normalmente respondemos a todas las consultas dentro de:',
    'fr': 'Nous répondons généralement à toutes les demandes dans les délais suivants :',
    'de': 'Wir antworten normalerweise auf alle Anfragen innerhalb von:',
    'ja': '通常、すべての問い合わせに以下の期間内に返信します：',
    'ko': '우리는 일반적으로 모든 문의에 다음 기간 내에 답변합니다:',
    'pt': 'Normalmente respondemos a todas as perguntas dentro de:',
    'ru': 'Обычно мы отвечаем на все запросы в течение:',
    'ar': 'نرد عادةً على جميع الاستفسارات خلال:'
};

TRANSLATIONS['contact.time.general'] = {
    'en': '• General questions: 24-48 hours',
    'zh': '• 一般问题：24-48小时',
    'es': '• Preguntas generales: 24-48 horas',
    'fr': '• Questions générales : 24-48 heures',
    'de': '• Allgemeine Fragen: 24-48 Stunden',
    'ja': '• 一般的な質問：24〜48時間',
    'ko': '• 일반 질문: 24-48시간',
    'pt': '• Perguntas gerais: 24-48 horas',
    'ru': '• Общие вопросы: 24-48 часов',
    'ar': '• الأسئلة العامة: 24-48 ساعة'
};

TRANSLATIONS['contact.time.tech'] = {
    'en': '• Technical support: 48-72 hours',
    'zh': '• 技术支持：48-72小时',
    'es': '• Soporte técnico: 48-72 horas',
    'fr': '• Support technique : 48-72 heures',
    'de': '• Technischer Support: 48-72 Stunden',
    'ja': '• 技術サポート：48〜72時間',
    'ko': '• 기술 지원: 48-72시간',
    'pt': '• Suporte técnico: 48-72 horas',
    'ru': '• Техническая поддержка: 48-72 часа',
    'ar': '• الدعم الفني: 48-72 ساعة'
};

TRANSLATIONS['contact.time.privacy'] = {
    'en': '• Privacy concerns: Within 30 days (GDPR requirement)',
    'zh': '• 隐私问题：30天内（GDPR要求）',
    'es': '• Preocupaciones de privacidad: Dentro de 30 días (requisito GDPR)',
    'fr': '• Préoccupations relatives à la confidentialité : Sous 30 jours (exigence RGPD)',
    'de': '• Datenschutzbedenken: Innerhalb von 30 Tagen (DSGVO-Anforderung)',
    'ja': '• プライバシーに関する懸念：30日以内（GDPR要件）',
    'ko': '• 개인정보 보호 문제: 30일 이내 (GDPR 요구사항)',
    'pt': '• Preocupações com privacidade: Em até 30 dias (requisito GDPR)',
    'ru': '• Вопросы конфиденциальности: В течение 30 дней (требование GDPR)',
    'ar': '• مخاوف الخصوصية: خلال 30 يومًا (متطلب GDPR)'
};

TRANSLATIONS['contact.faqFirst'] = {
    'en': 'FAQ First',
    'zh': '先看常见问题',
    'es': 'Primero consulte las FAQ',
    'fr': 'Consultez d\'abord la FAQ',
    'de': 'Zuerst FAQ lesen',
    'ja': 'まずFAQを確認',
    'ko': '먼저 FAQ 확인',
    'pt': 'Primeiro consulte o FAQ',
    'ru': 'Сначала посмотрите FAQ',
    'ar': 'الأسئلة الشائعة أولاً'
};

TRANSLATIONS['contact.faqDesc'] = {
    'en': 'Before contacting us, please check our',
    'zh': '在联系我们之前，请查看我们的',
    'es': 'Antes de contactarnos, consulte nuestras',
    'fr': 'Avant de nous contacter, veuillez consulter notre',
    'de': 'Bevor Sie uns kontaktieren, überprüfen Sie bitte unsere',
    'ja': 'お問い合わせの前に、当社の',
    'ko': '문의하기 전에 당사의',
    'pt': 'Antes de nos contatar, verifique nosso',
    'ru': 'Прежде чем связаться с нами, пожалуйста, проверьте наш',
    'ar': 'قبل الاتصال بنا، يرجى التحقق من'
};

TRANSLATIONS['contact.faqLink'] = {
    'en': 'Frequently Asked Questions →',
    'zh': '常见问题 →',
    'es': 'Preguntas frecuentes →',
    'fr': 'Questions fréquemment posées →',
    'de': 'Häufig gestellte Fragen →',
    'ja': 'よくある質問 →',
    'ko': '자주 묻는 질문 →',
    'pt': 'Perguntas frequentes →',
    'ru': 'Часто задаваемые вопросы →',
    'ar': 'الأسئلة الشائعة →'
};

TRANSLATIONS['contact.faqHint'] = {
    'en': 'Your question might already be answered!',
    'zh': '您的问题可能已经有答案了！',
    'es': '¡Su pregunta ya podría estar respondida!',
    'fr': 'Votre question pourrait déjà avoir une réponse !',
    'de': 'Ihre Frage könnte bereits beantwortet sein!',
    'ja': 'あなたの質問はすでに答えられているかもしれません！',
    'ko': '귀하의 질문에 이미 답변이 있을 수 있습니다!',
    'pt': 'Sua pergunta já pode ter sido respondida!',
    'ru': 'Возможно, на ваш вопрос уже есть ответ!',
    'ar': 'قد يكون سؤالك مجابًا بالفعل!'
};

TRANSLATIONS['contact.quickTip'] = {
    'en': '💡 Quick Tip',
    'zh': '💡 快速提示',
    'es': '💡 Consejo rápido',
    'fr': '💡 Astuce rapide',
    'de': '💡 Schneller Tipp',
    'ja': '💡 クイックヒント',
    'ko': '💡 빠른 팁',
    'pt': '💡 Dica rápida',
    'ru': '💡 Быстрый совет',
    'ar': '💡 نصيحة سريعة'
};

TRANSLATIONS['contact.tipDesc'] = {
    'en': 'For faster support, please include:',
    'zh': '为了更快地获得支持，请包括：',
    'es': 'Para un soporte más rápido, incluya:',
    'fr': 'Pour un support plus rapide, veuillez inclure :',
    'de': 'Für schnelleren Support bitte angeben:',
    'ja': 'より迅速なサポートのために、以下を含めてください：',
    'ko': '더 빠른 지원을 위해 다음을 포함해주세요:',
    'pt': 'Para suporte mais rápido, inclua:',
    'ru': 'Для более быстрой поддержки, пожалуйста, укажите:',
    'ar': 'لدعم أسرع، يرجى تضمين:'
};

TRANSLATIONS['contact.tip.browser'] = {
    'en': '• Your browser type and version',
    'zh': '• 您的浏览器类型和版本',
    'es': '• Tipo y versión de su navegador',
    'fr': '• Type et version de votre navigateur',
    'de': '• Ihr Browsertyp und Ihre Version',
    'ja': '• ブラウザの種類とバージョン',
    'ko': '• 브라우저 유형 및 버전',
    'pt': '• Tipo e versão do seu navegador',
    'ru': '• Тип и версия вашего браузера',
    'ar': '• نوع وإصدار متصفحك'
};

TRANSLATIONS['contact.tip.os'] = {
    'en': '• Operating system (Windows, Mac, Linux, etc.)',
    'zh': '• 操作系统（Windows、Mac、Linux等）',
    'es': '• Sistema operativo (Windows, Mac, Linux, etc.)',
    'fr': '• Système d\'exploitation (Windows, Mac, Linux, etc.)',
    'de': '• Betriebssystem (Windows, Mac, Linux usw.)',
    'ja': '• オペレーティングシステム（Windows、Mac、Linuxなど）',
    'ko': '• 운영 체제(Windows, Mac, Linux 등)',
    'pt': '• Sistema operacional (Windows, Mac, Linux, etc.)',
    'ru': '• Операционная система (Windows, Mac, Linux и т. д.)',
    'ar': '• نظام التشغيل (Windows, Mac, Linux, إلخ)'
};

TRANSLATIONS['contact.tip.filetype'] = {
    'en': '• File type you\'re working with (JPG, PNG, PDF, etc.)',
    'zh': '• 您正在处理的文件类型（JPG、PNG、PDF等）',
    'es': '• Tipo de archivo con el que está trabajando (JPG, PNG, PDF, etc.)',
    'fr': '• Type de fichier avec lequel vous travaillez (JPG, PNG, PDF, etc.)',
    'de': '• Dateityp, mit dem Sie arbeiten (JPG, PNG, PDF usw.)',
    'ja': '• 作業中のファイルタイプ（JPG、PNG、PDFなど）',
    'ko': '• 작업 중인 파일 유형(JPG, PNG, PDF 등)',
    'pt': '• Tipo de arquivo com o qual você está trabalhando (JPG, PNG, PDF, etc.)',
    'ru': '• Тип файла, с которым вы работаете (JPG, PNG, PDF и т. д.)',
    'ar': '• نوع الملف الذي تعمل عليه (JPG, PNG, PDF, إلخ)'
};

TRANSLATIONS['contact.tip.desc'] = {
    'en': '• Detailed description of the issue',
    'zh': '• 问题的详细描述',
    'es': '• Descripción detallada del problema',
    'fr': '• Description détaillée du problème',
    'de': '• Detaillierte Beschreibung des Problems',
    'ja': '• 問題の詳細な説明',
    'ko': '• 문제에 대한 자세한 설명',
    'pt': '• Descrição detalhada do problema',
    'ru': '• Подробное описание проблемы',
    'ar': '• وصف مفصل للمشكلة'
};

TRANSLATIONS['contact.tip.screenshot'] = {
    'en': '• Screenshots (if applicable)',
    'zh': '• 截图（如适用）',
    'es': '• Capturas de pantalla (si corresponde)',
    'fr': '• Captures d\'écran (le cas échéant)',
    'de': '• Screenshots (falls zutreffend)',
    'ja': '• スクリーンショット（該当する場合）',
    'ko': '• 스크린샷(해당되는 경우)',
    'pt': '• Capturas de tela (se aplicável)',
    'ru': '• Скриншоты (если применимо)',
    'ar': '• لقطات شاشة (إن وجدت)'
};

// Common Reasons Section
TRANSLATIONS['contact.commonReasons'] = {
    'en': 'Common Reasons to Contact Us',
    'zh': '常见联系原因',
    'es': 'Razones comunes para contactarnos',
    'fr': 'Raisons courantes de nous contacter',
    'de': 'Häufige Gründe, uns zu kontaktieren',
    'ja': 'お問い合わせの一般的な理由',
    'ko': '문의하는 일반적인 이유',
    'pt': 'Motivos comuns para nos contatar',
    'ru': 'Распространенные причины обращения к нам',
    'ar': 'الأسباب الشائعة للاتصال بنا'
};

TRANSLATIONS['contact.reason.bug'] = {
    'en': '🐛 Report a Bug',
    'zh': '🐛 报告错误',
    'es': '🐛 Informar un error',
    'fr': '🐛 Signaler un bug',
    'de': '🐛 Fehler melden',
    'ja': '🐛 バグを報告',
    'ko': '🐛 버그 신고',
    'pt': '🐛 Relatar um bug',
    'ru': '🐛 Сообщить об ошибке',
    'ar': '🐛 الإبلاغ عن خطأ'
};

TRANSLATIONS['contact.reason.bug.desc'] = {
    'en': 'Found a bug? Please email us at admin@toolvx.com with details about what happened, what you expected, and steps to reproduce the issue.',
    'zh': '发现错误？请发送电子邮件至 admin@toolvx.com，详细说明发生了什么、您期望的结果以及重现问题的步骤。',
    'es': '¿Encontró un error? Envíenos un correo electrónico a admin@toolvx.com con detalles sobre lo que sucedió, lo que esperaba y los pasos para reproducir el problema.',
    'fr': 'Vous avez trouvé un bug ? Veuillez nous envoyer un e-mail à admin@toolvx.com avec des détails sur ce qui s\'est passé, ce que vous attendiez et les étapes pour reproduire le problème.',
    'de': 'Fehler gefunden? Bitte senden Sie uns eine E-Mail an admin@toolvx.com mit Details dazu, was passiert ist, was Sie erwartet haben und Schritten zur Reproduktion des Problems.',
    'ja': 'バグを見つけましたか？何が起こったか、何を期待していたか、問題を再現する手順の詳細を admin@toolvx.com までメールでお知らせください。',
    'ko': '버그를 발견하셨나요? admin@toolvx.com으로 발생한 일, 기대했던 내용, 문제 재현 단계에 대한 세부 정보를 이메일로 보내주세요.',
    'pt': 'Encontrou um bug? Por favor, envie um e-mail para admin@toolvx.com com detalhes sobre o que aconteceu, o que você esperava e os passos para reproduzir o problema.',
    'ru': 'Нашли ошибку? Пожалуйста, отправьте нам электронное письмо на admin@toolvx.com с подробностями о том, что произошло, чего вы ожидали и шагах для воспроизведения проблемы.',
    'ar': 'وجدت خطأ؟ يرجى مراسلتنا عبر البريد الإلكتروني على admin@toolvx.com مع تفاصيل حول ما حدث وما كنت تتوقعه وخطوات إعادة إنتاج المشكلة.'
};

TRANSLATIONS['contact.reason.feature'] = {
    'en': '💡 Feature Request',
    'zh': '💡 功能请求',
    'es': '💡 Solicitud de función',
    'fr': '💡 Demande de fonctionnalité',
    'de': '💡 Funktionsanfrage',
    'ja': '💡 機能リクエスト',
    'ko': '💡 기능 요청',
    'pt': '💡 Solicitação de recurso',
    'ru': '💡 Запрос функции',
    'ar': '💡 طلب ميزة'
};

TRANSLATIONS['contact.reason.feature.desc'] = {
    'en': 'Have an idea for a new feature? We\'d love to hear it! Send your suggestions to admin@toolvx.com.',
    'zh': '有新功能的想法吗？我们很乐意听取！将您的建议发送至 admin@toolvx.com。',
    'es': '¿Tiene una idea para una nueva función? ¡Nos encantaría escucharla! Envíe sus sugerencias a admin@toolvx.com.',
    'fr': 'Vous avez une idée pour une nouvelle fonctionnalité ? Nous serions ravis de l\'entendre ! Envoyez vos suggestions à admin@toolvx.com.',
    'de': 'Haben Sie eine Idee für eine neue Funktion? Wir würden sie gerne hören! Senden Sie Ihre Vorschläge an admin@toolvx.com.',
    'ja': '新機能のアイデアがありますか？ぜひお聞かせください！admin@toolvx.com までご提案をお送りください。',
    'ko': '새로운 기능에 대한 아이디어가 있으신가요? 듣고 싶습니다! admin@toolvx.com으로 제안을 보내주세요.',
    'pt': 'Tem uma ideia para um novo recurso? Adoraríamos ouvir! Envie suas sugestões para admin@toolvx.com.',
    'ru': 'Есть идея для новой функции? Мы будем рады услышать! Отправьте свои предложения на admin@toolvx.com.',
    'ar': 'هل لديك فكرة لميزة جديدة؟ نود أن نسمعها! أرسل اقتراحاتك إلى admin@toolvx.com.'
};

TRANSLATIONS['contact.reason.privacy'] = {
    'en': '🔒 Privacy Concerns',
    'zh': '🔒 隐私问题',
    'es': '🔒 Preocupaciones de privacidad',
    'fr': '🔒 Préoccupations relatives à la confidentialité',
    'de': '🔒 Datenschutzbedenken',
    'ja': '🔒 プライバシーに関する懸念',
    'ko': '🔒 개인정보 보호 문제',
    'pt': '🔒 Preocupações com privacidade',
    'ru': '🔒 Вопросы конфиденциальности',
    'ar': '🔒 مخاوف الخصوصية'
};

TRANSLATIONS['contact.reason.privacy.desc'] = {
    'en': 'Questions about data privacy or GDPR rights? Contact us at admin@toolvx.com. We take privacy seriously and will respond promptly.',
    'zh': '有关数据隐私或GDPR权利的问题？请联系 admin@toolvx.com。我们认真对待隐私并将及时回复。',
    'es': '¿Preguntas sobre la privacidad de datos o los derechos del GDPR? Contáctenos en admin@toolvx.com. Tomamos la privacidad en serio y responderemos prontamente.',
    'fr': 'Des questions sur la confidentialité des données ou les droits RGPD ? Contactez-nous à admin@toolvx.com. Nous prenons la confidentialité au sérieux et répondrons rapidement.',
    'de': 'Fragen zum Datenschutz oder DSGVO-Rechten? Kontaktieren Sie uns unter admin@toolvx.com. Wir nehmen Datenschutz ernst und werden prompt antworten.',
    'ja': 'データプライバシーまたはGDPR権利に関する質問？admin@toolvx.com までご連絡ください。私たちはプライバシーを真剣に受け止め、迅速に対応します。',
    'ko': '데이터 개인정보 보호 또는 GDPR 권리에 관한 질문이 있으신가요? admin@toolvx.com으로 문의하세요. 당사는 개인정보 보호를 진지하게 받아들이고 신속하게 응답할 것입니다.',
    'pt': 'Perguntas sobre privacidade de dados ou direitos do GDPR? Contate-nos em admin@toolvx.com. Levamos a privacidade a sério e responderemos prontamente.',
    'ru': 'Вопросы о конфиденциальности данных или правах GDPR? Свяжитесь с нами по адресу admin@toolvx.com. Мы серьезно относимся к конфиденциальности и оперативно ответим.',
    'ar': 'أسئلة حول خصوصية البيانات أو حقوق GDPR؟ اتصل بنا على admin@toolvx.com. نحن نأخذ الخصوصية على محمل الجد وسنرد بسرعة.'
};

TRANSLATIONS['contact.reason.docs'] = {
    'en': '📚 Documentation Help',
    'zh': '📚 文档帮助',
    'es': '📚 Ayuda con documentación',
    'fr': '📚 Aide à la documentation',
    'de': '📚 Dokumentationshilfe',
    'ja': '📚 ドキュメントヘルプ',
    'ko': '📚 문서 도움말',
    'pt': '📚 Ajuda com documentação',
    'ru': '📚 Помощь с документацией',
    'ar': '📚 مساعدة الوثائق'
};

TRANSLATIONS['contact.reason.docs.desc'] = {
    'en': 'Need help understanding how to use a feature? Check our blog tutorials first, then contact us if you still need assistance.',
    'zh': '需要帮助了解如何使用某项功能吗？先查看我们的博客教程，如果仍然需要帮助，请联系我们。',
    'es': '¿Necesita ayuda para entender cómo usar una función? Consulte nuestros tutoriales de blog primero, luego contáctenos si aún necesita ayuda.',
    'fr': 'Besoin d\'aide pour comprendre comment utiliser une fonctionnalité ? Consultez d\'abord nos tutoriels de blog, puis contactez-nous si vous avez toujours besoin d\'aide.',
    'de': 'Brauchen Sie Hilfe beim Verständnis der Verwendung einer Funktion? Überprüfen Sie zuerst unsere Blog-Tutorials und kontaktieren Sie uns dann, wenn Sie weiterhin Hilfe benötigen.',
    'ja': '機能の使い方を理解するのに助けが必要ですか？まずブログチュートリアルを確認し、それでも助けが必要な場合はお問い合わせください。',
    'ko': '기능 사용 방법을 이해하는 데 도움이 필요하신가요? 먼저 블로그 튜토리얼을 확인한 후 여전히 도움이 필요하면 문의하세요.',
    'pt': 'Precisa de ajuda para entender como usar um recurso? Verifique nossos tutoriais de blog primeiro, depois entre em contato se ainda precisar de ajuda.',
    'ru': 'Нужна помощь в понимании того, как использовать функцию? Сначала проверьте наши учебные пособия в блоге, затем свяжитесь с нами, если вам все еще нужна помощь.',
    'ar': 'تحتاج مساعدة في فهم كيفية استخدام ميزة؟ تحقق من دروس المدونة أولاً، ثم اتصل بنا إذا كنت لا تزال بحاجة إلى المساعدة.'
};

TRANSLATIONS['contact.reason.partnership'] = {
    'en': '🤝 Partnership Opportunities',
    'zh': '🤝 合作机会',
    'es': '🤝 Oportunidades de asociación',
    'fr': '🤝 Opportunités de partenariat',
    'de': '🤝 Partnerschaftsmöglichkeiten',
    'ja': '🤝 パートナーシップの機会',
    'ko': '🤝 파트너십 기회',
    'pt': '🤝 Oportunidades de parceria',
    'ru': '🤝 Возможности партнерства',
    'ar': '🤝 فرص الشراكة'
};

TRANSLATIONS['contact.reason.partnership.desc'] = {
    'en': 'Interested in collaborating, guest posting, or partnership opportunities? Reach out to admin@toolvx.com.',
    'zh': '对合作、客座发帖或合作伙伴关系感兴趣？请联系 admin@toolvx.com。',
    'es': '¿Interesado en colaborar, publicar como invitado u oportunidades de asociación? Comuníquese con admin@toolvx.com.',
    'fr': 'Intéressé par la collaboration, les articles invités ou les opportunités de partenariat ? Contactez admin@toolvx.com.',
    'de': 'Interessiert an Zusammenarbeit, Gastbeiträgen oder Partnerschaftsmöglichkeiten? Wenden Sie sich an admin@toolvx.com.',
    'ja': 'コラボレーション、ゲスト投稿、パートナーシップの機会に興味がありますか？admin@toolvx.com までご連絡ください。',
    'ko': '협력, 게스트 포스팅 또는 파트너십 기회에 관심이 있으신가요? admin@toolvx.com으로 연락하세요.',
    'pt': 'Interessado em colaborar, postar como convidado ou oportunidades de parceria? Entre em contato com admin@toolvx.com.',
    'ru': 'Заинтересованы в сотрудничестве, гостевых постах или возможностях партнерства? Свяжитесь с admin@toolvx.com.',
    'ar': 'مهتم بالتعاون أو النشر كضيف أو فرص الشراكة؟ تواصل مع admin@toolvx.com.'
};

TRANSLATIONS['contact.reason.security'] = {
    'en': '⚠️ Security Issues',
    'zh': '⚠️ 安全问题',
    'es': '⚠️ Problemas de seguridad',
    'fr': '⚠️ Problèmes de sécurité',
    'de': '⚠️ Sicherheitsprobleme',
    'ja': '⚠️ セキュリティ問題',
    'ko': '⚠️ 보안 문제',
    'pt': '⚠️ Problemas de segurança',
    'ru': '⚠️ Проблемы безопасности',
    'ar': '⚠️ مشاكل الأمان'
};

TRANSLATIONS['contact.reason.security.desc'] = {
    'en': 'If you discover a security vulnerability, please report it responsibly to admin@toolvx.com. Do not publicly disclose until we\'ve had a chance to address it.',
    'zh': '如果您发现安全漏洞，请负责任地向 admin@toolvx.com 报告。在我们有机会解决之前，请勿公开披露。',
    'es': 'Si descubre una vulnerabilidad de seguridad, infórmela responsablemente a admin@toolvx.com. No la divulgue públicamente hasta que hayamos tenido la oportunidad de abordarla.',
    'fr': 'Si vous découvrez une vulnérabilité de sécurité, veuillez la signaler de manière responsable à admin@toolvx.com. Ne la divulguez pas publiquement avant que nous ayons eu la chance de la résoudre.',
    'de': 'Wenn Sie eine Sicherheitslücke entdecken, melden Sie diese bitte verantwortungsvoll an admin@toolvx.com. Veröffentlichen Sie sie nicht öffentlich, bevor wir die Möglichkeit hatten, sie zu beheben.',
    'ja': 'セキュリティ脆弱性を発見した場合は、責任を持って admin@toolvx.com まで報告してください。対応する機会があるまで公開しないでください。',
    'ko': '보안 취약점을 발견하면 admin@toolvx.com으로 책임 있게 보고해주세요. 해결할 기회를 갖기 전에 공개적으로 밝히지 마세요.',
    'pt': 'Se você descobrir uma vulnerabilidade de segurança, relate-a responsavelmente para admin@toolvx.com. Não divulgue publicamente até que tenhamos tido a chance de resolvê-la.',
    'ru': 'Если вы обнаружите уязвимость безопасности, пожалуйста, ответственно сообщите об этом на admin@toolvx.com. Не разглашайте публично, пока у нас не будет возможности устранить ее.',
    'ar': 'إذا اكتشفت ثغرة أمنية، يرجى الإبلاغ عنها بمسؤولية إلى admin@toolvx.com. لا تكشف عنها علنًا حتى تتاح لنا الفرصة لمعالجتها.'
};

TRANSLATIONS['contact.notFor'] = {
    'en': '✅ What NOT to Contact Us For',
    'zh': '✅ 不要联系我们处理的事项',
    'es': '✅ Para qué NO contactarnos',
    'fr': '✅ Pour quoi NE PAS nous contacter',
    'de': '✅ Wofür Sie uns NICHT kontaktieren sollten',
    'ja': '✅ お問い合わせいただけない事項',
    'ko': '✅ 문의하지 말아야 할 사항',
    'pt': '✅ Para o que NÃO nos contatar',
    'ru': '✅ По каким вопросам НЕ обращаться к нам',
    'ar': '✅ لما لا تتصل بنا من أجله'
};

TRANSLATIONS['contact.notFor.password'] = {
    'en': '❌ Password resets (we don\'t store passwords)',
    'zh': '❌ 密码重置（我们不存储密码）',
    'es': '❌ Restablecimiento de contraseñas (no almacenamos contraseñas)',
    'fr': '❌ Réinitialisation des mots de passe (nous ne stockons pas les mots de passe)',
    'de': '❌ Passwortzurücksetzungen (wir speichern keine Passwörter)',
    'ja': '❌ パスワードのリセット（パスワードは保存していません）',
    'ko': '❌ 비밀번호 재설정 (비밀번호를 저장하지 않음)',
    'pt': '❌ Redefinições de senha (não armazenamos senhas)',
    'ru': '❌ Сброс паролей (мы не храним пароли)',
    'ar': '❌ إعادة تعيين كلمات المرور (لا نخزن كلمات المرور)'
};

TRANSLATIONS['contact.notFor.account'] = {
    'en': '❌ Account issues (no account required)',
    'zh': '❌ 账户问题（不需要账户）',
    'es': '❌ Problemas de cuenta (no se requiere cuenta)',
    'fr': '❌ Problèmes de compte (aucun compte requis)',
    'de': '❌ Kontoprobleme (kein Konto erforderlich)',
    'ja': '❌ アカウントの問題（アカウントは不要）',
    'ko': '❌ 계정 문제 (계정 불필요)',
    'pt': '❌ Problemas de conta (nenhuma conta necessária)',
    'ru': '❌ Проблемы с аккаунтом (аккаунт не требуется)',
    'ar': '❌ مشاكل الحساب (لا يلزم وجود حساب)'
};

TRANSLATIONS['contact.notFor.billing'] = {
    'en': '❌ Billing questions (service is 100% free)',
    'zh': '❌ 账单问题（服务完全免费）',
    'es': '❌ Preguntas de facturación (el servicio es 100% gratuito)',
    'fr': '❌ Questions de facturation (le service est 100% gratuit)',
    'de': '❌ Abrechnungsfragen (Dienst ist 100% kostenlos)',
    'ja': '❌ 請求に関する質問（サービスは100%無料）',
    'ko': '❌ 청구 관련 질문 (서비스는 100% 무료)',
    'pt': '❌ Perguntas de faturamento (serviço é 100% gratuito)',
    'ru': '❌ Вопросы выставления счетов (услуга на 100% бесплатна)',
    'ar': '❌ أسئلة الفوترة (الخدمة مجانية بنسبة 100٪)'
};

TRANSLATIONS['contact.notFor.recovery'] = {
    'en': '❌ File recovery (we don\'t store your files)',
    'zh': '❌ 文件恢复（我们不存储您的文件）',
    'es': '❌ Recuperación de archivos (no almacenamos sus archivos)',
    'fr': '❌ Récupération de fichiers (nous ne stockons pas vos fichiers)',
    'de': '❌ Dateiwiederherstellung (wir speichern Ihre Dateien nicht)',
    'ja': '❌ ファイルの復元（ファイルは保存していません）',
    'ko': '❌ 파일 복구 (파일을 저장하지 않음)',
    'pt': '❌ Recuperação de arquivos (não armazenamos seus arquivos)',
    'ru': '❌ Восстановление файлов (мы не храним ваши файлы)',
    'ar': '❌ استرداد الملفات (لا نخزن ملفاتك)'
};

// About Section
TRANSLATIONS['contact.about'] = {
    'en': 'About toolvx.com',
    'zh': '关于 toolvx.com',
    'es': 'Acerca de toolvx.com',
    'fr': 'À propos de toolvx.com',
    'de': 'Über toolvx.com',
    'ja': 'toolvx.com について',
    'ko': 'toolvx.com 소개',
    'pt': 'Sobre toolvx.com',
    'ru': 'О toolvx.com',
    'ar': 'حول toolvx.com'
};

TRANSLATIONS['contact.mission.title'] = {
    'en': 'Our Mission',
    'zh': '我们的使命',
    'es': 'Nuestra misión',
    'fr': 'Notre mission',
    'de': 'Unsere Mission',
    'ja': '私たちの使命',
    'ko': '우리의 사명',
    'pt': 'Nossa missão',
    'ru': 'Наша миссия',
    'ar': 'مهمتنا'
};

TRANSLATIONS['contact.mission.desc'] = {
    'en': 'To provide free, secure, and privacy-first tools for protecting sensitive information in images and documents.',
    'zh': '提供免费、安全且隐私优先的工具，用于保护图像和文档中的敏感信息。',
    'es': 'Proporcionar herramientas gratuitas, seguras y con prioridad de privacidad para proteger información confidencial en imágenes y documentos.',
    'fr': 'Fournir des outils gratuits, sécurisés et axés sur la confidentialité pour protéger les informations sensibles dans les images et les documents.',
    'de': 'Kostenlose, sichere und datenschutzorientierte Tools zum Schutz sensibler Informationen in Bildern und Dokumenten bereitstellen.',
    'ja': '画像や文書内の機密情報を保護するための無料、安全、プライバシー優先のツールを提供すること。',
    'ko': '이미지 및 문서의 민감한 정보를 보호하기 위한 무료, 안전하고 개인 정보 우선 도구를 제공하는 것.',
    'pt': 'Fornecer ferramentas gratuitas, seguras e com foco na privacidade para proteger informações confidenciais em imagens e documentos.',
    'ru': 'Предоставлять бесплатные, безопасные и ориентированные на конфиденциальность инструменты для защиты конфиденциальной информации в изображениях и документах.',
    'ar': 'توفير أدوات مجانية وآمنة وذات أولوية للخصوصية لحماية المعلومات الحساسة في الصور والمستندات.'
};

TRANSLATIONS['contact.privacy.title'] = {
    'en': 'Privacy First',
    'zh': '隐私优先',
    'es': 'Privacidad primero',
    'fr': 'Confidentialité d\'abord',
    'de': 'Datenschutz zuerst',
    'ja': 'プライバシーファースト',
    'ko': '개인 정보 우선',
    'pt': 'Privacidade em primeiro lugar',
    'ru': 'Конфиденциальность прежде всего',
    'ar': 'الخصوصية أولاً'
};

TRANSLATIONS['contact.privacy.desc'] = {
    'en': 'All processing happens locally in your browser. Your files never leave your device or get uploaded to servers.',
    'zh': '所有处理都在浏览器中本地进行。您的文件绝不会离开您的设备或上传到服务器。',
    'es': 'Todo el procesamiento ocurre localmente en su navegador. Sus archivos nunca salen de su dispositivo ni se cargan en servidores.',
    'fr': 'Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil et ne sont pas téléchargés sur des serveurs.',
    'de': 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen niemals Ihr Gerät oder werden auf Server hochgeladen.',
    'ja': 'すべての処理はブラウザでローカルに行われます。ファイルはデバイスから流出したり、サーバーにアップロードされたりしません。',
    'ko': '모든 처리는 브라우저에서 로컬로 발생합니다. 파일은 장치를 떠나거나 서버에 업로드되지 않습니다.',
    'pt': 'Todo o processamento ocorre localmente no seu navegador. Seus arquivos nunca saem do seu dispositivo ou são carregados em servidores.',
    'ru': 'Вся обработка происходит локально в вашем браузере. Ваши файлы никогда не покидают ваше устройство и не загружаются на серверы.',
    'ar': 'تتم جميع المعالجة محليًا في متصفحك. ملفاتك لا تغادر جهازك أبدًا ولا يتم تحميلها على الخوادم.'
};

TRANSLATIONS['contact.free.title'] = {
    'en': '100% Free',
    'zh': '100% 免费',
    'es': '100% gratuito',
    'fr': '100% gratuit',
    'de': '100% kostenlos',
    'ja': '100% 無料',
    'ko': '100% 무료',
    'pt': '100% gratuito',
    'ru': '100% бесплатно',
    'ar': 'مجاني بنسبة 100٪'
};

TRANSLATIONS['contact.free.desc'] = {
    'en': 'No hidden costs, no watermarks, no registration required. Use our tool as much as you need, completely free.',
    'zh': '无隐藏费用，无水印，无需注册。根据需要随意使用我们的工具，完全免费。',
    'es': 'Sin costos ocultos, sin marcas de agua, sin registro requerido. Use nuestra herramienta tanto como necesite, completamente gratis.',
    'fr': 'Aucun coût caché, aucun filigrane, aucune inscription requise. Utilisez notre outil autant que vous le souhaitez, complètement gratuitement.',
    'de': 'Keine versteckten Kosten, keine Wasserzeichen, keine Registrierung erforderlich. Nutzen Sie unser Tool so oft Sie möchten, völlig kostenlos.',
    'ja': '隠れたコストなし、透かしなし、登録不要。必要に応じてツールを完全に無料でご利用いただけます。',
    'ko': '숨겨진 비용 없음, 워터마크 없음, 등록 불필요. 필요한 만큼 도구를 완전히 무료로 사용하세요.',
    'pt': 'Sem custos ocultos, sem marcas d\'água, nenhum registro necessário. Use nossa ferramenta o quanto precisar, completamente gratuito.',
    'ru': 'Без скрытых расходов, без водяных знаков, регистрация не требуется. Используйте наш инструмент столько, сколько нужно, совершенно бесплатно.',
    'ar': 'بدون تكاليف خفية، بدون علامات مائية، بدون تسجيل مطلوب. استخدم أداتنا بقدر ما تحتاج، مجانًا تمامًا.'
};

// Privacy Policy translations
TRANSLATIONS['pp.title'] = {
    'en': 'Privacy Policy',
    'zh': '隐私政策',
    'es': 'Política de privacidad',
    'fr': 'Politique de confidentialité',
    'de': 'Datenschutzerklärung',
    'ja': 'プライバシーポリシー',
    'ko': '개인정보 보호정책',
    'pt': 'Política de privacidade',
    'ru': 'Политика конфиденциальности',
    'ar': 'سياسة الخصوصية'
};

TRANSLATIONS['pp.lastUpdated'] = {
    'en': 'Last updated: May 31, 2026',
    'zh': '最后更新：2026年5月31日',
    'es': 'Última actualización: 31 de mayo de 2026',
    'fr': 'Dernière mise à jour : 31 mai 2026',
    'de': 'Letzte Aktualisierung: 31. Mai 2026',
    'ja': '最終更新日：2026年5月31日',
    'ko': '마지막 업데이트: 2026년 5월 31일',
    'pt': 'Última atualização: 31 de maio de 2026',
    'ru': 'Последнее обновление: 31 мая 2026 г.',
    'ar': 'آخر تحديث: 31 مايو 2026'
};

TRANSLATIONS['pp.intro'] = {
    'en': 'At toolvx.com ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our free online image and PDF redaction tool.',
    'zh': '在 toolvx.com（"我们"），我们致力于保护您的隐私。本隐私政策解释了我们如何收集、使用和保护您在使用我们的免费在线图像和PDF脱敏工具时的信息。',
    'es': 'En toolvx.com ("nosotros"), estamos comprometidos a proteger su privacidad. Esta Política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestra herramienta gratuita de edición de imágenes y PDF en línea.',
    'fr': 'Chez toolvx.com ("nous"), nous nous engageons à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre outil gratuit d\'édition d\'images et de PDF en ligne.',
    'de': 'Bei toolvx.com ("wir") sind wir verpflichtet, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unser kostenloses Online-Tool zur Bild- und PDF-Bearbeitung verwenden.',
    'ja': 'toolvx.com（「私たち」）では、お客様のプライバシーを保護することをお約束します。本プライバシーポリシーでは、無料のオンライン画像およびPDF編集ツールを使用する際に、私たちがどのように情報を収集、使用、保護するかを説明します。',
    'ko': 'toolvx.com("우리")에서는 귀하의 개인정보 보호를 위해 최선을 다하고 있습니다. 본 개인정보 보호정책은 무료 온라인 이미지 및 PDF 편집 도구를 사용할 때 정보를 수집, 사용 및 보호하는 방법을 설명합니다.',
    'pt': 'No toolvx.com ("nós"), estamos comprometidos em proteger sua privacidade. Esta Política de privacidade explica como coletamos, usamos e protegemos suas informações quando você usa nossa ferramenta gratuita de edição de imagens e PDF online.',
    'ru': 'На toolvx.com ("мы") мы стремимся защищать вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию, когда вы используете наш бесплатный онлайн-инструмент для редактирования изображений и PDF.',
    'ar': 'في toolvx.com ("نحن")، نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية معلوماتك عند استخدام أداتنا المجانية لتحرير الصور وملفات PDF عبر الإنترنت.'
};

TRANSLATIONS['pp.s1.title'] = {
    'en': '1. Information We Collect',
    'zh': '1. 我们收集的信息',
    'es': '1. Información que recopilamos',
    'fr': '1. Informations que nous collectons',
    'de': '1. Informationen, die wir sammeln',
    'ja': '1. 収集する情報',
    'ko': '1. 수집하는 정보',
    'pt': '1. Informações que coletamos',
    'ru': '1. Информация, которую мы собираем',
    'ar': '1. المعلومات التي نجمعها'
};

TRANSLATIONS['pp.s1.1.title'] = {
    'en': '1.1 Personal Information',
    'zh': '1.1 个人信息',
    'es': '1.1 Información personal',
    'fr': '1.1 Informations personnelles',
    'de': '1.1 Persönliche Informationen',
    'ja': '1.1 個人情報',
    'ko': '1.1 개인 정보',
    'pt': '1.1 Informações pessoais',
    'ru': '1.1 Персональная информация',
    'ar': '1.1 المعلومات الشخصية'
};

TRANSLATIONS['pp.s1.1.text'] = {
    'en': 'We do NOT collect any personal information. Our tool operates entirely in your browser, and no files, images, or documents are uploaded to our servers. You can use our service anonymously without creating an account or providing any personal details.',
    'zh': '我们完全不收集任何个人信息。我们的工具完全在您的浏览器中运行，不会将任何文件、图像或文档上传到我们的服务器。您可以匿名使用我们的服务，无需创建账户或提供任何个人信息。',
    'es': 'NO recopilamos ninguna información personal. Nuestra herramienta funciona completamente en su navegador y no se cargan archivos, imágenes ni documentos en nuestros servidores. Puede usar nuestro servicio de forma anónima sin crear una cuenta ni proporcionar datos personales.',
    'fr': 'Nous ne collectons AUCUNE information personnelle. Notre outil fonctionne entièrement dans votre navigateur et aucun fichier, image ou document n\'est téléchargé sur nos serveurs. Vous pouvez utiliser notre service anonymement sans créer de compte ni fournir de données personnelles.',
    'de': 'Wir sammeln KEINE persönlichen Informationen. Unser Tool funktioniert vollständig in Ihrem Browser und keine Dateien, Bilder oder Dokumente werden auf unsere Server hochgeladen. Sie können unseren Service anonym nutzen, ohne ein Konto zu erstellen oder persönliche Daten anzugeben.',
    'ja': '個人情報を収集しません。当ツールはブラウザ内で完全に動作し、ファイル、画像、文書はサーバーにアップロードされません。アカウント作成や個人情報の提供なしに匿名でサービスを利用できます。',
    'ko': '개인 정보를 수집하지 않습니다. 우리의 도구는 브라우저에서 완전히 작동하며 파일, 이미지 또는 문서가 서버에 업로드되지 않습니다. 계정을 만들거나 개인 정보를 제공하지 않고 익명으로 서비스를 이용할 수 있습니다.',
    'pt': 'NÃO coletamos nenhuma informação pessoal. Nossa ferramenta opera inteiramente no seu navegador e nenhum arquivo, imagem ou documento é carregado em nossos servidores. Você pode usar nosso serviço anonimamente sem criar uma conta ou fornecer dados pessoais.',
    'ru': 'Мы НЕ собираем никакой личной информации. Наш инструмент работает полностью в вашем браузере, и файлы, изображения или документы не загружаются на наши серверы. Вы можете использовать наш сервис анонимно, не создавая учетной записи и не предоставляя личных данных.',
    'ar': 'لا نقوم بجمع أي معلومات شخصية. تعمل أداتنا بالكامل في متصفحك، ولا يتم تحميل أي ملفات أو صور أو مستندات إلى خوادمنا. يمكنك استخدام خدمتنا بشكل مجهول دون إنشاء حساب أو تقديم أي تفاصيل شخصية.'
};

TRANSLATIONS['pp.s1.2.title'] = {
    'en': '1.2 Automatically Collected Information',
    'zh': '1.2 自动收集的信息',
    'es': '1.2 Información recopilada automáticamente',
    'fr': '1.2 Informations collectées automatiquement',
    'de': '1.2 Automatisch gesammelte Informationen',
    'ja': '1.2 自動的に収集される情報',
    'ko': '1.2 자동으로 수집된 정보',
    'pt': '1.2 Informações coletadas automaticamente',
    'ru': '1.2 Автоматически собираемая информация',
    'ar': '1.2 المعلومات التي يتم جمعها تلقائيًا'
};

TRANSLATIONS['pp.s1.2.text'] = {
    'en': 'When you visit our website, we may automatically collect certain non-personal information for analytics and improvement purposes:',
    'zh': '当您访问我们的网站时，我们可能会自动收集某些非个人信息，用于分析和改进目的：',
    'es': 'Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información no personal con fines de análisis y mejora:',
    'fr': 'Lorsque vous visitez notre site Web, nous pouvons collecter automatiquement certaines informations non personnelles à des fins d\'analyse et d\'amélioration :',
    'de': 'Wenn Sie unsere Website besuchen, können wir automatisch bestimmte nicht persönliche Informationen zu Analyse- und Verbesserungszwecken sammeln:',
    'ja': '当サイトを訪問すると、分析および改善の目的で特定の非個人情報を自動的に収集する場合があります。',
    'ko': '웹사이트를 방문하면 분석 및 개선 목적으로 특정 비개인 정보를 자동으로 수집할 수 있습니다.',
    'pt': 'Quando você visita nosso site, podemos coletar automaticamente certas informações não pessoais para fins de análise e melhoria:',
    'ru': 'При посещении нашего веб-сайта мы можем автоматически собирать определенную неперсональную информацию в целях аналитики и улучшения:',
    'ar': 'عند زيارتك لموقعنا، قد نقوم تلقائيًا بجمع بعض المعلومات غير الشخصية لأغراض التحليل والتحسين:'
};

TRANSLATIONS['pp.s1.2.li1'] = {
    'en': 'Browser type and version',
    'zh': '浏览器类型和版本',
    'es': 'Tipo y versión del navegador',
    'fr': 'Type et version du navigateur',
    'de': 'Browsertyp und -version',
    'ja': 'ブラウザの種類とバージョン',
    'ko': '브라우저 유형 및 버전',
    'pt': 'Tipo e versão do navegador',
    'ru': 'Тип и версия браузера',
    'ar': 'نوع وإصدار المتصفح'
};

TRANSLATIONS['pp.s1.2.li2'] = {
    'en': 'Operating system',
    'zh': '操作系统',
    'es': 'Sistema operativo',
    'fr': 'Système d\'exploitation',
    'de': 'Betriebssystem',
    'ja': 'オペレーティングシステム',
    'ko': '운영 체제',
    'pt': 'Sistema operacional',
    'ru': 'Операционная система',
    'ar': 'نظام التشغيل'
};

TRANSLATIONS['pp.s1.2.li3'] = {
    'en': 'Referring website (if applicable)',
    'zh': '引荐网站（如适用）',
    'es': 'Sitio web de referencia (si corresponde)',
    'fr': 'Site web référent (si applicable)',
    'de': 'Referenz-Website (falls zutreffend)',
    'ja': '参照元ウェブサイト（該当する場合）',
    'ko': '참조 웹사이트(해당하는 경우)',
    'pt': 'Site de referência (se aplicável)',
    'ru': 'Ссылающийся веб-сайт (если применимо)',
    'ar': 'الموقع المرجعي (إن وجد)'
};

TRANSLATIONS['pp.s1.2.li4'] = {
    'en': 'Pages visited on our site',
    'zh': '在我们网站上访问的页面',
    'es': 'Páginas visitadas en nuestro sitio',
    'fr': 'Pages visitées sur notre site',
    'de': 'Auf unserer Website besuchte Seiten',
    'ja': '当サイトで訪問したページ',
    'ko': '우리 사이트에서 방문한 페이지',
    'pt': 'Páginas visitadas em nosso site',
    'ru': 'Страницы, посещенные на нашем сайте',
    'ar': 'الصفحات التي تمت زيارتها على موقعنا'
};

TRANSLATIONS['pp.s1.2.li5'] = {
    'en': 'Time and date of visit',
    'zh': '访问时间和日期',
    'es': 'Hora y fecha de la visita',
    'fr': 'Heure et date de la visite',
    'de': 'Uhrzeit und Datum des Besuchs',
    'ja': '訪問の日時',
    'ko': '방문 시간 및 날짜',
    'pt': 'Hora e data da visita',
    'ru': 'Время и дата посещения',
    'ar': 'وقت وتاريخ الزيارة'
};

TRANSLATIONS['pp.s1.2.li6'] = {
    'en': 'Device type (desktop, mobile, tablet)',
    'zh': '设备类型（桌面、移动、平板）',
    'es': 'Tipo de dispositivo (escritorio, móvil, tableta)',
    'fr': 'Type d\'appareil (bureau, mobile, tablette)',
    'de': 'Gerätetyp (Desktop, Mobil, Tablet)',
    'ja': 'デバイスの種類（デスクトップ、モバイル、タブレット）',
    'ko': '장치 유형(데스크톱, 모바일, 태블릿)',
    'pt': 'Tipo de dispositivo (desktop, mobile, tablet)',
    'ru': 'Тип устройства (компьютер, мобильный, планшет)',
    'ar': 'نوع الجهاز (سطح المكتب، الجوال، اللوحي)'
};

TRANSLATIONS['pp.s1.2.note'] = {
    'en': 'This information is collected through cookies and similar technologies. It does not identify you personally and is used solely to improve our service and user experience.',
    'zh': '这些信息通过 Cookie 和类似技术收集。它不会识别您的个人身份，仅用于改进我们的服务和用户体验。',
    'es': 'Esta información se recopila a través de cookies y tecnologías similares. No le identifica personalmente y se utiliza únicamente para mejorar nuestro servicio y la experiencia del usuario.',
    'fr': 'Ces informations sont collectées via des cookies et des technologies similaires. Elles ne vous identifient pas personnellement et sont utilisées uniquement pour améliorer notre service et l\'expérience utilisateur.',
    'de': 'Diese Informationen werden über Cookies und ähnliche Technologien gesammelt. Sie identifiziert Sie nicht persönlich und wird ausschließlich zur Verbesserung unseres Services und der Benutzererfahrung verwendet.',
    'ja': 'この情報は、Cookie および類似技術を通じて収集されます。これは個人を特定するものではなく、サービスとユーザーエクスペリエンスの向上にのみ使用されます。',
    'ko': '이 정보는 쿠키 및 유사 기술을 통해 수집됩니다. 이는 개인을 식별하지 않으며 서비스와 사용자 경험을 개선하기 위해 사용됩니다.',
    'pt': 'Estas informações são coletadas por meio de cookies e tecnologias similares. Não o identificam pessoalmente e são usadas apenas para melhorar nosso serviço e a experiência do usuário.',
    'ru': 'Эта информация собирается с помощью файлов cookie и аналогичных технологий. Она не идентифицирует вас лично и используется исключительно для улучшения нашего сервиса и пользовательского опыта.',
    'ar': 'يتم جمع هذه المعلومات من خلال ملفات تعريف الارتباط والتقنيات المشابهة. لا تحدد هويتك شخصيًا وتُستخدم فقط لتحسين خدماتنا وتجربة المستخدم.'
};

TRANSLATIONS['pp.s2.title'] = {
    'en': '2. How We Use Your Information',
    'zh': '2. 我们如何使用您的信息',
    'es': '2. Cómo usamos su información',
    'fr': '2. Comment nous utilisons vos informations',
    'de': '2. Wie wir Ihre Informationen verwenden',
    'ja': '2. 情報の利用方法',
    'ko': '2. 수집한 정보의 사용 방법',
    'pt': '2. Como usamos suas informações',
    'ru': '2. Как мы используем вашу информацию',
    'ar': '2. كيف نستخدم معلوماتك'
};

TRANSLATIONS['pp.s2.text'] = {
    'en': 'Since we do not collect personal information, we do not use any personal data. The automatically collected non-personal information is used for:',
    'zh': '由于我们不收集个人信息，因此不会使用任何个人数据。自动收集的非个人信息用于：',
    'es': 'Dado que no recopilamos información personal, no utilizamos ningún dato personal. La información no personal recopilada automáticamente se utiliza para:',
    'fr': 'Étant donné que nous ne collectons pas d\'informations personnelles, nous n\'utilisons aucune donnée personnelle. Les informations non personnelles collectées automatiquement sont utilisées pour :',
    'de': 'Da wir keine persönlichen Informationen sammeln, verwenden wir keine persönlichen Daten. Die automatisch gesammelten nicht persönlichen Informationen werden verwendet für:',
    'ja': '個人情報を収集していないため、個人データは使用しません。自動的に収集された非個人情報は以下の目的で使用されます。',
    'ko': '개인 정보를 수집하지 않으므로 개인 데이터를 사용하지 않습니다. 자동으로 수집된 비개인 정보는 다음을 위해 사용됩니다.',
    'pt': 'Como não coletamos informações pessoais, não usamos nenhum dado pessoal. As informações não pessoais coletadas automaticamente são usadas para:',
    'ru': 'Поскольку мы не собираем личную информацию, мы не используем никаких личных данных. Автоматически собранная неперсональная информация используется для:',
    'ar': 'بما أننا لا نقوم بجمع المعلومات الشخصية، فإننا لا نستخدم أي بيانات شخصية. يتم استخدام المعلومات غير الشخصية التي يتم جمعها تلقائيًا لـ:'
};

TRANSLATIONS['pp.s2.li1'] = {
    'en': 'Analyzing website traffic and usage patterns',
    'zh': '分析网站流量和使用模式',
    'es': 'Analizar el tráfico del sitio web y los patrones de uso',
    'fr': 'Analyser le trafic du site Web et les modèles d\'utilisation',
    'de': 'Analysieren von Website-Traffic und Nutzungsmustern',
    'ja': 'ウェブサイトのトラフィックと使用パターンの分析',
    'ko': '웹사이트 트래픽 및 사용 패턴 분석',
    'pt': 'Analisar o tráfego do site e padrões de uso',
    'ru': 'Анализ трафика сайта и шаблонов использования',
    'ar': 'تحليل حركة مرور الموقع وأنماط الاستخدام'
};

TRANSLATIONS['pp.s2.li2'] = {
    'en': 'Improving our tool\'s functionality and performance',
    'zh': '改进工具的功能和性能',
    'es': 'Mejorar la funcionalidad y el rendimiento de nuestra herramienta',
    'fr': 'Améliorer la fonctionnalité et les performances de notre outil',
    'de': 'Verbesserung der Funktionalität und Leistung unseres Tools',
    'ja': 'ツールの機能とパフォーマンスの向上',
    'ko': '도구의 기능 및 성능 개선',
    'pt': 'Melhorar a funcionalidade e o desempenho de nossa ferramenta',
    'ru': 'Улучшение функциональности и производительности нашего инструмента',
    'ar': 'تحسين وظائف أدائنا وأدائنا'
};

TRANSLATIONS['pp.s2.li3'] = {
    'en': 'Identifying and fixing technical issues',
    'zh': '识别和修复技术问题',
    'es': 'Identificar y solucionar problemas técnicos',
    'fr': 'Identifier et résoudre les problèmes techniques',
    'de': 'Identifizierung und Behebung technischer Probleme',
    'ja': '技術的な問題の特定と修正',
    'ko': '기술 문제 식별 및 해결',
    'pt': 'Identificar e corrigir problemas técnicos',
    'ru': 'Выявление и устранение технических проблем',
    'ar': 'تحديد وإصلاح المشكلات الفنية'
};

TRANSLATIONS['pp.s2.li4'] = {
    'en': 'Enhancing user experience',
    'zh': '增强用户体验',
    'es': 'Mejorar la experiencia del usuario',
    'fr': 'Améliorer l\'expérience utilisateur',
    'de': 'Verbesserung der Benutzererfahrung',
    'ja': 'ユーザーエクスペリエンスの向上',
    'ko': '사용자 경험 향상',
    'pt': 'Melhorar a experiência do usuário',
    'ru': 'Улучшение пользовательского опыта',
    'ar': 'تعزيز تجربة المستخدم'
};

TRANSLATIONS['pp.s2.li5'] = {
    'en': 'Ensuring website security',
    'zh': '确保网站安全',
    'es': 'Garantizar la seguridad del sitio web',
    'fr': 'Assurer la sécurité du site Web',
    'de': 'Sicherstellung der Website-Sicherheit',
    'ja': 'ウェブサイトの安全性確保',
    'ko': '웹사이트 보안 보장',
    'pt': 'Garantir a segurança do site',
    'ru': 'Обеспечение безопасности сайта',
    'ar': 'ضمان أمان الموقع'
};

TRANSLATIONS['pp.s3.title'] = {
    'en': '3. Data Storage and Security',
    'zh': '3. 数据存储与安全',
    'es': '3. Almacenamiento y seguridad de datos',
    'fr': '3. Stockage et sécurité des données',
    'de': '3. Datenspeicherung und Sicherheit',
    'ja': '3. データの保存とセキュリティ',
    'ko': '3. 데이터 저장 및 보안',
    'pt': '3. Armazenamento e segurança de dados',
    'ru': '3. Хранение и безопасность данных',
    'ar': '3. تخزين البيانات والأمان'
};

TRANSLATIONS['pp.s3.1.title'] = {
    'en': '3.1 Local Processing',
    'zh': '3.1 本地处理',
    'es': '3.1 Procesamiento local',
    'fr': '3.1 Traitement local',
    'de': '3.1 Lokale Verarbeitung',
    'ja': '3.1 ローカル処理',
    'ko': '3.1 로컬 처리',
    'pt': '3.1 Processamento local',
    'ru': '3.1 Локальная обработка',
    'ar': '3.1 المعالجة المحلية'
};

TRANSLATIONS['pp.s3.1.text'] = {
    'en': 'All image and PDF processing happens locally in your browser. Your files never leave your device or get uploaded to any server. This ensures maximum privacy and security for your sensitive documents.',
    'zh': '所有图像和PDF处理都在您的浏览器中本地进行。您的文件永远不会离开您的设备或上传到任何服务器。这确保了敏感文档的最大隐私和安全性。',
    'es': 'Todo el procesamiento de imágenes y PDF se realiza localmente en su navegador. Sus archivos nunca abandonan su dispositivo ni se cargan en ningún servidor. Esto garantiza la máxima privacidad y seguridad para sus documentos sensibles.',
    'fr': 'Tout le traitement d\'images et de PDF se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil et ne sont téléchargés sur aucun serveur. Cela garantit une confidentialité et une sécurité maximales pour vos documents sensibles.',
    'de': 'Die gesamte Bild- und PDF-Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen nie Ihr Gerät oder werden auf einen Server hochgeladen. Dies gewährleistet maximale Privatsphäre und Sicherheit für Ihre sensiblen Dokumente.',
    'ja': 'すべての画像およびPDF処理は、ブラウザ内でローカルに行われます。ファイルがデバイスから離れたり、サーバーにアップロードされたりすることはありません。これにより、機密文書の最大限のプライバシーと安全性が確保されます。',
    'ko': '모든 이미지 및 PDF 처리는 브라우저에서 로컬로 이루어집니다. 파일이 장치를 떠나거나 서버에 업로드되지 않습니다. 이를 통해 민감한 문서의 최대한의 프라이버시와 보안이 보장됩니다.',
    'pt': 'Todo o processamento de imagens e PDF é feito localmente no seu navegador. Seus arquivos nunca saem do seu dispositivo ou são carregados em nenhum servidor. Isso garante a máxima privacidade e segurança para seus documentos sensíveis.',
    'ru': 'Вся обработка изображений и PDF происходит локально в вашем браузере. Ваши файлы никогда не покидают ваше устройство и не загружаются на какой-либо сервер. Это обеспечивает максимальную конфиденциальность и безопасность для ваших конфиденциальных документов.',
    'ar': 'يتم معالجة جميع الصور وملفات PDF محليًا في متصفحك. ملفاتك لا تغادر جهازك أبدًا ولا يتم تحميلها على أي خادم. وهذا يضمن أقصى درجات الخصوصية والأمان لمستنداتك الحساسة.'
};

TRANSLATIONS['pp.s3.2.title'] = {
    'en': '3.2 No Server Storage',
    'zh': '3.2 无服务器存储',
    'es': '3.2 Sin almacenamiento en servidor',
    'fr': '3.2 Aucun stockage sur serveur',
    'de': '3.2 Keine Serverspeicherung',
    'ja': '3.2 サーバー保存なし',
    'ko': '3.2 서버 저장 없음',
    'pt': '3.2 Sem armazenamento no servidor',
    'ru': '3.2 Хранение на сервере отсутствует',
    'ar': '3.2 لا يوجد تخزين على الخادم'
};

TRANSLATIONS['pp.s3.2.text'] = {
    'en': 'We do not store any images, PDFs, or edited documents on our servers. Once you close your browser tab, all temporary data is permanently deleted.',
    'zh': '我们不会在我们的服务器上存储任何图像、PDF或脱敏过的文档。一旦您关闭浏览器标签页，所有临时数据将被永久删除。',
    'es': 'No almacenamos ninguna imagen, PDF ni documento editado en nuestros servidores. Una vez que cierra la pestaña de su navegador, todos los datos temporales se eliminan permanentemente.',
    'fr': 'Nous ne stockons aucune image, PDF ni document édité sur nos serveurs. Une fois que vous fermez l\'onglet de votre navigateur, toutes les données temporaires sont définitivement supprimées.',
    'de': 'Wir speichern keine Bilder, PDFs oder bearbeiteten Dokumente auf unseren Servern. Sobald Sie Ihren Browser-Tab schließen, werden alle temporären Daten dauerhaft gelöscht.',
    'ja': 'サーバーに画像、PDF、編集済み文書を保存することはありません。ブラウザタブを閉じると、すべての一時データは永久に削除されます。',
    'ko': '서버에 이미지, PDF 또는 편집된 문서를 저장하지 않습니다. 브라우저 탭을 닫으면 모든 임시 데이터가 영구적으로 삭제됩니다.',
    'pt': 'Não armazenamos nenhuma imagem, PDF ou documento editado em nossos servidores. Depois que você fecha a guia do navegador, todos os dados temporários são excluídos permanentemente.',
    'ru': 'Мы не храним никакие изображения, PDF-файлы или редактированные документы на наших серверах. После того как вы закрываете вкладку браузера, все временные данные безвозвратно удаляются.',
    'ar': 'لا نقوم بتخزين أي صور أو ملفات PDF أو مستندات معدلة على خوادمنا. بمجرد إغلاق علامة تبويب المتصفح الخاصة بك، يتم حذف جميع البيانات المؤقتة نهائيًا.'
};

TRANSLATIONS['pp.s3.3.title'] = {
    'en': '3.3 Website Security',
    'zh': '3.3 网站安全',
    'es': '3.3 Seguridad del sitio web',
    'fr': '3.3 Sécurité du site Web',
    'de': '3.3 Website-Sicherheit',
    'ja': '3.3 ウェブサイトのセキュリティ',
    'ko': '3.3 웹사이트 보안',
    'pt': '3.3 Segurança do site',
    'ru': '3.3 Безопасность сайта',
    'ar': '3.3 أمان الموقع'
};

TRANSLATIONS['pp.s3.3.text'] = {
    'en': 'We implement industry-standard security measures to protect our website, including:',
    'zh': '我们实施行业标准的安全措施来保护我们的网站，包括：',
    'es': 'Implementamos medidas de seguridad estándar de la industria para proteger nuestro sitio web, incluyendo:',
    'fr': 'Nous mettons en œuvre des mesures de sécurité conformes aux normes de l\'industrie pour protéger notre site Web, y compris :',
    'de': 'Wir implementieren branchenübliche Sicherheitsmaßnahmen zum Schutz unserer Website, einschließlich:',
    'ja': 'ウェブサイトを保護するために業界標準のセキュリティ対策を実施しています。',
    'ko': '웹사이트를 보호하기 위해 업계 표준 보안 조치를 구현하고 있습니다.',
    'pt': 'Implementamos medidas de segurança padrão da indústria para proteger nosso site, incluindo:',
    'ru': 'Мы внедряем стандартные меры безопасности для защиты нашего сайта, включая:',
    'ar': 'نقوم بتنفيذ تدابير أمان مطابقة لمعايير الصناعة لحماية موقعنا، بما في ذلك:'
};

TRANSLATIONS['pp.s3.3.li1'] = {
    'en': 'HTTPS encryption for all communications',
    'zh': '所有通信的HTTPS加密',
    'es': 'Encriptación HTTPS para todas las comunicaciones',
    'fr': 'Chiffrement HTTPS pour toutes les communications',
    'de': 'HTTPS-Verschlüsselung für alle Kommunikationen',
    'ja': 'すべての通信に対するHTTPS暗号化',
    'ko': '모든 통신을 위한 HTTPS 암호화',
    'pt': 'Criptografia HTTPS para todas as comunicações',
    'ru': 'HTTPS-шифрование для всех соединений',
    'ar': 'تشفير HTTPS لجميع الاتصالات'
};

TRANSLATIONS['pp.s3.3.li2'] = {
    'en': 'Regular security audits',
    'zh': '定期安全审计',
    'es': 'Auditorías de seguridad regulares',
    'fr': 'Audits de sécurité réguliers',
    'de': 'Regelmäßige Sicherheitsprüfungen',
    'ja': '定期的なセキュリティ監査',
    'ko': '정기적인 보안 감사',
    'pt': 'Auditorias de segurança regulares',
    'ru': 'Регулярные аудиты безопасности',
    'ar': 'عمليات تدقيق أمنية منتظمة'
};

TRANSLATIONS['pp.s3.3.li3'] = {
    'en': 'Protection against common web vulnerabilities',
    'zh': '防范常见网络漏洞',
    'es': 'Protección contra vulnerabilidades web comunes',
    'fr': 'Protection contre les vulnérabilités Web courantes',
    'de': 'Schutz gegen gängige Web-Schwachstellen',
    'ja': '一般的なWeb脆弱性に対する保護',
    'ko': '일반적인 웹 취약점에 대한 보호',
    'pt': 'Proteção contra vulnerabilidades web comuns',
    'ru': 'Защита от распространенных уязвимостей',
    'ar': 'الحماية ضد ثغرات الويب الشائعة'
};

TRANSLATIONS['pp.s4.title'] = {
    'en': '4. Cookies and Tracking Technologies',
    'zh': '4. Cookie和跟踪技术',
    'es': '4. Cookies y tecnologías de seguimiento',
    'fr': '4. Cookies et technologies de suivi',
    'de': '4. Cookies und Tracking-Technologien',
    'ja': '4. Cookieとトラッキング技術',
    'ko': '4. 쿠키 및 추적 기술',
    'pt': '4. Cookies e tecnologias de rastreamento',
    'ru': '4. Файлы cookie и технологии отслеживания',
    'ar': '4. ملفات تعريف الارتباط وتقنيات التتبع'
};

TRANSLATIONS['pp.s4.text'] = {
    'en': 'We use minimal cookies and similar technologies for the following purposes:',
    'zh': '我们使用最少的Cookie和类似技术，用于以下目的：',
    'es': 'Utilizamos cookies mínimas y tecnologías similares para los siguientes propósitos:',
    'fr': 'Nous utilisons un minimum de cookies et de technologies similaires aux fins suivantes :',
    'de': 'Wir verwenden minimale Cookies und ähnliche Technologien für die folgenden Zwecke:',
    'ja': '以下の目的のために、最小限のCookieおよび類似技術を使用しています。',
    'ko': '다음 목적을 위해 최소한의 쿠키 및 유사 기술을 사용합니다.',
    'pt': 'Usamos cookies mínimas e tecnologias similares para os seguintes propósitos:',
    'ru': 'Мы используем минимальное количество файлов cookie и аналогичных технологий для следующих целей:',
    'ar': 'نستخدم الحد الأدنى من ملفات تعريف الارتباط والتقنيات المماثلة للأغراض التالية:'
};

TRANSLATIONS['pp.s4.li1'] = {
    'en': 'Essential Cookies: Required for basic website functionality',
    'zh': '必要Cookie：网站基本功能所需',
    'es': 'Cookies esenciales: Requeridas para la funcionalidad básica del sitio web',
    'fr': 'Cookies essentiels : Requis pour la fonctionnalité de base du site Web',
    'de': 'Wesentliche Cookies: Erforderlich für die grundlegende Website-Funktionalität',
    'ja': '必須Cookie：ウェブサイトの基本機能に必要',
    'ko': '필수 쿠키: 기본 웹사이트 기능에 필요',
    'pt': 'Cookies essenciais: Necessários para a funcionalidade básica do site',
    'ru': 'Необходимые файлы cookie: Требуются для базовой функциональности сайта',
    'ar': 'ملفات تعريف الارتباط الأساسية: مطلوبة لوظائف الموقع الأساسية'
};

TRANSLATIONS['pp.s4.li2'] = {
    'en': 'Analytics Cookies: Help us understand how users interact with our site (e.g., Google Analytics)',
    'zh': '分析Cookie：帮助我们了解用户如何与网站互动（例如，Google Analytics）',
    'es': 'Cookies de análisis: Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio (p. ej., Google Analytics)',
    'fr': 'Cookies d\'analyse : Nous aident à comprendre comment les utilisateurs interagissent avec notre site (par exemple, Google Analytics)',
    'de': 'Analyse-Cookies: Helfen uns zu verstehen, wie Benutzer mit unserer Website interagieren (z. B. Google Analytics)',
    'ja': '分析Cookie：ユーザーがサイトとどのように対話するかを理解するのに役立ちます（例：Google Analytics）',
    'ko': '분석 쿠키: 사용자가 사이트와 상호 작용하는 방식을 이해하는 데 도움이 됩니다(예: Google Analytics)',
    'pt': 'Cookies de análise: Nos ajudam a entender como os usuários interagem com nosso site (por exemplo, Google Analytics)',
    'ru': 'Аналитические файлы cookie: Помогают нам понять, как пользователи взаимодействуют с нашим сайтом (например, Google Analytics)',
    'ar': 'ملفات تعريف الارتباط التحليلية: تساعدنا في فهم كيفية تفاعل المستخدمين مع موقعنا (على سبيل المثال، Google Analytics)'
};

TRANSLATIONS['pp.s4.li3'] = {
    'en': 'Preference Cookies: Remember your language preference and other settings',
    'zh': '偏好Cookie：记住您的语言偏好和其他设置',
    'es': 'Cookies de preferencias: Recuerdan su preferencia de idioma y otras configuraciones',
    'fr': 'Cookies de préférences : Mémorisent votre langue préférée et autres paramètres',
    'de': 'Präferenz-Cookies: Merken sich Ihre Spracheinstellung und andere Einstellungen',
    'ja': '設定Cookie：言語設定やその他の設定を記憶します',
    'ko': '환경 설정 쿠키: 언어 선호도 및 기타 설정을 기억합니다',
    'pt': 'Cookies de preferências: Lembram sua preferência de idioma e outras configurações',
    'ru': 'Файлы cookie настроек: Запоминают предпочитаемый язык и другие настройки',
    'ar': 'ملفات تعريف الارتباط التفضيلية: تتذكر تفضيل اللغة والإعدادات الأخرى'
};

TRANSLATIONS['pp.s4.note'] = {
    'en': 'You can control cookie settings through your browser. However, disabling certain cookies may affect website functionality.',
    'zh': '您可以通过浏览器控制Cookie设置。但是，禁用某些Cookie可能会影响网站功能。',
    'es': 'Puede controlar la configuración de cookies a través de su navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.',
    'fr': 'Vous pouvez contrôler les paramètres des cookies via votre navigateur. Cependant, la désactivation de certains cookies peut affecter la fonctionnalité du site Web.',
    'de': 'Sie können die Cookie-Einstellungen über Ihren Browser steuern. Das Deaktivieren bestimmter Cookies kann jedoch die Website-Funktionalität beeinträchtigen.',
    'ja': 'ブラウザを通じてCookie設定を管理できます。ただし、特定のCookieを無効にすると、ウェブサイトの機能に影響を与える可能性があります。',
    'ko': '브라우저를 통해 쿠키 설정을 제어할 수 있습니다. 그러나 특정 쿠키를 비활성화하면 웹사이트 기능에 영향을 미칠 수 있습니다.',
    'pt': 'Você pode controlar as configurações de cookies através do seu navegador. No entanto, desativar certos cookies pode afetar a funcionalidade do site.',
    'ru': 'Вы можете управлять настройками файлов cookie через свой браузер. Однако отключение определенных файлов cookie может повлиять на функциональность сайта.',
    'ar': 'يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك. ومع ذلك، فقد يؤثر تعطيل ملفات تعريف الارتباط على وظائف الموقع.'
};

TRANSLATIONS['pp.s5.title'] = {
    'en': '5. Third-Party Services',
    'zh': '5. 第三方服务',
    'es': '5. Servicios de terceros',
    'fr': '5. Services tiers',
    'de': '5. Drittanbieter-Dienste',
    'ja': '5. 第三者サービス',
    'ko': '5. 제3자 서비스',
    'pt': '5. Serviços de terceiros',
    'ru': '5. Услуги третьих сторон',
    'ar': '5. خدمات الطرف الثالث'
};

TRANSLATIONS['pp.s5.text'] = {
    'en': 'We may use third-party services for analytics and website improvement. These services may collect non-personal information as described in their own privacy policies:',
    'zh': '我们可能会使用第三方服务进行分析和网站改进。这些服务可能会收集非个人信息，如各自的隐私政策所述：',
    'es': 'Podemos usar servicios de terceros para análisis y mejora del sitio web. Estos servicios pueden recopilar información no personal según se describe en sus propias políticas de privacidad:',
    'fr': 'Nous pouvons utiliser des services tiers pour l\'analyse et l\'amélioration du site Web. Ces services peuvent collecter des informations non personnelles comme décrit dans leurs propres politiques de confidentialité :',
    'de': 'Wir können Drittanbieter-Dienste für Analyse- und Website-Verbesserungszwecke nutzen. Diese Dienste können nicht persönliche Informationen sammeln, wie in ihren eigenen Datenschutzrichtlinien beschrieben:',
    'ja': '分析とウェブサイトの改善のために、第三者サービスを利用する場合があります。これらのサービスは、それぞれのプライバシーポリシーに記載されているとおり、非個人情報を収集する場合があります。',
    'ko': '분석 및 웹사이트 개선을 위해 제3자 서비스를 사용할 수 있습니다. 이 서비스는 자체 개인정보 보호정책에 설명된 대로 비개인 정보를 수집할 수 있습니다.',
    'pt': 'Podemos usar serviços de terceiros para análise e melhoria do site. Esses serviços podem coletar informações não pessoais conforme descrito em suas próprias políticas de privacidade:',
    'ru': 'Мы можем использовать услуги третьих сторон для аналитики и улучшения сайта. Эти службы могут собирать неперсональную информацию, как описано в их собственных политиках конфиденциальности:',
    'ar': 'قد نستخدم خدمات الطرف الثالث للتحليلات وتحسين الموقع. قد تقوم هذه الخدمات بجمع معلومات غير شخصية كما هو موضح في سياسات الخصوصية الخاصة بها:'
};

TRANSLATIONS['pp.s5.li1'] = {
    'en': 'Google Analytics: For website traffic analysis',
    'zh': 'Google Analytics：用于网站流量分析',
    'es': 'Google Analytics: Para el análisis del tráfico del sitio web',
    'fr': 'Google Analytics : Pour l\'analyse du trafic du site Web',
    'de': 'Google Analytics: Für die Website-Traffic-Analyse',
    'ja': 'Google Analytics：ウェブサイトトラフィック分析用',
    'ko': 'Google Analytics: 웹사이트 트래픽 분석용',
    'pt': 'Google Analytics: Para análise de tráfego do site',
    'ru': 'Google Analytics: Для анализа трафика сайта',
    'ar': 'Google Analytics: لتحليل حركة مرور الموقع'
};

TRANSLATIONS['pp.s5.li2'] = {
    'en': 'CDN Providers: For faster content delivery (e.g., Cloudflare, jsDelivr)',
    'zh': 'CDN提供商：用于更快的内容交付（例如，Cloudflare，jsDelivr）',
    'es': 'Proveedores de CDN: Para una entrega de contenido más rápida (por ejemplo, Cloudflare, jsDelivr)',
    'fr': 'Fournisseurs de CDN : Pour une livraison de contenu plus rapide (par exemple, Cloudflare, jsDelivr)',
    'de': 'CDN-Anbieter: Für schnellere Inhaltsbereitstellung (z. B. Cloudflare, jsDelivr)',
    'ja': 'CDNプロバイダー：より高速なコンテンツ配信のため（例：Cloudflare、jsDelivr）',
    'ko': 'CDN 제공업체: 더 빠른 콘텐츠 전달을 위해(예: Cloudflare, jsDelivr)',
    'pt': 'Provedores de CDN: Para entrega de conteúdo mais rápida (por exemplo, Cloudflare, jsDelivr)',
    'ru': 'CDN-провайдеры: Для более быстрой доставки контента (например, Cloudflare, jsDelivr)',
    'ar': 'موفري CDN: لتوصيل محتوى أسرع (على سبيل المثال، Cloudflare، jsDelivr)'
};

TRANSLATIONS['pp.s5.note'] = {
    'en': 'These third parties have their own privacy policies, and we encourage you to review them.',
    'zh': '这些第三方有他们自己的隐私政策，我们建议您查看。',
    'es': 'Estas terceras partes tienen sus propias políticas de privacidad, y le recomendamos que las revise.',
    'fr': 'Ces tiers ont leurs propres politiques de confidentialité, et nous vous encourageons à les consulter.',
    'de': 'Diese Dritten haben ihre eigenen Datenschutzrichtlinien, und wir empfehlen Ihnen, diese zu überprüfen.',
    'ja': 'これらの第三者には各自のプライバシーポリシーがあり、確認することをお勧めします。',
    'ko': '이러한 제3자는 자체 개인정보 보호정책을 가지고 있으며 검토하시기를 권장합니다.',
    'pt': 'Esses terceiros têm suas próprias políticas de privacidade, e incentivamos você a revisá-las.',
    'ru': 'У этих третьих сторон есть свои собственные политики конфиденциальности, и мы рекомендуем вам ознакомиться с ними.',
    'ar': 'هذه الأطراف الثالثة لها سياسات الخصوصية الخاصة بها، ونحن نشجعك على مراجعتها.'
};

TRANSLATIONS['pp.s6.title'] = {
    'en': '6. Children\'s Privacy',
    'zh': '6. 儿童隐私',
    'es': '6. Privacidad de los niños',
    'fr': '6. Confidentialité des enfants',
    'de': '6. Datenschutz für Kinder',
    'ja': '6. 子供のプライバシー',
    'ko': '6. 어린이 개인정보 보호',
    'pt': '6. Privacidade infantil',
    'ru': '6. Конфиденциальность детей',
    'ar': '6. خصوصية الأطفال'
};

TRANSLATIONS['pp.s6.text'] = {
    'en': 'Our service is not directed to children under 13 years of age. We do not knowingly collect any information from children under 13. If you are a parent or guardian and believe your child has provided us with information, please contact us at admin@toolvx.com.',
    'zh': '我们的服务不面向13岁以下儿童。我们不会故意收集13岁以下儿童的任何信息。如果您是父母或监护人，并且认为您的孩子向我们提供了信息，请通过 admin@toolvx.com 联系我们。',
    'es': 'Nuestro servicio no está dirigido a menores de 13 años. No recopilamos intencionadamente ninguna información de niños menores de 13 años. Si usted es padre, madre o tutor y cree que su hijo nos ha proporcionado información, póngase en contacto con nosotros en admin@toolvx.com.',
    'fr': 'Notre service n\'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d\'informations concernant des enfants de moins de 13 ans. Si vous êtes un parent ou un tuteur et que vous pensez que votre enfant nous a fourni des informations, veuillez nous contacter à admin@toolvx.com.',
    'de': 'Unser Service richtet sich nicht an Kinder unter 13 Jahren. Wir sammeln nicht wissentlich Informationen von Kindern unter 13 Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und glauben, dass Ihr Kind uns Informationen bereitgestellt hat, kontaktieren Sie uns bitte unter admin@toolvx.com.',
    'ja': '当サービスは13歳未満のお子様を対象としていません。13歳未満のお子様から意図的に情報を収集することはありません。保護者の方で、お子様が情報を提供したと思われる場合は、admin@toolvx.com までご連絡ください。',
    'ko': '우리의 서비스는 13세 미만의 어릭을 대상으로 하지 않습니다. 13세 미만 어릭의 정보를 의도적으로 수집하지 않습니다. 부모 또는 보호자이시며 자녀가 정보를 제공했다고 생각하시면 admin@toolvx.com으로 연락해 주세요.',
    'pt': 'Nosso serviço não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente nenhuma informação de crianças menores de 13 anos. Se você é pai, mãe ou responsável e acredita que seu filho nos forneceu informações, entre em contato conosco em admin@toolvx.com.',
    'ru': 'Наш сервис не предназначен для детей младше 13 лет. Мы сознательно не собираем никакой информации от детей младше 13 лет. Если вы родитель или опекун и считаете, что ваш ребенок предоставил нам информацию, пожалуйста, свяжитесь с нами по адресу admin@toolvx.com.',
    'ar': 'خدمتنا غير موجهة للأطفال دون سن 13 عامًا. لا نقوم بجمع أي معلومات عن الأطفال دون سن 13 عامًا عمدًا. إذا كنت أحد الوالدين أو الوصي وتعتقد أن طفلك قد زودنا بمعلومات، فيرجى التواصل معنا على admin@toolvx.com.'
};

TRANSLATIONS['pp.s7.title'] = {
    'en': '7. International Users',
    'zh': '7. 国际用户',
    'es': '7. Usuarios internacionales',
    'fr': '7. Utilisateurs internationaux',
    'de': '7. Internationale Nutzer',
    'ja': '7. 国際ユーザー',
    'ko': '7. 국제 사용자',
    'pt': '7. Usuários internacionais',
    'ru': '7. Международные пользователи',
    'ar': '7. المستخدمون الدوليون'
};

TRANSLATIONS['pp.s7.text'] = {
    'en': 'Our service is accessible worldwide. By using our tool, you agree that your information may be processed according to this Privacy Policy regardless of your location.',
    'zh': '我们的服务面向全球用户。通过使用我们的工具，您同意无论您身在何处，您的信息都可以根据本隐私政策进行处理。',
    'es': 'Nuestro servicio es accesible en todo el mundo. Al usar nuestra herramienta, usted acepta que su información pueda ser procesada de acuerdo con esta Política de privacidad, independientemente de su ubicación.',
    'fr': 'Notre service est accessible dans le monde entier. En utilisant notre outil, vous acceptez que vos informations puissent être traitées conformément à la présente Politique de confidentialité, quel que soit votre emplacement.',
    'de': 'Unser Service ist weltweit zugänglich. Durch die Nutzung unseres Tools stimmen Sie zu, dass Ihre Informationen unabhängig von Ihrem Standort gemäß dieser Datenschutzerklärung verarbeitet werden können.',
    'ja': '当サービスは世界中で利用可能です。当ツールを使用することにより、あなたの所在地に関係なく、本プライバシーポリシーに従って情報が処理されることに同意したものとみなされます。',
    'ko': '우리의 서비스는 전 세계에서 접근할 수 있습니다. 도구를 사용함으로써 귀하의 위치에 관계없이 본 개인정보 보호정책에 따라 정보가 처리될 수 있음에 동의하는 것으로 간주됩니다.',
    'pt': 'Nosso serviço é acessível em todo o mundo. Ao usar nossa ferramenta, você concorda que suas informações podem ser processadas de acordo com esta Política de privacidade, independentemente de sua localização.',
    'ru': 'Наш сервис доступен по всему миру. Используя наш инструмент, вы соглашаетесь с тем, что ваша информация может быть обработана в соответствии с настоящей Политикой конфиденциальности независимо от вашего местоположения.',
    'ar': 'خدمتنا متاحة في جميع أنحاء العالم. باستخدام أداتنا، فإنك توافق على أنه قد يتم معالجة معلوماتك وفقًا لسياسة الخصوصية هذه بغض النظر عن موقعك.'
};

TRANSLATIONS['pp.s8.title'] = {
    'en': '8. Changes to This Privacy Policy',
    'zh': '8. 隐私政策变更',
    'es': '8. Cambios en esta Política de privacidad',
    'fr': '8. Modifications de la présente Politique de confidentialité',
    'de': '8. Änderungen dieser Datenschutzerklärung',
    'ja': '8. 本プライバシーポリシーの変更',
    'ko': '8. 본 개인정보 보호정책의 변경',
    'pt': '8. Alterações nesta Política de privacidade',
    'ru': '8. Изменения в настоящей Политике конфиденциальности',
    'ar': '8. التغييرات في سياسة الخصوصية هذه'
};

TRANSLATIONS['pp.s8.text'] = {
    'en': 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.',
    'zh': '我们可能会不时更新本隐私政策，以反映我们的实践或法律要求的变化。任何变更都将发布在此页面上，并更新“最后更新”日期。我们建议您定期查看本政策。',
    'es': 'Podemos actualizar esta Política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o requisitos legales. Cualquier cambio se publicará en esta página con una fecha de "Última actualización" actualizada. Le recomendamos que revise esta política periódicamente.',
    'fr': 'Nous pouvons mettre à jour la présente Politique de confidentialité de temps en temps pour refléter les changements dans nos pratiques ou les exigences légales. Toute modification sera publiée sur cette page avec une date de « Dernière mise à jour » actualisée. Nous vous encourageons à consulter régulièrement cette politique.',
    'de': 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder rechtlichen Anforderungen widerzuspiegeln. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Datum der "Letzten Aktualisierung" veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.',
    'ja': '私たちは、慣行や法律上の要件の変更を反映するために、本プライバシーポリシーを随時更新する場合があります。変更はすべて、このページに更新された「最終更新日」とともに掲載されます。定期的に本ポリシーを確認することをお勧めします。',
    'ko': '우리는 관행이나 법적 요구 사항의 변경을 반영하기 위해 본 개인정보 보호정책을 수시로 업데이트할 수 있습니다. 모든 변경 사항은 이 페이지에 업데이트된 "마지막 업데이트" 날짜와 함께 게시됩니다. 정기적으로 본 정책을 검토하시기를 권장합니다.',
    'pt': 'Podemos atualizar esta Política de privacidade de tempos em tempos para refletir mudanças em nossas práticas ou requisitos legais. Quaisquer alterações serão publicadas nesta página com uma data de "Última atualização" atualizada. Recomendamos que você revise esta política periodicamente.',
    'ru': 'Мы можем время от времени обновлять настоящую Политику конфиденциальности, чтобы отразить изменения в наших практиках или требованиях законодательства. Любые изменения будут опубликованы на этой странице с обновленной датой «Последнее обновление». Мы рекомендуем периодически просматривать настоящую политику.',
    'ar': 'قد نقوم بتحديث سياسة الخصوصية هذه من time to time لعكس التغييرات في ممارساتنا أو المتطلبات القانونية. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ محدّث لـ "آخر تحديث". نشجعك على مراجعة هذه السياسة بشكل دوري.'
};

TRANSLATIONS['pp.s9.title'] = {
    'en': '9. Your Rights',
    'zh': '9. 您的权利',
    'es': '9. Sus derechos',
    'fr': '9. Vos droits',
    'de': '9. Ihre Rechte',
    'ja': '9. お客様の権利',
    'ko': '9. 귀하의 권리',
    'pt': '9. Seus direitos',
    'ru': '9. Ваши права',
    'ar': '9. حقوقك'
};

TRANSLATIONS['pp.s9.text'] = {
    'en': 'Depending on your location, you may have certain rights regarding your personal information, such as:',
    'zh': '根据您所在的位置，您可能对您个人信息拥有一定的权利，例如：',
    'es': 'Dependiendo de su ubicación, puede tener ciertos derechos respecto a su información personal, tales como:',
    'fr': 'Selon votre emplacement, vous pouvez avoir certains droits concernant vos informations personnelles, tels que :',
    'de': 'Je nach Ihrem Standort können Sie bestimmte Rechte in Bezug auf Ihre persönlichen Informationen haben, wie z. B.:',
    'ja': 'お住まいの地域により、個人情報に関して一定の権利を有する場合があります。',
    'ko': '귀하의 위치에 따라 개인 정보와 관련하여 다음과 같은 특정 권리를 가질 수 있습니다.',
    'pt': 'Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, como:',
    'ru': 'В зависимости от вашего местоположения, вы можете иметь определенные права в отношении вашей личной информации, такие как:',
    'ar': 'اعتمادًا على موقعك، قد يكون لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية، مثل:'
};

TRANSLATIONS['pp.s9.li1'] = {
    'en': 'Right to access personal data',
    'zh': '访问个人数据的权利',
    'es': 'Derecho a acceder a los datos personales',
    'fr': 'Droit d\'accéder aux données personnelles',
    'de': 'Recht auf Zugang zu persönlichen Daten',
    'ja': '個人データへのアクセス権',
    'ko': '개인 데이터 접근 권리',
    'pt': 'Direito de acessar dados pessoais',
    'ru': 'Право на доступ к личным данным',
    'ar': 'الحق في الوصول إلى البيانات الشخصية'
};

TRANSLATIONS['pp.s9.li2'] = {
    'en': 'Right to rectification of inaccurate data',
    'zh': '更正不准确数据的权利',
    'es': 'Derecho a la rectificación de datos inexactos',
    'fr': 'Droit de rectification des données inexactes',
    'de': 'Recht auf Berichtigung ungenauer Daten',
    'ja': '不正確なデータの訂正権',
    'ko': '부정확한 데이터 수정 권리',
    'pt': 'Direito à retificação de dados imprecisos',
    'ru': 'Право на исправление неточных данных',
    'ar': 'الحق في تصحيح البيانات غير الدقيقة'
};

TRANSLATIONS['pp.s9.li3'] = {
    'en': 'Right to erasure ("right to be forgotten")',
    'zh': '删除权（"被遗忘权"）',
    'es': 'Derecho al olvido',
    'fr': 'Droit à l\'effacement (« droit à l\'oubli »)',
    'de': 'Recht auf Löschung ("Recht auf Vergessenwerden")',
    'ja': '抹消権（"忘れられる権利"）',
    'ko': '삭제 권리 ("잊혀질 권리")',
    'pt': 'Direito à eliminação ("direito ao esquecimento")',
    'ru': 'Право на удаление («право на забвение»)',
    'ar': 'الحق في المحو ("الحق في أن تُنسى")'
};

TRANSLATIONS['pp.s9.li4'] = {
    'en': 'Right to restrict processing',
    'zh': '限制处理的权利',
    'es': 'Derecho a restringir el procesamiento',
    'fr': 'Droit de limiter le traitement',
    'de': 'Recht auf Einschränkung der Verarbeitung',
    'ja': '処理制限権',
    'ko': '처리 제한 권리',
    'pt': 'Direito de restringir o processamento',
    'ru': 'Право на ограничение обработки',
    'ar': 'الحق في تقييد المعالجة'
};

TRANSLATIONS['pp.s9.li5'] = {
    'en': 'Right to data portability',
    'zh': '数据可携带权',
    'es': 'Derecho a la portabilidad de datos',
    'fr': 'Droit à la portabilité des données',
    'de': 'Recht auf Datenübertragbarkeit',
    'ja': 'データポータビリティ権',
    'ko': '데이터 이동성 권리',
    'pt': 'Direito à portabilidade de dados',
    'ru': 'Право на переносимость данных',
    'ar': 'الحق في نقل البيانات'
};

TRANSLATIONS['pp.s9.li6'] = {
    'en': 'Right to object to processing',
    'zh': '反对处理的权利',
    'es': 'Derecho a oponerse al procesamiento',
    'fr': 'Droit d\'opposition au traitement',
    'de': 'Recht auf Widerspruch gegen die Verarbeitung',
    'ja': '処理に対する異議権',
    'ko': '처리에 대한 이의 권리',
    'pt': 'Direito de se opor ao processamento',
    'ru': 'Право на возражение против обработки',
    'ar': 'الحق في الاعتراض على المعالجة'
};

TRANSLATIONS['pp.s9.note'] = {
    'en': 'Since we do not collect personal information, these rights are limited. However, if you have concerns about automatically collected data, please contact us.',
    'zh': '由于我们不收集个人信息，这些权利是有限的。但是，如果您对自动收集的数据有任何疑虑，请与我们联系。',
    'es': 'Dado que no recopilamos información personal, estos derechos son limitados. Sin embargo, si tiene inquietudes sobre los datos recopilados automáticamente, póngase en contacto con nosotros.',
    'fr': 'Étant donné que nous ne collectons pas d\'informations personnelles, ces droits sont limités. Cependant, si vous avez des préoccupations concernant les données collectées automatiquement, veuillez nous contacter.',
    'de': 'Da wir keine persönlichen Informationen sammeln, sind diese Rechte begrenzt. Wenn Sie jedoch Bedenken bezüglich automatisch gesammelter Daten haben, kontaktieren Sie uns bitte.',
    'ja': '個人情報を収集していないため、これらの権利は制限されます。ただし、自動的に収集されたデータについてご不明な点がございましたら、お問い合わせください。',
    'ko': '개인 정보를 수집하지 않으므로 이러한 권리는 제한됩니다. 그러나 자동으로 수집된 데이터에 대한 우려가 있는 경우 연락해 주세요.',
    'pt': 'Como não coletamos informações pessoais, esses direitos são limitados. No entanto, se tiver preocupações sobre dados coletados automaticamente, entre em contato conosco.',
    'ru': 'Поскольку мы не собираем личную информацию, эти права ограничены. Однако, если у вас есть опасения по поводу автоматически собранных данных, пожалуйста, свяжитесь с нами.',
    'ar': 'بما أننا لا نقوم بجمع المعلومات الشخصية، فإن هذه الحقوق محدودة. ومع ذلك، إذا كانت لديك مخاوف بشأن البيانات التي تم جمعها تلقائيًا، فيرجى التواصل معنا.'
};

TRANSLATIONS['pp.s10.title'] = {
    'en': '10. Contact Us',
    'zh': '10. 联系我们',
    'es': '10. Contáctenos',
    'fr': '10. Contactez-nous',
    'de': '10. Kontaktieren Sie uns',
    'ja': '10. お問い合わせ',
    'ko': '10. 문의하기',
    'pt': '10. Contate-nos',
    'ru': '10. Свяжитесь с нами',
    'ar': '10. اتصل بنا'
};

TRANSLATIONS['pp.s10.text'] = {
    'en': 'If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:',
    'zh': '如果您对本隐私政策或我们的隐私实践有任何问题、疑虑或要求，请通过以下方式与我们联系：',
    'es': 'Si tiene alguna pregunta, inquietud o solicitud con respecto a esta Política de privacidad o a nuestras prácticas de privacidad, póngase en contacto con nosotros en:',
    'fr': 'Si vous avez des questions, des préoccupations ou des demandes concernant la présente Politique de confidentialité ou nos pratiques en matière de confidentialité, veuillez nous contacter à :',
    'de': 'Wenn Sie Fragen, Bedenken oder Anfragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:',
    'ja': '本プライバシーポリシーまたは私たちのプライバシー慣行に関する質問、懸念、またはリクエストがある場合は、以下までお問い合わせください。',
    'ko': '본 개인정보 보호정책 또는 개인정보 관행에 대해 질문, 우려 또는 요청 사항이 있는 경우 연락해 주세요.',
    'pt': 'Se você tiver alguma dúvida, preocupação ou solicitação sobre esta Política de privacidade ou sobre nossas práticas de privacidade, entre em contato conosco em:',
    'ru': 'Если у вас есть какие-либо вопросы, опасения или запросы касательно настоящей Политики конфиденциальности или наших практик конфиденциальности, пожалуйста, свяжитесь с нами по адресу:',
    'ar': 'إذا كانت لديك أي أسئلة أو مخاوف أو طلبات بخصوص سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، فيرجى التواصل معنا على:'
};

TRANSLATIONS['pp.s10.email'] = {
    'en': 'Email: admin@toolvx.com',
    'zh': '电子邮件：admin@toolvx.com',
    'es': 'Correo electrónico: admin@toolvx.com',
    'fr': 'E-mail : admin@toolvx.com',
    'de': 'E-Mail: admin@toolvx.com',
    'ja': 'メール：admin@toolvx.com',
    'ko': '이메일: admin@toolvx.com',
    'pt': 'E-mail: admin@toolvx.com',
    'ru': 'Электронная почта: admin@toolvx.com',
    'ar': 'البريد الإلكتروني: admin@toolvx.com'
};

TRANSLATIONS['pp.s10.response'] = {
    'en': 'We will respond to your inquiry within 30 days.',
    'zh': '我们将在30天内回复您的询问。',
    'es': 'Responderemos a su consulta en un plazo de 30 días.',
    'fr': 'Nous répondrons à votre demande dans un délai de 30 jours.',
    'de': 'Wir werden Ihre Anfrage innerhalb von 30 Tagen beantworten.',
    'ja': 'お問い合わせには30日以内にご回答いたします。',
    'ko': '30일 이내에 문의에 답변해 드리겠습니다.',
    'pt': 'Responderemos à sua consulta em até 30 dias.',
    'ru': 'Мы ответим на ваш запрос в течение 30 дней.',
    'ar': 'سنرد على استفسارك في غضون 30 يومًا.'
};

TRANSLATIONS['pp.s11.title'] = {
    'en': '11. Compliance with Regulations',
    'zh': '11. 合规性',
    'es': '11. Cumplimiento de regulaciones',
    'fr': '11. Conformité aux réglementations',
    'de': '11. Einhaltung von Vorschriften',
    'ja': '11. 規制への対応',
    'ko': '11. 규정 준수',
    'pt': '11. Conformidade com regulamentações',
    'ru': '11. Соблюдение нормативных требований',
    'ar': '11. الامتثال للوائح'
};

TRANSLATIONS['pp.s11.text'] = {
    'en': 'We strive to comply with applicable data protection laws, including:',
    'zh': '我们努力遵守适用的数据保护法律，包括：',
    'es': 'Nos esforzamos por cumplir con las leyes de protección de datos aplicables, incluyendo:',
    'fr': 'Nous nous efforçons de respecter les lois applicables en matière de protection des données, y compris :',
    'de': 'Wir bemühen uns, die geltenden Datenschutzgesetze einzuhalten, einschließlich:',
    'ja': '私たちは、適用されるデータ保護法を遵守するよう努めています。',
    'ko': '우리는 적용 가능한 데이터 보호법을 준수하기 위해 노력하고 있습니다.',
    'pt': 'Nós nos esforçamos para cumprir as leis de proteção de dados aplicáveis, incluindo:',
    'ru': 'Мы стремимся соблюдать применимые законы о защите данных, включая:',
    'ar': 'نحن نسعى للامتثال لقوانين حماية البيانات المعمول بها، بما في ذلك:'
};

TRANSLATIONS['pp.note'] = {
    'en': 'Note: This Privacy Policy applies only to toolvx.com and its services. We are not responsible for the privacy practices of external websites linked from our site.',
    'zh': '注意：本隐私政策仅适用于toolvx.com及其服务。我们不对从我们网站链接的外部网站的隐私实践负责。',
    'es': 'Nota: Esta Política de privacidad se aplica solo a toolvx.com y sus servicios. No somos responsables de las prácticas de privacidad de los sitios web externos vinculados desde nuestro sitio.',
    'fr': 'Remarque : Cette Politique de confidentialité s\'applique uniquement à toolvx.com et à ses services. Nous ne sommes pas responsables des pratiques de confidentialité des sites Web externes liés à partir de notre site.',
    'de': 'Hinweis: Diese Datenschutzerklärung gilt nur für toolvx.com und seine Dienste. Wir sind nicht für die Datenschutzpraktiken externer Websites verantwortlich, die von unserer Website aus verlinkt sind.',
    'ja': '注：本プライバシーポリシーは、toolvx.comおよびそのサービスにのみ適用されます。当サイトからリンクされている外部ウェブサイトのプライバシー慣行については責任を負いません。',
    'ko': '참고: 본 개인정보 보호정책은 toolvx.com 및 해당 서비스에만 적용됩니다. 우리 사이트에서 연결된 외부 웹사이트의 개인정보 보호慣行에 대해서는 책임을 지지 않습니다.',
    'pt': 'Nota: Esta Política de privacidade aplica-se apenas ao toolvx.com e aos seus serviços. Não somos responsáveis pelas práticas de privacidade de sites externos vinculados a partir do nosso site.',
    'ru': 'Примечание: Настоящая Политика конфиденциальности применяется только к toolvx.com и его услугам. Мы не несем ответственности за практики конфиденциальности внешних веб-сайтов, на которые есть ссылки с нашего сайта.',
    'ar': 'ملاحظة: تنطبق سياسة الخصوصية هذه فقط على toolvx.com وخدماته. نحن لسنا مسؤولين عن ممارسات الخصوصية لمواقع الويب الخارجية المرتبطة من موقعنا.'
};

TRANSLATIONS['footer.quickLinks'] = {
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
};

TRANSLATIONS['footer.popularArticles'] = {
    'en': 'Popular Articles',
    'zh': '热门文章',
    'es': 'Artículos populares',
    'fr': 'Articles populaires',
    'de': 'Beliebte Artikel',
    'ja': '人気記事',
    'ko': '인기 기사',
    'pt': 'Artigos populares',
    'ru': 'Популярные статьи',
    'ar': 'المقالات الشائعة'
};

TRANSLATIONS['footer.legal'] = {
    'en': 'Legal',
    'zh': '法律',
    'es': 'Legal',
    'fr': 'Juridique',
    'de': 'Rechtliches',
    'ja': '法的情報',
    'ko': '법적 사항',
    'pt': 'Jurídico',
    'ru': 'Юридическая информация',
    'ar': 'قانوني'
};

TRANSLATIONS['footer.copyright'] = {
    'en': '© 2026 toolvx.com - Free online image and PDF redaction tools. All rights reserved.',
    'zh': '© 2026 toolvx.com - 免费在线图像和PDF脱敏工具。保留所有权利。',
    'es': '© 2026 toolvx.com - Herramientas gratuitas de edición de imágenes y PDF en línea. Todos los derechos reservados.',
    'fr': '© 2026 toolvx.com - Outils gratuits d\'édition d\'images et de PDF en ligne. Tous droits réservés.',
    'de': '© 2026 toolvx.com - Kostenlose Online-Bild- und PDF-Bearbeitungswerkzeuge. Alle Rechte vorbehalten.',
    'ja': '© 2026 toolvx.com - 無料のオンライン画像およびPDF編集ツール。無断複写・転載を禁じます。',
    'ko': '© 2026 toolvx.com - 무료 온라인 이미지 및 PDF 편집 도구. 모든 권리 보유.',
    'pt': '© 2026 toolvx.com - Ferramentas gratuitas de edição de imagens e PDF online. Todos os direitos reservados.',
    'ru': '© 2026 toolvx.com - Бесплатные онлайн-инструменты для редактирования изображений и PDF. Все права защищены.',
    'ar': '© 2026 toolvx.com - أدوات مجانية لتحرير الصور وملفات PDF عبر الإنترنت. جميع الحقوق محفوظة.'
};

TRANSLATIONS['footer.article.blurFaces'] = {
    'en': 'Blur Faces Guide',
    'zh': '模糊面部指南',
    'es': 'Guía para desenfocar caras',
    'fr': 'Guide de floutage des visages',
    'de': 'Anleitung zum Verwischen von Gesichtern',
    'ja': '顔ぼかしガイド',
    'ko': '얼굴 흐림 가이드',
    'pt': 'Guia de Desfoque de Rostos',
    'ru': 'Руководство по размытию лиц',
    'ar': 'دليل طمس الوجوه'
};

TRANSLATIONS['footer.article.privacyGuide'] = {
    'en': 'Privacy Guide',
    'zh': '隐私指南',
    'es': 'Guía de privacidad',
    'fr': 'Guide de confidentialité',
    'de': 'Datenschutzleitfaden',
    'ja': 'プライバシーガイド',
    'ko': '개인정보 보호 가이드',
    'pt': 'Guia de Privacidade',
    'ru': 'Руководство по конфиденциальности',
    'ar': 'دليل الخصوصية'
};

TRANSLATIONS['footer.article.pdfTools'] = {
    'en': 'PDF Tools',
    'zh': 'PDF工具',
    'es': 'Herramientas PDF',
    'fr': 'Outils PDF',
    'de': 'PDF-Tools',
    'ja': 'PDFツール',
    'ko': 'PDF 도구',
    'pt': 'Ferramentas PDF',
    'ru': 'Инструменты PDF',
    'ar': 'أدوات PDF'
};

TRANSLATIONS['footer.legal.privacy'] = {
    'en': 'Privacy Policy',
    'zh': '隐私政策',
    'es': 'Política de privacidad',
    'fr': 'Politique de confidentialité',
    'de': 'Datenschutzerklärung',
    'ja': 'プライバシーポリシー',
    'ko': '개인정보 보호정책',
    'pt': 'Política de privacidade',
    'ru': 'Политика конфиденциальности',
    'ar': 'سياسة الخصوصية'
};

TRANSLATIONS['footer.legal.terms'] = {
    'en': 'Terms of Service',
    'zh': '服务条款',
    'es': 'Términos de servicio',
    'fr': 'Conditions d\'utilisation',
    'de': 'Nutzungsbedingungen',
    'ja': '利用規約',
    'ko': '서비스 약관',
    'pt': 'Termos de serviço',
    'ru': 'Условия использования',
    'ar': 'شروط الخدمة'
};

TRANSLATIONS['footer.legal.cookie'] = {
    'en': 'Cookie Policy',
    'zh': 'Cookie政策',
    'es': 'Política de cookies',
    'fr': 'Politique de cookies',
    'de': 'Cookie-Richtlinie',
    'ja': 'Cookieポリシー',
    'ko': '쿠키 정책',
    'pt': 'Política de cookies',
    'ru': 'Политика использования файлов cookie',
    'ar': 'سياسة ملفات تعريف الارتباط'
};

TRANSLATIONS['nav.contact'] = {
    'en': 'Contact Us',
    'zh': '联系我们',
    'es': 'Contáctenos',
    'fr': 'Contactez-nous',
    'de': 'Kontaktieren Sie uns',
    'ja': 'お問い合わせ',
    'ko': '문의하기',
    'pt': 'Contate-nos',
    'ru': 'Свяжитесь с нами',
    'ar': 'اتصل بنا'
};

TRANSLATIONS['pp.s11.li1'] = {
    'en': 'GDPR (General Data Protection Regulation): For users in the European Union',
    'zh': 'GDPR（通用数据保护条例）：适用于欧盟用户',
    'es': 'GDPR (Reglamento General de Protección de Datos): Para usuarios en la Unión Europea',
    'fr': 'RGPD (Règlement général sur la protection des données) : Pour les utilisateurs dans l\'Union européenne',
    'de': 'DSGVO (Datenschutz-Grundverordnung): Für Nutzer in der Europäischen Union',
    'ja': 'GDPR（一般データ保護規則）：欧州連合のユーザー向け',
    'ko': 'GDPR(일반 데이터 보호 규정): 유럽 연합 사용자용',
    'pt': 'GDPR (Regulamento Geral de Proteção de Dados): Para usuários na União Europeia',
    'ru': 'GDPR (Общий регламент по защите данных): Для пользователей в Европейском союзе',
    'ar': 'GDPR (اللائحة العامة لحماية البيانات): للمستخدمين في الاتحاد الأوروبي'
};

TRANSLATIONS['pp.s11.li2'] = {
    'en': 'CCPA (California Consumer Privacy Act): For users in California, USA',
    'zh': 'CCPA（加州消费者隐私法）：适用于美国加州用户',
    'es': 'CCPA (Ley de Privacidad del Consumidor de California): Para usuarios en California, EE. UU.',
    'fr': 'CCPA (California Consumer Privacy Act) : Pour les utilisateurs en Californie, États-Unis',
    'de': 'CCPA (California Consumer Privacy Act): Für Nutzer in Kalifornien, USA',
    'ja': 'CCPA（カリフォルニア州消費者プライバシー法）：カリフォルニア州、米国のユーザー向け',
    'ko': 'CCPA(캘리포니아 소비자 개인정보 보호법): 미국 캘리포니아 사용자용',
    'pt': 'CCPA (Lei de Privacidade do Consumidor da Califórnia): Para usuários na Califórnia, EUA',
    'ru': 'CCPA (Закон о конфиденциальности потребителей Калифорнии): Для пользователей в Калифорнии, США',
    'ar': 'CCPA (قانون خصوصية المستهلك في كاليفورنيا): للمستخدمين في كاليفورنيا، الولايات المتحدة'
};

TRANSLATIONS['pp.s11.li3'] = {
    'en': 'Other local privacy laws: As applicable',
    'zh': '其他本地隐私法律：如适用',
    'es': 'Otras leyes locales de privacidad: Según corresponda',
    'fr': 'Autres lois locales sur la vie privée : Selon l\'applicabilité',
    'de': 'Andere lokale Datenschutzgesetze: Sowie zutreffend',
    'ja': 'その他の現地のプライバシー法：該当する場合',
    'ko': '기타 현지 개인정보 보호법: 해당하는 경우',
    'pt': 'Outras leis locais de privacidade: Conforme aplicável',
    'ru': 'Другие местные законы о конфиденциальности: Применимо',
    'ar': 'قوانين الخصوصية المحلية الأخرى: حسبما ينطبق'
};

TRANSLATIONS['footer.brand.description'] = {
    'en': 'Free, secure, and private image redaction tools. Your files never leave your device.',
    'zh': '免费、安全、私密的图像脱敏工具。您的文件永远不会离开您的设备。',
    'es': 'Herramientas gratuitas, seguras y privadas de edición de imágenes. Sus archivos nunca abandonan su dispositivo.',
    'fr': 'Outils d\'édition d\'images gratuits, sécurisés et privés. Vos fichiers ne quittent jamais votre appareil.',
    'de': 'Kostenlose, sichere und private Bildbearbeitungswerkzeuge. Ihre Dateien verlassen nie Ihr Gerät.',
    'ja': '無料で安全、プライベートな画像編集ツール。ファイルがデバイスを離れることはありません。',
    'ko': '무료이고 안전하며 비공개인 이미지 편집 도구. 파일이 장치를 떠나지 않습니다.',
    'pt': 'Ferramentas gratuitas, seguras e privadas de edição de imagens. Seus arquivos nunca saem do seu dispositivo.',
    'ru': 'Бесплатные, безопасные и конфиденциальные инструменты редактирования изображений. Ваши файлы никогда не покидают ваше устройство.',
    'ar': 'أدوات تحرير الصور المجانية والآمنة والخاصة. ملفاتك لا تغادر جهازك أبدًا.'
};

TRANSLATIONS['nav.tryFree'] = {
    'en': 'Try Free Tool',
    'zh': '免费试用',
    'es': 'Probar herramienta gratuita',
    'fr': 'Essayer l\'outil gratuit',
    'de': 'Kostenloses Tool ausprobieren',
    'ja': '無料ツールを試す',
    'ko': '무료 도구 사용해 보기',
    'pt': 'Experimentar ferramenta gratuita',
    'ru': 'Попробовать бесплатный инструмент',
    'ar': 'جرب الأداة المجانية'
};

TRANSLATIONS['features.page.title'] = {
    'en': 'Powerful Features',
    'zh': '强大的功能',
    'es': 'Características potentes',
    'fr': 'Fonctionnalités puissantes',
    'de': 'Leistungsstarke Funktionen',
    'ja': '強力な機能',
    'ko': '강력한 기능',
    'pt': 'Recursos poderosos',
    'ru': 'Мощные возможности',
    'ar': 'ميزات قوية'
};

TRANSLATIONS['features.page.subtitle'] = {
    'en': 'Everything you need to protect your privacy in images and documents',
    'zh': '保护您在图像和文档中隐私所需的一切',
    'es': 'Todo lo que necesita para proteger su privacidad en imágenes y documentos',
    'fr': 'Tout ce dont vous avez besoin pour protéger votre vie privée dans les images et les documents',
    'de': 'Alles, was Sie brauchen, um Ihre Privatsphäre in Bildern und Dokumenten zu schützen',
    'ja': '画像と文書でのプライバシーを保護するために必要なすべて',
    'ko': '이미지와 문서에서 개인 정보를 보호하는 데 필요한 모든 것',
    'pt': 'Tudo o que você precisa para proteger sua privacidade em imagens e documentos',
    'ru': 'Всё необходимое для защиты вашей конфиденциальности в изображениях и документах',
    'ar': 'كل ما تحتاجه لحماية خصوصيتك في الصور والمستندات'
};

TRANSLATIONS['features.card1.title'] = {
    'en': 'Custom Color Selection',
    'zh': '自定义颜色选择',
    'es': 'Selección de color personalizada',
    'fr': 'Sélection de couleurs personnalisées',
    'de': 'Benutzerdefinierte Farbauswahl',
    'ja': 'カスタムカラー選択',
    'ko': '사용자 정의 색상 선택',
    'pt': 'Seleção de cores personalizada',
    'ru': 'Пользовательский выбор цвета',
    'ar': 'اختيار اللون المخصص'
};

TRANSLATIONS['features.card1.desc'] = {
    'en': 'Choose from preset colors or create custom colors for perfect masking. Adjust intensity for optimal coverage.',
    'zh': '从预设颜色中选择或创建自定义颜色以实现完美遮罩。调整强度以获得最佳覆盖效果。',
    'es': 'Elija entre colores preestablecidos o cree colores personalizados para un enmascaramiento perfecto. Ajuste la intensidad para una cobertura óptima.',
    'fr': 'Choisissez parmi les couleurs prédéfinies ou créez des couleurs personnalisées pour un masquage parfait. Ajustez l\'intensité pour une couverture optimale.',
    'de': 'Wählen Sie aus voreingestellten Farben oder erstellen Sie benutzerdefinierte Farben für perfektes Maskieren. Passen Sie die Intensität für optimale Abdeckung an.',
    'ja': 'プリセットカラーから選択するか、完璧なマスキングのためにカスタムカラーを作成します。最適なカバレッジのために強度を調整します。',
    'ko': '미리 설정된 색상 중에서 선택하거나 완벽한 마스킹을 위해 사용자 정의 색상을 만드세요. 최적의 커버리지를 위해 강도를 조정하세요.',
    'pt': 'Escolha entre cores predefinidas ou crie cores personalizadas para mascaramento perfeito. Ajuste a intensidade para cobertura ideal.',
    'ru': 'Выбирайте из предустановленных цветов или создавайте собственные для идеального маскирования. Настройте интенсивность для оптимального покрытия.',
    'ar': 'اختر من بين الألوان المحددة مسبقًا أو أنشئ ألوانًا مخصصة للتعتيم المثالي. اضبط الشدة للحصول على تغطية مثالية.'
};

TRANSLATIONS['features.card2.title'] = {
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
};

TRANSLATIONS['features.card2.desc'] = {
    'en': 'Redact unlimited pages in PDF documents. Navigate between pages and export as complete multi-page PDFs.',
    'zh': '在PDF文档中脱敏无限页面。在页面之间导航并导出为完整的多页PDF。',
    'es': 'Edite páginas ilimitadas en documentos PDF. Navegue entre páginas y exporte como PDF de varias páginas completos.',
    'fr': 'Éditez un nombre illimité de pages dans les documents PDF. Naviguez entre les pages et exportez en PDF multi-pages complets.',
    'de': 'Bearbeiten Sie unbegrenzte Seiten in PDF-Dokumenten. Navigieren Sie zwischen den Seiten und exportieren Sie als vollständige mehrseitige PDFs.',
    'ja': 'PDF文書で無制限のページを編集します。ページ間を移動し、完全な複数ページのPDFとしてエクスポートします。',
    'ko': 'PDF 문서에서 무제한 페이지를 편집하세요. 페이지 간에 이동하고 완전한 다중 페이지 PDF로 내보세요.',
    'pt': 'Edite páginas ilimitadas em documentos PDF. Navegue entre as páginas e exporte como PDFs multipágina completos.',
    'ru': 'Редактируйте неограниченное количество страниц в документах PDF. Перемещайтесь между страницами и экспортируйте в виде полных многостраничных PDF.',
    'ar': 'قم بتحرير صفحات غير محدودة في مستندات PDF. انتقل بين الصفحات وقم بالتصدير كملفات PDF متعددة الصفحات كاملة.'
};

TRANSLATIONS['features.card3.title'] = {
    'en': '100% Local Processing',
    'zh': '100% 本地处理',
    'es': 'Procesamiento 100% local',
    'fr': 'Traitement 100% local',
    'de': '100% lokale Verarbeitung',
    'ja': '100% ローカル処理',
    'ko': '100% 로컬 처리',
    'pt': 'Processamento 100% local',
    'ru': '100% локальная обработка',
    'ar': 'معالجة 100% محلية'
};

TRANSLATIONS['features.card3.desc'] = {
    'en': 'All redaction happens in your browser. Files never leave your device for maximum privacy and security.',
    'zh': '所有脱敏都在您的浏览器中进行。文件永远不会离开您的设备，以实现最大的隐私和安全性。',
    'es': 'Toda la edición ocurre en su navegador. Los archivos nunca abandonan su dispositivo para máxima privacidad y seguridad.',
    'fr': 'Toute l\'édition se fait dans votre navigateur. Les fichiers ne quittent jamais votre appareil pour une confidentialité et une sécurité maximales.',
    'de': 'Die gesamte Bearbeitung erfolgt in Ihrem Browser. Dateien verlassen niemals Ihr Gerät für maximale Privatsphäre und Sicherheit.',
    'ja': 'すべての編集はブラウザで行われます。最大限のプライバシーとセキュリティのために、ファイルがデバイスを離れることはありません。',
    'ko': '모든 편집은 브라우저에서 발생합니다. 최대 개인 정보 보호와 보안을 위해 파일이 장치를 떠나지 않습니다.',
    'pt': 'Toda a edição ocorre no seu navegador. Os arquivos nunca saem do seu dispositivo para máxima privacidade e segurança.',
    'ru': 'Вся обработка происходит в вашем браузере. Файлы никогда не покидают ваше устройство для максимальной конфиденциальности и безопасности.',
    'ar': 'تتم جميع عمليات التحرير في متصفحك. ملفاتك لا تغادر جهازك أبدًا لأقصى قدر من الخصوصية والأمان.'
};

TRANSLATIONS['features.card4.title'] = {
    'en': 'Multiple Format Support',
    'zh': '多格式支持',
    'es': 'Soporte para múltiples formatos',
    'fr': 'Support de plusieurs formats',
    'de': 'Mehrformat-Unterstützung',
    'ja': '複数フォーマット対応',
    'ko': '다중 형식 지원',
    'pt': 'Suporte a vários formatos',
    'ru': 'Поддержка нескольких форматов',
    'ar': 'دعم تنسيقات متعددة'
};

TRANSLATIONS['features.card4.desc'] = {
    'en': 'Support for JPG, PNG, GIF, WebP images and PDF files. Export preserves original format.',
    'zh': '支持JPG、PNG、GIF、WebP图像和PDF文件。导出保留原始格式。',
    'es': 'Soporte para imágenes JPG, PNG, GIF, WebP y archivos PDF. La exportación preserva el formato original.',
    'fr': 'Prise en charge des images JPG, PNG, GIF, WebP et des fichiers PDF. L\'exportation conserve le format original.',
    'de': 'Unterstützung für JPG-, PNG-, GIF-, WebP-Bilder und PDF-Dateien. Der Export behält das ursprüngliche Format bei.',
    'ja': 'JPG、PNG、GIF、WebP画像およびPDFファイルに対応。エクスポートは元の形式を保持します。',
    'ko': 'JPG, PNG, GIF, WebP 이미지 및 PDF 파일 지원. 내보기는 원본 형식을 유지합니다.',
    'pt': 'Suporte para imagens JPG, PNG, GIF, WebP e arquivos PDF. A exportação preserva o formato original.',
    'ru': 'Поддержка изображений JPG, PNG, GIF, WebP и файлов PDF. Экспорт сохраняет исходный формат.',
    'ar': 'دعم صور JPG و PNG و GIF و WebP وملفات PDF. التصدير يحافظ على التنسيق الأصلي.'
};

TRANSLATIONS['features.card5.title'] = {
    'en': 'Precise Selection',
    'zh': '精确选择',
    'es': 'Selección precisa',
    'fr': 'Sélection précise',
    'de': 'Präzise Auswahl',
    'ja': '精密な選択',
    'ko': '정밀 선택',
    'pt': 'Seleção precisa',
    'ru': 'Точный выбор',
    'ar': 'اختيار دقيق'
};

TRANSLATIONS['features.card5.desc'] = {
    'en': 'Manual click-and-drag selection gives you complete control over what gets redacted. No automatic detection errors.',
    'zh': '手动点击并拖动选择让您完全控制要脱敏的内容。没有自动检测错误。',
    'es': 'La selección manual de clic y arrastre le brinda control total sobre lo que se edita. Sin errores de detección automática.',
    'fr': 'La sélection manuelle par clic et glissement vous donne un contrôle total sur ce qui est édité. Pas d\'erreurs de détection automatique.',
    'de': 'Die manuelle Klick-und-Ziehen-Auswahl gibt Ihnen vollständige Kontrolle darüber, was bearbeitet wird. Keine automatischen Erkennungsfehler.',
    'ja': '手動のクリックアンドドラッグ選択により、編集される内容を完全に制御できます。自動検出エラーはありません。',
    'ko': '수동 클릭 및 드래그 선택을 통해 편집할 내용을 완전히 제어할 수 있습니다. 자동 감지 오류가 없습니다.',
    'pt': 'A seleção manual de clique e arraste dá a você controle total sobre o que é editado. Sem erros de detecção automática.',
    'ru': 'Ручной выбор с помощью клика и перетаскивания даёт вам полный контроль над тем, что редактируется. Никаких ошибок автоматического обнаружения.',
    'ar': 'يمنحك الاختيار اليدوي بالنقر والسحب تحكمًا كاملًا فيما يتم تحريره. لا توجد أخطاء في الكشف التلقائي.'
};

TRANSLATIONS['features.card6.title'] = {
    'en': 'Original Filename Preservation',
    'zh': '原始文件名保留',
    'es': 'Conservación del nombre de archivo original',
    'fr': 'Préservation du nom de fichier original',
    'de': 'Beibehaltung des ursprünglichen Dateinamens',
    'ja': '元のファイル名の保持',
    'ko': '원본 파일명 보존',
    'pt': 'Preservação do nome de arquivo original',
    'ru': 'Сохранение исходного имени файла',
    'ar': 'الحفاظ على اسم الملف الأصلي'
};

TRANSLATIONS['features.card6.desc'] = {
    'en': 'Exported files keep the exact original filename, including non-ASCII characters (Chinese, Japanese, Korean, etc.).',
    'zh': '导出的文件保留确切的原始文件名，包括非ASCII字符（中文、日文、韩文等）。',
    'es': 'Los archivos exportados conservan el nombre de archivo original exacto, incluidos los caracteres no ASCII (chino, japonés, coreano, etc.).',
    'fr': 'Les fichiers exportés conservent le nom de fichier original exact, y compris les caractères non-ASCII (chinois, japonais, coréen, etc.).',
    'de': 'Exportierte Dateien behalten den genauen ursprünglichen Dateinamen bei, einschließlich nicht-ASCII-Zeichen (Chinesisch, Japanisch, Koreanisch usw.).',
    'ja': 'エクスポートされたファイルは、非ASCII文字（中国語、日本語、韓国語など）を含む正確な元のファイル名を保持します。',
    'ko': '내보 파일은 비ASCII 문자(중국어, 일본어, 한국어 등)를 포함하여 정확한 원래 파일명을 유지합니다.',
    'pt': 'Os arquivos exportados mantêm o nome de arquivo original exato, incluindo caracteres não ASCII (chinês, japonês, coreano, etc.).',
    'ru': 'Экспортированные файлы сохраняют точное исходное имя, включая символы не из ASCII (китайские, японские, корейские и т. д.).',
    'ar': 'تحافظ الملفات المُصدَّرة على اسم الملف الأصلي بالضبط، بما في ذلك الأحرف غير ASCII (الصينية واليابانية والكورية، إلخ).'
};

TRANSLATIONS['footer.contact'] = {
    'en': 'Contact Us',
    'zh': '联系我们',
    'es': 'Contáctenos',
    'fr': 'Contactez-nous',
    'de': 'Kontaktieren Sie uns',
    'ja': 'お問い合わせ',
    'ko': '문의하기',
    'pt': 'Contate-nos',
    'ru': 'Свяжитесь с нами',
    'ar': 'اتصل بنا'
};

TRANSLATIONS['footer.copyright.full'] = {
    'en': '© 2026 toolvx.com - Free online image and PDF redaction tools. All rights reserved.',
    'zh': '© 2026 toolvx.com - 免费在线图像和PDF脱敏工具。保留所有权利。',
    'es': '© 2026 toolvx.com - Herramientas gratuitas de edición de imágenes y PDF en línea. Todos los derechos reservados.',
    'fr': '© 2026 toolvx.com - Outils gratuits d\'édition d\'images et PDF en ligne. Tous droits réservés.',
    'de': '© 2026 toolvx.com - Kostenlose Online-Tools zur Bild- und PDF-Bearbeitung. Alle Rechte vorbehalten.',
    'ja': '© 2026 toolvx.com - 無料オンライン画像とPDF編集ツール。すべての権利を保有。',
    'ko': '© 2026 toolvx.com - 무료 온라인 이미지 및 PDF 편집 도구. 모든 권리 보유.',
    'pt': '© 2026 toolvx.com - Ferramentas gratuitas de edição de imagens e PDF online. Todos os direitos reservados.',
    'ru': '© 2026 toolvx.com - Бесплатные онлайн-инструменты для редактирования изображений и PDF. Все права защищены.',
    'ar': '© 2026 toolvx.com - أدوات مجانية لتحرير الصور وملفات PDF عبر الإنترنت. جميع الحقوق محفوظة.'
};

TRANSLATIONS['faq.page.title'] = {
    'en': 'Frequently Asked Questions',
    'zh': '常见问题',
    'es': 'Preguntas frecuentes',
    'fr': 'Questions fréquentes',
    'de': 'Häufig gestellte Fragen',
    'ja': 'よくある質問',
    'ko': '자주 묻는 질문',
    'pt': 'Perguntas frequentes',
    'ru': 'Часто задаваемые вопросы',
    'ar': 'الأسئلة الشائعة'
};

TRANSLATIONS['faq.page.subtitle'] = {
    'en': 'Get answers to common questions about our privacy-focused redaction tool',
    'zh': '获取有关我们注重隐私的脱敏工具的常见问题解答',
    'es': 'Obtenga respuestas a preguntas comunes sobre nuestra herramienta de edición centrada en la privacidad',
    'fr': 'Obtenez des réponses aux questions courantes sur notre outil d\'édition axé sur la confidentialité',
    'de': 'Erhalten Sie Antworten auf häufige Fragen zu unserem datenschutzorientierten Bearbeitungswerkzeug',
    'ja': 'プライバシーに特化した編集ツールに関するよくある質問の回答を入手する',
    'ko': '개인 정보 보호 중심의 편집 도구에 대한 자주 묻는 질문에 대한 답변을 받아보세요',
    'pt': 'Obtenha respostas para perguntas comuns sobre nossa ferramenta de edição focada em privacidade',
    'ru': 'Получите ответы на часто задаваемые вопросы о нашем инструменте редактирования, ориентированном на конфиденциальность',
    'ar': 'احصل على إجابات للأسئلة الشائعة حول أداة التحرير الخاصة بنا التي تركز على الخصوصية'
};

TRANSLATIONS['faq.q1.title'] = {
    'en': 'Is this tool really free?',
    'zh': '这个工具真的免费吗？',
    'es': '¿Esta herramienta es realmente gratuita?',
    'fr': 'Cet outil est-il vraiment gratuit ?',
    'de': 'Ist dieses Tool wirklich kostenlos?',
    'ja': 'このツールは本当に無料ですか？',
    'ko': '이 도구는 정말 무료인가요?',
    'pt': 'Esta ferramenta é realmente gratuita?',
    'ru': 'Этот инструмент действительно бесплатный?',
    'ar': 'هل هذه الأداة مجانية حقًا؟'
};

TRANSLATIONS['faq.q1.desc'] = {
    'en': 'Yes! Our tool is 100% free with no hidden costs, watermarks, or usage limits. You can redact unlimited images and PDFs without paying anything.',
    'zh': '是的！我们的工具完全免费，没有隐藏费用、水印或使用限制。您可以免费脱敏无限量的图像和PDF。',
    'es': '¡Sí! Nuestra herramienta es 100% gratuita sin costos ocultos, marcas de agua ni límites de uso. Puede editar imágenes y PDF ilimitados sin pagar nada.',
    'fr': 'Oui ! Notre outil est 100% gratuit sans frais cachés, filigranes ni limites d\'utilisation. Vous pouvez éditer un nombre illimité d\'images et de PDF sans payer quoi que ce soit.',
    'de': 'Ja! Unser Tool ist 100% kostenlos ohne versteckte Kosten, Wasserzeichen oder Nutzungslimits. Sie können unbegrenzte Bilder und PDFs bearbeiten, ohne etwas zu bezahlen.',
    'ja': 'はい！私たちのツールは100%無料で、隠れた費用、ウォーターマーク、使用制限はありません。無料で無制限の画像とPDFを編集できます。',
    'ko': '네! 저희 도구는 100% 무료이며 숨겨진 비용, 워터마크 또는 사용 제한이 없습니다. 무한한 이미지와 PDF를 무료로 편집할 수 있습니다.',
    'pt': 'Sim! Nossa ferramenta é 100% gratuita sem custos ocultos, marcas d\'água ou limites de uso. Você pode editar imagens e PDFs ilimitados sem pagar nada.',
    'ru': 'Да! Наш инструмент на 100% бесплатный, без скрытых расходов, водяных знаков или ограничений использования. Вы можете редактировать неограниченное количество изображений и PDF бесплатно.',
    'ar': 'نعم! أداتنا مجانية 100٪ بدون تكاليف خفية أو علامات مائية أو حدود استخدام. يمكنك تحرير عدد غير محدود من الصور وملفات PDF دون دفع أي شيء.'
};

TRANSLATIONS['faq.q2.title'] = {
    'en': 'Are my files uploaded to a server?',
    'zh': '我的文件会被上传到服务器吗？',
    'es': '¿Se cargan mis archivos en un servidor?',
    'fr': 'Mes fichiers sont-ils téléchargés sur un serveur ?',
    'de': 'Werden meine Dateien auf einen Server hochgeladen?',
    'ja': 'ファイルはサーバーにアップロードされますか？',
    'ko': '내 파일이 서버에 업로드되나요?',
    'pt': 'Meus arquivos são carregados em um servidor?',
    'ru': 'Мои файлы загружаются на сервер?',
    'ar': 'هل يتم تحميل ملفاتي إلى خادم؟'
};

TRANSLATIONS['faq.q2.desc'] = {
    'en': 'No. All processing happens 100% locally in your browser using JavaScript. Your images and PDFs never leave your device, ensuring complete privacy.',
    'zh': '不会。所有处理100%在您的浏览器中使用JavaScript本地进行。您的图像和PDF永远不会离开您的设备，确保完全隐私。',
    'es': 'No. Todo el procesamiento ocurre 100% localmente en su navegador usando JavaScript. Sus imágenes y PDFs nunca abandonan su dispositivo, asegurando una privacidad completa.',
    'fr': 'Non. Tout le traitement se fait 100% localement dans votre navigateur à l\'aide de JavaScript. Vos images et PDFs ne quittent jamais votre appareil, garantissant une confidentialité complète.',
    'de': 'Nein. Die gesamte Verarbeitung erfolgt 100% lokal in Ihrem Browser mittels JavaScript. Ihre Bilder und PDFs verlassen niemals Ihr Gerät, was eine vollständige Privatsphäre gewährleistet.',
    'ja': 'いいえ。すべての処理はJavaScriptを使用してブラウザ内で100%ローカルに行われます。画像とPDFがデバイスを離れることはなく、完全なプライバシーが確保されます。',
    'ko': '아닙니다. 모든 처리는 JavaScript를 사용하여 브라우저에서 100% 로컬로 이루어집니다. 이미지와 PDF가 장치를 떠나지 않으므로 완전한 개인 정보 보호가 보장됩니다.',
    'pt': 'Não. Todo o processamento ocorre 100% localmente no seu navegador usando JavaScript. Suas imagens e PDFs nunca saem do seu dispositivo, garantindo privacidade completa.',
    'ru': 'Нет. Вся обработка происходит 100% локально в вашем браузере с использованием JavaScript. Ваши изображения и PDF никогда не покидают ваше устройство, обеспечивая полную конфиденциальность.',
    'ar': 'لا. تتم جميع عمليات المعالجة بنسبة 100% محليًا في متصفحك باستخدام JavaScript. صورك وملفات PDF لا تغادر جهازك أبدًا، مما يضمن خصوصية كاملة.'
};

TRANSLATIONS['faq.q3.title'] = {
    'en': 'Can I use this tool offline?',
    'zh': '我可以离线使用这个工具吗？',
    'es': '¿Puedo usar esta herramienta sin conexión?',
    'fr': 'Puis-je utiliser cet outil hors ligne ?',
    'de': 'Kann ich dieses Tool offline verwenden?',
    'ja': 'このツールをオフラインで使用できますか？',
    'ko': '이 도구를 오프라인으로 사용할 수 있나요?',
    'pt': 'Posso usar esta ferramenta offline?',
    'ru': 'Могу ли я использовать этот инструмент в офлайне?',
    'ar': 'هل يمكنني استخدام هذه الأداة دون اتصال؟'
};

TRANSLATIONS['faq.q3.desc'] = {
    'en': 'Yes! Once the page has loaded, you can use all features without an internet connection. Perfect for working on sensitive documents in secure environments.',
    'zh': '是的！页面加载后，您可以在没有互联网连接的情况下使用所有功能。非常适合在安全环境中处理敏感文档。',
    'es': '¡Sí! Una vez que la página se haya cargado, puede usar todas las funciones sin una conexión a Internet. Perfecto para trabajar en documentos confidenciales en entornos seguros.',
    'fr': 'Oui ! Une fois la page chargée, vous pouvez utiliser toutes les fonctionnalités sans connexion Internet. Parfait pour travailler sur des documents sensibles dans des environnements sécurisés.',
    'de': 'Ja! Sobald die Seite geladen ist, können Sie alle Funktionen ohne Internetverbindung nutzen. Perfekt für die Arbeit an sensiblen Dokumenten in sicheren Umgebungen.',
    'ja': 'はい！ページが読み込まれたら、インターネット接続なしですべての機能を使用できます。安全な環境で機密文書を処理するのに最適です。',
    'ko': '네! 페이지가 로드되면 인터넷 연결 없이 모든 기능을 사용할 수 있습니다. 보안 환경에서 민감한 문서를 작업하기에 완벽합니다.',
    'pt': 'Sim! Depois que a página é carregada, você pode usar todos os recursos sem conexão com a Internet. Perfeito para trabalhar em documentos confidenciais em ambientes seguros.',
    'ru': 'Да! После загрузки страницы вы можете использовать все функции без подключения к интернету. Идеально для работы с конфиденциальными документами в безопасных средах.',
    'ar': 'نعم! بمجرد تحميل الصفحة، يمكنك استخدام جميع الميزات دون اتصال بالإنترنت. مثالي للعمل على المستندات الحساسة في البيئات الآمنة.'
};

TRANSLATIONS['faq.q4.title'] = {
    'en': 'What file formats are supported?',
    'zh': '支持哪些文件格式？',
    'es': '¿Qué formatos de archivo son compatibles?',
    'fr': 'Quels formats de fichiers sont pris en charge ?',
    'de': 'Welche Dateiformate werden unterstützt?',
    'ja': 'どのファイル形式がサポートされていますか？',
    'ko': '어떤 파일 형식이 지원되나요?',
    'pt': 'Quais formatos de arquivo são suportados?',
    'ru': 'Какие форматы файлов поддерживаются?',
    'ar': 'ما هي تنسيقات الملفات المدعومة؟'
};

TRANSLATIONS['faq.q4.desc'] = {
    'en': 'We support JPG, PNG, GIF, WebP images, and PDF files. Multi-page PDFs are fully supported with page-by-page redaction capabilities.',
    'zh': '我们支持JPG、PNG、GIF、WebP图像和PDF文件。多页PDF完全支持逐页脱敏功能。',
    'es': 'Admitimos imágenes JPG, PNG, GIF, WebP y archivos PDF. Los PDF de varias páginas son totalmente compatibles con capacidades de edición página por página.',
    'fr': 'Nous prenons en charge les images JPG, PNG, GIF, WebP et les fichiers PDF. Les PDF multi-pages sont entièrement pris en charge avec des capacités d\'édition page par page.',
    'de': 'Wir unterstützen JPG-, PNG-, GIF-, WebP-Bilder und PDF-Dateien. Mehrseitige PDFs werden vollständig mit Seiten-für-Seiten-Bearbeitungsfunktionen unterstützt.',
    'ja': 'JPG、PNG、GIF、WebP画像およびPDFファイルに対応しています。複数ページのPDFは、ページごとの編集機能で完全にサポートされています。',
    'ko': 'JPG, PNG, GIF, WebP 이미지 및 PDF 파일을 지원합니다. 다중 페이지 PDF는 페이지별 편집 기능으로 완벽하게 지원됩니다.',
    'pt': 'Suportamos imagens JPG, PNG, GIF, WebP e arquivos PDF. PDFs de várias páginas são totalmente compatíveis com recursos de edição página por página.',
    'ru': 'Мы поддерживаем изображения JPG, PNG, GIF, WebP и файлы PDF. Многостраничные PDF полностью поддерживаются с возможностью редактирования страница за страницей.',
    'ar': 'ندعم صور JPG و PNG و GIF و WebP وملفات PDF. ملفات PDF متعددة الصفحات مدعومة بالكامل مع إمكانات التحرير صفحة بصفحة.'
};

TRANSLATIONS['faq.q5.title'] = {
    'en': 'How do I blur faces or hide text?',
    'zh': '如何模糊面部或隐藏文字？',
    'es': '¿Cómo difuminar caras u ocultar texto?',
    'fr': 'Comment flouter les visages ou masquer le texte ?',
    'de': 'Wie verwische ich Gesichter oder verstecke Text?',
    'ja': '顔をぼかしたり、テキストを隠したりするにはどうすればよいですか？',
    'ko': '얼굴을 흐리게 하거나 텍스트를 숨기려면 어떻게 해야 하나요?',
    'pt': 'Como desfocar rostos ou ocultar texto?',
    'ru': 'Как размыть лица или скрыть текст?',
    'ar': 'كيف يمكنني طمس الوجوه أو إخفاء النص؟'
};

TRANSLATIONS['faq.q5.desc'] = {
    'en': 'Simply upload your image, click and drag to select the area you want to redact, choose your preferred color or effect, adjust intensity if needed, and export the result.',
    'zh': '只需上传您的图像，点击并拖动以选择要脱敏的区域，选择您喜欢的颜色或效果，根据需要调整强度，然后导出结果。',
    'es': 'Simplemente cargue su imagen, haga clic y arrastre para seleccionar el área que desea editar, elija su color o efecto preferido, ajuste la intensidad si es necesario y exporte el resultado.',
    'fr': 'Il vous suffit de télécharger votre image, de cliquer et de glisser pour sélectionner la zone à éditer, de choisir votre couleur ou effet préféré, d\'ajuster l\'intensité si nécessaire et d\'exporter le résultat.',
    'de': 'Laden Sie einfach Ihr Bild hoch, klicken und ziehen Sie, um den Bereich auszuwählen, den Sie bearbeiten möchten, wählen Sie Ihre bevorzugte Farbe oder Ihren Effekt, passen Sie die Intensität bei Bedarf an und exportieren Sie das Ergebnis.',
    'ja': '画像をアップロードし、クリックしてドラッグして編集したい領域を選択し、好みの色や効果を選択し、必要に応じて強度を調整し、結果をエクスポートするだけです。',
    'ko': '이미지를 업로드하고 클릭하여 드래그하여 편집할 영역을 선택하고, 선호하는 색상이나 효과를 선택하고, 필요한 경우 강도를 조정하고 결과를 내보기만 하면 됩니다.',
    'pt': 'Simplesmente carregue sua imagem, clique e arraste para selecionar a área que deseja editar, escolha sua cor ou efeito preferido, ajuste a intensidade se necessário e exporte o resultado.',
    'ru': 'Просто загрузите изображение, нажмите и перетащите, чтобы выбрать область, которую хотите редактировать, выберите предпочтительный цвет или эффект, настройте интенсивность при необходимости и экспортируйте результат.',
    'ar': 'ما عليك سوى تحميل صورتك، والنقر والسحب لتحديد المنطقة التي تريد تحريرها، واختيار اللون أو التأثير المفضل لديك، وتعديل الشدة إذا لزم الأمر، وتصدير النتيجة.'
};

TRANSLATIONS['faq.q6.title'] = {
    'en': 'Will exported files keep the original filename?',
    'zh': '导出的文件会保留原始文件名吗？',
    'es': '¿Los archivos exportados conservarán el nombre de archivo original?',
    'fr': 'Les fichiers exportés conserveront-ils le nom de fichier original ?',
    'de': 'Behalten exportierte Dateien den ursprünglichen Dateinamen bei?',
    'ja': 'エクスポートされたファイルは元のファイル名を保持しますか？',
    'ko': '내보 파일은 원본 파일명을 유지하나요?',
    'pt': 'Os arquivos exportados manterão o nome de arquivo original?',
    'ru': 'Экспортированные файлы сохранят исходное имя файла?',
    'ar': 'هل تحتفظ الملفات المُصدَّرة باسم الملف الأصلي؟'
};

TRANSLATIONS['faq.q6.desc'] = {
    'en': 'Yes! We preserve the exact original filename, including all characters (Chinese, Japanese, Korean, emojis, etc.). No more UUID or &quot;generated&quot; filenames.',
    'zh': '是的！我们保留确切的原始文件名，包括所有字符（中文、日文、韩文、表情符号等）。不再有UUID或&quot;生成的&quot;文件名。',
    'es': '¡Sí! Preservamos el nombre de archivo original exacto, incluidos todos los caracteres (chino, japonés, coreano, emojis, etc.). No más nombres de archivo UUID o &quot;generados&quot;.',
    'fr': 'Oui ! Nous conservons le nom de fichier original exact, y compris tous les caractères (chinois, japonais, coréen, emojis, etc.). Plus de noms de fichier UUID ou &quot;générés&quot;.',
    'de': 'Ja! Wir behalten den genauen ursprünglichen Dateinamen bei, einschließlich aller Zeichen (Chinesisch, Japanisch, Koreanisch, Emojis usw.). Keine UUID- oder &quot;generierten&quot; Dateinamen mehr.',
    'ja': 'はい！中国語、日本語、韓国語、絵文字などのすべての文字を含む、正確な元のファイル名を保持します。UUIDや&quot;生成された&quot;ファイル名はもうありません。',
    'ko': '네! 중국어, 일본어, 한국어, 이모티콘 등을 포함한 모든 문자를 포함하여 정확한 원래 파일명을 보존합니다. UUID나 &quot;생성된&quot; 파일명은 더 이상 없습니다.',
    'pt': 'Sim! Preservamos o nome de arquivo original exato, incluindo todos os caracteres (chinês, japonês, coreano, emojis, etc.). Não mais nomes de arquivo UUID ou &quot;gerados&quot;.',
    'ru': 'Да! Мы сохраняем точное исходное имя файла, включая все символы (китайские, японские, корейские, эмодзи и т. д.). Больше никаких UUID или &quot;сгенерированных&quot; имен файлов.',
    'ar': 'نعم! نحتفظ باسم الملف الأصلي بالضبط، بما في ذلك جميع الأحرف (الصينية واليابانية والكورية والرموز التعبيرية، إلخ). لا مزيد من أسماء الملفات UUID أو &quot;المُنشأة&quot;.'
};

TRANSLATIONS['faq.q7.title'] = {
    'en': 'Can I redact multiple pages in a PDF?',
    'zh': '我可以脱敏PDF中的多个页面吗？',
    'es': '¿Puedo editar varias páginas en un PDF?',
    'fr': 'Puis-je éditer plusieurs pages dans un PDF ?',
    'de': 'Kann ich mehrere Seiten in einem PDF bearbeiten?',
    'ja': 'PDF内の複数ページを編集できますか？',
    'ko': 'PDF에서 여러 페이지를 편집할 수 있나요?',
    'pt': 'Posso editar várias páginas em um PDF?',
    'ru': 'Могу ли я редактировать несколько страниц в PDF?',
    'ar': 'هل يمكنني تحرير صفحات متعددة في ملف PDF؟'
};

TRANSLATIONS['faq.q7.desc'] = {
    'en': 'Absolutely! Our tool supports multi-page PDFs. You can navigate between pages, edit each one individually, and export as a complete multi-page PDF.',
    'zh': '当然可以！我们的工具支持多页PDF。您可以在页面之间导航，单独脱敏每一页，并导出为完整的多页PDF。',
    'es': '¡Absolutamente! Nuestra herramienta admite PDF de varias páginas. Puede navegar entre páginas, editar cada una individualmente y exportar como un PDF de varias páginas completo.',
    'fr': 'Absolument ! Notre outil prend en charge les PDF multi-pages. Vous pouvez naviguer entre les pages, éditer chacune individuellement et exporter en tant que PDF multi-pages complet.',
    'de': 'Absolut! Unser Tool unterstützt mehrseitige PDFs. Sie können zwischen den Seiten navigieren, jede einzelne bearbeiten und als vollständiges mehrseitiges PDF exportieren.',
    'ja': 'もちろんです！私たちのツールは複数ページのPDFに対応しています。ページ間を移動し、各ページを個別に編集し、完全な複数ページのPDFとしてエクスポートできます。',
    'ko': '물론입니다! 저희 도구는 다중 페이지 PDF를 지원합니다. 페이지 간에 이동하고, 각 페이지를 개별적으로 편집하며, 완전한 다중 페이지 PDF로 내보할 수 있습니다.',
    'pt': 'Absolutamente! Nossa ferramenta suporta PDFs de várias páginas. Você pode navegar entre as páginas, editar cada uma individualmente e exportar como um PDF de várias páginas completo.',
    'ru': 'Конечно! Наш инструмент поддерживает многостраничные PDF. Вы можете перемещаться между страницами, редактировать каждую отдельно и экспортировать в виде полного многостраничного PDF.',
    'ar': 'بالتأكيد! أداتنا تدعم ملفات PDF متعددة الصفحات. يمكنك التنقل بين الصفحات، وتحرير كل منها بشكل فردي، والتصدير كملف PDF متعدد الصفحات كامل.'
};

TRANSLATIONS['faq.q8.title'] = {
    'en': 'Does it work on mobile devices?',
    'zh': '它能在移动设备上工作吗？',
    'es': '¿Funciona en dispositivos móviles?',
    'fr': 'Est-ce que ça marche sur les appareils mobiles ?',
    'de': 'Funktioniert es auf Mobilgeräten?',
    'ja': 'モバイルデバイスで動作しますか？',
    'ko': '모바일 기기에서 작동하나요?',
    'pt': 'Funciona em dispositivos móveis?',
    'ru': 'Работает ли на мобильных устройствах?',
    'ar': 'هل يعمل على الأجهزة المحمولة؟'
};

TRANSLATIONS['faq.q8.desc'] = {
    'en': 'Yes! Our responsive design works perfectly on smartphones and tablets (iOS and Android). Touch-friendly interface makes it easy to select areas on smaller screens.',
    'zh': '是的！我们的响应式设计在智能手机和平板电脑（iOS和Android）上完美工作。触摸友好的界面使在小屏幕上选择区域变得容易。',
    'es': '¡Sí! Nuestro diseño responsivo funciona perfectamente en smartphones y tablets (iOS y Android). La interfaz táctil facilita la selección de áreas en pantallas más pequeñas.',
    'fr': 'Oui ! Notre design réactif fonctionne parfaitement sur smartphones et tablettes (iOS et Android). L\'interface tactile facilite la sélection des zones sur des écrans plus petits.',
    'de': 'Ja! Unser responsives Design funktioniert einwandfrei auf Smartphones und Tablets (iOS und Android). Die touchfreundliche Oberfläche erleichtert die Auswahl von Bereichen auf kleineren Bildschirmen.',
    'ja': 'はい！私たちのレスポンシブデザインはスマートフォンとタブレット（iOSとAndroid）で完璧に動作します。タッチフレンドリーなインターフェースにより、小さな画面で領域を選択しやすくなっています。',
    'ko': '네! 저희 반응형 디자인은 스마트폰과 태블릿(iOS 및 Android)에서 완벽하게 작동합니다. 터치 친화적인 인터페이스로 작은 화면에서도 영역을 쉽게 선택할 수 있습니다.',
    'pt': 'Sim! Nosso design responsivo funciona perfeitamente em smartphones e tablets (iOS e Android). A interface amigável ao toque facilita a seleção de áreas em telas menores.',
    'ru': 'Да! Наш адаптивный дизайн отлично работает на смартфонах и планшетах (iOS и Android). Интерфейс, удобный для сенсорных устройств, облегчает выбор областей на экранах меньшего размера.',
    'ar': 'نعم! يعمل تصميمنا المتجاوب بشكل مثالي على الهواتف الذكية والأجهزة اللوحية (iOS و Android). الواجهة المتوافقة مع اللمس تجعل من السهل تحديد المناطق على الشاشات الأصغر.'
};

// Terms of Service Page
TRANSLATIONS['tos.page.title'] = {
    'en': 'Terms of Service',
    'zh': '服务条款',
    'es': 'Términos de servicio',
    'fr': 'Conditions d\'utilisation',
    'de': 'Nutzungsbedingungen',
    'ja': '利用規約',
    'ko': '서비스 약관',
    'pt': 'Termos de serviço',
    'ru': 'Условия использования',
    'ar': 'شروط الخدمة'
};

TRANSLATIONS['tos.page.subtitle'] = {
    'en': 'Last updated: May 31, 2026',
    'zh': '最后更新：2026年5月31日',
    'es': 'Última actualización: 31 de mayo de 2026',
    'fr': 'Dernière mise à jour : 31 mai 2026',
    'de': 'Letzte Aktualisierung: 31. Mai 2026',
    'ja': '最終更新日：2026年5月31日',
    'ko': '마지막 업데이트: 2026년 5월 31일',
    'pt': 'Última atualização: 31 de maio de 2026',
    'ru': 'Последнее обновление: 31 мая 2026 г.',
    'ar': 'آخر تحديث: 31 مايو 2026'
};

TRANSLATIONS['tos.intro'] = {
    'en': 'Welcome to toolvx.com ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website and services, including our free online image and PDF redaction tool (the "Service"). By accessing or using our Service, you agree to be bound by these Terms.',
    'zh': '欢迎使用toolvx.com（"我们"）。这些服务条款（"条款"）约束您对我们网站和服务的访问和使用，包括我们的免费在线图像和PDF脱敏工具（"服务"）。通过访问或使用我们的服务，您同意受这些条款的约束。',
    'es': 'Bienvenido a toolvx.com ("nosotros"). Estos Términos de servicio ("Términos") rigen su acceso y uso de nuestro sitio web y servicios, incluida nuestra herramienta gratuita de edición de imágenes y PDF en línea (el "Servicio"). Al acceder o usar nuestro Servicio, usted acepta estar sujeto a estos Términos.',
    'fr': 'Bienvenue sur toolvx.com ("nous"). Ces Conditions d\'utilisation ("Conditions") régissent votre accès et votre utilisation de notre site Web et de nos services, y compris notre outil gratuit d\'édition d\'images et de PDF en ligne (le "Service"). En accédant à ou en utilisant notre Service, vous acceptez d\'être lié par ces Conditions.',
    'de': 'Willkommen bei toolvx.com ("wir"). Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugriff auf und Ihre Nutzung unserer Website und Dienste, einschließlich unseres kostenlosen Online-Tools zur Bild- und PDF-Bearbeitung (der "Service"). Durch den Zugriff auf oder die Nutzung unseres Service stimmen Sie zu, durch diese Bedingungen gebunden zu sein.',
    'ja': 'toolvx.com（"私たち"）へようこそ。これらの利用規約（"規約"）は、当社のウェブサイトおよびサービスへのアクセスおよび使用を規定します。これには、無料のオンライン画像およびPDF編集ツール（"サービス"）が含まれます。当社のサービスにアクセスまたは使用することにより、これらの規約に拘束されることに同意します。',
    'ko': 'toolvx.com("우리")에 오신 것을 환영합니다. 본 서비스 약관("약관")은 당사 웹사이트 및 서비스(무료 온라인 이미지 및 PDF 편집 도구("서비스") 포함)에 대한 귀하의 액세스 및 사용을 규율합니다. 당사 서비스에 액세스하거나 사용함으로써 귀하는 본 약관에 따르는 데 동의합니다.',
    'pt': 'Bem-vindo ao toolvx.com ("nós"). Estes Termos de serviço ("Termos") regem seu acesso e uso do nosso site e serviços, incluindo nossa ferramenta gratuita de edição de imagens e PDF online (o "Serviço"). Ao acessar ou usar nosso Serviço, você concorda em ficar vinculado a estes Termos.',
    'ru': 'Добро пожаловать на toolvx.com ("мы"). Настоящие Условия использования ("Условия") регулируют ваш доступ к нашему сайту и услугам и их использование, включая наш бесплатный онлайн-инструмент для редактирования изображений и PDF ("Сервис"). Получая доступ к нашему Сервису или используя его, вы соглашаетесь соблюдать настоящие Условия.',
    'ar': 'مرحبًا بك في toolvx.com ("نحن"). تحكم هذه شروط الخدمة ("الشروط") وصولك إلى موقعنا وخدماتنا واستخدامها، بما في ذلك أداة تحرير الصور وملفات PDF المجانية عبر الإنترنت ("الخدمة"). من خلال الوصول إلى خدمتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط.'
};

TRANSLATIONS['tos.important.title'] = {
    'en': 'Important:',
    'zh': '重要提示：',
    'es': 'Importante:',
    'fr': 'Important :',
    'de': 'Wichtig:',
    'ja': '重要：',
    'ko': '중요:',
    'pt': 'Importante:',
    'ru': 'Важно:',
    'ar': 'مهم:'
};

TRANSLATIONS['tos.important.text'] = {
    'en': 'If you do not agree with any part of these Terms, you must not use our Service.',
    'zh': '如果您不同意这些条款的任何部分，则不得使用我们的服务。',
    'es': 'Si no está de acuerdo con alguna parte de estos Términos, no debe usar nuestro Servicio.',
    'fr': 'Si vous n\'êtes pas d\'accord avec une partie de ces Conditions, vous ne devez pas utiliser notre Service.',
    'de': 'Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie unseren Service nicht nutzen.',
    'ja': 'これらの規約のいずれかの部分に同意しない場合は、当社のサービスを使用してはいけません。',
    'ko': '본 약관의 일부에 동의하지 않으시면 당사 서비스를 사용하실 수 없습니다.',
    'pt': 'Se você não concordar com qualquer parte destes Termos, não deve usar nosso Serviço.',
    'ru': 'Если вы не согласны с какой-либо частью настоящих Условий, вы не должны использовать наш Сервис.',
    'ar': 'إذا كنت لا توافق على أي جزء من هذه الشروط، فيجب عليك عدم استخدام خدمتنا.'
};

TRANSLATIONS['tos.section1.title'] = {
    'en': '1. Acceptance of Terms',
    'zh': '1. 条款的接受',
    'es': '1. Aceptación de los términos',
    'fr': '1. Acceptation des conditions',
    'de': '1. Annahme der Bedingungen',
    'ja': '1. 規約の同意',
    'ko': '1. 약관 동의',
    'pt': '1. Aceitação dos termos',
    'ru': '1. Принятие условий',
    'ar': '1. قبول الشروط'
};

TRANSLATIONS['tos.section1.text'] = {
    'en': 'By accessing or using toolvx.com, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Service.',
    'zh': '通过访问或使用toolvx.com，您确认您已阅读、理解并同意受这些条款和我们的隐私政策的约束。这些条款适用于所有访问或使用服务的访客、用户和其他人。',
    'es': 'Al acceder o usar toolvx.com, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos y a nuestra Política de privacidad. Estos Términos se aplican a todos los visitantes, usuarios y demás personas que accedan o usen el Servicio.',
    'fr': 'En accédant à ou en utilisant toolvx.com, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions et notre Politique de confidentialité. Ces Conditions s\'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent au Service ou l\'utilisent.',
    'de': 'Durch den Zugriff auf oder die Nutzung von toolvx.com erkennen Sie an, dass Sie diese Bedingungen und unsere Datenschutzerklärung gelesen, verstanden und akzeptiert haben. Diese Bedingungen gelten für alle Besucher, Nutzer und andere Personen, die auf den Service zugreifen oder ihn nutzen.',
    'ja': 'toolvx.comにアクセスまたは使用することにより、これらの規約およびプライバシーポリシーを読み、理解し、それらに拘束されることに同意したことを認めます。これらの規約は、サービスにアクセスまたは使用するすべての訪問者、ユーザー、その他の人に適用されます。',
    'ko': 'toolvx.com에 액세스하거나 사용함으로써 귀하는 본 약관 및 개인정보 보호정책을 읽고 이해하며 이에 따르는 데 동의했음을 인정합니다. 본 약관은 서비스에 액세스하거나 사용하는 모든 방문자, 사용자 및 기타 사람에게 적용됩니다.',
    'pt': 'Ao acessar ou usar o toolvx.com, você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos e à nossa Política de privacidade. Estes Termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o Serviço.',
    'ru': 'Получая доступ к toolvx.com или используя его, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия и нашу Политику конфиденциальности. Настоящие Условия применяются ко всем посетителям, пользователям и иным лицам, получающим доступ к Сервису или использующим его.',
    'ar': 'من خلال الوصول إلى toolvx.com أو استخدامه، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا. تنطبق هذه الشروط على جميع الزوار والمستخدمين وغيرهم ممن يصلون إلى الخدمة أو يستخدمونها.'
};

TRANSLATIONS['tos.section2.title'] = {
    'en': '2. Description of Service',
    'zh': '2. 服务描述',
    'es': '2. Descripción del servicio',
    'fr': '2. Description du service',
    'de': '2. Beschreibung des Service',
    'ja': '2. サービスの説明',
    'ko': '2. 서비스 설명',
    'pt': '2. Descrição do serviço',
    'ru': '2. Описание сервиса',
    'ar': '2. وصف الخدمة'
};

TRANSLATIONS['tos.section2.text'] = {
    'en': 'toolvx.com provides a free online tool that allows users to:',
    'zh': 'toolvx.com 提供一个免费的在线工具，允许用户：',
    'es': 'toolvx.com proporciona una herramienta gratuita en línea que permite a los usuarios:',
    'fr': 'toolvx.com fournit un outil en ligne gratuit qui permet aux utilisateurs de :',
    'de': 'toolvx.com bietet ein kostenloses Online-Tool, das Benutzern ermöglicht:',
    'ja': 'toolvx.comは、ユーザーが以下を行える無料のオンラインツールを提供します：',
    'ko': 'toolvx.com은 사용자가 다음을 수행할 수 있는 무료 온라인 도구를 제공합니다.',
    'pt': 'toolvx.com fornece uma ferramenta online gratuita que permite aos usuários:',
    'ru': 'toolvx.com предоставляет бесплатный онлайн-инструмент, который позволяет пользователям:',
    'ar': 'توفر toolvx.com أداة مجانية عبر الإنترنت تتيح للمستخدمين:'
};

TRANSLATIONS['tos.section2.item1'] = {
    'en': 'Redact and sanitize images (JPG, PNG, GIF, WebP)',
    'zh': '脱敏和脱敏图像（JPG、PNG、GIF、WebP）',
    'es': 'Editar y redactar imágenes (JPG, PNG, GIF, WebP)',
    'fr': 'Éditer et rédiger des images (JPG, PNG, GIF, WebP)',
    'de': 'Bilder bearbeiten und redigieren (JPG, PNG, GIF, WebP)',
    'ja': '画像を編集および編集する（JPG、PNG、GIF、WebP）',
    'ko': '이미지 편집 및 편집 (JPG, PNG, GIF, WebP)',
    'pt': 'Editar e redigir imagens (JPG, PNG, GIF, WebP)',
    'ru': 'Редактировать и редактировать изображения (JPG, PNG, GIF, WebP)',
    'ar': 'تحرير وتحرير الصور (JPG و PNG و GIF و WebP)'
};

TRANSLATIONS['tos.section2.item2'] = {
    'en': 'Redact and sanitize PDF documents',
    'zh': '脱敏和脱敏PDF文档',
    'es': 'Editar y redactar documentos PDF',
    'fr': 'Éditer et rédiger des documents PDF',
    'de': 'PDF-Dokumente bearbeiten und redigieren',
    'ja': 'PDF文書を編集および編集する',
    'ko': 'PDF 문서 편집 및 편집',
    'pt': 'Editar e redigir documentos PDF',
    'ru': 'Редактировать и редактировать документы PDF',
    'ar': 'تحرير وتحرير مستندات PDF'
};

TRANSLATIONS['tos.section2.item3'] = {
    'en': 'Blur faces and mask sensitive information',
    'zh': '模糊面部并遮盖敏感信息',
    'es': 'Difuminar rostros y enmascarar información sensible',
    'fr': 'Flouter les visages et masquer les informations sensibles',
    'de': 'Gesichter verwischen und sensible Informationen maskieren',
    'ja': '顔をぼかし、機密情報をマスクする',
    'ko': '얼굴 흐리게 하고 민감한 정보 마스킹',
    'pt': 'Desfocar rostos e mascarar informações sensíveis',
    'ru': 'Размывать лица и маскировать конфиденциальную информацию',
    'ar': 'طمس الوجوه وإخفاء المعلومات الحساسة'
};

TRANSLATIONS['tos.section2.item4'] = {
    'en': 'Export edited files with original filenames preserved',
    'zh': '导出已脱敏的文件并保留原始文件名',
    'es': 'Exportar archivos editados conservando los nombres de archivo originales',
    'fr': 'Exporter des fichiers édités en conservant les noms de fichier originaux',
    'de': 'Bearbeitete Dateien mit beibehaltenen ursprünglichen Dateinamen exportieren',
    'ja': '元のファイル名を保持したまま編集したファイルをエクスポートする',
    'ko': '원본 파일명을 유지한 채 편집된 파일 내보기',
    'pt': 'Exportar arquivos editados preservando os nomes de arquivo originais',
    'ru': 'Экспортировать отредактированные файлы с сохранением исходных имен файлов',
    'ar': 'تصدير الملفات المُحررة مع الاحتفاظ بأسماء الملفات الأصلية'
};

TRANSLATIONS['tos.section2.note'] = {
    'en': 'All processing occurs locally in your browser. No files are uploaded to our servers, ensuring maximum privacy and security.',
    'zh': '所有处理都在您的浏览器中本地进行。没有文件上传到我们的服务器，确保最大的隐私和安全性。',
    'es': 'Todo el procesamiento ocurre localmente en su navegador. No se cargan archivos en nuestros servidores, garantizando la máxima privacidad y seguridad.',
    'fr': 'Tout le traitement se fait localement dans votre navigateur. Aucun fichier n\'est téléchargé vers nos serveurs, garantissant une confidentialité et une sécurité maximales.',
    'de': 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Keine Dateien werden auf unsere Server hochgeladen, was maximale Privatsphäre und Sicherheit gewährleistet.',
    'ja': 'すべての処理はブラウザ内でローカルに行われます。ファイルは当社のサーバーにアップロードされないため、最大限のプライバシーとセキュリティが保証されます。',
    'ko': '모든 처리는 브라우저에서 로컬로 이루어집니다. 파일은 서버에 업로드되지 않으므로 최대한의 개인 정보 보호와 보안이 보장됩니다.',
    'pt': 'Todo o processamento ocorre localmente no seu navegador. Nenhum arquivo é carregado em nossos servidores, garantindo máxima privacidade e segurança.',
    'ru': 'Вся обработка происходит локально в вашем браузере. Файлы не загружаются на наши серверы, что обеспечивает максимальную конфиденциальность и безопасность.',
    'ar': 'تتم جميع عمليات المعالجة محليًا في متصفحك. لا يتم تحميل أي ملفات إلى خوادمنا، مما يضمن أقصى قدر من الخصوصية والأمان.'
};

TRANSLATIONS['tos.section3.title'] = {
    'en': '3. Eligibility',
    'zh': '3. 资格',
    'es': '3. Elegibilidad',
    'fr': '3. Éligibilité',
    'de': '3. Berechtigung',
    'ja': '3. 資格',
    'ko': '3. 자격',
    'pt': '3. Elegibilidade',
    'ru': '3. Право на участие',
    'ar': '3. الأهلية'
};

TRANSLATIONS['tos.section3.text'] = {
    'en': 'To use our Service, you must:',
    'zh': '要使用我们的服务，您必须：',
    'es': 'Para usar nuestro Servicio, usted debe:',
    'fr': 'Pour utiliser notre Service, vous devez :',
    'de': 'Um unseren Service nutzen zu können, müssen Sie:',
    'ja': '当社のサービスを利用するには、以下が必要です：',
    'ko': '당사 서비스를 사용하려면 다음이 필요합니다.',
    'pt': 'Para usar nosso Serviço, você deve:',
    'ru': 'Чтобы использовать наш Сервис, вы должны:',
    'ar': 'لاستخدام خدمتنا، يجب عليك:'
};

TRANSLATIONS['tos.section3.item1'] = {
    'en': 'Be at least 13 years old (or the minimum age required in your jurisdiction)',
    'zh': '年满13岁（或您所在司法管辖区要求的最低年龄）',
    'es': 'Tener al menos 13 años de edad (o la edad mínima requerida en su jurisdicción)',
    'fr': 'Avoir au moins 13 ans (ou l\'âge minimum requis dans votre juridiction)',
    'de': 'Mindestens 13 Jahre alt sein (oder das in Ihrer Gerichtsbarkeit erforderliche Mindestalter)',
    'ja': '少なくとも13歳以上であること（または管轄区域で要求される最低年齢）',
    'ko': '최소 13세 이상이어야 함(또는 관할 지역에서 요구하는 최소 연령)',
    'pt': 'Ter pelo menos 13 anos de idade (ou a idade mínima exigida em sua jurisdição)',
    'ru': 'Быть не моложе 13 лет (или достичь минимального возраста, требуемого в вашей юрисдикции)',
    'ar': 'أن تكون على الأقل 13 عامًا (أو الحد الأدنى للسن المطلوب في ولايتك القضائية)'
};

TRANSLATIONS['tos.section3.item2'] = {
    'en': 'Have the legal capacity to enter into binding agreements',
    'zh': '具有签订具有约束力协议的法律能力',
    'es': 'Tener la capacidad legal para celebrar acuerdos vinculantes',
    'fr': 'Avoir la capacité juridique de conclure des accords contraignants',
    'de': 'Die gesetzliche Befugnis haben, bindende Vereinbarungen einzugehen',
    'ja': '拘束力のある契約を締結する法的権利能力を有すること',
    'ko': '구속력 있는 계약을 체결할 수 있는 법적 능력 보유',
    'pt': 'Ter capacidade legal para celebrar acordos vinculantes',
    'ru': 'Иметь юридическую дееспособность для заключения обязательных соглашений',
    'ar': 'أن يكون لديك الأهلية القانونية لإبرام اتفاقيات ملزمة'
};

TRANSLATIONS['tos.section3.item3'] = {
    'en': 'Not be prohibited from using the Service under applicable laws',
    'zh': '不被适用法律禁止使用服务',
    'es': 'No estar prohibido de usar el Servicio según las leyes aplicables',
    'fr': 'Ne pas être interdit d\'utiliser le Service en vertu des lois applicables',
    'de': 'Nicht durch geltende Gesetze von der Nutzung des Service ausgeschlossen sein',
    'ja': '適用法に基づいてサービスの使用が禁止されていないこと',
    'ko': '적용 가능한 법률에 따라 서비스 사용이 금지되지 않음',
    'pt': 'Não estar proibido de usar o Serviço segundo as leis aplicáveis',
    'ru': 'Не быть запрещенным в использовании Сервиса в соответствии с действующим законодательством',
    'ar': 'ألا يكون ممنوعًا من استخدام الخدمة بموجب القوانين المعمول بها'
};

TRANSLATIONS['tos.section3.note'] = {
    'en': 'If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.',
    'zh': '如果您代表组织使用服务，则您声明并保证您有权使该组织受这些条款的约束。',
    'es': 'Si está usando el Servicio en nombre de una organización, usted declara y garantiza que tiene la autoridad para obligar a esa organización a estos Términos.',
    'fr': 'Si vous utilisez le Service au nom d\'une organisation, vous déclarez et garantissez que vous avez l\'autorité de lier cette organisation à ces Conditions.',
    'de': 'Wenn Sie den Service im Namen einer Organisation nutzen, erklären und garantieren Sie, dass Sie befugt sind, diese Organisation an diese Bedingungen zu binden.',
    'ja': '組織を代表してサービスを使用する場合、あなたはその組織をこれらの規約に拘束する権限を有することを表明し、保証します。',
    'ko': '조직을 대신하여 서비스를 사용하는 경우, 귀하는 해당 조직을 본 약관에 따르게 할 권한이 있음을 진술하고 보증합니다.',
    'pt': 'Se você estiver usando o Serviço em nome de uma organização, você declara e garante que tem autoridade para vincular essa organização a estes Termos.',
    'ru': 'Если вы используете Сервис от имени организации, вы заявляете и гарантируете, что имеете полномочия обязать эту организацию соблюдать настоящие Условия.',
    'ar': 'إذا كنت تستخدم الخدمة نيابة عن مؤسسة، فإنك تقر وتضمن أن لديك السلطة لإلزام هذه المؤسسة بهذه الشروط.'
};

TRANSLATIONS['tos.section4.title'] = {
    'en': '4. User Responsibilities',
    'zh': '4. 用户责任',
    'es': '4. Responsabilidades del usuario',
    'fr': '4. Responsabilités de l\'utilisateur',
    'de': '4. Benutzerverantwortung',
    'ja': '4. ユーザーの責任',
    'ko': '4. 사용자 책임',
    'pt': '4. Responsabilidades do usuário',
    'ru': '4. Обязанности пользователя',
    'ar': '4. مسؤوليات المستخدم'
};

TRANSLATIONS['tos.section4_1.title'] = {
    'en': '4.1 Acceptable Use',
    'zh': '4.1 可接受的使用',
    'es': '4.1 Uso aceptable',
    'fr': '4.1 Utilisation acceptable',
    'de': '4.1 Zulässige Nutzung',
    'ja': '4.1 許容される使用',
    'ko': '4.1 허용된 사용',
    'pt': '4.1 Uso aceitável',
    'ru': '4.1 Допустимое использование',
    'ar': '4.1 الاستخدام المقبول'
};

TRANSLATIONS['tos.section4_1.text'] = {
    'en': 'You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:',
    'zh': '您同意仅出于合法目的并按照这些条款使用服务。您同意不：',
    'es': 'Usted acepta usar el Servicio solo para fines legítimos y de acuerdo con estos Términos. Usted acepta NO:',
    'fr': 'Vous acceptez d\'utiliser le Service uniquement à des fins légitimes et conformément à ces Conditions. Vous acceptez de NE PAS :',
    'de': 'Sie stimmen zu, den Service nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen Bedingungen zu nutzen. Sie stimmen zu, NICHT zu:',
    'ja': 'あなたは、合法的な目的のみのために、これらの規約に従ってサービスを使用することに同意します。あなたは以下を行わないことに同意します：',
    'ko': '귀하는 합법적인 목적으로만 본 약관에 따라 서비스를 사용하는 데 동의합니다. 귀하는 다음을 하지 않는 데 동의합니다.',
    'pt': 'Você concorda em usar o Serviço apenas para fins legítimos e de acordo com estes Termos. Você concorda em NÃO:',
    'ru': 'Вы соглашаетесь использовать Сервис только в законных целях и в соответствии с настоящими Условиями. Вы соглашаетесь НЕ:',
    'ar': 'أنت توافق على استخدام الخدمة لأغراض قانونية فقط وبما يتوافق مع هذه الشروط. أنت توافق على عدم:'
};

TRANSLATIONS['tos.section4_1.item1'] = {
    'en': 'Use the Service for any illegal or unauthorized purpose',
    'zh': '将服务用于任何非法或未经授权的目的',
    'es': 'Usar el Servicio para cualquier propósito ilegal o no autorizado',
    'fr': 'Utiliser le Service à des fins illégales ou non autorisées',
    'de': 'Den Service für illegale oder unbefugte Zwecke nutzen',
    'ja': '違法または未承認の目的のためにサービスを使用する',
    'ko': '불법적이거나 승인되지 않은 목적으로 서비스 사용',
    'pt': 'Usar o Serviço para qualquer propósito ilegal ou não autorizado',
    'ru': 'Использовать Сервис в любых незаконных или несанкционированных целях',
    'ar': 'استخدام الخدمة لأي غرض غير قانوني أو غير مصرح به'
};

TRANSLATIONS['tos.section4_1.item2'] = {
    'en': 'Violate any local, state, national, or international laws',
    'zh': '违反任何地方法律、州法律、国家法律或国际法律',
    'es': 'Violar cualquier ley local, estatal, nacional o internacional',
    'fr': 'Violer toute loi locale, régionale, nationale ou internationale',
    'de': 'Jegliche lokalen, staatlichen, nationalen oder internationalen Gesetze verletzen',
    'ja': '現地法、州法、国内法、または国際法に違反する',
    'ko': '지역, 주, 국가 또는 국제법 위반',
    'pt': 'Violar quaisquer leis locais, estaduais, nacionais ou internacionais',
    'ru': 'Нарушать любые местные, государственные, национальные или международные законы',
    'ar': 'انتهاك أي قوانين محلية أو estatales أو وطنية أو دولية'
};

TRANSLATIONS['tos.section4_1.item3'] = {
    'en': 'Infringe upon or violate our intellectual property rights or the intellectual property rights of others',
    'zh': '侵犯或违反我们的知识产权或他人的知识产权',
    'es': 'Infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de otros',
    'fr': 'Enfreindre ou violer nos droits de propriété intellectuelle ou ceux d\'autrui',
    'de': 'Unsere gewerblichen Schutzrechte oder die gewerblichen Schutzrechte anderer verletzen',
    'ja': '当社または他者の知的財産権を侵害する',
    'ko': '당사 또는 타인의 지식 재산권 침해',
    'pt': 'Infringir ou violar nossos direitos de propriedade intelectual ou os de terceiros',
    'ru': 'Нарушать наши права интеллектуальной собственности или права интеллектуальной собственности других',
    'ar': 'الاعتداء على حقوق الملكية الفكرية الخاصة بنا أو حقوق الملكية الفكرية للآخرين أو انتهاكها'
};

TRANSLATIONS['tos.section4_1.item4'] = {
    'en': 'Upload or process content that contains viruses, malware, or other harmful code',
    'zh': '上传或处理包含病毒、恶意软件或其他有害代码的内容',
    'es': 'Cargar o procesar contenido que contenga virus, malware u otro código dañino',
    'fr': 'Télécharger ou traiter du contenu contenant des virus, des logiciels malveillants ou autre code nuisible',
    'de': 'Inhalte hochladen oder verarbeiten, die Viren, Malware oder anderen schädlichen Code enthalten',
    'ja': 'ウイルス、マルウェア、またはその他の有害なコードを含むコンテンツをアップロードまたは処理する',
    'ko': '바이러스, 악성코드 또는 기타 유해한 코드를 포함한 콘텐츠 업로드 또는 처리',
    'pt': 'Carregar ou processar conteúdo que contenha vírus, malware ou outro código prejudicial',
    'ru': 'Загружать или обрабатывать контент, содержащий вирусы, вредоносное ПО или другой вредоносный код',
    'ar': 'تحميل أو معالجة محتوى يحتوي على فيروسات أو برامج ضارة أو كود ضار آخر'
};

TRANSLATIONS['tos.section4_1.item5'] = {
    'en': 'Attempt to gain unauthorized access to our systems or networks',
    'zh': '试图未经授权访问我们的系统或网络',
    'es': 'Intentar obtener acceso no autorizado a nuestros sistemas o redes',
    'fr': 'Tenter d\'obtenir un accès non autorisé à nos systèmes ou réseaux',
    'de': 'Versuchen, unbefugten Zugriff auf unsere Systeme oder Netzwerke zu erhalten',
    'ja': '当社のシステムまたはネットワークへの不正アクセスを試みる',
    'ko': '당사 시스템 또는 네트워크에 대한 무단 액세스 시도',
    'pt': 'Tentar obter acesso não autorizado aos nossos sistemas ou redes',
    'ru': 'Пытаться получить несанкционированный доступ к нашим системам или сетям',
    'ar': 'محاولة الحصول على وصول غير مصرح به إلى أنظمتنا أو شبكاتنا'
};

TRANSLATIONS['tos.section4_1.item6'] = {
    'en': 'Interfere with or disrupt the Service or servers connected to the Service',
    'zh': '干扰或破坏服务或连接到服务的服务器',
    'es': 'Interferir con o interrumpir el Servicio o los servidores conectados al Servicio',
    'fr': 'Interférer avec ou perturber le Service ou les serveurs connectés au Service',
    'de': 'Den Service oder mit dem Service verbundene Server stören oder unterbrechen',
    'ja': 'サービスまたはサービスに接続されたサーバーを妨害または混乱させる',
    'ko': '서비스 또는 서비스에 연결된 서버 방해 또는 중단',
    'pt': 'Interferir com ou interromper o Serviço ou os servidores conectados ao Serviço',
    'ru': 'Мешать работе Сервиса или серверов, подключенных к Сервису, или нарушать их работу',
    'ar': 'التدخل في الخدمة أو تعطيلها أو خوادم متصلة بالخدمة'
};

TRANSLATIONS['tos.section4_1.item7'] = {
    'en': 'Use automated systems (bots, scrapers) to access the Service without permission',
    'zh': '使用自动化系统（机器人、抓取工具）在未经许可的情况下访问服务',
    'es': 'Usar sistemas automatizados (bots, rascadores) para acceder al Servicio sin permiso',
    'fr': 'Utiliser des systèmes automatisés (bots, scrapers) pour accéder au Service sans autorisation',
    'de': 'Automatisierte Systeme (Bots, Scraper) verwenden, um ohne Erlaubnis auf den Service zuzugreifen',
    'ja': '許可なく自動化システム（ボット、スクレーパー）を使用してサービスにアクセスする',
    'ko': '자동화 시스템(봇, 스크래퍼)을 사용하여 허가 없이 서비스에 액세스',
    'pt': 'Usar sistemas automatizados (bots, scrapers) para acessar o Serviço sem permissão',
    'ru': 'Использовать автоматизированные системы (боты, парсеры) для доступа к Сервису без разрешения',
    'ar': 'استخدام الأنظمة الآلية (الروبوتات، أدوات الاستخراج) للوصول إلى الخدمة دون إذن'
};

TRANSLATIONS['tos.section4_1.item8'] = {
    'en': 'Reverse engineer, decompile, or disassemble any part of the Service',
    'zh': '对服务的任何部分进行逆向工程、反编译或拆卸',
    'es': 'Realizar ingeniería inversa, descompilar o desmontar cualquier parte del Servicio',
    'fr': 'Faire de l\'ingénierie inverse, décompiler ou désassembler toute partie du Service',
    'de': 'Jegliche Teile des Service zu reverse engineeren, zu dekompilieren oder zu disassemblieren',
    'ja': 'サービスのいかなる部分もリバースエンジニアリング、逆コンパイル、または逆アセンブリする',
    'ko': '서비스의 모든 부분을 리버스 엔지니어링, 디컴파일 또는 디스어셈블',
    'pt': 'Fazer engenharia reversa, descompilar ou desmontar qualquer parte do Serviço',
    'ru': 'Выполнять реверс-инжиниринг, декомпиляцию или дизассемблирование любой части Сервиса',
    'ar': 'القيام بالهندسة العكسية أو التفكيك أو التفكيك لأي جزء من الخدمة'
};

TRANSLATIONS['tos.section4_2.title'] = {
    'en': '4.2 Content Responsibility',
    'zh': '4.2 内容责任',
    'es': '4.2 Responsabilidad del contenido',
    'fr': '4.2 Responsabilité du contenu',
    'de': '4.2 Inhaltsverantwortung',
    'ja': '4.2 コンテンツの責任',
    'ko': '4.2 콘텐츠 책임',
    'pt': '4.2 Responsabilidade pelo conteúdo',
    'ru': '4.2 Ответственность за контент',
    'ar': '4.2 مسؤولية المحتوى'
};

TRANSLATIONS['tos.section4_2.text'] = {
    'en': 'You are solely responsible for all content you upload, process, or redact using our Service. You represent and warrant that:',
    'zh': '您对使用我们的服务上传、处理或脱敏的所有内容负全部责任。您声明并保证：',
    'es': 'Usted es el único responsable de todo el contenido que carga, procesa o edita usando nuestro Servicio. Usted declara y garantiza que:',
    'fr': 'Vous êtes seul responsable de tout le contenu que vous téléchargez, traitez ou éditez en utilisant notre Service. Vous déclarez et garantissez que :',
    'de': 'Sie sind allein verantwortlich für alle Inhalte, die Sie mit unserem Service hochladen, verarbeiten oder bearbeiten. Sie erklären und garantieren, dass:',
    'ja': '当社のサービスを使用してアップロード、処理、または編集したすべてのコンテンツについて、あなたが完全に責任を負います。あなたは以下を表明し、保証します：',
    'ko': '귀하는 당사 서비스를 사용하여 업로드, 처리 또는 편집한 모든 콘텐츠에 대해 전적으로 책임을 집니다. 귀하는 다음을 진술하고 보증합니다.',
    'pt': 'Você é o único responsável por todo o conteúdo que carrega, processa ou edita usando nosso Serviço. Você declara e garante que:',
    'ru': 'Вы несете полную ответственность за весь контент, который вы загружаете, обрабатываете или редактируете с помощью нашего Сервиса. Вы заявляете и гарантируете, что:',
    'ar': 'أنت المسؤول الوحيد عن جميع المحتويات التي تقوم بتحميلها أو معالجتها أو تحريرها باستخدام خدمتنا. أنت تقر وتضمن أن:'
};

TRANSLATIONS['tos.section4_2.item1'] = {
    'en': 'You own or have the necessary rights to use the content',
    'zh': '您拥有或具有使用内容的必要权利',
    'es': 'Usted posee o tiene los derechos necesarios para usar el contenido',
    'fr': 'Vous possédez ou disposez des droits nécessaires pour utiliser le contenu',
    'de': 'Sie besitzen die Inhalte oder haben die erforderlichen Rechte, sie zu nutzen',
    'ja': 'コンテンツを所有しているか、コンテンツを使用するために必要な権利を持っている',
    'ko': '콘텐츠를 소유하거나 사용에 필요한 권리 보유',
    'pt': 'Você possui ou tem os direitos necessários para usar o conteúdo',
    'ru': 'Вы владеете контентом или имеете необходимые права на его использование',
    'ar': 'أنت تمتلك أو لديك الحقوق اللازمة لاستخدام المحتوى'
};

TRANSLATIONS['tos.section4_2.item2'] = {
    'en': 'The content does not violate any laws or third-party rights',
    'zh': '内容不违反任何法律或第三方权利',
    'es': 'El contenido no viola ninguna ley o derechos de terceros',
    'fr': 'Le contenu ne viole aucune loi ni droit de tiers',
    'de': 'Die Inhalte verletzen keine Gesetze oder Rechte Dritter',
    'ja': 'コンテンツが法律や第三者の権利を侵害していない',
    'ko': '콘텐츠가 법률이나 타인의 권리를 위반하지 않음',
    'pt': 'O conteúdo não viola nenhuma lei ou direitos de terceiros',
    'ru': 'Контент не нарушает законов и прав третьих лиц',
    'ar': 'المحتوى لا ينتهك أي قوانين أو حقوق طرف ثالث'
};

TRANSLATIONS['tos.section4_2.item3'] = {
    'en': 'The content is accurate and not misleading',
    'zh': '内容是准确的，不具有误导性',
    'es': 'El contenido es preciso y no engañoso',
    'fr': 'Le contenu est exact et non trompeur',
    'de': 'Die Inhalte sind korrekt und nicht irreführend',
    'ja': 'コンテンツが正確で、誤解を招くものではない',
    'ko': '콘텐츠가 정확하고 오해의 소지가 없음',
    'pt': 'O conteúdo é preciso e não enganoso',
    'ru': 'Контент является точным и не вводит в заблуждение',
    'ar': 'المحتوى دقيق وغير مضلل'
};

TRANSLATIONS['tos.section5.title'] = {
    'en': '5. Intellectual Property Rights',
    'zh': '5. 知识产权',
    'es': '5. Derechos de propiedad intelectual',
    'fr': '5. Droits de propriété intellectuelle',
    'de': '5. Geistige Eigentumsrechte',
    'ja': '5. 知的財産権',
    'ko': '5. 지식 재산권',
    'pt': '5. Direitos de propriedade intelectual',
    'ru': '5. Права интеллектуальной собственности',
    'ar': '5. حقوق الملكية الفكرية'
};

TRANSLATIONS['tos.section5_1.title'] = {
    'en': '5.1 Our Intellectual Property',
    'zh': '5.1 我们的知识产权',
    'es': '5.1 Nuestra propiedad intelectual',
    'fr': '5.1 Notre propriété intellectuelle',
    'de': '5.1 Unser geistiges Eigentum',
    'ja': '5.1 当社の知的財産',
    'ko': '5.1 당사의 지식 재산',
    'pt': '5.1 Nossa propriedade intelectual',
    'ru': '5.1 Наша интеллектуальная собственность',
    'ar': '5.1 ملكيتنا الفكرية'
};

TRANSLATIONS['tos.section5_1.text'] = {
    'en': 'The Service and its original content, features, functionality, design, code, and graphics are owned by toolvx.com and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
    'zh': '服务及其原始内容、功能、设计、代码和图形均归toolvx.com所有，并受国际版权、商标、专利、商业秘密和其他知识产权法的保护。',
    'es': 'El Servicio y su contenido original, funciones, funcionalidad, diseño, código y gráficos son propiedad de toolvx.com y están protegidos por las leyes internacionales de derechos de autor, marcas comerciales, patentes, secretos comerciales y otras leyes de propiedad intelectual.',
    'fr': 'Le Service et son contenu original, ses fonctionnalités, sa conception, son code et ses graphiques sont la propriété de toolvx.com et sont protégés par les lois internationales sur le droit d\'auteur, les marques commerciales, les brevets, les secrets commerciaux et autres lois sur la propriété intellectuelle.',
    'de': 'Der Service und seine ursprünglichen Inhalte, Funktionen, Design, Code und Grafiken sind Eigentum von toolvx.com und werden durch internationale Urheberrechts-, Marken-, Patent-, Geschäftsgeheimnis- und andere Gesetze zum geistigen Eigentum geschützt.',
    'ja': 'サービスおよびそのオリジナルのコンテンツ、機能、デザイン、コード、グラフィックはtoolvx.comが所有しており、国際的な著作権、商標、特許、営業秘密およびその他の知的財産法によって保護されています。',
    'ko': '서비스 및 원본 콘텐츠, 기능, 디자인, 코드 및 그래픽은 toolvx.com의 소유이며 국제 저작권, 상표, 특허, 영업 비밀 및 기타 지식 재산법의 보호를 받습니다.',
    'pt': 'O Serviço e seu conteúdo original, recursos, funcionalidade, design, código e gráficos são de propriedade da toolvx.com e estão protegidos por leis internacionais de direitos autorais, marcas comerciais, patentes, segredos comerciais e outras leis de propriedade intelectual.',
    'ru': 'Сервис и его оригинальный контент, функции, дизайн, код и графика являются собственностью toolvx.com и защищены международными законами об авторских правах, товарных знаках, патентах, коммерческой тайне и другими законами об интеллектуальной собственности.',
    'ar': 'الخدمة ومحتواها الأصلي وميزاتها ووظائفها وتصميمها ورموزها ورسوماتها مملوكة لـ toolvx.com ومحمية بموجب قوانين حقوق النشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية الدولية وقوانين الملكية الفكرية الأخرى.'
};

TRANSLATIONS['tos.section5_2.title'] = {
    'en': '5.2 Your Content',
    'zh': '5.2 您的内容',
    'es': '5.2 Su contenido',
    'fr': '5.2 Votre contenu',
    'de': '5.2 Ihre Inhalte',
    'ja': '5.2 あなたのコンテンツ',
    'ko': '5.2 귀하의 콘텐츠',
    'pt': '5.2 Seu conteúdo',
    'ru': '5.2 Ваш контент',
    'ar': '5.2 محتواك'
};

TRANSLATIONS['tos.section5_2.text'] = {
    'en': 'You retain all rights to the images, PDFs, and other content you upload and redact using our Service. Since all processing happens locally in your browser, we never store or claim ownership of your content.',
    'zh': '您保留对使用我们的服务上传和脱敏的图像、PDF和其他内容的所有权利。由于所有处理都在您的浏览器中本地进行，因此我们永远不会存储或主张您内容的所有权。',
    'es': 'Usted conserva todos los derechos sobre las imágenes, PDF y otro contenido que carga y edita usando nuestro Servicio. Dado que todo el procesamiento ocurre localmente en su navegador, nunca almacenamos ni reclamamos la propiedad de su contenido.',
    'fr': 'Vous conservez tous les droits sur les images, les PDF et les autres contenus que vous téléchargez et éditez en utilisant notre Service. Puisque tout le traitement se fait localement dans votre navigateur, nous ne stockons ni ne revendiquons jamais la propriété de votre contenu.',
    'de': 'Sie behalten alle Rechte an den Bildern, PDFs und anderen Inhalten, die Sie mit unserem Service hochladen und bearbeiten. Da die gesamte Verarbeitung lokal in Ihrem Browser erfolgt, speichern wir niemals Ihre Inhalte oder beanspruchen das Eigentum daran.',
    'ja': '当社のサービスを使用してアップロードおよび編集した画像、PDF、その他のコンテンツに関するすべての権利を保持します。すべての処理はブラウザ内でローカルに行われるため、当社がコンテンツを保存したり、所有権を主張したりすることはありません。',
    'ko': '당사 서비스를 사용하여 업로드하고 편집한 이미지, PDF 및 기타 콘텐츠에 대한 모든 권리를 보유합니다. 모든 처리는 브라우저에서 로컬로 이루어지므로 당사는 귀하의 콘텐츠를 저장하거나 소유권을 주장하지 않습니다.',
    'pt': 'Você mantém todos os direitos sobre as imagens, PDFs e outros conteúdos que carrega e edita usando nosso Serviço. Como todo o processamento ocorre localmente no seu navegador, nunca armazenamos nem reivindicamos a propriedade do seu conteúdo.',
    'ru': 'Вы сохраняете все права на изображения, PDF и другой контент, который загружаете и редактируете с помощью нашего Сервиса. Поскольку вся обработка происходит локально в вашем браузере, мы никогда не храним и не заявляем о правах собственности на ваш контент.',
    'ar': 'أنت تحتفظ بجميع الحقوق في الصور وملفات PDF والمحتويات الأخرى التي تقوم بتحميلها وتحريرها باستخدام خدمتنا. بما أن جميع عمليات المعالجة تتم محليًا في متصفحك، فإننا لا نقوم أبدًا بتخزين محتواك أو المطالبة بملكيته.'
};

TRANSLATIONS['tos.section5_3.title'] = {
    'en': '5.3 License to Use Service',
    'zh': '5.3 使用服务的许可',
    'es': '5.3 Licencia para usar el servicio',
    'fr': '5.3 Licence d\'utilisation du service',
    'de': '5.3 Lizenz zur Nutzung des Service',
    'ja': '5.3 サービス使用ライセンス',
    'ko': '5.3 서비스 사용 라이선스',
    'pt': '5.3 Licença para usar o serviço',
    'ru': '5.3 Лицензия на использование сервиса',
    'ar': '5.3 ترخيص استخدام الخدمة'
};

TRANSLATIONS['tos.section5_3.text'] = {
    'en': 'We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal or commercial purposes, subject to these Terms.',
    'zh': '我们授予您有限、非排他、不可转让、可撤销的许可，以根据这些条款访问和使用服务，用于个人或商业目的。',
    'es': 'Le otorgamos una licencia limitada, no exclusiva, intransferible y revocable para acceder y usar el Servicio para fines personales o comerciales, sujeta a estos Términos.',
    'fr': 'Nous vous accordons une licence limitée, non exclusive, intransferible et révocable pour accéder au Service et l\'utiliser à des fins personnelles ou commerciales, sous réserve de ces Conditions.',
    'de': 'Wir gewähren Ihnen eine begrenzte, nicht exklusive, nicht übertragbare, widerrufliche Lizenz, auf den Service zuzugreifen und ihn für persönliche oder kommerzielle Zwecke zu nutzen, vorbehaltlich dieser Bedingungen.',
    'ja': '当社は、これらの規約に従い、個人的または商業的目的のためにサービスにアクセスし、使用するための、限定された、非排他的、渡不能、取消可能なライセンスを付与します。',
    'ko': '당사는 본 약관에 따라 개인적 또는 상업적 목적으로 서비스에 액세스하고 사용할 수 있는 제한적이고 비독점적이며 양도 불가능하고 취소 가능한 라이선스를 부여합니다.',
    'pt': 'Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar o Serviço para fins pessoais ou comerciais, sujeita a estes Termos.',
    'ru': 'Мы предоставляем вам ограниченную, неисключительную, непередаваемую, отзываемую лицензию на доступ к Сервису и его использование в личных или коммерческих целях в соответствии с настоящими Условиями.',
    'ar': 'نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى الخدمة واستخدامها لأغراض شخصية أو تجارية، وفقًا لهذه الشروط.'
};

TRANSLATIONS['tos.section6.title'] = {
    'en': '6. Free Service',
    'zh': '6. 免费服务',
    'es': '6. Servicio gratuito',
    'fr': '6. Service gratuit',
    'de': '6. Kostenloser Service',
    'ja': '6. 無料サービス',
    'ko': '6. 무료 서비스',
    'pt': '6. Serviço gratuito',
    'ru': '6. Бесплатный сервис',
    'ar': '6. خدمة مجانية'
};

TRANSLATIONS['tos.section6.text'] = {
    'en': 'Our Service is provided free of charge. We reserve the right to:',
    'zh': '我们的服务免费提供。我们保留以下权利：',
    'es': 'Nuestro Servicio se proporciona de forma gratuita. Nos reservamos el derecho de:',
    'fr': 'Notre Service est fourni gratuitement. Nous nous réservons le droit de :',
    'de': 'Unser Service wird kostenlos bereitgestellt. Wir behalten uns das Recht vor:',
    'ja': '当社のサービスは無料で提供されています。当社は以下の権利を保留します：',
    'ko': '당사 서비스는 무료로 제공됩니다. 당사는 다음의 권리를 보유합니다.',
    'pt': 'Nosso Serviço é fornecido gratuitamente. Reservamos o direito de:',
    'ru': 'Наш Сервис предоставляется бесплатно. Мы оставляем за собой право:',
    'ar': 'يتم تقديم خدمتنا مجانًا. نحتفظ بالحق في:'
};

TRANSLATIONS['tos.section6.item1'] = {
    'en': 'Modify or discontinue the Service (or any part thereof) temporarily or permanently',
    'zh': '暂时或永久修改或停止服务（或其任何部分）',
    'es': 'Modificar o discontinuar el Servicio (o cualquier parte del mismo) temporalmente o permanentemente',
    'fr': 'Modifier ou interrompre le Service (ou toute partie de celui-ci) temporairement ou définitivement',
    'de': 'Den Service (oder Teile davon) vorübergehend oder dauerhaft zu ändern oder einzustellen',
    'ja': 'サービス（またはその一部）を一時的または永久的に変更または中止する',
    'ko': '서비스(또는 그 일부)를 일시적으로 또는 영구적으로 수정하거나 중단',
    'pt': 'Modificar ou descontinuar o Serviço (ou qualquer parte dele) temporariamente ou permanentemente',
    'ru': 'Изменять или прекращать Сервис (или любую его часть) временно или постоянно',
    'ar': 'تعديل الخدمة أو إيقافها (أو أي جزء منها) مؤقتًا أو بشكل دائم'
};

TRANSLATIONS['tos.section6.item2'] = {
    'en': 'Introduce paid features or premium plans in the future',
    'zh': '将来引入付费功能或高级计划',
    'es': 'Introducir funciones de pago o planes premium en el futuro',
    'fr': 'Introduire des fonctionnalités payantes ou des plans premium dans le futur',
    'de': 'In Zukunft kostenpflichtige Funktionen oder Premium-Pläne einzuführen',
    'ja': '将来、有料機能またはプレミアムプランを導入する',
    'ko': '향후 유료 기능 또는 프리미엄 플랜 도입',
    'pt': 'Introduzir recursos pagos ou planos premium no futuro',
    'ru': 'Ввести платные функции или премиум-планы в будущем',
    'ar': 'إدخال ميزات مدفوعة أو خطط متميزة في المستقبل'
};

TRANSLATIONS['tos.section6.item3'] = {
    'en': 'Set usage limits or restrictions',
    'zh': '设置使用限制或限制',
    'es': 'Establecer límites o restricciones de uso',
    'fr': 'Définir des limites ou restrictions d\'utilisation',
    'de': 'Nutzungslimits oder -beschränkungen festzulegen',
    'ja': '使用制限または制約を設定する',
    'ko': '사용 제한 또는 제약 설정',
    'pt': 'Definir limites ou restrições de uso',
    'ru': 'Устанавливать ограничения или лимиты использования',
    'ar': 'تحديد حدود أو قيود الاستخدام'
};

TRANSLATIONS['tos.section6.note'] = {
    'en': 'We will provide reasonable notice of any material changes to the Service.',
    'zh': '我们将对服务的任何重大变更提供合理的通知。',
    'es': 'Proporcionaremos un aviso razonable de cualquier cambio material en el Servicio.',
    'fr': 'Nous fournirons un avis raisonnable de tout changement important apporté au Service.',
    'de': 'Wir werden angemessene Benachrichtigungen über alle wesentlichen Änderungen am Service geben.',
    'ja': 'サービスへの重大な変更については、合理的な通知を行います。',
    'ko': '서비스의 중대한 변경 사항에 대해 합리적인 통지를 제공할 것입니다.',
    'pt': 'Forneceremos aviso razoável de quaisquer alterações materiais no Serviço.',
    'ru': 'Мы предоставим разумное уведомление о любом существенном изменении в Сервисе.',
    'ar': 'سنقدم إشعارًا معقولًا بأي تغييرات جوهرية في الخدمة.'
};

TRANSLATIONS['tos.section7.title'] = {
    'en': '7. Disclaimers',
    'zh': '7. 免责声明',
    'es': '7. Descargo de responsabilidad',
    'fr': '7. Avis de non-responsabilité',
    'de': '7. Haftungsausschluss',
    'ja': '7. 免責事項',
    'ko': '7. 면책 조항',
    'pt': '7. Isenções de responsabilidade',
    'ru': '7. Отказ от ответственности',
    'ar': '7. إخلاء المسؤولية'
};

TRANSLATIONS['tos.section7.boxTitle'] = {
    'en': 'NO WARRANTIES',
    'zh': '无担保',
    'es': 'SIN GARANTÍAS',
    'fr': 'AUCUNE GARANTIE',
    'de': 'KEINE GEWÄHRLEISTUNG',
    'ja': '保証なし',
    'ko': '보증 없음',
    'pt': 'SEM GARANTIAS',
    'ru': 'БЕЗ ГАРАНТИЙ',
    'ar': 'لا يوجد ضمانات'
};

TRANSLATIONS['tos.section7.boxText'] = {
    'en': 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',
    'zh': '服务按"原样"和"可用"提供，不提供任何明示或暗示的保证，包括但不限于：',
    'es': 'EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN NINGUNA GARANTÍA DE NINGÚN TIPO, YA SEA EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A:',
    'fr': 'LE SERVICE EST FOURNI "TEL QUEL" ET "SELON LA DISPONIBILITÉ" SANS AUCUNE GARANTIE D\'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S\'Y LIMITER :',
    'de': 'DER SERVICE WIRD "WIE BESEHEN" UND "SOFERN VERFÜGBAR" OHNE JEGLICHE GEWÄHRLEISTUNG JEGLICHER ART, SEI ES AUSDRÜCKLICHE ODER IMPLIZITE, EINSCHLIESSLICH ABER NICHT BESCHRÄNKT AUF:',
    'ja': 'サービスは"現状有姿"および"利用可能な範囲内で"提供され、明示または黙示を問わず、いかなる種類の保証も行いません。これには、以下が含まれますが、これに限定されません：',
    'ko': '서비스는 "있는 그대로" 및 "이용 가능한 경우"로 제공되며, 명시적이든 묵시적이든 어떠한 종류의 보증도 제공하지 않습니다. 이는 다음을 포함하되 이에 국한되지 않습니다.',
    'pt': 'O SERVIÇO É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA" E "CONFORME A DISPONIBILIDADE" SEM NENHUMA GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO A:',
    'ru': 'СЕРВИС ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ" И "ПО МЕРЕ ДОСТУПНОСТИ" БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ ЛЮБОГО РОДА, ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ:',
    'ar': 'يتم توفير الخدمة "كما هي" و"حسب التوفر" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر:'
};

TRANSLATIONS['tos.section7.item1'] = {
    'en': 'Implied warranties of merchantability',
    'zh': '适销性的默示担保',
    'es': 'Garantías implícitas de comerciabilidad',
    'fr': 'Garanties implicites de qualité marchande',
    'de': 'Implied Gewährleistung der Handelsfähigkeit',
    'ja': '商品性の暗示的保証',
    'ko': '상품성에 대한 묵시적 보증',
    'pt': 'Garantias implícitas de comercialização',
    'ru': 'Подразумеваемые гарантии товарной пригодности',
    'ar': 'الضمانات الضمنية للتسويق'
};

TRANSLATIONS['tos.section7.item2'] = {
    'en': 'Fitness for a particular purpose',
    'zh': '适用于特定目的',
    'es': 'Idoneidad para un propósito particular',
    'fr': 'Aptitude à un usage particulier',
    'de': 'Eignung für einen bestimmten Zweck',
    'ja': '特定の目的への適合性',
    'ko': '특정 목적에의 적합성',
    'pt': 'Adequação para um propósito específico',
    'ru': 'Пригодность для конкретной цели',
    'ar': 'الملاءمة لغرض معين'
};

TRANSLATIONS['tos.section7.item3'] = {
    'en': 'Non-infringement',
    'zh': '不侵权',
    'es': 'No infracción',
    'fr': 'Non-violation',
    'de': 'Nichtverletzung',
    'ja': '非侵害',
    'ko': '비침해',
    'pt': 'Não violação',
    'ru': 'Ненарушение прав',
    'ar': 'عدم الانتهاك'
};

TRANSLATIONS['tos.section7.item4'] = {
    'en': 'Accuracy or completeness of results',
    'zh': '结果的准确性或完整性',
    'es': 'Exactitud o integridad de los resultados',
    'fr': 'Exactitude ou exhaustivité des résultats',
    'de': 'Genauigkeit oder Vollständigkeit der Ergebnisse',
    'ja': '結果の正確性または完全性',
    'ko': '결과의 정확성 또는 완전성',
    'pt': 'Precisão ou integridade dos resultados',
    'ru': 'Точность или полнота результатов',
    'ar': 'دقة أو اكتمال النتائج'
};

TRANSLATIONS['tos.section7.item5'] = {
    'en': 'Uninterrupted or error-free operation',
    'zh': '不间断或无错误的运行',
    'es': 'Operación ininterrumpida o sin errores',
    'fr': 'Fonctionnement ininterrompu ou sans erreur',
    'de': 'Ununterbrochene oder fehlerfreie Betriebsweise',
    'ja': '中断のない、またはエラーのない運営',
    'ko': '중단되거나 오류가 없는 운영',
    'pt': 'Operação ininterrupta ou livre de erros',
    'ru': 'Бесперебойная или безошибочная работа',
    'ar': 'تشغيل مستمر أو خالي من الأخطاء'
};

TRANSLATIONS['tos.section7.text'] = {
    'en': 'We do not warrant that:',
    'zh': '我们不保证：',
    'es': 'No garantizamos que:',
    'fr': 'Nous ne garantissons pas que :',
    'de': 'Wir garantieren nicht, dass:',
    'ja': '当社は以下を保証しません：',
    'ko': '당사는 다음을 보증하지 않습니다.',
    'pt': 'Nós não garantimos que:',
    'ru': 'Мы не гарантируем, что:',
    'ar': 'نحن لا نضمن أن:'
};

TRANSLATIONS['tos.section7.warrant1'] = {
    'en': 'The Service will meet your specific requirements',
    'zh': '服务将满足您的特定需求',
    'es': 'El Servicio cumplirá con sus requisitos específicos',
    'fr': 'Le Service répondra à vos besoins spécifiques',
    'de': 'Der Service Ihre spezifischen Anforderungen erfüllt',
    'ja': 'サービスがお客様の特定の要件を満たすこと',
    'ko': '서비스가 귀하의 특정 요구 사항을 충족할 것',
    'pt': 'O Serviço atenderá aos seus requisitos específicos',
    'ru': 'Сервис соответствует вашим конкретным требованиям',
    'ar': 'الخدمة ستلبي متطلباتك المحددة'
};

TRANSLATIONS['tos.section7.warrant2'] = {
    'en': 'The Service will be uninterrupted, timely, secure, or error-free',
    'zh': '服务将是不间断的、适时的、安全的或无错误的',
    'es': 'El Servicio será ininterrumpido, oportuno, seguro o libre de errores',
    'fr': 'Le Service sera ininterrompu, opportun, sécurisé ou sans erreur',
    'de': 'Der Service ununterbrochen, rechtzeitig, sicher oder fehlerfrei ist',
    'ja': 'サービスが中断されず、適時、安全、またはエラーがないこと',
    'ko': '서비스가 중단되지 않고, 시기적절하고, 안전하거나 오류가 없을 것',
    'pt': 'O Serviço será ininterrupto, oportuno, seguro ou livre de erros',
    'ru': 'Сервис будет бесперебойным, своевременным, безопасным или безошибочным',
    'ar': 'الخدمة ستكون مستمرة وفي الوقت المناسب وآمنة أو خالية من الأخطاء'
};

TRANSLATIONS['tos.section7.warrant3'] = {
    'en': 'The results obtained from using the Service will be accurate or reliable',
    'zh': '使用服务获得的结果将是准确或可靠的',
    'es': 'Los resultados obtenidos del uso del Servicio serán precisos o confiables',
    'fr': 'Les résultats obtenus de l\'utilisation du Service seront exacts ou fiables',
    'de': 'Die Ergebnisse der Nutzung des Service genau oder zuverlässig sind',
    'ja': 'サービスを使用して得られた結果が正確または信頼できるものであること',
    'ko': '서비스 사용으로 얻은 결과가 정확하거나 신뢰할 수 있을 것',
    'pt': 'Os resultados obtidos do uso do Serviço serão precisos ou confiáveis',
    'ru': 'Результаты, полученные от использования Сервиса, будут точными или надежными',
    'ar': 'النتائج التي تم الحصول عليها من استخدام الخدمة ستكون دقيقة أو موثوقة'
};

TRANSLATIONS['tos.section7.warrant4'] = {
    'en': 'The quality of any products, services, information, or other material purchased or obtained through the Service will meet your expectations',
    'zh': '通过服务购买或获得的任何产品、服务、信息或其他材料的质量将满足您的期望',
    'es': 'La calidad de cualquier producto, servicio, información u otro material comprado u obtenido a través del Servicio cumplirá con sus expectativas',
    'fr': 'La qualité de tout produit, service, information ou autre matériel acheté ou obtenu via le Service répondra à vos attentes',
    'de': 'Die Qualität von Produkten, Dienstleistungen, Informationen oder anderem Material, das über den Service gekauft oder erhalten wurde, Ihren Erwartungen entspricht',
    'ja': 'サービスを通じて購入または取得した製品、サービス、情報、またはその他の資料の品質がお客様の期待に応えるものであること',
    'ko': '서비스를 통해 구매하거나 얻은 제품, 서비스, 정보 또는 기타 자료의 품질이 귀하의 기대를 충족할 것',
    'pt': 'A qualidade de quaisquer produtos, serviços, informações ou outros materiais comprados ou obtidos através do Serviço atenderá às suas expectativas',
    'ru': 'Качество любых продуктов, услуг, информации или других материалов, приобретенных или полученных через Сервис, будет соответствовать вашим ожиданиям',
    'ar': 'جودة أي منتجات أو خدمات أو معلومات أو مواد أخرى تم شراؤها أو الحصول عليها من خلال الخدمة ستلبي توقعاتك'
};

TRANSLATIONS['tos.section8.title'] = {
    'en': '8. Limitation of Liability',
    'zh': '8. 责任限制',
    'es': '8. Limitación de responsabilidad',
    'fr': '8. Limitation de responsabilité',
    'de': '8. Haftungsbeschränkung',
    'ja': '8. 責任の制限',
    'ko': '8. 책임 제한',
    'pt': '8. Limitação de responsabilidade',
    'ru': '8. Ограничение ответственности',
    'ar': '8. تحديد المسؤولية'
};

TRANSLATIONS['tos.section8.boxTitle'] = {
    'en': 'LIMITATION OF LIABILITY',
    'zh': '责任限制',
    'es': 'LIMITACIÓN DE RESPONSABILIDAD',
    'fr': 'LIMITATION DE RESPONSABILITÉ',
    'de': 'HAFTUNGSBESCHRÄNKUNG',
    'ja': '責任の制限',
    'ko': '책임 제한',
    'pt': 'LIMITAÇÃO DE RESPONSABILIDADE',
    'ru': 'ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ',
    'ar': 'تحديد المسؤولية'
};

TRANSLATIONS['tos.section8.boxText'] = {
    'en': 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TOOLVX.COM, ITS OWNERS, OPERATORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:',
    'zh': '在法律允许的最大范围内，在任何情况下，TOOLVX.COM及其所有者、经营者、员工、代理人或关联公司均不对任何间接、附带、特殊、后果性或惩罚性损害承担责任，包括但不限于：',
    'es': 'EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, EN NINGÚN CASO TOOLVX.COM, SUS PROPIETARIOS, OPERADORES, EMPLEADOS, AGENTES O AFILIADOS SERÁN RESPONSABLES DE NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENCIAL O PUNITIVO, INCLUYENDO PERO NO LIMITADO A:',
    'fr': 'DANS LA LIMITE MAXIMALE PERMISE PAR LA LOI, EN AUCUN CAS TOOLVX.COM, SES PROPRIÉTAIRES, OPÉRATEURS, EMPLOYÉS, AGENTS OU AFFILIÉS NE SERONT RESPONSABLES DE DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS OU PUNITIFS, Y COMPRIS MAIS SANS S\'Y LIMITER :',
    'de': 'IN DER MAXIMALEN VOM GESETZ ZUGELASSENEN EXTENSION HAFTEN TOOLVX.COM, IHRE EIGENTÜMER, BETREIBER, MITARBEITER, VERTRETER ODER VERBUNDENE UNTERNEHMEN IN KEINEM FALL FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGESCHÄDEN ODER STRAFSCHÄDEN, EINSCHLIESSLICH ABER NICHT BESCHRÄNKT AUF:',
    'ja': '法律で許可される最大限の範囲内で、いかなる場合もTOOLVX.COM、その所有者、運営者、従業員、代理人または関連会社は、以下を含むがこれに限定されない間接的、偶発的、特別、結果的または懲罰的損害について責任を負わないものとします：',
    'ko': '법률이 허용하는 최대 범위 내에서, 어떠한 경우에도 TOOLVX.COM 및 그 소유자, 운영자, 직원, 대리인 또는 계열사는 다음을 포함하되 이에 국한되지 않는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.',
    'pt': 'NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, EM NENHUMA CIRCUNSTÂNCIA A TOOLVX.COM, SEUS PROPRIETÁRIOS, OPERADORES, EMPREGADOS, AGENTES OU AFILIADOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSECUTIVOS OU PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO A:',
    'ru': 'В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ЗАКОНОДАТЕЛЬСТВОМ, В НИКАКОМ СЛУЧАЕ TOOLVX.COM, ЕЕ ВЛАДЕЛЬЦЫ, ОПЕРАТОРЫ, СОТРУДНИКИ, АГЕНТЫ ИЛИ АФФИЛИРОВАННЫЕ ЛИЦА НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА КАКИЕ-ЛИБО КОСВЕННЫЕ, СЛУЧАЙНЫЕ, СПЕЦИАЛЬНЫЕ, ПОБОЧНЫЕ ИЛИ ШТРАФНЫЕ УБЫТКИ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ:',
    'ar': 'في الحد الأقصى الذي يسمح به القانون، لن تكون TOOLVX.COM أو مالكيها أو مشغليها أو موظفيها أو وكلائها أو الشركات التابعة لها مسؤولة في أي حال من الأحوال عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر:'
};

TRANSLATIONS['tos.section8.item1'] = {
    'en': 'Loss of profits, data, or goodwill',
    'zh': '利润、数据或商誉的损失',
    'es': 'Pérdida de beneficios, datos o fondo de comercio',
    'fr': 'Perte de profits, de données ou de clientèle',
    'de': 'Verlust von Gewinnen, Daten oder Geschäftswert',
    'ja': '利益、データ、または顧客関係の喪失',
    'ko': '이익, 데이터 또는 우호적 관계의 손실',
    'pt': 'Perda de lucros, dados ou fundo de comércio',
    'ru': 'Упущенная выгода, потеря данных или деловой репутации',
    'ar': 'خسارة الأرباح أو البيانات أو السمعة التجارية'
};

TRANSLATIONS['tos.section8.item2'] = {
    'en': 'Business interruption',
    'zh': '业务中断',
    'es': 'Interrupción del negocio',
    'fr': 'Interruption d\'activité',
    'de': 'Geschäftsunterbrechung',
    'ja': '業務の中断',
    'ko': '사업 중단',
    'pt': 'Interrupção de negócios',
    'ru': 'Прерывание бизнеса',
    'ar': 'توقف الأعمال'
};

TRANSLATIONS['tos.section8.item3'] = {
    'en': 'Computer failure or malfunction',
    'zh': '计算机故障或失灵',
    'es': 'Fallo o mal funcionamiento del ordenador',
    'fr': 'Défaillance ou dysfonctionnement de l\'ordinateur',
    'de': 'Computerversagen oder -fehlfunktion',
    'ja': 'コンピューターの故障または誤動作',
    'ko': '컴퓨터 고장 또는 오작동',
    'pt': 'Falha ou mau funcionamento do computador',
    'ru': 'Отказ или неисправность компьютера',
    'ar': 'عطل أو خلل في الكمبيوتر'
};

TRANSLATIONS['tos.section8.item4'] = {
    'en': 'Any other commercial damages or losses',
    'zh': '任何其他商业损害或损失',
    'es': 'Cualquier otro daño o pérdida comercial',
    'fr': 'Tout autre dommage ou perte commercial',
    'de': 'Jegliche anderen kommerziellen Schäden oder Verluste',
    'ja': 'その他の商業的損害または損失',
    'ko': '기타 상업적 손해 또는 손실',
    'pt': 'Quaisquer outros danos ou perdas comerciais',
    'ru': 'Любые другие коммерческие убытки или потери',
    'ar': 'أي أضرار أو خسائر تجارية أخرى'
};

TRANSLATIONS['tos.section8.boxNote'] = {
    'en': 'OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US (IF ANY) IN THE SIX MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.',
    'zh': '对于因您使用服务而产生的任何索赔，我们的总赔偿责任不超过您在索赔事件发生前六个月内向我们支付的金额（如有）。',
    'es': 'NUESTRA RESPONSABILIDAD TOTAL POR CUALQUIER RECLAMO DERIVADO DE SU USO DEL SERVICIO NO EXCEDERÁ LA CANTIDAD QUE NOS PAGÓ (SI LA HUBIERA) EN LOS SEIS MESES PREVIOS AL EVENTO QUE DIO LUGAR AL RECLAMO.',
    'fr': 'NOTRE RESPONSABILITÉ TOTALE POUR TOUTE RÉCLAMATION DÉCOULANT DE VOTRE UTILISATION DU SERVICE NE DÉPASSERA PAS LE MONTANT QUE VOUS NOUS AVEZ PAYÉ (SI APPLICABLE) DANS LES SIX MOIS PRÉCÉDANT L\'ÉVÉNEMENT QUI A DONNÉ LIEU À LA RÉCLAMATION.',
    'de': 'UNSERE GESAMTHaftung FÜR JEGLICHE ANSPRÜCHE, DIE SICH AUS IHRER NUTZUNG DES SERVICE ERGEBEN, ÜBERSTEIGT NICHT DEN BETRAG, DEN SIE UNS (FALLS ZUTREFFEND) IN DEN SECHS MONATEN VOR DEM EREIGNIS GEZAHLT HABEN, DAS DEN ANSPRUCH VERURSACHT HAT.',
    'ja': 'サービスの使用に起因するいかなる請求に対しても、当社の総賠償責任は、請求の原因となった事象の前の6か月間に当社に支払った金額（ある場合）を超えないものとします。',
    'ko': '서비스 사용으로 인해 발생하는 모든 청구에 대한 당사의 총 책임은 청구의 원인이 된 사건 발생 전 6개월 동안 당사에 지급한 금액(있는 경우)을 초과하지 않습니다.',
    'pt': 'NOSSA RESPONSABILIDADE TOTAL POR QUALQUER RECLAMAÇÃO DECORRENTE DO SEU USO DO SERVIÇO NÃO EXCEDERÁ O VALOR QUE VOCÊ NOS PAGOU (SE HOUVER) NOS SEIS MESES ANTERIORES AO EVENTO QUE DEU ORIGEM À RECLAMAÇÃO.',
    'ru': 'НАША ОБЩАЯ ОТВЕТСТВЕННОСТЬ ПО ЛЮБОМУ ТРЕБОВАНИЮ, ВОЗНИКШЕМУ В РЕЗУЛЬТАТЕ ВАШЕГО ИСПОЛЬЗОВАНИЯ СЕРВИСА, НЕ ПРЕВЫСИТ СУММУ, КОТОРУЮ ВЫ НАМ ЗАПЛАТИЛИ (ЕСЛИ ТАКОВАЯ ИМЕЕТСЯ) ЗА ШЕСТЬ МЕСЯЦЕВ, ПРЕДШЕСТВУЮЩИХ СОБЫТИЮ, ПОРОДИВШЕМУ ТРЕБОВАНИЕ.',
    'ar': 'إن إجمالي مسؤوليتنا عن أي مطالبة تنشأ عن استخدامك للخدمة لن يتجاوز المبلغ الذي دفعته لنا (إن وجد) في الأشهر الستة التي سبقت الحادث الذي أدى إلى المطالبة.'
};

TRANSLATIONS['tos.section9.title'] = {
    'en': '9. Indemnification',
    'zh': '9. 赔偿',
    'es': '9. Indemnización',
    'fr': '9. Indemnisation',
    'de': '9. Entschädigung',
    'ja': '9. 補償',
    'ko': '9. 면책',
    'pt': '9. Indenização',
    'ru': '9. Возмещение убытков',
    'ar': '9. التعويض'
};

TRANSLATIONS['tos.section9.text'] = {
    'en': 'You agree to defend, indemnify, and hold harmless toolvx.com and its owners, operators, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to:',
    'zh': '您同意为toolvx.com及其所有者、经营者、员工、代理人和关联公司辩护、赔偿并使其免受任何因以下原因引起或与之相关的索赔、责任、损害、判决、赔偿、损失、费用、开支或费用（包括合理的律师费）的损害：',
    'es': 'Usted acepta defender, indemnizar y mantener indemne a toolvx.com y sus propietarios, operadores, empleados, agentes y afiliados de y contra cualquier reclamo, responsabilidad, daño, sentencia, indemnización, pérdida, costo, gasto o tarifa (incluidos los honorarios razonables de abogados) derivados de o relacionados con:',
    'fr': 'Vous acceptez de défendre, d\'indemniser et de dégager toolvx.com et ses propriétaires, opérateurs, employés, agents et affiliés de et contre toute réclamation, responsabilité, dommage, jugement, indemnisation, perte, coût, dépense ou frais (y compris les honoraires d\'avocat raisonnables) découlant de ou liés à :',
    'de': 'Sie stimmen zu, toolvx.com und deren Eigentümer, Betreiber, Mitarbeiter, Vertreter und verbundene Unternehmen zu verteidigen, zu entschädigen und schadlos zu halten gegenüber allen Ansprüchen, Haftungen, Schäden, Urteilen, Entschädigungen, Verlusten, Kosten, Aufwendungen oder Gebühren (einschließlich angemessener Anwaltsgebühren), die sich aus oder in Verbindung mit folgendem ergeben:',
    'ja': 'あなたは、toolvx.comおよびその所有者、運営者、従業員、代理人および関連会社を、以下に起因するまたは以下に関連するいかなる請求、責任、損害、判決、賠償、損失、費用、支出または手数料（合理的な弁護士費用を含む）からも防御し、補償し、免責することに同意します。',
    'ko': '귀하는 다음으로 인하거나 다음과 관련된 모든 청구, 책임, 손해, 판결, 배상, 손실, 비용, 경비 또는 수수료(합리적인 변호사 비용 포함)로부터 toolvx.com 및 그 소유자, 운영자, 직원, 대리인 및 계열사를 방어하고, 면책하고, 보호하는 데 동의합니다.',
    'pt': 'Você concorda em defender, indenizar e isentar a toolvx.com e seus proprietários, operadores, empregados, agentes e afiliados de e contra quaisquer reclamações, responsabilidades, danos, julgamentos, indenizações, perdas, custos, despesas ou taxas (incluindo honorários advocatícios razoáveis) decorrentes de ou relacionados a:',
    'ru': 'Вы соглашаетесь защищать, возмещать убытки и освобождать от ответственности toolvx.com, ее владельцев, операторов, сотрудников, агентов и аффилированных лиц от и против любых требований, обязательств, убытков, судебных решений, возмещений, потерь, расходов, издержек или сборов (включая разумные гонорары адвокатов), возникающих в результате или в связи с:',
    'ar': 'أنت توافق على الدفاع عن toolvx.com وملاكها ومشغليها وموظفيها ووكلائها والشركات التابعة لها وتعويضهم وحمايتهم من وضد أي مطالبات أو مسؤوليات أو أضرار أو أحكام أو مكافآت أو خسائر أو تكاليف أو نفقات أو رسوم (بما في ذلك رسوم المحاماة المعقولة) الناشئة عن أو المتعلقة ب:'
};

TRANSLATIONS['tos.section9.item1'] = {
    'en': 'Your violation of these Terms',
    'zh': '您对这些条款的违反',
    'es': 'Su violación de estos Términos',
    'fr': 'Votre violation de ces Conditions',
    'de': 'Ihre Verletzung dieser Bedingungen',
    'ja': 'これらの規約への違反',
    'ko': '본 약관 위반',
    'pt': 'Sua violação destes Termos',
    'ru': 'Ваше нарушение настоящих Условий',
    'ar': 'انتهاكك لهذه الشروط'
};

TRANSLATIONS['tos.section9.item2'] = {
    'en': 'Your use of the Service',
    'zh': '您对服务的使用',
    'es': 'Su uso del Servicio',
    'fr': 'Votre utilisation du Service',
    'de': 'Ihre Nutzung des Service',
    'ja': 'サービスの使用',
    'ko': '서비스 사용',
    'pt': 'Seu uso do Serviço',
    'ru': 'Ваше использование Сервиса',
    'ar': 'استخدامك للخدمة'
};

TRANSLATIONS['tos.section9.item3'] = {
    'en': 'Any content you upload or process',
    'zh': '您上传或处理的任何内容',
    'es': 'Cualquier contenido que cargue o procese',
    'fr': 'Tout contenu que vous téléchargez ou traitez',
    'de': 'Alle Inhalte, die Sie hochladen oder verarbeiten',
    'ja': 'アップロードまたは処理したコンテンツ',
    'ko': '업로드하거나 처리한 콘텐츠',
    'pt': 'Qualquer conteúdo que você carregue ou processe',
    'ru': 'Любой контент, который вы загружаете или обрабатываете',
    'ar': 'أي محتوى تقوم بتحميله أو معالجته'
};

TRANSLATIONS['tos.section9.item4'] = {
    'en': 'Your violation of any third-party rights',
    'zh': '您对任何第三方权利的违反',
    'es': 'Su violación de cualquier derecho de terceros',
    'fr': 'Votre violation de tout droit de tiers',
    'de': 'Ihre Verletzung von Rechten Dritter',
    'ja': '第三者の権利への違反',
    'ko': '타인의 권리 침해',
    'pt': 'Sua violação de quaisquer direitos de terceiros',
    'ru': 'Ваше нарушение прав любых третьих лиц',
    'ar': 'انتهاكك لأي حقوق طرف ثالث'
};

TRANSLATIONS['tos.section10.title'] = {
    'en': '10. Termination',
    'zh': '10. 终止',
    'es': '10. Terminación',
    'fr': '10. Résiliation',
    'de': '10. Kündigung',
    'ja': '10. 終了',
    'ko': '10. 해지',
    'pt': '10. Término',
    'ru': '10. Прекращение',
    'ar': '10. الإنهاء'
};

TRANSLATIONS['tos.section10.text'] = {
    'en': 'We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:',
    'zh': '我们可能会立即终止或暂停您对服务的访问，无需事先通知或承担责任，原因包括但不限于：',
    'es': 'Podemos terminar o suspender su acceso al Servicio inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo pero no limitado a:',
    'fr': 'Nous pouvons résilier ou suspendre votre accès au Service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris mais sans s\'y limiter :',
    'de': 'Wir können Ihren Zugriff auf den Service aus jedem Grund unverzüglich und ohne vorherige Ankündigung oder Haftung kündigen oder sperren, einschließlich aber nicht beschränkt auf:',
    'ja': '当社は、以下を含むがこれに限定されない理由により、事前の通知または責任なしに、あなたのサービスへのアクセスを直ちに終了または停止することができます。',
    'ko': '당사는 다음을 포함하되 이에 국한되지 않는 이유로 사전 통지나 책임 없이 귀하의 서비스 액세스를 즉시 해지하거나 일시 중단할 수 있습니다.',
    'pt': 'Podemos terminar ou suspender seu acesso ao Serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo mas não se limitando a:',
    'ru': 'Мы можем немедленно прекратить или приостановить ваш доступ к Сервису без предварительного уведомления или ответственности по любой причине, включая, но не ограничиваясь:',
    'ar': 'قد نقوم بإنهاء أو تعليق وصولك إلى الخدمة على الفور، دون سابق إنذار أو مسؤولية، لأي سبب من الأسباب، بما في ذلك على سبيل المثال لا الحصر:'
};

TRANSLATIONS['tos.section10.item1'] = {
    'en': 'Breach of these Terms',
    'zh': '违反这些条款',
    'es': 'Incumplimiento de estos Términos',
    'fr': 'Violation de ces Conditions',
    'de': 'Verletzung dieser Bedingungen',
    'ja': 'これらの規約への違反',
    'ko': '본 약관 위반',
    'pt': 'Violação destes Termos',
    'ru': 'Нарушение настоящих Условий',
    'ar': 'انتهاك هذه الشروط'
};

TRANSLATIONS['tos.section10.item2'] = {
    'en': 'Suspected fraudulent or illegal activity',
    'zh': '涉嫌欺诈或非法活动',
    'es': 'Actividad fraudulenta o ilegal sospechada',
    'fr': 'Activité frauduleuse ou illégale suspectée',
    'de': 'Verdächtige betrügerische oder illegale Aktivität',
    'ja': '疑わしい詐欺的または違法な活動',
    'ko': '사기 또는 불법 행위 의심',
    'pt': 'Atividade fraudulenta ou ilegal suspeita',
    'ru': 'Подозрительная мошенническая или незаконная деятельность',
    'ar': 'نشاط مشبوه أو غير قانوني يُشتبه فيه'
};

TRANSLATIONS['tos.section10.item3'] = {
    'en': 'Technical issues or maintenance',
    'zh': '技术问题或维护',
    'es': 'Problemas técnicos o mantenimiento',
    'fr': 'Problèmes techniques ou maintenance',
    'de': 'Technische Probleme oder Wartung',
    'ja': '技術的な問題またはメンテナンス',
    'ko': '기술 문제 또는 유지보수',
    'pt': 'Problemas técnicos ou manutenção',
    'ru': 'Технические проблемы или обслуживание',
    'ar': 'مشاكل فنية أو صيانة'
};

TRANSLATIONS['tos.section10.note'] = {
    'en': 'Upon termination, your right to use the Service will cease immediately.',
    'zh': '终止后，您使用服务的权利将立即终止。',
    'es': 'Tras la terminación, su derecho a usar el Servicio cesará inmediatamente.',
    'fr': 'Après résiliation, votre droit d\'utiliser le Service cessera immédiatement.',
    'de': 'Nach der Kündigung erlischt Ihr Recht, den Service zu nutzen, sofort.',
    'ja': '終了後、サービスを使用する権利は直ちに終了します。',
    'ko': '해지 시 서비스 사용 권리는 즉시 소멸됩니다.',
    'pt': 'Após o término, seu direito de usar o Serviço cessará imediatamente.',
    'ru': 'После прекращения ваше право на использование Сервиса немедленно прекращается.',
    'ar': 'عند الإنهاء، سيتوقف حقك في استخدام الخدمة على الفور.'
};

TRANSLATIONS['tos.section11.title'] = {
    'en': '11. Governing Law',
    'zh': '11. 管辖法律',
    'es': '11. Ley aplicable',
    'fr': '11. Loi applicable',
    'de': '11. Anwendbares Recht',
    'ja': '11. 準拠法',
    'ko': '11. 준거법',
    'pt': '11. Lei aplicável',
    'ru': '11. Применимое право',
    'ar': '11. القانون الحاكم'
};

TRANSLATIONS['tos.section11.text1'] = {
    'en': 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which toolvx.com operates, without regard to its conflict of law provisions.',
    'zh': '这些条款应受toolvx.com运营所在司法管辖区的法律管辖并依其解释，不考虑其法律冲突条款。',
    'es': 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que opera toolvx.com, sin tener en cuenta sus disposiciones de conflicto de leyes.',
    'fr': 'Ces Conditions seront régies et interprétées conformément aux lois de la juridiction dans laquelle toolvx.com opère, sans tenir compte de ses dispositions relatives aux conflits de lois.',
    'de': 'Diese Bedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der toolvx.com tätig ist, und werden in Übereinstimmung mit diesen ausgelegt, ohne Rücksicht auf deren Kollisionsnormen.',
    'ja': 'これらの規約は、toolvx.comが運営する司法管轄区域の法律に従い、解釈されるものとします。法律の抵触に関する規定は考慮しません。',
    'ko': '본 약관은 toolvx.com이 운영하는 관할 지역의 법률에 따라 규율되고 해석되며, 법률 충돌 규정은 고려하지 않습니다.',
    'pt': 'Estes Termos serão regidos e interpretados de acordo com as leis da jurisdição na qual a toolvx.com opera, sem considerar suas disposições de conflito de leis.',
    'ru': 'Настоящие Условия регулируются и истолковываются в соответствии с законодательством юрисдикции, в которой действует toolvx.com, без учета ее норм о коллизионном праве.',
    'ar': 'تخضع هذه الشروط وتُفسر وفقًا لقوانين الولاية القضائية التي تعمل فيها toolvx.com، دون مراعاة أحكام تنازع القوانين الخاصة بها.'
};

TRANSLATIONS['tos.section11.text2'] = {
    'en': 'Any disputes arising from or relating to these Terms or the Service shall be resolved through good faith negotiations. If such negotiations fail, the dispute shall be settled by binding arbitration or in the courts of the applicable jurisdiction.',
    'zh': '因这些条款或服务引起或与之相关的任何争议应通过善意协商解决。如果协商失败，争议应通过有约束力的仲裁或适用司法管辖区的法院解决。',
    'es': 'Cualquier disputa derivada de o relacionada con estos Términos o el Servicio se resolverá a través de negociaciones de buena fe. Si tales negociaciones fracasan, la disputa se resolverá mediante arbitraje vinculante o en los tribunales de la jurisdicción aplicable.',
    'fr': 'Tout litige découlant de ou lié à ces Conditions ou au Service sera résolu par des négociations de bonne foi. Si de telles négociations échouent, le litige sera résolu par arbitrage contraignant ou devant les tribunaux de la juridiction applicable.',
    'de': 'Alle Streitigkeiten, die sich aus oder in Verbindung mit diesen Bedingungen oder dem Service ergeben, werden durch gute Verhandlungen beigelegt. Wenn solche Verhandlungen scheitern, wird der Streit durch bindendes Schiedsverfahren oder vor den Gerichten der zuständigen Gerichtsbarkeit beigelegt.',
    'ja': 'これらの規約またはサービスに起因するまたは関連するいかなる紛争も、誠実な交渉によって解決されるものとします。このような交渉が失敗した場合、紛争は拘束力のある仲裁または適用される司法管轄区域の裁判所で解決されるものとします。',
    'ko': '본 약관 또는 서비스와 관련하여 발생하는 모든 분쟁은 선의의 협상을 통해 해결됩니다. 이러한 협상이 실패하면 분쟁은 구속력 있는 중재 또는 적용 가능한 관할 지역의 법원에서 해결됩니다.',
    'pt': 'Quaisquer disputas decorrentes de ou relacionadas a estes Termos ou ao Serviço serão resolvidas por meio de negociações de boa-fé. Se tais negociações falharem, a disputa será resolvida por arbitragem vinculativa ou nos tribunais da jurisdição aplicável.',
    'ru': 'Любые споры, возникающие из или связанные с настоящими Условиями или Сервисом, разрешаются путем добросовестных переговоров. Если такие переговоры не удаются, спор разрешается обязательным арбитражем или в судах соответствующей юрисдикции.',
    'ar': 'أي نزاعات تنشأ عن هذه الشروط أو الخدمة أو تتعلق بها يتم حلها من خلال المفاوضات بحسن نية. إذا فشلت هذه المفاوضات، يتم تسوية النزاع من خلال التحكيم الملزم أو في محاكم الولاية القضائية المطبقة.'
};

TRANSLATIONS['tos.section12.title'] = {
    'en': '12. Changes to Terms',
    'zh': '12. 条款变更',
    'es': '12. Cambios a los términos',
    'fr': '12. Modifications des conditions',
    'de': '12. Änderungen der Bedingungen',
    'ja': '12. 規約の変更',
    'ko': '12. 약관 변경',
    'pt': '12. Alterações aos termos',
    'ru': '12. Изменения в условиях',
    'ar': '12. تغييرات في الشروط'
};

TRANSLATIONS['tos.section12.text1'] = {
    'en': 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
    'zh': '我们保留随时修改或替换这些条款的权利。如果修订是重大的，我们将在任何新条款生效前至少提前30天通知。什么构成重大变更将由我们全权决定。',
    'es': 'Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, proporcionaremos al menos 30 días de aviso antes de que cualquier nuevo término surta efecto. Lo que constituye un cambio material se determinará a nuestra entera discreción.',
    'fr': 'Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous fournirons un préavis d\'au moins 30 jours avant que tout nouveau terme ne prenne effet. Ce qui constitue un changement important sera déterminé à notre seule discrétion.',
    'de': 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Bei einer wesentlichen Änderung werden wir mindestens 30 Tage vor Inkrafttreten neuer Bedingungen benachrichtigen. Was eine wesentliche Änderung darstellt, liegt in unserem alleinigen Ermessen.',
    'ja': '当社は、これらの規約を随時変更または代替する権利を保留します。改訂が重大な場合、当社は新しい規約が発効する少なくとも30日前に通知します。重大な変更の構成要素は、当社の裁量で決定されます。',
    'ko': '당사는 언제든지 본 약관을 수정하거나 대체할 권리를 보유합니다. 수정이 중대한 경우, 당사는 새로운 약관이 발효되기 최소 30일 전에 통지할 것입니다. 중대한 변경의 구성 요소는 당사의 재량으로 결정됩니다.',
    'pt': 'Reservamos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, forneceremos pelo menos 30 dias de aviso antes que qualquer novo termo entre em vigor. O que constitui uma mudança material será determinado a nosso exclusivo critério.',
    'ru': 'Мы оставляем за собой право изменять или заменять настоящие Условия в любое время. Если пересмотр является существенным, мы предоставим уведомление не менее чем за 30 дней до вступления в силу любых новых условий. То, что составляет существенное изменение, определяется по нашему единоличному усмотрению.',
    'ar': 'نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التعديل جوهريًا، فسنقدم إشعارًا قبل 30 يومًا على الأقل قبل أن تسري أي شروط جديدة. ما يشكل تغييرًا جوهريًا يتم تحديده وفقًا لتقديرنا الخاص.'
};

TRANSLATIONS['tos.section12.text2'] = {
    'en': 'By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.',
    'zh': '在这些修订生效后继续访问或使用我们的服务，即表示您同意受修订后条款的约束。如果您不同意新条款，请停止使用服务。',
    'es': 'Al continuar accediendo o usando nuestro Servicio después de que esas revisiones entren en vigor, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, deje de usar el Servicio.',
    'fr': 'En continuant à accéder à ou à utiliser notre Service après l\'entrée en vigueur de ces révisions, vous acceptez d\'être lié par les termes révisés. Si vous n\'êtes pas d\'accord avec les nouveaux termes, veuillez cesser d\'utiliser le Service.',
    'de': 'Indem Sie nach Inkrafttreten dieser Änderungen weiterhin auf unseren Service zugreifen oder ihn nutzen, stimmen Sie zu, durch die geänderten Bedingungen gebunden zu sein. Wenn Sie den neuen Bedingungen nicht zustimmen, nutzen Sie den Service bitte nicht weiter.',
    'ja': 'これらの改訂が発効した後に当社のサービスにアクセスまたは使用し続けることにより、改訂後の規約に拘束されることに同意したものとみなされます。新しい規約に同意しない場合は、サービスの使用を中止してください。',
    'ko': '본 개정안이 발효된 후에도 서비스에 계속 액세스하거나 사용함으로써 개정된 약관에 따르는 데 동의합니다. 새로운 약관에 동의하지 않으시면 서비스 사용을 중단해 주세요.',
    'pt': 'Ao continuar acessando ou usando nosso Serviço após essas revisões entrarem em vigor, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, pare de usar o Serviço.',
    'ru': 'Продолжая получать доступ к нашему Сервису или использовать его после вступления в силу этих пересмотров, вы соглашаетесь соблюдать пересмотренные условия. Если вы не согласны с новыми условиями, пожалуйста, прекратите использование Сервиса.',
    'ar': 'من خلال الاستمرار في الوصول إلى خدمتنا أو استخدامها بعد أن تصبح هذه المراجعات سارية، فإنك توافق على الالتزام بالشروط المُعدَّلة. إذا كنت لا توافق على الشروط الجديدة، فيرجى التوقف عن استخدام الخدمة.'
};

TRANSLATIONS['tos.section13.title'] = {
    'en': '13. Severability',
    'zh': '13. 可分割性',
    'es': '13. Divisibilidad',
    'fr': '13. Divisibilité',
    'de': '13. Salvatorische Klausel',
    'ja': '13. 可分性',
    'ko': '13. 분리 가능성',
    'pt': '13. Divisibilidade',
    'ru': '13. Разделимость',
    'ar': '13. قابلية التجزئة'
};

TRANSLATIONS['tos.section13.text'] = {
    'en': 'If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had regarding the Service.',
    'zh': '如果这些条款的任何规定被法院裁定为无效或不可执行，这些条款的其余规定将继续有效。这些条款构成我们之间关于服务的完整协议，并取代和替换我们可能拥有的关于服务的任何先前协议。',
    'es': 'Si alguna disposición de estos Términos es declarada inválida o inaplicable por un tribunal, las disposiciones restantes de estos Términos permanecerán en vigor. Estos Términos constituyen el acuerdo completo entre nosotros con respecto a nuestro Servicio y sustituyen y reemplazan cualquier acuerdo anterior que hayamos tenido con respecto al Servicio.',
    'fr': 'Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal, les dispositions restantes de ces Conditions resteront en vigueur. Ces Conditions constituent l\'accord complet entre nous concernant notre Service et annulent et remplacent tout accord antérieur que nous aurions pu avoir concernant le Service.',
    'de': 'Sollte eine Bestimmung dieser Bedingungen von einem Gericht für ungültig oder nicht durchsetzbar erklärt werden, bleiben die übrigen Bestimmungen dieser Bedingungen in Kraft. Diese Bedingungen stellen die gesamte Vereinbarung zwischen uns hinsichtlich unseres Service dar und ersetzen und verdrängen alle vorherigen Vereinbarungen, die wir möglicherweise hinsichtlich des Service getroffen haben.',
    'ja': 'これらの規約のいずれかの条項が裁判所によって無効または執行不能とされた場合、これらの規約の残りの条項は引き続き有効です。これらの規約は、当社のサービスに関する当社間の完全な合意を構成し、サービスに関して以前に締結していた可能性があるいかなる合意も取代し、置き換えます。',
    'ko': '본 약관의 어떤 조항이 법원에 의해 무효 또는 집행 불능으로 선고되더라도, 본 약관의 나머지 조항은 계속 유효합니다. 본 약관은 서비스와 관련하여 당사 간의 전체 계약을 구성하며, 서비스와 관련하여 이전에 체결했을 수 있는 모든 이전 계약을 대체하고 대신합니다.',
    'pt': 'Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor. Estes Termos constituem o acordo completo entre nós em relação ao nosso Serviço e substituem e anulam quaisquer acordos anteriores que possamos ter tido em relação ao Serviço.',
    'ru': 'Если какое-либо положение настоящих Условий будет признано судом недействительным или неисполнимым, остальные положения настоящих Условий остаются в силе. Настоящие Условия представляют собой полное соглашение между нами в отношении нашего Сервиса и заменяют и отменяют любые предыдущие соглашения, которые мы могли иметь в отношении Сервиса.',
    'ar': 'إذا تم اعتبار أي حكم من هذه الشروط غير صالح أو غير قابل للتنفيذ من قبل المحكمة، فستظل الأحكام المتبقية من هذه الشروط سارية. تشكل هذه الشروط الاتفاقية الكاملة بيننا بخصوص خدمتنا وتلغي وتستبدل أي اتفاقيات سابقة قمنا بها بخصوص الخدمة.'
};

TRANSLATIONS['tos.section14.title'] = {
    'en': '14. Waiver',
    'zh': '14. 弃权',
    'es': '14. Renuncia',
    'fr': '14. Renonciation',
    'de': '14. Verzicht',
    'ja': '14. 免責',
    'ko': '14. 포기',
    'pt': '14. Renúncia',
    'ru': '14. Отказ от прав',
    'ar': '14. التنازل'
};

TRANSLATIONS['tos.section14.text'] = {
    'en': 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of toolvx.com.',
    'zh': '我们未能执行这些条款的任何权利或规定，不应被视为对这些权利的放弃。任何此类权利或规定的放弃仅在以书面形式并经toolvx.com正式授权代表签署的情况下有效。',
    'es': 'Nuestro incumplimiento en hacer cumplir cualquier derecho o disposición de estos Términos no se considerará una renuncia de esos derechos. La renuncia de cualquier dicho derecho o disposición solo será efectiva si se hace por escrito y está firmada por un representante debidamente autorizado de toolvx.com.',
    'fr': 'Notre incapacité à faire respecter tout droit ou disposition de ces Conditions ne sera pas considérée comme une renonciation à ces droits. La renonciation à tout tel droit ou disposition ne sera effective que si elle est faite par écrit et signée par un représentant dûment autorisé de toolvx.com.',
    'de': 'Unser Versäumnis, ein Recht oder eine Bestimmung dieser Bedingungen durchzusetzen, wird nicht als Verzicht auf diese Rechte betrachtet. Der Verzicht auf ein solches Recht oder eine solche Bestimmung ist nur wirksam, wenn er schriftlich erfolgt und von einem ordnungsgemäß bevollmächtigten Vertreter von toolvx.com unterzeichnet ist.',
    'ja': '当社がこれらの規約のいかなる権利または条項も執行しなかったことは、これらの権利の放棄とはみなされません。このような権利または条項の放棄は、toolvx.comの正式に権限を与えられた代表者が書面で署名した場合にのみ有効となります。',
    'ko': '당사가 본 약관의 어떤 권리나 조항을 집행하지 않는다고 해서 해당 권리를 포기한 것으로 간주되지 않습니다. 이러한 권리나 조항의 포기는 toolvx.com의 적절히 권한을 부여받은 대표자가 서명한 서면으로만 유효합니다.',
    'pt': 'Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia desses direitos. A renúncia de qualquer tal direito ou disposição só será efetiva se for feita por escrito e assinada por um representante devidamente autorizado da toolvx.com.',
    'ru': 'Наше неисполнение какого-либо права или положения настоящих Условий не будет считаться отказом от этих прав. Отказ от любого такого права или положения будет действительным только в том случае, если он сделан в письменной форме и подписан должным образом уполномоченным представителем toolvx.com.',
    'ar': 'لن يُعتبر عدم قيامنا بإنفاذ أي حق أو حكم من هذه الشروط بمثابة تنازل عن تلك الحقوق. سيكون التنازل عن أي حق أو حكم كهذا فعالًا فقط إذا كان مكتوبًا ومُوقعًا من قبل ممثل مفوض بشكل صحيح من toolvx.com.'
};

TRANSLATIONS['tos.section15.title'] = {
    'en': '15. Contact Information',
    'zh': '15. 联系信息',
    'es': '15. Información de contacto',
    'fr': '15. Informations de contact',
    'de': '15. Kontaktinformationen',
    'ja': '15. 連絡先情報',
    'ko': '15. 연락처 정보',
    'pt': '15. Informações de contato',
    'ru': '15. Контактная информация',
    'ar': '15. معلومات الاتصال'
};

TRANSLATIONS['tos.section15.text'] = {
    'en': 'If you have any questions about these Terms, please contact us at:',
    'zh': '如果您对这些条款有任何疑问，请通过以下方式联系我们：',
    'es': 'Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en:',
    'fr': 'Si vous avez des questions concernant ces Conditions, veuillez nous contacter à :',
    'de': 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:',
    'ja': 'これらの規約についてご質問がある場合は、以下までお問い合わせください：',
    'ko': '본 약관에 대해 궁금한 점이 있으시면 다음으로 연락해 주세요.',
    'pt': 'Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:',
    'ru': 'Если у вас есть вопросы по настоящим Условиям, пожалуйста, свяжитесь с нами по адресу:',
    'ar': 'إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا على:'
};

TRANSLATIONS['tos.section15.response'] = {
    'en': 'We will respond to your inquiry within 30 days.',
    'zh': '我们将在30天内回复您的询问。',
    'es': 'Responderemos a su consulta dentro de 30 días.',
    'fr': 'Nous répondrons à votre demande dans un délai de 30 jours.',
    'de': 'Wir werden Ihre Anfrage innerhalb von 30 Tagen beantworten.',
    'ja': '30日以内にお問い合わせにお答えします。',
    'ko': '30일 이내에 문의하신 내용에 답변해 드리겠습니다.',
    'pt': 'Responderemos à sua consulta dentro de 30 dias.',
    'ru': 'Мы ответим на ваш запрос в течение 30 дней.',
    'ar': 'سنرد على استفسارك في غضون 30 يومًا.'
};

TRANSLATIONS['tos.section16.title'] = {
    'en': '16. Acknowledgment',
    'zh': '16. 确认',
    'es': '16. Reconocimiento',
    'fr': '16. Reconnaissance',
    'de': '16. Anerkennung',
    'ja': '16. 確認',
    'ko': '16. 승인',
    'pt': '16. Reconhecimento',
    'ru': '16. Подтверждение',
    'ar': '16. الإقرار'
};

TRANSLATIONS['tos.section16.text'] = {
    'en': 'BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.',
    'zh': '通过使用服务，您确认您已阅读这些服务条款，理解它们，并同意受其约束。',
    'es': 'AL USAR EL SERVICIO, USTED RECONOCE QUE HA LEÍDO ESTOS TÉRMINOS DE SERVICIO, LOS ENTIENDE Y ACEPTA ESTAR SUJETO A ELLOS.',
    'fr': 'EN UTILISANT LE SERVICE, VOUS RECONNAISSEZ AVOIR LU CES CONDITIONS DE SERVICE, LES AVOIR COMPRIS ET ACCEPTER D\'ÊTRE LIÉ PAR ELLES.',
    'de': 'DURCH DIE NUTZUNG DES SERVICE ERKENNEN SIE AN, DASS SIE DIESE NUTZUNGSBEDINGUNGEN GELESEN HABEN, SVERSTANDEN HABEN UND DASS SIE DURCH DIESE GEBUNDEN SIND.',
    'ja': 'サービスを使用することにより、これらのサービス規約を読み、理解し、それらに拘束されることに同意したことを認めます。',
    'ko': '서비스를 사용함으로써 귀하는 본 서비스 약관을 읽고 이해했으며 이에 따르는 데 동의했음을 인정합니다.',
    'pt': 'AO USAR O SERVIÇO, VOCÊ RECONHECE QUE LEU ESTES TERMOS DE SERVIÇO, OS ENTENDE E CONCORDA EM ESTAR VINCULADO A ELES.',
    'ru': 'ИСПОЛЬЗУЯ СЕРВИС, ВЫ ПОДТВЕРЖДАЕТЕ, ЧТО ПРОЧИТАЛИ НАСТОЯЩИЕ УСЛОВИЯ ОБСЛУЖИВАНИЯ, ПОНИМАЕТЕ ИХ И СОГЛАШАЕТЕСЬ СОБЛЮДАТЬ ИХ.',
    'ar': 'من خلال استخدام الخدمة، فإنك تقر بأنك قد قرأت هذه الشروط وفهمتها ووافقت على الالتزام بها.'
};

TRANSLATIONS['tos.lastUpdated'] = {
    'en': '<strong>Last Updated:</strong> May 31, 2026',
    'zh': '<strong>最后更新：</strong>2026年5月31日',
    'es': '<strong>Última actualización:</strong> 31 de mayo de 2026',
    'fr': '<strong>Dernière mise à jour :</strong> 31 mai 2026',
    'de': '<strong>Letzte Aktualisierung:</strong> 31. Mai 2026',
    'ja': '<strong>最終更新日：</strong>2026年5月31日',
    'ko': '<strong>마지막 업데이트:</strong> 2026년 5월 31일',
    'pt': '<strong>Última atualização:</strong> 31 de maio de 2026',
    'ru': '<strong>Последнее обновление:</strong> 31 мая 2026 г.',
    'ar': '<strong>آخر تحديث:</strong> 31 مايو 2026'
};

TRANSLATIONS['tos.effectiveDate'] = {
    'en': '<strong>Effective Date:</strong> May 31, 2026',
    'zh': '<strong>生效日期：</strong>2026年5月31日',
    'es': '<strong>Fecha de vigencia:</strong> 31 de mayo de 2026',
    'fr': '<strong>Date d\'entrée en vigueur :</strong> 31 mai 2026',
    'de': '<strong>Datum des Inkrafttretens:</strong> 31. Mai 2026',
    'ja': '<strong>発効日：</strong>2026年5月31日',
    'ko': '<strong>발효일:</strong> 2026년 5월 31일',
    'pt': '<strong>Data de vigência:</strong> 31 de maio de 2026',
    'ru': '<strong>Дата вступления в силу:</strong> 31 мая 2026 г.',
    'ar': '<strong>تاريخ السريان:</strong> 31 مايو 2026'
};

// Cookie Policy Page
TRANSLATIONS['cookie.page.title'] = {
    'en': 'Cookie Policy',
    'zh': 'Cookie政策',
    'es': 'Política de cookies',
    'fr': 'Politique relative aux cookies',
    'de': 'Cookie-Richtlinie',
    'ja': 'Cookieポリシー',
    'ko': '쿠키 정책',
    'pt': 'Política de cookies',
    'ru': 'Политика использования файлов cookie',
    'ar': 'سياسة ملفات تعريف الارتباط'
};

TRANSLATIONS['cookie.page.subtitle'] = {
    'en': 'Last Updated: May 31, 2026',
    'zh': '最后更新：2026年5月31日',
    'es': 'Última actualización: 31 de mayo de 2026',
    'fr': 'Dernière mise à jour : 31 mai 2026',
    'de': 'Letzte Aktualisierung: 31. Mai 2026',
    'ja': '最終更新日：2026年5月31日',
    'ko': '마지막 업데이트: 2026년 5월 31일',
    'pt': 'Última atualização: 31 de maio de 2026',
    'ru': 'Последнее обновление: 31 мая 2026 г.',
    'ar': 'آخر تحديث: 31 مايو 2026'
};

TRANSLATIONS['cookie.section1.title'] = {
    'en': '1. What Are Cookies?',
    'zh': '1. 什么是Cookie？',
    'es': '1. ¿Qué son las cookies?',
    'fr': '1. Que sont les cookies ?',
    'de': '1. Was sind Cookies?',
    'ja': '1. Cookieとは何ですか？',
    'ko': '1. 쿠키란 무엇인가요?',
    'pt': '1. O que são cookies?',
    'ru': '1. Что такое файлы cookie?',
    'ar': '1. ما هي ملفات تعريف الارتباط؟'
};

TRANSLATIONS['cookie.section1.text'] = {
    'en': 'Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.',
    'zh': 'Cookie是当您访问网站时存储在您的设备（计算机、智能手机或平板电脑）上的小型文本文件。它们帮助网站记住有关您访问的信息，这既可以使您再次访问网站更容易，也可以使网站对您更有用。',
    'es': 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, smartphone o tablet) cuando visita un sitio web. Ayudan a los sitios web a recordar información sobre su visita, lo que puede facilitarle volver a visitar el sitio y hacer que el sitio sea más útil para usted.',
    'fr': 'Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, smartphone ou tablette) lorsque vous visitez un site Web. Ils aident les sites Web à se souvenir d\'informations sur votre visite, ce qui peut à la fois faciliter la revisite du site et le rendre plus utile pour vous.',
    'de': 'Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone oder Tablet) gespeichert werden, wenn Sie eine Website besuchen. Sie helfen Websites, Informationen über Ihren Besuch zu speichern, was sowohl die erneute Besichtigung der Website erleichtern als auch die Website für Sie nützlicher machen kann.',
    'ja': 'Cookieは、ウェブサイトを訪問した際にデバイス（コンピューター、スマートフォン、またはタブレット）に保存される小さなテキストファイルです。ウェブサイトは、Cookieを使用して訪問に関する情報を記憶し、再度の訪問を容易にしたり、ウェブサイトをより便利にしたりすることができます。',
    'ko': '쿠키는 웹사이트를 방문할 때 장치(컴퓨터, 스마트폰 또는 태블릿)에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 방문에 대한 정보를 기억하도록 도와 다시 방문하기 쉽게 하고 웹사이트를 더 유용하게 만듭니다.',
    'pt': 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles ajudam os sites a lembrar informações sobre sua visita, o que pode facilitar a revisita ao site e torná-lo mais útil para você.',
    'ru': 'Файлы cookie — это небольшие текстовые файлы, которые хранятся на вашем устройстве (компьютере, смартфоне или планшете) при посещении веб-сайта. Они помогают веб-сайтам запоминать информацию о вашем визите, что облегчает повторный визит и делает сайт более полезным для вас.',
    'ar': 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك (الكمبيوتر أو الهاتف الذكي أو الجهاز اللوحي) عند زيارتك لموقع ويب. إنها تساعد مواقع الويب على تذكر المعلومات حول زيارتك، مما يسهل زيارة الموقع مرة أخرى ويجعله أكثر فائدة لك.'
};

TRANSLATIONS['cookie.section2.title'] = {
    'en': '2. How We Use Cookies',
    'zh': '2. 我们如何使用Cookie',
    'es': '2. Cómo usamos las cookies',
    'fr': '2. Comment nous utilisons les cookies',
    'de': '2. Wie wir Cookies verwenden',
    'ja': '2. Cookieの使用方法',
    'ko': '2. 쿠키 사용 방법',
    'pt': '2. Como usamos os cookies',
    'ru': '2. К мы используем файлы cookie',
    'ar': '2. كيف نستخدم ملفات تعريف الارتباط'
};

TRANSLATIONS['cookie.section2.text'] = {
    'en': 'At toolvx.com, we use cookies for the following purposes:',
    'zh': '在toolvx.com，我们出于以下目的使用Cookie：',
    'es': 'En toolvx.com, usamos cookies para los siguientes propósitos:',
    'fr': 'Chez toolvx.com, nous utilisons les cookies pour les raisons suivantes :',
    'de': 'Bei toolvx.com verwenden wir Cookies für folgende Zwecke:',
    'ja': 'toolvx.comでは、以下の目的でCookieを使用します：',
    'ko': 'toolvx.com에서는 다음 목적으로 쿠키를 사용합니다.',
    'pt': 'Na toolvx.com, usamos cookies para os seguintes propósitos:',
    'ru': 'На toolvx.com мы используем файлы cookie для следующих целей:',
    'ar': 'في toolvx.com، نستخدم ملفات تعريف الارتباط للأغراض التالية:'
};

TRANSLATIONS['cookie.section2.item1'] = {
    'en': 'Essential Cookies: These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.',
    'zh': '必要Cookie：这些Cookie对于网站的正常运行是必需的。它们启用基本功能，如页面导航和访问网站的安全区域。',
    'es': 'Cookies esenciales: Estas cookies son necesarias para que el sitio web funcione correctamente. Habilitan funciones básicas como la navegación por páginas y el acceso a áreas seguras del sitio.',
    'fr': 'Cookies essentiels : Ces cookies sont nécessaires au bon fonctionnement du site Web. Ils permettent des fonctions de base comme la navigation sur les pages et l\'accès aux zones sécurisées du site.',
    'de': 'Essenzielle Cookies: Diese Cookies sind für die einwandfreie Funktion der Website erforderlich. Sie ermöglichen Grundfunktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website.',
    'ja': '必要なCookie：これらのCookieは、ウェブサイトが正しく機能するために必要です。ページナビゲーションやウェブサイトの安全な領域へのアクセスなどの基本機能を有効にします。',
    'ko': '필수 쿠키: 이 쿠키는 웹사이트가 제대로 작동하는 데 필요합니다. 페이지 탐색 및 웹사이트의 보안 영역에 대한 액세스와 같은 기본 기능을 활성화합니다.',
    'pt': 'Cookies essenciais: Esses cookies são necessários para que o site funcione corretamente. Eles habilitam funções básicas como a navegação em páginas e o acesso a áreas seguras do site.',
    'ru': 'Необходимые файлы cookie: Эти файлы cookie необходимы для корректной работы веб-сайта. Они обеспечивают базовые функции, такие как навигация по страницам и доступ к защищенным областям сайта.',
    'ar': 'ملفات تعريف الارتباط الأساسية: ملفات تعريف الارتباط هذه ضرورية لموقع الويب للعمل بشكل صحيح. إنها تمكن الوظائف الأساسية مثل التنقل في الصفحات والوصول إلى المناطق الآمنة من الموقع.'
};

TRANSLATIONS['cookie.section2.item2'] = {
    'en': 'Preference Cookies: These cookies allow our website to remember choices you make (such as your language preference) to provide enhanced, more personalized features.',
    'zh': '偏好Cookie：这些Cookie使我们的网站能够记住您所做的选择（例如您的语言偏好），以提供增强的、更个性化的功能。',
    'es': 'Cookies de preferencias: Estas cookies permiten que nuestro sitio web recuerde las opciones que elija (como su preferencia de idioma) para proporcionar funciones mejoradas y más personalizadas.',
    'fr': 'Cookies de préférences : Ces cookies permettent à notre site Web de se souvenir des choix que vous faites (tels que votre préférence linguistique) pour fournir des fonctionnalités améliorées et plus personnalisées.',
    'de': 'Präferenz-Cookies: Diese Cookies ermöglichen es unserer Website, die von Ihnen getroffenen Auswahl (wie Ihre Sprachpräferenz) zu speichern, um verbesserte, personalisierte Funktionen bereitzustellen.',
    'ja': '設定Cookie：これらのCookieにより、ウェブサイトは選択内容（言語設定など）を記憶し、より充実した個別化された機能を提供することができます。',
    'ko': '선호도 쿠키: 이 쿠키는 웹사이트가 귀하가 선택한 사항(예: 언어 선호도)을 기억하여 향상된 개인화된 기능을 제공할 수 있게 합니다.',
    'pt': 'Cookies de preferências: Esses cookies permitem que nosso site lembre as escolhas que você faz (como sua preferência de idioma) para fornecer recursos mais avançados e personalizados.',
    'ru': 'Файлы cookie настроек: Эти файлы cookie позволяют нашему сайту запоминать сделанные вами выбор (например, предпочитаемый язык), чтобы предоставлять улучшенные и более персонализированные функции.',
    'ar': 'ملفات تعريف الارتباط المفضلة: تتيح ملفات تعريف الارتباط هذه لموقعنا تذكر الخيارات التي تقوم بها (مثل تفضيل لغتك) لتوفير ميزات محسنة وأكثر تخصيصًا.'
};

TRANSLATIONS['cookie.section2.item3'] = {
    'en': 'Analytics Cookies: We may use these cookies to understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website\'s performance and user experience.',
    'zh': '分析Cookie：我们可能使用这些Cookie来了解访问者如何与我们的网站互动，方法是匿名收集和报告信息。这有助于我们改善网站的性能和用户体验。',
    'es': 'Cookies de análisis: Podemos usar estas cookies para entender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de forma anónima. Esto nos ayuda a mejorar el rendimiento de nuestro sitio y la experiencia del usuario.',
    'fr': 'Cookies d\'analyse : Nous pouvons utiliser ces cookies pour comprendre comment les visiteurs interagissent avec notre site Web en collectant et rapportant des informations de manière anonyme. Cela nous aide à améliorer les performances de notre site et l\'expérience utilisateur.',
    'de': 'Analyse-Cookies: Wir können diese Cookies verwenden, um zu verstehen, wie Besucher mit unserer Website interagieren, indem wir Informationen anonym sammeln und melden. Dies hilft uns, die Leistung unserer Website und die Benutzererfahrung zu verbessern.',
    'ja': '分析Cookie：これらのCookieを使用して、訪問者が匿名で情報を収集し報告することにより、ウェブサイトとのインタラクションを理解することができます。これにより、ウェブサイトのパフォーマンスとユーザー体験を改善できます。',
    'ko': '분석 쿠키: 이러한 쿠키를 사용하여 정보를 익명으로 수집하고 보고함으로써 방문자가 웹사이트와 상호 작용하는 방식을 이해할 수 있습니다. 이를 통해 웹사이트의 성능과 사용자 경험을 개선하는 데 도움이 됩니다.',
    'pt': 'Cookies de análise: Podemos usar esses cookies para entender como os visitantes interagem com nosso site, coletando e relatando informações anonimamente. Isso nos ajuda a melhorar o desempenho do nosso site e a experiência do usuário.',
    'ru': 'Файлы cookie аналитики: Мы можем использовать эти файлы cookie, чтобы понять, как посетители взаимодействуют с нашим сайтом, собирая и сообщая информацию анонимно. Это помогает нам улучшить производительность нашего сайта и пользовательский опыт.',
    'ar': 'ملفات تعريف الارتباط التحليلية: قد نستخدم ملفات تعريف الارتباط هذه لفهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول. يساعدنا ذلك في تحسين أداء موقعنا وتجربة المستخدم.'
};

TRANSLATIONS['cookie.section3.title'] = {
    'en': '3. Types of Cookies We Use',
    'zh': '3. 我们使用的Cookie类型',
    'es': '3. Tipos de cookies que usamos',
    'fr': '3. Types de cookies que nous utilisons',
    'de': '3. Arten von Cookies, die wir verwenden',
    'ja': '3. 使用するCookieの種類',
    'ko': '3. 사용하는 쿠키 유형',
    'pt': '3. Tipos de cookies que usamos',
    'ru': '3. Типы файлов cookie, которые мы используем',
    'ar': '3. أنواع ملفات تعريف الارتباط التي نستخدمها'
};

TRANSLATIONS['cookie.table.type'] = {
    'en': 'Cookie Type',
    'zh': 'Cookie类型',
    'es': 'Tipo de cookie',
    'fr': 'Type de cookie',
    'de': 'Cookie-Typ',
    'ja': 'Cookieの種類',
    'ko': '쿠키 유형',
    'pt': 'Tipo de cookie',
    'ru': 'Тип файла cookie',
    'ar': 'نوع ملف تعريف الارتباط'
};

TRANSLATIONS['cookie.table.purpose'] = {
    'en': 'Purpose',
    'zh': '目的',
    'es': 'Propósito',
    'fr': 'Objectif',
    'de': 'Zweck',
    'ja': '目的',
    'ko': '목적',
    'pt': 'Propósito',
    'ru': 'Цель',
    'ar': 'الغرض'
};

TRANSLATIONS['cookie.table.duration'] = {
    'en': 'Duration',
    'zh': '持续时间',
    'es': 'Duración',
    'fr': 'Durée',
    'de': 'Dauer',
    'ja': '期間',
    'ko': '기간',
    'pt': 'Duração',
    'ru': 'Срок действия',
    'ar': 'المدة'
};

TRANSLATIONS['cookie.table.row1.type'] = {
    'en': 'Session Cookies',
    'zh': '会话Cookie',
    'es': 'Cookies de sesión',
    'fr': 'Cookies de session',
    'de': 'Sitzungs-Cookies',
    'ja': 'セッションCookie',
    'ko': '세션 쿠키',
    'pt': 'Cookies de sessão',
    'ru': 'Сессионные файлы cookie',
    'ar': 'ملفات تعريف الارتباط للجلسة'
};

TRANSLATIONS['cookie.table.row1.purpose'] = {
    'en': 'Enable website functionality during your visit',
    'zh': '在您访问期间启用网站功能',
    'es': 'Habilitar la funcionalidad del sitio durante su visita',
    'fr': 'Activer la fonctionnalité du site Web pendant votre visite',
    'de': 'Aktivieren der Website-Funktionalität während Ihres Besuchs',
    'ja': '訪問中のウェブサイト機能を有効にする',
    'ko': '방문하는 동안 웹사이트 기능 활성화',
    'pt': 'Habilitar a funcionalidade do site durante sua visita',
    'ru': 'Включение функциональности сайта во время вашего визита',
    'ar': 'تمكين وظائف الموقع أثناء زيارتك'
};

TRANSLATIONS['cookie.table.row1.duration'] = {
    'en': 'Deleted when you close your browser',
    'zh': '关闭浏览器时删除',
    'es': 'Eliminadas cuando cierra su navegador',
    'fr': 'Supprimés lorsque vous fermez votre navigateur',
    'de': 'Gelöscht, wenn Sie Ihren Browser schließen',
    'ja': 'ブラウザを閉じるときに削除される',
    'ko': '브라우저를 닫을 때 삭제됨',
    'pt': 'Excluídos quando você fecha o navegador',
    'ru': 'Удаляются при закрытии браузера',
    'ar': 'تحذف عند إغلاق المتصفح'
};

TRANSLATIONS['cookie.table.row2.type'] = {
    'en': 'Language Preference',
    'zh': '语言偏好',
    'es': 'Preferencia de idioma',
    'fr': 'Préférence linguistique',
    'de': 'Sprachpräferenz',
    'ja': '言語設定',
    'ko': '언어 선호도',
    'pt': 'Preferência de idioma',
    'ru': 'Предпочтение языка',
    'ar': 'تفضيل اللغة'
};

TRANSLATIONS['cookie.table.row2.purpose'] = {
    'en': 'Remember your selected language',
    'zh': '记住您选择的语言',
    'es': 'Recordar su idioma seleccionado',
    'fr': 'Mémoriser votre langue sélectionnée',
    'de': 'Merken Ihrer ausgewählten Sprache',
    'ja': '選択した言語を記憶する',
    'ko': '선택한 언어 기억',
    'pt': 'Lembrar seu idioma selecionado',
    'ru': 'Запоминание выбранного языка',
    'ar': 'تذكر لغتك المختارة'
};

TRANSLATIONS['cookie.table.row2.duration'] = {
    'en': '1 year',
    'zh': '1年',
    'es': '1 año',
    'fr': '1 an',
    'de': '1 Jahr',
    'ja': '1年',
    'ko': '1년',
    'pt': '1 ano',
    'ru': '1 год',
    'ar': 'سنة واحدة'
};

TRANSLATIONS['cookie.table.row3.type'] = {
    'en': 'Analytics',
    'zh': '分析',
    'es': 'Análisis',
    'fr': 'Analyse',
    'de': 'Analytik',
    'ja': '分析',
    'ko': '분석',
    'pt': 'Análise',
    'ru': 'Аналитика',
    'ar': 'تحليلات'
};

TRANSLATIONS['cookie.table.row3.purpose'] = {
    'en': 'Track website usage (if applicable)',
    'zh': '跟踪网站使用情况（如适用）',
    'es': 'Rastrear el uso del sitio (si aplica)',
    'fr': 'Suivre l\'utilisation du site (si applicable)',
    'de': 'Website-Nutzung verfolgen (falls zutreffend)',
    'ja': 'ウェブサイトの使用状況を追跡する（該当する場合）',
    'ko': '웹사이트 사용량 추적 (해당하는 경우)',
    'pt': 'Rastrear o uso do site (se aplicável)',
    'ru': 'Отслеживание использования сайта (если применимо)',
    'ar': 'تتبع استخدام الموقع (إن وجد)'
};

TRANSLATIONS['cookie.table.row3.duration'] = {
    'en': 'Varies',
    'zh': '各不相同',
    'es': 'Varía',
    'fr': 'Varie',
    'de': 'Variiert',
    'ja': '異なる',
    'ko': '다양함',
    'pt': 'Varia',
    'ru': 'Варьируется',
    'ar': 'يتفاوت'
};

TRANSLATIONS['cookie.section4.title'] = {
    'en': '4. Your Cookie Choices',
    'zh': '4. 您的Cookie选择',
    'es': '4. Sus opciones de cookies',
    'fr': '4. Vos choix de cookies',
    'de': '4. Ihre Cookie-Optionen',
    'ja': '4. Cookieの選択肢',
    'ko': '4. 쿠키 선택',
    'pt': '4. Suas opções de cookies',
    'ru': '4. Ваш выбор файлов cookie',
    'ar': '4. خيارات ملفات تعريف الارتباط الخاصة بك'
};

TRANSLATIONS['cookie.section4.text1'] = {
    'en': 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by modifying your browser settings. Most web browsers allow some control of most cookies through the browser settings.',
    'zh': '您有权决定是否接受或拒绝Cookie。您可以通过修改浏览器设置来行使您的Cookie偏好。大多数网络浏览器允许通过浏览器设置对某些Cookie进行一些控制。',
    'es': 'Usted tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies modificando la configuración de su navegador. La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la configuración del navegador.',
    'fr': 'Vous avez le droit de décider d\'accepter ou de refuser les cookies. Vous pouvez exercer vos préférences de cookies en modifiant les paramètres de votre navigateur. La plupart des navigateurs Web permettent un certain contrôle de la plupart des cookies via les paramètres du navigateur.',
    'de': 'Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihre Cookie-Präferenzen ausüben, indem Sie Ihre Browsereinstellungen ändern. Die meisten Webbrowser erlauben eine gewisse Kontrolle über die meisten Cookies über die Browsereinstellungen.',
    'ja': 'あなたは、Cookieを受け入れるか拒否するかを決定する権利があります。ブラウザの設定を変更することで、Cookieの設定を調整できます。ほとんどのウェブブラウザでは、ブラウザ設定を通じてCookieの一部を制御できます。',
    'ko': '귀하는 쿠키를 수락하거나 거부할지 결정할 권리가 있습니다. 브라우저 설정을 수정하여 쿠키 환경 설정을 변경할 수 있습니다. 대부분의 웹 브라우저는 브라우저 설정을 통해 대부분의 쿠키를 일부 제어할 수 있습니다.',
    'pt': 'Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer suas preferências de cookies modificando as configurações do seu navegador. A maioria dos navegadores permite algum controle da maioria dos cookies através das configurações do navegador.',
    'ru': 'Вы имеете право решить, принимать или отклонять файлы cookie. Вы можете изменить настройки файлов cookie, изменив настройки вашего браузера. Большинство веб-браузеров позволяют осуществлять определенный контроль над большинством файлов cookie через настройки браузера.',
    'ar': 'لديك الحق في أن تقرر ما إذا كنت تريد قبض ملفات تعريف الارتباط أو رفضها. يمكنك ممارسة تفضيلاتك الخاصة بملفات تعريف الارتباط عن طريق تعديل إعدادات متصفحك. تسمح معظم متصفحات الويب ببعض التحكم في معظم ملفات تعريف الارتباط من خلال إعدادات المتصفح.'
};

TRANSLATIONS['cookie.section4.text2'] = {
    'en': 'To find out more about cookies, including how to see what cookies have been set, visit www.allaboutcookies.org.',
    'zh': '要了解更多关于Cookie的信息，包括如何查看已设置的Cookie，请访问 www.allaboutcookies.org。',
    'es': 'Para obtener más información sobre las cookies, incluyendo cómo ver qué cookies se han configurado, visite www.allaboutcookies.org.',
    'fr': 'Pour en savoir plus sur les cookies, y compris comment voir quels cookies ont été définis, visitez www.allaboutcookies.org.',
    'de': 'Weitere Informationen über Cookies, einschließlich wie Sie sehen können, welche Cookies gesetzt wurden, finden Sie unter www.allaboutcookies.org.',
    'ja': 'Cookieの詳細（設定されているCookieの確認方法など）については、www.allaboutcookies.org をご覧ください。',
    'ko': '쿠키에 대한 자세한 정보(설정된 쿠키 확인 방법 포함)는 www.allaboutcookies.org를 방문하세요.',
    'pt': 'Para saber mais sobre cookies, incluindo como ver quais cookies foram definidos, visite www.allaboutcookies.org.',
    'ru': 'Чтобы узнать больше о файлах cookie, включая то, как посмотреть, какие файлы cookie были установлены, посетите www.allaboutcookies.org.',
    'ar': 'لمعرفة المزيد حول ملفات تعريف الارتباط، بما في ذلك كيفية رؤية ملفات تعريف الارتباط التي تم تعيينها، قم بزيارة www.allaboutcookies.org.'
};

TRANSLATIONS['cookie.section5.title'] = {
    'en': '5. Managing Cookies in Your Browser',
    'zh': '5. 在浏览器中管理Cookie',
    'es': '5. Gestionar cookies en su navegador',
    'fr': '5. Gérer les cookies dans votre navigateur',
    'de': '5. Cookies in Ihrem Browser verwalten',
    'ja': '5. ブラウザでのCookie管理',
    'ko': '5. 브라우저에서 쿠키 관리',
    'pt': '5. Gerenciando cookies em seu navegador',
    'ru': '5. Управление файлами cookie в вашем браузере',
    'ar': '5. إدارة ملفات تعريف الارتباط في متصفحك'
};

TRANSLATIONS['cookie.section5.text'] = {
    'en': 'Here are links to instructions for managing cookies in popular browsers:',
    'zh': '以下是流行浏览器中管理Cookie的说明链接：',
    'es': 'Aquí están los enlaces a las instrucciones para gestionar cookies en los navegadores más populares:',
    'fr': 'Voici les liens vers les instructions pour gérer les cookies dans les navigateurs populaires :',
    'de': 'Hier sind Links zu Anleitungen für die Verwaltung von Cookies in gängigen Browsern:',
    'ja': '人気のブラウザでCookieを管理するための手順へのリンクは以下の通りです：',
    'ko': '인기 있는 브라우저에서 쿠키를 관리하는 방법에 대한 안내 링크는 다음과 같습니다.',
    'pt': 'Aqui estão links para instruções sobre como gerenciar cookies em navegadores populares:',
    'ru': 'Вот ссылки на инструкции по управлению файлами cookie в популярных браузерах:',
    'ar': 'فيما يلي روابط إلى تعليمات إدارة ملفات تعريف الارتباط في المتصفحات الشائعة:'
};

TRANSLATIONS['cookie.section6.title'] = {
    'en': '6. Third-Party Cookies',
    'zh': '6. 第三方Cookie',
    'es': '6. Cookies de terceros',
    'fr': '6. Cookies tiers',
    'de': '6. Drittanbieter-Cookies',
    'ja': '6. 第三者Cookie',
    'ko': '6. 제3자 쿠키',
    'pt': '6. Cookies de terceiros',
    'ru': '6. Файлы cookie третьих сторон',
    'ar': '6. ملفات تعريف الارتباط من جهات خارجية'
};

TRANSLATIONS['cookie.section6.text'] = {
    'en': 'In some special cases, we also use cookies provided by trusted third parties. However, toolvx.com primarily operates as a client-side application, meaning most processing happens locally on your device without requiring extensive third-party services.',
    'zh': '在某些特殊情况下，我们也会使用受信任的第三方提供的Cookie。但是，toolvx.com主要作为客户端应用程序运行，这意味着大多数处理在您的设备上本地进行，无需大量第三方服务。',
    'es': 'En algunos casos especiales, también usamos cookies proporcionadas por terceros de confianza. Sin embargo, toolvx.com opera principalmente como una aplicación del lado del cliente, lo que significa que la mayoría del procesamiento ocurre localmente en su dispositivo sin requerir servicios extensos de terceros.',
    'fr': 'Dans certains cas particuliers, nous utilisons également des cookies fournis par des tiers de confiance. Cependant, toolvx.com fonctionne principalement comme une application côté client, ce qui signifie que la plupart du traitement se fait localement sur votre appareil sans nécessiter de services tiers étendus.',
    'de': 'In einigen Sonderfällen verwenden wir auch Cookies von vertrauenswürdigen Drittanbietern. Allerdings funktioniert toolvx.com hauptsächlich als Client-Anwendung, was bedeutet, dass die meiste Verarbeitung lokal auf Ihrem Gerät stattfindet, ohne umfangreiche Drittanbieterdienste zu benötigen.',
    'ja': '特別な場合には、信頼できる第三者が提供するCookieも使用します。ただし、toolvx.comは主にクライアント側アプリケーションとして動作しているため、ほとんどの処理はお客様のデバイス上でローカルに行われ、広範な第三者サービスは必要ありません。',
    'ko': '일부 특수한 경우, 신뢰할 수 있는 제3자가 제공하는 쿠키도 사용합니다. 그러나 toolvx.com은 주로 클라이언트 측 응용 프로그램으로 작동하므로 대부분의 처리는 장치에서 로컬로 이루어지며 광범위한 제3자 서비스가 필요하지 않습니다.',
    'pt': 'Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. No entanto, a toolvx.com opera principalmente como um aplicativo do lado do cliente, o que significa que a maior parte do processamento acontece localmente em seu dispositivo sem necessitar de serviços extensivos de terceiros.',
    'ru': 'В некоторых особых случаях мы также используем файлы cookie, предоставляемые доверенными третьими сторонами. Однако toolvx.com в основном работает как клиентское приложение, что означает, что большинство операций происходит локально на вашем устройстве без необходимости в обширных сторонних сервисах.',
    'ar': 'في بعض الحالات الخاصة، نستخدم أيضًا ملفات تعريف الارتباط التي توفرها جهات خارجية موثوقة. ومع ذلك، تعمل toolvx.com بشكل أساسي كتطبيق جانب العميل، مما يعني أن معظم المعالجة تحدث محليًا على جهازك دون الحاجة إلى خدمات طرف ثالث مكثفة.'
};

TRANSLATIONS['cookie.section7.title'] = {
    'en': '7. Updates to This Cookie Policy',
    'zh': '7. 本Cookie政策的更新',
    'es': '7. Actualizaciones a esta política de cookies',
    'fr': '7. Mises à jour de cette politique de cookies',
    'de': '7. Aktualisierungen dieser Cookie-Richtlinie',
    'ja': '7. 本Cookieポリシーの更新',
    'ko': '7. 본 쿠키 정책의 업데이트',
    'pt': '7. Atualizações a esta política de cookies',
    'ru': '7. Обновления настоящей политики использования файлов cookie',
    'ar': '7. تحديثات سياسة ملفات تعريف الارتباط هذه'
};

TRANSLATIONS['cookie.section7.text'] = {
    'en': 'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes will be posted on this page with an updated revision date.',
    'zh': '我们可能会不时更新本Cookie政策，以反映技术、法规或我们业务运营的变化。任何变更将在此页面上发布，并附有更新的修订日期。',
    'es': 'Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en la tecnología, la legislación o nuestras operaciones comerciales. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada.',
    'fr': 'Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter les changements dans la technologie, la législation ou nos opérations commerciales. Toute modification sera publiée sur cette page avec une date de révision mise à jour.',
    'de': 'Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in Technologie, Gesetzgebung oder unseren Geschäftsabläufen widerzuspiegeln. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.',
    'ja': '当社は、技術、法規制、または事業運営の変更を反映するために、本Cookieポリシーを随時更新することがあります。変更はすべて、更新された改訂日付とともに本ページに掲載されます。',
    'ko': '당사는 기술, 법규 또는 사업 운영의 변경을 반영하기 위해 본 쿠키 정책을 수시로 업데이트할 수 있습니다. 모든 변경 사항은 업데이트된 개정 날짜와 함께 이 페이지에 게시됩니다.',
    'pt': 'Podemos atualizar esta política de cookies de tempos em tempos para refletir mudanças na tecnologia, legislação ou em nossas operações comerciais. Quaisquer alterações serão publicadas nesta página com uma data de revisão atualizada.',
    'ru': 'Мы можем время от времени обновлять настоящую Политику использования файлов cookie, чтобы отразить изменения в технологиях, законодательстве или наших бизнес-процессах. Любые изменения будут опубликованы на этой странице с обновленной датой редакции.',
    'ar': 'قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر لتعكس التغييرات في التكنولوجيا أو التشريعات أو عملياتنا التجارية. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ مراجعة محدث.'
};

TRANSLATIONS['cookie.section8.title'] = {
    'en': '8. Contact Us',
    'zh': '8. 联系我们',
    'es': '8. Contáctenos',
    'fr': '8. Contactez-nous',
    'de': '8. Kontaktieren Sie uns',
    'ja': '8. お問い合わせ',
    'ko': '8. 문의하기',
    'pt': '8. Fale conosco',
    'ru': '8. Свяжитесь с нами',
    'ar': '8. اتصل بنا'
};

TRANSLATIONS['cookie.section8.text'] = {
    'en': 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at:',
    'zh': '如果您对我们的Cookie使用或本Cookie政策有任何疑问，请通过以下方式联系我们：',
    'es': 'Si tiene alguna pregunta sobre nuestro uso de cookies o esta política de cookies, por favor contáctenos en:',
    'fr': 'Si vous avez des questions concernant notre utilisation des cookies ou cette politique de cookies, veuillez nous contacter à :',
    'de': 'Wenn Sie Fragen zu unserer Verwendung von Cookies oder dieser Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:',
    'ja': 'Cookieの使用または本Cookieポリシーについてご質問がある場合は、以下までお問い合わせください：',
    'ko': '쿠키 사용 또는 본 쿠키 정책에 대해 궁금한 점이 있으시면 다음으로 연락해 주세요.',
    'pt': 'Se você tiver alguma dúvida sobre nosso uso de cookies ou esta política de cookies, entre em contato conosco em:',
    'ru': 'Если у вас есть вопросы о нашем использовании файлов cookie или настоящей Политике использования файлов cookie, пожалуйста, свяжитесь с нами по адресу:',
    'ar': 'إذا كانت لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط أو سياسة ملفات تعريف الارتباط هذه، يرجى التواصل معنا على:'
};

TRANSLATIONS['blog.newsletter.title'] = {
    'en': 'Stay Updated on Privacy & Security',
    'zh': '随时了解隐私与安全动态',
    'es': 'Manténgase Actualizado sobre Privacidad y Seguridad',
    'fr': 'Restez Informé sur la Confidentialité et la Sécurité',
    'de': 'Bleiben Sie auf dem Laufenden über Datenschutz und Sicherheit',
    'ja': 'プライバシーとセキュリティの最新情報を受け取る',
    'ko': '개인정보 보호 및 보안 업데이트 받기',
    'pt': 'Mantenha-se Atualizado sobre Privacidade e Segurança',
    'ru': 'Будьте в курсе конфиденциальности и безопасности',
    'ar': 'ابقَ على اطلاع بخصوصية والأمان'
};

TRANSLATIONS['blog.newsletter.subtitle'] = {
    'en': 'Get the latest tips and tutorials delivered to your inbox',
    'zh': '将最新的技巧和教程直接发送到您的收件箱',
    'es': 'Reciba los últimos consejos y tutoriales en su bandeja de entrada',
    'fr': 'Recevez les derniers conseils et tutoriels directement dans votre boîte de réception',
    'de': 'Erhalten Sie die neuesten Tipps und Tutorials direkt in Ihren Posteingang',
    'ja': '最新のヒントとチュートリアルを受信箱に直接届けます',
    'ko': '최신 팁과 튜토리얼을 받아보세요',
    'pt': 'Receba as dicas e tutoriais mais recentes diretamente na sua caixa de entrada',
    'ru': 'Получайте последние советы и учебные пособия прямо в свой почтовый ящик',
    'ar': 'احصل على أحدث النصائح والدروس التعليمية مباشرة إلى صندوق بريدك'
};

TRANSLATIONS['blog.newsletter.placeholder'] = {
    'en': 'Enter your email',
    'zh': '输入您的电子邮件',
    'es': 'Introduzca su correo electrónico',
    'fr': 'Entrez votre e-mail',
    'de': 'Geben Sie Ihre E-Mail-Adresse ein',
    'ja': 'メールアドレスを入力してください',
    'ko': '이메일을 입력하세요',
    'pt': 'Digite seu e-mail',
    'ru': 'Введите ваш email',
    'ar': 'أدخل بريدك الإلكتروني'
};

TRANSLATIONS['blog.newsletter.button'] = {
    'en': 'Subscribe',
    'zh': '订阅',
    'es': 'Suscribirse',
    'fr': 'S\'abonner',
    'de': 'Abonnieren',
    'ja': '購読する',
    'ko': '구독하기',
    'pt': 'Inscrever-se',
    'ru': 'Подписаться',
    'ar': 'اشترك'
};

TRANSLATIONS['blog.newsletter.note'] = {
    'en': 'No spam. Unsubscribe anytime. 🔒',
    'zh': '无垃圾邮件。随时取消订阅。🔒',
    'es': 'Sin spam. Cancele la suscripción en cualquier momento. 🔒',
    'fr': 'Pas de spam. Désabonnez-vous à tout moment. 🔒',
    'de': 'Kein Spam. Jederzeit kündbar. 🔒',
    'ja': 'スパムなし。いつでも解除できます。🔒',
    'ko': '스팸 없음. 언제든지 구독 해지 가능합니다. 🔒',
    'pt': 'Sem spam. Cancele a inscrição a qualquer momento. 🔒',
    'ru': 'Без спама. Отписка в любое время. 🔒',
    'ar': 'لا يوجد بريد مزعج. يمكنك إلغاء الاشتراك في أي وقت. 🔒'
};

TRANSLATIONS['blog.featured.badge'] = {
    'en': '🔥 Featured',
    'zh': '🔥 精选',
    'es': '🔥 Destacado',
    'fr': '🔲 À la une',
    'de': '🔥 Empfohlen',
    'ja': '🔥 注目',
    'ko': '🔥 추천',
    'pt': '🔥 Destaque',
    'ru': '🔥 Рекомендуем',
    'ar': '🔥 مميز'
};

TRANSLATIONS['blog.featured.category'] = {
    'en': 'Privacy Guide',
    'zh': '隐私指南',
    'es': 'Guía de Privacidad',
    'fr': 'Guide de confidentialité',
    'de': 'Datenschutzleitfaden',
    'ja': 'プライバシーガイド',
    'ko': '개인정보 보호 가이드',
    'pt': 'Guia de Privacidade',
    'ru': 'Руководство по конфиденциальности',
    'ar': 'دليل الخصوصية'
};

TRANSLATIONS['blog.featured.readTime'] = {
    'en': '8 min read',
    'zh': '8分钟阅读',
    'es': '8 min de lectura',
    'fr': '8 min de lecture',
    'de': '8 Min. Lesezeit',
    'ja': '8分で読めます',
    'ko': '8분 읽기',
    'pt': '8 min de leitura',
    'ru': '8 мин чтения',
    'ar': '8 دقائق للقراءة'
};

TRANSLATIONS['blog.featured.title'] = {
    'en': 'How to Blur Faces in Photos: The Complete Guide for 2026',
    'zh': '如何在照片中模糊面部：2026年完整指南',
    'es': 'Cómo difuminar caras en fotos: la guía completa para 2026',
    'fr': 'Comment flouter les visages sur les photos : le guide complet pour 2026',
    'de': 'So verwischen Sie Gesichter in Fotos: Der komplette Leitfaden für 2026',
    'ja': '写真で顔をぼかす方法：2026年完全ガイド',
    'ko': '사진에서 얼굴을 흐리게 하는 방법: 2026년 완벽 가이드',
    'pt': 'Como desfocar rostos em fotos: o guia completo para 2026',
    'ru': 'Как размыть лица на фотографиях: полное руководство на 2026 год',
    'ar': 'كيفية تمويه الوجوه في الصور: الدليل الكامل لعام 2026'
};

TRANSLATIONS['blog.featured.desc'] = {
    'en': 'Learn proven techniques to protect privacy and identities in your images. Step-by-step instructions for beginners and professionals.',
    'zh': '学习经过验证的技术来保护您图像中的隐私和身份。适合初学者和专业人士的分步说明。',
    'es': 'Aprenda técnicas comprobadas para proteger la privacidad y las identidades en sus imágenes. Instrucciones paso a paso para principiantes y profesionales.',
    'fr': 'Apprenez des techniques éprouvées pour protéger la confidentialité et les identités dans vos images. Instructions étape par étape pour débutants et professionnels.',
    'de': 'Lernen Sie bewährte Techniken zum Schutz von Privatsphäre und Identitäten in Ihren Bildern. Schritt-für-Schritt-Anleitungen für Anfänger und Profis.',
    'ja': '画像内のプライバシーと身元を保護する実証済みの技術を学びましょう。初心者と専門家向けのステップバイステップの手順。',
    'ko': '이미지에서 개인정보와 신원을 보호하는 검증된 기술을 배우세요. 초보자와 전문가를 위한 단계별 안내입니다.',
    'pt': 'Aprenda técnicas comprovadas para proteger a privacidade e as identidades em suas imagens. Instruções passo a passo para iniciantes e profissionais.',
    'ru': 'Изучите проверенные техники для защиты конфиденциальности и личностей на ваших изображениях. Пошаговые инструкции для новичков и профессионалов.',
    'ar': 'تعلم تقنيات مجربة لحماية الخصوصية والهويات في صورك. تعليمات خطوة بخطوة للمبتدئين والمحترفين.'
};

TRANSLATIONS['blog.featured.readMore'] = {
    'en': 'Read Full Article',
    'zh': '阅读完整文章',
    'es': 'Leer Artículo Completo',
    'fr': 'Lire l\'article complet',
    'de': 'Vollständigen Artikel lesen',
    'ja': '記事を全文読む',
    'ko': '전체 기사 읽기',
    'pt': 'Leia o Artigo Completo',
    'ru': 'Читать полную статью',
    'ar': 'اقرأ المقال كاملاً'
};

TRANSLATIONS['blog.featured.readMore'] = {
    'en': 'Read Full Article',
    'zh': '阅读完整文章',
    'es': 'Leer Artículo Completo',
    'fr': 'Lire l\'article complet',
    'de': 'Vollständigen Artikel lesen',
    'ja': '記事を全文読む',
    'ko': '전체 기사 읽기',
    'pt': 'Leia o Artigo Completo',
    'ru': 'Читать полную статью',
    'ar': 'اقرأ المقال كاملاً'
};

TRANSLATIONS['blog.latestArticles'] = {
    'en': 'Latest Articles',
    'zh': '最新文章',
    'es': 'Artículos Recientes',
    'fr': 'Derniers Articles',
    'de': 'Neueste Artikel',
    'ja': '最新記事',
    'ko': '최신 기사',
    'pt': 'Artigos Recentes',
    'ru': 'Последние статьи',
    'ar': 'أحدث المقالات'
};

TRANSLATIONS['blog.cat.all'] = {
    'en': '📚 All',
    'zh': '📚 全部',
    'es': '📚 Todos',
    'fr': '📚 Tous',
    'de': '📚 Alle',
    'ja': '📚 すべて',
    'ko': '📚 전체',
    'pt': '📚 Todos',
    'ru': '📚 Все',
    'ar': '📚 الكل'
};

TRANSLATIONS['blog.cat.privacy'] = {
    'en': '🔒 Privacy',
    'zh': '🔒 隐私',
    'es': '🔒 Privacidad',
    'fr': '🔒 Confidentialité',
    'de': '🔒 Privatsphäre',
    'ja': '🔒 プライバシー',
    'ko': '🔒 개인정보',
    'pt': '🔒 Privacidade',
    'ru': '🔒 Конфиденциальность',
    'ar': '🔒 الخصوصية'
};

TRANSLATIONS['blog.cat.security'] = {
    'en': '🛡️ Security',
    'zh': '🛡️ 安全',
    'es': '🛡️ Seguridad',
    'fr': '🛡️ Sécurité',
    'de': '🛡️ Sicherheit',
    'ja': '🛡️ セキュリティ',
    'ko': '🛡️ 보안',
    'pt': '🛡️ Segurança',
    'ru': '🛡️ Безопасность',
    'ar': '🛡️ الأمان'
};

TRANSLATIONS['blog.cat.tutorial'] = {
    'en': '🎓 Tutorial',
    'zh': '🎓 教程',
    'es': '🎓 Tutorial',
    'fr': '🎓 Tutoriel',
    'de': '🎓 Tutorial',
    'ja': '🎓 チュートリアル',
    'ko': '🎓 튜토리얼',
    'pt': '🎓 Tutorial',
    'ru': '🎓 Руководство',
    'ar': '🎓 درس تعليمي'
};

TRANSLATIONS['blog.cat.business'] = {
    'en': '💼 Business',
    'zh': '💼 商业',
    'es': '💼 Negocios',
    'fr': '💼 Affaires',
    'de': '💼 Geschäft',
    'ja': '💼 ビジネス',
    'ko': '💼 비즈니스',
    'pt': '💼 Negócios',
    'ru': '💼 Бизнес',
    'ar': '💼 الأعمال'
};

TRANSLATIONS['blog.readMore'] = {
    'en': 'Read More →',
    'zh': '阅读更多 →',
    'es': 'Leer Más →',
    'fr': 'Lire Plus →',
    'de': 'Mehr Lesen →',
    'ja': 'もっと読む →',
    'ko': '더 읽기 →',
    'pt': 'Leia Mais →',
    'ru': 'Читать Далее →',
    'ar': 'اقرأ المزيد →'
};

// Blog Card 1
TRANSLATIONS['blog.card1.tag'] = {
    'en': 'Social Media', 'zh': '社交媒体', 'es': 'Redes Sociales', 'fr': 'Médias Sociaux',
    'de': 'Soziale Medien', 'ja': 'ソーシャルメディア', 'ko': '소셜 미디어', 'pt': 'Mídias Sociais',
    'ru': 'Социальные сети', 'ar': 'وسائل التواصل الاجتماعي'
};
TRANSLATIONS['blog.card1.time'] = {
    'en': '10 min', 'zh': '10分钟', 'es': '10 min', 'fr': '10 min', 'de': '10 Min.', 'ja': '10分',
    'ko': '10분', 'pt': '10 min', 'ru': '10 мин', 'ar': '10 دقيقة'
};
TRANSLATIONS['blog.card1.title'] = {
    'en': 'Complete Social Media Privacy Guide for 2026',
    'zh': '2026年完整社交媒体隐私指南',
    'es': 'Guía Completa de Privacidad en Redes Sociales para 2026',
    'fr': 'Guide Complet de Confidentialité sur les Médias Sociaux pour 2026',
    'de': 'Vollständiger Datenschutzleitfaden für Soziale Medien 2026',
    'ja': '2026年ソーシャルメディアプライバシー完全ガイド',
    'ko': '2026년 소셜 미디어 개인정보 보호 완벽 가이드',
    'pt': 'Guia Completo de Privacidade em Mídias Sociais para 2026',
    'ru': 'Полное руководство по конфиденциальности в социальных сетях на 2026 год',
    'ar': 'دليل كامل لخصوصية وسائل التواصل الاجتماعي لعام 2026'
};
TRANSLATIONS['blog.card1.desc'] = {
    'en': 'Protect your personal information across all social platforms. Essential settings and safe sharing practices.',
    'zh': '在所有社交平台上保护您的个人信息。基本设置和安全分享实践。',
    'es': 'Proteja su información personal en todas las plataformas sociales. Configuraciones esenciales y prácticas de uso seguro.',
    'fr': 'Protégez vos informations personnelles sur toutes les plateformes sociales. Paramètres essentiels et pratiques de partage sécurisées.',
    'de': 'Schützen Sie Ihre persönlichen Informationen auf allen sozialen Plattformen. Wichtige Einstellungen und sichere Austauschpraktiken.',
    'ja': 'すべてのソーシャルプラットフォームで個人情報を保護します。必須の設定と安全な共有の実践。',
    'ko': '모든 소셜 플랫폼에서 개인정보를 보호하세요. 필수 설정 및 안전한 공유 관행.',
    'pt': 'Proteja suas informações pessoais em todas as plataformas sociais. Configurações essenciais e práticas de compartilhamento seguro.',
    'ru': 'Защитите свою личную информацию на всех социальных платформах. Основные настройки и безопасные практики обмена.',
    'ar': 'حماية معلوماتك الشخصية عبر جميع منصات التواصل الاجتماعي. الإعدادات الأساسية وممارسات المشاركة الآمنة.'
};

// Blog Card 2
TRANSLATIONS['blog.card2.tag'] = {
    'en': 'Legal', 'zh': '法律', 'es': 'Legal', 'fr': 'Juridique', 'de': 'Rechtlich', 'ja': '法律',
    'ko': '법률', 'pt': 'Legal', 'ru': 'Юридический', 'ar': 'قانوني'
};
TRANSLATIONS['blog.card2.time'] = {
    'en': '7 min', 'zh': '7分钟', 'es': '7 min', 'fr': '7 min', 'de': '7 Min.', 'ja': '7分',
    'ko': '7분', 'pt': '7 min', 'ru': '7 мин', 'ar': '7 دقائق'
};
TRANSLATIONS['blog.card2.title'] = {
    'en': 'GDPR Compliance for Images: Complete Legal Guide',
    'zh': '图像GDPR合规性：完整法律指南',
    'es': 'Cumplimiento del GDPR para Imágenes: Guía Legal Completa',
    'fr': 'Conformité au RGPD pour les Images : Guide Juridique Complet',
    'de': 'DSGVO-Konformität für Bilder: Vollständiger Rechtsleitfaden',
    'ja': '画像のGDPRコンプライアンス：完全な法律ガイド',
    'ko': '이미지 GDPR 준수: 완전한 법률 가이드',
    'pt': 'Conformidade com o GDPR para Imagens: Guia Jurídico Completo',
    'ru': 'Соблюдение GDPR для изображений: полное юридическое руководство',
    'ar': 'الامتثال لـ GDPR للصور: دليل قانوني كامل'
};
TRANSLATIONS['blog.card2.desc'] = {
    'en': 'Understanding your legal obligations when publishing photos in the EU. Consent requirements and compliance steps.',
    'zh': '了解在欧盟发布照片时的法律义务。同意要求和合规步骤。',
    'es': 'Comprenda sus obligaciones legales al publicar fotos en la UE. Requisitos de consentimiento y pasos de cumplimiento.',
    'fr': 'Comprenez vos obligations légales lors de la publication de photos dans l\'UE. Exigences de consentement et étapes de conformité.',
    'de': 'Verstehen Sie Ihre rechtlichen Verpflichtungen bei der Veröffentlichung von Fotos in der EU. Zustimmungsanforderungen und Compliance-Schritte.',
    'ja': 'EU内で写真を公開する際の法的義務を理解する。同意要件とコンプライアンス手順。',
    'ko': 'EU에서 사진을 게시할 때의 법적 의무를 이해하세요. 동의 요구 사항 및 준수 단계.',
    'pt': 'Entenda suas obrigações legais ao publicar fotos na UE. Requisitos de consentimento e etapas de conformidade.',
    'ru': 'Поймите свои юридические обязательства при публикации фотографий в ЕС. Требования к согласию и шаги по соблюдению.',
    'ar': 'فهم التزاماتك القانونية عند نشر الصور في الاتحاد الأوروبي. متطلبات الموافقة وخطوات الامتثال.'
};

// Blog Card 3
TRANSLATIONS['blog.card3.tag'] = {
    'en': 'Tutorial', 'zh': '教程', 'es': 'Tutorial', 'fr': 'Tutoriel', 'de': 'Tutorial', 'ja': 'チュートリアル',
    'ko': '튜토리얼', 'pt': 'Tutorial', 'ru': 'Руководство', 'ar': 'درس تعليمي'
};
TRANSLATIONS['blog.card3.time'] = {
    'en': '6 min', 'zh': '6分钟', 'es': '6 min', 'fr': '6 min', 'de': '6 Min.', 'ja': '6分',
    'ko': '6분', 'pt': '6 min', 'ru': '6 мин', 'ar': '6 دقائق'
};
TRANSLATIONS['blog.card3.title'] = {
    'en': 'Screenshot Privacy Protection: Essential Guide',
    'zh': '截图隐私保护：基本指南',
    'es': 'Protección de Privacidad de Capturas de Pantalla: Guía Esencial',
    'fr': 'Protection de la Confidentialité des Captures d\'Écran : Guide Essentiel',
    'de': 'Screenshot-Datenschutz: Wesentlicher Leitfaden',
    'ja': 'スクリーンショットプライバシー保護：基本ガイド',
    'ko': '스크린샷 개인정보 보호: 필수 가이드',
    'pt': 'Proteção de Privacidade de Capturas de Tela: Guia Essencial',
    'ru': 'Защита конфиденциальности скриншотов: основное руководство',
    'ar': 'حماية خصوصية لقطات الشاشة: دليل أساسي'
};
TRANSLATIONS['blog.card3.desc'] = {
    'en': 'Never expose sensitive information in screenshots again. Quick tutorial on safe screenshot sharing.',
    'zh': '再也不在截图中暴露敏感信息。安全截图分享快速教程。',
    'es': 'Nunca más exponga información sensible en capturas de pantalla. Tutorial rápido sobre uso seguro de capturas de pantalla.',
    'fr': 'N\'exposez plus jamais d\'informations sensibles dans les captures d\'écran. Tutoriel rapide sur le partage sécurisé de captures d\'écran.',
    'de': 'Decken Sie niemals wieder sensible Informationen in Screenshots auf. Kurzanleitung zum sicheren Teilen von Screenshots.',
    'ja': 'スクリーンショットで機密情報を露出させないようにする。安全なスクリーンショット共有のクイックチュートリアル。',
    'ko': '스크린샷에서 민감한 정보를 노출하지 마세요. 안전한 스크린샷 공유에 대한 빠른 튜토리얼입니다.',
    'pt': 'Nunca mais exponha informações sensíveis em capturas de tela. Tutorial rápido sobre compartilhamento seguro de capturas de tela.',
    'ru': 'Никогда больше не раскрывайте конфиденциальную информацию на скриншотах. Краткий учебник по безопасному обмену скриншотами.',
    'ar': 'لا تعرض معلومات حساسة في لقطات الشاشة مرة أخرى. درس تعليمي سريع حول مشاركة لقطات الشاشة بأمان.'
};

// Blog Card 4
TRANSLATIONS['blog.card4.tag'] = {
    'en': 'Tools', 'zh': '工具', 'es': 'Herramientas', 'fr': 'Outils', 'de': 'Tools', 'ja': 'ツール',
    'ko': '도구', 'pt': 'Ferramentas', 'ru': 'Инструменты', 'ar': 'الأدوات'
};
TRANSLATIONS['blog.card4.time'] = {
    'en': '8 min', 'zh': '8分钟', 'es': '8 min', 'fr': '8 min', 'de': '8 Min.', 'ja': '8分',
    'ko': '8분', 'pt': '8 min', 'ru': '8 мин', 'ar': '8 دقائق'
};
TRANSLATIONS['blog.card4.title'] = {
    'en': 'Best Free PDF Redaction Tools in 2026',
    'zh': '2026年最佳免费PDF脱敏工具',
    'es': 'Mejores Herramientas Gratuitas de Redacción de PDF en 2026',
    'fr': 'Meilleurs Outils de Rédaction PDF Gratuits en 2026',
    'de': 'Beste kostenlose PDF-Redaktionstools 2026',
    'ja': '2026年のベスト無料PDF編集ツール',
    'ko': '2026년 최고의 무료 PDF 편집 도구',
    'pt': 'Melhores Ferramentas Gratuitas de Redação de PDF em 2026',
    'ru': 'Лучшие бесплатные инструменты редактирования PDF в 2026 году',
    'ar': 'أفضل أدوات تحرير PDF المجانية لعام 2026'
};
TRANSLATIONS['blog.card4.desc'] = {
    'en': 'Compare top-rated tools for securely hiding sensitive information in PDF documents.',
    'zh': '比较用于在PDF文档中安全隐藏敏感信息的顶级工具。',
    'es': 'Compare herramientas mejor calificadas para ocultar información sensible en documentos PDF de forma segura.',
    'fr': 'Comparez les outils les mieux notés pour masquer en toute sécurité les informations sensibles dans les documents PDF.',
    'de': 'Vergleichen Sie die bestbewerteten Tools zum sicheren Verbergen sensibler Informationen in PDF-Dokumenten.',
    'ja': 'PDFドキュメント内の機密情報を安全に隠すための高評価ツールを比較します。',
    'ko': 'PDF 문서에서 민감한 정보를 안전하게 숨기는 최고의 도구를 비교하세요.',
    'pt': 'Compare ferramentas mais bem avaliadas para ocultar com segurança informações sensíveis em documentos PDF.',
    'ru': 'Сравните лучшие инструменты для безопасного скрытия конфиденциальной информации в документах PDF.',
    'ar': 'قارن بين الأدوات الأعلى تقييمًا لإخفاء المعلومات الحساسة بأمان في مستندات PDF.'
};

// Blog Card 5
TRANSLATIONS['blog.card5.tag'] = {
    'en': 'Identity', 'zh': '身份', 'es': 'Identidad', 'fr': 'Identité', 'de': 'Identität', 'ja': '身元',
    'ko': '신원', 'pt': 'Identidade', 'ru': 'Идентификация', 'ar': 'الهوية'
};
TRANSLATIONS['blog.card5.time'] = {
    'en': '9 min', 'zh': '9分钟', 'es': '9 min', 'fr': '9 min', 'de': '9 Min.', 'ja': '9分',
    'ko': '9분', 'pt': '9 min', 'ru': '9 мин', 'ar': '9 دقائق'
};
TRANSLATIONS['blog.card5.title'] = {
    'en': 'How to Protect Your Identity Online in 2026',
    'zh': '2026年如何保护您的在线身份',
    'es': 'Cómo Proteger su Identidad en Línea en 2026',
    'fr': 'Comment Protéger Votre Identité en Ligne en 2026',
    'de': 'So Schützen Sie Ihre Online-Identität 2026',
    'ja': '2026年にオンラインの身元を保護する方法',
    'ko': '2026년에 온라인 신원을 보호하는 방법',
    'pt': 'Como Proteger sua Identidade Online em 2026',
    'ru': 'Как защитить свою личность в Интернете в 2026 году',
    'ar': 'كيفية حماية هويتك عبر الإنترنت في عام 2026'
};
TRANSLATIONS['blog.card5.desc'] = {
    'en': 'Essential strategies for maintaining privacy in the digital age. Anonymize photos and secure documents.',
    'zh': '在数字时代保持隐私的基本策略。匿名化照片并保护文档。',
    'es': 'Estrategias esenciales para mantener la privacidad en la era digital. Anonimice fotos y asegure documentos.',
    'fr': 'Stratégies essentielles pour maintenir la confidentialité à l\'ère numérique. Anonymisez les photos et sécurisez les documents.',
    'de': 'Wesentliche Strategien zum Aufrechterhalten der Privatsphäre im digitalen Zeitalter. Anonymisieren Sie Fotos und sichern Sie Dokumente.',
    'ja': 'デジタル時代にプライバシーを維持するための不可欠な戦略。写真を匿名化し、文書を保護します。',
    'ko': '디지털 시대에 개인정보를 유지하는 필수 전략입니다. 사진을 익명화하고 문서를 보호하세요.',
    'pt': 'Estratégias essenciais para manter a privacidade na era digital. Anonimize fotos e proteja documentos.',
    'ru': 'Необходимые стратегии для поддержания конфиденциальности в цифровую эпоху. Анонимизируйте фотографии и защитите документы.',
    'ar': 'استراتيجيات أساسية للحفاظ على الخصوصية في العصر الرقمي. قم بإخفاء هوية الصور وتأمين المستندات.'
};

// Blog Card 6
TRANSLATIONS['blog.card6.tag'] = {
    'en': 'Business', 'zh': '商业', 'es': 'Negocios', 'fr': 'Affaires', 'de': 'Geschäft', 'ja': 'ビジネス',
    'ko': '비즈니스', 'pt': 'Negócios', 'ru': 'Бизнес', 'ar': 'الأعمال'
};
TRANSLATIONS['blog.card6.time'] = {
    'en': '7 min', 'zh': '7分钟', 'es': '7 min', 'fr': '7 min', 'de': '7 Min.', 'ja': '7分',
    'ko': '7분', 'pt': '7 min', 'ru': '7 мин', 'ar': '7 دقائق'
};
TRANSLATIONS['blog.card6.title'] = {
    'en': 'Business Document Security: Best Practices',
    'zh': '商业文档安全：最佳实践',
    'es': 'Seguridad de Documentos Empresariales: Mejores Prácticas',
    'fr': 'Sécurité des Documents Commerciaux : Meilleures Pratiques',
    'de': 'Geschäftsdokumentensicherheit: Best Practices',
    'ja': 'ビジネス文書セキュリティ：ベストプラクティス',
    'ko': '비즈니스 문서 보안: 모범 사례',
    'pt': 'Segurança de Documentos Empresariais: Melhores Práticas',
    'ru': 'Безопасность бизнес-документов: лучшие практики',
    'ar': 'أمان مستندات الأعمال: أفضل الممارسات'
};
TRANSLATIONS['blog.card6.desc'] = {
    'en': 'Protect confidential information and prevent costly data breaches in your organization.',
    'zh': '保护机密信息并防止组织内代价高昂的数据泄露。',
    'es': 'Proteja información confidencial y evite filtraciones de datos costosas en su organización.',
    'fr': 'Protégez les informations confidentielles et évitez les violations de données coûteuses dans votre organisation.',
    'de': 'Schützen Sie vertrauliche Informationen und verhindern Sie kostspielige Datenschutzverletzungen in Ihrer Organisation.',
    'ja': '機密情報を保護し、組織内の高価なデータ侵害を防ぎます。',
    'ko': '기밀 정보를 보호하고 조직 내 비용이 많이 드는 데이터 유출을 방지하세요.',
    'pt': 'Proteja informações confidenciais e evite violações de dados custosas em sua organização.',
    'ru': 'Защитите конфиденциальную информацию и предотвратите дорогостоящие утечки данных в вашей организации.',
    'ar': 'حماية المعلومات السرية ومنع تسرب البيانات المكلفة في مؤسستك.'
};

// Blog Card 7
TRANSLATIONS['blog.card7.tag'] = {
    'en': 'Finance', 'zh': '金融', 'es': 'Finanzas', 'fr': 'Finance', 'de': 'Finanzen', 'ja': '金融',
    'ko': '금융', 'pt': 'Finanças', 'ru': 'Финансы', 'ar': 'المالية'
};
TRANSLATIONS['blog.card7.time'] = {
    'en': '6 min', 'zh': '6分钟', 'es': '6 min', 'fr': '6 min', 'de': '6 Min.', 'ja': '6分',
    'ko': '6분', 'pt': '6 min', 'ru': '6 мин', 'ar': '6 دقائق'
};
TRANSLATIONS['blog.card7.title'] = {
    'en': 'How to Redact Bank Statements Securely',
    'zh': '如何安全地脱敏银行对账单',
    'es': 'Cómo Redactar Estados Bancarios de Forma Segura',
    'fr': 'Comment Rédiger des Relevés Bancaires en Toute Sécurité',
    'de': 'So Redaktieren Sie Kontoauszüge Sicher',
    'ja': '銀行取引明細書を安全に編集する方法',
    'ko': '은행 거래 내역서를 안전하게 편집하는 방법',
    'pt': 'Como Redigir Extratos Bancários com Segurança',
    'ru': 'Как безопасно редактировать банковские выписки',
    'ar': 'كيفية تحرير كشوفات البنك بأمان'
};
TRANSLATIONS['blog.card7.desc'] = {
    'en': 'Protect your financial privacy when sharing banking documents. What to hide and what to show.',
    'zh': '共享银行文件时保护您的财务隐私。该隐藏什么，该显示什么。',
    'es': 'Proteja su privacidad financiera al compartir documentos bancarios. Qué ocultar y qué mostrar.',
    'fr': 'Protégez votre confidentialité financière lors du partage de documents bancaires. Que masquer et que montrer.',
    'de': 'Schützen Sie Ihre finanzielle Privatsphäre beim Teilen von Bankdokumenten. Was verbergen und was zeigen.',
    'ja': '銀行書類を共有する際の財務プライバシーを保護します。何を隠し、何を表示するか。',
    'ko': '은행 문서를 공유할 때 재무 개인정보를 보호하세요. 무엇을 숨기고 무엇을 보여줄지.',
    'pt': 'Proteja sua privacidade financeira ao compartilhar documentos bancários. O que ocultar e o que mostrar.',
    'ru': 'Защитите свою финансовую конфиденциальность при обмене банковскими документами. Что скрыть и что показать.',
    'ar': 'حماية خصوصيتك المالية عند مشاركة المستندات المصرفية. ما يجب إخفاؤه وما يجب عرضه.'
};

// Blog Card 8
TRANSLATIONS['blog.card8.tag'] = {
    'en': 'Security', 'zh': '安全', 'es': 'Seguridad', 'fr': 'Sécurité', 'de': 'Sicherheit', 'ja': 'セキュリティ',
    'ko': '보안', 'pt': 'Segurança', 'ru': 'Безопасность', 'ar': 'الأمان'
};
TRANSLATIONS['blog.card8.time'] = {
    'en': '5 min', 'zh': '5分钟', 'es': '5 min', 'fr': '5 min', 'de': '5 Min.', 'ja': '5分',
    'ko': '5분', 'pt': '5 min', 'ru': '5 мин', 'ar': '5 دقائق'
};
TRANSLATIONS['blog.card8.title'] = {
    'en': 'Mask Credit Card Numbers in Images',
    'zh': '在图像中隐藏信用卡号码',
    'es': 'Ocultar Números de Tarjetas de Crédito en Imágenes',
    'fr': 'Masquer les Numéros de Carte de Crédit dans les Images',
    'de': 'Kreditkartennummern in Bildern Maskieren',
    'ja': '画像内のクレジットカード番号を隠す',
    'ko': '이미지에서 신용카드 번호 가리기',
    'pt': 'Ocultar Números de Cartão de Crédito em Imagens',
    'ru': 'Скрыть номера кредитных карт на изображениях',
    'ar': 'إخفاء أرقام بطاقات الائتمان في الصور'
};
TRANSLATIONS['blog.card8.desc'] = {
    'en': 'Prevent fraud by properly hiding payment information in photos before sharing online.',
    'zh': '在在线共享之前，通过正确隐藏照片中的支付信息来防止欺诈。',
    'es': 'Prevenga el fraude ocultando correctamente la información de pago en las fotos antes de compartirlas en línea.',
    'fr': 'Prévenez la fraude en masquant correctement les informations de paiement dans les photos avant de les partager en ligne.',
    'de': 'Verhindern Sie Betrug, indem Sie Zahlungsinformationen in Fotos ordnungsgemäß verbergen, bevor Sie sie online teilen.',
    'ja': 'オンラインで共有する前に、写真内の支払い情報を適切に隠すことで詐欺を防ぎます。',
    'ko': '온라인으로 공유하기 전에 사진 내 결제 정보를 올바르게 숨겨 사기를 방지하세요.',
    'pt': 'Evite fraudas ocultando corretamente as informações de pagamento nas fotos antes de compartilhar online.',
    'ru': 'Предотвратите мошенничество, правильно скрывая платежную информацию на фотографиях перед публикацией в Интернете.',
    'ar': 'منع الاحتيال عن طريق إخفاء معلومات الدفع بشكل صحيح في الصور قبل مشاركتها عبر الإنترنت.'
};

// Blog Card 9
TRANSLATIONS['blog.card9.tag'] = {
    'en': 'Journalism', 'zh': '新闻', 'es': 'Periodismo', 'fr': 'Journalisme', 'de': 'Journalismus', 'ja': 'ジャーナリズム',
    'ko': '저널리즘', 'pt': 'Jornalismo', 'ru': 'Журналистика', 'ar': 'الصحافة'
};
TRANSLATIONS['blog.card9.time'] = {
    'en': '8 min', 'zh': '8分钟', 'es': '8 min', 'fr': '8 min', 'de': '8 Min.', 'ja': '8分',
    'ko': '8분', 'pt': '8 min', 'ru': '8 мин', 'ar': '8 دقائق'
};
TRANSLATIONS['blog.card9.title'] = {
    'en': 'Photo Anonymization for Journalists',
    'zh': '记者的照片匿名化',
    'es': 'Anonimización de Fotos para Periodistas',
    'fr': 'Anonymisation des Photos pour Journalistes',
    'de': 'Foto-Anonymisierung für Journalisten',
    'ja': 'ジャーナリスト向け写真の匿名化',
    'ko': '기자를 위한 사진 익명화',
    'pt': 'Anonimização de Fotos para Jornalistas',
    'ru': 'Анонимизация фотографий для журналистов',
    'ar': 'إخفاء هوية الصور للصحفيين'
};
TRANSLATIONS['blog.card9.desc'] = {
    'en': 'Protect your sources and maintain journalistic integrity with proper anonymization techniques.',
    'zh': '通过适当的匿名化技术保护您的消息来源并维护新闻诚信。',
    'es': 'Proteja sus fuentes y mantenga la integridad periodística con técnicas de anonimización adecuadas.',
    'fr': 'Protégez vos sources et maintenez l\'intégrité journalistique avec des techniques d\'anonymisation appropriées.',
    'de': 'Schützen Sie Ihre Quellen und wahren Sie die journalistische Integrität mit ordnungsgemäßen Anonymisierungstechniken.',
    'ja': '適切な匿名化技術を使用して、情報源を保護し、ジャーナリストの誠実性を維持します。',
    'ko': '적절한 익명화 기술로 출처를 보호하고 언론인의 무결성을 유지하세요.',
    'pt': 'Proteja suas fontes e mantenha a integridade jornalística com técnicas de anonimização adequadas.',
    'ru': 'Защитите свои источники и сохраните журналистскую этику с помощью правильных техник анонимизации.',
    'ar': 'حماية مصادرك والحفاظ على نزاهة العمل الصحفي باستخدام تقنيات إخفاء الهوية المناسبة.'
};

// Blog Card 10
TRANSLATIONS['blog.card10.tag'] = {
    'en': 'Comparison', 'zh': '比较', 'es': 'Comparación', 'fr': 'Comparaison', 'de': 'Vergleich', 'ja': '比較',
    'ko': '비교', 'pt': 'Comparação', 'ru': 'Сравнение', 'ar': 'المقارنة'
};
TRANSLATIONS['blog.card10.time'] = {
    'en': '7 min', 'zh': '7分钟', 'es': '7 min', 'fr': '7 min', 'de': '7 Min.', 'ja': '7分',
    'ko': '7분', 'pt': '7 min', 'ru': '7 мин', 'ar': '7 دقائق'
};
TRANSLATIONS['blog.card10.title'] = {
    'en': 'Local vs Cloud Image Editors: Which is Safer?',
    'zh': '本地与云端图像脱敏器：哪个更安全？',
    'es': 'Editores de Imágenes Locales vs en la Nube: ¿Cuál es Más Seguro?',
    'fr': 'Éditeurs d\'Images Locaux vs Cloud : Lequel est Plus Sûr ?',
    'de': 'Lokale vs Cloud-Bildbearbeitungstools: Was ist sicherer?',
    'ja': 'ローカル対クラウド画像エディタ：どちらがより安全か？',
    'ko': '로컬 대 클라우드 이미지 편집기: 어떤 것이 더 안전한가?',
    'pt': 'Editores de Imagens Locais vs Nuvem: Qual é Mais Seguro?',
    'ru': 'Локальные или облачные редакторы изображений: что безопаснее?',
    'ar': 'محررات الصور المحلية مقابل السحابية: أيها أكثر أمانًا؟'
};
TRANSLATIONS['blog.card10.desc'] = {
    'en': 'Understanding the security implications of your choice. Why local processing matters for privacy.',
    'zh': '了解您选择的安全影响。为什么本地处理对隐私很重要。',
    'es': 'Comprenda las implicaciones de seguridad de su elección. Por qué el procesamiento local es importante para la privacidad.',
    'fr': 'Comprenez les implications de sécurité de votre choix. Pourquoi le traitement local est important pour la confidentialité.',
    'de': 'Verstehen Sie die Sicherheitsauswirkungen Ihrer Wahl. Warum lokale Verarbeitung für Privatsphäre wichtig ist.',
    'ja': '選択肢のセキュリティ上の意味を理解する。なぜローカル処理がプライバシーに重要なのか。',
    'ko': '선택의 보안 영향을 이해하세요. 로컬 처리가 개인정보 보호에 중요한 이유.',
    'pt': 'Entenda as implicações de segurança de sua escolha. Por que o processamento local importa para a privacidade.',
    'ru': 'Поймите последствия вашего выбора для безопасности. Почему локальная обработка важна для конфиденциальности.',
    'ar': 'فهم الآثار الأمنية لاختيارك. لماذا يهم المعالجة المحلية للخصوصية.'
};

// Blur Faces Article
TRANSLATIONS['blurFaces.breadcrumb.blog'] = {
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
};

TRANSLATIONS['blurFaces.breadcrumb.privacyTips'] = {
    'en': 'Privacy Tips',
    'zh': '隐私提示',
    'es': 'Consejos de privacidad',
    'fr': 'Conseils de confidentialité',
    'de': 'Datenschutztipp',
    'ja': 'プライバシーのヒント',
    'ko': '개인정보 보호 팁',
    'pt': 'Dicas de Privacidade',
    'ru': 'Советы по конфиденциальности',
    'ar': 'نصائح الخصوصية'
};

TRANSLATIONS['blurFaces.page.title'] = {
    'en': 'How to Blur Faces in Photos: The Complete Guide for 2026',
    'zh': '如何在照片中模糊面部：2026年完整指南',
    'es': 'Cómo difuminar caras en fotos: la guía completa para 2026',
    'fr': 'Comment flouter les visages sur les photos : le guide complet pour 2026',
    'de': 'So verwischen Sie Gesichter in Fotos: Der komplette Leitfaden für 2026',
    'ja': '写真で顔をぼかす方法：2026年完全ガイド',
    'ko': '사진에서 얼굴을 흐리게 하는 방법: 2026년 완벽 가이드',
    'pt': 'Como desfocar rostos em fotos: o guia completo para 2026',
    'ru': 'Как размыть лица на фотографиях: полное руководство на 2026 год',
    'ar': 'كيفية تمويه الوجوه في الصور: الدليل الكامل لعام 2026'
};

TRANSLATIONS['blurFaces.page.subtitle'] = {
    'en': 'Protect privacy and identities in your images with these proven techniques',
    'zh': '使用这些经过验证的技术保护您图像中的隐私和身份',
    'es': 'Proteja la privacidad y las identidades en sus imágenes con estas técnicas comprobadas',
    'fr': 'Protégez la confidentialité et les identités dans vos images avec ces techniques éprouvées',
    'de': 'Schützen Sie Privatsphäre und Identitäten in Ihren Bildern mit diesen bewährten Techniken',
    'ja': 'これらの実証済みの技術で画像内のプライバシーと身元を保護する',
    'ko': '이 검증된 기술로 이미지의 개인정보와 신원을 보호하세요',
    'pt': 'Proteja a privacidade e as identidades em suas imagens com estas técnicas comprovadas',
    'ru': 'Защитите конфиденциальность и личности на ваших изображениях с помощью этих проверенных техник',
    'ar': 'حماية الخصوصية والهويات في صورك باستخدام هذه التقنيات المجربة'
};

TRANSLATIONS['blurFaces.meta.date'] = {
    'en': '📅 May 31, 2026',
    'zh': '📅 2026年5月31日',
    'es': '📅 31 de mayo de 2026',
    'fr': '📅 31 mai 2026',
    'de': '📅 31. Mai 2026',
    'ja': '📅 2026年5月31日',
    'ko': '📅 2026년 5월 31일',
    'pt': '📅 31 de maio de 2026',
    'ru': '📅 31 мая 2026 г.',
    'ar': '📅 31 مايو 2026'
};

TRANSLATIONS['blurFaces.meta.readTime'] = {
    'en': '⏱️ 8 min read',
    'zh': '⏱️ 8分钟阅读',
    'es': '⏱️ 8 min de lectura',
    'fr': '⏱️ 8 min de lecture',
    'de': '⏱️ 8 Min. Lesezeit',
    'ja': '⏱️ 8分で読めます',
    'ko': '⏱️ 8분 읽기',
    'pt': '⏱️ 8 min de leitura',
    'ru': '⏱️ 8 мин чтения',
    'ar': '⏱️ 8 دقائق للقراءة'
};

TRANSLATIONS['blurFaces.meta.author'] = {
    'en': '✍️ Privacy Expert',
    'zh': '✍️ 隐私专家',
    'es': '✍️ Experto en privacidad',
    'fr': '✍️ Expert en confidentialité',
    'de': '✍️ Datenschutzexperte',
    'ja': '✍️ プライバシー専門家',
    'ko': '✍️ 개인정보 보호 전문가',
    'pt': '✍️ Eska em Privacidade',
    'ru': '✍️ Эксперт по конфиденциальности',
    'ar': '✍️ خبير الخصوصية'
};

TRANSLATIONS['blurFaces.quickAnswer.title'] = {
    'en': 'Quick Answer',
    'zh': '快速答案',
    'es': 'Respuesta rápida',
    'fr': 'Réponse rapide',
    'de': 'Kurzantwort',
    'ja': 'クイックアンサー',
    'ko': '빠른 답변',
    'pt': 'Resposta Rápida',
    'ru': 'Краткий ответ',
    'ar': 'إجابة سريعة'
};

TRANSLATIONS['blurFaces.quickAnswer.text'] = {
    'en': 'To blur faces in photos: Upload your image to a local redaction tool, select the face area, apply a blur or solid color mask, and download the edited image. The entire process should happen in your browser without uploading to servers for maximum privacy.',
    'zh': '要在照片中模糊面部：将图像上传到本地脱敏工具，选择面部区域，应用模糊或纯色遮罩，然后下载脱敏后的图像。整个过程应在浏览器中完成，无需上传到服务器，以实现最大程度的隐私保护。',
    'es': 'Para difuminar caras en fotos: suba su imagen a una herramienta de edición local, seleccione el área de la cara, aplique un desenfoque o una máscara de color sólido y descargue la imagen editada. Todo el proceso debe realizarse en su navegador sin subir a servidores para una privacidad máxima.',
    'fr': 'Pour flouter les visages sur les photos : téléchargez votre image dans un outil d\'édition local, sélectionnez la zone du visage, appliquez un flou ou un masque de couleur uni et téléchargez l\'image éditée. L\'ensemble du processus doit se faire dans votre navigateur sans téléchargement sur des serveurs pour une confidentialité maximale.',
    'de': 'So verwischen Sie Gesichter in Fotos: Laden Sie Ihr Bild in ein lokales Bearbeitungswerkzeug hoch, wählen Sie den Bereich des Gesichts aus, wenden Sie einen Weichzeichner oder eine Deckkraftmaske an und laden Sie das bearbeitete Bild herunter. Der gesamte Vorgang sollte in Ihrem Browser stattfinden, ohne auf Server hochzuladen, für maximale Privatsphäre.',
    'ja': '写真で顔をぼかすには：画像をローカル編集ツールにアップロードし、顔の領域を選択し、ぼかしまたは単色マスクを適用して、編集済みの画像をダウンロードします。プライバシーを最大限に保つため、プロセス全体はサーバーにアップロードせず、ブラウザ内で行う必要があります。',
    'ko': '사진에서 얼굴을 흐리게 하려면: 이미지를 로컬 편집 도구에 업로드하고, 얼굴 영역을 선택하고, 흐림 효과 또는 단색 마스크를 적용한 다음 편집된 이미지를 다운로드하세요. 최대한의 개인정보 보호를 위해 전체 프로세스는 서버에 업로드하지 않고 브라우저에서 이루어져야 합니다.',
    'pt': 'Para desfocar rostos em fotos: envie sua imagem para uma ferramenta de edição local, selecione a área do rosto, aplique um desfoque ou máscara de cor sólida e baixe a imagem editada. Todo o processo deve acontecer no seu navegador sem enviar para servidores para máxima privacidade.',
    'ru': 'Чтобы размыть лица на фотографиях: загрузите изображение в локальный инструмент редактирования, выберите область лица, примените размытие или маску сплошного цвета и скачайте отредактированное изображение. Весь процесс должен происходить в вашем браузере без загрузки на серверы для максимальной конфиденциальности.',
    'ar': 'لتمويه الوجوه في الصور: قم بتحميل صورتك إلى أداة تحرير محلية، حدد منطقة الوجه، طبق تأثيرًا ضبابيًا أو قناعًا بلونًا ثابتًا، وقم بتنزيل الصورة المحررة. يجب أن يتم العملية بأكملها في المتصفح دون رفعها إلى خوادم لأقصى درجة من الخصوصية.'
};

TRANSLATIONS['blurFaces.section1.title'] = {
    'en': 'Why You Need to Blur Faces in Photos',
    'zh': '为什么需要在照片中模糊面部',
    'es': 'Por qué necesita difuminar caras en fotos',
    'fr': 'Pourquoi vous devez flouter les visages sur les photos',
    'de': 'Warum Sie Gesichter in Fotos verwischen müssen',
    'ja': 'なぜ写真で顔をぼかす必要があるのか',
    'ko': '사진에서 얼굴을 흐리게 해야 하는 이유',
    'pt': 'Por que você precisa desfocar rostos em fotos',
    'ru': 'Зачем размывать лица на фотографиях',
    'ar': 'لماذا تحتاج إلى تمويه الوجوه في الصور'
};

TRANSLATIONS['blurFaces.section1.text'] = {
    'en': 'In today\'s digital age, sharing photos has become effortless. However, every image you post online can expose personal information about yourself and others. Whether you\'re sharing event photos on social media, posting screenshots for work, or submitting documents for verification, protecting identities should be your top priority.',
    'zh': '在当今的数字时代，分享照片变得毫不费力。然而，您在网上发布的每张图片都可能泄露您自己和他人的个人信息。无论您是在社交媒体上分享活动照片、发布工作截图，还是提交文件进行验证，保护身份都应该是您的首要任务。',
    'es': 'En la era digital actual, compartir fotos se ha vuelto sencillo. Sin embargo, cada imagen que publica en línea puede exponer información personal sobre usted y otros. Ya sea que esté compartiendo fotos de eventos en redes sociales, publicando capturas de pantalla para el trabajo o enviando documentos para verificación, proteger las identidades debería ser su principal prioridad.',
    'fr': 'À l\'ère numérique actuelle, partager des photos est devenu facile. Cependant, chaque image que vous publiez en ligne peut exposer des informations personnelles sur vous et sur d\'autres personnes. Que vous partagiez des photos d\'événements sur les réseaux sociaux, que vous publiez des captures d\'écran pour le travail ou que vous soumettiez des documents pour vérification, la protection des identités devrait être votre priorité absolue.',
    'de': 'Im heutigen digitalen Zeitalter ist das Teilen von Fotos mühelos geworden. Jedoch kann jedes Bild, das Sie online posten, persönliche Informationen über Sie und andere preisgeben. Ob Sie Eventfotos in sozialen Medien teilen, Screenshots für die Arbeit posten oder Dokumente zur Überprüfung einreichen, der Schutz von Identitäten sollte Ihre oberste Priorität sein.',
    'ja': '今日のデジタル時代では、写真の共有が effortless になりました。しかし、オンラインに投稿するすべての画像は、あなた自身や他の人に関する個人情報を露出させる可能性があります。SNSでイベント写真を共有したり、仕事用のスクリーンショットを投稿したり、書類を提出したりするとき、身元の保護が最優先事項であるべきです。',
    'ko': '오늘날의 디지털 시대에는 사진 공유가 수월해졌습니다. 그러나 온라인에 게시하는 모든 이미지는 귀하와 타인에 대한 개인정보를 노출시킬 수 있습니다. 소셜 미디어에 이벤트 사진을 공유하든, 업무용 스크린샷을 게시하든, 문서를 제출하든, 신원 보호가 최우선이어야 합니다.',
    'pt': 'Na era digital atual, compartilhar fotos tornou-se fácil. No entanto, cada imagem que você publica online pode expor informações pessoais sobre você e outras pessoas. Seja compartilhando fotos de eventos nas redes sociais, postando capturas de tela para o trabalho ou enviando documentos para verificação, proteger identidades deve ser sua prioridade máxima.',
    'ru': 'В современную цифровую эпоху обмен фотографиями стал легким делом. Однако каждое изображение, которое вы публикуете в Интернете, может раскрыть личную информацию о вас и других людях. Независимо от того, делитесь ли вы фотографиями с мероприятий в социальных сетях, публикуете скриншоты для работы или отправляете документы для проверки, защита личности должна быть вашим главным приоритетом.',
    'ar': 'في العصر الرقمي الحالي، أصبح مشاركة الصور سهلاً. ومع ذلك، فإن كل صورة تنشرها عبر الإنترنت يمكن أن تكشف معلومات شخصية عنك وعن الآخرين. سواء كنت تشارك صور الأحداث على وسائل التواصل الاجتماعي، أو تنشر لقطات الشاشة للعمل، أو تقدم مستندات للتحقق، يجب أن يكون حماية الهوية أولويتك القصوى.'
};

TRANSLATIONS['blurFaces.section1.subtitle'] = {
    'en': 'Common Scenarios Requiring Face Blurring',
    'zh': '需要面部模糊的常见场景',
    'es': 'Escenarios comunes que requieren difuminar caras',
    'fr': 'Scénarios courants nécessitant le floutage des visages',
    'de': 'Häufige Szenarios, die das Verwischen von Gesichtern erfordern',
    'ja': '顔のぼかしが必要な一般的なシナリオ',
    'ko': '얼굴 흐림이 필요한 일반적인 시나리오',
    'pt': 'Cenários Comuns que Requerem Desfoque de Rostos',
    'ru': 'Распространенные сценарии, требующие размытия лиц',
    'ar': 'السيناريوهات الشائعة التي تتطلب تمويه الوجوه'
};

TRANSLATIONS['blurFaces.scenario1.title'] = {
    'en': 'Social Media Posts:',
    'zh': '社交媒体帖子：',
    'es': 'Publicaciones en redes sociales:',
    'fr': 'Publications sur les réseaux sociaux :',
    'de': 'Social-Media-Posts:',
    'ja': 'ソーシャルメディアの投稿：',
    'ko': '소셜 미디어 게시물:',
    'pt': 'Postagens em Redes Sociais:',
    'ru': 'Посты в социальных сетях:',
    'ar': 'منشورات وسائل التواصل الاجتماعي:'
};

TRANSLATIONS['blurFaces.scenario1.desc'] = {
    'en': 'Before posting group photos where not everyone has consented to be shared publicly',
    'zh': '在发布集体照片之前，并非所有人都同意被公开分享',
    'es': 'Antes de publicar fotos grupales donde no todo el mundo ha consentido ser compartido públicamente',
    'fr': 'Avant de publier des photos de groupe où tout le monde n\'a pas consenti à être partagé publiquement',
    'de': 'Vor dem Posten von Gruppenfotos, bei denen nicht alle zugestimmt haben, öffentlich geteilt zu werden',
    'ja': '全員が公開されることに同意していないグループ写真を投稿する前',
    'ko': '모든 사람이 공개적으로 공유되는 데 동의하지 않은 단체 사진을 게시하기 전',
    'pt': 'Antes de postar fotos em grupo onde nem todos consentiram em ser compartilhados publicamente',
    'ru': 'Перед публикацией групповых фотографий, на которых не все дали согласие на публичное размещение',
    'ar': 'قبل نشر صور جماعية لم يوافق فيها الجميع على المشاركة علنًا'
};

TRANSLATIONS['blurFaces.scenario2.title'] = {
    'en': 'News & Journalism:',
    'zh': '新闻与报道：',
    'es': 'Noticias y periodismo:',
    'fr': 'Actualités et journalisme :',
    'de': 'Nachrichten und Journalismus:',
    'ja': 'ニュースとジャーナリズム：',
    'ko': '뉴스 및 저널리즘:',
    'pt': 'Notícias e Jornalismo:',
    'ru': 'Новости и журналистика:',
    'ar': 'الأخبار والصحافة:'
};

TRANSLATIONS['blurFaces.scenario2.desc'] = {
    'en': 'Protecting sources, witnesses, or victims in sensitive stories',
    'zh': '在敏感报道中保护消息来源、证人或受害者',
    'es': 'Protegiendo fuentes, testigos o víctimas en historias sensibles',
    'fr': 'Protéger les sources, les témoins ou les victimes dans des histoires sensibles',
    'de': 'Schutz von Quellen, Zeugen oder Opfern in sensiblen Geschichten',
    'ja': '敏感な報道における情報源、目撃者、または被害者の保護',
    'ko': '민감한 보도에서 출처, 증인 또는 피해자 보호',
    'pt': 'Protegendo fontes, testemunhas ou vítimas em histórias sensíveis',
    'ru': 'Защита источников, свидетелей или жертв в деликатных историях',
    'ar': 'حماية المصادر أو الشهود أو الضحايا في القصص الحساسة'
};

TRANSLATIONS['blurFaces.scenario3.title'] = {
    'en': 'Educational Materials:',
    'zh': '教育材料：',
    'es': 'Materiales educativos:',
    'fr': 'Matériels éducatifs :',
    'de': 'Lehrmaterialien:',
    'ja': '教育資料：',
    'ko': '교육 자료:',
    'pt': 'Materiais Educacionais:',
    'ru': 'Учебные материалы:',
    'ar': 'المواد التعليمية:'
};

TRANSLATIONS['blurFaces.scenario3.desc'] = {
    'en': 'Using real-world examples while maintaining student or patient privacy',
    'zh': '在保护学生或患者隐私的同时使用真实案例',
    'es': 'Usando ejemplos del mundo real mientras se mantiene la privacidad del estudiante o paciente',
    'fr': 'Utiliser des exemples réels tout en préservant la vie privée des étudiants ou des patients',
    'de': 'Verwendung realer Beispiele bei gleichzeitiger Wahrung der Privatsphäre von Schülern oder Patienten',
    'ja': '学生や患者のプライバシーを保ちながら、実世界の例を使用する',
    'ko': '학생 또는 환자의 개인정보를 보호하면서 실제 사례 사용',
    'pt': 'Usando exemplos do mundo real enquanto mantém a privacidade do estudante ou paciente',
    'ru': 'Использование реальных примеров при сохранении конфиденциальности студентов или пациентов',
    'ar': 'استخدام أمثلة من العالم الحقيقي مع الحفاظ على خصوصية الطالب أو المريض'
};

TRANSLATIONS['blurFaces.scenario4.title'] = {
    'en': 'Legal Documents:',
    'zh': '法律文件：',
    'es': 'Documentos legales:',
    'fr': 'Documents légaux :',
    'de': 'Rechtsdokumente:',
    'ja': '法務文書：',
    'ko': '법률 문서:',
    'pt': 'Documentos Legais:',
    'ru': 'Юридические документы:',
    'ar': 'الوثائق القانونية:'
};

TRANSLATIONS['blurFaces.scenario4.desc'] = {
    'en': 'Redacting identities in evidence photos or case files',
    'zh': '在证据照片或案件档案中脱敏身份信息',
    'es': 'Redactando identidades en fotos de evidencia o archivos de casos',
    'fr': 'Masquer les identités dans les photos de preuves ou les dossiers de cas',
    'de': 'Schwärzen von Identitäten in Beweisfotos oder Fallakten',
    'ja': '証拠写真または案件ファイルでの身元の編集',
    'ko': '증거 사진 또는 사건 파일에서 신원 편집',
    'pt': 'Editando identidades em fotos de evidência ou arquivos de casos',
    'ru': 'Редактирование личностей на фотографиях доказательств или в делах',
    'ar': 'تحرير الهويات في صور الأدلة أو ملفات القضايا'
};

TRANSLATIONS['blurFaces.scenario5.title'] = {
    'en': 'Workplace Screenshots:',
    'zh': '工作场所截图：',
    'es': 'Capturas de pantalla del lugar de trabajo:',
    'fr': 'Captures d\'écran du lieu de travail :',
    'de': 'Screenshots vom Arbeitsplatz:',
    'ja': '職場のスクリーンショット：',
    'ko': '직장 스크린샷:',
    'pt': 'Capturas de Tela do Local de Trabalho:',
    'ru': 'Скриншоты с рабочего места:',
    'ar': 'لقطات الشاشة في مكان العمل:'
};

TRANSLATIONS['blurFaces.scenario5.desc'] = {
    'en': 'Hiding colleague identities when sharing UI mockups or error messages',
    'zh': '在分享UI模型或错误消息时隐藏同事身份',
    'es': 'Ocultando las identidades de los colegas al compartir maquetas de UI o mensajes de error',
    'fr': 'Masquer les identités des collègues lors du partage de maquettes d\'interface ou de messages d\'erreur',
    'de': 'Verbergen von Kollegenidentitäten beim Teilen von UI-Mockups oder Fehlermeldungen',
    'ja': 'UIモックアップやエラーメッセージを共有する際に同僚の身元を隠す',
    'ko': 'UI 목업 또는 오류 메시지를 공유할 때 동료의 신원 숨기기',
    'pt': 'Ocultando identidades de colegas ao compartilhar protótipos de UI ou mensagens de erro',
    'ru': 'Скрытие личностей коллег при обмене макетами интерфейса или сообщениями об ошибках',
    'ar': 'إخفاء هويات الزملاء عند مشاركة نماذج واجهة المستخدم أو رسائل الخطأ'
};

TRANSLATIONS['blurFaces.section2.title'] = {
    'en': 'Step-by-Step: How to Blur Faces Effectively',
    'zh': '分步指南：如何有效模糊面部',
    'es': 'Paso a paso: cómo difuminar caras efectivamente',
    'fr': 'Étape par étape : comment flouter les visages efficacement',
    'de': 'Schritt für Schritt: So verwischen Sie Gesichter effektiv',
    'ja': 'ステップバイステップ：効果的に顔をぼかす方法',
    'ko': '단계별: 얼굴을 효과적으로 흐리게 하는 방법',
    'pt': 'Passo a Passo: Como Desfocar Rostos Efetivamente',
    'ru': 'Пошаговое руководство: как эффективно размыть лица',
    'ar': 'خطوة بخطوة: كيفية تمويه الوجوه بفعالية'
};

TRANSLATIONS['blurFaces.method1.title'] = {
    'en': 'Method 1: Using Free Online Tools (Recommended)',
    'zh': '方法1：使用免费在线工具（推荐）',
    'es': 'Método 1: Usar herramientas en línea gratuitas (Recomendado)',
    'fr': 'Méthode 1 : utiliser des outils en ligne gratuits (Recommandé)',
    'de': 'Methode 1: Kostenlose Online-Tools verwenden (Empfohlen)',
    'ja': '方法1：無料のオンラインツールを使用する（推奨）',
    'ko': '방법 1: 무료 온라인 도구 사용 (권장)',
    'pt': 'Método 1: Usar Ferramentas Online Gratuitas (Recomendado)',
    'ru': 'Метод 1: использование бесплатных онлайн-инструментов (Рекомендуется)',
    'ar': 'الطريقة 1: استخدام الأدوات المجانية عبر الإنترنت (موصى به)'
};

TRANSLATIONS['blurFaces.step1.title'] = {
    'en': 'Choose a Secure Tool',
    'zh': '选择安全工具',
    'es': 'Elija una herramienta segura',
    'fr': 'Choisissez un outil sécurisé',
    'de': 'Wählen Sie ein sicheres Tool',
    'ja': '安全なツールを選択する',
    'ko': '안전한 도구 선택',
    'pt': 'Escolha uma Ferramenta Segura',
    'ru': 'Выберите безопасный инструмент',
    'ar': 'اختر أداة آمنة'
};

TRANSLATIONS['blurFaces.step1.text'] = {
    'en': 'Select a tool that processes images locally in your browser, like toolvx\'s free image redaction tool. This ensures your photos never leave your device.',
    'zh': '选择一款在浏览器中本地处理图像的工具，例如toolvx的免费图像脱敏工具。这可以确保您的照片永远不会离开您的设备。',
    'es': 'Seleccione una herramienta que procese imágenes localmente en su navegador, como la herramienta gratuita de edición de imágenes de toolvx. Esto asegura que sus fotos nunca abandonen su dispositivo.',
    'fr': 'Sélectionnez un outil qui traite les images localement dans votre navigateur, comme l\'outil d\'édition d\'images gratuit de toolvx. Cela garantit que vos photos ne quittent jamais votre appareil.',
    'de': 'Wählen Sie ein Tool, das Bilder lokal in Ihrem Browser verarbeitet, wie das kostenlose Bildbearbeitungstool von toolvx. Dadurch wird sichergestellt, dass Ihre Fotos Ihr Gerät niemals verlassen.',
    'ja': 'ブラウザ内で画像をローカルに処理するツールを選択してください。toolvxの無料画像編集ツールなどがこれに当たります。これにより、写真がデバイスから出ることはありません。',
    'ko': '브라우저에서 이미지를 로컬로 처리하는 도구를 선택하세요. toolvx의 무료 이미지 편집 도구가 그 예입니다. 이렇게 하면 사진이 장치를 떠나지 않습니다.',
    'pt': 'Selecione uma ferramenta que processe imagens localmente no seu navegador, como a ferramenta gratuita de edição de imagens da toolvx. Isso garante que suas fotos nunca saiam do seu dispositivo.',
    'ru': 'Выберите инструмент, который обрабатывает изображения локально в вашем браузере, например, бесплатный инструмент редактирования изображений toolvx. Это гарантирует, что ваши фотографии никогда не покинут ваше устройство.',
    'ar': 'اختر أداة تعالج الصور محليًا في متصفحك، مثل أداة تحرير الصور المجانية من toolvx. هذا يضمن عدم مغادرة صورك لجهازك أبدًا.'
};

TRANSLATIONS['blurFaces.step2.title'] = {
    'en': 'Upload Your Image',
    'zh': '上传您的图像',
    'es': 'Suba su imagen',
    'fr': 'Téléchargez votre image',
    'de': 'Laden Sie Ihr Bild hoch',
    'ja': '画像をアップロードする',
    'ko': '이미지 업로드',
    'pt': 'Envie Sua Imagem',
    'ru': 'Загрузите изображение',
    'ar': 'قم بتحميل صورتك'
};

TRANSLATIONS['blurFaces.step2.text'] = {
    'en': 'Drag and drop your photo or click to browse. Supported formats include JPG, PNG, GIF, and WebP.',
    'zh': '拖放照片或点击浏览。支持的格式包括JPG、PNG、GIF和WebP。',
    'es': 'Arrastre y suelte su foto o haga clic para navegar. Los formatos compatibles incluyen JPG, PNG, GIF y WebP.',
    'fr': 'Glissez-déposez votre photo ou cliquez pour parcourir. Les formats supportés incluent JPG, PNG, GIF et WebP.',
    'de': 'Ziehen Sie Ihr Foto per Drag & Drop oder klicken Sie zum Durchsuchen. Unterstützte Formate sind JPG, PNG, GIF und WebP.',
    'ja': '写真をドラッグ＆ドロップするか、クリックして参照します。対応フォーマットはJPG、PNG、GIF、WebPです。',
    'ko': '사진을 드래그 앤 드롭하거나 클릭하여 찾아보세요. 지원되는 형식은 JPG, PNG, GIF 및 WebP입니다.',
    'pt': 'Arraste e solte sua foto ou clique para navegar. Os formatos suportados incluem JPG, PNG, GIF e WebP.',
    'ru': 'Перетащите фотографию или нажмите для просмотра. Поддерживаемые форматы: JPG, PNG, GIF и WebP.',
    'ar': 'اسحب صورتك وأفلتها أو انقر للتصفح. الصيغ المدعومة تشمل JPG وPNG وGIF وWebP.'
};

TRANSLATIONS['blurFaces.step3.title'] = {
    'en': 'Select the Face Area',
    'zh': '选择面部区域',
    'es': 'Seleccione el área de la cara',
    'fr': 'Sélectionnez la zone du visage',
    'de': 'Wählen Sie den Bereich des Gesichts aus',
    'ja': '顔の領域を選択する',
    'ko': '얼굴 영역 선택',
    'pt': 'Selecione a Área do Rosto',
    'ru': 'Выберите область лица',
    'ar': 'حدد منطقة الوجه'
};

TRANSLATIONS['blurFaces.step3.text'] = {
    'en': 'Click and drag to create a selection box around the face you want to blur. Make sure to cover all facial features completely.',
    'zh': '单击并拖动以在要模糊的面部周围创建选择框。确保完全覆盖所有面部特征。',
    'es': 'Haga clic y arrastre para crear un cuadro de selección alrededor de la cara que desea difuminar. Asegúrese de cubrir todas las características faciales completamente.',
    'fr': 'Cliquez et faites glisser pour créer une zone de sélection autour du visage que vous souhaitez flouter. Assurez-vous de couvrir complètement toutes les caractéristiques faciales.',
    'de': 'Klicken und ziehen Sie, um einen Auswahlbereich um das Gesicht zu erstellen, das Sie verwischen möchten. Stellen Sie sicher, dass alle Gesichtszüge vollständig abgedeckt sind.',
    'ja': 'ぼかしたい顔の周りに選択ボックスを作成するためにクリックしてドラッグします。すべての顔の特徴が完全に覆われていることを確認してください。',
    'ko': '흐리게 하려는 얼굴 주위에 선택 상자를 만들려면 클릭하고 드래그하세요. 모든 얼굴 특징이 완전히 덮여 있는지 확인하세요.',
    'pt': 'Clique e arraste para criar uma caixa de seleção ao redor do rosto que você deseja desfocar. Certifique-se de cobrir completamente todas as características faciais.',
    'ru': 'Нажмите и перетащите, чтобы создать рамку выбора вокруг лица, которое хотите размыть. Убедитесь, что все черты лица полностью закрыты.',
    'ar': 'انقر واسحب لإنشاء مربع تحديد حول الوجه الذي تريد تمويهه. تأكد من تغطية جميع ملامح الوجه بالكامل.'
};

TRANSLATIONS['blurFaces.step4.title'] = {
    'en': 'Apply Blur or Mask',
    'zh': '应用模糊或遮罩',
    'es': 'Aplique desenfoque o máscara',
    'fr': 'Appliquez un flou ou un masque',
    'de': 'Weichzeichner oder Maske anwenden',
    'ja': 'ぼかしまたはマスクを適用する',
    'ko': '흐림 효과 또는 마스크 적용',
    'pt': 'Aplique Desfoque ou Máscara',
    'ru': 'Применить размытие или маску',
    'ar': 'طبق تأثيرًا ضبابيًا أو قناعًا'
};

TRANSLATIONS['blurFaces.step4.text'] = {
    'en': 'Choose between different effects: solid black/white boxes, Gaussian blur, pixelation, or custom colors. Adjust intensity as needed.',
    'zh': '在不同的效果之间进行选择：纯黑/白框、高斯模糊、像素化或自定义颜色。根据需要调整强度。',
    'es': 'Elija entre diferentes efectos: cajas sólidas negras/blancas, desenfoque gaussiano, pixelación o colores personalizados. Ajuste la intensidad según sea necesario.',
    'fr': 'Choisissez entre différents effets : boîtes noires/blanches unies, flou gaussien, pixelisation ou couleurs personnalisées. Ajustez l\'intensité selon vos besoins.',
    'de': 'Wählen Sie zwischen verschiedenen Effekten: solide schwarze/weiße Kästen, Gaußscher Weichzeichner, Pixelierung oder benutzerdefinierte Farben. Passen Sie die Intensität nach Bedarf an.',
    'ja': 'さまざまな効果から選択してください：ソリッドブラック/ホワイトボックス、ガウシアンぼかし、ピクセレーション、またはカスタムカラー。必要に応じて強度を調整します。',
    'ko': '다양한 효과 중에서 선택하세요: 단색 검정/흰색 상자, 가우시안 흐림, 픽셀화 또는 사용자 지정 색상. 필요에 따라 강도를 조정하세요.',
    'pt': 'Escolha entre diferentes efeitos: caixas sólidas pretas/brancas, desfoque gaussiano, pixelização ou cores personalizadas. Ajuste a intensidade conforme necessário.',
    'ru': 'Выберите между различными эффектами: сплошные черные/белые блоки, гауссово размытие, пикселизация или пользовательские цвета. Настройте интенсивность по мере необходимости.',
    'ar': 'اختر بين تأثيرات مختلفة: مربعات سوداء/بيضاء ثابتة، تمويه Gaussian، pixelation، أو ألوان مخصصة. اضبط الشدة حسب الحاجة.'
};

TRANSLATIONS['blurFaces.step5.title'] = {
    'en': 'Preview and Download',
    'zh': '预览并下载',
    'es': 'Vista previa y descargar',
    'fr': 'Prévisualiser et télécharger',
    'de': 'Vorschau und Download',
    'ja': 'プレビューしてダウンロード',
    'ko': '미리보기 및 다운로드',
    'pt': 'Pré-visualize e Baixe',
    'ru': 'Предпросмотр и скачивание',
    'ar': 'معاينة وتنزيل'
};

TRANSLATIONS['blurFaces.step5.text'] = {
    'en': 'Review your edits to ensure complete coverage, then export the image in your preferred format.',
    'zh': '查看您的脱敏以确保完全覆盖，然后以您喜欢的格式导出图像。',
    'es': 'Revise sus ediciones para asegurar una cobertura completa, luego exporte la imagen en su formato preferido.',
    'fr': 'Vérifiez vos modifications pour assurer une couverture complète, puis exportez l\'image dans le format de votre choix.',
    'de': 'Überprüfen Sie Ihre Bearbeitungen, um eine vollständige Abdeckung sicherzustellen, und exportieren Sie das Bild dann in Ihrem bevorzugten Format.',
    'ja': '編集内容を確認して完全なカバレージを確保し、希望の形式で画像をエクスポートします。',
    'ko': '편집 내용을 검토하여 완전한 커버리지를 보장한 다음, 원하는 형식으로 이미지를 내보세요.',
    'pt': 'Revise suas edições para garantir uma cobertura completa e depois exporte a imagem no formato de sua preferência.',
    'ru': 'Проверьте свои правки, чтобы убедиться в полном покрытии, затем экспортируйте изображение в предпочитаемом формате.',
    'ar': 'راجع تعديلاتك لضمان التغطية الكاملة، ثم قم بتصدير الصورة بالتنسيق المفضل لديك.'
};

TRANSLATIONS['blurFaces.section3.title'] = {
    'en': 'Best Practices for Effective Face Blurring',
    'zh': '有效模糊面部的最佳实践',
    'es': 'Mejores prácticas para difuminar caras efectivamente',
    'fr': 'Meilleures pratiques pour un floutage efficace des visages',
    'de': 'Best Practices für effektives Verwischen von Gesichtern',
    'ja': '効果的な顔ぼかしのベストプラクティス',
    'ko': '효과적인 얼굴 흐림을 위한 모범 사례',
    'pt': 'Melhores Práticas para Desfocar Rostos Efetivamente',
    'ru': 'Лучшие практики для эффективного размытия лиц',
    'ar': 'أفضل الممارسات لتمويه الوجوه بفعالية'
};

TRANSLATIONS['blurFaces.do.title'] = {
    'en': '✅ Do This',
    'zh': '✅ 这样做',
    'es': '✅ Haga esto',
    'fr': '✅ À faire',
    'de': '✅ Das sollten Sie tun',
    'ja': '✅ これを行う',
    'ko': '✅ 이렇게 하세요',
    'pt': '✅ Faça Isso',
    'ru': '✅ Делайте это',
    'ar': '✅ افعل هذا'
};

TRANSLATIONS['blurFaces.do.item1'] = {
    'en': '• Cover entire face including hair line',
    'zh': '• 覆盖整个面部，包括发际线',
    'es': '• Cubra todo el rostro incluyendo la línea del cabello',
    'fr': '• Couvrez tout le visage y compris la racine des cheveux',
    'de': '• Decken Sie das gesamte Gesicht einschließlich der Haarlinie ab',
    'ja': '• 毛際を含む顔全体を覆う',
    'ko': '• 머리카락 선을 포함한 얼굴 전체 덮기',
    'pt': '• Cubra o rosto inteiro incluindo a linha do cabelo',
    'ru': '• Закрывайте всё лицо, включая линию волос',
    'ar': '• غطِّ الوجه بالكامل بما في ذلك خط الشعر'
};

TRANSLATIONS['blurFaces.do.item2'] = {
    'en': '• Use high opacity (100% coverage)',
    'zh': '• 使用高不透明度（100%覆盖）',
    'es': '• Use alta opacidad (cobertura del 100%)',
    'fr': '• Utilisez une opacité élevée (couverture à 100%)',
    'de': '• Verwenden Sie eine hohe Deckkraft (100% Abdeckung)',
    'ja': '• 高不透明度を使用する（100%カバー）',
    'ko': '• 높은 불투명도 사용 (100% 커버)',
    'pt': '• Use alta opacidade (cobertura de 100%)',
    'ru': '• Используйте высокую непрозрачность (100% покрытие)',
    'ar': '• استخدم عتيمة عالية (تغطية 100%)'
};

TRANSLATIONS['blurFaces.do.item3'] = {
    'en': '• Extend selection slightly beyond face edges',
    'zh': '• 将选择范围稍微延伸到面部边缘之外',
    'es': '• Extienda la selección ligeramente más allá de los bordes de la cara',
    'fr': '• Étendez la sélection légèrement au-delà des bords du visage',
    'de': '• Erweitern Sie die Auswahl leicht über die Gesichtskanten hinaus',
    'ja': '• 選択範囲を顔の端より少し広げる',
    'ko': '• 얼굴 가장자리를 약간 넘어 선택 범위 확장',
    'pt': '• Estenda a seleção ligeiramente além das bordas do rosto',
    'ru': '• Немного расширьте выбор за края лица',
    'ar': '• امتدِّ بالاختيار قليلاً خارج حواف الوجه'
};

TRANSLATIONS['blurFaces.do.item4'] = {
    'en': '• Double-check before sharing',
    'zh': '• 分享前仔细检查',
    'es': '• Verifique dos veces antes de compartir',
    'fr': '• Vérifiez deux fois avant de partager',
    'de': '• Überprüfen Sie vor dem Teilen nochmals',
    'ja': '• 共有する前に再確認する',
    'ko': '• 공유하기 전에 다시 확인',
    'pt': '• Verifique duas vezes antes de compartilhar',
    'ru': '• Проверьте дважды перед публикацией',
    'ar': '• تحقق مرتين قبل المشاركة'
};

TRANSLATIONS['blurFaces.do.item5'] = {
    'en': '• Use tools that don\'t upload to servers',
    'zh': '• 使用不会上传到服务器的工具',
    'es': '• Use herramientas que no suban a servidores',
    'fr': '• Utilisez des outils qui ne téléchargent pas sur des serveurs',
    'de': '• Verwenden Sie Tools, die nicht auf Server hochladen',
    'ja': '• サーバーにアップロードしないツールを使用する',
    'ko': '• 서버에 업로드하지 않는 도구 사용',
    'pt': '• Use ferramentas que não enviem para servidores',
    'ru': '• Используйте инструменты, которые не загружают на серверы',
    'ar': '• استخدم أدوات لا ترفع إلى الخوادم'
};

TRANSLATIONS['blurFaces.dont.title'] = {
    'en': '❌ Don\'t Do This',
    'zh': '❌ 不要这样做',
    'es': '❌ No haga esto',
    'fr': '❌ À ne pas faire',
    'de': '❌ Das sollten Sie nicht tun',
    'ja': '❌ これを行わない',
    'ko': '❌ 이렇게 하지 마세요',
    'pt': '❌ Não Faça Isso',
    'ru': '❌ Не делайте этого',
    'ar': '❌ لا تفعل هذا'
};

TRANSLATIONS['blurFaces.dont.item1'] = {
    'en': '• Use semi-transparent overlays',
    'zh': '• 使用半透明覆盖层',
    'es': '• Use superposiciones semitransparentes',
    'fr': '• N\'utilisez pas de superpositions semi-transparentes',
    'de': '• Keine halbtransparenten Überlagerungen verwenden',
    'ja': '• 半透明のオーバーレイを使用しない',
    'ko': '• 반투명 오버레이 사용',
    'pt': '• Não use sobreposições semitransparentes',
    'ru': '• Не используйте полупрозрачные наложения',
    'ar': '• لا تستخدم تراكبات شبه شفافة'
};

TRANSLATIONS['blurFaces.dont.item2'] = {
    'en': '• Leave eyes or mouth visible',
    'zh': '• 让眼睛或嘴巴可见',
    'es': '• Deje los ojos o la boca visibles',
    'fr': '• Ne laissez pas les yeux ou la bouche visibles',
    'de': '• Augen oder Mund sichtbar lassen',
    'ja': '• 目や口を見えるままにする',
    'ko': '• 눈이나 입이 보이게 남겨두기',
    'pt': '• Não deixe olhos ou boca visíveis',
    'ru': '• Не оставляйте глаза или рот видимыми',
    'ar': '• لا تترك العيون أو الفم مرئيًا'
};

TRANSLATIONS['blurFaces.dont.item3'] = {
    'en': '• Rely on low-quality blur effects',
    'zh': '• 依赖低质量的模糊效果',
    'es': '• Confíe en efectos de desenfoque de baja calidad',
    'fr': '• Ne comptez pas sur des effets de flou de mauvaise qualité',
    'de': '• Verlassen Sie sich nicht auf Weichzeichnereffekte von niedriger Qualität',
    'ja': '• 低品質のぼかし効果に頼る',
    'ko': '• 저품질 흐림 효과에 의존',
    'pt': '• Não confie em efeitos de desfoque de baixa qualidade',
    'ru': '• Не полагайтесь на размытие низкого качества',
    'ar': '• لا تعتمد على تأثيرات تمويه منخفضة الجودة'
};

TRANSLATIONS['blurFaces.dont.item4'] = {
    'en': '• Forget to check from different angles',
    'zh': '• 忘记从不同角度检查',
    'es': '• Olvide verificar desde diferentes ángulos',
    'fr': '• N\'oubliez pas de vérifier sous différents angles',
    'de': '• Vergessen Sie nicht, aus verschiedenen Winkeln zu überprüfen',
    'ja': '• 異なる角度から確認することを忘れる',
    'ko': '• 다른 각도에서 확인하는 것을 잊음',
    'pt': '• Não se esqueça de verificar de diferentes ângulos',
    'ru': '• Не забывайте проверять с разных углов',
    'ar': '• لا تنسَ التحقق من زوايا مختلفة'
};

TRANSLATIONS['blurFaces.dont.item5'] = {
    'en': '• Use online tools that store your images',
    'zh': '• 使用存储您图像的在线工具',
    'es': '• Use herramientas en línea que almacenen sus imágenes',
    'fr': '• N\'utilisez pas d\'outils en ligne qui stockent vos images',
    'de': '• Verwenden Sie keine Online-Tools, die Ihre Bilder speichern',
    'ja': '• 画像を保存するオンラインツールを使用する',
    'ko': '• 이미지를 저장하는 온라인 도구 사용',
    'pt': '• Não use ferramentas online que armazenem suas imagens',
    'ru': '• Не используйте онлайн-инструменты, которые хранят ваши изображения',
    'ar': '• لا تستخدم أدوات عبر الإنترنت تخزن صورك'
};

TRANSLATIONS['blurFaces.section4.title'] = {
    'en': 'Different Blurring Techniques Compared',
    'zh': '不同模糊技术对比',
    'es': 'Diferentes Técnicas de Desenfoque Comparadas',
    'fr': 'Comparaison des différentes techniques de floutage',
    'de': 'Verschiedene Verwischungstechniken im Vergleich',
    'ja': 'さまざまなぼかし技術の比較',
    'ko': '다양한 흐림 기술 비교',
    'pt': 'Diferentes Técnicas de Desfoque Comparadas',
    'ru': 'Сравнение различных техник размытия',
    'ar': 'مقارنة تقنيات التمويه المختلفة'
};

TRANSLATIONS['blurFaces.table.technique'] = {
    'en': 'Technique',
    'zh': '技术',
    'es': 'Técnica',
    'fr': 'Technique',
    'de': 'Technik',
    'ja': '技術',
    'ko': '기술',
    'pt': 'Técnica',
    'ru': 'Техника',
    'ar': 'تقنية'
};

TRANSLATIONS['blurFaces.table.securityLevel'] = {
    'en': 'Security Level',
    'zh': '安全级别',
    'es': 'Nivel de seguridad',
    'fr': 'Niveau de sécurité',
    'de': 'Sicherheitsstufe',
    'ja': 'セキュリティレベル',
    'ko': '보안 수준',
    'pt': 'Nível de Segurança',
    'ru': 'Уровень безопасности',
    'ar': 'مستوى الأمان'
};

TRANSLATIONS['blurFaces.table.bestFor'] = {
    'en': 'Best For',
    'zh': '最适合',
    'es': 'Mejor para',
    'fr': 'Meilleur pour',
    'de': 'Am besten für',
    'ja': '最適な用途',
    'ko': '가장 적합한 용도',
    'pt': 'Melhor Para',
    'ru': 'Лучше всего подходит для',
    'ar': 'الأفضل لـ'
};

TRANSLATIONS['blurFaces.table.row1.technique'] = {
    'en': 'Solid Black Box',
    'zh': '纯黑框',
    'es': 'Caja Negra Sólida',
    'fr': 'Boîte noire unie',
    'de': 'Solide schwarze Box',
    'ja': 'ソリッドブラックボックス',
    'ko': '단색 검은 상자',
    'pt': 'Caixa Preta Sólida',
    'ru': 'Сплошной черный блок',
    'ar': 'مربع أسود ثابت'
};

TRANSLATIONS['blurFaces.table.row1.security'] = {
    'en': '★★★★★',
    'zh': '★★★★★',
    'es': '★★★★★',
    'fr': '★★★★★',
    'de': '★★★★★',
    'ja': '★★★★★',
    'ko': '★★★★★',
    'pt': '★★★★★',
    'ru': '★★★★★',
    'ar': '★★★★★'
};

TRANSLATIONS['blurFaces.table.row1.bestFor'] = {
    'en': 'Maximum security, legal documents',
    'zh': '最高安全性，法律文件',
    'es': 'Máxima seguridad, documentos legales',
    'fr': 'Sécurité maximale, documents légaux',
    'de': 'Maximale Sicherheit, Rechtsdokumente',
    'ja': '最大限のセキュリティ、法務文書',
    'ko': '최대 보안, 법률 문서',
    'pt': 'Segurança máxima, documentos legais',
    'ru': 'Максимальная безопасность, юридические документы',
    'ar': 'أقصى درجات الأمان، الوثائق القانونية'
};

TRANSLATIONS['blurFaces.table.row2.technique'] = {
    'en': 'Gaussian Blur',
    'zh': '高斯模糊',
    'es': 'Desenfoque Gaussiano',
    'fr': 'Flou gaussien',
    'de': 'Gaußscher Weichzeichner',
    'ja': 'ガウシアンぼかし',
    'ko': '가우시안 흐림',
    'pt': 'Desfoque Gaussiano',
    'ru': 'Гауссово размытие',
    'ar': 'تمويه Gaussian'
};

TRANSLATIONS['blurFaces.table.row2.security'] = {
    'en': '★★★★☆',
    'zh': '★★★★☆',
    'es': '★★★★☆',
    'fr': '★★★★☆',
    'de': '★★★★☆',
    'ja': '★★★★☆',
    'ko': '★★★★☆',
    'pt': '★★★★☆',
    'ru': '★★★★☆',
    'ar': '★★★★☆'
};

TRANSLATIONS['blurFaces.table.row2.bestFor'] = {
    'en': 'Natural look, social media',
    'zh': '自然外观，社交媒体',
    'es': 'Apariencia natural, redes sociales',
    'fr': 'Aspect naturel, réseaux sociaux',
    'de': 'Natürlicher Look, soziale Medien',
    'ja': '自然な外観、ソーシャルメディア',
    'ko': '자연스러운 모습, 소셜 미디어',
    'pt': 'Aparência natural, mídias sociais',
    'ru': 'Естественный вид, социальные сети',
    'ar': 'مظهر طبيعي، وسائل التواصل الاجتماعي'
};

TRANSLATIONS['blurFaces.table.row3.technique'] = {
    'en': 'Pixelation',
    'zh': '像素化',
    'es': 'Pixelación',
    'fr': 'Pixellisation',
    'de': 'Pixelierung',
    'ja': 'ピクセレーション',
    'ko': '픽셀화',
    'pt': 'Pixelização',
    'ru': 'Пикселизация',
    'ar': 'تحويل إلى بكسل'
};

TRANSLATIONS['blurFaces.table.row3.security'] = {
    'en': '★★★☆☆',
    'zh': '★★★☆☆',
    'es': '★★★☆☆',
    'fr': '★★★☆☆',
    'de': '★★★☆☆',
    'ja': '★★★☆☆',
    'ko': '★★★☆☆',
    'pt': '★★★☆☆',
    'ru': '★★★☆☆',
    'ar': '★★★☆☆'
};

TRANSLATIONS['blurFaces.table.row3.bestFor'] = {
    'en': 'News broadcasts, TV',
    'zh': '新闻广播，电视',
    'es': 'Transmisiones de noticias, TV',
    'fr': 'Bulletins d\'information, télévision',
    'de': 'Nachrichtensendungen, Fernsehen',
    'ja': 'ニュース放送、テレビ',
    'ko': '뉴스 방송, TV',
    'pt': 'Transmissões de notícias, TV',
    'ru': 'Новостные передачи, телевидение',
    'ar': 'البث الإخباري، التلفزيون'
};

TRANSLATIONS['blurFaces.table.row4.technique'] = {
    'en': 'Skin-tone Mask',
    'zh': '肤色遮罩',
    'es': 'Máscara de Tono de Piel',
    'fr': 'Masque de teint',
    'de': 'Hautton-Maske',
    'ja': 'スキントーンマスク',
    'ko': '피부톤 마스크',
    'pt': 'Máscara de Tom de Pele',
    'ru': 'Маска тона кожи',
    'ar': 'قناع لون البشرة'
};

TRANSLATIONS['blurFaces.table.row4.security'] = {
    'en': '★★★★☆',
    'zh': '★★★★☆',
    'es': '★★★★☆',
    'fr': '★★★★☆',
    'de': '★★★★☆',
    'ja': '★★★★☆',
    'ko': '★★★★☆',
    'pt': '★★★★☆',
    'ru': '★★★★☆',
    'ar': '★★★★☆'
};

TRANSLATIONS['blurFaces.table.row4.bestFor'] = {
    'en': 'Aesthetic presentations',
    'zh': '美学展示',
    'es': 'Presentaciones estéticas',
    'fr': 'Présentations esthétiques',
    'de': 'Ästhetische Präsentationen',
    'ja': '美的プレゼンテーション',
    'ko': '미적 프레젠테이션',
    'pt': 'Apresentações estéticas',
    'ru': 'Эстетические презентации',
    'ar': 'عروض جمالية'
};

TRANSLATIONS['blurFaces.section5.title'] = {
    'en': 'Legal Considerations',
    'zh': '法律考量',
    'es': 'Consideraciones Legales',
    'fr': 'Considérations juridiques',
    'de': 'Rechtliche Überlegungen',
    'ja': '法的考慮事項',
    'ko': '법적 고려 사항',
    'pt': 'Considerações Legais',
    'ru': 'Юридические аспекты',
    'ar': 'الاعتبارات القانونية'
};

TRANSLATIONS['blurFaces.section5.text'] = {
    'en': 'Understanding when and why you should blur faces is crucial for legal compliance:',
    'zh': '了解何时以及为何应该模糊面部对于法律合规至关重要：',
    'es': 'Comprender cuándo y por qué debe difuminar caras es crucial para el cumplimiento legal:',
    'fr': 'Comprendre quand et pourquoi vous devez flouter les visages est crucial pour la conformité légale :',
    'de': 'Das Verständnis, wann und warum Sie Gesichter verwischen sollten, ist entscheidend für die Rechtskonformität:',
    'ja': 'いつ、なぜ顔をぼかすべきかを理解することは、法的コンプライアンスにめて重要です。',
    'ko': '언제, 왜 얼굴을 흐리게 해야 하는지 이해하는 것은 법적 준수를 위해 매우 중요합니다.',
    'pt': 'Entender quando e por que você deve desfocar rostos é crucial para a conformidade legal:',
    'ru': 'Понимание того, когда и почему следует размывать лица, имеет решающее значение для соблюдения законодательства:',
    'ar': 'فهم متى ولماذا يجب عليك تمويه الوجوه أمر بالغ الأهمية للامتثال القانوني:'
};

TRANSLATIONS['blurFaces.gdpr.title'] = {
    'en': 'GDPR Requirements (European Union)',
    'zh': 'GDPR要求（欧盟）',
    'es': 'Requisitos del GDPR (Unión Europea)',
    'fr': 'Exigences du RGPD (Union européenne)',
    'de': 'DSGVO-Anforderungen (Europäische Union)',
    'ja': 'GDPR要件（欧州連盟）',
    'ko': 'GDPR 요구사항 (유럽 연합)',
    'pt': 'Requisitos do GDPR (União Europeia)',
    'ru': 'Требования GDPR (Европейский союз)',
    'ar': 'متطلبات GDPR (الاتحاد الأوروبي)'
};

TRANSLATIONS['blurFaces.gdpr.text'] = {
    'en': 'Under GDPR, faces are considered biometric data. You must obtain explicit consent before publishing someone\'s image, or blur their face to protect their identity. Learn more about GDPR compliance for images.',
    'zh': '根据GDPR，面部被视为生物识别数据。在发布他人图像之前，您必须获得明确同意，或者模糊其面部以保护其身份。了解更多关于图像GDPR合规的信息。',
    'es': 'Según el GDPR, las caras se consideran datos biométricos. Debe obtener el consentimiento explícito antes de publicar la imagen de alguien, o difuminar su cara para proteger su identidad. Obtenga más información sobre el cumplimiento del GDPR para imágenes.',
    'fr': 'En vertu du RGPD, les visages sont considérés comme des données biométriques. Vous devez obtenir un consentement explicite avant de publier l\'image de quelqu\'un, ou flouter son visage pour protéger son identité. En savoir plus sur la conformité au RGPD pour les images.',
    'de': 'Gemäß DSGVO werden Gesichter als biometrische Daten betrachtet. Sie müssen eine ausdrückliche Zustimmung einholen, bevor Sie das Bild einer Person veröffentlichen, oder ihr Gesicht verwischen, um ihre Identität zu schützen. Erfahren Sie mehr über die DSGVO-Konformität für Bilder.',
    'ja': 'GDPRでは、顔は生体認証データと見なされます。誰かの画像を公開する前に明示的な同意を得るか、身元を保護するために顔をぼかす必要があります。画像のGDPRコンプライアンスの詳細について学ぶ。',
    'ko': 'GDPR에 따르면 얼굴은 생체인식 데이터로 간주됩니다. 누군가의 이미지를 게시하기 전에 명시적 동의를 받거나 신원을 보호하기 위해 얼굴을 흐리게 해야 합니다. 이미지에 대한 GDPR 준수에 대해 자세히 알아보세요.',
    'pt': 'De acordo com o GDPR, rostos são considerados dados biométricos. Você deve obter consentimento explícito antes de publicar a imagem de alguém, ou desfocar o rosto para proteger sua identidade. Saiba mais sobre conformidade com o GDPR para imagens.',
    'ru': 'Согласно GDPR, лица считаются биометрическими данными. Вы должны получить явное согласие перед публикацией чьего-либо изображения, или размыть лицо для защиты их личности. Узнайте больше о соблюдении GDPR для изображений.',
    'ar': 'بموجب GDPR، تعتبر الوجوه بيانات بيومترية. يجب عليك الحصول على موافقة صريحة قبل نشر صورة شخص ما، أو تمويه وجهه لحماية هويته. تعرف على المزيد حول الامتثال لـ GDPR للصور.'
};

TRANSLATIONS['blurFaces.section6.title'] = {
    'en': 'Frequently Asked Questions',
    'zh': '常见问题',
    'es': 'Preguntas Frecuentes',
    'fr': 'Questions fréquemment posées',
    'de': 'Häufig gestellte Fragen',
    'ja': 'よくある質問',
    'ko': '자주 묻는 질문',
    'pt': 'Perguntas Frequentes',
    'ru': 'Часто задаваемые вопросы',
    'ar': 'الأسئلة الشائعة'
};

TRANSLATIONS['blurFaces.faq1.question'] = {
    'en': 'Can blurred faces be unblurred?',
    'zh': '模糊后的面部可以恢复吗？',
    'es': '¿Se pueden desdifuminar las caras difuminadas?',
    'fr': 'Les visages floutés peuvent-ils être défloutés ?',
    'de': 'Können verwischte Gesichter unverwischt werden?',
    'ja': 'ぼかした顔は元に戻せますか？',
    'ko': '흐려진 얼굴을 원래대로 되돌릴 수 있나요?',
    'pt': 'Rostos desfocados podem ser focados novamente?',
    'ru': 'Можно ли восстановить размытые лица?',
    'ar': 'هل يمكن إزالة تمويه الوجوه المموهة؟'
};

TRANSLATIONS['blurFaces.faq1.answer'] = {
    'en': 'It depends on the blurring method. Simple Gaussian blur can sometimes be reversed with advanced software. For maximum security, use solid color masks or heavy pixelation that permanently destroys facial data.',
    'zh': '这取决于模糊方法。简单的高斯模糊有时可以通过高级软件逆转。为了最大的安全性，请使用纯色遮罩或重度像素化，这些方法会永久销毁面部数据。',
    'es': 'Depende del método de desenfoque. El desenfoque gaussiano simple a veces puede revertirse con software avanzado. Para una seguridad máxima, use máscaras de color sólido o pixelación intensa que destruya permanentemente los datos faciales.',
    'fr': 'Cela dépend de la méthode de floutage. Le flou gaussien simple peut parfois être inversé avec un logiciel avancé. Pour une sécurité maximale, utilisez des masques de couleur unie ou une pixelisation intense qui détruit définitivement les données faciales.',
    'de': 'Es hängt von der Verwischungsmethode ab. Einfache Gaußsche Weichzeichnung kann manchmal mit fortschrittlicher Software umgekehrt werden. Für maximale Sicherheit verwenden Sie Deckkraftmasken oder starke Pixelierung, die Gesichtsdaten dauerhaft zerstört.',
    'ja': 'ぼかし方法によります。単純なガウシアンぼかしは、高度なソフトウェアで元に戻すことができます。最大限のセキュリティを確保するには、単色マスクまたは重度のピクセレーションを使用して、顔のデータを完全に破壊してください。',
    'ko': '흐림 방법에 따라 다릅니다. 단순한 가우시안 흐림은 고급 소프트웨어로 되돌릴 수 있습니다. 최대한의 보안을 위해 단색 마스크 또는 픽셀화를 사용하여 얼굴 데이터를 영구적으로 파괴하세요.',
    'pt': 'Depende do método de desfoque. O desfoque gaussiano simples às vezes pode ser revertido com software avançado. Para máxima segurança, use máscaras de cor sólida ou pixelização pesada que destrua permanentemente os dados faciais.',
    'ru': 'Это зависит от метода размытия. Простое гауссово размытие иногда можно отменить с помощью продвинутого программного обеспечения. Для максимальной безопасности используйте маски сплошного цвета или сильную пикселизацию, которая необратимо уничтожает данные лица.',
    'ar': 'يعتمد على طريقة التمويه. يمكن عكس التمويه Gaussian البسيط أحيانًا باستخدام برامج متقدمة. للحصول على أقصى درجات الأمان، استخدم أقنعة بألوان ثابتة أو تحويل إلى بكسل كثيف يدمر بيانات الوجه بشكل دائم.'
};

TRANSLATIONS['blurFaces.faq2.question'] = {
    'en': 'Is it legal to post photos with faces visible?',
    'zh': '发布带可见面部的照片合法吗？',
    'es': '¿Es legal publicar fotos con caras visibles?',
    'fr': 'Est-il légal de publier des photos avec des visages visibles ?',
    'de': 'Ist es legal, Fotos mit sichtbaren Gesichtern zu posten?',
    'ja': '顔が見える写真を投稿することは合法ですか？',
    'ko': '얼굴이 보이는 사진을 게시하는 것이 합법인가요?',
    'pt': 'É legal postar fotos com rostos visíveis?',
    'ru': 'Законно ли публиковать фотографии с видимыми лицами?',
    'ar': 'هل من القانوني نشر صور بوجوه مرئية؟'
};

TRANSLATIONS['blurFaces.faq2.answer'] = {
    'en': 'Laws vary by country. In public spaces, photography is generally allowed, but publishing those images may require consent. When in doubt, blur faces or obtain written permission. See our guide on social media privacy.',
    'zh': '法律因国家/地区而异。在公共场所，摄影通常是允许的，但发布这些图像可能需要征得同意。如有疑问，请模糊面部或获取书面许可。请参阅我们的社交媒体隐私指南。',
    'es': 'Las leyes varían según el país. En espacios públicos, la fotografía generalmente está permitida, pero publicar esas imágenes puede requerir consentimiento. En caso de duda, difuminé caras u obtenga permiso escrito. Consulte nuestra guía sobre privacidad en redes sociales.',
    'fr': 'Les lois varient selon les pays. Dans les espaces publics, la photographie est généralement autorisée, mais la publication de ces images peut nécessiter un consentement. En cas de doute, floutez les visages ou obtenez une autorisation écrite. Consultez notre guide sur la confidentialité sur les réseaux sociaux.',
    'de': 'Gesetze variieren je nach Land. In der Öffentlichkeit ist Fotografie im Allgemeinen erlaubt, aber die Veröffentlichung dieser Bilder kann eine Zustimmung erfordern. Im Zweifelsfall verwischen Sie Gesichter oder holen Sie eine schriftliche Genehmigung ein. Sehen Sie sich unseren Leitfaden zum Datenschutz in sozialen Medien an.',
    'ja': '法律は国によって異なります。公共空間では、撮影は一般的に許可されていますが、それらの画像を公開するには同意が必要な場合があります。疑わしい場合は、顔をぼかすか、書面による許可を取得してください。ソーシャルメディアのプライバシーに関するガイドをご覧ください。',
    'ko': '법은 국가에 따라 다릅니다. 공공장소에서는 촬영이 일반적으로 허용되지만, 이러한 이미지를 게시하려면 동의가 필요할 수 있습니다. 의심스러운 경우 얼굴을 흐리게 하거나 서면 허가를 받으세요. 소셜 미디어 개인정보 보호에 대한 가이드를 참조하세요.',
    'pt': 'As leis variam por país. Em espaços públicos, a fotografia geralmente é permitida, mas publicar essas imagens pode exigir consentimento. Em caso de dúvida, desfoque rostos ou obtenha permissão por escrito. Consulte nosso guia sobre privacidade em redes sociais.',
    'ru': 'Законы различаются в зависимости от страны. В общественных местах фотография обычно разрешена, но публикация этих изображений может требовать согласия. В случае сомнений размывайте лица или получите письменное разрешение. Смотрите наш гид о конфиденциальности в социальных сетях.',
    'ar': 'تختلف القوانين من بلد لآخر. في الأماكن العامة، عادة ما يُسمح بالتصوير الفوتوغرافي، لكن نشر تلك الصور قد يتطلب موافقة. عند الشك، قم بتمويه الوجوه أو الحصول على إذن كتابي. راجع دليلنا حول خصوصية وسائل التواصل الاجتماعي.'
};

TRANSLATIONS['blurFaces.faq3.question'] = {
    'en': 'What\'s the best free tool to blur faces?',
    'zh': '模糊面部的最佳免费工具是什么？',
    'es': '¿Cuál es la mejor herramienta gratuita para difuminar caras?',
    'fr': 'Quel est le meilleur outil gratuit pour flouter les visages ?',
    'de': 'Was ist das beste kostenlose Tool zum Verwischen von Gesichtern?',
    'ja': '顔をぼかすのに最適な無料ツールは何ですか？',
    'ko': '얼굴을 흐리게 하는 가장 좋은 무료 도구는 무엇인가요?',
    'pt': 'Qual é a melhor ferramenta gratuita para desfocar rostos?',
    'ru': 'Какой лучший бесплатный инструмент для размытия лиц?',
    'ar': 'ما هي أفضل أداة مجانية لتمويه الوجوه؟'
};

TRANSLATIONS['blurFaces.faq3.answer'] = {
    'en': 'Look for tools that process images locally (no server uploads), support multiple formats, and offer various blur styles. Our free tool meets all these criteria and works entirely in your browser.',
    'zh': '寻找在本地处理图像的工具（无服务器上传），支持多种格式，并提供各种模糊样式。我们的免费工具满足所有这些标准，并完全在您的浏览器中工作。',
    'es': 'Busque herramientas que procesen imágenes localmente (sin cargas a servidores), admitan múltiples formatos y ofrezcan varios estilos de desenfoque. Nuestra herramienta gratuita cumple todos estos criterios y funciona completamente en su navegador.',
    'fr': 'Recherchez des outils qui traitent les images localement (pas de téléchargement sur des serveurs), prennent en charge plusieurs formats et proposent divers styles de flou. Notre outil gratuit répond à tous ces critères et fonctionne entièrement dans votre navigateur.',
    'de': 'Suchen Sie nach Tools, die Bilder lokal verarbeiten (keine Server-Uploads), mehrere Formate unterstützen und verschiedene Verwischungsstile bieten. Unser kostenloses Tool erfüllt all diese Kriterien und funktioniert vollständig in Ihrem Browser.',
    'ja': '画像をローカルで処理する（サーバーにアップロードしない）、複数の形式をサポートし、さまざまなぼかしスタイルを提供するツールを探してください。当社の無料ツールはすべての基準を満たし、ブラウザ内で完全に動作します。',
    'ko': '이미지를 로컬에서 처리하고(서버 업로드 없음), 다양한 형식을 지원하며, 여러 흐림 스타일을 제공하는 도구를 찾으세요. 우리의 무료 도구는 이러한 모든 기준을 충족하며 브라우저에서 완전히 작동합니다.',
    'pt': 'Procure ferramentas que processem imagens localmente (sem envios para servidores), suportem vários formatos e ofereçam vários estilos de desfoque. Nossa ferramenta gratuita atende a todos esses critérios e funciona inteiramente no seu navegador.',
    'ru': 'Ищите инструменты, которые обрабатывают изображения локально (без загрузки на сервер), поддерживают несколько форматов и предлагают различные стили размытия. Наш бесплатный инструмент соответствует всем этим критериям и работает полностью в вашем браузере.',
    'ar': 'ابحث عن أدوات تعالج الصور محليًا (لا تقوم برفعها إلى خوادم)، تدعم تنسيقات متعددة، وتقدم أنماط تمويه مختلفة. أداتنا المجانية تلبي جميع هذه المعايير وتعمل بالكامل في متصفحك.'
};

TRANSLATIONS['blurFaces.cta.title'] = {
    'en': 'Ready to Protect Privacy in Your Photos?',
    'zh': '准备好保护您照片中的隐私了吗？',
    'es': '¿Listo para proteger la privacidad en tus fotos?',
    'fr': 'Prêt à protéger la confidentialité dans vos photos ?',
    'de': 'Bereit, die Privatsphäre in Ihren Fotos zu schützen?',
    'ja': '写真のプライバシーを保護する準備はできましたか？',
    'ko': '사진에서 개인정보를 보호할 준비가 되셨나요?',
    'pt': 'Pronto para Proteger a Privacidade em Suas Fotos?',
    'ru': 'Готовы защитить конфиденциальность на ваших фотографиях?',
    'ar': 'هل أنت مستعد لحماية الخصوصية في صورك؟'
};

TRANSLATIONS['blurFaces.cta.text'] = {
    'en': 'Start blurring faces now with our free, secure, and easy-to-use tool. No signup required!',
    'zh': '立即使用我们免费、安全且易于使用的工具开始模糊面部。无需注册！',
    'es': '¡Comience a difuminar caras ahora con nuestra herramienta gratuita, segura y fácil de usar. ¡No se requiere registro!',
    'fr': 'Commencez à flouter les visages dès maintenant avec notre outil gratuit, sécurisé et facile à utiliser. Aucune inscription requise !',
    'de': 'Beginnen Sie jetzt mit unserem kostenlosen, sicheren und benutzerfreundlichen Tool, Gesichter zu verwischen. Keine Anmeldung erforderlich!',
    'ja': '今すぐ無料で安全で使いやすいツールで顔のぼかしを始めましょう。登録は不要です！',
    'ko': '지금 바로 무료로 안전하고 사용하기 쉬운 도구로 얼굴 흐림을 시작하세요. 가입이 필요 없습니다!',
    'pt': 'Comece a desfocar rostos agora com nossa ferramenta gratuita, segura e fácil de usar. Não é necessário cadastro!',
    'ru': 'Начните размывать лица прямо сейчас с помощью нашего бесплатного, безопасного и простого в использовании инструмента. Регистрация не требуется!',
    'ar': 'ابدأ بتمويه الوجوه الآن باستخدام أداتنا المجانية والآمنة وسهلة الاستخدام. لا يلزم التسجيل!'
};

TRANSLATIONS['blurFaces.cta.button'] = {
    'en': 'Try It Free Now →',
    'zh': '立即免费试用 →',
    'es': 'Pruébalo Gratis Ahora →',
    'fr': 'Essayez-le Gratuitement Maintenant →',
    'de': 'Jetzt Kostenlos Testen →',
    'ja': '今すぐ無料でお試し →',
    'ko': '지금 무료로 사용해 보기 →',
    'pt': 'Experimente Grátis Agora →',
    'ru': 'Попробуйте Бесплатно Сейчас →',
    'ar': 'جربها مجانًا الآن →'
};

TRANSLATIONS['blurFaces.related.title'] = {
    'en': 'Related Articles',
    'zh': '相关文章',
    'es': 'Artículos Relacionados',
    'fr': 'Articles Connexes',
    'de': 'Verwandte Artikel',
    'ja': '関連記事',
    'ko': '관련 기사',
    'pt': 'Artigos Relacionados',
    'ru': 'Похожие статьи',
    'ar': 'مقالات ذات صلة'
};

TRANSLATIONS['blurFaces.related.article1.title'] = {
    'en': 'Complete Social Media Privacy Guide',
    'zh': '完整的社交媒体隐私指南',
    'es': 'Guía Completa de Privacidad en Redes Sociales',
    'fr': 'Guide Complet de Confidentialité sur les Médias Sociaux',
    'de': 'Vollständiger Datenschutzleitfaden für soziale Medien',
    'ja': 'ソーシャルメディアプライバシー完全ガイド',
    'ko': '완전한 소셜 미디어 개인정보 보호 가이드',
    'pt': 'Guia Completo de Privacidade em Mídias Sociais',
    'ru': 'Полное руководство по конфиденциальности в социальных сетях',
    'ar': 'دليل كامل لخصوصية وسائل التواصل الاجتماعي'
};

TRANSLATIONS['blurFaces.related.article1.desc'] = {
    'en': 'Protect your personal information across all platforms',
    'zh': '在所有平台上保护您的个人信息',
    'es': 'Proteja su información personal en todas las plataformas',
    'fr': 'Protégez vos informations personnelles sur toutes les plateformes',
    'de': 'Schützen Sie Ihre persönlichen Informationen auf allen Plattformen',
    'ja': 'すべてのプラットフォームで個人情報を保護する',
    'ko': '모든 플랫폼에서 개인정보 보호',
    'pt': 'Proteja suas informações pessoais em todas as plataformas',
    'ru': 'Защитите свою личную информацию на всех платформах',
    'ar': 'حماية معلوماتك الشخصية عبر جميع المنصات'
};

TRANSLATIONS['blurFaces.related.article2.title'] = {
    'en': 'GDPR Compliance for Images',
    'zh': '图像GDPR合规性',
    'es': 'Cumplimiento del GDPR para Imágenes',
    'fr': 'Conformité au RGPD pour les Images',
    'de': 'DSGVO-Konformität für Bilder',
    'ja': '画像のGDPRコンプライアンス',
    'ko': '이미지 GDPR 준수',
    'pt': 'Conformidade com o GDPR para Imagens',
    'ru': 'Соблюдение GDPR для изображений',
    'ar': 'الامتثال لـ GDPR للصور'
};

TRANSLATIONS['blurFaces.related.article2.desc'] = {
    'en': 'Understanding legal requirements for photo publishing',
    'zh': '了解照片发布的法律要求',
    'es': 'Comprendiendo los requisitos legales para la publicación de fotos',
    'fr': 'Comprendre les exigences légales pour la publication de photos',
    'de': 'Verständnis der rechtlichen Anforderungen für die Fotoveröffentlichung',
    'ja': '写真投稿の法的要件を理解する',
    'ko': '사진 게시에 대한 법적 요구 사항 이해',
    'pt': 'Entendendo os requisitos legais para publicação de fotos',
    'ru': 'Понимание юридических требований для публикации фотографий',
    'ar': 'فهم المتطلبات القانونية لنشر الصور'
};

// 404 Page translations
TRANSLATIONS['404.title'] = {
    'en': 'Page Not Found - toolvx.com | Free Image & PDF Redaction Tool',
    'zh': '页面未找到 - toolvx.com | 免费图像与PDF脱敏工具',
    'es': 'Página no encontrada - toolvx.com | Herramienta gratuita de edición de imágenes y PDF',
    'fr': 'Page non trouvée - toolvx.com | Outil gratuit d\'édition d\'images et de PDF',
    'de': 'Seite nicht gefunden - toolvx.com | Kostenloses Bild- und PDF-Bearbeitungs-Tool',
    'ja': 'ページが見つかりません - toolvx.com | 無料画像およびPDF編集ツール',
    'ko': '페이지를 찾을 수 없음 - toolvx.com | 무료 이미지 및 PDF 편집 도구',
    'pt': 'Página não encontrada - toolvx.com | Ferramenta gratuita de edição de imagens e PDF',
    'ru': 'Страница не найдена - toolvx.com | Бесплатный инструмент для редактирования изображений и PDF',
    'ar': 'الصفحة غير موجودة - toolvx.com | أداة تحرير الصور وملفات PDF المجانية'
};

TRANSLATIONS['404.heading'] = {
    'en': 'Page Not Found',
    'zh': '页面未找到',
    'es': 'Página no encontrada',
    'fr': 'Page non trouvée',
    'de': 'Seite nicht gefunden',
    'ja': 'ページが見つかりません',
    'ko': '페이지를 찾을 수 없음',
    'pt': 'Página não encontrada',
    'ru': 'Страница не найдена',
    'ar': 'الصفحة غير موجودة'
};

TRANSLATIONS['404.description'] = {
    'en': 'Oops! The page you\'re looking for doesn\'t exist or has been moved.',
    'zh': '哎呀！您要找的页面不存在或已被移动。',
    'es': '¡Ups! La página que buscas no existe o ha sido movida.',
    'fr': 'Oups ! La page que vous recherchez n\'existe pas ou a été déplacée.',
    'de': 'Ups! Die gesuchte Seite existiert nicht oder wurde verschoben.',
    'ja': 'おっと！お探しのページは存在しないか、移動されました。',
    'ko': '이런! 찾으시는 페이지가 존재하지 않거나 이동되었습니다.',
    'pt': 'Ops! A página que você procura não existe ou foi movida.',
    'ru': 'Упс! Страница, которую вы ищете, не существует или была перемещена.',
    'ar': 'عفوًا! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
};

TRANSLATIONS['404.subtitle'] = {
    'en': 'But don\'t worry! You can still use our free tool to:',
    'zh': '但别担心！您仍然可以使用我们的免费工具：',
    'es': '¡Pero no te preocupes! Aún puedes usar nuestra herramienta gratuita para:',
    'fr': 'Mais ne vous inquiétez pas ! Vous pouvez toujours utiliser notre outil gratuit pour :',
    'de': 'Aber keine Sorge! Sie können unser kostenloses Tool noch verwenden, um:',
    'ja': 'でも心配しないで！引き続き無料ツールを使用できます：',
    'ko': '하지만 걱정 마세요! 여전히 무료 도구를 사용할 수 있습니다:',
    'pt': 'Mas não se preocupe! Você ainda pode usar nossa ferramenta gratuita para:',
    'ru': 'Но не волнуйтесь! Вы всё ещё можете использовать наш бесплатный инструмент, чтобы:',
    'ar': 'ولكن لا تقلق! لا يزال بإمكانك استخدام أداتنا المجانية لـ:'
};

TRANSLATIONS['404.feature1'] = {
    'en': 'Blur faces and mask sensitive information in photos',
    'zh': '模糊面部并遮盖照片中的敏感信息',
    'es': 'Difuminar rostros y ocultar información sensible en fotos',
    'fr': 'Flouter les visages et masquer les informations sensibles sur les photos',
    'de': 'Gesichter verwischen und sensible Informationen auf Fotos maskieren',
    'ja': '写真の顔をぼかし、機密情報を隠す',
    'ko': '사진에서 얼굴을 흐리게 하고 민감한 정보를 가리기',
    'pt': 'Desfocar rostos e ocultar informações sensíveis em fotos',
    'ru': 'Размыть лица и скрыть конфиденциальную информацию на фотографиях',
    'ar': 'طمس الوجوه وإخفاء المعلومات الحساسة في الصور'
};

TRANSLATIONS['404.feature2'] = {
    'en': 'Redact and sanitize multi-page PDF documents securely',
    'zh': '安全地脱敏多页PDF文档',
    'es': 'Editar y redactar documentos PDF de varias páginas de forma segura',
    'fr': 'Éditer et rédiger des documents PDF multi-pages en toute sécurité',
    'de': 'Mehrseitige PDF-Dokumente sicher bearbeiten und bearbeiten',
    'ja': '複数ページのPDF文書を安全に編集および編集する',
    'ko': '다중 페이지 PDF 문서를 안전하게 편집 및 편집',
    'pt': 'Editar e redigir documentos PDF de várias páginas com segurança',
    'ru': 'Безопасно редактировать многостраничные PDF-документы',
    'ar': 'تحرير وتحرير مستندات PDF متعددة الصفحات بأمان'
};

TRANSLATIONS['404.feature3'] = {
    'en': 'Protect your privacy with 100% local processing',
    'zh': '通过100%本地处理保护您的隐私',
    'es': 'Protege tu privacidad con procesamiento 100% local',
    'fr': 'Protéger votre vie privée avec un traitement 100% local',
    'de': 'Schützen Sie Ihre Privatsphäre mit 100% lokaler Verarbeitung',
    'ja': '100%ローカル処理でプライバシーを保護',
    'ko': '100% 로컬 처리로 개인 정보 보호',
    'pt': 'Proteja sua privacidade com processamento 100% local',
    'ru': 'Защитите свою конфиденциальность с помощью 100% локальной обработки',
    'ar': 'حماية خصوصيتك مع المعالجة المحلية 100%'
};

TRANSLATIONS['404.backHome'] = {
    'en': '← Back to Home',
    'zh': '← 返回首页',
    'es': '← Volver al inicio',
    'fr': '← Retour à l\'accueil',
    'de': '← Zurück zur Startseite',
    'ja': '← ホームに戻る',
    'ko': '← 홈으로 돌아가기',
    'pt': '← Voltar ao início',
    'ru': '← На главную',
    'ar': '← العودة إلى الصفحة الرئيسية'
};

TRANSLATIONS['404.needHelp'] = {
    'en': 'Need help? Visit our main site at <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'zh': '需要帮助？请访问我们的主网站 <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'es': '¿Necesitas ayuda? Visita nuestro sitio principal en <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'fr': 'Besoin d\'aide ? Visitez notre site principal sur <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'de': 'Brauchen Sie Hilfe? Besuchen Sie unsere Hauptseite unter <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'ja': 'ヘルプが必要ですか？メインサイトはこちら <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'ko': '도움이 필요하신가요? 메인 사이트를 방문하세요 <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'pt': 'Precisa de ajuda? Visite nosso site principal em <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'ru': 'Нужна помощь? Посетите наш основной сайт на <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>',
    'ar': 'هل تحتاج إلى مساعدة؟ قم بزيارة موقعنا الرئيسي على <a href="https://toolvx.com" class="text-blue-400 hover:text-blue-300 underline">toolvx.com</a>'
};

// Auto-initialize - Execute as soon as script loads
console.log('🚀 i18n.js loaded, starting initialization...');
initI18n();
