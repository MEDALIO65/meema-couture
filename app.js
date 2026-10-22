// MEEMA COUTURE — Application Logic & Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons initialization
  if (window.lucide) {
    lucide.createIcons();
  }

  // Collection Haute Couture Marocaine (Shooting Officiel Saloua)
  const products = [
    {
      id: 9,
      title: "Robe de Mariée en Soie Pure 'Céleste'",
      category: "bridal",
      categoryLabel: "Robe de Mariée",
      price: 3900,
      priceFormatted: "Sur Devis (dès 3 900 €)",
      tag: "Collection Mariée 2026",
      image: "assets/bridal/robe_mariee_face_studio.jpg",
      description: "Robe de mariée haute couture en crêpe de soie blanche pure et mousseline impériale. Décolleté cache-cœur, dos nu plongeant orné d'un nœud papillon en ruban de soie et traîne fluide vaporeuse.",
      fabric: "Crêpe de soie lourd & mousseline blanche impériale, fil de soie sabra",
      hours: "120 heures d'atelier couture",
      details: ["Décolleté croisé en V façon cache-cœur", "Dos nu délicat avec nœud drapé en soie", "Tombé fluide avec fente d'allure moderne", "Ajustement millimétré sur-mesure en salon"]
    },
    {
      id: 1,
      title: "Takchita Royale 'Majesté Impériale'",
      category: "bridal",
      categoryLabel: "Takchita de Mariée",
      price: 5200,
      priceFormatted: "5 200 €",
      tag: "Pièce Signature",
      image: "assets/look_1.jpg",
      description: "Takchita de mariée magistrale en 2 pièces : Dfina en dentelle rebrodée de perles fines et Tahtiya en mikado de soie pure. Sfifa or Skalli cartier et boutons Aqqads confectionnés à la main par nos Maâlems.",
      fabric: "Mikado de soie, dentelle perlée, fil d'or Skalli cartier pur",
      hours: "190 heures d'atelier Maâlem",
      details: ["Ceinture Mdamma joaillerie sur-mesure", "Sfifa large tressée au Skalli", "Aqqads fins en fil de soie sabra", "Traîne impériale amovible de 2m"]
    },
    {
      id: 2,
      title: "Caftan d'Apparat 'Éclipse Noire'",
      category: "evening",
      categoryLabel: "Caftan de Soirée",
      price: 3400,
      priceFormatted: "3 400 €",
      tag: "Édition Limitée",
      image: "assets/dossier/silhouette_fluid.jpg",
      description: "Caftan de gala en crêpe de soie lourd noir profond, sublimé par un plastron brodé au point de Fès et Tarz Rbati au fil d'or, fente centrale bordée de sfifa ouvragée.",
      fabric: "Crêpe de soie georgette lourd, fil d'or Skalli, cristaux fumés",
      hours: "115 heures de broderie main",
      details: ["Broderies Tarz Rbati d'art", "Boutonnage Aqqads de haut en bas", "Doublure en satin de soie", "Finition orfèvre aux poignets"]
    },
    {
      id: 3,
      title: "Takchita Privée 'Émeraude & Or'",
      category: "prive",
      categoryLabel: "Atelier Privé & Sur-Mesure",
      price: 4200,
      priceFormatted: "Sur Devis (dès 4 200 €)",
      tag: "Sur-Mesure Pur",
      image: "assets/look_3.jpg",
      description: "Takchita d'exception en velours de soie impérial (Moubroua) vert émeraude et mousseline dorée. Plastron entièrement perlé à la main de cristaux et pierreries fines.",
      fabric: "Velours de soie Moubroua, mousseline de soie, cristaux de Bohême",
      hours: "160 heures d'artisanat",
      details: ["Velours de soie d'apparat", "Baleinage de maintien intérieur", "Ceinture Mdamma ciselée coordonnée", "Ajustement personnalisé en salon"]
    },
    {
      id: 4,
      title: "Caftan Moderne & Kimono 'Aura de Soie'",
      category: "ready-to-wear",
      categoryLabel: "Caftans Modernes & Kimonos",
      price: 1650,
      priceFormatted: "1 650 €",
      tag: "Capsule Ramadan",
      image: "assets/dossier/caftan_minimal.jpg",
      description: "Caftan moderne d'allure contemporaine extrait du 'Minimalist Ramadan Moodboard' en jacquard de soie champagne, manches évasées bordées d'une sfifa fine et ceinture souple ornée d'Aqqads délicats.",
      fabric: "Jacquard de soie damassée, fil d'or Skalli & sabra",
      hours: "50 heures de confection",
      details: ["Ceinture coordonnée amovible", "Coupe fluide contemporaine", "Porté fermé en caftan ou ouvert en kimono"]
    },
    {
      id: 5,
      title: "Takchita Blanche 'Noces de Nacre'",
      category: "bridal",
      categoryLabel: "Takchita de Mariée",
      price: 5800,
      priceFormatted: "5 800 €",
      tag: "Nouveauté Mariée 2026",
      image: "assets/look_5.jpg",
      description: "L'apogée de la mariée marocaine : Takchita double pièce en mousseline de soie virginale et tulle rebrodé de perles d'eau douce. Sfifa fine en fil d'argent et or blanc.",
      fabric: "Mousseline de soie pure, tulles perlés, perles de culture",
      hours: "240 heures de perlage main",
      details: ["Perlage à l'aiguille haute précision", "Ceinture Mdamma or blanc & perles", "Dfina fluide transparente", "Traîne de cérémonie bordée de sfifa"]
    },
    {
      id: 6,
      title: "Selham d'Atelier & Ensemble Ivoire",
      category: "prive",
      categoryLabel: "Atelier Privé & Sur-Mesure",
      price: 2800,
      priceFormatted: "2 800 €",
      tag: "Couture Fusion",
      image: "assets/look_6.jpg",
      description: "Selham traditionnel marocain réinterprété en cape d'apparat structurée en crêpe de laine et soie ivoire, porté sur un pantalon tailleur fluide aux finitions Maâlem.",
      fabric: "Crêpe de laine fine & soie ivoire, sfifa ton-sur-ton",
      hours: "85 heures d'atelier",
      details: ["Coupe cape Selham moderne", "Broderies discrètes sur le capuchon", "Finitions à la main façon tailleur"]
    },
    {
      id: 7,
      title: "Caftan Traditionnel d'Apparat 'Brocart & Tarz Ntaa'",
      category: "caftan",
      categoryLabel: "Caftan Traditionnel d'Art",
      price: 2800,
      priceFormatted: "2 800 €",
      tag: "Couture Traditionnelle Marocaine",
      image: "assets/look_7.jpg",
      description: "Caftan d'apparat d'exception confectionné dans la plus pure tradition impériale marocaine : brocart de soie pure de Fès, broderies Tarz Ntaa au fil d'or Skalli pur, sfifa ouvragée et boutons aqqads façonnés à la main par nos Maâlems.",
      fabric: "Brocart de soie de Fès, fil d'or Skalli cartier pur, satin de soie",
      hours: "110 heures d'atelier Maâlem",
      details: ["Broderies Tarz Ntaa au fil d'or Skalli", "Sfifa fassie tressée à la main", "Boutonnage Aqqads en soie sabra", "Finition orfèvre aux poignets"]
    },
    {
      id: 8,
      title: "Caftan Mousseline & Plumes 'Sahara Night'",
      category: "evening",
      categoryLabel: "Caftan de Soirée",
      price: 3900,
      priceFormatted: "3 900 €",
      tag: "Gala & Cérémonie",
      image: "assets/dossier/ramadan_capsule_1.jpg",
      description: "Caftan du soir sculptural en mousseline de soie dégradée, bordé de plumes soyeuses et brodé de motifs Zouak ancestraux revisités avec des cristaux étincelants.",
      fabric: "Mousseline de soie 100%, plumes d'autruche, cristaux",
      hours: "125 heures de travail d'art",
      details: ["Zouak contemporain au fil d'or", "Plissé soleil artisanal", "Ceinture souple bijou incluse"]
    }
  ];

  // Instagram Feed Data (Shooting Officiel Saloua & Coulisses de l'Atelier)
  const instaPosts = [
    {
      id: 1,
      image: "assets/insta_1.jpg",
      caption: "L'art du Maâlem : plus de 190 heures de précision pour le tressage de la sfifa et des aqqads de notre Takchita Royale. #meemacouture #caftanmariage #moroccancouture",
      likes: "1,820",
      comments: "74",
      type: "Artisanat Maâlem"
    },
    {
      id: 2,
      image: "assets/insta_2.jpg",
      caption: "Caftan veste en denim et broderies Tarz or pur : quand le savoir-faire marocain rencontre la silhouette urbaine moderne. #caftanmoderne #denimcouture",
      likes: "2,490",
      comments: "98",
      type: "Couture Moderne"
    },
    {
      id: 3,
      image: "assets/insta_3.jpg",
      caption: "Mabrouk à notre sublime mariée dans sa Takchita blanche brodée sur-mesure pour son mariage royal. #moroccanbride #takchita #mariee",
      likes: "4,150",
      comments: "186",
      type: "Mariée Royale"
    },
    {
      id: 4,
      image: "assets/insta_4.jpg",
      caption: "Séance d'essayage privé à l'atelier de Casablanca : ajustement de la ceinture Mdamma et tombé impérial. #ateliercasablanca #surmesure",
      likes: "2,090",
      comments: "81",
      type: "Atelier Privé"
    },
    {
      id: 5,
      image: "assets/insta_5.jpg",
      caption: "L'élégance du caftan kimono en soie damassée sous la douce lumière dorée. #meemacouture #caftan #kimonoluxury",
      likes: "2,760",
      comments: "112",
      type: "Collection Capsule"
    },
    {
      id: 6,
      image: "assets/insta_6.jpg",
      caption: "Soirée de prestige : le Caftan d'apparat noir brodé d'or Skalli, une présence inoubliable sur le tapis rouge. #caftandapparat #galamorocco",
      likes: "3,480",
      comments: "134",
      type: "Caftan de Gala"
    }
  ];

  // State Management
  let cart = JSON.parse(localStorage.getItem('meema_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('meema_wishlist') || '[]');

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const instaGrid = document.getElementById('instagram-posts-grid');
  const quickviewModal = document.getElementById('quickview-modal');
  const modalContent = document.getElementById('modal-content');
  const closeQuickview = document.getElementById('close-quickview');
  const cartDrawer = document.getElementById('cart-drawer');
  const bagBtn = document.getElementById('bag-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const emptyCartMsg = document.getElementById('empty-cart-msg');
  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistCount = document.getElementById('wishlist-count');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const consultationForm = document.getElementById('consultation-form');
  const newsletterForm = document.getElementById('newsletter-form');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  // Sticky Navbar scroll effect
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Language Switcher Logic (FR / EN / AR)
  let currentLang = localStorage.getItem('meema_lang') || 'fr';
  let currentCategory = 'all';

  function applyLanguage(lang) {
    if (!window.MEEMA_TRANSLATIONS || !window.MEEMA_TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('meema_lang', lang);

    const isRtl = (lang === 'ar');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update active state on all language buttons
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active-lang', 'bg-brand-onyx', 'text-brand-cream');
        btn.classList.remove('text-brand-charcoal');
      } else {
        btn.classList.remove('active-lang', 'bg-brand-onyx', 'text-brand-cream');
        btn.classList.add('text-brand-charcoal');
      }
    });

    const t = window.MEEMA_TRANSLATIONS[lang];

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Update data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    // Update general WhatsApp links according to language
    let msg = "Bonjour Maison MEEMA Couture, je souhaite réserver un rendez-vous d'essayage privé.";
    if (lang === 'en') {
      msg = "Hello Maison MEEMA Couture, I would like to book a private fitting appointment.";
    } else if (lang === 'ar') {
      msg = "مرحباً دار ميما كوتور، أود حجز موعد لجلسة قياس خاصة.";
    }
    const encoded = encodeURIComponent(msg);
    document.querySelectorAll('a[href*="wa.me/212694900339"]').forEach(a => {
      if (!a.getAttribute('data-product-wa')) {
        a.href = `https://wa.me/212694900339?text=${encoded}`;
      }
    });

    renderProducts(currentCategory);

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Bind click on language buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switch-btn');
    if (btn) {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        applyLanguage(targetLang);
        showToast(targetLang === 'ar' ? 'تم تفعيل اللغة العربية' : (targetLang === 'en' ? 'English language activated' : 'Langue française activée'));
      }
    }
  });

  // Render Products
  function renderProducts(category = currentCategory) {
    currentCategory = category;
    productsGrid.innerHTML = '';
    const filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);

    const t = window.MEEMA_TRANSLATIONS ? window.MEEMA_TRANSLATIONS[currentLang] : null;
    const quickviewText = (t && t.card_quickview) ? t.card_quickview : 'Aperçu Rapide';

    filtered.forEach(p => {
      const isWishlisted = wishlist.includes(p.id);

      let displayTag = p.tag;
      let displayCategory = p.categoryLabel;
      let displayTitle = p.title;

      if (p.id === 9) {
      if (currentLang === 'en') {
        modalTitle = "Pure Silk Bridal Gown 'Céleste'";
        modalCategory = "Bridal Gown";
        modalDesc = "Haute couture bridal gown in pure white silk crepe and imperial chiffon. Wrap V-neckline, plunging open back with a flowing silk bow and airy train.";
      } else if (currentLang === 'ar') {
        modalTitle = "فستان الزفاف الحريري 'سيليست'";
        modalCategory = "فستان زفاف كوتور";
        modalDesc = "فستان زفاف راقٍ من كريب الحرير الصافي والشيفون الإمبراطوري. تصميم كاش-كور أنيق، ظهر مكشوف برقة مع فيونكة حريرية وذيل منساب بخفة.";
      }
    }

    if (p.id === 7) {
        if (currentLang === 'en') {
          displayTag = "Traditional Moroccan Couture";
          displayCategory = "Traditional Artisanal Caftan";
          displayTitle = "Ceremonial Caftan 'Fez Brocade & Tarz Ntaa'";
        } else if (currentLang === 'ar') {
          displayTag = "أصالة القفطان المغربي";
          displayCategory = "قفطان تقليدي أصيل";
          displayTitle = "قفطان النطع الفاسي وبروكار الحرير";
        }
      }

      const card = document.createElement('div');
      card.className = 'product-card group flex flex-col bg-white border border-brand-sand/60 hover:shadow-xl transition-all duration-500 overflow-hidden';
      card.innerHTML = `
        <div class="image-wrapper relative h-96 overflow-hidden bg-brand-sand/20">
          <img src="${p.image}" alt="${displayTitle}" class="w-full h-full object-cover object-top">
          <span class="absolute top-3 left-3 bg-brand-onyx/85 text-brand-gold text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 backdrop-blur-xs">
            ${displayTag}
          </span>
          <button 
            data-wishlist-id="${p.id}" 
            class="wishlist-toggle absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-onyx flex items-center justify-center transition-colors shadow-sm"
            title="Ajouter aux favoris"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}"></i>
          </button>
          <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              data-quickview-id="${p.id}" 
              class="quickview-trigger flex-1 py-2 bg-white text-brand-onyx text-[10px] uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-white transition-colors"
            >
              ${quickviewText}
            </button>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] uppercase tracking-widest text-brand-gold font-medium block mb-1">
              ${displayCategory}
            </span>
            <h4 class="font-serif text-lg text-brand-onyx group-hover:text-brand-gold transition-colors font-normal">
              ${displayTitle}
            </h4>
            <p class="text-xs text-brand-muted line-clamp-2 mt-1.5 font-light">
              ${p.description}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-brand-sand/40 flex items-center justify-between">
            <span class="text-xs font-serif font-medium text-brand-onyx tracking-wider">
              ${p.priceFormatted}
            </span>
            <button 
              data-add-cart-id="${p.id}" 
              class="add-to-cart-btn text-[10px] uppercase tracking-widest font-semibold text-brand-onyx hover:text-brand-gold transition-colors flex items-center gap-1.5"
            >
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Sélectionner
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Filter Buttons Click
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active-filter', 'bg-brand-onyx', 'text-brand-cream');
        b.classList.add('text-brand-muted');
      });
      btn.classList.add('active-filter');
      btn.classList.remove('text-brand-muted');
      const cat = btn.getAttribute('data-filter');
      renderProducts(cat);
    });
  });

  // Render Instagram Grid
  function renderInstagramFeed() {
    instaGrid.innerHTML = '';
    instaPosts.forEach(post => {
      const el = document.createElement('div');
      el.className = 'insta-post-card group relative aspect-square overflow-hidden bg-brand-sand/30 shadow-sm cursor-pointer';
      el.innerHTML = `
        <img src="${post.image}" alt="${post.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        <div class="insta-overlay absolute inset-0 bg-brand-onyx/75 opacity-0 flex flex-col justify-between p-4 text-white text-xs">
          <div class="flex items-center justify-between">
            <span class="text-[9px] uppercase tracking-widest text-brand-gold font-semibold">${post.type}</span>
            <i data-lucide="instagram" class="w-3.5 h-3.5 text-brand-gold"></i>
          </div>
          <p class="text-[11px] line-clamp-3 font-light text-brand-parchment leading-snug">
            ${post.caption}
          </p>
          <div class="flex items-center space-x-3 text-[11px] font-medium text-brand-sand">
            <span class="flex items-center gap-1"><i data-lucide="heart" class="w-3 h-3 text-red-400"></i> ${post.likes}</span>
            <span class="flex items-center gap-1"><i data-lucide="message-circle" class="w-3 h-3"></i> ${post.comments}</span>
          </div>
        </div>
      `;
      el.addEventListener('click', () => {
        window.open('https://www.instagram.com/meema.couture', '_blank');
      });
      instaGrid.appendChild(el);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Open Quick View Modal
  function openQuickview(productId) {
    const p = products.find(item => item.id === productId);
    if (!p) return;

    let labelFabrics = "Matières :";
    let labelHours = "Temps d'Atelier :";
    let labelFeatures = "Particularités Couture :";
    let btnWaText = "Prendre RDV pour cette pièce sur WhatsApp";
    let btnFormText = "Remplir le Formulaire Privé";
    let waMsg = `Bonjour Maison MEEMA Couture, je souhaite réserver un rendez-vous d'essayage pour la création "${p.title}" (${p.categoryLabel}).`;

    if (currentLang === 'en') {
      labelFabrics = "Fabrics:";
      labelHours = "Atelier Craftsmanship Time:";
      labelFeatures = "Couture Details:";
      btnWaText = "Book Fitting for this Piece on WhatsApp";
      btnFormText = "Fill Private Consultation Form";
      waMsg = `Hello Maison MEEMA Couture, I would like to book a private fitting for the creation "${p.title}".`;
    } else if (currentLang === 'ar') {
      labelFabrics = "الأقمشة الفاخرة:";
      labelHours = "ساعات العمل بالورشة:";
      labelFeatures = "تفاصيل الحرفية:";
      btnWaText = "حجز موعد لهذه القطعة عبر واتساب";
      btnFormText = "تعبئة استمارة الحجز الخاصة";
      waMsg = `مرحباً دار ميما كوتور، أود حجز موعد لجلسة قياس للتصميم "${p.title}".`;
    }

    let modalTitle = p.title;
    let modalDesc = p.description;
    let modalCategory = p.categoryLabel;

    if (p.id === 9) {
      if (currentLang === 'en') {
        modalTitle = "Pure Silk Bridal Gown 'Céleste'";
        modalCategory = "Bridal Gown";
        modalDesc = "Haute couture bridal gown in pure white silk crepe and imperial chiffon. Wrap V-neckline, plunging open back with a flowing silk bow and airy train.";
      } else if (currentLang === 'ar') {
        modalTitle = "فستان الزفاف الحريري 'سيليست'";
        modalCategory = "فستان زفاف كوتور";
        modalDesc = "فستان زفاف راقٍ من كريب الحرير الصافي والشيفون الإمبراطوري. تصميم كاش-كور أنيق، ظهر مكشوف برقة مع فيونكة حريرية وذيل منساب بخفة.";
      }
    }

    if (p.id === 7) {
      if (currentLang === 'en') {
        modalTitle = "Ceremonial Caftan 'Fez Brocade & Tarz Ntaa'";
        modalCategory = "Traditional Artisanal Caftan";
        modalDesc = "Exceptional ceremonial caftan handcrafted in the purest Moroccan imperial tradition: fine Fez silk brocade adorned with pure Skalli gold Tarz Ntaa embroidery, handmade sfifa, and artisanal aqqad buttons.";
      } else if (currentLang === 'ar') {
        modalTitle = "قفطان النطع الفاسي وبروكار الحرير";
        modalCategory = "قفطان تقليدي أصيل";
        modalDesc = "قفطان مغربي فاخر مصنوع في أبهى صور التقاليد الإمبراطورية: بروكار الحرير الفاسي الأصيل، مطرز بخيوط الصقلي الحر وفق فن طرز النطع التاريخي، مع سفيفة فاسية وعقاد حريرية متقنة.";
      }
    }

    modalContent.innerHTML = `
      <div class="h-96 md:h-full bg-brand-sand/20 relative">
        <img src="${p.image}" alt="${modalTitle}" class="w-full h-full object-cover object-top">
      </div>
      <div class="p-8 md:p-10 flex flex-col justify-between">
        <div>
          <span class="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-1">
            ${modalCategory}
          </span>
          <h3 class="font-serif text-3xl font-light text-brand-onyx mb-2">${modalTitle}</h3>
          <p class="font-serif text-2xl text-brand-goldDark mb-6">${p.priceFormatted}</p>
          
          <p class="text-brand-muted text-sm leading-relaxed mb-6 font-light">
            ${modalDesc}
          </p>

          <div class="space-y-3 border-t border-brand-sand/60 pt-4 mb-6">
            <div class="text-xs">
              <span class="font-semibold text-brand-charcoal uppercase tracking-wider">${labelFabrics}</span>
              <span class="text-brand-muted ml-1">${p.fabric}</span>
            </div>
            <div class="text-xs">
              <span class="font-semibold text-brand-charcoal uppercase tracking-wider">${labelHours}</span>
              <span class="text-brand-muted ml-1">${p.hours}</span>
            </div>
          </div>

          <div class="space-y-1.5 mb-6">
            <span class="text-xs font-semibold text-brand-charcoal uppercase tracking-wider block">${labelFeatures}</span>
            <ul class="text-xs text-brand-muted space-y-1">
              ${p.details.map(d => `<li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-brand-gold"></i> ${d}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="space-y-2.5 pt-4 border-t border-brand-sand/60">
          <a 
            href="https://wa.me/212694900339?text=${encodeURIComponent(waMsg)}"
            target="_blank"
            data-product-wa="true"
            class="w-full py-3.5 bg-[#BDA885] hover:bg-[#a69270] text-[#1E1102] transition-all duration-300 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i> ${btnWaText}
          </a>
          <a 
            href="#rendez-vous" 
            onclick="document.getElementById('quickview-modal').classList.add('hidden'); document.getElementById('quickview-modal').classList.remove('flex');"
            class="block text-center py-2.5 border border-brand-charcoal text-brand-charcoal hover:bg-brand-onyx hover:text-white transition-colors text-xs uppercase tracking-widest font-medium"
          >
            ${btnFormText}
          </a>
        </div>
      </div>
    `;

    quickviewModal.classList.remove('hidden');
    quickviewModal.classList.add('flex');

    if (window.lucide) {
      lucide.createIcons();
    }

    // Modal Add Button Event
    const modalAddBtn = modalContent.querySelector('[data-modal-add]');
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        addToCart(p.id);
        quickviewModal.classList.add('hidden');
        quickviewModal.classList.remove('flex');
      });
    }
  }

  // Close Quick View Modal
  closeQuickview.addEventListener('click', () => {
    quickviewModal.classList.add('hidden');
    quickviewModal.classList.remove('flex');
  });

  quickviewModal.addEventListener('click', (e) => {
    if (e.target === quickviewModal) {
      quickviewModal.classList.add('hidden');
      quickviewModal.classList.remove('flex');
    }
  });

  // Cart & Drawer Logic
  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (totalCount > 0) {
      cartCount.textContent = totalCount;
      cartCount.classList.remove('hidden');
    } else {
      cartCount.classList.add('hidden');
    }

    // Update Drawer Items
    if (cart.length === 0) {
      emptyCartMsg.classList.remove('hidden');
      cartItemsContainer.innerHTML = '';
      cartItemsContainer.appendChild(emptyCartMsg);
      cartSubtotal.textContent = '0,00 €';
    } else {
      emptyCartMsg.classList.add('hidden');
      cartItemsContainer.innerHTML = '';

      let subtotal = 0;
      cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (!prod) return;

        subtotal += prod.price * item.qty;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'flex gap-4 p-3 bg-white border border-brand-sand/60';
        cartItemEl.innerHTML = `
          <img src="${prod.image}" alt="${prod.title}" class="w-16 h-20 object-cover object-top">
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h5 class="font-serif text-sm text-brand-onyx font-medium">${prod.title}</h5>
              <span class="text-[10px] text-brand-gold uppercase tracking-wider block">${prod.categoryLabel}</span>
              <span class="text-xs font-medium text-brand-charcoal">${prod.priceFormatted}</span>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs text-brand-muted">Qté: ${item.qty}</span>
              <button data-remove-id="${prod.id}" class="text-[10px] uppercase tracking-wider text-red-500 hover:text-red-700 transition-colors">
                Retirer
              </button>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
      });

      cartSubtotal.textContent = subtotal.toLocaleString('fr-FR') + ' €';

      // Attach remove events
      cartItemsContainer.querySelectorAll('[data-remove-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-remove-id'));
          removeFromCart(id);
        });
      });
    }

    localStorage.setItem('meema_cart', JSON.stringify(cart));
  }

  function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    updateCartUI();
    showToast("Pièce ajoutée à votre sélection d'atelier.");
    openCartDrawer();
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast("Pièce retirée de votre sélection.");
  }

  function openCartDrawer() {
    cartDrawer.classList.remove('translate-x-full');
  }

  function closeCartDrawer() {
    cartDrawer.classList.add('translate-x-full');
  }

  bagBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);

  // Wishlist Logic
  function updateWishlistUI() {
    if (wishlist.length > 0) {
      wishlistCount.textContent = wishlist.length;
      wishlistCount.classList.remove('hidden');
    } else {
      wishlistCount.classList.add('hidden');
    }
    localStorage.setItem('meema_wishlist', JSON.stringify(wishlist));
  }

  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast("Retiré de vos favoris.");
    } else {
      wishlist.push(productId);
      showToast("Ajouté à vos favoris couture.");
    }
    updateWishlistUI();
    renderProducts();
  }

  // Delegated clicks for product grid
  productsGrid.addEventListener('click', (e) => {
    const quickviewBtn = e.target.closest('.quickview-trigger');
    if (quickviewBtn) {
      const id = parseInt(quickviewBtn.getAttribute('data-quickview-id'));
      openQuickview(id);
      return;
    }

    const addCartBtn = e.target.closest('.add-to-cart-btn');
    if (addCartBtn) {
      const id = parseInt(addCartBtn.getAttribute('data-add-cart-id'));
      addToCart(id);
      return;
    }

    const wishlistToggle = e.target.closest('.wishlist-toggle');
    if (wishlistToggle) {
      const id = parseInt(wishlistToggle.getAttribute('data-wishlist-id'));
      toggleWishlist(id);
      return;
    }
  });

  // Wishlist Navbar Button Click: filter by wishlist or alert
  wishlistBtn.addEventListener('click', () => {
    if (wishlist.length === 0) {
      showToast("Votre liste de favoris est vide pour le moment.");
    } else {
      showToast(`Vous avez ${wishlist.length} pièce(s) dans vos favoris.`);
    }
  });

  // Drawer Request Quote Button
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast("Veuillez d'abord sélectionner des pièces.");
        return;
      }
      closeCartDrawer();
      const consultSection = document.getElementById('rendez-vous');
      if (consultSection) consultSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Consultation Form Submission
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = currentLang === 'ar' 
        ? "تم إرسال طلب الموعد بنجاح! سيتواصل معكم فريقنا خلال 24 ساعة." 
        : (currentLang === 'en' 
          ? "Appointment request successfully submitted! We will respond within 24 hours." 
          : "Demande de rendez-vous transmise avec succès ! Nous vous répondrons sous 24h.");
      showToast(successMsg);
      consultationForm.reset();
    });
  }

  // Newsletter Form Submission (if present)
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Merci pour votre inscription au Cercle Privé MEEMA.");
      newsletterForm.reset();
    });
  }

  // Toast Notification System
  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3800);
  }

  // Initializations
  applyLanguage(currentLang);
  renderInstagramFeed();
  if (cartCount) updateCartUI();
  if (wishlistCount) updateWishlistUI();
});
