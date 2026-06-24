/* ============================================
   ECLARYA - Main JavaScript
   ============================================ */

'use strict';

// ---- State ----
const state = {
  lang: localStorage.getItem('eclarya-lang') || 'ar',
  currentPage: 'home',
  wishlist: JSON.parse(localStorage.getItem('eclarya-wishlist') || '[]'),
  currentProduct: null,
  orderProduct: null,
};

// ---- Translations ----
const T = {
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_products: 'المنتجات',
    nav_booking: 'الحجز',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    tagline: 'الجمال والرفاهية',
    hero1_badge: '✦ مجموعة 2024 الجديدة',
    hero1_title: 'اكتشفي <span>جمالك</span> الحقيقي مع إيكلاريا',
    hero1_sub: 'سيروم كونتور العيون وكريم AHA المضيء — منتجات طبيعية 100% لبشرة مشرقة وصحية.',
    hero2_badge: '✦ كريم AHA المضيء',
    hero2_title: 'اعتني ببشرتك بـ <span>AHA</span> الطبيعي',
    hero2_sub: 'كريم إيكلاريا المضيء بأحماض AHA يضيء ويوحد البشرة ويقشر بلطف فائق.',
    hero3_badge: '✦ سيروم العيون',
    hero3_title: 'عيون <span>أكثر</span> إشراقاً وشباباً',
    hero3_sub: 'سيروم كونتور العيون من إيكلاريا — يقلل الهالات السوداء والانتفاخات بمكونات طبيعية فعّالة.',
    shop_now: 'تسوقي الآن',
    learn_more: 'اعرفي المزيد',
    featured_products: 'المنتجات المميزة',
    featured_badge: '✦ الأكثر مبيعاً',
    featured_sub: 'اكتشفي مجموعة منتجاتنا المختارة بعناية لتناسب كل احتياجاتك',
    categories: 'تسوقي حسب الفئة',
    cat_badge: '✦ فئاتنا',
    features_title: 'لماذا تختارين إيكلاريا؟',
    features_badge: '✦ مميزاتنا',
    feat1_title: 'جودة فائقة',
    feat1_desc: 'منتجات مصنوعة من أجود المكونات الطبيعية المعتمدة دولياً',
    feat2_title: 'شحن سريع',
    feat2_desc: 'توصيل سريع لجميع أنحاء المغرب خلال 24-72 ساعة',
    feat3_title: 'دعم واتساب',
    feat3_desc: 'فريق دعم متخصص متاح 7 أيام عبر واتساب لمساعدتك',
    feat4_title: 'ضمان الرضا',
    feat4_desc: 'إرجاع مجاني خلال 14 يوم إذا لم تكوني راضية تماماً',
    testimonials: 'آراء عميلاتنا',
    test_badge: '✦ تقييمات حقيقية',
    cta_title: 'ابدأي رحلتك مع إيكلاريا اليوم',
    cta_sub: 'انضمي إلى آلاف العميلات اللواتي وثقن بإيكلاريا لعنايتهن اليومية',
    cta_btn1: 'تسوقي الآن',
    cta_btn2: 'احجزي استشارة مجانية',
    add_cart: 'أضفي للسلة',
    add_wishlist: 'المفضلة',
    cart_title: 'سلة الشراء',
    cart_empty: 'سلتك فارغة',
    cart_empty_sub: 'أضيفي منتجاتك المفضلة للسلة',
    subtotal: 'المجموع الفرعي',
    shipping: 'الشحن',
    free: 'مجاني',
    total: 'الإجمالي',
    checkout: 'إتمام الشراء',
    continue_shopping: 'متابعة التسوق',
    add_success: 'تمت إضافة المنتج للسلة',
    about_title: 'من نحن',
    about_hero_sub: 'قصة شغف بالجمال والرفاهية الطبيعية',
    products_title: 'منتجاتنا',
    search_placeholder: 'ابحثي عن منتج...',
    all_categories: 'جميع الفئات',
    sort_label: 'ترتيب حسب:',
    sort_popular: 'الأكثر شعبية',
    sort_price_asc: 'السعر: الأقل أولاً',
    sort_price_desc: 'السعر: الأعلى أولاً',
    sort_newest: 'الأحدث',
    results_text: 'عرض {n} منتج',
    price_range: 'نطاق السعر',
    booking_title: 'احجزي استشارة',
    booking_hero_sub: 'استشارة مجانية مع خبراء الجمال لدينا',
    faq_title: 'الأسئلة الشائعة',
    faq_hero_sub: 'كل ما تحتاجين معرفته عن منتجاتنا وخدماتنا',
    contact_title: 'اتصلي بنا',
    contact_hero_sub: 'نحن هنا للإجابة على جميع استفساراتك',
    checkout_title: 'إتمام الشراء',
    full_name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    city: 'المدينة',
    notes: 'ملاحظات إضافية',
    payment_method: 'طريقة الدفع',
    cash_on_delivery: 'الدفع عند الاستلام',
    bank_transfer: 'تحويل بنكي',
    place_order: 'تأكيد الطلب',
    order_summary: 'ملخص الطلب',
    order_success: 'تم استلام طلبك بنجاح!',
    order_success_msg: 'سيتواصل معك فريقنا قريباً لتأكيد الطلب. شكراً لثقتك بإكلاريا.',
    back_home: 'العودة للرئيسية',
    trust1: 'شحن مجاني لجميع الطلبات',
    trust2: 'منتجات أصيلة 100%',
    trust3: 'إرجاع مجاني 14 يوم',
    trust4: 'دفع آمن ومضمون',
    view_product: 'عرض المنتج',
    book_consult: 'احجزي الآن',
    send_message: 'أرسلي الرسالة',
    whatsapp_order: 'اطلبي عبر واتساب',
    add_to_cart_full: 'أضيفي للسلة',
    buy_now: 'اشتري الآن',
    related_products: 'منتجات مشابهة',
    in_stock: 'متوفر',
    out_of_stock: 'نفذ المخزون',
    qty: 'الكمية',
    description: 'الوصف',
    ingredients: 'المكونات',
    how_to_use: 'طريقة الاستخدام',
    reviews: 'التقييمات',
    footer_links: 'روابط سريعة',
    footer_cats: 'الفئات',
    footer_contact: 'تواصلي معنا',
    footer_copy: '© 2024 إكلاريا. جميع الحقوق محفوظة.',
    made_with: 'صُنع بـ',
    love: '❤️',
    in_morocco: 'في المغرب',
    drh: 'درهم',
    consult_types: ['مشورة بشرة', 'عناية بالشعر', 'تجميل عام', 'روتين صباحي', 'روتين مسائي'],
    name_label: 'الاسم',
    concern_label: 'نوع الاستشارة',
    date_label: 'التاريخ المفضل',
    time_label: 'الوقت المفضل',
    message_label: 'رسالتك',
    optional: '(اختياري)',
    submit_booking: 'تأكيد الحجز',
    booking_success: 'تم استلام طلب حجزك! سنتواصل معك قريباً.',
    contact_success: 'تم إرسال رسالتك! سنرد عليك في أقرب وقت.',
    price_filter: 'السعر',
    filter_title: 'تصفية المنتجات',
    live_order_prefix: 'قامت',
    live_order_suffix: 'بطلب منذ قليل',
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_products: 'Produits',
    nav_booking: 'Réservation',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    tagline: 'Beauté & Luxe',
    hero1_badge: '✦ Nouvelle Collection 2024',
    hero1_title: 'Révélez votre <span>Beauté</span> naturelle avec ECLARYA',
    hero1_sub: 'Des soins de beauté luxueux formulés avec les meilleurs ingrédients naturels pour une peau rayonnante.',
    hero2_badge: '✦ Offres Exclusives',
    hero2_title: 'Prenez soin de votre peau avec l\'<span>AHA</span> naturel',
    hero2_sub: 'La crème éclaircissante AHA d\'Éclarya illumine, unifie le teint et exfolie tout en douceur.',
    hero3_badge: '✦ Sérum Contour des Yeux',
    hero3_title: 'Des yeux <span>plus</span> lumineux et jeunes',
    hero3_sub: 'Le sérum contour des yeux Éclarya réduit cernes et poches avec des actifs naturels puissants.',
    shop_now: 'Acheter maintenant',
    learn_more: 'En savoir plus',
    featured_products: 'Produits vedettes',
    featured_badge: '✦ Best-sellers',
    featured_sub: 'Découvrez notre sélection de produits choisis avec soin pour répondre à tous vos besoins',
    categories: 'Acheter par catégorie',
    cat_badge: '✦ Nos catégories',
    features_title: 'Pourquoi choisir ECLARYA ?',
    features_badge: '✦ Nos avantages',
    feat1_title: 'Qualité supérieure',
    feat1_desc: 'Produits formulés avec les meilleurs ingrédients naturels certifiés internationalement',
    feat2_title: 'Livraison rapide',
    feat2_desc: 'Livraison rapide partout au Maroc en 24-72h',
    feat3_title: 'Support WhatsApp',
    feat3_desc: 'Équipe d\'experts disponible 7j/7 via WhatsApp pour vous aider',
    feat4_title: 'Satisfaction garantie',
    feat4_desc: 'Retour gratuit sous 14 jours si vous n\'êtes pas entièrement satisfaite',
    testimonials: 'Avis de nos clientes',
    test_badge: '✦ Avis authentiques',
    cta_title: 'Commencez votre voyage avec ECLARYA',
    cta_sub: 'Rejoignez des milliers de clientes qui font confiance à ECLARYA pour leurs soins quotidiens',
    cta_btn1: 'Acheter maintenant',
    cta_btn2: 'Réserver une consultation',
    add_cart: 'Ajouter au panier',
    add_wishlist: 'Favoris',
    cart_title: 'Mon Panier',
    cart_empty: 'Votre panier est vide',
    cart_empty_sub: 'Ajoutez vos produits préférés au panier',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    free: 'Gratuite',
    total: 'Total',
    checkout: 'Passer la commande',
    continue_shopping: 'Continuer les achats',
    add_success: 'Produit ajouté au panier',
    about_title: 'À propos de nous',
    about_hero_sub: 'Une passion pour la beauté et le luxe naturel',
    products_title: 'Nos Produits',
    search_placeholder: 'Rechercher un produit...',
    all_categories: 'Toutes les catégories',
    sort_label: 'Trier par :',
    sort_popular: 'Plus populaires',
    sort_price_asc: 'Prix : croissant',
    sort_price_desc: 'Prix : décroissant',
    sort_newest: 'Nouveautés',
    results_text: 'Affichage de {n} produits',
    price_range: 'Gamme de prix',
    booking_title: 'Réserver une consultation',
    booking_hero_sub: 'Consultation gratuite avec nos experts beauté',
    faq_title: 'Questions fréquentes',
    faq_hero_sub: 'Tout ce que vous devez savoir sur nos produits et services',
    contact_title: 'Contactez-nous',
    contact_hero_sub: 'Nous sommes là pour répondre à toutes vos questions',
    checkout_title: 'Finaliser la commande',
    full_name: 'Nom complet',
    phone: 'Numéro de téléphone',
    email: 'E-mail',
    address: 'Adresse',
    city: 'Ville',
    notes: 'Notes supplémentaires',
    payment_method: 'Mode de paiement',
    cash_on_delivery: 'Paiement à la livraison',
    bank_transfer: 'Virement bancaire',
    place_order: 'Confirmer la commande',
    order_summary: 'Récapitulatif',
    order_success: 'Votre commande a bien été reçue !',
    order_success_msg: 'Notre équipe vous contactera bientôt pour confirmer. Merci de votre confiance en ECLARYA.',
    back_home: 'Retour à l\'accueil',
    trust1: 'Livraison gratuite partout',
    trust2: 'Produits 100% authentiques',
    trust3: 'Retour gratuit 14 jours',
    trust4: 'Paiement sécurisé',
    view_product: 'Voir le produit',
    book_consult: 'Réserver',
    send_message: 'Envoyer le message',
    whatsapp_order: 'Commander via WhatsApp',
    add_to_cart_full: 'Ajouter au panier',
    buy_now: 'Acheter maintenant',
    related_products: 'Produits similaires',
    in_stock: 'En stock',
    out_of_stock: 'Rupture de stock',
    qty: 'Quantité',
    description: 'Description',
    ingredients: 'Ingrédients',
    how_to_use: 'Mode d\'emploi',
    reviews: 'Avis',
    footer_links: 'Liens rapides',
    footer_cats: 'Catégories',
    footer_contact: 'Contactez-nous',
    footer_copy: '© 2024 ECLARYA. Tous droits réservés.',
    made_with: 'Fait avec',
    love: '❤️',
    in_morocco: 'au Maroc',
    drh: 'DH',
    consult_types: ['Soins de peau', 'Soins capillaires', 'Beauté générale', 'Routine matinale', 'Routine du soir'],
    name_label: 'Nom',
    concern_label: 'Type de consultation',
    date_label: 'Date préférée',
    time_label: 'Heure préférée',
    message_label: 'Votre message',
    optional: '(facultatif)',
    submit_booking: 'Confirmer la réservation',
    booking_success: 'Votre demande a été reçue ! Nous vous contacterons bientôt.',
    contact_success: 'Message envoyé ! Nous vous répondrons dans les plus brefs délais.',
    price_filter: 'Prix',
    filter_title: 'Filtrer les produits',
    live_order_prefix: '',
    live_order_suffix: 'vient de commander',
  }
};

