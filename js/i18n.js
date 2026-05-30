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
    
    // Upload Section
    'upload.prompt': {
        'en': 'Upload an image or PDF to start redacting',
        'zh': '上传图片或PDF开始编辑',
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
        'zh': '选择要编辑的区域',
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
        'zh': '点击"选择要编辑的区域"按钮，然后在图像上点击并拖动以选择要遮盖的区域。释放以自动应用效果。',
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
        'zh': '对于多页PDF，使用上一页/下一页按钮在页面之间导航。导出前独立编辑每个页面。',
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
        'zh': '点击"下载"保存您编辑的文件，保留原始文件名。对于PDF，所有编辑过的页面将合并为一个文件。',
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
        'zh': '选择要编辑的区域',
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
        'zh': '下载编辑后的文件',
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
        'zh': '您的文件绝不会离开您的设备。所有编辑都在浏览器中直接进行，以实现最大的隐私和安全性。',
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
        'zh': '您可以完全控制要编辑的区域。没有自动检测 - 您决定确切要遮盖的内容。',
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
        'zh': '在单个PDF文件中编辑多个页面。在页面之间导航，应用不同的效果，并导出为完整的多页PDF。',
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
        'zh': '为什么选择我们的免费图像编辑工具？',
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
        'zh': '关于图像编辑的常见问题',
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

// Auto-initialize - Execute as soon as script loads
console.log('🚀 i18n.js loaded, starting initialization...');
initI18n();
