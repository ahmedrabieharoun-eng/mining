/* ============================================================
   i18n.js — Full UI translation layer (en, ar, fr, ru, fa, hi)
   ------------------------------------------------------------
   - Static & dynamic text (toasts, buttons, lists, errors...) is translated
     automatically from the English source text.
   - Add a new string: append a row to D below:  [en, ar, fr, ru, fa, hi]
     Use {0},{1}.. for numbers and {t0} for free text inside a sentence.
   - Brand / currency names (CRYSTAL, TON, Adsgram, GigaPub...) stay as-is.
   ============================================================ */
(function () {
  var LANGS = ['en', 'ar', 'fr', 'ru', 'fa', 'hi'];
  var cur = 'en';
  try { cur = localStorage.getItem('appLang') || 'en'; } catch (_) {}
  if (LANGS.indexOf(cur) < 0) cur = 'en';

  /* ---------- Strings that exist ONLY here: [en, ar, fr, ru, fa, hi] ---------- */
  var D = [
    // ── General / loading / errors
    ["MINING DEEPER", "تعدين أعمق", "MINAGE PLUS PROFOND", "ДОБЫЧА ГЛУБЖЕ", "استخراج عمیق‌تر", "और गहरी माइनिंग"],
    ["Network error", "خطأ في الاتصال", "Erreur réseau", "Ошибка сети", "خطای شبکه", "नेटवर्क त्रुटि"],
    ["Unable to connect to the server. Open the app from the bot button inside Telegram.", "تعذر الاتصال بالخادم. افتح التطبيق من زر البوت داخل تيليجرام.", "Impossible de se connecter au serveur. Ouvrez l'application depuis le bouton du bot dans Telegram.", "Не удалось подключиться к серверу. Откройте приложение через кнопку бота в Telegram.", "اتصال به سرور برقرار نشد. برنامه را از دکمهٔ ربات داخل تلگرام باز کنید.", "सर्वर से कनेक्ट नहीं हो सका। ऐप को Telegram में बॉट के बटन से खोलें।"],
    ["Unable to load your Telegram account", "تعذر تحميل حساب تيليجرام الخاص بك", "Impossible de charger votre compte Telegram", "Не удалось загрузить ваш аккаунт Telegram", "بارگذاری حساب تلگرام شما ممکن نشد", "आपका Telegram खाता लोड नहीं हो सका"],
    ["Unable to load account", "تعذر تحميل الحساب", "Impossible de charger le compte", "Не удалось загрузить аккаунт", "بارگذاری حساب ممکن نشد", "खाता लोड नहीं हो सका"],
    ["Open the Mini App from the bot button inside Telegram, not from a preview link.", "افتح التطبيق المصغر من زر البوت داخل تيليجرام وليس من رابط معاينة.", "Ouvrez la Mini App depuis le bouton du bot dans Telegram, pas depuis un lien d'aperçu.", "Откройте мини-приложение через кнопку бота в Telegram, а не по ссылке предпросмотра.", "مینی‌اپ را از دکمهٔ ربات داخل تلگرام باز کنید، نه از لینک پیش‌نمایش.", "मिनी ऐप को Telegram में बॉट के बटन से खोलें, प्रीव्यू लिंक से नहीं।"],
    ["Request monitor detected", "تم اكتشاف أداة مراقبة الطلبات", "Moniteur de requêtes détecté", "Обнаружен монитор запросов", "ابزار پایش درخواست شناسایی شد", "रिक्वेस्ट मॉनिटर पाया गया"],
    ["Please close developer tools", "يرجى إغلاق أدوات المطور", "Veuillez fermer les outils de développement", "Пожалуйста, закройте инструменты разработчика", "لطفاً ابزار توسعه‌دهنده را ببندید", "कृपया डेवलपर टूल्स बंद करें"],
    ["This app can't run while a request inspector / developer console is open. Close it and the app will resume automatically.", "لا يمكن تشغيل التطبيق أثناء فتح أداة فحص الطلبات / وحدة تحكم المطور. أغلقها وسيستأنف التطبيق تلقائياً.", "L'application ne peut pas fonctionner tant qu'un inspecteur de requêtes / une console développeur est ouvert. Fermez-le et l'application reprendra automatiquement.", "Приложение не работает, пока открыт инспектор запросов / консоль разработчика. Закройте его, и приложение продолжит работу автоматически.", "تا زمانی که بازرس درخواست / کنسول توسعه‌دهنده باز است برنامه کار نمی‌کند. آن را ببندید تا برنامه خودکار ادامه یابد.", "रिक्वेस्ट इंस्पेक्टर / डेवलपर कंसोल खुला होने पर ऐप नहीं चल सकता। इसे बंद करें, ऐप अपने आप फिर शुरू हो जाएगा।"],
    ["Verification failed, please try again", "فشل التحقق، حاول مرة أخرى", "Échec de la vérification, réessayez", "Не удалось пройти проверку, попробуйте снова", "تأیید ناموفق بود، دوباره تلاش کنید", "सत्यापन विफल रहा, कृपया फिर कोशिश करें"],
    ["Connection problem, please try again", "مشكلة في الاتصال، حاول مرة أخرى", "Problème de connexion, réessayez", "Проблема с подключением, попробуйте снова", "مشکل اتصال، دوباره تلاش کنید", "कनेक्शन समस्या, कृपया फिर कोशिश करें"],
    ["Wallet SDK failed to load, check your connection", "فشل تحميل مكتبة المحفظة، تحقق من اتصالك", "Échec du chargement du SDK du portefeuille, vérifiez votre connexion", "Не удалось загрузить SDK кошелька, проверьте соединение", "بارگذاری SDK کیف پول ناموفق بود، اتصال خود را بررسی کنید", "वॉलेट SDK लोड नहीं हुआ, अपना कनेक्शन जाँचें"],
    ["🔒 Security Check", "🔒 فحص الأمان", "🔒 Contrôle de sécurité", "🔒 Проверка безопасности", "🔒 بررسی امنیتی", "🔒 सुरक्षा जाँच"],
    ["Please complete this quick one-time verification to continue using the bot.", "أكمل هذا التحقق السريع لمرة واحدة لمتابعة استخدام البوت.", "Effectuez cette vérification rapide (une seule fois) pour continuer à utiliser le bot.", "Пройдите эту быструю одноразовую проверку, чтобы продолжить пользоваться ботом.", "برای ادامهٔ استفاده از ربات، این تأیید سریع یک‌باره را انجام دهید.", "बॉट का उपयोग जारी रखने के लिए यह एक बार की त्वरित जाँच पूरी करें।"],

    // ── Force-sub gate
    ["Join to Continue", "انضم للمتابعة", "Rejoignez pour continuer", "Вступите, чтобы продолжить", "برای ادامه عضو شوید", "जारी रखने के लिए जुड़ें"],
    ["You must join the channels below to use the bot and unlock your referral reward.", "يجب الانضمام إلى القنوات أدناه لاستخدام البوت وفتح مكافأة الإحالة.", "Vous devez rejoindre les canaux ci-dessous pour utiliser le bot et débloquer votre récompense de parrainage.", "Вы должны вступить в каналы ниже, чтобы пользоваться ботом и получить реферальную награду.", "برای استفاده از ربات و دریافت پاداش دعوت باید در کانال‌های زیر عضو شوید.", "बॉट का उपयोग करने और अपना रेफ़रल इनाम पाने के लिए आपको नीचे दिए चैनलों से जुड़ना होगा।"],
    ["Join", "انضمام", "Rejoindre", "Вступить", "عضویت", "जुड़ें"],
    ["✅ Verify Membership", "✅ تحقق من العضوية", "✅ Vérifier l'adhésion", "✅ Проверить подписку", "✅ بررسی عضویت", "✅ सदस्यता जाँचें"],
    ["Checking...", "جارٍ التحقق...", "Vérification...", "Проверка...", "در حال بررسی...", "जाँच हो रही है..."],
    ["Verified! Welcome aboard 🎉", "تم التحقق! أهلاً بك 🎉", "Vérifié ! Bienvenue 🎉", "Проверено! Добро пожаловать 🎉", "تأیید شد! خوش آمدید 🎉", "सत्यापित! स्वागत है 🎉"],
    ["Join all channels first", "انضم لجميع القنوات أولاً", "Rejoignez d'abord tous les canaux", "Сначала вступите во все каналы", "ابتدا در همه کانال‌ها عضو شوید", "पहले सभी चैनलों से जुड़ें"],
    ["Verification failed", "فشل التحقق", "Échec de la vérification", "Не удалось проверить", "تأیید ناموفق بود", "सत्यापन विफल रहा"],
    ["No channels configured", "لا توجد قنوات مُعدّة", "Aucun canal configuré", "Каналы не настроены", "کانالی تنظیم نشده است", "कोई चैनल सेट नहीं है"],

    // ── Ban screen
    ["Account Banned", "الحساب محظور", "Compte banni", "Аккаунт заблокирован", "حساب مسدود شد", "खाता प्रतिबंधित"],
    ["This account has been permanently blocked from using the bot for violating the usage policy.", "تم حظر هذا الحساب نهائياً من استخدام البوت لمخالفة سياسة الاستخدام.", "Ce compte a été définitivement bloqué pour violation de la politique d'utilisation.", "Этот аккаунт навсегда заблокирован за нарушение правил использования.", "این حساب به دلیل نقض قوانین استفاده برای همیشه مسدود شده است.", "उपयोग नीति के उल्लंघन के कारण इस खाते को बॉट के उपयोग से स्थायी रूप से ब्लॉक कर दिया गया है।"],
    ["Reason", "السبب", "Raison", "Причина", "دلیل", "कारण"],
    ["Multiple accounts detected on the same device. Only the first account created on this device is allowed to use the bot.", "تم اكتشاف حسابات متعددة على نفس الجهاز. يُسمح فقط بأول حساب أُنشئ على هذا الجهاز باستخدام البوت.", "Plusieurs comptes détectés sur le même appareil. Seul le premier compte créé sur cet appareil peut utiliser le bot.", "Обнаружено несколько аккаунтов на одном устройстве. Пользоваться ботом может только первый аккаунт, созданный на этом устройстве.", "چند حساب روی یک دستگاه شناسایی شد. فقط اولین حسابی که روی این دستگاه ساخته شده اجازهٔ استفاده از ربات را دارد.", "एक ही डिवाइस पर कई खाते मिले। इस डिवाइस पर बना केवल पहला खाता ही बॉट का उपयोग कर सकता है।"],
    ["Changing your network or IP address will not lift this restriction — the block is tied to this specific device.", "تغيير الشبكة أو عنوان IP لن يرفع هذا القيد — الحظر مرتبط بهذا الجهاز تحديداً.", "Changer de réseau ou d'adresse IP ne lèvera pas cette restriction — le blocage est lié à cet appareil précis.", "Смена сети или IP-адреса не снимет это ограничение — блокировка привязана к этому устройству.", "تغییر شبکه یا آدرس IP این محدودیت را برنمی‌دارد — مسدودسازی به همین دستگاه وابسته است.", "नेटवर्क या IP पता बदलने से यह प्रतिबंध नहीं हटेगा — यह ब्लॉक इसी डिवाइस से जुड़ा है।"],
    ["Other accounts on this device", "حسابات أخرى على هذا الجهاز", "Autres comptes sur cet appareil", "Другие аккаунты на этом устройстве", "حساب‌های دیگر روی این دستگاه", "इस डिवाइस पर अन्य खाते"],
    ["FIRST", "الأول", "PREMIER", "ПЕРВЫЙ", "اولین", "पहला"],
    ["Unknown", "غير معروف", "Inconnu", "Неизвестно", "ناشناس", "अज्ञात"],

    // ── Home / mining
    ["Connect Wallet", "ربط المحفظة", "Connecter le portefeuille", "Подключить кошелёк", "اتصال کیف پول", "वॉलेट कनेक्ट करें"],
    ["Connecting…", "جارٍ الاتصال…", "Connexion…", "Подключение…", "در حال اتصال…", "कनेक्ट हो रहा है…"],
    ["Holding Wallet", "محفظة الاحتفاظ", "Portefeuille détenu", "Кошелёк хранения", "کیف پول نگهداری", "होल्डिंग वॉलेट"],
    ["24H Earned", "أرباح 24 ساعة", "Gains 24 h", "Доход за 24 ч", "درآمد ۲۴ ساعته", "24 घंटे की कमाई"],
    ["Total Earned", "إجمالي الأرباح", "Total gagné", "Всего заработано", "مجموع درآمد", "कुल कमाई"],
    ["CLAIM", "استلام", "RÉCLAMER", "ЗАБРАТЬ", "دریافت", "क्लेम"],
    ["Claim", "استلام", "Réclamer", "Забрать", "دریافت", "क्लेम करें"],
    ["Claimed", "تم الاستلام", "Réclamé", "Получено", "دریافت شد", "क्लेम हो गया"],
    ["Claiming...", "جارٍ الاستلام...", "Réclamation...", "Получение...", "در حال دریافت...", "क्लेम हो रहा है..."],
    ["Watch Ad...", "شاهد الإعلان...", "Regarder la pub...", "Смотрите рекламу...", "تبلیغ را ببینید...", "विज्ञापन देखें..."],
    ["📺 Watch Ad...", "📺 شاهد الإعلان...", "📺 Regarder la pub...", "📺 Смотрите рекламу...", "📺 تبلیغ را ببینید...", "📺 विज्ञापन देखें..."],
    ["Your Balance", "رصيدك", "Votre solde", "Ваш баланс", "موجودی شما", "आपका बैलेंस"],
    ["Earned today", "أرباح اليوم", "Gagné aujourd'hui", "Заработано сегодня", "درآمد امروز", "आज की कमाई"],
    ["Ads watched", "إعلانات تمت مشاهدتها", "Pubs regardées", "Просмотрено рекламы", "تبلیغات دیده‌شده", "देखे गए विज्ञापन"],
    ["Friends invited", "أصدقاء تمت دعوتهم", "Amis invités", "Приглашено друзей", "دوستان دعوت‌شده", "आमंत्रित दोस्त"],
    ["Keep earning every day!", "واصل الربح كل يوم!", "Continuez à gagner chaque jour !", "Зарабатывайте каждый день!", "هر روز درآمد کسب کنید!", "हर दिन कमाते रहें!"],
    ["Player", "لاعب", "Joueur", "Игрок", "بازیکن", "खिलाड़ी"],
    ["+{0} TON added to your wallet 🎉", "+{0} TON أُضيفت إلى محفظتك 🎉", "+{0} TON ajoutés à votre portefeuille 🎉", "+{0} TON добавлено в ваш кошелёк 🎉", "+{0} TON به کیف پول شما اضافه شد 🎉", "+{0} TON आपके वॉलेट में जुड़ गए 🎉"],
    ["+{0} CRYSTAL added 🎉", "+{0} CRYSTAL تمت إضافتها 🎉", "+{0} CRYSTAL ajoutés 🎉", "+{0} CRYSTAL добавлено 🎉", "+{0} CRYSTAL اضافه شد 🎉", "+{0} CRYSTAL जुड़ गए 🎉"],
    ["added! 🎉", "تمت الإضافة! 🎉", "ajouté ! 🎉", "добавлено! 🎉", "اضافه شد! 🎉", "जुड़ गया! 🎉"],
    ["Could not claim reward", "تعذر استلام المكافأة", "Impossible de réclamer la récompense", "Не удалось получить награду", "دریافت پاداش ممکن نشد", "इनाम क्लेम नहीं हो सका"],
    ["Nothing to claim yet", "لا يوجد شيء للاستلام بعد", "Rien à réclamer pour le moment", "Пока нечего забирать", "هنوز چیزی برای دریافت نیست", "अभी क्लेम करने के लिए कुछ नहीं"],

    // ── Tasks / ads
    ["Earn", "اربح", "Gagner", "Заработок", "کسب درآمد", "कमाई"],
    ["Complete tasks and collect CRYSTAL rewards", "أكمل المهام واجمع مكافآت CRYSTAL", "Accomplissez des tâches et récoltez des récompenses CRYSTAL", "Выполняйте задания и получайте награды CRYSTAL", "وظایف را انجام دهید و پاداش CRYSTAL بگیرید", "टास्क पूरे करें और CRYSTAL इनाम पाएँ"],
    ["Ads", "إعلانات", "Pubs", "Реклама", "تبلیغات", "विज्ञापन"],
    ["TASKS", "المهام", "TÂCHES", "ЗАДАНИЯ", "وظایف", "टास्क"],
    ["Partner", "الشركاء", "Partenaires", "Партнёры", "شرکا", "पार्टनर"],
    ["Add Task", "إضافة مهمة", "Ajouter une tâche", "Добавить задание", "افزودن وظیفه", "टास्क जोड़ें"],
    ["Pay with TON to promote your channel or bot", "ادفع بـ TON للترويج لقناتك أو بوتك", "Payez en TON pour promouvoir votre canal ou bot", "Оплатите TON, чтобы продвинуть канал или бота", "با TON پرداخت کنید تا کانال یا ربات خود را تبلیغ کنید", "अपने चैनल या बॉट का प्रचार करने के लिए TON से भुगतान करें"],
    ["Advertisements", "الإعلانات", "Publicités", "Реклама", "تبلیغات", "विज्ञापन"],
    ["User Channels & Bots", "قنوات وبوتات المستخدمين", "Canaux et bots des utilisateurs", "Каналы и боты пользователей", "کانال‌ها و ربات‌های کاربران", "यूज़र चैनल और बॉट"],
    ["Partner Tasks", "مهام الشركاء", "Tâches partenaires", "Задания партнёров", "وظایف شرکا", "पार्टनर टास्क"],
    ["Watch", "شاهد", "Regarder", "Смотреть", "تماشا", "देखें"],
    ["Watching...", "جارٍ المشاهدة...", "Visionnage...", "Просмотр...", "در حال تماشا...", "देख रहे हैं..."],
    ["Wait {0}s", "انتظر {0} ث", "Attendez {0} s", "Ждите {0} с", "{0} ثانیه صبر کنید", "{0} सेकंड रुकें"],
    ["Under maintenance", "تحت الصيانة", "En maintenance", "На обслуживании", "در دست تعمیر", "रखरखाव में"],
    ["{0}/{1} today", "{0}/{1} اليوم", "{0}/{1} aujourd'hui", "{0}/{1} сегодня", "{0}/{1} امروز", "{0}/{1} आज"],
    ["Channels", "القنوات", "Canaux", "Каналы", "کانال‌ها", "चैनल"],
    ["Bots", "البوتات", "Bots", "Боты", "ربات‌ها", "बॉट"],
    ["No tasks right now", "لا توجد مهام حالياً", "Aucune tâche pour le moment", "Сейчас нет заданий", "در حال حاضر وظیفه‌ای نیست", "अभी कोई टास्क नहीं"],
    ["Open", "فتح", "Ouvrir", "Открыть", "باز کردن", "खोलें"],
    ["Verify", "تحقق", "Vérifier", "Проверить", "تأیید", "सत्यापित करें"],
    ["✓ Done", "✓ تم", "✓ Terminé", "✓ Готово", "✓ انجام شد", "✓ पूरा"],
    ["Open bot, wait 5s, then Verify", "افتح البوت، انتظر 5 ثوانٍ ثم اضغط تحقق", "Ouvrez le bot, attendez 5 s, puis Vérifiez", "Откройте бота, подождите 5 с, затем нажмите «Проверить»", "ربات را باز کنید، ۵ ثانیه صبر کنید و سپس تأیید را بزنید", "बॉट खोलें, 5 सेकंड रुकें, फिर सत्यापित करें"],
    ["Join channel, then Verify ✓", "انضم للقناة ثم اضغط تحقق ✓", "Rejoignez le canal, puis Vérifiez ✓", "Вступите в канал, затем нажмите «Проверить» ✓", "در کانال عضو شوید و سپس تأیید را بزنید ✓", "चैनल से जुड़ें, फिर सत्यापित करें ✓"],
    ["Unable to start task", "تعذر بدء المهمة", "Impossible de démarrer la tâche", "Не удалось начать задание", "شروع وظیفه ممکن نشد", "टास्क शुरू नहीं हो सका"],
    ["Network error — tap Open to try again", "خطأ في الاتصال — اضغط فتح للمحاولة مجدداً", "Erreur réseau — touchez Ouvrir pour réessayer", "Ошибка сети — нажмите «Открыть», чтобы повторить", "خطای شبکه — برای تلاش دوباره «باز کردن» را بزنید", "नेटवर्क त्रुटि — दोबारा कोशिश के लिए खोलें दबाएँ"],
    ["Could not claim", "تعذر الاستلام", "Impossible de réclamer", "Не удалось получить", "دریافت ممکن نشد", "क्लेम नहीं हो सका"],
    ["Ad loading, try again", "الإعلان قيد التحميل، حاول مجدداً", "Pub en chargement, réessayez", "Реклама загружается, повторите", "تبلیغ در حال بارگذاری است، دوباره تلاش کنید", "विज्ञापन लोड हो रहा है, फिर कोशिश करें"],
    ["Ad unavailable, try again", "الإعلان غير متاح، حاول مجدداً", "Pub indisponible, réessayez", "Реклама недоступна, повторите", "تبلیغ در دسترس نیست، دوباره تلاش کنید", "विज्ञापन उपलब्ध नहीं, फिर कोशिश करें"],
    ["Ad was not completed", "لم يكتمل الإعلان", "La pub n'a pas été terminée", "Реклама не была досмотрена", "تبلیغ کامل نشد", "विज्ञापन पूरा नहीं हुआ"],
    ["Ad was not completed ({t0})", "لم يكتمل الإعلان ({t0})", "La pub n'a pas été terminée ({t0})", "Реклама не была досмотрена ({t0})", "تبلیغ کامل نشد ({t0})", "विज्ञापन पूरा नहीं हुआ ({t0})"],
    ["Watch the full ad to continue", "شاهد الإعلان كاملاً للمتابعة", "Regardez toute la pub pour continuer", "Досмотрите рекламу до конца, чтобы продолжить", "برای ادامه تبلیغ را کامل ببینید", "जारी रखने के लिए पूरा विज्ञापन देखें"],
    ["Watch the full ad ({0}s) to earn", "شاهد الإعلان كاملاً ({0} ث) لتربح", "Regardez toute la pub ({0} s) pour gagner", "Досмотрите рекламу ({0} с), чтобы заработать", "برای کسب پاداش تبلیغ را کامل ببینید ({0} ثانیه)", "कमाने के लिए पूरा विज्ञापन ({0} सेकंड) देखें"],
    ["Ad reward unavailable", "مكافأة الإعلان غير متاحة", "Récompense de pub indisponible", "Награда за рекламу недоступна", "پاداش تبلیغ در دسترس نیست", "विज्ञापन इनाम उपलब्ध नहीं"],

    // ── Combo / daily bonus / redeem
    ["🗓️ Daily Combo", "🗓️ الكومبو اليومي", "🗓️ Combo quotidien", "🗓️ Ежедневное комбо", "🗓️ کمبوی روزانه", "🗓️ दैनिक कॉम्बो"],
    ["Solve today's combo to win CRYSTAL rewards", "حل كومبو اليوم لتربح مكافآت CRYSTAL", "Résolvez le combo du jour pour gagner des récompenses CRYSTAL", "Разгадайте комбо дня и получите награду CRYSTAL", "کمبوی امروز را حل کنید و پاداش CRYSTAL ببرید", "आज का कॉम्बो हल करें और CRYSTAL इनाम जीतें"],
    ["Daily Bonus", "المكافأة اليومية", "Bonus quotidien", "Ежедневный бонус", "جایزه روزانه", "दैनिक बोनस"],
    ["Come back every day · +{0} CRYSTAL", "عد كل يوم · +{0} CRYSTAL", "Revenez chaque jour · +{0} CRYSTAL", "Заходите каждый день · +{0} CRYSTAL", "هر روز برگردید · +{0} CRYSTAL", "हर दिन आएँ · +{0} CRYSTAL"],
    ["Could not claim bonus", "تعذر استلام المكافأة اليومية", "Impossible de réclamer le bonus", "Не удалось получить бонус", "دریافت جایزه ممکن نشد", "बोनस क्लेम नहीं हो सका"],
    ["Redeem Code", "استرداد كود", "Utiliser un code", "Активировать код", "استفاده از کد", "कोड रिडीम करें"],
    ["🎟️ Redeem Code", "🎟️ استرداد كود", "🎟️ Utiliser un code", "🎟️ Активировать код", "🎟️ استفاده از کد", "🎟️ कोड रिडीम करें"],
    ["Have a promo code? Claim your reward", "لديك كود ترويجي؟ استلم مكافأتك", "Un code promo ? Réclamez votre récompense", "Есть промокод? Получите награду", "کد تخفیف دارید؟ پاداش خود را بگیرید", "प्रोमो कोड है? अपना इनाम पाएँ"],
    ["Redeem", "استرداد", "Utiliser", "Активировать", "استفاده", "रिडीम"],
    ["Redeem Reward", "استرداد المكافأة", "Récupérer la récompense", "Получить награду", "دریافت پاداش", "इनाम रिडीम करें"],
    ["Enter a valid code to receive its CRYSTAL reward.", "أدخل كوداً صالحاً لتحصل على مكافأة CRYSTAL الخاصة به.", "Saisissez un code valide pour recevoir sa récompense CRYSTAL.", "Введите действующий код, чтобы получить награду CRYSTAL.", "یک کد معتبر وارد کنید تا پاداش CRYSTAL آن را بگیرید.", "इनाम पाने के लिए एक मान्य कोड दर्ज करें।"],
    ["Enter redeem code", "أدخل كود الاسترداد", "Saisissez le code", "Введите код", "کد را وارد کنید", "रिडीम कोड दर्ज करें"],
    ["Enter a redeem code", "أدخل كود الاسترداد", "Saisissez un code", "Введите код", "یک کد وارد کنید", "रिडीम कोड दर्ज करें"],
    ["Invalid code", "كود غير صالح", "Code invalide", "Неверный код", "کد نامعتبر", "अमान्य कोड"],
    ["Cancel", "إلغاء", "Annuler", "Отмена", "لغو", "रद्द करें"],
    ["Close", "إغلاق", "Fermer", "Закрыть", "بستن", "बंद करें"],
    ["ATTEMPTS TODAY · {0}/{1}", "محاولات اليوم · {0}/{1}", "ESSAIS AUJOURD'HUI · {0}/{1}", "ПОПЫТКИ СЕГОДНЯ · {0}/{1}", "تلاش‌های امروز · {0}/{1}", "आज के प्रयास · {0}/{1}"],
    ["Only one attempt per day", "محاولة واحدة فقط يومياً", "Une seule tentative par jour", "Только одна попытка в день", "فقط یک تلاش در روز", "प्रतिदिन केवल एक प्रयास"],
    ["Item {0}", "عنصر {0}", "Élément {0}", "Предмет {0}", "مورد {0}", "आइटम {0}"],
    ["Check Combo", "تحقق من الكومبو", "Vérifier le combo", "Проверить комбо", "بررسی کمبو", "कॉम्बो जाँचें"],
    ["Check Combo — {0}", "تحقق من الكومبو — {0}", "Vérifier le combo — {0}", "Проверить комбо — {0}", "بررسی کمبو — {0}", "कॉम्बो जाँचें — {0}"],
    ["Come back tomorrow", "عد غداً", "Revenez demain", "Возвращайтесь завтра", "فردا برگردید", "कल वापस आएँ"],
    ["You already used today's attempt — a new combo unlocks tomorrow!", "لقد استخدمت محاولة اليوم — كومبو جديد غداً!", "Vous avez déjà utilisé l'essai du jour — un nouveau combo demain !", "Вы уже использовали сегодняшнюю попытку — новое комбо завтра!", "امروز از تلاش خود استفاده کرده‌اید — کمبوی جدید فردا باز می‌شود!", "आप आज का प्रयास इस्तेमाल कर चुके हैं — नया कॉम्बो कल खुलेगा!"],
    ["You already used today's attempt!", "لقد استخدمت محاولة اليوم!", "Vous avez déjà utilisé l'essai du jour !", "Вы уже использовали сегодняшнюю попытку!", "امروز از تلاش خود استفاده کرده‌اید!", "आप आज का प्रयास इस्तेमाल कर चुके हैं!"],
    ["Select all {0} items first!", "اختر جميع العناصر الـ{0} أولاً!", "Sélectionnez d'abord les {0} éléments !", "Сначала выберите все предметы ({0})!", "ابتدا هر {0} مورد را انتخاب کنید!", "पहले सभी {0} आइटम चुनें!"],
    ["Failed.", "فشلت العملية.", "Échec.", "Ошибка.", "ناموفق.", "विफल।"],
    ["❌ Wrong combination — no attempts left today", "❌ تركيبة خاطئة — لا محاولات متبقية اليوم", "❌ Mauvaise combinaison — plus d'essais aujourd'hui", "❌ Неверная комбинация — попыток на сегодня больше нет", "❌ ترکیب اشتباه — امروز تلاشی باقی نمانده", "❌ गलत कॉम्बिनेशन — आज कोई प्रयास नहीं बचा"],
    ["🎉 Correct! +{0}", "🎉 صحيح! +{0}", "🎉 Correct ! +{0}", "🎉 Верно! +{0}", "🎉 درست است! +{0}", "🎉 सही! +{0}"],

    // ── Referrals
    ["Invite friends and earn CRYSTAL", "ادعُ أصدقاءك واربح CRYSTAL", "Invitez des amis et gagnez des CRYSTAL", "Приглашайте друзей и зарабатывайте CRYSTAL", "دوستانتان را دعوت کنید و CRYSTAL کسب کنید", "दोस्तों को आमंत्रित करें और CRYSTAL कमाएँ"],
    ["Crystals", "كريستال", "Cristaux", "Кристаллы", "کریستال‌ها", "क्रिस्टल"],
    ["Collect", "استلام", "Récolter", "Забрать", "جمع‌آوری", "इकट्ठा करें"],
    ["Copy", "نسخ", "Copier", "Копировать", "کپی", "कॉपी"],
    ["Copy ID", "نسخ المعرف", "Copier l'ID", "Копировать ID", "کپی شناسه", "आईडी कॉपी करें"],
    ["Loading...", "جارٍ التحميل...", "Chargement...", "Загрузка...", "در حال بارگذاری...", "लोड हो रहा है..."],
    ["Loading…", "جارٍ التحميل…", "Chargement…", "Загрузка…", "در حال بارگذاری…", "लोड हो रहा है…"],
    ["{0} Days", "{0} أيام", "{0} jours", "{0} дн.", "{0} روز", "{0} दिन"],
    ["Get {0} Crystals", "احصل على {0} كريستال", "Obtenez {0} cristaux", "Получите {0} кристаллов", "{0} کریستال دریافت کنید", "{0} क्रिस्टल पाएँ"],
    ["When your referral enters the combo for {0} consecutive days.", "عندما يدخل الشخص الذي دعوته الكومبو لمدة {0} أيام متتالية.", "Lorsque votre filleul réussit le combo {0} jours consécutifs.", "Когда ваш реферал выполняет комбо {0} дн. подряд.", "وقتی دعوت‌شدهٔ شما {0} روز پشت‌سرهم کمبو را انجام دهد.", "जब आपका रेफ़रल लगातार {0} दिन कॉम्बो में भाग ले।"],
    ["Get {0}% from packages", "احصل على {0}% من الباقات", "Obtenez {0} % des packs", "Получайте {0}% с пакетов", "{0}% از بسته‌ها دریافت کنید", "पैकेज से {0}% पाएँ"],
    ["Receive {0}% of every package your referral buys from the Store, as CRYSTAL that boosts your mining speed.", "احصل على {0}% من كل باقة يشتريها المدعو من المتجر، على شكل CRYSTAL يرفع سرعة التعدين لديك.", "Recevez {0} % de chaque pack acheté par votre filleul dans la Boutique, sous forme de CRYSTAL qui augmente votre vitesse de minage.", "Получайте {0}% с каждого пакета, который покупает ваш реферал в магазине, в виде CRYSTAL, ускоряющих ваш майнинг.", "از هر بسته‌ای که دعوت‌شدهٔ شما از فروشگاه می‌خرد {0}% به‌صورت CRYSTAL دریافت کنید که سرعت استخراج شما را بالا می‌برد.", "आपका रेफ़रल स्टोर से जो भी पैकेज खरीदता है उसका {0}% CRYSTAL के रूप में पाएँ, जो आपकी माइनिंग गति बढ़ाता है।"],
    ["Partners", "الشركاء", "Partenaires", "Партнёры", "شرکا", "पार्टनर"],
    ["Total income", "إجمالي الدخل", "Revenu total", "Общий доход", "کل درآمد", "कुल आय"],
    ["My Referrals", "إحالاتي", "Mes filleuls", "Мои рефералы", "دعوت‌های من", "मेरे रेफ़रल"],
    ["Date", "التاريخ", "Date", "Дата", "تاریخ", "तारीख"],
    ["User", "المستخدم", "Utilisateur", "Пользователь", "کاربر", "यूज़र"],
    ["Income", "الدخل", "Revenu", "Доход", "درآمد", "आय"],
    ["Load more", "عرض المزيد", "Charger plus", "Загрузить ещё", "نمایش بیشتر", "और लोड करें"],
    ["No referrals yet", "لا توجد إحالات بعد", "Aucun filleul pour le moment", "Рефералов пока нет", "هنوز دعوتی وجود ندارد", "अभी कोई रेफ़रल नहीं"],
    ["No referrals yet — share your link to invite friends 🚀", "لا توجد إحالات بعد — شارك رابطك لدعوة أصدقائك 🚀", "Aucun filleul pour l'instant — partagez votre lien pour inviter des amis 🚀", "Рефералов пока нет — поделитесь ссылкой, чтобы пригласить друзей 🚀", "هنوز دعوتی نیست — لینک خود را برای دعوت دوستان به اشتراک بگذارید 🚀", "अभी कोई रेफ़रल नहीं — दोस्तों को बुलाने के लिए अपना लिंक शेयर करें 🚀"],
    ["Nothing to collect yet", "لا يوجد شيء للاستلام بعد", "Rien à récolter pour le moment", "Пока нечего забирать", "هنوز چیزی برای جمع‌آوری نیست", "अभी इकट्ठा करने के लिए कुछ नहीं"],
    ["Could not collect", "تعذر الاستلام", "Impossible de récolter", "Не удалось забрать", "جمع‌آوری ممکن نشد", "इकट्ठा नहीं हो सका"],
    ["+{0} CRYSTAL added to your balance 🎉", "+{0} CRYSTAL أُضيفت إلى رصيدك 🎉", "+{0} CRYSTAL ajoutés à votre solde 🎉", "+{0} CRYSTAL добавлено на ваш баланс 🎉", "+{0} CRYSTAL به موجودی شما اضافه شد 🎉", "+{0} CRYSTAL आपके बैलेंस में जुड़ गए 🎉"],
    ["Referral link copied! 📋", "تم نسخ رابط الإحالة! 📋", "Lien de parrainage copié ! 📋", "Реферальная ссылка скопирована! 📋", "لینک دعوت کپی شد! 📋", "रेफ़रल लिंक कॉपी हो गया! 📋"],
    ["Invite link copied! 🎉", "تم نسخ رابط الدعوة! 🎉", "Lien d'invitation copié ! 🎉", "Ссылка-приглашение скопирована! 🎉", "لینک دعوت کپی شد! 🎉", "आमंत्रण लिंक कॉपी हो गया! 🎉"],
    ["ID copied 📋", "تم نسخ المعرف 📋", "ID copié 📋", "ID скопирован 📋", "شناسه کپی شد 📋", "आईडी कॉपी हो गई 📋"],
    ["Join me on Crystal Mining Bot and earn real CRYSTAL!", "انضم إليّ في Crystal Mining Bot واربح CRYSTAL حقيقية!", "Rejoignez-moi sur Crystal Mining Bot et gagnez de vrais CRYSTAL !", "Присоединяйтесь ко мне в Crystal Mining Bot и зарабатывайте настоящие CRYSTAL!", "به من در Crystal Mining Bot بپیوندید و CRYSTAL واقعی کسب کنید!", "मेरे साथ Crystal Mining Bot से जुड़ें और असली CRYSTAL कमाएँ!"],

    // ── Store
    ["+{0} TON daily", "+{0} TON يومياً", "+{0} TON par jour", "+{0} TON в день", "+{0} TON روزانه", "+{0} TON रोज़ाना"],
    ["Purchase failed", "فشلت عملية الشراء", "Échec de l'achat", "Не удалось совершить покупку", "خرید ناموفق بود", "खरीदारी विफल रही"],
    ["+{0} CRYSTAL added to your mining power 🎉", "+{0} CRYSTAL أُضيفت إلى قوة التعدين لديك 🎉", "+{0} CRYSTAL ajoutés à votre puissance de minage 🎉", "+{0} CRYSTAL добавлено к вашей мощности майнинга 🎉", "+{0} CRYSTAL به قدرت استخراج شما اضافه شد 🎉", "+{0} CRYSTAL आपकी माइनिंग पावर में जुड़ गए 🎉"],

    // ── Profile / wallet pages
    ["Deposit", "إيداع", "Dépôt", "Пополнение", "واریز", "जमा"],
    ["Withdraw", "سحب", "Retrait", "Вывод", "برداشت", "निकासी"],
    ["Deposit TON", "إيداع TON", "Dépôt TON", "Пополнить TON", "واریز TON", "TON जमा करें"],
    ["Withdraw TON", "سحب TON", "Retrait TON", "Вывести TON", "برداشت TON", "TON निकालें"],
    ["Deposit requirements", "متطلبات الإيداع", "Conditions de dépôt", "Требования к пополнению", "الزامات واریز", "जमा की आवश्यकताएँ"],
    ["Withdrawal requirements", "متطلبات السحب", "Conditions de retrait", "Требования к выводу", "الزامات برداشت", "निकासी की आवश्यकताएँ"],
    ["FROM", "من", "DE", "ИЗ", "از", "से"],
    ["TO", "إلى", "VERS", "В", "به", "को"],
    ["MAX", "الحد الأقصى", "MAX", "МАКС", "حداکثر", "अधिकतम"],
    ["Converting...", "جارٍ التحويل...", "Conversion...", "Обмен...", "در حال تبدیل...", "कन्वर्ट हो रहा है..."],
    ["Conversion failed", "فشل التحويل", "Échec de la conversion", "Не удалось обменять", "تبدیل ناموفق بود", "कन्वर्ज़न विफल रहा"],
    ["Enter a valid TON amount", "أدخل كمية TON صحيحة", "Saisissez un montant TON valide", "Введите корректную сумму TON", "مقدار TON معتبر وارد کنید", "सही TON राशि दर्ज करें"],
    ["Enter a valid amount", "أدخل مبلغاً صحيحاً", "Saisissez un montant valide", "Введите корректную сумму", "مبلغ معتبر وارد کنید", "सही राशि दर्ज करें"],
    ["Enter a TON wallet address", "أدخل عنوان محفظة TON", "Saisissez une adresse de portefeuille TON", "Введите адрес кошелька TON", "آدرس کیف پول TON را وارد کنید", "TON वॉलेट पता दर्ज करें"],
    ["Invalid wallet address", "عنوان المحفظة غير صالح", "Adresse de portefeuille invalide", "Неверный адрес кошелька", "آدرس کیف پول نامعتبر است", "वॉलेट पता अमान्य है"],
    ["Minimum deposit is {0} TON", "الحد الأدنى للإيداع {0} TON", "Le dépôt minimum est de {0} TON", "Минимальное пополнение — {0} TON", "حداقل واریز {0} TON است", "न्यूनतम जमा {0} TON है"],
    ["Minimum withdrawal is {0} TON", "الحد الأدنى للسحب {0} TON", "Le retrait minimum est de {0} TON", "Минимальный вывод — {0} TON", "حداقل برداشت {0} TON است", "न्यूनतम निकासी {0} TON है"],
    ["Insufficient TON balance", "رصيد TON غير كافٍ", "Solde TON insuffisant", "Недостаточно TON на балансе", "موجودی TON کافی نیست", "TON बैलेंस अपर्याप्त है"],
    ["Connect your TON wallet first", "اربط محفظة TON أولاً", "Connectez d'abord votre portefeuille TON", "Сначала подключите кошелёк TON", "ابتدا کیف پول TON خود را متصل کنید", "पहले अपना TON वॉलेट कनेक्ट करें"],
    ["Waiting for wallet...", "في انتظار المحفظة...", "En attente du portefeuille...", "Ожидание кошелька...", "در انتظار کیف پول...", "वॉलेट की प्रतीक्षा..."],
    ["Registering deposit...", "جارٍ تسجيل الإيداع...", "Enregistrement du dépôt...", "Регистрация пополнения...", "در حال ثبت واریز...", "जमा दर्ज हो रहा है..."],
    ["Deposit sent, verifying... ✅", "تم إرسال الإيداع، جارٍ التحقق... ✅", "Dépôt envoyé, vérification... ✅", "Пополнение отправлено, проверяем... ✅", "واریز ارسال شد، در حال بررسی... ✅", "जमा भेज दिया गया, जाँच हो रही है... ✅"],
    ["Deposit confirmed ✅", "تم تأكيد الإيداع ✅", "Dépôt confirmé ✅", "Пополнение подтверждено ✅", "واریز تأیید شد ✅", "जमा की पुष्टि हो गई ✅"],
    ["Deposit pending, refresh later", "الإيداع قيد الانتظار، حدّث لاحقاً", "Dépôt en attente, actualisez plus tard", "Пополнение в обработке, обновите позже", "واریز در انتظار است، بعداً بازخوانی کنید", "जमा लंबित है, बाद में रीफ़्रेश करें"],
    ["Deposit cancelled", "تم إلغاء الإيداع", "Dépôt annulé", "Пополнение отменено", "واریز لغو شد", "जमा रद्द हुआ"],
    ["Deposit registration failed", "فشل تسجيل الإيداع", "Échec de l'enregistrement du dépôt", "Не удалось зарегистрировать пополнение", "ثبت واریز ناموفق بود", "जमा दर्ज नहीं हो सका"],
    ["Submitting...", "جارٍ الإرسال...", "Envoi...", "Отправка...", "در حال ارسال...", "भेजा जा रहा है..."],
    ["Withdrawal request submitted ✅", "تم إرسال طلب السحب ✅", "Demande de retrait envoyée ✅", "Заявка на вывод отправлена ✅", "درخواست برداشت ثبت شد ✅", "निकासी अनुरोध भेज दिया गया ✅"],
    ["Withdrawal failed", "فشل السحب", "Échec du retrait", "Не удалось вывести", "برداشت ناموفق بود", "निकासी विफल रही"],
    ["Withdrawals are currently disabled", "السحب معطّل حالياً", "Les retraits sont actuellement désactivés", "Вывод средств временно отключён", "برداشت در حال حاضر غیرفعال است", "निकासी फ़िलहाल बंद है"],
    ["No transactions yet", "لا توجد معاملات بعد", "Aucune transaction pour le moment", "Операций пока нет", "هنوز تراکنشی وجود ندارد", "अभी कोई लेन-देन नहीं"],
    ["Task Reward", "مكافأة مهمة", "Récompense de tâche", "Награда за задание", "پاداش وظیفه", "टास्क इनाम"],
    ["Invite Reward", "مكافأة دعوة", "Récompense d'invitation", "Награда за приглашение", "پاداش دعوت", "आमंत्रण इनाम"],
    ["Daily Combo", "الكومبو اليومي", "Combo quotidien", "Ежедневное комбо", "کمبوی روزانه", "दैनिक कॉम्बो"],
    ["Referral Bonus", "مكافأة الإحالة", "Bonus de parrainage", "Реферальный бонус", "پاداش دعوت", "रेफ़रल बोनस"],
    ["Referral Commission", "عمولة الإحالة", "Commission de parrainage", "Реферальная комиссия", "کمیسیون دعوت", "रेफ़रल कमीशन"],
    ["Store Purchase", "شراء من المتجر", "Achat en boutique", "Покупка в магазине", "خرید از فروشگاه", "स्टोर खरीदारी"],
    ["Lucky Wheel", "عجلة الحظ", "Roue de la chance", "Колесо удачи", "چرخ شانس", "लकी व्हील"],
    ["Reward", "مكافأة", "Récompense", "Награда", "پاداش", "इनाम"],
    ["Done", "تم", "Terminé", "Готово", "انجام شد", "पूरा"],
    ["Paid", "مدفوع", "Payé", "Выплачено", "پرداخت شد", "भुगतान हुआ"],
    ["Rejected", "مرفوض", "Rejeté", "Отклонено", "رد شد", "अस्वीकृत"],
    ["Pending", "قيد الانتظار", "En attente", "В ожидании", "در انتظار", "लंबित"],
    ["Arabic", "العربية", "Arabe", "Арабский", "عربی", "अरबी"],
    ["English", "الإنجليزية", "Anglais", "Английский", "انگلیسی", "अंग्रेज़ी"],
    ["French", "الفرنسية", "Français", "Французский", "فرانسوی", "फ़्रेंच"],
    ["Russian", "الروسية", "Russe", "Русский", "روسی", "रूसी"],
    ["Persian", "الفارسية", "Persan", "Персидский", "فارسی", "फ़ारसी"],
    ["Hindi", "الهندية", "Hindi", "Хинди", "هندی", "हिन्दी"],

    // ── Weekly contest
    ["🏆 Weekly Contest", "🏆 المسابقة الأسبوعية", "🏆 Concours hebdomadaire", "🏆 Еженедельный конкурс", "🏆 مسابقهٔ هفتگی", "🏆 साप्ताहिक प्रतियोगिता"],
    ["Invite friends · climb the ranks · win TON", "ادعُ أصدقاءك · اصعد في الترتيب · اربح TON", "Invitez des amis · montez au classement · gagnez des TON", "Приглашайте друзей · поднимайтесь в рейтинге · выигрывайте TON", "دوستان را دعوت کنید · رتبه بگیرید · TON ببرید", "दोस्तों को बुलाएँ · रैंक चढ़ें · TON जीतें"],
    ["How the contest works", "كيف تعمل المسابقة", "Comment fonctionne le concours", "Как работает конкурс", "مسابقه چگونه کار می‌کند", "प्रतियोगिता कैसे काम करती है"],
    ["Everything you need to know", "كل ما تحتاج لمعرفته", "Tout ce qu'il faut savoir", "Всё, что нужно знать", "هر آنچه باید بدانید", "वह सब जो आपको जानना चाहिए"],
    ["Got it", "فهمت", "Compris", "Понятно", "متوجه شدم", "समझ गया"],
    ["Total prize pool", "إجمالي الجوائز", "Cagnotte totale", "Общий призовой фонд", "مجموع جوایز", "कुल इनाम पूल"],
    ["Ends in", "ينتهي خلال", "Se termine dans", "Заканчивается через", "پایان در", "समाप्ति में"],
    ["Prizes", "الجوائز", "Prix", "Призы", "جوایز", "इनाम"],
    ["Leaderboard", "لوحة المتصدرين", "Classement", "Таблица лидеров", "جدول رده‌بندی", "लीडरबोर्ड"],
    ["Rank 4+", "المركز 4+", "Rang 4+", "Место 4+", "رتبهٔ ۴ به بعد", "रैंक 4+"],
    ["YOUR RANK", "ترتيبك", "VOTRE RANG", "ВАШ РЕЙТИНГ", "رتبهٔ شما", "आपकी रैंक"],
    ["YOU", "أنت", "VOUS", "ВЫ", "شما", "आप"],
    ["1st place", "المركز الأول", "1re place", "1 место", "مقام اول", "पहला स्थान"],
    ["2nd place", "المركز الثاني", "2e place", "2 место", "مقام دوم", "दूसरा स्थान"],
    ["3rd place", "المركز الثالث", "3e place", "3 место", "مقام سوم", "तीसरा स्थान"],
    ["{0} active referral this round", "{0} إحالة نشطة في هذه الجولة", "{0} filleul actif sur cette manche", "{0} активный реферал в этом раунде", "{0} دعوت‌شدهٔ فعال در این دوره", "इस राउंड में {0} सक्रिय रेफ़रल"],
    ["{0} active referrals this round", "{0} إحالات نشطة في هذه الجولة", "{0} filleuls actifs sur cette manche", "{0} активных рефералов в этом раунде", "{0} دعوت‌شدهٔ فعال در این دوره", "इस राउंड में {0} सक्रिय रेफ़रल"],
    ["⚡ {0} more to reach #{1}", "⚡ تحتاج {0} أخرى للوصول إلى #{1}", "⚡ Encore {0} pour atteindre le n°{1}", "⚡ Ещё {0}, чтобы достичь #{1}", "⚡ {0} مورد دیگر تا رسیدن به #{1}", "⚡ #{1} तक पहुँचने के लिए {0} और"],
    ["👑 You're leading!", "👑 أنت في الصدارة!", "👑 Vous êtes en tête !", "👑 Вы лидируете!", "👑 شما در صدر هستید!", "👑 आप आगे चल रहे हैं!"],
    ["👥 {0} referral", "👥 {0} إحالة", "👥 {0} filleul", "👥 {0} реферал", "👥 {0} دعوت", "👥 {0} रेफ़रल"],
    ["👥 {0} referrals", "👥 {0} إحالات", "👥 {0} filleuls", "👥 {0} рефералов", "👥 {0} دعوت", "👥 {0} रेफ़रल"],
    ["Distributing prizes…", "جارٍ توزيع الجوائز…", "Distribution des prix…", "Распределение призов…", "در حال توزیع جوایز…", "इनाम बाँटे जा रहे हैं…"],
    ["{0}d {1}", "{0} ي {1}", "{0} j {1}", "{0} д {1}", "{0} روز {1}", "{0} दिन {1}"],
    ["No active referrals yet this round — invite a friend to claim #1! 🚀", "لا توجد إحالات نشطة في هذه الجولة بعد — ادعُ صديقاً لتحجز المركز الأول! 🚀", "Aucun filleul actif sur cette manche — invitez un ami pour viser le n°1 ! 🚀", "В этом раунде пока нет активных рефералов — пригласите друга и займите #1! 🚀", "هنوز در این دوره دعوت‌شدهٔ فعالی نیست — دوستی را دعوت کنید تا نفر اول شوید! 🚀", "इस राउंड में अभी कोई सक्रिय रेफ़रल नहीं — #1 पाने के लिए किसी दोस्त को बुलाएँ! 🚀"],
    ["Unable to load the leaderboard right now", "تعذر تحميل لوحة المتصدرين الآن", "Impossible de charger le classement pour le moment", "Не удалось загрузить таблицу лидеров", "بارگذاری جدول رده‌بندی در حال حاضر ممکن نیست", "अभी लीडरबोर्ड लोड नहीं हो सका"],

    // ── Add task modal
    ["Promote your Telegram channel or bot. Bot tasks are approved instantly. Channel tasks are checked immediately to confirm that the bot is an administrator.", "روّج لقناتك أو بوتك على تيليجرام. تُعتمد مهام البوتات فوراً، وتُفحص مهام القنوات فوراً للتأكد أن البوت مشرف.", "Faites la promotion de votre canal ou bot Telegram. Les tâches de bot sont approuvées instantanément. Les tâches de canal sont vérifiées immédiatement pour confirmer que le bot est administrateur.", "Продвигайте свой Telegram-канал или бота. Задания для ботов одобряются мгновенно. Задания для каналов проверяются сразу — бот должен быть администратором.", "کانال یا ربات تلگرام خود را تبلیغ کنید. وظایف ربات فوراً تأیید می‌شوند. وظایف کانال بلافاصله بررسی می‌شوند تا مطمئن شویم ربات مدیر است.", "अपने Telegram चैनल या बॉट का प्रचार करें। बॉट टास्क तुरंत स्वीकृत होते हैं। चैनल टास्क की तुरंत जाँच होती है कि बॉट एडमिन है या नहीं।"],
    ["Task Name", "اسم المهمة", "Nom de la tâche", "Название задания", "نام وظیفه", "टास्क का नाम"],
    ["e.g. Join my channel or start my bot", "مثال: انضم لقناتي أو ابدأ بوتي", "ex. Rejoignez mon canal ou démarrez mon bot", "напр. Вступи в мой канал или запусти моего бота", "مثلاً: به کانال من بپیوندید یا ربات مرا استارت کنید", "जैसे: मेरे चैनल से जुड़ें या मेरा बॉट शुरू करें"],
    ["Channel Link", "رابط القناة", "Lien du canal", "Ссылка на канал", "لینک کانال", "चैनल लिंक"],
    ["Bot Link", "رابط البوت", "Lien du bot", "Ссылка на бота", "لینک ربات", "बॉट लिंक"],
    ["Category", "الفئة", "Catégorie", "Категория", "دسته‌بندی", "श्रेणी"],
    ["Channel / Group", "قناة / مجموعة", "Canal / Groupe", "Канал / Группа", "کانال / گروه", "चैनल / ग्रुप"],
    ["Website / Bot", "موقع / بوت", "Site web / Bot", "Сайт / Бот", "وب‌سایت / ربات", "वेबसाइट / बॉट"],
    ["⚠ Add the bot as an administrator in your channel/group before submitting. The check is performed immediately.", "⚠ أضف البوت كمشرف في قناتك/مجموعتك قبل الإرسال. يتم الفحص فوراً.", "⚠ Ajoutez le bot comme administrateur de votre canal/groupe avant d'envoyer. La vérification est immédiate.", "⚠ Перед отправкой добавьте бота администратором в канал/группу. Проверка выполняется сразу.", "⚠ پیش از ثبت، ربات را به‌عنوان مدیر به کانال/گروه خود اضافه کنید. بررسی بلافاصله انجام می‌شود.", "⚠ सबमिट करने से पहले बॉट को अपने चैनल/ग्रुप में एडमिन बनाएँ। जाँच तुरंत होती है।"],
    ["Members You Need", "عدد الأعضاء المطلوب", "Nombre de membres souhaité", "Нужное число участников", "تعداد اعضای موردنیاز", "आवश्यक सदस्य"],
    ["Or enter a custom amount (multiples of 100)", "أو أدخل كمية مخصصة (من مضاعفات 100)", "Ou saisissez une quantité personnalisée (multiples de 100)", "Или введите своё количество (кратное 100)", "یا مقدار دلخواه وارد کنید (مضرب ۱۰۰)", "या अपनी संख्या दर्ज करें (100 के गुणज)"],
    ["Total Cost", "التكلفة الإجمالية", "Coût total", "Общая стоимость", "هزینهٔ کل", "कुल लागत"],
    ["Pricing is charged in TON: every 100 completions = {0} TON. Bot tasks go live instantly; channel tasks go live after payment and setup verification.", "يتم الدفع بعملة TON: كل 100 إنجاز = {0} TON. مهام البوتات تُفعَّل فوراً، ومهام القنوات تُفعَّل بعد الدفع والتحقق من الإعداد.", "Tarification en TON : chaque tranche de 100 réalisations = {0} TON. Les tâches de bot sont actives immédiatement ; celles de canal après paiement et vérification de la configuration.", "Оплата в TON: каждые 100 выполнений = {0} TON. Задания для ботов запускаются сразу; для каналов — после оплаты и проверки настройки.", "پرداخت با TON: هر ۱۰۰ انجام = {0} TON. وظایف ربات فوراً فعال می‌شوند؛ وظایف کانال پس از پرداخت و بررسی تنظیمات فعال می‌شوند.", "भुगतान TON में: हर 100 पूर्णता = {0} TON। बॉट टास्क तुरंत लाइव होते हैं; चैनल टास्क भुगतान और सेटअप जाँच के बाद लाइव होते हैं।"],
    ["Additional Notes (Optional)", "ملاحظات إضافية (اختياري)", "Notes supplémentaires (facultatif)", "Дополнительные заметки (необязательно)", "یادداشت‌های اضافی (اختیاری)", "अतिरिक्त नोट्स (वैकल्पिक)"],
    ["Anything you'd like us to know...", "أي شيء تود إخبارنا به...", "Tout ce que vous souhaitez nous dire...", "Всё, что вы хотите нам сообщить...", "هر چیزی که می‌خواهید بدانیم...", "कुछ भी जो आप हमें बताना चाहें..."],
    ["📤 Submit Request", "📤 إرسال الطلب", "📤 Envoyer la demande", "📤 Отправить заявку", "📤 ارسال درخواست", "📤 अनुरोध भेजें"],
    ["♢ PAY {0} TON", "♢ ادفع {0} TON", "♢ PAYER {0} TON", "♢ ОПЛАТИТЬ {0} TON", "♢ پرداخت {0} TON", "♢ {0} TON का भुगतान करें"],
    ["By submitting this request, you confirm that:", "بإرسال هذا الطلب، فإنك تؤكد أن:", "En envoyant cette demande, vous confirmez que :", "Отправляя заявку, вы подтверждаете, что:", "با ارسال این درخواست تأیید می‌کنید که:", "यह अनुरोध भेजकर आप पुष्टि करते हैं कि:"],
    ["• You own or manage this channel.", "• أنت تملك هذه القناة أو تديرها.", "• Vous possédez ou gérez ce canal.", "• Вы владеете этим каналом или управляете им.", "• شما مالک یا مدیر این کانال هستید.", "• आप इस चैनल के मालिक या प्रबंधक हैं।"],
    ["• You agree to the price calculated for the members requested.", "• توافق على السعر المحسوب لعدد الأعضاء المطلوب.", "• Vous acceptez le prix calculé pour le nombre de membres demandé.", "• Вы согласны с ценой, рассчитанной для запрошенного числа участников.", "• با قیمت محاسبه‌شده برای تعداد اعضای درخواستی موافقید.", "• आप मांगे गए सदस्यों के लिए तय कीमत से सहमत हैं।"],
    ["• Our team will contact you with payment details to activate the task.", "• سيتواصل معك فريقنا بتفاصيل الدفع لتفعيل المهمة.", "• Notre équipe vous contactera avec les détails de paiement pour activer la tâche.", "• Наша команда свяжется с вами с платёжными данными для активации задания.", "• تیم ما برای فعال‌سازی وظیفه با جزئیات پرداخت با شما تماس می‌گیرد.", "• टास्क सक्रिय करने के लिए हमारी टीम भुगतान विवरण के साथ आपसे संपर्क करेगी।"],
    ["• The task goes live on the Tasks page once payment is confirmed.", "• تظهر المهمة في صفحة المهام بعد تأكيد الدفع.", "• La tâche apparaît sur la page Tâches une fois le paiement confirmé.", "• Задание появится на странице заданий после подтверждения оплаты.", "• پس از تأیید پرداخت، وظیفه در صفحهٔ وظایف نمایش داده می‌شود.", "• भुगतान की पुष्टि होते ही टास्क टास्क पेज पर लाइव हो जाता है।"],
    ["Task Added Successfully", "تمت إضافة المهمة بنجاح", "Tâche ajoutée avec succès", "Задание успешно добавлено", "وظیفه با موفقیت افزوده شد", "टास्क सफलतापूर्वक जोड़ा गया"],
    ["Your TON payment was deducted and the task is now live. The bot administrator permission was verified automatically:", "تم خصم مبلغ TON وأصبحت المهمة فعّالة الآن. تم التحقق تلقائياً من صلاحية مشرف البوت:", "Votre paiement en TON a été débité et la tâche est maintenant active. Les droits d'administrateur du bot ont été vérifiés automatiquement :", "Оплата TON списана, задание запущено. Права администратора бота проверены автоматически:", "پرداخت TON شما کسر شد و وظیفه اکنون فعال است. دسترسی مدیر ربات به‌طور خودکار تأیید شد:", "आपका TON भुगतान कट गया और टास्क अब लाइव है। बॉट एडमिन अनुमति अपने आप सत्यापित हो गई:"],
    ["☑️ Channel / Bot:", "☑️ القناة / البوت:", "☑️ Canal / Bot :", "☑️ Канал / Бот:", "☑️ کانال / ربات:", "☑️ चैनल / बॉट:"],
    ["☑️ Members requested:", "☑️ عدد الأعضاء المطلوب:", "☑️ Membres demandés :", "☑️ Запрошено участников:", "☑️ اعضای درخواستی:", "☑️ अनुरोधित सदस्य:"],
    ["☑️ Total cost:", "☑️ التكلفة الإجمالية:", "☑️ Coût total :", "☑️ Общая стоимость:", "☑️ هزینهٔ کل:", "☑️ कुल लागत:"],
    ["Enter a task name", "أدخل اسم المهمة", "Saisissez un nom de tâche", "Введите название задания", "نام وظیفه را وارد کنید", "टास्क का नाम दर्ज करें"],
    ["Enter your Telegram link", "أدخل رابط تيليجرام الخاص بك", "Saisissez votre lien Telegram", "Введите вашу ссылку Telegram", "لینک تلگرام خود را وارد کنید", "अपना Telegram लिंक दर्ज करें"],
    ["Enter at least 100 members", "أدخل 100 عضو على الأقل", "Saisissez au moins 100 membres", "Введите не менее 100 участников", "حداقل ۱۰۰ عضو وارد کنید", "कम से कम 100 सदस्य दर्ज करें"],
    ["Failed to submit", "فشل الإرسال", "Échec de l'envoi", "Не удалось отправить", "ارسال ناموفق بود", "भेजना विफल रहा"],
    ["Task added successfully ✅", "تمت إضافة المهمة بنجاح ✅", "Tâche ajoutée avec succès ✅", "Задание успешно добавлено ✅", "وظیفه با موفقیت افزوده شد ✅", "टास्क सफलतापूर्वक जोड़ा गया ✅"],

    // ── Lucky wheel
    ["🎡 Lucky Wheel", "🎡 عجلة الحظ", "🎡 Roue de la chance", "🎡 Колесо удачи", "🎡 چرخ شانس", "🎡 लकी व्हील"],
    ["Spins available:", "اللفات المتاحة:", "Tours disponibles :", "Доступно вращений:", "چرخش‌های موجود:", "उपलब्ध स्पिन:"],
    ["SPIN", "لف", "TOURNER", "КРУТИТЬ", "بچرخان", "स्पिन"],
    ["Invite Friends", "ادعُ الأصدقاء", "Inviter des amis", "Пригласить друзей", "دعوت دوستان", "दोस्तों को बुलाएँ"],
    ["Every {0} active referrals = 1 free spin!", "كل {0} إحالات نشطة = لفة مجانية!", "Tous les {0} filleuls actifs = 1 tour gratuit !", "Каждые {0} активных реферала = 1 бесплатное вращение!", "هر {0} دعوت‌شدهٔ فعال = ۱ چرخش رایگان!", "हर {0} सक्रिय रेफ़रल = 1 मुफ़्त स्पिन!"],
    ["No spins left. Invite friends! 🎯", "لا توجد لفات متبقية. ادعُ أصدقاءك! 🎯", "Plus de tours. Invitez des amis ! 🎯", "Вращений не осталось. Пригласите друзей! 🎯", "چرخشی باقی نمانده. دوستان را دعوت کنید! 🎯", "कोई स्पिन नहीं बची। दोस्तों को बुलाएँ! 🎯"],
    ["Could not spin", "تعذر اللف", "Impossible de tourner", "Не удалось крутить", "چرخش ممکن نشد", "स्पिन नहीं हो सका"],
    ["🎉 You won {0}", "🎉 ربحت {0}", "🎉 Vous avez gagné {0}", "🎉 Вы выиграли {0}", "🎉 شما {0} برنده شدید", "🎉 आपने {0} जीते"],
    ["😬 No reward. Try again!", "😬 لا مكافأة. حاول مجدداً!", "😬 Pas de récompense. Réessayez !", "😬 Без награды. Попробуйте ещё!", "😬 پاداشی نبود. دوباره تلاش کنید!", "😬 कोई इनाम नहीं। फिर कोशिश करें!"],

    // ── Time
    ["just now", "الآن", "à l'instant", "только что", "همین الان", "अभी-अभी"],
    ["{0}m ago", "منذ {0} د", "il y a {0} min", "{0} мин назад", "{0} دقیقه پیش", "{0} मिनट पहले"],
    ["{0}h ago", "منذ {0} س", "il y a {0} h", "{0} ч назад", "{0} ساعت پیش", "{0} घंटे पहले"],
    ["{0}d ago", "منذ {0} ي", "il y a {0} j", "{0} дн. назад", "{0} روز پیش", "{0} दिन पहले"]
  ];

  /* ---------- Strings already keyed in the page's LANG object (ar/fr come from LANG) ---------- */
  /* [en, ru, fa, hi] */
  var DX = [
    ["Home", "Главная", "خانه", "होम"],
    ["Store", "Магазин", "فروشگاه", "स्टोर"],
    ["Tasks", "Задания", "وظایف", "टास्क"],
    ["Combo", "Комбо", "کمبو", "कॉम्बो"],
    ["Referrals", "Рефералы", "دعوت‌ها", "रेफ़रल"],
    ["Profile", "Профиль", "پروفایل", "प्रोफ़ाइल"],
    ["Ranking", "Рейтинг", "رتبه‌بندی", "रैंकिंग"],
    ["⚡ Earn", "⚡ Заработать", "⚡ کسب درآمد", "⚡ कमाएँ"],
    ["▣ Withdraw", "▣ Вывести", "▣ برداشت", "▣ निकासी"],
    ["Tap to connect wallet", "Нажмите, чтобы подключить кошелёк", "برای اتصال کیف پول ضربه بزنید", "वॉलेट जोड़ने के लिए टैप करें"],
    ["Disconnect your wallet?", "Отключить кошелёк?", "کیف پول قطع شود؟", "वॉलेट डिस्कनेक्ट करें?"],
    ["TON Balance", "Баланс TON", "موجودی TON", "TON बैलेंस"],
    ["ID", "ID", "شناسه", "आईडी"],
    ["Connected", "Подключён", "متصل", "जुड़ा हुआ"],
    ["Disconnected", "Не подключён", "قطع", "जुड़ा नहीं"],
    ["Deposit TON to your balance", "Пополните баланс в TON", "TON را به موجودی خود واریز کنید", "अपने बैलेंस में TON जमा करें"],
    ["Withdraw your balance to your TON wallet", "Выведите баланс на ваш кошелёк TON", "موجودی خود را به کیف پول TON برداشت کنید", "अपना बैलेंस अपने TON वॉलेट में निकालें"],
    ["Convert", "Обмен", "تبدیل", "कन्वर्ट"],
    ["Convert TON to CRYSTAL", "Обменять TON на CRYSTAL", "تبدیل TON به CRYSTAL", "TON को CRYSTAL में बदलें"],
    ["Language", "Язык", "زبان", "भाषा"],
    ["Choose the app language", "Выберите язык приложения", "زبان برنامه را انتخاب کنید", "ऐप की भाषा चुनें"],
    ["Transaction History", "История операций", "تاریخچه تراکنش‌ها", "लेन-देन का इतिहास"],
    ["View your deposits, withdrawals & conversions", "Просмотр пополнений, выводов и обменов", "مشاهده واریزها، برداشت‌ها و تبدیل‌ها", "अपने जमा, निकासी और कन्वर्ज़न देखें"],
    ["Connect your TON wallet and send TON to the Crystal Mining Bot deposit wallet. Your User ID is added as the transaction comment.", "Подключите кошелёк TON и отправьте TON на депозитный кошелёк Crystal Mining Bot. Ваш ID пользователя добавляется как комментарий к транзакции.", "کیف پول TON خود را متصل کنید و TON را به کیف پول واریز Crystal Mining Bot بفرستید. شناسه کاربری شما به‌عنوان توضیح تراکنش اضافه می‌شود.", "अपना TON वॉलेट कनेक्ट करें और Crystal Mining Bot के डिपॉज़िट वॉलेट में TON भेजें। आपकी यूज़र आईडी लेन-देन की टिप्पणी के रूप में जुड़ जाती है।"],
    ["Send Deposit", "Отправить пополнение", "ارسال واریز", "जमा भेजें"],
    ["TON amount", "Сумма в TON", "مقدار TON", "TON की मात्रा"],
    ["MIN", "МИН", "حداقل", "न्यूनतम"],
    ["TON Wallet Address (UQ...)", "Адрес кошелька TON (UQ...)", "آدرس کیف پول TON (UQ...)", "TON वॉलेट पता (UQ...)"],
    ["Withdrawal fee:", "Комиссия за вывод:", "کارمزد برداشت:", "निकासी शुल्क:"],
    ["Amount you will receive after the fee", "Сумма к получению после комиссии", "مبلغی که پس از کارمزد دریافت می‌کنید", "शुल्क के बाद आपको मिलने वाली राशि"],
    ["Submit TON Withdrawal", "Отправить заявку на вывод TON", "ثبت درخواست برداشت TON", "TON निकासी जमा करें"],
    ["Withdrawable (mining)", "Доступно для вывода (майнинг)", "قابل برداشت (استخراج)", "निकासी योग्य (माइनिंग)"],
    ["Deposit balance (store only)", "Депозитный баланс (только магазин)", "موجودی واریز (فقط فروشگاه)", "डिपॉज़िट बैलेंस (केवल स्टोर)"],
    ["Only TON earned from mining can be withdrawn. Your deposit balance can be used to buy packages in the Store.", "Выводить можно только TON, заработанные майнингом. Депозитный баланс можно тратить на пакеты в магазине.", "فقط TON به‌دست‌آمده از استخراج قابل برداشت است. موجودی واریز برای خرید بسته‌ها در فروشگاه استفاده می‌شود.", "केवल माइनिंग से कमाए TON निकाले जा सकते हैं। आपका डिपॉज़िट बैलेंस स्टोर में पैकेज खरीदने के लिए उपयोग हो सकता है।"],
    ["Max withdrawable (mining): {m} TON", "Макс. доступно для вывода (майнинг): {m} TON", "حداکثر قابل برداشت (استخراج): {m} TON", "अधिकतम निकासी योग्य (माइनिंग): {m} TON"],
    ["Deposit balance", "Депозитный баланс", "موجودی واریز", "डिपॉज़िट बैलेंस"],
    ["Store purchases use your deposit balance only. TON earned from mining ({m} TON) is for withdrawal.", "Покупки в магазине используют только депозитный баланс. TON, заработанные майнингом ({m} TON), предназначены для вывода.", "خرید از فروشگاه فقط از موجودی واریز انجام می‌شود. TON حاصل از استخراج ({m} TON) برای برداشت است.", "स्टोर की खरीदारी केवल आपके डिपॉज़िट बैलेंस से होती है। माइनिंग से कमाए TON ({m} TON) निकासी के लिए हैं।"],
    ["Deposit balance too low — deposit TON first", "Недостаточно депозита — сначала пополните TON", "موجودی واریز کافی نیست — ابتدا TON واریز کنید", "डिपॉज़िट बैलेंस कम है — पहले TON जमा करें"],
    ["Account Verification Required", "Требуется проверка аккаунта", "تأیید حساب لازم است", "खाता सत्यापन आवश्यक"],
    ["To confirm that your account is real and active, withdrawals require purchasing a package from the Store. This prevents multiple accounts and abuse of the system, protects the project's funds, and keeps the bot running for everyone.", "Чтобы подтвердить, что ваш аккаунт настоящий и активный, для вывода нужно приобрести пакет в магазине. Это защищает от мультиаккаунтов и злоупотреблений, сохраняет средства проекта и обеспечивает работу бота для всех.", "برای تأیید واقعی و فعال بودن حساب شما، برداشت نیازمند خرید یک بسته از فروشگاه است. این کار از چندحسابی و سوءاستفاده جلوگیری می‌کند، از سرمایهٔ پروژه محافظت می‌کند و ربات را برای همه فعال نگه می‌دارد.", "यह पुष्टि करने के लिए कि आपका खाता असली और सक्रिय है, निकासी के लिए स्टोर से एक पैकेज खरीदना ज़रूरी है। इससे एक से अधिक खाते और सिस्टम का दुरुपयोग रुकता है, प्रोजेक्ट के फंड सुरक्षित रहते हैं और बॉट सबके लिए चलता रहता है।"],
    ["MINIMUM PACKAGE", "МИНИМАЛЬНЫЙ ПАКЕТ", "حداقل بسته", "न्यूनतम पैकेज"],
    ["Mining income", "Доход от майнинга", "درآمد استخراج", "माइनिंग आय"],
    ["day", "день", "روز", "दिन"],
    ["Your crystals stay in your account and keep mining for you every day.", "Ваши кристаллы остаются на аккаунте и каждый день продолжают майнить для вас.", "کریستال‌های شما در حسابتان می‌مانند و هر روز برایتان استخراج می‌کنند.", "आपके क्रिस्टल आपके खाते में रहते हैं और हर दिन आपके लिए माइनिंग करते रहते हैं।"],
    ["Go to Store", "В магазин", "رفتن به فروشگاه", "स्टोर पर जाएँ"],
    ["Not now", "Не сейчас", "حالا نه", "अभी नहीं"],
    ["Minimum to withdraw", "Минимум для вывода", "حداقل برای برداشت", "निकासी के लिए न्यूनतम"],
    ["Also unlocks withdrawal", "Тоже открывает вывод", "برداشت را هم باز می‌کند", "निकासी भी अनलॉक करता है"],
    ["Buy this package or any higher package to unlock withdrawals.", "Купите этот пакет или любой более высокий, чтобы открыть вывод.", "این بسته یا هر بستهٔ بالاتر را بخرید تا برداشت فعال شود.", "निकासी अनलॉक करने के लिए यह पैकेज या इससे ऊँचा कोई भी पैकेज खरीदें।"],
    ["Your TON balance is {bal}. Deposit TON first to buy this package.", "Ваш баланс TON: {bal}. Сначала пополните TON, чтобы купить этот пакет.", "موجودی TON شما {bal} است. برای خرید این بسته ابتدا TON واریز کنید.", "आपका TON बैलेंस {bal} है। यह पैकेज खरीदने के लिए पहले TON जमा करें।"],
    ["Balance:", "Баланс:", "موجودی:", "बैलेंस:"],
    ["⚡ Exchange Now", "⚡ Обменять сейчас", "⚡ همین حالا تبدیل کنید", "⚡ अभी बदलें"]
  ];

  /* ---------- Multi-line HTML blocks: [en, ar, fr, ru, fa, hi] ---------- */
  var IMG = '<img class="shiba-icon-inline" src="https://i.ibb.co/chCjf1zw/Chat-GPT-Image-Sep-25-2026-04-18-45-AM-1.png" alt="CRYSTAL">';
  var BLOCKS = {
    contest1: [
      '<b>Invite friends</b> with your personal link from the Referrals page. Each round lasts <b>7 days</b>.',
      '<b>ادعُ أصدقاءك</b> عبر رابطك الشخصي من صفحة الإحالات. مدة كل جولة <b>7 أيام</b>.',
      '<b>Invitez des amis</b> avec votre lien personnel depuis la page Parrainage. Chaque manche dure <b>7 jours</b>.',
      '<b>Приглашайте друзей</b> по личной ссылке на странице «Рефералы». Каждый раунд длится <b>7 дней</b>.',
      'با لینک شخصی خود در صفحهٔ دعوت‌ها <b>دوستانتان را دعوت کنید</b>. هر دوره <b>۷ روز</b> طول می‌کشد.',
      'रेफ़रल पेज से अपने निजी लिंक द्वारा <b>दोस्तों को आमंत्रित करें</b>। हर राउंड <b>7 दिन</b> का होता है।'
    ],
    contest2: [
      'Only <b>active</b> referrals who joined <b>during the current round</b> count. Pending, flagged or older invites are not counted.',
      'تُحتسب فقط الإحالات <b>النشطة</b> التي انضمت <b>خلال الجولة الحالية</b>. الدعوات المعلقة أو المُبلَّغ عنها أو الأقدم لا تُحتسب.',
      'Seuls les filleuls <b>actifs</b> inscrits <b>pendant la manche en cours</b> comptent. Les invitations en attente, signalées ou plus anciennes ne sont pas comptées.',
      'Учитываются только <b>активные</b> рефералы, пришедшие <b>в текущем раунде</b>. Ожидающие, помеченные и более старые приглашения не учитываются.',
      'فقط دعوت‌شدگان <b>فعالی</b> که <b>در دورهٔ جاری</b> پیوسته‌اند شمرده می‌شوند. دعوت‌های در انتظار، علامت‌خورده یا قدیمی‌تر محاسبه نمی‌شوند.',
      'केवल वही <b>सक्रिय</b> रेफ़रल गिने जाते हैं जो <b>मौजूदा राउंड में</b> जुड़े हों। लंबित, फ़्लैग किए गए या पुराने निमंत्रण नहीं गिने जाते।'
    ],
    contest3: [
      'Ranking is by number of active referrals. On a tie, whoever reached the count <b>first</b> ranks higher.',
      'الترتيب حسب عدد الإحالات النشطة. عند التعادل، من وصل للعدد <b>أولاً</b> يكون ترتيبه أعلى.',
      "Le classement dépend du nombre de filleuls actifs. En cas d'égalité, celui qui a atteint le total <b>en premier</b> est mieux classé.",
      'Рейтинг зависит от числа активных рефералов. При равенстве выше тот, кто набрал это число <b>раньше</b>.',
      'رتبه‌بندی بر اساس تعداد دعوت‌شدگان فعال است. در صورت تساوی، کسی که <b>زودتر</b> به این تعداد رسیده رتبهٔ بالاتری دارد.',
      'रैंकिंग सक्रिय रेफ़रल की संख्या पर आधारित है। बराबरी होने पर जो <b>पहले</b> उस संख्या तक पहुँचा उसकी रैंक ऊँची होगी।'
    ],
    contest4: [
      'The <b>top 10</b> win TON prizes. The prize pool is <b id="ctHelpPool">{pool}</b> TON in total, with the biggest prize for #1.',
      'يفوز <b>أفضل 10</b> بجوائز TON. إجمالي الجوائز <b id="ctHelpPool">{pool}</b> TON، وأكبر جائزة للمركز الأول.',
      'Les <b>10 premiers</b> gagnent des prix en TON. La cagnotte totale est de <b id="ctHelpPool">{pool}</b> TON, avec le plus gros prix pour le n°1.',
      '<b>Топ-10</b> получают призы в TON. Общий призовой фонд — <b id="ctHelpPool">{pool}</b> TON, самый большой приз у №1.',
      '<b>۱۰ نفر برتر</b> جوایز TON می‌برند. مجموع جوایز <b id="ctHelpPool">{pool}</b> TON است و بیشترین جایزه برای نفر اول است.',
      '<b>शीर्ष 10</b> को TON इनाम मिलते हैं। कुल इनाम पूल <b id="ctHelpPool">{pool}</b> TON है, सबसे बड़ा इनाम #1 के लिए है।'
    ],
    contest5: [
      'When the timer ends, prizes are <b>added to your TON balance automatically</b> and you get a Telegram message. A new round starts right away.',
      'عند انتهاء المؤقت، تُضاف الجوائز <b>إلى رصيد TON تلقائياً</b> وتصلك رسالة على تيليجرام. وتبدأ جولة جديدة فوراً.',
      'Quand le minuteur se termine, les prix sont <b>ajoutés automatiquement à votre solde TON</b> et vous recevez un message Telegram. Une nouvelle manche démarre aussitôt.',
      'Когда таймер заканчивается, призы <b>автоматически зачисляются на ваш баланс TON</b>, и вы получаете сообщение в Telegram. Сразу начинается новый раунд.',
      'وقتی زمان‌سنج تمام شود، جوایز <b>به‌طور خودکار به موجودی TON شما اضافه می‌شود</b> و پیامی در تلگرام دریافت می‌کنید. دورهٔ جدید بلافاصله شروع می‌شود.',
      'टाइमर खत्म होने पर इनाम <b>अपने आप आपके TON बैलेंस में जुड़ जाते हैं</b> और आपको Telegram संदेश मिलता है। नया राउंड तुरंत शुरू हो जाता है।'
    ],
    wheel: [
      'Earn <b>1 free spin</b> for every <b id="wheelRefsPerSpin">{refs}</b> active referrals. Spin to win up to <b>10,000 ' + IMG + '</b>!',
      'احصل على <b>لفة مجانية</b> لكل <b id="wheelRefsPerSpin">{refs}</b> إحالات نشطة. لف واربح حتى <b>10,000 ' + IMG + '</b>!',
      'Gagnez <b>1 tour gratuit</b> pour chaque <b id="wheelRefsPerSpin">{refs}</b> filleuls actifs. Tournez pour gagner jusqu\'à <b>10 000 ' + IMG + '</b> !',
      'Получайте <b>1 бесплатное вращение</b> за каждые <b id="wheelRefsPerSpin">{refs}</b> активных реферала. Крутите и выигрывайте до <b>10 000 ' + IMG + '</b>!',
      'به ازای هر <b id="wheelRefsPerSpin">{refs}</b> دعوت‌شدهٔ فعال <b>۱ چرخش رایگان</b> بگیرید. بچرخانید و تا <b>10,000 ' + IMG + '</b> ببرید!',
      'हर <b id="wheelRefsPerSpin">{refs}</b> सक्रिय रेफ़रल पर <b>1 मुफ़्त स्पिन</b> पाएँ। स्पिन करें और <b>10,000 ' + IMG + '</b> तक जीतें!'
    ],
    comboSelect: [
      "Select <b>{n} items</b> to complete today's combo",
      'اختر <b>{n} عناصر</b> لإكمال كومبو اليوم',
      "Sélectionnez <b>{n} éléments</b> pour compléter le combo du jour",
      'Выберите <b>{n} предмета</b>, чтобы завершить комбо дня',
      'برای تکمیل کمبوی امروز <b>{n} مورد</b> انتخاب کنید',
      'आज का कॉम्बो पूरा करने के लिए <b>{n} आइटम</b> चुनें'
    ],
    comboOrder: [
      "Select <b>{n} items</b> in the right order to complete today's combo",
      'اختر <b>{n} عناصر</b> بالترتيب الصحيح لإكمال كومبو اليوم',
      "Sélectionnez <b>{n} éléments</b> dans le bon ordre pour compléter le combo du jour",
      'Выберите <b>{n} предмета</b> в правильном порядке, чтобы завершить комбо дня',
      'برای تکمیل کمبوی امروز <b>{n} مورد</b> را به ترتیب درست انتخاب کنید',
      'आज का कॉम्बो पूरा करने के लिए <b>{n} आइटम</b> सही क्रम में चुनें'
    ]
  };
  var params = { pool: 3, refs: 2, n: 4 };

  /* ---------- Engine ---------- */
  var NUM = '(\\{\\w+\\}|[\\d.,:%#+\\-]+(?: ?TON)?)';
  var maps = {};          // lang -> { exact:{}, pats:[] }
  var cache = {};         // lang|core -> result or null
  var ready = false;
  LANGS.forEach(function (l) { maps[l] = { exact: {}, pats: [] }; });

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function norm(s) { return String(s).trim().replace(/\s+/g, ' '); }

  function addEntry(lang, en, tpl) {
    if (!tpl) return;
    en = norm(en);
    if (/\{t?\d\}/.test(en)) {
      var names = [], re = '^';
      en.split(/(\{t?\d\})/).forEach(function (p) {
        var m = p.match(/^\{(t?\d)\}$/);
        if (m) { names.push(m[1]); re += m[1].charAt(0) === 't' ? '(.+?)' : NUM; }
        else re += esc(p);
      });
      re += '$';
      maps[lang].pats.push({ re: new RegExp(re), tpl: tpl, names: names, len: en.length });
    } else {
      maps[lang].exact[en] = tpl;
    }
  }

  // Convert {name} placeholders used by the page's LANG object into {0},{1}...
  function posify(enStr, trStr) {
    var names = [];
    enStr.replace(/\{(\w+)\}/g, function (m, n) { if (names.indexOf(n) < 0) names.push(n); return m; });
    var e = enStr, t = trStr;
    names.forEach(function (n, i) {
      var r = new RegExp('\\{' + n + '\\}', 'g');
      e = e.replace(r, '{' + i + '}');
      t = t.replace(r, '{' + i + '}');
    });
    return [e, t];
  }

  D.forEach(function (r) { for (var i = 1; i < 6; i++) addEntry(LANGS[i], r[0], r[i]); });
  DX.forEach(function (r) {
    for (var i = 1; i < 4; i++) {
      var p = posify(r[0], r[i]);
      addEntry(LANGS[i + 2], p[0], p[1]);
    }
  });
  function sortPats() {
    LANGS.forEach(function (l) { maps[l].pats.sort(function (a, b) { return b.len - a.len; }); });
  }
  sortPats();

  // Merge ar/fr (and any other language) from the page's LANG object
  function addPageLang(LANG) {
    if (!LANG || !LANG.en) return;
    ['ar', 'fr'].forEach(function (l) {
      if (!LANG[l]) return;
      Object.keys(LANG.en).forEach(function (k) {
        if (LANG[l][k] == null) return;
        var p = posify(LANG.en[k], LANG[l][k]);
        if (!maps[l].exact[norm(p[0])]) addEntry(l, p[0], p[1]);
      });
    });
    sortPats();
    cache = {};
  }

  function fill(tpl, names, groups) {
    return tpl.replace(/\{(t?\d)\}/g, function (m, k) {
      var i = names.indexOf(k);
      return i < 0 ? m : groups[i + 1];
    });
  }
  function lookup(lang, core) {
    var m = maps[lang];
    if (!m) return null;
    if (Object.prototype.hasOwnProperty.call(m.exact, core)) return m.exact[core];
    for (var i = 0; i < m.pats.length; i++) {
      var p = m.pats[i], g = core.match(p.re);
      if (g) return fill(p.tpl, p.names, g);
    }
    // "<Label> +12.5" / "<Label> -0.1 TON" (history rows)
    var g2 = core.match(/^(.+?) ([+-]\d[\d.,]*)( TON)?$/);
    if (g2 && Object.prototype.hasOwnProperty.call(m.exact, g2[1])) return m.exact[g2[1]] + ' ' + g2[2] + (g2[3] || '');
    return null;
  }
  function tr(s, lang) {
    lang = lang || cur;
    s = String(s == null ? '' : s);
    if (lang === 'en' || !maps[lang]) return s;
    var lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0], core = norm(s);
    if (!core || !/[A-Za-z]/.test(core)) return s;
    var key = lang + '|' + core;
    var hit = cache[key];
    if (hit === undefined) {
      hit = lookup(lang, core);
      if (hit === undefined) hit = null;
      cache[key] = hit;
    }
    return hit === null ? s : lead + hit + trail;
  }

  function block(key, extra) {
    var b = BLOCKS[key];
    if (!b) return '';
    var s = b[LANGS.indexOf(cur)] || b[0];
    var pp = {}, k;
    for (k in params) pp[k] = params[k];
    if (extra) for (k in extra) pp[k] = extra[k];
    return s.replace(/\{(\w+)\}/g, function (m, n) { return pp[n] != null ? pp[n] : m; });
  }

  /* ---------- DOM translation ---------- */
  var SKIP = '[data-i18n],[data-no-tr],[data-tr-html],script,style,textarea,svg';
  var trec = new WeakMap(), arec = new WeakMap();
  var obs = null, CFG = { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title', 'aria-label'] };

  function procText(n) {
    var p = n.parentElement;
    if (!p || p.closest(SKIP)) return;
    var r = trec.get(n), v = n.nodeValue;
    var src = (r && v === r.out) ? r.src : v;
    var out = cur === 'en' ? src : tr(src);
    if (out !== v) n.nodeValue = out;
    trec.set(n, { src: src, out: out });
  }
  function procAttr(el, a) {
    if (el.closest && el.closest('[data-no-tr],svg')) return;
    if (a === 'placeholder' && el.hasAttribute('data-i18n-placeholder')) return;
    var v = el.getAttribute(a);
    if (v == null) return;
    var rm = arec.get(el);
    if (!rm) { rm = {}; arec.set(el, rm); }
    var r = rm[a], src = (r && v === r.out) ? r.src : v;
    var out = cur === 'en' ? src : tr(src);
    if (out !== v) el.setAttribute(a, out);
    rm[a] = { src: src, out: out };
  }
  function walk(root) {
    if (root.nodeType === 3) { procText(root); return; }
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) procText(n);
    var els = root.querySelectorAll('[placeholder],[title],[aria-label]');
    for (var i = 0; i < els.length; i++) {
      procAttr(els[i], 'placeholder'); procAttr(els[i], 'title'); procAttr(els[i], 'aria-label');
    }
    ['placeholder', 'title', 'aria-label'].forEach(function (a) { if (root.hasAttribute && root.hasAttribute(a)) procAttr(root, a); });
  }
  function renderBlocks() {
    var els = document.querySelectorAll('[data-tr-html]');
    for (var i = 0; i < els.length; i++) els[i].innerHTML = block(els[i].getAttribute('data-tr-html'));
  }
  function pause() { if (obs) obs.disconnect(); }
  function resume() { if (obs && document.body) obs.observe(document.body, CFG); }

  function apply() {
    if (!document.body) return;
    pause();
    try { renderBlocks(); walk(document.body); } finally { resume(); }
  }
  function onMutations(ms) {
    pause();
    try {
      ms.forEach(function (m) {
        if (m.type === 'characterData') procText(m.target);
        else if (m.type === 'attributes') procAttr(m.target, m.attributeName);
        else for (var i = 0; i < m.addedNodes.length; i++) walk(m.addedNodes[i]);
      });
    } finally { resume(); }
  }
  function start() {
    if (obs) return;
    obs = new MutationObserver(onMutations);
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  window.I18N = {
    langs: LANGS,
    tr: tr,
    block: block,
    get lang() { return cur; },
    setLang: function (lang, pageLANG) {
      if (LANGS.indexOf(lang) < 0) lang = 'en';
      if (pageLANG && !ready) { addPageLang(pageLANG); ready = true; }
      cur = lang; cache = {};
      apply();
    },
    setParams: function (p) {
      for (var k in p) params[k] = p[k];
      pause(); try { renderBlocks(); } finally { resume(); }
    },
    apply: apply
  };
})();