function t(key) {
  return (T[state.lang] || T.ar)[key] || key;
}

// ---- Unsplash Image Helper ----
// Old IDs start with digits (timestamp-hash), new IDs are pure alphanumeric slugs
function uimg(id, w=800, h=800) {
  const isOld = /^\d/.test(id);
  const base = isOld
    ? `https://images.unsplash.com/photo-${id}`
    : `https://images.unsplash.com/${id}`;
  return `${base}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;
}

// ---- Products Data ----
const PRODUCTS = [
  {
    id: 1,
    nameAr: 'كريم إيكلاريا AHA لتفتيح البشرة', nameFr: 'Crème Éclarya AHA Éclaircissante',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 149, oldPrice: null,
    img: 'assets/images/eclarya-creme.jpg',
    emoji: '🌿', rating: 4.9, reviews: 203, badge: 'popular',
    descAr: 'كريم إيكلاريا بأحماض AHA الطبيعية — يفتح البشرة ويوحد لونها ويقشر بلطف فائق. يرفع التصبغات ويمنح بشرة مضيئة وصحية. 50ml.',
    descFr: 'Crème Éclarya aux AHA naturels — éclaire, unifie le teint et exfolie en douceur. Réduit les taches et donne un éclat naturel. 50ml.',
    ingredients: ['AHA Complex (Glycolic + Lactic)', 'Niacinamide 5%', 'Vitamin C', 'Centella Asiatica', 'Shea Butter'],
    how_to_useAr: 'ضعي طبقة رقيقة على الوجه المنظف كل مساء. ابدئي بمرة واحدة أسبوعياً ثم زيدي التدريجياً.',
    how_to_useFr: 'Appliquez une fine couche sur le visage nettoyé chaque soir. Commencez par une fois par semaine puis augmentez progressivement.',
    bg: 'linear-gradient(135deg,#f1f8e9,#dcedc8)', new: false, outOfStock: false,
    fullDescAr: `كريم Éclarya AHA هو كريم متطور للعناية بالبشرة صُمم خصيصًا للمساعدة على تفتيح البشرة وتوحيد لونها ومنحها إشراقة طبيعية. يحتوي على مزيج من أحماض الفواكه (AHA) ومستخلصات نباتية مغذية تعمل على إزالة الخلايا الميتة بلطف، مما يساعد على تحسين مظهر البقع الداكنة والتصبغات وتوحيد لون البشرة.\n\nبفضل تركيبته الغنية بالمرطبات والمكونات المغذية، يساعد الكريم على الحفاظ على نعومة البشرة وترطيبها، ليمنحك بشرة أكثر نضارة وصفاءً وإشراقًا مع الاستخدام المنتظم.`,
    fullDescFr: `La crème Éclarya AHA est une crème de soin avancée conçue pour aider à éclaircir le teint, l'unifier et lui donner un éclat naturel. Elle contient un mélange d'acides de fruits (AHA) et d'extraits végétaux nourrissants qui éliminent en douceur les cellules mortes, aidant à réduire les taches sombres et à unifier le teint.\n\nGrâce à sa formule riche en hydratants et en actifs nourrissants, la crème aide à maintenir la douceur et l'hydratation de la peau.`,
    benefitsAr: [
      'يساعد على تفتيح البشرة وإضفاء إشراقة طبيعية',
      'يساهم في توحيد لون البشرة وتقليل مظهر التصبغات',
      'يقشر البشرة بلطف لإزالة الخلايا الميتة',
      'يمنح البشرة ترطيبًا عميقًا وملمسًا أكثر نعومة',
      'يساعد على تحسين مظهر البشرة الباهتة والمتعبة',
      'مناسب للاستخدام اليومي ضمن روتين العناية بالبشرة',
    ],
    benefitsFr: [
      'Aide à éclaircir la peau et lui donner un éclat naturel',
      'Contribue à unifier le teint et réduire les taches',
      'Exfolie la peau en douceur pour éliminer les cellules mortes',
      'Hydrate en profondeur pour une peau plus douce',
      'Améliore l\'apparence d\'un teint terne et fatigué',
      'Convient à une utilisation quotidienne',
    ],
    fullIngredientsAr: [
      'Aqua (ماء)',
      'Mentha Piperita Leaf Water (ماء النعناع الفلفلي)',
      'Chamaemelum Nobile Flower Water (ماء البابونج الروماني)',
      'Glycerin (الجلسرين المرطب)',
      'Prunus Amygdalus Dulcis Oil (زيت اللوز الحلو)',
      'Vitis Vinifera Seed Oil (زيت بذور العنب)',
      'Niacinamide (النياسيناميد)',
      'Glycolic Acid (حمض الجليكوليك)',
      'Tartaric Acid (حمض الطرطريك)',
      'Malic Acid (حمض الماليك)',
      'Carica Papaya Fruit Extract (مستخلص البابايا)',
      'Psidium Guajava Fruit Extract (مستخلص الجوافة)',
      'Saxifraga Sarmentosa Extract',
      'Tocopherol (فيتامين E)',
      'Urea (اليوريا)',
      'Sodium Lactate (لاكتات الصوديوم)',
    ],
    stepsAr: [
      'اغسل الوجه والرقبة جيدًا وجففهما بلطف.',
      'ضع كمية مناسبة من الكريم على الوجه والرقبة.',
      'دلك بحركات دائرية خفيفة حتى يتم امتصاصه بالكامل.',
      'يُستخدم يوميًا للحصول على أفضل النتائج.',
    ],
    stepsFr: [
      'Nettoyez bien le visage et le cou, puis séchez délicatement.',
      'Appliquez une quantité appropriée de crème sur le visage et le cou.',
      'Massez en mouvements circulaires doux jusqu\'à absorption complète.',
      'Utilisez quotidiennement pour de meilleurs résultats.',
    ],
    tipAr: 'يُفضل استخدام واقي شمس خلال النهار عند استعمال المنتجات التي تحتوي على أحماض الفواكه (AHA) للمساعدة في حماية البشرة.',
    tipFr: 'Il est conseillé d\'utiliser un écran solaire pendant la journée lors de l\'utilisation de produits contenant des AHA pour aider à protéger la peau.',
    productInfoAr: { type: 'كريم عناية وتفتيح للبشرة', use: 'الوجه والرقبة', color: 'أبيض', texture: 'كريم', size: '50 مل', shelf: '24 شهرًا قبل الفتح / 6 أشهر بعد الفتح' },
    storageAr: [
      'يُحفظ بعيدًا عن الحرارة والرطوبة.',
      'للاستعمال الخارجي فقط.',
      'يُحفظ بعيدًا عن متناول الأطفال.',
      'لا يُبتلع.',
    ],
  },
  {
    id: 2,
    nameAr: 'سيروم إيكلاريا لمحيط العين بالكافيين', nameFr: 'Sérum Éclarya Contour des Yeux au Caféine',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 189, oldPrice: null,
    img: 'assets/images/eclarya-serum.jpg',
    emoji: '💧', rating: 4.9, reviews: 147, badge: 'popular',
    descAr: 'سيروم إيكلاريا المتخصص لمحيط العين بالكافيين وحمض الهيالورونيك. يقلل الهالات السوداء والانتفاخات ويرطب البشرة الرقيقة بعمق.',
    descFr: 'Sérum Éclarya pour le contour des yeux à la Caféine et à l\'Acide Hyaluronique. Réduit les cernes, les poches et hydrate en profondeur.',
    ingredients: ['Caffeine 2%', 'Hyaluronic Acid', 'Peptides', 'Aloe Vera Bio', 'Vitamin K'],
    how_to_useAr: 'ضعي كمية صغيرة برفق حول العين صباحاً ومساءً على بشرة نظيفة.',
    how_to_useFr: 'Appliquez délicatement autour de l\'œil matin et soir sur peau propre.',
    bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', new: false, outOfStock: false,
    fullDescAr: `سيروم Éclarya لمحيط العين هو تركيبة خفيفة وسريعة الامتصاص صُممت خصيصًا للعناية بالمنطقة الحساسة حول العينين. يجمع بين قوة الكافيين وحمض الهيالورونيك ومجموعة من المستخلصات النباتية المهدئة والمرطبة للمساعدة على تقليل مظهر الانتفاخات والهالات السوداء والخطوط الدقيقة.\n\nيمنح هذا السيروم ترطيبًا عميقًا وانتعاشًا فوريًا لمحيط العين، مما يساعد على استعادة إشراقة ونضارة النظرة للحصول على مظهر أكثر حيوية وشبابًا.`,
    fullDescFr: `Le sérum Éclarya pour le contour des yeux est une formule légère et à absorption rapide, spécialement conçue pour prendre soin de la zone sensible autour des yeux. Il combine la puissance de la caféine et de l'acide hyaluronique avec des extraits végétaux apaisants pour aider à réduire les poches, les cernes et les ridules.\n\nCe sérum offre une hydratation intense et une sensation de fraîcheur immédiate autour des yeux.`,
    benefitsAr: [
      'يساعد على تقليل مظهر الهالات السوداء',
      'يخفف من انتفاخات وأكياس تحت العين',
      'يرطب البشرة بعمق ويمنع الجفاف',
      'يساعد على تنعيم الخطوط الدقيقة وعلامات التعب',
      'يمنح محيط العين مظهرًا أكثر إشراقًا وحيوية',
      'سريع الامتصاص وغير دهني — مناسب لجميع أنواع البشرة',
    ],
    benefitsFr: [
      'Aide à réduire l\'apparence des cernes',
      'Atténue les poches et gonflements sous les yeux',
      'Hydrate intensément et prévient la déshydratation',
      'Lisse les ridules et signes de fatigue',
      'Illumine et revitalise le regard',
      'Absorption rapide, texture non grasse — tous types de peau',
    ],
    fullIngredientsAr: [
      'Hyaluronic Acid — حمض الهيالورونيك: يجذب الرطوبة للبشرة ويمنحها ترطيبًا مكثفًا',
      'Caffeine — الكافيين: ينشط محيط العين ويقلل الانتفاخات والهالات',
      'Rosa Damascena Flower Water — ماء الورد الدمشقي: يهدئ البشرة وينعشها',
      'Chamomilla Recutita Flower Water — ماء البابونج: مهدئ للبشرة الحساسة',
      'Aloe Barbadensis Leaf Juice — جل الألوفيرا: يرطب البشرة ويهدئها',
      'Niacinamide — النياسيناميد: يحسن لون البشرة ويمنحها إشراقة',
      'Panthenol — البانثينول: يرطب البشرة ويعزز نعومتها',
      'Cucumber Extract — مستخلص الخيار: يهدئ ويمنح إحساسًا بالانتعاش',
      'Camellia Sinensis Extract — مستخلص الشاي الأخضر: غني بمضادات الأكسدة',
      'Algae Extract — مستخلص الطحالب البحرية: يرطب ويحافظ على الصحة',
    ],
    stepsAr: [
      'نظف وجفف منطقة محيط العين جيدًا.',
      'ضع كمية صغيرة من السيروم حول العين.',
      'ربّت بلطف بأطراف الأصابع حتى يتم امتصاص المنتج بالكامل.',
      'يستخدم صباحًا ومساءً ضمن روتين العناية اليومي.',
    ],
    stepsFr: [
      'Nettoyez et séchez délicatement la zone autour des yeux.',
      'Appliquez une petite quantité de sérum autour des yeux.',
      'Tapotez doucement du bout des doigts jusqu\'à absorption complète.',
      'Utilisez matin et soir dans votre routine quotidienne.',
    ],
    tipAr: 'للحصول على أفضل النتائج، يُنصح بالاستمرار على الاستخدام اليومي المنتظم.',
    tipFr: 'Pour de meilleurs résultats, il est conseillé de maintenir une utilisation quotidienne régulière.',
    productInfoAr: { type: 'سيروم لمحيط العين', use: 'منطقة حول العين', color: 'شفاف', texture: 'سائل لزج خفيف', size: '30 مل', shelf: '24 شهرًا قبل الفتح / 6 أشهر بعد الفتح' },
    storageAr: [
      'للاستعمال الخارجي فقط.',
      'تجنب ملامسة المنتج للعين مباشرة.',
      'يُحفظ بعيدًا عن متناول الأطفال.',
      'يُحفظ في مكان جاف بعيدًا عن الحرارة وأشعة الشمس المباشرة.',
      'يُغلق بإحكام بعد كل استخدام.',
    ],
  },
  {
    id: 3,
    nameAr: 'الباقة الكاملة — الكريم + السيروم', nameFr: 'Pack Complet — Crème + Sérum',
    cat: 'set', catAr: 'مجموعات', catFr: 'Sets',
    price: 250, oldPrice: 338,
    img: 'assets/images/eclarya-products.jpg',
    emoji: '✨', rating: 5.0, reviews: 89, badge: 'sale',
    descAr: 'الباقة الكاملة من إيكلاريا: كريم AHA لتفتيح البشرة + سيروم محيط العين بالكافيين. روتين عناية متكامل بسعر استثنائي.',
    descFr: 'Pack complet Éclarya : Crème AHA Éclaircissante + Sérum Contour des Yeux. Routine complète à prix exceptionnel.',
    ingredients: ['AHA Complex', 'Caffeine', 'Hyaluronic Acid', 'Peptides', 'Niacinamide', 'Vitamin C'],
    how_to_useAr: 'صباحاً: سيروم العيون. مساءً: تنظيف ثم الكريم المضيء ثم سيروم العيون.',
    how_to_useFr: 'Matin : sérum yeux. Soir : nettoyage puis crème éclaircissante puis sérum yeux.',
    bg: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)', new: false, outOfStock: false,
    fullDescAr: `الباقة الكاملة من Éclarya تضم منتجَين مكمّلَين لبعضهما:\n\n🌿 كريم Éclarya AHA: يفتح البشرة ويوحد لونها بأحماض الفواكه الطبيعية، يقشر بلطف ويمنح إشراقة وترطيبًا عميقًا. 50 مل.\n\n💧 سيروم Éclarya لمحيط العين: تركيبة خفيفة بالكافيين وحمض الهيالورونيك تقلل الهالات والانتفاخات وتمنح محيط العين نضارة فورية. 30 مل.\n\nاحصلي على روتين عناية متكامل بسعر استثنائي ووفري 88 درهم مقارنةً بشراء المنتجَين منفردَين.`,
    fullDescFr: `Le Pack Complet Éclarya réunit deux produits complémentaires :\n\n🌿 Crème Éclarya AHA : éclaire et unifie le teint grâce aux AHA naturels, exfolie en douceur et hydrate en profondeur. 50 ml.\n\n💧 Sérum Éclarya Contour des Yeux : formule légère à la Caféine et à l'Acide Hyaluronique pour réduire les cernes, les poches et raviver le regard. 30 ml.\n\nProfitez d'une routine beauté complète à un tarif exceptionnel et économisez 88 DH.`,
    benefitsAr: [
      'يوحد لون البشرة ويقلل التصبغات والبقع الداكنة (الكريم)',
      'يقلل مظهر الهالات السوداء والانتفاخات حول العين (السيروم)',
      'يرطب البشرة والمنطقة حول العين ترطيبًا عميقًا',
      'يقشر بلطف ويمنح إشراقة طبيعية يومية',
      'روتين عناية متكامل صباحًا ومساءً',
      'توفير 88 درهم مقارنةً بشراء المنتجَين منفردَين',
    ],
    benefitsFr: [
      'Unifie le teint et réduit les taches (Crème)',
      'Réduit les cernes et les poches (Sérum)',
      'Hydrate intensément la peau et le contour des yeux',
      'Exfolie en douceur pour un éclat naturel',
      'Routine complète matin et soir',
      'Économie de 88 DH par rapport à l\'achat séparé',
    ],
    fullIngredientsAr: [
      '— كريم AHA —',
      'AHA Complex (Glycolic + Lactic Acid) — أحماض الفواكه',
      'Niacinamide 5% — النياسيناميد',
      'Vitamin C — فيتامين سي',
      'Centella Asiatica — مستخلص الستيلا الآسيوية',
      'Shea Butter — زبدة الشيا',
      '— سيروم محيط العين —',
      'Caffeine — الكافيين',
      'Hyaluronic Acid — حمض الهيالورونيك',
      'Niacinamide — النياسيناميد',
      'Rosa Damascena Flower Water — ماء الورد الدمشقي',
      'Aloe Barbadensis Leaf Juice — جل الألوفيرا',
      'Panthenol — البانثينول',
      'Cucumber Extract — مستخلص الخيار',
      'Camellia Sinensis Extract — مستخلص الشاي الأخضر',
    ],
    stepsAr: [
      'صباحًا: ضعي سيروم محيط العين بلطف حول العينين بأطراف الأصابع.',
      'مساءً: نظفي الوجه جيدًا، ثم ضعي كريم AHA بحركات دائرية على الوجه والرقبة.',
      'أتمي الروتين بسيروم محيط العين مرة أخرى مساءً.',
      'استخدمي يوميًا للحصول على أفضل النتائج.',
    ],
    stepsFr: [
      'Matin : appliquez le sérum yeux délicatement autour des yeux du bout des doigts.',
      'Soir : nettoyez le visage, puis appliquez la crème AHA en mouvements circulaires.',
      'Terminez la routine en appliquant à nouveau le sérum yeux le soir.',
      'Utilisez quotidiennement pour de meilleurs résultats.',
    ],
    tipAr: 'يُنصح باستخدام واقي شمس خلال النهار عند استعمال كريم AHA للحفاظ على نتائج التفتيح وحماية البشرة.',
    tipFr: 'Il est conseillé d\'utiliser une protection solaire le jour lors de l\'utilisation de la crème AHA.',
    productInfoAr: { type: 'باقة عناية متكاملة', use: 'الوجه والرقبة ومحيط العين', color: 'متعدد', texture: 'كريم + سيروم', size: '50 مل + 30 مل', shelf: '24 شهرًا قبل الفتح / 6 أشهر بعد الفتح' },
    storageAr: [
      'للاستعمال الخارجي فقط.',
      'يُحفظ بعيدًا عن الحرارة والرطوبة.',
      'يُحفظ بعيدًا عن متناول الأطفال.',
      'تجنب ملامسة السيروم للعين مباشرة.',
    ],
  },
  {
    id: 4,
    nameAr: 'سيروم فيتامين سي المضيء', nameFr: 'Sérum Vitamine C Éclat',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 189, oldPrice: null,
    img: uimg('1620916566398-39f1143ab7be'),
    emoji: '✨', rating: 4.8, reviews: 128, badge: null,
    descAr: 'سيروم مركز بفيتامين سي النقي 20% لبشرة أكثر إشراقاً.',
    descFr: 'Sérum concentré en Vitamine C pure 20% pour une peau plus lumineuse.',
    ingredients: ['Vitamine C 20%', 'Niacinamide', 'Hyaluronic Acid'],
    how_to_useAr: '', how_to_useFr: '',
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)', new: false, outOfStock: true
  },
  {
    id: 5,
    nameAr: 'واقي الشمس Natural SPF50+', nameFr: 'Protection Solaire SPF50+',
    cat: 'sun', catAr: 'واقي الشمس', catFr: 'Solaire',
    price: 145, oldPrice: null,
    img: uimg('1508739773434-c26b3d09e071'),
    emoji: '☀️', rating: 4.8, reviews: 143, badge: null,
    descAr: 'واقي شمس طبيعي خفيف SPF50+.',
    descFr: 'Protection solaire naturelle légère SPF50+.',
    ingredients: ['Zinc Oxide', 'Titanium Dioxide'],
    how_to_useAr: '', how_to_useFr: '',
    bg: 'linear-gradient(135deg,#fff8e1,#ffecb3)', new: false, outOfStock: true
  },
  {
    id: 6,
    nameAr: 'مرطب الشفاه بالأرغان', nameFr: 'Baume Lèvres à l\'Argan',
    cat: 'lips', catAr: 'شفاه', catFr: 'Lèvres',
    price: 55, oldPrice: null,
    img: uimg('1625093742435-6fa192b6fb10'),
    emoji: '💋', rating: 4.7, reviews: 76, badge: null,
    descAr: 'بلسم شفاه طبيعي 100% بزيت الأرغان.',
    descFr: 'Baume lèvres 100% naturel à l\'huile d\'Argan.',
    ingredients: ['Argan Oil', 'Shea Butter'],
    how_to_useAr: '', how_to_useFr: '',
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd9)', new: false, outOfStock: true
  },
  {
    id: 7,
    nameAr: 'ماسك الطين المنقي', nameFr: 'Masque à l\'Argile Purifiante',
    cat: 'mask', catAr: 'أقنعة', catFr: 'Masques',
    price: 99, oldPrice: null,
    img: uimg('1616394584738-fc6e612e71b9'),
    emoji: '🌿', rating: 4.7, reviews: 94, badge: null,
    descAr: 'قناع الطين الأخضر المنقي.',
    descFr: 'Masque à l\'argile verte purifiante.',
    ingredients: ['Kaolin Clay', 'Green Clay', 'Tea Tree Oil'],
    how_to_useAr: '', how_to_useFr: '',
    bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', new: false, outOfStock: true
  },
  {
    id: 8,
    nameAr: 'زيت الشعر بالأرغان', nameFr: 'Huile Capillaire à l\'Argan',
    cat: 'hair', catAr: 'عناية بالشعر', catFr: 'Soins capillaires',
    price: 129, oldPrice: null,
    img: uimg('1527799820374-dcf8d9d4a388'),
    emoji: '💛', rating: 4.9, reviews: 187, badge: null,
    descAr: 'زيت الأرغان المغربي 100% للشعر.',
    descFr: 'Huile d\'Argan marocaine 100% pure.',
    ingredients: ['Argan Oil 100% Pure', 'Vitamin E'],
    how_to_useAr: '', how_to_useFr: '',
    bg: 'linear-gradient(135deg,#fff8e1,#ffecb3)', new: false, outOfStock: true
  },
];

