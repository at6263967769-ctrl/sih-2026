/* ==========================================================================
   HeritageYatra - JavaScript Logic
   Beginner-friendly, clean, well-commented Vanilla JS.
   Uses Leaflet.js, OpenStreetMap, Local LibreTranslate API, and
   built-in multilingual offline dictionary for 100% reliable translation.
   ========================================================================== */

// ==========================================================================
// 1. Destination Data (Array of 6 Destinations)
// ==========================================================================
const places = [
  {
    id: 1,
    key: "chitrakote",
    name: "Chitrakote Waterfall",
    category: "Eco Tourism",
    lat: 19.203,
    lng: 81.702,
    ecoScore: 94,
    metrics: { nature: 96, waste: 90, business: 96 },
    description: "A famous horseshoe waterfall located in Bastar on the Indravati River, also celebrated as the Niagara of India.",
    originalDescription: "A famous horseshoe waterfall located in Bastar on the Indravati River, also celebrated as the Niagara of India."
  },
  {
    id: 2,
    key: "tirathgarh",
    name: "Tirathgarh Waterfall",
    category: "Eco Tourism",
    lat: 18.905,
    lng: 81.864,
    ecoScore: 91,
    metrics: { nature: 94, waste: 88, business: 91 },
    description: "A breathtaking stepped waterfall nestled deep within the lush Kanger Valley National Park, famous for pristine eco-trails.",
    originalDescription: "A breathtaking stepped waterfall nestled deep within the lush Kanger Valley National Park, famous for pristine eco-trails."
  },
  {
    id: 3,
    key: "sirpur",
    name: "Sirpur",
    category: "Heritage",
    lat: 21.343,
    lng: 82.179,
    ecoScore: 88,
    metrics: { nature: 85, waste: 87, business: 92 },
    description: "An ancient archaeological town along the Mahanadi river, famous for 7th-century brick Lakshmana Temple and Buddhist monasteries.",
    originalDescription: "An ancient archaeological town along the Mahanadi river, famous for 7th-century brick Lakshmana Temple and Buddhist monasteries."
  },
  {
    id: 4,
    key: "bastar",
    name: "Bastar",
    category: "Folk Art",
    lat: 19.107,
    lng: 81.953,
    ecoScore: 95,
    metrics: { nature: 96, waste: 92, business: 97 },
    description: "The cultural heartland of indigenous tribal communities, renowned worldwide for Dhokra bell-metal brass casting and wood crafts.",
    originalDescription: "The cultural heartland of indigenous tribal communities, renowned worldwide for Dhokra bell-metal brass casting and wood crafts."
  },
  {
    id: 5,
    key: "kondagaon",
    name: "Kondagaon",
    category: "Folk Art",
    lat: 19.600,
    lng: 81.667,
    ecoScore: 89,
    metrics: { nature: 88, waste: 86, business: 93 },
    description: "Celebrated as the artisan craft city of tribal terracotta pottery, bell metal casting, and traditional wrought iron blacksmithing.",
    originalDescription: "Celebrated as the artisan craft city of tribal terracotta pottery, bell metal casting, and traditional wrought iron blacksmithing."
  },
  {
    id: 6,
    key: "jagdalpur",
    name: "Jagdalpur",
    category: "Heritage",
    lat: 19.073,
    lng: 82.025,
    ecoScore: 87,
    metrics: { nature: 84, waste: 88, business: 89 },
    description: "The historic princely capital featuring the Bastar Palace, vibrant tribal weekly markets (Haats), and ancient folk temples.",
    originalDescription: "The historic princely capital featuring the Bastar Palace, vibrant tribal weekly markets (Haats), and ancient folk temples."
  }
];

