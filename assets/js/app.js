/* ============================================
   ECLARYA - Main JavaScript
   ============================================ */

'use strict';

// ---- State ----
const state = {
  lang: localStorage.getItem('eclarya-lang') || 'ar',
  cart: JSON.parse(localStorage.getItem('eclarya-cart') || '[]'),
  currentPage: 'home',
  wishlist: JSON.parse(localStorage.getItem('eclarya-wishlist') || '[]'),
  currentProduct: null,
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
    trust1: 'شحن مجاني فوق 300 درهم',
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
    trust1: 'Livraison gratuite +300 DH',
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
    nameAr: 'سيروم كونتور العيون', nameFr: 'Sérum Contour des Yeux',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 199, oldPrice: 250,
    img: 'assets/images/eclarya-serum.jpg',
    imgFallback: uimg('1556228720-195a672e8a03'),
    emoji: '💧', rating: 4.9, reviews: 147, badge: 'popular',
    descAr: 'سيروم إيكلاريا المتخصص لمنطقة حول العيون بمكونات طبيعية فعّالة. يقلل من الهالات السوداء والانتفاخات ويرطب البشرة الرقيقة حول العيون بعمق.',
    descFr: 'Sérum Éclarya spécialement formulé pour le contour des yeux avec des ingrédients naturels actifs. Réduit les cernes, les poches et hydrate en profondeur.',
    ingredients: ['Hyaluronic Acid 2%', 'Peptides', 'Caffeine', 'Aloe Vera Bio', 'Vitamin K'],
    how_to_useAr: 'ضعي كمية صغيرة على إصبعك وضعيها برفق حول العين صباحاً ومساءً على بشرة نظيفة.',
    how_to_useFr: 'Appliquez une petite quantité avec le bout du doigt délicatement autour de l\'œil matin et soir sur peau propre.',
    bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', new: true
  },
  {
    id: 2,
    nameAr: 'كريم مضيء AHA', nameFr: 'Crème Éclaircissante AHA',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 179, oldPrice: 220,
    img: 'assets/images/eclarya-creme.jpg',
    imgFallback: uimg('1570194065650-d99fb4b8ccb0'),
    emoji: '🌿', rating: 4.9, reviews: 203, badge: 'popular',
    descAr: 'كريم إيكلاريا المضيء بأحماض AHA الطبيعية — يضيء البشرة ويوحد لونها ويقشر بلطف لبشرة مشرقة وصحية. 50ml.',
    descFr: 'La crème éclaircissante Éclarya aux AHA naturels — éclaire le teint, unifie la carnation et exfolie en douceur pour une peau lumineuse. 50ml.',
    ingredients: ['AHA Complex (Glycolic + Lactic)', 'Niacinamide 5%', 'Vitamin C', 'Centella Asiatica', 'Shea Butter'],
    how_to_useAr: 'ضعي طبقة رقيقة على الوجه المنظف كل مساء. ابدئي بمرة واحدة أسبوعياً ثم زيدي التدريجياً.',
    how_to_useFr: 'Appliquez une fine couche sur le visage nettoyé chaque soir. Commencez par une fois par semaine puis augmentez progressivement.',
    bg: 'linear-gradient(135deg,#f1f8e9,#dcedc8)', new: false
  },
  {
    id: 3,
    nameAr: 'مجموعة إيكلاريا الكاملة', nameFr: 'Set Éclarya Complet',
    cat: 'set', catAr: 'مجموعات', catFr: 'Sets',
    price: 349, oldPrice: 470,
    img: 'assets/images/eclarya-set.jpg',
    imgFallback: uimg('1571781926291-c477ebfd024b'),
    emoji: '✨', rating: 5.0, reviews: 89, badge: 'sale',
    descAr: 'المجموعة الكاملة من إيكلاريا تضم: سيروم كونتور العيون + كريم مضيء AHA. روتين عناية متكامل لبشرة مضيئة وشابة.',
    descFr: 'Le set complet Éclarya comprend : Sérum Contour des Yeux + Crème Éclaircissante AHA. Routine complète pour une peau lumineuse et jeune.',
    ingredients: ['AHA Complex', 'Hyaluronic Acid', 'Peptides', 'Niacinamide', 'Vitamin C'],
    how_to_useAr: 'صباحاً: سيروم العيون + واقي الشمس. مساءً: تنظيف ثم الكريم المضيء ثم سيروم العيون.',
    how_to_useFr: 'Matin : sérum yeux + protection solaire. Soir : nettoyage puis crème éclaircissante puis sérum yeux.',
    bg: 'linear-gradient(135deg,#e8f5e9,#a5d6a7)', new: false
  },
  {
    id: 4,
    nameAr: 'سيروم فيتامين سي المضيء', nameFr: 'Sérum Vitamine C Éclat',
    cat: 'skincare', catAr: 'عناية بالبشرة', catFr: 'Soins de peau',
    price: 189, oldPrice: null,
    img: uimg('1620916566398-39f1143ab7be'),
    emoji: '✨', rating: 4.8, reviews: 128, badge: 'new',
    descAr: 'سيروم مركز بفيتامين سي النقي 20% لبشرة أكثر إشراقاً وشباباً. يقلل من البقع الداكنة ويوحد لون البشرة.',
    descFr: 'Sérum concentré en Vitamine C pure 20% pour une peau plus lumineuse. Réduit les taches sombres.',
    ingredients: ['Vitamine C 20%', 'Niacinamide', 'Hyaluronic Acid', 'Rose Hip Oil'],
    how_to_useAr: 'ضعي 3-4 قطرات على بشرة نظيفة كل صباح قبل الترطيب.',
    how_to_useFr: 'Appliquez 3-4 gouttes sur une peau propre chaque matin avant l\'hydratant.',
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)', new: true
  },
  {
    id: 5,
    nameAr: 'واقي الشمس Natural SPF50+', nameFr: 'Protection Solaire Natural SPF50+',
    cat: 'sun', catAr: 'واقي الشمس', catFr: 'Solaire',
    price: 145, oldPrice: 180,
    img: uimg('1508739773434-c26b3d09e071'),
    emoji: '☀️', rating: 4.8, reviews: 143, badge: null,
    descAr: 'واقي شمس طبيعي خفيف بلا أثر أبيض يحمي بشرتك من الأشعة الضارة مع ترطيب فائق.',
    descFr: 'Protection solaire naturelle légère sans résidu blanc pour une peau protégée et hydratée.',
    ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Hyaluronic Acid', 'Niacinamide'],
    how_to_useAr: 'ضعي كمية كافية على الوجه قبل 15 دقيقة من التعرض للشمس.',
    how_to_useFr: 'Appliquez sur le visage 15 min avant l\'exposition au soleil.',
    bg: 'linear-gradient(135deg,#fff8e1,#ffecb3)', new: false
  },
  {
    id: 6,
    nameAr: 'مرطب الشفاه بالأرغان', nameFr: 'Baume Lèvres à l\'Argan',
    cat: 'lips', catAr: 'شفاه', catFr: 'Lèvres',
    price: 55, oldPrice: null,
    img: uimg('1586495777744-4e6232bf2c85'),
    emoji: '💋', rating: 4.7, reviews: 76, badge: null,
    descAr: 'بلسم شفاه طبيعي 100% بزيت الأرغان والشيا لشفاه ناعمة ومرطبة طوال اليوم.',
    descFr: 'Baume lèvres 100% naturel à l\'huile d\'Argan et au Beurre de Karité pour des lèvres douces.',
    ingredients: ['Argan Oil', 'Shea Butter', 'Beeswax', 'Vitamin E'],
    how_to_useAr: 'ضعي على الشفاه عند الحاجة طوال اليوم.',
    how_to_useFr: 'Appliquez sur les lèvres autant de fois que nécessaire.',
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd9)', new: false
  },
  {
    id: 7,
    nameAr: 'ماسك الطين المنقي', nameFr: 'Masque à l\'Argile Purifiante',
    cat: 'mask', catAr: 'أقنعة', catFr: 'Masques',
    price: 99, oldPrice: 130,
    img: uimg('1616394584738-fc6e612e71b9'),
    emoji: '🌿', rating: 4.7, reviews: 94, badge: 'sale',
    descAr: 'قناع الطين الأخضر المنقي يمتص الزيوت الزائدة ويزيل الشوائب لبشرة نظيفة ومتوازنة وناعمة.',
    descFr: 'Masque à l\'argile verte absorbant les excès de sébum pour une peau purifiée, équilibrée et douce.',
    ingredients: ['Kaolin Clay', 'Green Clay', 'Tea Tree Oil', 'Aloe Vera Bio', 'Zinc'],
    how_to_useAr: 'ضعي طبقة متساوية على الوجه النظيف واتركيها 10-15 دقيقة ثم اشطفي بالماء الدافئ.',
    how_to_useFr: 'Appliquez une couche uniforme sur le visage propre, laissez 10-15 min puis rincez à l\'eau tiède.',
    bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', new: false
  },
  {
    id: 8,
    nameAr: 'زيت الشعر بالأرغان', nameFr: 'Huile Capillaire à l\'Argan',
    cat: 'hair', catAr: 'عناية بالشعر', catFr: 'Soins capillaires',
    price: 129, oldPrice: 160,
    img: uimg('1527799820374-dcf8d9d4a388'),
    emoji: '💛', rating: 4.9, reviews: 187, badge: 'popular',
    descAr: 'زيت الأرغان المغربي الأصيل 100% لشعر لامع وصحي وناعم. يرطب ويحمي ويمنع التقصف.',
    descFr: 'Huile d\'Argan marocaine 100% pure pour des cheveux brillants, sains et doux. Hydrate, protège et prévient la casse.',
    ingredients: ['Argan Oil 100% Pure', 'Vitamin E', 'Omega 6', 'Omega 9'],
    how_to_useAr: 'ضعي بضع قطرات على الشعر الرطب أو الجاف من الأطراف إلى المنتصف.',
    how_to_useFr: 'Appliquez quelques gouttes sur cheveux humides ou secs des pointes vers le milieu.',
    bg: 'linear-gradient(135deg,#fff8e1,#ffecb3)', new: false
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

const LIVE_ORDERS = [
  { nameAr: 'سارة من الدار البيضاء', nameFr: 'Sara de Casablanca', productAr: 'سيروم فيتامين سي', productFr: 'Sérum Vitamine C', emoji: '✨', time: '2 min' },
  { nameAr: 'نور من الرباط', nameFr: 'Nour de Rabat', productAr: 'كريم الورد الفاخر', productFr: 'Crème Rose Luxe', emoji: '🌹', time: '5 min' },
  { nameAr: 'هند من مراكش', nameFr: 'Hind de Marrakech', productAr: 'زيت الأرغان الملكي', productFr: 'Huile Argan Royale', emoji: '💛', time: '8 min' },
  { nameAr: 'رانيا من فاس', nameFr: 'Rania de Fès', productAr: 'مجموعة العناية الليلية', productFr: 'Set Soins de Nuit', emoji: '🌙', time: '12 min' },
];

const FAQS = [
  { qAr: 'هل منتجات إكلاريا طبيعية 100%؟', qFr: 'Les produits ECLARYA sont-ils 100% naturels ?', aAr: 'نعم، نحن ملتزمون باستخدام أجود المكونات الطبيعية في جميع منتجاتنا. تخضع جميع منتجاتنا لاختبارات صارمة للجودة والسلامة.', aFr: 'Oui, nous nous engageons à utiliser les meilleurs ingrédients naturels dans tous nos produits, soumis à des tests stricts de qualité et de sécurité.' },
  { qAr: 'ما هي مدة التوصيل؟', qFr: 'Quel est le délai de livraison ?', aAr: 'نوصل إلى جميع أنحاء المغرب خلال 24 إلى 72 ساعة من تأكيد الطلب. الشحن مجاني للطلبات فوق 300 درهم.', aFr: 'Nous livrons partout au Maroc en 24 à 72h après confirmation de commande. Livraison gratuite pour les commandes supérieures à 300 DH.' },
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
function saveCart() { localStorage.setItem('eclarya-cart', JSON.stringify(state.cart)); }
function saveWishlist() { localStorage.setItem('eclarya-wishlist', JSON.stringify(state.wishlist)); }

function updateCartCount() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  $$('.cart-count').forEach(el => { el.textContent = total; el.style.display = total ? 'flex' : 'none'; });
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else state.cart.push({ id: productId, qty });
  saveCart();
  updateCartCount();
  showNotification('🛒 ' + t('add_success'));
  renderCartItems();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartItems();
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) state.wishlist.splice(idx, 1);
  else state.wishlist.push(productId);
  saveWishlist();
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCartItems() {
  const container = $('#cart-items');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>${t('cart_empty')}</p>
        <p class="text-gray">${t('cart_empty_sub')}</p>
      </div>`;
    updateCartSummary();
    return;
  }

  container.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return '';
    const name = state.lang === 'ar' ? p.nameAr : p.nameFr;
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="background:${p.bg}">${p.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-price">${p.price} ${t('drh')}</div>
          <div class="cart-item-controls">
            <div class="cart-qty-btn" onclick="updateCartQty(${p.id}, -1)">−</div>
            <span class="cart-qty-num">${item.qty}</span>
            <div class="cart-qty-btn" onclick="updateCartQty(${p.id}, 1)">+</div>
            <div class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">✕</div>
          </div>
        </div>
      </div>`;
  }).join('');
  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal >= 300 ? 0 : 30;
  const total = subtotal + shipping;
  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('cart-subtotal', subtotal + ' ' + t('drh'));
  set('cart-shipping', shipping === 0 ? t('free') : shipping + ' ' + t('drh'));
  set('cart-total', total + ' ' + t('drh'));
  set('checkout-subtotal', subtotal + ' ' + t('drh'));
  set('checkout-shipping', shipping === 0 ? t('free') : shipping + ' ' + t('drh'));
  set('checkout-total', total + ' ' + t('drh'));
}