const CATEGORIES = [
  { id: 'all', nameAr: 'الكل', nameFr: 'Tout' },
  {
    id: 'skincare',
    nameAr: 'عناية بالبشرة', nameFr: 'Soins de peau',
    emoji: '🧴',
    img: uimg('1571781926291-c477ebfd024b', 600, 700),
    color: 'linear-gradient(135deg,#2d4a2d,#0a1a0a)'
  },
  {
    id: 'hair',
    nameAr: 'عناية بالشعر', nameFr: 'Soins capillaires',
    emoji: '💛',
    img: uimg('1608571423539-e951b9b3871e', 600, 700),
    color: 'linear-gradient(135deg,#3d3010,#0a0a00)'
  },
  {
    id: 'mask',
    nameAr: 'أقنعة', nameFr: 'Masques',
    emoji: '🌿',
    img: uimg('1626783416763-67a92e5e7266', 600, 700),
    color: 'linear-gradient(135deg,#1a3020,#0a1a0a)'
  },
  {
    id: 'sun',
    nameAr: 'واقي الشمس', nameFr: 'Solaire',
    emoji: '☀️',
    img: uimg('1594055103006-7871176f1a7e', 600, 700),
    color: 'linear-gradient(135deg,#3d2a00,#1a0a00)'
  },
  {
    id: 'lips',
    nameAr: 'شفاه', nameFr: 'Lèvres',
    emoji: '💋',
    img: uimg('1625093742435-6fa192b6fb10', 600, 700),
    color: 'linear-gradient(135deg,#3d0a1a,#1a0008)'
  },
  {
    id: 'set',
    nameAr: 'مجموعات', nameFr: 'Sets',
    emoji: '🎁',
    img: uimg('1598440947619-2c35fc9aa908', 600, 700),
    color: 'linear-gradient(135deg,#1a1a2e,#0a0a14)'
  },
];