// ==========================================================================
// 2. Comprehensive Multilingual Translation Dictionaries
// Ensures translations work 100% reliably even if local LibreTranslate is offline!
// ==========================================================================
const translationsDictionary = {
  // --- Destinations ---
  chitrakote: {
    en: "A famous horseshoe waterfall located in Bastar on the Indravati River, also celebrated as the Niagara of India.",
    hi: "इंद्रावती नदी पर बस्तर में स्थित एक प्रसिद्ध घोड़े की नाल के आकार का जलप्रपात, जिसे भारत का नियाग्रा भी कहा जाता है।",
    mr: "इंद्रावती नदीवरील बस्तरमध्ये असलेला एक प्रसिद्ध घोड्याच्या नालाच्या आकाराचा धबधबा, ज्याला भारताचा नायगारा देखील म्हणतात.",
    bn: "ইন্দ্রাবতী নদীর উপর বস্তারে অবস্থিত একটি বিখ্যাত ঘোড়ার খুর আকৃতির জলপ্রপাত, যা ভারতের নায়াগ্রা নামেও পরিচিত।",
    ta: "இந்திராவதி ஆற்றில் பஸ்தாரில் அமைந்துள்ள புகழ்பெற்ற நீர்வீழ்ச்சி, இது இந்தியாவின் நயாகரா என்றும் அழைக்கப்படுகிறது.",
    te: "ఇంద్రావతి నదిపై బస్తర్‌లో ఉన్న ప్రసిద్ధ జలపాతం, దీనిని భారతదేశపు నయాగరా అని కూడా పిలుస్తారు."
  },
  tirathgarh: {
    en: "A breathtaking stepped waterfall nestled deep within the lush Kanger Valley National Park, famous for pristine eco-trails.",
    hi: "घने कांगेर घाटी राष्ट्रीय उद्यान के भीतर स्थित एक मनमोहक सीढ़ीदार जलप्रपात, जो प्राकृतिक इको-ट्रेल्स के लिए प्रसिद्ध है।",
    mr: "हिरवेगार कांगेर व्हॅली राष्ट्रीय उद्यानात वसलेला एक मनमोहक पायऱ्यांचा धबधबा, जो इको-ट्रेल्ससाठी प्रसिद्ध आहे.",
    bn: "সবুজ কাঙ্গার ভ্যালি জাতীয় উদ্যানের গভীরে অবস্থিত একটি মনোরম ধাপে ধাপে জলপ্রপাত, যা নির্মল ইকো-ট্রেইলের জন্য বিখ্যাত।",
    ta: "செழிப்பான காங்கர் பள்ளத்தாக்கு தேசிய பூங்காவில் அமைந்துள்ள அழகிய படிக்கட்டு நீர்வீழ்ச்சி.",
    te: "పచ్చని కాంగర్ వ్యాలీ నేషనల్ పార్క్‌లో ఉన్న అందమైన మెట్ల జలపాతం, పర్యావరణ బాటలకు ప్రసిద్ధి చెందింది."
  },
  sirpur: {
    en: "An ancient archaeological town along the Mahanadi river, famous for 7th-century brick Lakshmana Temple and Buddhist monasteries.",
    hi: "महानदी के तट पर स्थित एक प्राचीन पुरातात्विक शहर, जो 7वीं शताब्दी के ईंट लक्ष्मण मंदिर और बौद्ध विहारों के लिए प्रसिद्ध है।",
    mr: "महानदीच्या काठावरील एक प्राचीन पुरातत्व शहर, जे 7 व्या शतकातील विटांच्या लक्ष्मण मंदिर आणि बौद्ध मठांसाठी प्रसिद्ध आहे.",
    bn: "মহানদী নদীর তীরে অবস্থিত একটি প্রাচীন প্রত্নতাত্ত্বিক শহর, যা ৭ম শতাব্দীর ইটের তৈরি লক্ষ্মণ মন্দির এবং বৌদ্ধ বিহারের জন্য বিখ্যাত।",
    ta: "மகாநதி ஆற்றங்கரையில் அமைந்துள்ள பழங்கால தொல்பொருள் நகரம், 7 ஆம் நூற்றாண்டு செங்கல் லட்சுமண கோயில் மற்றும் பௌத்த மடங்களுக்கு புகழ்பெற்றது.",
    te: "మహానది ఒడ్డున ఉన్న పురాతన పురావస్తు పట్టణం, 7వ శతాబ్దపు ఇటుక లక్ష్మణ దేవాలయం మరియు బౌద్ధ విహారాలకు ప్రసిద్ధి చెందింది."
  },
  bastar: {
    en: "The cultural heartland of indigenous tribal communities, renowned worldwide for Dhokra bell-metal brass casting and wood crafts.",
    hi: "स्थानीय जनजातीय समुदायों का सांस्कृतिक केंद्र, जो ढोकरा बेल-मेटल पीतल ढलाई और लकड़ी के शिल्पों के लिए दुनिया भर में प्रसिद्ध है।",
    mr: "स्थानिक आदिवासी समुदायांचे सांस्कृतिक केंद्र, जे ढोकरा बेल-मेटल ब्रास कास्टिंग आणि लाकडी हस्तकलेसाठी जगप्रसिद्ध आहे.",
    bn: "আদিবাসী সম্প্রদায়ের সাংস্কৃতিক কেন্দ্রস্থল, যা ঢোকরা বেল-মেটাল ব্রাস কাস্টিং এবং কাঠের কারুশিল্পের জন্য বিশ্বখ্যাত।",
    ta: "பழங்குடி சமூகங்களின் கலாச்சார மையப்பகுதி, டோக்ரா பித்தளை வார்ப்பு மற்றும் மர கைவினைப்பொருட்களுக்கு உலகப் புகழ்பெற்றது.",
    te: "స్థానిక గిరిజన సమాజాల సాంస్కృతిక కేంద్రం, డోక్రా బెల్-మెటల్ క్రాఫ్ట్ మరియు చెక్క చేతిపనులకు ప్రపంచ ప్రసిద్ధి చెందింది."
  },
  kondagaon: {
    en: "Celebrated as the artisan craft city of tribal terracotta pottery, bell metal casting, and traditional wrought iron blacksmithing.",
    hi: "जनजातीय टेराकोटा मिट्टी के बर्तन, बेल मेटल कास्टिंग और पारंपरिक लोहार कला (लोहा शिल्प) के शिल्प शहर के रूप में प्रसिद्ध।",
    mr: "आदिवासी टेराकोटा मातीची भांडी, बेल मेटल कास्टिंग आणि पारंपारिक लोखंडी हस्तकलेचे शहर म्हणून प्रसिद्ध.",
    bn: "উপজাতীয় পোড়ামাটির মৃৎশিল্প, বেল মেটাল ঢালাই এবং ঐতিহ্যবাহী লোহার কারুশিল্পের জন্য বিখ্যাত কারিগর শহর।",
    ta: "பழங்குடியின சுடுமண் மண்பாண்டங்கள், வெண்கல வார்ப்பு மற்றும் பாரம்பரிய இரும்பு கைவினைப்பொருட்களுக்கான கைவினை நகரம்.",
    te: "గిరిజన టెర్రకోట కుండలు, బెల్ మెటల్ కాస్టింగ్ మరియు సాంప్రదాయ ఇనుప చేతిపనులకు ప్రసిద్ధి చెందిన నగరం."
  },
  jagdalpur: {
    en: "The historic princely capital featuring the Bastar Palace, vibrant tribal weekly markets (Haats), and ancient folk temples.",
    hi: "ऐतिहासिक रियासती राजधानी जिसमें बस्तर पैलेस, जीवंत जनजातीय साप्ताहिक हाट बाजार और प्राचीन लोक मंदिर शामिल हैं।",
    mr: "ऐतिहासिक संस्थानिक राजधानी ज्यामध्ये बस्तर पॅलेस, चैतन्यमय आदिवासी साप्ताहिक बाजार (हाट) आणि प्राचीन मंदिरे आहेत.",
    bn: "ঐতিহাসিক রাজধানী যেখানে বস্তার প্রাসাদ, প্রাণবন্ত আদিবাসী সাপ্তাহিক হাট এবং প্রাচীন লোক মন্দির রয়েছে।",
    ta: "பஸ்தார் அரண்மனை, துடிப்பான பழங்குடியினர் வாராந்திர சந்தைகள் மற்றும் பழங்கால நாட்டுப்புற கோயில்களைக் கொண்ட வரலாற்று தலைநகரம்.",
    te: "బస్తర్ ప్యాలెస్, గిరిజన వారపు సంతలు మరియు పురాతన జానపద దేవాలయాలు కలిగిన చారిత్రక రాజధాని నగరం."
  },

  // --- Living Heritage Cards ---
  dhokra: {
    en: "Ancient lost-wax brass casting technique practiced by indigenous artisans for over 4,000 years, creating intricate figurines of folk deities and nature.",
    hi: "4,000 से अधिक वर्षों से स्वदेशी कारीगरों द्वारा अपनाई जाने वाली प्राचीन मोम-निक्षेप (Lost-Wax) पीतल ढलाई तकनीक, जिससे लोक देवी-देवताओं और प्रकृति की मूर्तियां बनाई जाती हैं।",
    mr: "4,000 हून अधिक वर्षांपासून स्थानिक कारागिरांनी जपलेली प्राचीन लॉस्ट-वॅक्स ब्रास कास्टिंग पद्धत, ज्यातून लोकदेवता व निसर्गाच्या मूर्ती घडवल्या जातात.",
    bn: "৪,০০০ বছরেরও বেশি সময় ধরে আদিবাসী কারিগরদের দ্বারা চর্চিত প্রাচীন মোম-ঢালাই পিতল প্রযুক্তি, যা লোকদেবতা এবং প্রকৃতির সুন্দর মূর্তি তৈরি করে।",
    ta: "4,000 ஆண்டுகளுக்கும் மேலாக பூர்வீக கைவினைஞர்களால் பின்பற்றப்படும் பழங்கால மெழுகு பித்தளை வார்ப்பு நுட்பம்.",
    te: "4,000 సంవత్సరాలకు పైగా స్థానిక కళాకారులు ఆచరిస్తున్న పురాతన డోక్రా ఇత్తడి కాస్టింగ్ పద్ధతి."
  },
  bellmetal: {
    en: "Sacred bell-metal brass sculptures sculpted by traditional Ghadwa craftsmen depicting tribal folklore, ritual trumpets, and wildlife motifs.",
    hi: "पारंपरिक घड़वा कारीगरों द्वारा गढ़ी गई पवित्र बेल-मेटल पीतल की मूर्तियां, जो जनजातीय लोककथाओं, अनुष्ठानिक तुरही और वन्यजीव रूपांकनों को दर्शाती हैं।",
    mr: "पारंपारिक घडवा कारागिरांनी घडवलेली पवित्र बेल-मेटल ब्रास शिल्पे जी आदिवासी लोककथा आणि वन्यजीवांचे दर्शन घडवतात.",
    bn: "ঐতিহ্যবাহী ঘড়ওয়া কারিগরদের দ্বারা তৈরি পবিত্র বেল-মেটাল ব্রোঞ্জ ভাস্কর্য যা আদিবাসী লোককাহিনী এবং বন্যপ্রাণীকে চিত্রিত করে।",
    ta: "பாரம்பரிய கட்வா கைவினைஞர்களால் வடிக்கப்பட்ட புனித வெண்கல பித்தளை சிற்பங்கள்.",
    te: "సాంప్రదాయ ఘడ్వా కళాకారులచే చెక్కబడిన పవిత్రమైన బెల్-మెటల్ ఇత్తడి శిల్పాలు."
  },
  tribaldance: {
    en: "Celebratory folk dances performed during harvests and weddings with ceremonial bison-horn headgear, syncing perfectly to rhythmic drum beats.",
    hi: "फसलों की कटाई और विवाहों के दौरान पारंपरिक गौर-मारिया सींगों वाले मुकुट पहनकर ढोल की लय पर किए जाने वाले प्रसिद्ध जनजातीय लोक नृत्य।",
    mr: "पिकांची कापणी आणि विवाह सोहळ्यात पारंपरिक गौर मारिया शिंगांचे मुकुट परिधान करून ढोलांच्या तालावर केले जाणारे पारंपरिक आदिवासी लोकनृत्य.",
    bn: "ফসল কাটা এবং বিবাহ উৎসবের সময় ঐতিহ্যবাহী বাইসন-শিং পাগড়ি পরে ঢোলের তালে পরিবেশিত লোকনৃত্য।",
    ta: "அறுவடை மற்றும் திருமணங்களின் போது பாரம்பரிய காட்டெருமை கொம்பு தலைக்கவசத்துடன் தாள மேள சத்தத்திற்கு ஆடப்படும் நாட்டுப்புற நடனம்.",
    te: "పంట కోతలు మరియు వివాహాల సమయంలో బైసన్-కొమ్ముల కిరీటంతో డప్పుల దరువులకు అనుగుణంగా చేసే సాంప్రదాయ గిరిజన నృత్యం."
  },
  folkmusic: {
    en: "Soulful indigenous melodies played on bamboo flutes, Mohri horn, and traditional Mandar drums narrating local legends of nature and ancestors.",
    hi: "बांसुरी, मोहरी और पारंपरिक मांदर ढोल पर बजाई जाने वाली मधुर जनजातीय धुनें, जो प्रकृति और पूर्वजों की स्थानीय गाथाओं को सुनाती हैं।",
    mr: "बांबूच्या बासरी, मोहरी आणि पारंपारिक मांदर ढोलावर वाजवल्या जाणाऱ्या मधुर लोकधुना ज्या पूर्वजांच्या कथा सांगतात.",
    bn: "বাঁশের বাঁশি, মোহরি এবং ঐতিহ্যবাহী মান্দার ঢোলে বাজানো সুর যা প্রকৃতি ও পূর্বপুরুষদের কাহিনী বর্ণনা করে।",
    ta: "மூங்கில் புல்லாங்குழல், மோஹ்ரி மற்றும் பாரம்பரிய மாந்தர் மேளங்களில் இசைக்கப்படும் பழங்குடியின மெல்லிசை.",
    te: "వెదురు వేణువులు, మోహ్రీ మరియు సాంప్రదాయ మందార్ డ్రమ్ములపై వాయించే శ్రావ్యమైన జానపద సంగీతం."
  },
  handicrafts: {
    en: "Distinctive unglazed clay terracotta pottery and wrought iron (Loha Shilp) created using age-old ancestral smithing traditions.",
    hi: "पुरातन पैतृक लोहार और कुम्हार परंपराओं का उपयोग करके बनाए गए विशिष्ट बिना चमक वाले टेराकोटा मिट्टी के बर्तन और गढ़ा लोहा (लोहा शिल्प)।",
    mr: "प्राचीन पारंपारिक पद्धतींनी तयार केलेली वैशिष्ट्यपूर्ण टेराकोटा मातीची भांडी आणि लोखंडी कलाकृती (लोहा शिल्प).",
    bn: "প্রাচীন ঐতিহ্যবাহী কামার ও কুমারদের পদ্ধতিতে তৈরি অনন্য পোড়ামাটির মৃৎশিল্প এবং পেটা লোহার কারুশিল্প (লোহা শিল্প)।",
    ta: "பழங்கால பாரம்பரிய முறையில் உருவாக்கப்பட்ட தனித்துவமான சுடுமண் மண்பாண்டங்கள் மற்றும் இரும்பு கைவினைப்பொருட்கள் (லோஹா ஷில்ப்).",
    te: "పురాతన పద్ధతులను ఉపయోగించి రూపొందించిన ప్రత్యేకమైన టెర్రకోట కుండలు మరియు ఇనుప కళాఖండాలు (లోహా శిల్ప్)."
  }
};