function openCart() {
  renderCartItems();
  $('#cart-overlay').classList.add('open');
  $('#cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cart-overlay').classList.remove('open');
  $('#cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- Notification ----
function showNotification(msg) {
  const n = $('#notification');
  n.querySelector('.notif-msg').textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}

// ---- Pages ----
function navigateTo(page, data = null) {
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
}

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
  const addCartLabel = state.lang === 'ar' ? '+ أضف للسلة' : '+ Ajouter';
  const detailLabel = state.lang === 'ar' ? 'عرض التفاصيل' : 'Voir détails';

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
          <button class="btn-card-detail" onclick="(function(e){e.stopPropagation();navigateTo('product-detail',PRODUCTS.find(x=>x.id===${p.id}));})(event)">${detailLabel}</button>
          <button class="btn-card-cart add-to-cart" onclick="addToCart(${p.id})">${addCartLabel}</button>
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
  const featured = PRODUCTS.filter(p => p.badge === 'popular' || p.badge === 'new').slice(0, 4);
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
          <button class="btn btn-gold btn-lg" onclick="addToCart(${p.id}, parseInt($('#detail-qty').textContent))">🛒 ${t('add_to_cart_full')}</button>
          <a href="https://wa.me/212661600929?text=${encodeURIComponent((state.lang === 'ar' ? 'أريد طلب: ' : 'Je veux commander: ') + name)}" target="_blank" class="btn btn-whatsapp btn-lg">💬 ${t('whatsapp_order')}</a>
        </div>
        <div class="product-tabs" style="margin-top:32px">
          <div class="tab-nav">
            <button class="tab-btn active" onclick="openTab('desc',this)">${t('description')}</button>
            <button class="tab-btn" onclick="openTab('ingredients',this)">${t('ingredients')}</button>
            <button class="tab-btn" onclick="openTab('how',this)">${t('how_to_use')}</button>
          </div>
          <div class="tab-content active" id="tab-desc"><p>${desc}</p></div>
          <div class="tab-content" id="tab-ingredients"><div class="ingredients-list">${ingredientsTags}</div></div>
          <div class="tab-content" id="tab-how"><p>${howToUse}</p></div>
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

  if (state.cart.length === 0) {
    navigateTo('products');
    return;
  }

  orderItems.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(p => p.id === item.id);
    if (!p) return '';
    const name = state.lang === 'ar' ? p.nameAr : p.nameFr;
    return `
      <div class="order-item">
        <div class="order-item-img" style="background:${p.bg}">${p.emoji}</div>
        <div class="order-item-name">${name} × ${item.qty}</div>
        <div class="order-item-price">${p.price * item.qty} ${t('drh')}</div>
      </div>`;
  }).join('');
  updateCartSummary();
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