const TESTIMONIALS = [
  { initials: 'ف', nameAr: 'فاطمة الزهراء', nameFr: 'Fatima Zahra', locationAr: 'الرباط، المغرب', locationFr: 'Rabat, Maroc', rating: 5, textAr: 'منتجات إكلاريا غيرت بشرتي تماماً! السيروم بالفيتامين سي أذهل الجميع، بشرتي أصبحت مشرقة جداً خلال أسبوعين فقط.', textFr: 'Les produits ECLARYA ont complètement transformé ma peau ! Le sérum à la Vitamine C a époustouflé tout le monde.' },
  { initials: 'م', nameAr: 'مريم أيت علي', nameFr: 'Meryem Ait Ali', locationAr: 'طنجة، المغرب', locationFr: 'Tanger, Maroc', rating: 5, textAr: 'زيت الأرغان من إكلاريا هو الأفضل الذي جربته على الإطلاق. شعري أصبح أكثر لمعاناً وصحة. أنصح به بشدة!', textFr: 'L\'huile d\'Argan ECLARYA est la meilleure que j\'aie jamais essayée. Mes cheveux sont bien plus brillants.' },
  { initials: 'ل', nameAr: 'ليلى المسعودي', nameFr: 'Leila Massoudi', locationAr: 'الدار البيضاء، المغرب', locationFr: 'Casablanca, Maroc', rating: 5, textAr: 'الخدمة ممتازة والمنتجات عالية الجودة. وصل الطلب بسرعة كبيرة والتغليف فاخر جداً. سأشتري دائماً من إكلاريا.', textFr: 'Service excellent et produits de haute qualité. Livraison très rapide et emballage luxueux. Je reviendrai toujours.' },
];


