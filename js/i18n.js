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

// SEO Why Choose Section
TRANSLATIONS['seo.whyChoose.free'] = {
    'en': '100% Free Online Photo Editor',
    'zh': '100%免费在线照片编辑器',
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
    'zh': '关于图像编辑的常见问题',
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
    'zh': '编辑银行对账单',
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
    'zh': '编辑PDF文档',
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
    'en': 'Multi-page PDF support with page-by-page editing',
    'zh': '多页PDF支持，逐页编辑',
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
    'zh': '什么是图像编辑，为什么我需要它？',
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
    'zh': '图像编辑是从照片和文档中永久删除或遮盖敏感信息的过程。无论您是在线分享截图、提交文档进行验证，还是在社交媒体上发布照片，编辑都可以通过隐藏面部、身份证号、地址和财务信息等个人数据来帮助保护您的隐私。我们的免费在线工具使这一过程简单而安全。',
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
    'en': 'How does this local image editor protect my privacy?',
    'zh': '这个本地图像编辑器如何保护我的隐私？',
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
    'en': 'Unlike most online photo editors, our tool processes everything 100% locally in your browser. This means your images and PDFs are never uploaded to any server. All editing happens on your own device using JavaScript, ensuring complete confidentiality. This is crucial when handling sensitive documents like passport copies, bank statements, medical records, or confidential business documents.',
    'zh': '与大多数在线照片编辑器不同，我们的工具在浏览器中100%本地处理所有内容。这意味着您的图片和PDF永远不会上传到任何服务器。所有编辑都使用JavaScript在您自己的设备上完成，确保完全机密。这在处理护照副本、银行对账单、医疗记录或机密商业文档等敏感文档时至关重要。',
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
    'en': 'Can I edit multi-page PDF files for free?',
    'zh': '我可以免费编辑多页PDF文件吗？',
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
    'en': 'Yes! Our free PDF redaction tool supports multi-page documents. You can navigate through pages, edit each page individually, and export the entire document as a single PDF file. Each page maintains its quality, and the exported PDF preserves all your redactions. This is perfect for editing contracts, legal documents, reports, or any multi-page PDF that needs sensitive information removed.',
    'zh': '是的！我们的免费PDF编辑工具支持多页文档。您可以浏览页面，单独编辑每个页面，并将整个文档导出为单个PDF文件。每个页面都保持其质量，导出的PDF保留所有您的编辑。这非常适合编辑合同、法律文档、报告或任何需要删除敏感信息的多页PDF。',
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
    'zh': '要有效模糊面部：(1) 将照片上传到我们的工具，(2) 通过点击并拖动选择覆盖面部的区域，(3) 选择纯色或模糊效果，(4) 如果需要，调整强度以实现完全覆盖，(5) 导出编辑后的图像。为了获得最佳效果，请确保选择完全覆盖面部特征。您可以使用黑色或白色方框以获得最大程度的隐蔽性，或者选择肤色以获得更自然的外观。',
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
    'zh': '这真的是付费编辑软件的免费替代品吗？',
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
    'zh': '绝对是的！我们的工具完全免费，没有隐藏成本。与Adobe Acrobat Pro等昂贵软件或基于订阅的服务不同，我们免费提供专业级编辑功能。没有水印，没有使用限制，也不需要注册。我们相信隐私保护应该对每个人都可以访问。',
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
    'zh': '我可以编辑和导出哪些文件格式？',
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
    'zh': '是的！我们的响应式设计在运行iOS或Android的智能手机和平板电脑上完美工作。您可以直接从相机胶卷上传照片、拍摄新照片或选择PDF文件。触摸友好的界面使在小屏幕上选择编辑区域变得容易。一切都在您的移动浏览器中运行 - 无需安装应用程序。',
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
    'en': '🔒 Secure Document Editing',
    'zh': '🔒 安全的文档编辑',
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
    'en': 'Edit sensitive documents safely with our client-side processor. Perfect for legal documents, medical records, financial statements, and personal identification cards. No data leaves your device.',
    'zh': '使用我们的客户端处理器安全地编辑敏感文档。非常适合法律文档、医疗记录、财务报表和个人身份证件。数据不会离开您的设备。',
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
    'zh': '📄 PDF编辑变得简单',
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
    'en': 'Professional PDF editing without expensive software. Redact text, mask images, hide sensitive data across multiple pages. Export as clean PDF ready for sharing or archiving.',
    'zh': '无需昂贵软件的专业PDF编辑。跨多页编辑文本、遮盖图像、隐藏敏感数据。导出为干净的PDF，准备分享或存档。',
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
    'en': 'free online image redaction tool, how to blur faces in photos online, mask sensitive information in screenshots, hide ID card number in image, secure photo editor no upload, offline image redaction software, edit PDF without Adobe, free PDF redaction tool online, blur license plate in photo, anonymize document before sharing, remove personal data from images, protect privacy in photos, obscure credit card number in receipt, hide social security number in document, free alternative to Photoshop for redaction, browser-based image editor secure, client-side photo processing tool, edit bank statement PDF free, redact medical records online, hide email address in screenshot, mosaic effect for photos online, pixelate faces in images free, whiteout text in image online, black box redaction tool, multi-page PDF editor free, edit contract PDF online secure',
    'zh': '免费在线图像编辑工具，如何在线模糊照片中的面部，遮盖截图中的敏感信息，隐藏图像中的身份证号码，安全照片编辑器无上传，离线图像编辑软件，无需Adobe编辑PDF，免费在线PDF编辑工具，模糊照片中的车牌，分享前匿名化文档，从图像中删除个人数据，保护照片中的隐私，遮盖收据中的信用卡号码，隐藏文档中的社会安全号码，Photoshop编辑的免费替代品，基于浏览器的安全图像编辑器，客户端照片处理工具，免费编辑银行对账单PDF，在线编辑医疗记录，隐藏截图中的电子邮件地址，在线照片马赛克效果，免费像素化图像中的面部，在线图像中涂白文本，黑盒编辑工具，免费多页PDF编辑器，安全在线编辑合同PDF',
    'es': 'herramienta gratuita de edición de imágenes en línea, cómo difuminar rostros en fotos en línea, ocultar información confidencial en capturas de pantalla, ocultar número de tarjeta de identificación en imagen, editor de fotos seguro sin carga, software de edición de imágenes sin conexión, editar PDF sin Adobe, herramienta gratuita de edición de PDF en línea, difuminar matrícula en foto, anonimizar documento antes de compartir, eliminar datos personales de imágenes, proteger privacidad en fotos, ocultar número de tarjeta de crédito en recibo, ocultar número de seguridad social en documento, alternativa gratuita a Photoshop para edición, editor de imágenes basado en navegador seguro, herramienta de procesamiento de fotos del lado del cliente, editar extracto bancario PDF gratis, editar registros médicos en línea, ocultar dirección de correo electrónico en captura de pantalla, efecto mosaico para fotos en línea, pixelar rostros en imágenes gratis, tachar texto en imagen en línea, herramienta de edición de caja negra, editor de PDF de varias páginas gratis, editar contrato PDF en línea seguro',
    'fr': 'outil gratuit d\'édition d\'images en ligne, comment flouter les visages dans les photos en ligne, masquer les informations sensibles dans les captures d\'écran, masquer le numéro de carte d\'identité dans l\'image, éditeur de photos sécurisé sans téléchargement, logiciel d\'édition d\'images hors ligne, modifier PDF sans Adobe, outil gratuit d\'édition PDF en ligne, flouter la plaque d\'immatriculation dans la photo, anonymiser le document avant de partager, supprimer les données personnelles des images, protéger la vie privée dans les photos, masquer le numéro de carte de crédit sur le reçu, masquer le numéro de sécurité sociale dans le document, alternative gratuite à Photoshop pour l\'édition, éditeur d\'images basé sur un navigateur sécurisé, outil de traitement de photos côté client, modifier le relevé bancaire PDF gratuitement, éditer les dossiers médicaux en ligne, masquer l\'adresse e-mail dans la capture d\'écran, effet mosaïque pour les photos en ligne, pixéliser les visages dans les images gratuitement, corriger le texte dans l\'image en ligne, outil d\'édition de boîte noire, éditeur PDF multi-pages gratuit, modifier le contrat PDF en ligne sécurisé',
    'de': 'kostenloses Online-Bildbearbeitungstool, wie man Gesichter in Fotos online verwischt, sensible Informationen in Screenshots maskieren, Ausweisnummer im Bild verbergen, sicherer Fotoeditor ohne Upload, Offline-Bildbearbeitungssoftware, PDF ohne Adobe bearbeiten, kostenloses PDF-Bearbeitungstool online, Kennzeichen im Foto verwischen, Dokument vor dem Teilen anonymisieren, persönliche Daten aus Bildern entfernen, Privatsphäre in Fotos schützen, Kreditkartennummer auf Quittung verbergen, Sozialversicherungsnummer im Dokument verbergen, kostenlose Alternative zu Photoshop zum Bearbeiten, browserbasierter sicherer Bildeditor, clientseitiges Fotobearbeitungstool, Kontoauszug PDF kostenlos bearbeiten, medizinische Aufzeichnungen online bearbeiten, E-Mail-Adresse im Screenshot verbergen, Mosaikeffekt für Fotos online, Gesichter in Bildern kostenlos verpixeln, Text im Bild online schwärzen, Blackbox-Bearbeitungstool, mehrseitiger PDF-Editor kostenlos, Vertrag PDF online sicher bearbeiten',
    'ja': '無料オンライン画像編集ツール、オンラインで写真の顔をぼかす方法、スクリーンショットの機密情報をマスク、画像のID番号を隠す、アップロード不要の安全な写真エディター、オフライン画像編集ソフトウェア、AdobeなしでPDFを編集、無料オンラインPDF編集ツール、写真のナンバープレートをぼかす、共有前に文書を匿名化、画像から個人データを削除、写真のプライバシーを保護、領収書のクレジットカード番号を隠す、文書の社会保障番号を隠す、編集用のPhotoshopの無料代替品、ブラウザベースの安全な画像エディター、クライアントサイドの写真処理ツール、銀行取引明細書PDFを無料で編集、オンラインで医療記録を編集、スクリーンショットのメールアドレスを隠す、オンライン写真のモザイク効果、画像の顔を無料でピクセル化、オンラインで画像のテキストを塗りつぶし、ブラックボックス編集ツール、無料の複数ページPDFエディター、安全にオンラインで契約PDFを編集',
    'ko': '무료 온라인 이미지 편집 도구, 온라인에서 사진의 얼굴을 흐리게 하는 방법, 스크린샷의 민감한 정보 마스킹, 이미지의 신분증 번호 숨기기, 업로드 불필요한 안전한 사진 편집기, 오프라인 이미지 편집 소프트웨어, Adobe 없이 PDF 편집, 무료 온라인 PDF 편집 도구, 사진의 번호판 흐리기, 공유 전 문서 익명화, 이미지에서 개인 데이터 제거, 사진의 개인 정보 보호, 영수증의 신용카드 번호 숨기기, 문서의 사회 보장 번호 숨기기, 편집을 위한 Photoshop 무료 대안, 브라우저 기반 안전한 이미지 편집기, 클라이언트 측 사진 처리 도구, 은행 명세서 PDF 무료 편집, 온라인에서 의료 기록 편집, 스크린샷의 이메일 주소 숨기기, 온라인 사진 모자이크 효과, 이미지의 얼굴 무료 픽셀화, 온라인에서 이미지의 텍스트 칠하기, 블랙박스 편집 도구, 무료 다중 페이지 PDF 편집기, 안전하게 온라인에서 계약 PDF 편집',
    'pt': 'ferramenta gratuita de edição de imagens online, como desfocar rostos em fotos online, mascarar informações confidenciais em capturas de tela, ocultar número de cartão de identificação na imagem, editor de fotos seguro sem upload, software de edição de imagens offline, editar PDF sem Adobe, ferramenta gratuita de edição de PDF online, desfocar placa de carro na foto, anonimizar documento antes de compartilhar, remover dados pessoais de imagens, proteger privacidade em fotos, ocultar número de cartão de crédito no recibo, ocultar número de seguridade social no documento, alternativa gratuita ao Photoshop para edição, editor de imagens baseado em navegador seguro, ferramenta de processamento de fotos do lado do cliente, editar extrato bancário PDF grátis, editar registros médicos online, ocultar endereço de e-mail na captura de tela, efeito mosaico para fotos online, pixelizar rostos em imagens grátis, corrigir texto na imagem online, ferramenta de edição de caixa preta, editor de PDF de várias páginas grátis, editar contrato PDF online seguro',
    'ru': 'бесплатный онлайн-инструмент для редактирования изображений, как размыть лица на фотографиях онлайн, маскировать конфиденциальную информацию на скриншотах, скрыть номер удостоверения личности на изображении, безопасный фоторедактор без загрузки, офлайн-программа для редактирования изображений, редактировать PDF без Adobe, бесплатный онлайн-инструмент для редактирования PDF, размыть номерной знак на фото, анонимизировать документ перед публикацией, удалить личные данные с изображений, защитить конфиденциальность на фотографиях, скрыть номер кредитной карты на квитанции, скрыть номер социального страхования в документе, бесплатная альтернатива Photoshop для редактирования, браузерный безопасный редактор изображений, клиентский инструмент обработки фотографий, редактировать банковскую выписку PDF бесплатно, редактировать медицинские записи онлайн, скрыть адрес электронной почты на скриншоте, эффект мозаики для фото онлайн, пикселизировать лица на изображениях бесплатно, закрасить текст на изображении онлайн, инструмент редактирования черного ящика, бесплатный многостраничный редактор PDF, безопасно редактировать контракт PDF онлайн',
    'ar': 'أداة مجانية لتحرير الصور عبر الإنترنت، كيفية طمس الوجوه في الصور عبر الإنترنت، إخفاء المعلومات الحساسة في لقطات الشاشة، إخفاء رقم بطاقة الهوية في الصورة، محرر صور آمن بدون تحميل، برنامج تحرير الصور دون اتصال، تحرير PDF بدون Adobe، أداة مجانية لتحرير PDF عبر الإنترنت، طمس لوحة الترخيص في الصورة، إخفاء هوية المستند قبل المشاركة، إزالة البيانات الشخصية من الصور، حماية الخصوصية في الصور، إخفاء رقم بطاقة الائتمان في الإيصال، إخفاء رقم الضمان الاجتماعي في المستند، بديل مجاني لـ Photoshop للتحرير، محرر صور قائم على المتصفح آمن، أداة معالجة صور من جانب العميل، تحرير كشف حساب بنكي PDF مجانًا، تحرير السجلات الطبية عبر الإنترنت، إخفاء عنوان البريد الإلكتروني في لقطة الشاشة، تأثير الفسيفساء للصور عبر الإنترنت، بكسلة الوجوه في الصور مجانًا، تصحيح النص في الصورة عبر الإنترنت، أداة تحرير الصندوق الأسود، محرر PDF متعدد الصفحات مجاني، تحرير عقد PDF عبر الإنترنت بأمان'
};

// Auto-initialize - Execute as soon as script loads
console.log('🚀 i18n.js loaded, starting initialization...');
initI18n();