// ---- Live Orders ----
let liveOrderIdx = 0;
function showLiveOrder() {
  const popup = document.getElementById('live-order-popup');
  if (!popup) return;
  const order = LIVE_ORDERS[liveOrderIdx % LIVE_ORDERS.length];
  const name = state.lang === 'ar' ? order.nameAr : order.nameFr;
  const product = state.lang === 'ar' ? order.productAr : order.productFr;
  popup.querySelector('.live-order-icon').textContent = order.emoji;
  popup.querySelector('.live-order-name').textContent = name;
  popup.querySelector('.live-order-product').textContent = product;
  popup.querySelector('.live-order-time').textContent = state.lang === 'ar' ? `منذ ${order.time}` : `il y a ${order.time}`;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 4000);
  liveOrderIdx++;
}

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
  updateCartCount();
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

  // Checkout
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderNum = 'EC-' + Date.now().toString().slice(-6);
      document.getElementById('order-number').textContent = '#' + orderNum;
      document.getElementById('page-checkout').classList.remove('active');
      document.getElementById('page-success').classList.add('active');
      state.cart = [];
      saveCart();
      updateCartCount();
    });
  }
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
  updateCartCount();

  // Cart overlay close
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCart);

  // Live orders rotation
  setTimeout(showLiveOrder, 3000);
  setInterval(showLiveOrder, 9000);

  // Slideshow init after lang
  setTimeout(initSlider, 100);
});

// Expose globals
window.navigateTo = navigateTo;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.openCart = openCart;
window.closeCart = closeCart;
window.changeSlide = changeSlide;
window.goSlide = goSlide;
window.changeTestimonial = changeTestimonial;
window.setLang = setLang;
window.setCatFilter = setCatFilter;
window.t = t;