const FAQS = [
  { qAr: 'هل منتجات إكلاريا طبيعية 100%؟', qFr: 'Les produits ECLARYA sont-ils 100% naturels ?', aAr: 'نعم، نحن ملتزمون باستخدام أجود المكونات الطبيعية في جميع منتجاتنا. تخضع جميع منتجاتنا لاختبارات صارمة للجودة والسلامة.', aFr: 'Oui, nous nous engageons à utiliser les meilleurs ingrédients naturels dans tous nos produits, soumis à des tests stricts de qualité et de sécurité.' },
  { qAr: 'ما هي مدة التوصيل؟', qFr: 'Quel est le délai de livraison ?', aAr: 'نوصل إلى جميع أنحاء المغرب خلال 24 إلى 72 ساعة من تأكيد الطلب. التوصيل مجاني لجميع الطلبات والدفع عند الاستلام.', aFr: 'Nous livrons partout au Maroc en 24 à 72h après confirmation de commande. Livraison gratuite pour toutes les commandes, paiement à la livraison.' },
  { qAr: 'هل يمكنني إرجاع المنتج إذا لم يناسبني؟', qFr: 'Puis-je retourner un produit s\'il ne me convient pas ?', aAr: 'بالتأكيد! نقبل الإرجاع خلال 14 يوماً من استلام الطلب، شريطة أن يكون المنتج سليماً ولم يُستخدم.', aFr: 'Absolument ! Nous acceptons les retours dans les 14 jours suivant la réception, à condition que le produit soit intact et non utilisé.' },
  { qAr: 'هل منتجاتكم مناسبة للبشرة الحساسة؟', qFr: 'Vos produits conviennent-ils aux peaux sensibles ?', aAr: 'معظم منتجاتنا مناسبة للبشرة الحساسة. كل منتج يحمل معلومات تفصيلية عن مكوناته. ننصح باستشارة خبرائنا عبر واتساب لاختيار المنتج المناسب لنوع بشرتك.', aFr: 'La plupart de nos produits conviennent aux peaux sensibles. Chaque produit contient des informations détaillées sur ses ingrédients. Nous vous recommandons de consulter nos experts via WhatsApp.' },
  { qAr: 'كيف أتواصل معكم؟', qFr: 'Comment vous contacter ?', aAr: 'يمكنك التواصل معنا عبر واتساب على الرقم 0661600929، أو عبر البريد الإلكتروني ouazatnet@gmail.com، أو من خلال نموذج الاتصال على موقعنا.', aFr: 'Vous pouvez nous contacter via WhatsApp au 0661600929, par e-mail à ouazatnet@gmail.com, ou via le formulaire de contact de notre site.' },
  { qAr: 'هل تقدمون استشارات تجميلية؟', qFr: 'Proposez-vous des consultations beauté ?', aAr: 'نعم! نقدم استشارات تجميلية مجانية عبر واتساب أو عن طريق نموذج الحجز على موقعنا. خبراؤنا سيساعدونك في اختيار أفضل المنتجات لاحتياجاتك.', aFr: 'Oui ! Nous proposons des consultations beauté gratuites via WhatsApp ou via le formulaire de réservation sur notre site.' },
];

// ---- DOM Helpers ----
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls, html = '') => { const e = document.createElement(tag); if(cls) e.className = cls; if(html) e.innerHTML = html; return e; };

// ---- Language ----
function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('eclarya-lang', lang);
  document.body.classList.remove('lang-ar', 'lang-fr');
  document.body.classList.add('lang-' + lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderAll();
}

// ---- Cart ----
function saveWishlist() { localStorage.setItem('eclarya-wishlist', JSON.stringify(state.wishlist)); }

function orderNow(productId, qty = 1) {
  const p = PRODUCTS.find(p => p.id === productId);
  if (!p) return;
  state.orderProduct = { product: p, qty };
  navigateTo('checkout');
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) state.wishlist.splice(idx, 1);
  else state.wishlist.push(productId);
  saveWishlist();
}

function closeCart() {}

// ---- Notification ----
function showNotification(msg) {
  const n = $('#notification');
  n.querySelector('.notif-msg').textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}

// ---- Pages ----
const HOME_PAGES = ['home'];
let navHistory = [];

function navigateTo(page, data = null) {
  const prev = state.currentPage;
  if (prev && prev !== page) navHistory.push({ page: prev, data: state.currentProduct });

  state.currentPage = page;
  state.currentProduct = data;
  $$('.page').forEach(p => p.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  window.scrollTo(0, 0);
  closeCart();

  if (page === 'products') renderProductsPage();
  if (page === 'product-detail' && data) renderProductDetail(data);
  if (page === 'checkout') renderCheckout();

  updateBackBtn();
}

function goBack() {
  if (!navHistory.length) return navigateTo('home');
  const prev = navHistory.pop();
  navigateTo(prev.page, prev.data);
  navHistory.pop(); // remove the re-push caused by navigateTo above
  updateBackBtn();
}

function updateBackBtn() {
  const btn = document.getElementById('back-btn');
  if (!btn) return;
  const showBack = navHistory.length > 0 && !HOME_PAGES.includes(state.currentPage);
  btn.style.display = showBack ? 'flex' : 'none';
  const isAr = state.lang === 'ar';
  btn.innerHTML = isAr
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg> رجوع`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> Retour`;
}

window.goBack = goBack;

// ---- Hero Slider ----
let slideIndex = 0;
let slideTimer;

function initSlider() {
  const track = $('#slides-track');
  if (!track) return;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(1), 5500);
  updateSlider();
}