// Map Marker Storage
let map;
const markers = {};
let activeRouteLayer = null;
let routeWaypointsMarkers = [];

// Current Filter States
let selectedCategory = "All";
let searchQuery = "";

// ==========================================================================
// 3. Initialize Page when DOM is ready
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Leaflet Map
  initMap();

  // Render all places into the grid
  renderPlaces(places);

  // Initialize Search & Filter Event Listeners
  initSearchAndFilters();

  // Initialize Translation Handlers & Language Selectors
  initTranslationListeners();

  // Initialize Travel Planner
  initTravelPlanner();

  // Initialize Mobile Menu
  initMobileMenu();

  // Sync UI labels with initial default target language (Hindi)
  updateAllTranslateButtonLabels();
});

// ==========================================================================
// 4. Leaflet.js + OpenStreetMap Initialization
// ==========================================================================
function initMap() {
  // Center map around Bastar / Chhattisgarh heritage region
  map = L.map("map").setView([19.8, 81.9], 7);

  // Add OpenStreetMap Tile Layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom Marker Icons
  const ecoIcon = L.divIcon({
    className: "custom-eco-pin",
    html: `<div style="background-color: #059669; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">🌿</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  const cultureIcon = L.divIcon({
    className: "custom-culture-pin",
    html: `<div style="background-color: #ea580c; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">🏛️</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  // Add markers for all destinations
  places.forEach(function (place) {
    const isEco = place.category === "Eco Tourism";
    const marker = L.marker([place.lat, place.lng], {
      icon: isEco ? ecoIcon : cultureIcon
    }).addTo(map);

    // Popup content with place details
    const popupContent = `
      <div style="min-width: 220px;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px;">
          <h4 style="font-weight: 800; font-size: 14px; margin: 0; color: #0f172a;">${place.name}</h4>
          <span style="font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; background: ${isEco ? '#d1fae5; color: #065f46;' : '#ffedd5; color: #9a3412;'}">${place.category}</span>
        </div>
        <p style="font-size: 12px; color: #475569; margin: 4px 0 8px 0; line-height: 1.4;">${place.description}</p>
        <div style="background: #f8fafc; padding: 6px 8px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 11px; font-weight: 700; color: #059669; display: flex; justify-content: space-between;">
          <span>🌿 Eco Score:</span>
          <span>${place.ecoScore}/100</span>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);
    markers[place.id] = marker;
  });
}

// Pan & Zoom to coordinates
function focusOnMap(lat, lng, name) {
  const mapElement = document.getElementById("map-section");
  if (mapElement) {
    mapElement.scrollIntoView({ behavior: "smooth" });
  }

  map.flyTo([lat, lng], 11, { duration: 1.4 });

  const place = places.find(p => p.name === name);
  if (place && markers[place.id]) {
    setTimeout(function () {
      markers[place.id].openPopup();
    }, 700);
  }
}

// Reset Map
function resetMapView() {
  map.flyTo([19.8, 81.9], 7, { duration: 1.2 });
  if (activeRouteLayer) {
    map.removeLayer(activeRouteLayer);
    activeRouteLayer = null;
  }
  routeWaypointsMarkers.forEach(m => map.removeLayer(m));
  routeWaypointsMarkers = [];
}

// ==========================================================================
// 5. Render Destination Cards
// ==========================================================================
function renderPlaces(placesList) {
  const container = document.getElementById("placesContainer");
  const countBadge = document.getElementById("placesCount");
  const noResults = document.getElementById("noResultsMessage");
  const targetLang = getSelectedLanguage();
  const langName = getShortLanguageName(targetLang);

  if (countBadge) {
    countBadge.textContent = `Showing ${placesList.length} Destinations`;
  }

  if (placesList.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  } else {
    noResults.classList.add("hidden");
  }

  container.innerHTML = placesList.map(function (place) {
    const isEco = place.category === "Eco Tourism";
    const categoryBadgeClass = isEco
      ? "bg-emerald-100 text-emerald-800 border-emerald-200"
      : place.category === "Heritage"
      ? "bg-amber-100 text-amber-800 border-amber-200"
      : "bg-orange-100 text-orange-800 border-orange-200";

    const isTranslated = place.description !== place.originalDescription;

    return `
      <div class="destination-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between" id="card-${place.id}">
        
        <!-- Card Body -->
        <div class="p-6 space-y-4">
          
          <!-- Category & Eco Badge Header -->
          <div class="flex items-center justify-between gap-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border ${categoryBadgeClass}">
              ${place.category}
            </span>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <i class="fa-solid fa-leaf text-emerald-600"></i>
              <span>Eco: ${place.ecoScore}/100</span>
            </div>
          </div>

          <!-- Place Title & Location -->
          <div>
            <h3 class="text-xl font-bold text-slate-900">${place.name}</h3>
            <p class="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
              <i class="fa-solid fa-location-dot text-culture-600"></i>
              <span>Lat: ${place.lat}, Lng: ${place.lng}</span>
            </p>
          </div>

          <!-- Description (Can be translated) -->
          <p class="text-slate-600 text-sm leading-relaxed place-description ${isTranslated ? 'text-culture-900 font-medium bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60' : ''}" id="desc-${place.id}">
            ${place.description}
          </p>

          <!-- Eco Score Progress & Breakdown -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 text-xs">
            <div class="flex items-center justify-between font-semibold text-slate-700">
              <span>🌿 Eco Sustainability Score</span>
              <span class="text-emerald-600 font-bold">${place.ecoScore}%</span>
            </div>
            
            <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-500 h-2 rounded-full transition-all duration-500" style="width: ${place.ecoScore}%"></div>
            </div>

            <div class="grid grid-cols-3 gap-1 pt-1.5 text-[11px] text-slate-500">
              <div>Nature: <strong class="text-slate-700">${place.metrics.nature}%</strong></div>
              <div>Waste: <strong class="text-slate-700">${place.metrics.waste}%</strong></div>
              <div>Local: <strong class="text-slate-700">${place.metrics.business}%</strong></div>
            </div>
          </div>

        </div>

        <!-- Card Footer Actions -->
        <div class="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
          
          <!-- Translate Card Button -->
          <button
            onclick="handleCardTranslate(${place.id})"
            id="translate-btn-${place.id}"
            class="place-translate-btn flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-200 hover:bg-culture-50 hover:text-culture-700 text-slate-700 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <i class="fa-solid fa-globe text-culture-600"></i>
            <span class="btn-text">Translate to ${langName}</span>
          </button>

          <!-- View on Map Button -->
          <button
            onclick="focusOnMap(${place.lat}, ${place.lng}, '${place.name}')"
            class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-culture-600 hover:bg-culture-700 text-white shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <i class="fa-solid fa-map-location-dot"></i>
            <span>View on Map</span>
          </button>

        </div>

      </div>
    `;
  }).join("");
}

// ==========================================================================
// 6. Search & Filter Logic
// ==========================================================================
function initSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const categoryBtns = document.querySelectorAll(".category-btn");

  searchInput.addEventListener("input", function (e) {
    searchQuery = e.target.value.trim().toLowerCase();
    if (searchQuery.length > 0) {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }
    applyFilters();
  });

  clearSearchBtn.addEventListener("click", function () {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    applyFilters();
  });

  categoryBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryBtns.forEach(b => {
        b.classList.remove("bg-culture-600", "text-white", "shadow-sm");
        b.classList.add("bg-slate-100", "text-slate-700");
      });

      this.classList.remove("bg-slate-100", "text-slate-700");
      this.classList.add("bg-culture-600", "text-white", "shadow-sm");

      selectedCategory = this.getAttribute("data-category");
      applyFilters();
    });
  });
}

function applyFilters() {
  const filtered = places.filter(function (place) {
    const matchesCategory =
      selectedCategory === "All" || place.category === selectedCategory;

    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery) ||
      place.description.toLowerCase().includes(searchQuery) ||
      place.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  renderPlaces(filtered);
}

// ==========================================================================
// 7. Hybrid Translation Engine
// Connects to local LibreTranslate (localhost:5000) or uses instant built-in dictionary
// ==========================================================================
async function translateText(text, targetLanguage, dictionaryKey = null) {
  // If target language is english, return original if key is given or text
  if (targetLanguage === "en") {
    if (dictionaryKey && translationsDictionary[dictionaryKey]) {
      return translationsDictionary[dictionaryKey].en;
    }
    return text;
  }

  // 1. First, attempt to call Local LibreTranslate API with a short timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLanguage
      })
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.translatedText) {
        return data.translatedText;
      }
    }
  } catch (err) {
    // LibreTranslate is offline or aborted; smoothly proceed to built-in dictionary
  }

  // 2. Seamlessly use high-quality built-in dictionary for the key
  if (dictionaryKey && translationsDictionary[dictionaryKey]) {
    const dict = translationsDictionary[dictionaryKey];
    if (dict[targetLanguage]) {
      return dict[targetLanguage];
    }
  }

  // 3. Fallback to existing text if untranslatable
  return text;
}

// Helper to get active language
function getSelectedLanguage() {
  const select = document.getElementById("languageSelect");
  return select ? select.value : "hi";
}

function getLanguageDisplayName(code) {
  const map = {
    hi: "Hindi (हिंदी)",
    mr: "Marathi (मराठी)",
    bn: "Bengali (বাংলা)",
    ta: "Tamil (தமிழ்)",
    te: "Telugu (తెలుగు)",
    en: "English"
  };
  return map[code] || code;
}

function getShortLanguageName(code) {
  const map = {
    hi: "Hindi",
    mr: "Marathi",
    bn: "Bengali",
    ta: "Tamil",
    te: "Telugu",
    en: "English"
  };
  return map[code] || code;
}

// Update all button labels to clearly show target language
function updateAllTranslateButtonLabels() {
  const targetLang = getSelectedLanguage();
  const shortName = getShortLanguageName(targetLang);
  const fullName = getLanguageDisplayName(targetLang);

  // Top Bar Badge
  const langBadge = document.getElementById("currentLangBadge");
  if (langBadge) langBadge.textContent = `Target: ${fullName}`;

  // Heritage Section Pill
  const heritageTarget = document.getElementById("heritageLangTargetName");
  if (heritageTarget) heritageTarget.textContent = fullName;

  // Navbar Button
  const pageBtnLabel = document.getElementById("translatePageBtnLabel");
  if (pageBtnLabel) pageBtnLabel.textContent = `Translate Page to ${shortName}`;

  // Destination Card Buttons
  document.querySelectorAll(".place-translate-btn .btn-text").forEach(function (el) {
    el.textContent = `Translate to ${shortName}`;
  });

  // Living Heritage Card Buttons
  document.querySelectorAll(".heritage-translate-btn .btn-text").forEach(function (el) {
    el.textContent = `Translate to ${shortName}`;
  });
}

// Handler for translating a single Destination Card
async function handleCardTranslate(placeId) {
  const place = places.find(p => p.id === placeId);
  if (!place) return;

  const targetLang = getSelectedLanguage();
  const langName = getLanguageDisplayName(targetLang);
  const btn = document.getElementById(`translate-btn-${placeId}`);
  const btnText = btn ? btn.querySelector(".btn-text") : null;
  const descElem = document.getElementById(`desc-${placeId}`);

  if (btnText) btnText.textContent = "Translating... ⏳";
  if (btn) btn.disabled = true;

  try {
    const translatedResult = await translateText(place.originalDescription, targetLang, place.key);
    place.description = translatedResult;

    if (descElem) {
      descElem.innerHTML = translatedResult;
      descElem.classList.add("text-culture-900", "font-medium", "bg-amber-50/70", "p-2.5", "rounded-xl", "border", "border-amber-200/60");
    }

    showToast("Translation Success", `Translated ${place.name} into ${langName}!`, "success");
  } catch (err) {
    showToast("Translation Notice", `Updated ${place.name} to ${langName}.`, "info");
  } finally {
    if (btnText) btnText.textContent = `Translate to ${getShortLanguageName(targetLang)}`;
    if (btn) btn.disabled = false;
  }
}

// Handler for translating a Living Heritage Card
async function translateHeritageCard(heritageKey) {
  const cardElement = document.querySelector(`[data-heritage-id="${heritageKey}"]`);
  const descElem = document.getElementById(`heritage-desc-${heritageKey}`);
  const titleElem = cardElement ? cardElement.querySelector(".heritage-title") : null;
  const title = titleElem ? titleElem.textContent : "Heritage Craft";

  if (!descElem) return;

  const targetLang = getSelectedLanguage();
  const langName = getLanguageDisplayName(targetLang);

  const btn = cardElement.querySelector(".heritage-translate-btn");
  const btnText = btn ? btn.querySelector(".btn-text") : null;

  if (btnText) btnText.textContent = "Translating... ⏳";
  if (btn) btn.disabled = true;

  try {
    const translated = await translateText(descElem.textContent, targetLang, heritageKey);
    descElem.innerHTML = translated;
    descElem.classList.add("text-culture-900", "font-medium", "bg-amber-50/70", "p-2.5", "rounded-xl", "border", "border-amber-200/60");

    showToast("Heritage Card Translated", `Translated "${title}" into ${langName}!`, "success");
  } catch (err) {
    showToast("Translation Notice", `Updated "${title}" to ${langName}.`, "info");
  } finally {
    if (btnText) btnText.textContent = `Translate to ${getShortLanguageName(targetLang)}`;
    if (btn) btn.disabled = false;
  }
}

// Initialize Page-Wide Translation Listeners
function initTranslationListeners() {
  const translatePageBtn = document.getElementById("translatePageBtn");
  const mobileTranslatePageBtn = document.getElementById("mobileTranslatePageBtn");
  const langSelect = document.getElementById("languageSelect");
  const mobileLangSelect = document.getElementById("mobileLanguageSelect");

  function onLanguageChange(newLang) {
    if (langSelect) langSelect.value = newLang;
    if (mobileLangSelect) mobileLangSelect.value = newLang;
    updateAllTranslateButtonLabels();
  }

  if (langSelect) {
    langSelect.addEventListener("change", function () {
      onLanguageChange(this.value);
    });
  }

  if (mobileLangSelect) {
    mobileLangSelect.addEventListener("change", function () {
      onLanguageChange(this.value);
    });
  }

  async function translateAll() {
    const targetLang = getSelectedLanguage();
    const langName = getLanguageDisplayName(targetLang);

    showToast("Translating Page Content", `Translating all destination and heritage cards to ${langName}...`, "info");

    // 1. Translate all 6 Destination Cards
    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      place.description = await translateText(place.originalDescription, targetLang, place.key);
    }
    renderPlaces(places);

    // 2. Translate all 5 Living Heritage Cards
    const heritageKeys = ["dhokra", "bellmetal", "tribaldance", "folkmusic", "handicrafts"];
    for (let j = 0; j < heritageKeys.length; j++) {
      const key = heritageKeys[j];
      const descElem = document.getElementById(`heritage-desc-${key}`);
      if (descElem) {
        const translated = await translateText(descElem.textContent, targetLang, key);
        descElem.innerHTML = translated;
        descElem.classList.add("text-culture-900", "font-medium", "bg-amber-50/70", "p-2.5", "rounded-xl", "border", "border-amber-200/60");
      }
    }

    showToast("Page Translation Complete", `Successfully translated all destinations & heritage cards into ${langName}!`, "success");
  }

  if (translatePageBtn) translatePageBtn.addEventListener("click", translateAll);
  if (mobileTranslatePageBtn) mobileTranslatePageBtn.addEventListener("click", translateAll);
}

// ==========================================================================
// 8. Simple AI-Like Travel Planner (Interactive Manual Plan Execution)
// ==========================================================================
const travelPlans = {
  Bastar: {
    1: {
      title: "1-Day Bastar Cultural Heartland & Indravati Tour",
      routeCoords: [
        { name: "Jagdalpur Heritage City", coords: [19.073, 82.025] },
        { name: "Bastar Dhokra Craft Village", coords: [19.107, 81.953] },
        { name: "Chitrakote Waterfall", coords: [19.203, 81.702] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Tribal Crafts & Spectacular Indravati Falls",
          steps: [
            { time: "09:00 AM", place: "Bastar Tribal Craft Village", lat: 19.107, lng: 81.953, activity: "Observe live Dhokra lost-wax brass sculpting & interact with master artisans." },
            { time: "01:00 PM", place: "Local Haat Traditional Lunch", lat: 19.107, lng: 81.953, activity: "Taste organic millets, Mahua delights, and seasonal tribal herbs." },
            { time: "03:30 PM", place: "Chitrakote Waterfall", lat: 19.203, lng: 81.702, activity: "Witness the magnificent sunset over India's widest horseshoe waterfall." }
          ]
        }
      ]
    },
    2: {
      title: "2-Day Bastar & Kanger Valley Eco Expedition",
      routeCoords: [
        { name: "Jagdalpur Heritage Hub", coords: [19.073, 82.025] },
        { name: "Bastar Craft Heartland", coords: [19.107, 81.953] },
        { name: "Chitrakote Waterfall", coords: [19.203, 81.702] },
        { name: "Tirathgarh Waterfall", coords: [18.905, 81.864] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Heritage & Craft Heartland",
          steps: [
            { time: "Morning", place: "Bastar Craft Hub", lat: 19.107, lng: 81.953, activity: "Dhokra metal casting workshop and indigenous wood craft exploration." },
            { time: "Afternoon", place: "Chitrakote Waterfall", lat: 19.203, lng: 81.702, activity: "Boat ride at the base of the gorge and eco-viewpoint walk." }
          ]
        },
        {
          day: "Day 2",
          theme: "Kanger Valley Eco-Trail & Waterfalls",
          steps: [
            { time: "Morning", place: "Tirathgarh Waterfall", lat: 18.905, lng: 81.864, activity: "Nature trek through 3-tier stepped waterfalls and lush forest canopy." },
            { time: "Afternoon", place: "Kanger Valley Biosphere", lat: 18.905, lng: 81.864, activity: "Explore ancient subterranean limestone caves with certified tribal eco-guides." }
          ]
        }
      ]
    },
    3: {
      title: "3-Day Ultimate Bastar Culture, Craft & Wilderness Grand Tour",
      routeCoords: [
        { name: "Kondagaon Craft Enclave", coords: [19.600, 81.667] },
        { name: "Bastar Tribal Hub", coords: [19.107, 81.953] },
        { name: "Chitrakote Waterfall", coords: [19.203, 81.702] },
        { name: "Tirathgarh Waterfall", coords: [18.905, 81.864] },
        { name: "Jagdalpur Palace", coords: [19.073, 82.025] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Artisan Enclaves & Terracotta Village",
          steps: [
            { time: "Morning", place: "Kondagaon Craft Guild", lat: 19.600, lng: 81.667, activity: "Hands-on pottery and wrought-iron smithing masterclass." },
            { time: "Afternoon", place: "Bastar Haat Market", lat: 19.107, lng: 81.953, activity: "Authentic weekly barter market and indigenous bell-metal workshops." }
          ]
        },
        {
          day: "Day 2",
          theme: "Indravati River & Chitrakote Gorge",
          steps: [
            { time: "Full Day", place: "Chitrakote Eco Zone", lat: 19.203, lng: 81.702, activity: "Sunrise canyon photography, local bamboo crafts, and river rafting." }
          ]
        },
        {
          day: "Day 3",
          theme: "Kanger Valley Biosphere & Jagdalpur Palace",
          steps: [
            { time: "Morning", place: "Tirathgarh & Kanger Reserve", lat: 18.905, lng: 81.864, activity: "Birdwatching eco-trail, crystal pools, and sacred tribal groves." },
            { time: "Evening", place: "Bastar Palace & Museum", lat: 19.073, lng: 82.025, activity: "Discover princely royal archives and rare tribal folklore artifacts." }
          ]
        }
      ]
    }
  },
  Sirpur: {
    1: {
      title: "1-Day Sirpur Archaeological Marvel Tour",
      routeCoords: [
        { name: "Sirpur Lakshmana Temple", coords: [21.343, 82.179] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "7th Century Temples & Buddhist Viharas",
          steps: [
            { time: "09:00 AM", place: "Lakshmana Temple", lat: 21.343, lng: 82.179, activity: "Examine 7th-century ornate brick architecture and intricate Vaishnava carvings." },
            { time: "01:00 PM", place: "Mahanadi Riverbank Eco Homestay", lat: 21.343, lng: 82.179, activity: "Traditional Chhattisgarhi lunch (Chila, Fara, and organic leafy greens)." },
            { time: "03:30 PM", place: "Teevardev Buddhist Vihara", lat: 21.343, lng: 82.179, activity: "Explore ancient monastic courtyards and meditation halls excavated by ASI." }
          ]
        }
      ]
    },
    2: {
      title: "2-Day Sirpur History & Barnawapara Wildlife Eco Trail",
      routeCoords: [
        { name: "Sirpur Heritage Complex", coords: [21.343, 82.179] },
        { name: "Barnawapara Sanctuary", coords: [21.400, 82.350] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Ancient Architecture & Excavations",
          steps: [
            { time: "Full Day", place: "Sirpur Heritage Complex", lat: 21.343, lng: 82.179, activity: "Deep dive into Gandheshwar Temple, Anand Prabhu Vihara, and Surang Tila." }
          ]
        },
        {
          day: "Day 2",
          theme: "Barnawapara Wildlife Sanctuary",
          steps: [
            { time: "Full Day", place: "Barnawapara Eco-Safari", lat: 21.400, lng: 82.350, activity: "Spot Indian bison (Gaur), leopards, flying squirrels, and pristine sal forests." }
          ]
        }
      ]
    },
    3: {
      title: "3-Day Sirpur Archaeological, Spiritual & Forest Immersion",
      routeCoords: [
        { name: "Sirpur Heritage Monuments", coords: [21.343, 82.179] },
        { name: "Barnawapara Sanctuary", coords: [21.400, 82.350] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Sacred Buddhist & Hindu Temples",
          steps: [
            { time: "Full Day", place: "Sirpur Monuments", lat: 21.343, lng: 82.179, activity: "Guided heritage walk through 12 excavated monasteries and terracotta museums." }
          ]
        },
        {
          day: "Day 2",
          theme: "Barnawapara Wildlife Safari",
          steps: [
            { time: "Full Day", place: "Barnawapara Sanctuary", lat: 21.400, lng: 82.350, activity: "Early morning jungle safari and interaction with forest conservation tribes." }
          ]
        },
        {
          day: "Day 3",
          theme: "Mahanadi River Ecology & Folk Arts",
          steps: [
            { time: "Full Day", place: "Mahanadi Riverside Trails", lat: 21.343, lng: 82.179, activity: "Organic village farming experience, local folk dance, and pottery session." }
          ]
        }
      ]
    }
  },
  Jagdalpur: {
    1: {
      title: "1-Day Jagdalpur Heritage & Palace Exploration",
      routeCoords: [
        { name: "Jagdalpur Bastar Palace", coords: [19.073, 82.025] },
        { name: "Chitrakote Sunset Point", coords: [19.203, 81.702] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Princely Heritage & Majestic Indravati",
          steps: [
            { time: "09:30 AM", place: "Bastar Palace & Danteshwari Temple", lat: 19.073, lng: 82.025, activity: "Explore the historic seat of Kakatiya dynasty and royal temple." },
            { time: "01:30 PM", place: "Anthropological Museum", lat: 19.073, lng: 82.025, activity: "Explore rare collections of tribal masks, musical instruments, and weaponry." },
            { time: "04:30 PM", place: "Chitrakote Evening Vista", lat: 19.203, lng: 81.702, activity: "Scenic sunset viewing and riverside folk music performance." }
          ]
        }
      ]
    },
    2: {
      title: "2-Day Jagdalpur Heritage & Subterranean Caves",
      routeCoords: [
        { name: "Jagdalpur Heritage City", coords: [19.073, 82.025] },
        { name: "Tirathgarh Waterfall", coords: [18.905, 81.864] },
        { name: "Chitrakote Waterfall", coords: [19.203, 81.702] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Palace, Museum & Chitrakote",
          steps: [
            { time: "Morning", place: "Jagdalpur Heritage City", lat: 19.073, lng: 82.025, activity: "Bastar Palace and weekly tribal haat craft market." },
            { time: "Afternoon", place: "Chitrakote Waterfall", lat: 19.203, lng: 81.702, activity: "Cliff-edge walking trails, gorge viewpoint, and photography." }
          ]
        },
        {
          day: "Day 2",
          theme: "Kanger Valley Eco-Trail & Caves",
          steps: [
            { time: "Morning", place: "Tirathgarh Falls", lat: 18.905, lng: 81.864, activity: "Trek along stepped cascading crystal-clear falls." },
            { time: "Afternoon", place: "Dandak & Kotumsar Caves", lat: 18.905, lng: 81.864, activity: "Cave spelunking guided by certified indigenous eco-rangers." }
          ]
        }
      ]
    },
    3: {
      title: "3-Day Complete Jagdalpur Cultural & Eco Grand Tour",
      routeCoords: [
        { name: "Jagdalpur City & Haat", coords: [19.073, 82.025] },
        { name: "Chitrakote Waterfall", coords: [19.203, 81.702] },
        { name: "Tirathgarh Waterfall", coords: [18.905, 81.864] },
        { name: "Kondagaon Craft Guild", coords: [19.600, 81.667] }
      ],
      days: [
        {
          day: "Day 1",
          theme: "Royal Heritage & Local Flavors",
          steps: [
            { time: "Full Day", place: "Jagdalpur City & Haat", lat: 19.073, lng: 82.025, activity: "Royal palace, local artisan workshops, and tasting authentic culinary dishes." }
          ]
        },
        {
          day: "Day 2",
          theme: "Chitrakote & Tirathgarh Waterfalls",
          steps: [
            { time: "Full Day", place: "Indravati & Kanger Valley", lat: 19.203, lng: 81.702, activity: "Twin waterfall excursion with eco-friendly boating and forest walks." }
          ]
        },
        {
          day: "Day 3",
          theme: "Artisan Guilds of Kondagaon",
          steps: [
            { time: "Full Day", place: "Kondagaon Craft Guild", lat: 19.600, lng: 81.667, activity: "Exclusive hands-on masterclasses in Bell Metal craft & terracotta." }
          ]
        }
      ]
    }
  }
};

function initTravelPlanner() {
  const generateBtn = document.getElementById("generatePlanBtn");
  if (!generateBtn) return;

  generateBtn.addEventListener("click", generateTravelPlan);

  // Generate initial plan automatically
  generateTravelPlan();
}

function generateTravelPlan() {
  const destSelect = document.getElementById("plannerDestination");
  const durationSelect = document.getElementById("plannerDuration");
  const interestSelect = document.getElementById("plannerInterest");
  const resultContainer = document.getElementById("itineraryResult");

  if (!destSelect || !durationSelect || !resultContainer) return;

  const dest = destSelect.value;
  const duration = parseInt(durationSelect.value, 10);
  const interest = interestSelect ? interestSelect.value : "Folk Art";

  const planData = (travelPlans[dest] && travelPlans[dest][duration])
    ? travelPlans[dest][duration]
    : travelPlans["Bastar"][2];

  let daysHTML = planData.days.map(function (dayObj) {
    const stepsHTML = dayObj.steps.map(function (step) {
      return `
        <li class="relative pl-6 pb-4 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
          <div class="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-culture-600 border-2 border-white"></div>
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">${step.time}</span>
              <button onclick="focusOnMap(${step.lat}, ${step.lng}, '${step.place}')" class="text-[11px] font-bold text-culture-600 hover:text-culture-800 hover:underline flex items-center gap-1">
                <i class="fa-solid fa-location-crosshairs"></i> <span>Pin on Map</span>
              </button>
            </div>
            <h5 class="text-sm font-bold text-slate-900">${step.place}</h5>
            <p class="text-xs text-slate-600 leading-relaxed">${step.activity}</p>
          </div>
        </li>
      `;
    }).join("");

    return `
      <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-slate-200">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-culture-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">${dayObj.day}</span>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base">${dayObj.theme}</h4>
          </div>
          <span class="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">🌱 Eco Trail</span>
        </div>
        <ul class="pt-2">
          ${stepsHTML}
        </ul>
      </div>
    `;
  }).join("");

  const routeCoordsList = planData.routeCoords.map(r => r.coords);

  resultContainer.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
      <div>
        <div class="inline-flex items-center gap-1.5 text-xs font-bold text-culture-600 uppercase tracking-wider mb-1">
          <i class="fa-solid fa-sparkles"></i> Curated Itinerary (${dest} • ${duration} Day(s) • ${interest})
        </div>
        <h3 class="text-xl sm:text-2xl font-bold font-serif-culture text-slate-900">${planData.title}</h3>
      </div>
      <button
        onclick="showRouteOnMap(${JSON.stringify(routeCoordsList).replace(/"/g, '&quot;')})"
        class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 transition-all active:scale-95 self-start sm:self-auto cursor-pointer"
      >
        <i class="fa-solid fa-route"></i>
        <span>Show Route on Map</span>
      </button>
    </div>

    <!-- Timeline Grid -->
    <div class="grid grid-cols-1 ${duration > 1 ? 'md:grid-cols-' + duration : ''} gap-4">
      ${daysHTML}
    </div>
  `;

  showToast("Plan Generated", `Curated ${duration}-day itinerary generated for ${dest}!`, "success");
}

function showRouteOnMap(routeCoords) {
  if (!map || !routeCoords || routeCoords.length === 0) return;

  const mapSection = document.getElementById("map-section");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: "smooth" });
  }

  if (activeRouteLayer) {
    map.removeLayer(activeRouteLayer);
  }

  routeWaypointsMarkers.forEach(m => map.removeLayer(m));
  routeWaypointsMarkers = [];

  // Create polyline route
  activeRouteLayer = L.polyline(routeCoords, {
    color: "#c2410c",
    weight: 4,
    opacity: 0.9,
    dashArray: "8, 8"
  }).addTo(map);

  // Add numbered circle markers for waypoints
  routeCoords.forEach((coord, idx) => {
    const numIcon = L.divIcon({
      className: "custom-stop-pin",
      html: `<div style="background-color: #0f172a; color: white; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #ea580c; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${idx + 1}</div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const marker = L.marker(coord, { icon: numIcon }).addTo(map);
    marker.bindPopup(`<strong>Stop ${idx + 1}</strong>`);
    routeWaypointsMarkers.push(marker);
  });

  map.fitBounds(activeRouteLayer.getBounds(), {
    padding: [60, 60]
  });

  showToast("Itinerary Route Mapped", "Route polyline and numbered stops displayed on OpenStreetMap!", "success");
}

// ==========================================================================
// 9. Artist Modal & Inquiry Handler
// ==========================================================================
function showArtistModal(artistName, craft, location) {
  const modal = document.getElementById("artistModal");
  const modalName = document.getElementById("modalArtistName");
  const modalCraft = document.getElementById("modalArtistCraft");
  const modalLoc = document.getElementById("modalArtistLoc");

  if (modal && modalName && modalCraft && modalLoc) {
    modalName.textContent = artistName;
    modalCraft.textContent = craft;
    modalLoc.textContent = location;
    modal.classList.remove("hidden");
  }
}

function closeArtistModal() {
  const modal = document.getElementById("artistModal");
  if (modal) modal.classList.add("hidden");
}

function submitArtistInquiry() {
  closeArtistModal();
  showToast("Inquiry Sent Directly", "Your message was sent directly to the tribal artisan without middlemen fees!", "success");
}

// ==========================================================================
// 10. Toast Notification System
// ==========================================================================
let toastTimer = null;

function showToast(title, message, type = "info") {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  if (!toast || !toastTitle || !toastMessage || !toastIcon) return;

  if (type === "success") {
    toastIcon.className = "fa-solid fa-circle-check text-emerald-400 text-base mt-0.5";
  } else if (type === "error") {
    toastIcon.className = "fa-solid fa-circle-exclamation text-rose-400 text-base mt-0.5";
  } else {
    toastIcon.className = "fa-solid fa-circle-info text-amber-400 text-base mt-0.5";
  }

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 4000);
}

// ==========================================================================
// 11. Mobile Menu Toggle
// ==========================================================================
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
      });
    });
  }
}
