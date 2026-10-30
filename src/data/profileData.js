/**
 * Central configuration and profile data for MONU BRAND
 * Categorized, compressed, and optimized real images.
 */

/**
 * Dynamically resolves asset paths with Vite's BASE_URL.
 * Ensures images resolve correctly on GitHub Pages (/Monu-Brand/), custom domains (/), and local dev.
 */
export const getAssetUrl = (relativePath) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

const img = (filename) => getAssetUrl(`images/${filename}`);

export const profileData = {
  personal: {
    name: "MONU BRAND",
    fullName: "Monu Brand",
    nickname: "Monu Brand",
    brandTitle: "MONU BRAND",
    title: "THE LOCAL LEGEND",
    monogram: "MB",
    tagline: "OUR NAME. OUR STYLE. OUR IDENTITY.",
    taglineHindi: "नाम अपना, अंदाज़ अपना, पहचान अपनी!",
    supportingLine: "No matter the territory… only one name echoes.",
    signatureQuote: "इलाका कोई भी हो… नाम सिर्फ एक ही गूंजेगा — MONU BRAND.",
    signatureAuthor: "— Monu Brand",
    hometown: " Pandeypur Koraon Prayagraj",
    district: "Prayagraj - Mirzapur Region",
    state: "Uttar Pradesh",
    territoryVillages: [
      { hi: "पांडेपुर", en: "Pandeypur" },
      { hi: "बेरी", en: "Beri" },
      { hi: "सलैया", en: "Salaiya" },
      { hi: "बरहुला", en: "Barhula" },
      { hi: "केनवर", en: "Kenwar" },
      { hi: "कठारी", en: "Kathari" },
      { hi: "लक्षणपुर", en: "Lakshmanpur" },
      { hi: "कोरांव", en: "Koraon" },
      { hi: "बरौंधा", en: "Baraundha" },
      { hi: "द्रमंडगंज", en: "Drummondganj" },
      { hi: "गौहानी", en: "Gauhani" }
    ],
    avatar: img("img-2.webp"),
    aboutPortrait: img("img-21.webp"),
    lifestyleHero: img("img-3.webp"),
    festivePortrait: img("img-17.webp"),
  },

  stats: [
    { value: "15+", label: "Saal Ka Vishwas", subtext: "Apni mitti se juda" },
    { value: "11+", label: "Gaon Ka Belt", subtext: "Pandeypur se Drummondganj" },
    { value: "10,000+", label: "Bhai & Samarthak", subtext: "Parivaar se badhkar" },
    { value: "100%", label: "Dil Se Desi", subtext: "Apna andaaz, apni pehchaan" },
  ],

  about: {
    subtitle: "MERI PEHCHAAN",
    title: "Rooted in Ground. Driven by Ambition.",
    headline: "Mitti se juda. Yaaron ka yaar. Lafz ka pakka.",
    storyParagraphs: [
      "Mitti se juda, yaari me sabse aage aur apne asoolon ka pakka.",
      "Desi pehchaan, royal andaaz aur har mod par apno ka saath — yahi hai Monu Brand."
    ],
    pillars: [
      {
        title: "Khaalis Desi Swag",
        description: "Modern elegance, royal desi andaaz.",
        icon: "Crown"
      },
      {
        title: "Khandani Yaari",
        description: "Bhai bol diya toh bol diya — har mod par sath.",
        icon: "Users"
      },
      {
        title: "Mitti Se Judav",
        description: "Zameen se jude, asoolon pe khade.",
        icon: "Sprout"
      },
      {
        title: "Lafz Ki Keemat",
        description: "Zubaan ki keemat sabse upar.",
        icon: "ShieldCheck"
      }
    ]
  },

  brotherhood: {
    subtitle: "YAARON KA YAAR",
    title: "Brotherhood & Loyalty",
    intro: "Bhai bol diya, toh bol diya — baat wahin khatam.",
    featuredQuote: "“Bhai bol diya, toh bol diya — baat wahin khatam.”",
    items: [
      {
        id: "b1",
        title: "The Main Squad & Kafila",
        occasion: "Convoy on Country Roads",
        image: img("img-14.webp"),
        caption: "Bhaiyon ka kafila — jab sab sath hain toh har raah aasan hai.",
        tag: "Squad Kafila",
        year: "2025"
      },
      {
        id: "b2",
        title: "Twilight Riders",
        occasion: "Dusk Ride Convoy",
        image: img("img-20.webp"),
        caption: "Dhalti sham aur yaaron ki bike patrol — UP-70 squad.",
        tag: "Bikes Squad",
        year: "2025"
      },
      {
        id: "b3",
        title: "Night Baithak",
        occasion: "True Companionship",
        image: img("img-11.webp"),
        caption: "Raat ki mehfil, sachhi baatein aur hamesha ka sath.",
        tag: "Daily Ritual",
        year: "2025"
      },
      {
        id: "b4",
        title: "Celebration Night",
        occasion: "Festive Function",
        image: img("img-17.webp"),
        caption: "Pandal me poora kafila sath — har khushi apno ke sang.",
        tag: "Festive",
        year: "2024"
      }
    ]
  },

  hometown: {
    subtitle: "APNI MITTI & ILAAKA",
    title: "Pandeypur Se Drummondganj Tak — Monu Brand",
    description: "Pandeypur, Beri, Salaiya, Barhula, Kenwar, Kathari, Lakshmanpur, Koraon, Baraundha, Drummondganj aur Gauhani.",
    coverImage: img("img-18.webp"),
    details: [
      { label: "Belt", value: "Pandeypur to Drummondganj" },
      { label: "District", value: "Prayagraj - Mirzapur Belt" },
      { label: "Territory", value: "11 Connected Villages" },
      { label: "Identity", value: "Monu Brand • Dil Se Desi" }
    ]
  },

  activities: {
    subtitle: "LOGON KE BEECH",
    title: "Leadership & Seva",
    intro: "Apno ke beech, har zaroorat me aage.",
    items: [
      {
        id: "act-1",
        category: "Community",
        title: "Buzurgon Ka Samman",
        desc: "Gaon-choupal me buzurgon ki salah aur har faisle me apno ke sath khade rehna.",
        image: img("img-9.webp"),
        stats: "Apno Ka Sath",
        badge: "Social Service"
      },
      {
        id: "act-2",
        category: "Sports & Rides",
        title: "Desi Sports & MT-15",
        desc: "Yuva shakti, dangal aur biking ride ko aage badhana.",
        image: img("img-3.webp"),
        stats: "Yuva Josh",
        badge: "Sports & Fitness"
      },
      {
        id: "act-3",
        category: "Culture",
        title: "Tyohar & Parampara",
        desc: "Mela, langar aur sanskritic tyohar sabke sath milkar manana.",
        image: img("img-13.webp"),
        stats: "Shaan & Parampara",
        badge: "Heritage"
      },
      {
        id: "act-4",
        category: "Brotherhood",
        title: "Yuva Margdarshan",
        desc: "Apne ilaaqe ke yuvaon ka sath aur unhe har mod par support karna.",
        image: img("img-10.webp"),
        stats: "Yaari Zindabad",
        badge: "Brotherhood"
      }
    ]
  },

  gallery: {
    subtitle: "MOMENTS & MEMORIES",
    title: "Lifestyle & Moments",
    categories: ["All", "Portraits", "Brotherhood", "Rides & Swag", "Roots & Nature"],
    items: [
      {
        id: "g1",
        title: "Open Road Ride",
        category: ["Rides & Swag", "Roots & Nature"],
        image: img("img-1.webp"),
        caption: "UP-70 rider stance in rural horizons."
      },
      {
        id: "g2",
        title: "Midnight Boston",
        category: "Portraits",
        image: img("img-2.webp"),
        caption: "Midnight portrait with royal smile."
      },
      {
        id: "g3",
        title: "MT-15 Beast",
        category: "Rides & Swag",
        image: img("img-3.webp"),
        caption: "Field trails with the purple MT-15."
      },
      {
        id: "g4",
        title: "Classic Checkered",
        category: "Portraits",
        image: img("img-4.webp"),
        caption: "Sharp shades and effortless swagger."
      },
      {
        id: "g5",
        title: "Stairway Stance",
        category: "Portraits",
        image: img("img-5.webp"),
        caption: "Cool and composed in striped drip."
      },
      {
        id: "g6",
        title: "Desi Baithak",
        category: "Portraits",
        image: img("img-6.webp"),
        caption: "Grounded roots, pure authenticity."
      },
      {
        id: "g7",
        title: "Connected Life",
        category: "Portraits",
        image: img("img-7.webp"),
        caption: "Modern vibe, staying connected."
      },
      {
        id: "g8",
        title: "Pillar of Confidence",
        category: "Portraits",
        image: img("img-8.webp"),
        caption: "Poised and ready for every challenge."
      },
      {
        id: "g9",
        title: "Yaaron Ki Mehfil",
        category: "Brotherhood",
        image: img("img-9.webp"),
        caption: "Brotherhood united at celebration night."
      },
      {
        id: "g10",
        title: "Field Talks",
        category: ["Brotherhood", "Rides & Swag"],
        image: img("img-10.webp"),
        caption: "Laughter and brotherhood by the ride."
      },
      {
        id: "g11",
        title: "Midnight Backlight",
        category: "Brotherhood",
        image: img("img-11.webp"),
        caption: "Loyal brothers under the glow."
      },
      {
        id: "g12",
        title: "Regal White",
        category: "Portraits",
        image: img("img-12.webp"),
        caption: "Classic comfort, royal charisma."
      },
      {
        id: "g13",
        title: "Wedding Smiles",
        category: "Brotherhood",
        image: img("img-13.webp"),
        caption: "Celebrating festive moments together."
      },
      {
        id: "g14",
        title: "Main Squad Convoy",
        category: ["Brotherhood", "Rides & Swag"],
        image: img("img-14.webp"),
        caption: "The entire circle ready on rustic paths."
      },
      {
        id: "g15",
        title: "Grove Ride",
        category: ["Rides & Swag", "Roots & Nature"],
        image: img("img-15.webp"),
        caption: "Country trails under the mango canopy."
      },
      {
        id: "g16",
        title: "Waterfront Cruise",
        category: "Rides & Swag",
        image: img("img-16.webp"),
        caption: "Breeze by the lakeside waters."
      },
      {
        id: "g17",
        title: "Pandal Celebrations",
        category: "Brotherhood",
        image: img("img-17.webp"),
        caption: "Gathering of true brothers and friends."
      },
      {
        id: "g18",
        title: "Dosti Panorama",
        category: ["Brotherhood", "Roots & Nature"],
        image: img("img-18.webp"),
        caption: "30+ brothers lined up with pride."
      },
      {
        id: "g19",
        title: "Terrace Greens",
        category: ["Roots & Nature", "Brotherhood"],
        image: img("img-19.webp"),
        caption: "Overlooking ancestral green fields."
      },
      {
        id: "g20",
        title: "Twilight Riders",
        category: ["Brotherhood", "Rides & Swag"],
        image: img("img-20.webp"),
        caption: "Bikes lined up under twilight skies."
      },
      {
        id: "g21",
        title: "Golden Rim-Light",
        category: "Portraits",
        image: img("img-21.webp"),
        caption: "Editorial profile in cinematic light."
      },
      {
        id: "g22",
        title: "Banquet Brotherhood",
        category: "Brotherhood",
        image: img("img-22.webp"),
        caption: "Warm winter evening celebrations."
      },
      {
        id: "g23",
        title: "River Stream Rocks",
        category: ["Roots & Nature", "Portraits"],
        image: img("img-23.webp"),
        caption: "Standing strong in flowing mountain waters."
      },
      {
        id: "g24",
        title: "Courtyard Stance",
        category: "Portraits",
        image: img("img-24.webp"),
        caption: "Monu Brand — stylish, grounded, original."
      }
    ]
  },

  legacy: {
    tag: "THE FINAL WORD",
    heading: "NAAM APNA, KAHANI APNI.",
    subheading: "Safar jaari hai, kahani abhi baaki hai.",
    quote: "“Mitti se wafa aur yaaron ke liye jaan — yahi hai Monu Brand.”",
    signature: "Monu",
    signatureTitle: "Monu Brand",
    socialLinks: [
      { name: "Instagram", handle: "@mr_brand_9151", url: "https://www.instagram.com/mr_brand_9151/" },
      { name: "WhatsApp", handle: "9151552421", url: "https://wa.me/919151552421" },
      { name: "Facebook", handle: "monu.brand", url: "https://www.facebook.com/monu.brand.780143" },
    ],
    contactInfo: {
      address: "Koraon & Drummondganj Belt, Prayagraj - Mirzapur, Uttar Pradesh"
    }
  }
};