function changeSlide(dir) {
  slideIndex = (slideIndex + dir + 3) % 3;
  updateSlider();
}

function goSlide(i) {
  slideIndex = i;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(1), 5500);
  updateSlider();
}

function updateSlider() {
  const track = $('#slides-track');
  if (!track) return;
  track.style.transform = `translateX(${state.lang === 'ar' ? '' : '-'}${slideIndex * 100}%)`;
  $$('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

// ---- Products Rendering ----
let filterCat = 'all';
let filterSearch = '';
let filterSort = 'popular';

function getFilteredProducts() {
  let products = [...PRODUCTS];
  if (filterCat !== 'all') products = products.filter(p => p.cat === filterCat);
  if (filterSearch) {
    const q = filterSearch.toLowerCase();
    products = products.filter(p =>
      p.nameAr.includes(filterSearch) || p.nameFr.toLowerCase().includes(q)
    );
  }
  if (filterSort === 'price_asc') products.sort((a,b) => a.price - b.price);
  else if (filterSort === 'price_desc') products.sort((a,b) => b.price - a.price);
  else if (filterSort === 'newest') products.sort((a,b) => b.new - a.new);
  return products;
}

function renderProductCard(p, full = false) {
  const name = state.lang === 'ar' ? p.nameAr : p.nameFr;
  const cat = state.lang === 'ar' ? p.catAr : p.catFr;
  const desc = state.lang === 'ar' ? p.descAr : p.descFr;
  const isWishlisted = state.wishlist.includes(p.id);
  const badgeHtml = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'new' ? (state.lang === 'ar' ? 'جديد' : 'Nouveau') : p.badge === 'sale' ? (state.lang === 'ar' ? 'عرض' : 'Promo') : (state.lang === 'ar' ? 'رائج' : 'Populaire')}</span>` : '';
  const starsHtml = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '½' : '');
  const oldPriceHtml = p.oldPrice ? `<span class="price-old">${p.oldPrice} ${t('drh')}</span>` : '';

  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="product-img-placeholder" style="display:none">${p.emoji}</div>`
    : `<div class="product-img-bg" style="background:${p.bg}"></div><div class="product-img-placeholder">${p.emoji}</div>`;

  const freeShip = state.lang === 'ar' ? '✓ توصيل مجاني' : '✓ Livraison gratuite';
  const addCartLabel = state.lang === 'ar' ? '🛒 اطلب الآن' : '🛒 Commander';
  const outOfStockLabel = state.lang === 'ar' ? 'غير متوفر' : 'Indisponible';

  if (p.outOfStock) {
    return `
      <div class="product-card product-card-oos">
        <div class="product-img-wrap">
          ${imgHtml}
          <div class="product-badges">${badgeHtml}</div>
          <div class="oos-overlay"><span class="oos-label">${outOfStockLabel}</span></div>
        </div>
        <div class="product-info">
          <div class="product-cat">${cat}</div>
          <div class="product-name">${name}</div>
          <div class="product-price-row" style="opacity:0.45">
            <div><span class="price-main">${p.price} ${t('drh')}</span></div>
          </div>
          <div class="product-card-actions">
            <button class="btn-card-oos" disabled>${outOfStockLabel}</button>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${imgHtml}
        <div class="product-badges">${badgeHtml}</div>
        <button class="product-wish ${isWishlisted ? 'active' : ''}" onclick="handleWishlist(event,${p.id})">${isWishlisted ? '♥' : '♡'}</button>
      </div>
      <div class="product-info">
        <div class="product-cat">${cat}</div>
        <div class="product-name">${name}</div>
        <div class="product-desc">${desc.substring(0, 70)}...</div>
        <div class="product-rating">
          <span class="stars">${starsHtml}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="price-main price-gold">${p.price} ${t('drh')}</span>
            ${oldPriceHtml}
          </div>
          <span class="free-ship-badge">${freeShip}</span>
        </div>
        <div class="product-card-actions">
          <button class="btn-card-cart" style="flex:1" onclick="(function(e){e.stopPropagation();orderNow(${p.id});})(event)">${addCartLabel}</button>
        </div>
      </div>
    </div>`;
}

function handleWishlist(e, id) {
  e.stopPropagation();
  toggleWishlist(id);
  const btn = e.currentTarget;
  const isNow = state.wishlist.includes(id);
  btn.classList.toggle('active', isNow);
  btn.textContent = isNow ? '♥' : '♡';
}

window.handleWishlist = handleWishlist;

function renderFeaturedProducts() {
  const grid = $('#featured-grid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.id === 1 || p.id === 2 || p.id === 3);
  grid.innerHTML = featured.map(p => renderProductCard(p)).join('');
  addProductCardListeners(grid);
}

function renderProductsPage() {
  const grid = $('#products-grid');
  if (!grid) return;
  const products = getFilteredProducts();
  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  const countEl = $('#results-count');
  if (countEl) countEl.innerHTML = t('results_text').replace('{n}', `<strong>${products.length}</strong>`);
  renderSidebarFilters();
  addProductCardListeners(grid);
}

function addProductCardListeners(container) {
  $$('.product-card', container).forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart') || e.target.closest('.product-wish')) return;
      const id = parseInt(card.dataset.id);
      navigateTo('product-detail', PRODUCTS.find(p => p.id === id));
    });
  });
}

function renderSidebarFilters() {
  const list = $('#sidebar-categories');
  if (!list) return;
  list.innerHTML = CATEGORIES.map(c => {
    const count = c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c.id).length;
    const name = state.lang === 'ar' ? c.nameAr : c.nameFr;
    return `<button class="filter-btn ${filterCat === c.id ? 'active' : ''}" onclick="setCatFilter('${c.id}')">${name} <span class="count">${count}</span></button>`;
  }).join('');
}

window.setCatFilter = function(cat) {
  filterCat = cat;
  renderProductsPage();
};

// ---- Product Detail ----
function renderProductDetail(p) {
  if (!p) return;
  const name = state.lang === 'ar' ? p.nameAr : p.nameFr;
  const cat = state.lang === 'ar' ? p.catAr : p.catFr;
  const desc = state.lang === 'ar' ? p.descAr : p.descFr;
  const howToUse = state.lang === 'ar' ? p.how_to_useAr : p.how_to_useFr;
  const starsHtml = '★'.repeat(Math.floor(p.rating));
  const oldPriceHtml = p.oldPrice ? `<span class="price-old">${p.oldPrice} ${t('drh')}</span>` : '';
  const ingredientsTags = p.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('');

  const container = $('#product-detail-container');
  if (!container) return;

  const mainImgHtml = p.img
    ? `<img src="${p.img}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius);position:relative;z-index:1" onerror="this.outerHTML='<span style=font-size:8rem;position:relative;z-index:1>${p.emoji}</span>'" />`
    : `<div class="main-img-bg" style="background:${p.bg}"></div><span style="font-size:8rem;position:relative;z-index:1">${p.emoji}</span>`;

  const thumbsHtml = p.img
    ? `<div class="thumb active" style="background:${p.bg};padding:4px"><img src="${p.img}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px" /></div>
       <div class="thumb" style="background:${p.bg}">${p.emoji}</div>
       <div class="thumb" style="background:${p.bg}">🌿</div>`
    : [p.emoji, '📦', '🌿'].map((e,i) => `<div class="thumb ${i===0?'active':''}" style="background:${p.bg}">${e}</div>`).join('');

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="main-img">
          ${mainImgHtml}
        </div>
        <div class="thumbs">
          ${thumbsHtml}
        </div>
      </div>
      <div class="product-detail-info">
        <div class="product-cat">${cat}</div>
        <h1>${name}</h1>
        <div class="detail-rating">
          <span class="stars">${starsHtml}</span>
          <span style="color:var(--gold);font-weight:700;margin:0 6px">${p.rating}</span>
          <span class="text-gray">(${p.reviews} ${t('reviews')})</span>
        </div>
        <div class="detail-price">
          <span class="price-main price-gold">${p.price} ${t('drh')}</span>
          ${oldPriceHtml}
          ${p.oldPrice ? `<span class="product-badge badge-sale" style="margin-right:8px">${Math.round((1 - p.price/p.oldPrice)*100)}%</span>` : ''}
        </div>
        <p class="detail-desc">${desc}</p>
        <div class="qty-row">
          <span style="font-weight:600;font-size:0.9rem">${t('qty')}:</span>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
            <span class="qty-num" id="detail-qty">1</span>
            <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-gold btn-lg" style="flex:1" onclick="orderNow(${p.id}, parseInt(document.getElementById('detail-qty').textContent))">🛒 ${state.lang === 'ar' ? 'اطلب الآن' : 'Commander maintenant'}</button>
        </div>
        <div class="product-tabs" style="margin-top:32px">
          <div class="tab-nav">
            <button class="tab-btn active" onclick="openTab('desc',this)">${t('description')}</button>
            <button class="tab-btn" onclick="openTab('ingredients',this)">${t('ingredients')}</button>
            <button class="tab-btn" onclick="openTab('how',this)">${t('how_to_use')}</button>
          </div>
          <div class="tab-content active" id="tab-desc">
            ${(() => {
              const isAr = state.lang === 'ar';
              const fullDesc = isAr ? p.fullDescAr : p.fullDescFr;
              const benefits = isAr ? p.benefitsAr : p.benefitsFr;
              const info = p.productInfoAr;
              const storage = p.storageAr;
              if (!fullDesc) return `<p>${desc}</p>`;
              return `
                <p style="line-height:1.9;margin-bottom:20px">${fullDesc.replace(/\n\n/g,'</p><p style="line-height:1.9;margin-bottom:20px">')}</p>
                ${benefits ? `<div class="detail-benefits">
                  <h4 style="font-size:1rem;font-weight:700;margin-bottom:12px;color:var(--gold)">🌿 ${isAr ? 'فوائد المنتج' : 'Bénéfices'}</h4>
                  <ul class="benefits-list">${benefits.map(b => `<li>✅ ${b}</li>`).join('')}</ul>
                </div>` : ''}
                ${info ? `<div class="detail-info-box">
                  <h4 style="font-size:1rem;font-weight:700;margin-bottom:12px;color:var(--gold)">📦 ${isAr ? 'معلومات المنتج' : 'Infos produit'}</h4>
                  <table class="info-table">
                    <tr><td>${isAr ? 'النوع' : 'Type'}</td><td>${info.type}</td></tr>
                    <tr><td>${isAr ? 'الاستعمال' : 'Usage'}</td><td>${info.use}</td></tr>
                    <tr><td>${isAr ? 'اللون' : 'Couleur'}</td><td>${info.color}</td></tr>
                    <tr><td>${isAr ? 'القوام' : 'Texture'}</td><td>${info.texture}</td></tr>
                    <tr><td>${isAr ? 'السعة' : 'Volume'}</td><td>${info.size}</td></tr>
                    <tr><td>${isAr ? 'الصلاحية' : 'Durée'}</td><td>${info.shelf}</td></tr>
                  </table>
                </div>` : ''}
                ${storage ? `<div class="detail-storage">
                  <h4 style="font-size:1rem;font-weight:700;margin-bottom:10px;color:var(--gold)">⚠️ ${isAr ? 'إرشادات الحفظ' : 'Conservation'}</h4>
                  <ul class="storage-list">${storage.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>` : ''}`;
            })()}
          </div>
          <div class="tab-content" id="tab-ingredients">
            ${(() => {
              const isAr = state.lang === 'ar';
              const full = p.fullIngredientsAr;
              if (!full) return `<div class="ingredients-list">${ingredientsTags}</div>`;
              return `<ul class="full-ingredients-list">${full.map(i => `<li>${i}</li>`).join('')}</ul>`;
            })()}
          </div>
          <div class="tab-content" id="tab-how">
            ${(() => {
              const isAr = state.lang === 'ar';
              const steps = isAr ? p.stepsAr : p.stepsFr;
              const tip = isAr ? p.tipAr : p.tipFr;
              if (!steps) return `<p>${howToUse}</p>`;
              return `
                <ol class="how-steps">${steps.map(s => `<li>${s}</li>`).join('')}</ol>
                ${tip ? `<div class="how-tip">💡 <strong>${isAr ? 'نصيحة:' : 'Conseil :'}</strong> ${tip}</div>` : ''}`;
            })()}
          </div>
        </div>
      </div>
    </div>
    <div class="section-header" style="margin-top:60px"><h3>${t('related_products')}</h3><span class="gold-line"></span></div>
    <div class="products-grid" id="related-grid"></div>`;

  const relatedGrid = $('#related-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(rp => rp.id !== p.id && rp.cat === p.cat).slice(0, 4);
    relatedGrid.innerHTML = (related.length ? related : PRODUCTS.slice(0,4).filter(rp => rp.id !== p.id)).map(rp => renderProductCard(rp)).join('');
    addProductCardListeners(relatedGrid);
  }
}

window.openTab = function(id, btn) {
  $$('.tab-content').forEach(t => t.classList.remove('active'));
  $$('.tab-btn').forEach(b => b.classList.remove('active'));
  const tc = document.getElementById('tab-' + id);
  if (tc) tc.classList.add('active');
  btn.classList.add('active');
};

let detailQty = 1;
window.changeDetailQty = function(d) {
  detailQty = Math.max(1, detailQty + d);
  const el = document.getElementById('detail-qty');
  if (el) el.textContent = detailQty;
};

// ---- Checkout ----
function renderCheckout() {
  const orderItems = $('#order-items');
  if (!orderItems) return;

  const op = state.orderProduct;
  if (!op) { navigateTo('products'); return; }

  const p = op.product;
  const name = state.lang === 'ar' ? p.nameAr : p.nameFr;
  const subtotal = p.price * op.qty;

  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" />`
    : `<span style="font-size:2rem">${p.emoji}</span>`;

  orderItems.innerHTML = `
    <div class="order-item">
      <div class="order-item-img" style="background:${p.bg};overflow:hidden">${imgHtml}</div>
      <div class="order-item-name">${name} × ${op.qty}</div>
      <div class="order-item-price">${subtotal} ${t('drh')}</div>
    </div>`;

  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('checkout-subtotal', subtotal + ' ' + t('drh'));
  set('checkout-total', subtotal + ' ' + t('drh'));

  // Product details below form
  const detailBox = document.getElementById('checkout-product-detail');
  if (!detailBox) return;
  const isAr = state.lang === 'ar';
  const desc = isAr ? (p.fullDescAr || p.descAr) : (p.fullDescFr || p.descFr);
  const benefits = isAr ? p.benefitsAr : p.benefitsFr;
  const ingredients = p.fullIngredientsAr || p.ingredients || [];
  const steps = isAr ? p.stepsAr : p.stepsFr;
  const tip = isAr ? p.tipAr : p.tipFr;

  detailBox.innerHTML = `
    <div class="checkout-detail-section">
      <div class="checkout-detail-img">
        ${p.img ? `<img src="${p.img}" alt="${name}" />` : `<span style="font-size:5rem">${p.emoji}</span>`}
      </div>
      <h3 class="checkout-detail-title">${name}</h3>
      <p class="checkout-detail-desc">${desc ? desc.replace(/\n\n/g,'<br><br>') : ''}</p>
      ${benefits ? `
        <div class="checkout-detail-block">
          <h4>🌿 ${isAr ? 'فوائد المنتج' : 'Bénéfices'}</h4>
          <ul>${benefits.map(b => `<li>✅ ${b}</li>`).join('')}</ul>
        </div>` : ''}
      ${ingredients.length ? `
        <div class="checkout-detail-block">
          <h4>🧪 ${isAr ? 'المكونات' : 'Ingrédients'}</h4>
          <div class="checkout-ingredients">${ingredients.map(i => `<span>${i}</span>`).join('')}</div>
        </div>` : ''}
      ${steps ? `
        <div class="checkout-detail-block">
          <h4>📖 ${isAr ? 'طريقة الاستعمال' : 'Mode d\'emploi'}</h4>
          <ol>${steps.map(s => `<li>${s}</li>`).join('')}</ol>
          ${tip ? `<div class="how-tip" style="margin-top:12px">💡 <strong>${isAr ? 'نصيحة:' : 'Conseil :'}</strong> ${tip}</div>` : ''}
        </div>` : ''}
    </div>`;
}

// ---- Testimonials Slider ----
let testimonialIdx = 0;
let testimonialTimer;

function initTestimonials() {
  renderTestimonials();
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => changeTestimonial(1), 6000);
}

function changeTestimonial(dir) {
  testimonialIdx = (testimonialIdx + dir + TESTIMONIALS.length) % TESTIMONIALS.length;
  const track = $('#testimonials-track');
  if (track) track.style.transform = `translateX(${state.lang === 'ar' ? '' : '-'}${testimonialIdx * 100}%)`;
  $$('.t-dot').forEach((d, i) => d.classList.toggle('active', i === testimonialIdx));
}

function renderTestimonials() {
  const track = $('#testimonials-track');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map(t => {
    const name = state.lang === 'ar' ? t.nameAr : t.nameFr;
    const location = state.lang === 'ar' ? t.locationAr : t.locationFr;
    const text = state.lang === 'ar' ? t.textAr : t.textFr;
    const stars = '★'.repeat(t.rating);
    return `
      <div class="testimonial-card">
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">${text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initials}</div>
          <div class="author-info">
            <div class="name">${name}</div>
            <div class="location">${location}</div>
            <div class="author-stars">${stars}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  const dotsContainer = $('#testimonial-dots');
  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS.map((_, i) =>
      `<div class="t-dot ${i === 0 ? 'active' : ''}" onclick="goTestimonial(${i})"></div>`
    ).join('');
  }
}

window.goTestimonial = function(i) {
  testimonialIdx = i;
  changeTestimonial(0);
};


// ---- Render All (for lang switch) ----
function renderAll() {
  renderNavText();
  renderHero();
  renderFeaturedProducts();
  renderCategories();
  renderFeatures();
  renderTestimonials();
  renderCartItems();
  renderFAQ();
  renderAbout();
  renderFooter();
  renderCTASection();
  renderTrustBar();
  if (state.currentPage === 'products') renderProductsPage();
  if (state.currentPage === 'product-detail' && state.currentProduct) renderProductDetail(state.currentProduct);
  if (state.currentPage === 'checkout') renderCheckout();
  renderContactInfo();
  renderBookingForm();
}

function renderNavText() {
  const keys = ['home','about','products','booking','faq','contact'];
  keys.forEach(k => {
    $$(`[data-nav="${k}"]`).forEach(el => { el.textContent = t('nav_' + k); });
  });
  $$('.cart-label').forEach(el => el.textContent = t('cart_title'));
  const logoTagline = $('.logo-text .tagline');
  if (logoTagline) logoTagline.textContent = t('tagline');
}

function renderHero() {
  for (let i = 1; i <= 3; i++) {
    const badgeEl = $(`.slide-badge-${i}`);
    const titleEl = $(`.slide-title-${i}`);
    const subEl = $(`.slide-sub-${i}`);
    if (badgeEl) badgeEl.textContent = t(`hero${i}_badge`);
    if (titleEl) titleEl.innerHTML = t(`hero${i}_title`);
    if (subEl) subEl.textContent = t(`hero${i}_sub`);
  }
  $$('.btn-shop-now').forEach(b => b.textContent = t('shop_now'));
  $$('.btn-learn-more').forEach(b => b.textContent = t('learn_more'));
  updateSlider();
}

function renderCategories() {
  const grid = $('#categories-grid');
  if (!grid) return;
  const cats = CATEGORIES.filter(c => c.id !== 'all');
  grid.innerHTML = cats.map(c => {
    const count = PRODUCTS.filter(p => p.cat === c.id).length;
    const name = state.lang === 'ar' ? c.nameAr : c.nameFr;
    const bgStyle = c.color || 'linear-gradient(135deg,#1a2e1a,#0a0a0a)';
    return `
      <div class="category-card" onclick="navigateTo('products');setCatFilter('${c.id}')">
        <div class="cat-img-wrap">
          <div class="cat-color-bg" style="background:${bgStyle}"></div>
          ${c.img ? `<img src="${c.img}" alt="${name}"
            class="cat-real-img"
            onerror="this.style.display='none';this.previousElementSibling.style.opacity='1'"
          />` : `<div class="cat-bg">${c.emoji}</div>`}
        </div>
        <div class="cat-overlay"></div>
        <div class="cat-info">
          <h4>${name}</h4>
          <span>${count} ${state.lang === 'ar' ? 'منتج' : 'produits'}</span>
        </div>
      </div>`;
  }).join('');
}

function renderFeatures() {
  $$('#features-title').forEach(el => el.textContent = t('features_title'));
  const icons = ['🌿','🚀','💬','✅'];
  const feats = [1,2,3,4];
  feats.forEach((f, i) => {
    $$(`[data-feat-title="${f}"]`).forEach(el => el.textContent = t(`feat${f}_title`));
    $$(`[data-feat-desc="${f}"]`).forEach(el => el.textContent = t(`feat${f}_desc`));
  });
}

function renderCTASection() {
  const h = $('#cta-title'); if(h) h.textContent = t('cta_title');
  const p = $('#cta-sub'); if(p) p.textContent = t('cta_sub');
  $$('.cta-btn1').forEach(e => e.textContent = t('cta_btn1'));
  $$('.cta-btn2').forEach(e => e.textContent = t('cta_btn2'));
}

function renderTrustBar() {
  [1,2,3,4].forEach(i => {
    $$(`[data-trust="${i}"]`).forEach(el => el.textContent = t(`trust${i}`));
  });
}

function renderFAQ() {
  const container = $('#faq-container');
  if (!container) return;
  container.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" onclick="toggleFAQ(${i})">
        <span>${state.lang === 'ar' ? faq.qAr : faq.qFr}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer"><p>${state.lang === 'ar' ? faq.aAr : faq.aFr}</p></div>
    </div>`).join('');
}

window.toggleFAQ = function(i) {
  const item = document.getElementById('faq-' + i);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  $$('.faq-item').forEach(f => f.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
};

function renderAbout() {
  const statNums = [
    { num: '5000+', labelAr: 'عميلة راضية', labelFr: 'Clientes satisfaites' },
    { num: '50+', labelAr: 'منتج فاخر', labelFr: 'Produits luxe' },
    { num: '4.9', labelAr: 'تقييم متوسط', labelFr: 'Note moyenne' },
    { num: '3', labelAr: 'سنوات خبرة', labelFr: 'Ans d\'expérience' },
  ];
  const statsEl = $('#about-stats');
  if (statsEl) {
    statsEl.innerHTML = statNums.map(s => `
      <div class="stat-card">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${state.lang === 'ar' ? s.labelAr : s.labelFr}</div>
      </div>`).join('');
  }
}

function renderFooter() {
  const keys = ['footer_links','footer_cats','footer_contact','footer_copy'];
  $$('[data-footer-label]').forEach(el => el.textContent = t(el.dataset.footerLabel));
}

function renderContactInfo() {}

function renderBookingForm() {
  const select = $('#consult-type');
  if (!select) return;
  const types = t('consult_types');
  select.innerHTML = types.map(type => `<option value="${type}">${type}</option>`).join('');
}

// ---- Form Submissions ----
function initForms() {
  // Booking
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('✅ ' + t('booking_success'));
      bookingForm.reset();
    });
  }

  // Contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('✅ ' + t('contact_success'));
      contactForm.reset();
    });
  }

}

function submitCheckoutOrder() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input[type=text],input[type=tel]');
  const name    = inputs[0] ? inputs[0].value.trim() : '';
  const phone   = inputs[1] ? inputs[1].value.trim() : '';
  const address = inputs[2] ? inputs[2].value.trim() : '';
  const city    = inputs[3] ? inputs[3].value.trim() : '';

  if (!name || !phone || !address || !city) {
    showNotification('⚠️ ' + (state.lang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Veuillez remplir tous les champs obligatoires'));
    return;
  }

  const notes = (document.getElementById('checkout-notes') || {}).value || '';
  const op = state.orderProduct;
  const pName = op ? (state.lang === 'ar' ? op.product.nameAr : op.product.nameFr) : '';
  const price = op ? op.product.price * op.qty : 0;

  const msgLines = [
    '🛍️ *طلب جديد — ECLARYA*',
    '',
    '👤 *معلومات الزبون:*',
    `• الاسم: ${name}`,
    `• الهاتف: ${phone}`,
    `• العنوان: ${address}`,
    `• المدينة: ${city}`,
  ];
  if (notes) msgLines.push(`• ملاحظات: ${notes}`);
  msgLines.push(
    '',
    '📦 *تفاصيل الطلب:*',
    `• المنتج: ${pName}`,
    `• الكمية: ${op ? op.qty : 1}`,
    `• السعر: ${price} درهم`,
    '',
    '🚚 التوصيل: *مجاني لجميع أنحاء المغرب*',
    '💰 الدفع: *عند الاستلام*',
    `💵 *الإجمالي: ${price} درهم*`,
  );

  const msg = msgLines.join('\n');
  window.location.href = 'https://wa.me/212661600929?text=' + encodeURIComponent(msg);

  setTimeout(() => {
    const orderNum = 'EC-' + Date.now().toString().slice(-6);
    document.getElementById('order-number').textContent = '#' + orderNum;
    document.getElementById('page-checkout').classList.remove('active');
    document.getElementById('page-success').classList.add('active');
    state.orderProduct = null;
  }, 500);
}

// ---- Search ----
function initSearch() {
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterSearch = e.target.value;
      renderProductsPage();
    });
    searchInput.placeholder = t('search_placeholder');
  }
}

// ---- Header Scroll ----
function initScroll() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- Hamburger ----
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    });
  }
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  setLang(state.lang);
  initSlider();
  initScroll();
  initHamburger();
  initForms();
  renderAll();


  // Slideshow init after lang
  setTimeout(initSlider, 100);
});

// Expose globals
window.navigateTo = navigateTo;
window.orderNow = orderNow;
window.closeCart = closeCart;
window.changeSlide = changeSlide;
window.goSlide = goSlide;
window.changeTestimonial = changeTestimonial;
window.setLang = setLang;
window.setCatFilter = setCatFilter;
window.t = t;
