/**
  * Portfolio Website Cards Data
  */

export const cardsData = [
  {
    title: "Admin Panel Dashboard",
    slug: "admin-panel-dashboard",
    tags: "Angular, Node.js, Express.js, MongoDB",
    description: "Bu proje, işletmelere yapay zekâ destekli chatbot hizmeti sunmak amacıyla geliştirilen kapsamlı bir yönetim panelidir. Kullanıcı, rol, müşteri ve kategori gibi temel işlevlerin yönetimini sağlar ve AI destekli chatbot hizmetlerinin merkezi şekilde yönetilmesine olanak tanır. Platform, gerçek zamanlı performans takibi, detaylı raporlama, güvenli denetim kaydı ve Excel import/export desteğiyle etkili bir veri yönetimi sunar. Ayrıca çok kullanıcılı yapısı sayesinde, ekiplerin eş zamanlı çalışmasını destekler.",
    category: "fullstack, ai",
    images: [
      "./assets/images/project1-admin-panel-dashboard/image1.png",
      "./assets/images/project1-admin-panel-dashboard/image2.png",
      "./assets/images/project1-admin-panel-dashboard/image3.png",
      "./assets/images/project1-admin-panel-dashboard/image4.png",
      "./assets/images/project1-admin-panel-dashboard/image5.png",
      "./assets/images/project1-admin-panel-dashboard/image6.png",
      "./assets/images/project1-admin-panel-dashboard/image7.png",
      "./assets/images/project1-admin-panel-dashboard/image8.png",
      "./assets/images/project1-admin-panel-dashboard/image9.png",
      "./assets/images/project1-admin-panel-dashboard/image10.png",
      "./assets/images/project1-admin-panel-dashboard/image11.png",
      "./assets/images/project1-admin-panel-dashboard/image12.png",
      "./assets/images/project1-admin-panel-dashboard/image13.png",
      "./assets/images/project1-admin-panel-dashboard/image14.png",
      "./assets/images/project1-admin-panel-dashboard/image15.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/admin-panel-dashboard", icon: "fab fa-github" },
    ],
  },
  {
    title: "Chatbot",
    slug: "chatbot",
    tags: "Node.js, Express.js, Angular, OpenAI API",
    description: "Bu proje, kullanıcıların yapay zekâ destekli sohbet deneyimi yaşayabilmesi için geliştirilmiş kapsamlı bir chatbot uygulamasıdır. JWT tabanlı kimlik doğrulama, kullanıcı kaydı/girişi ve oturum yönetimiyle güvenli bir altyapı sunar. Gerçek zamanlı yanıt akışı (SSE), sohbet geçmişi ve ek talimat (prompt) desteğiyle esnek kullanım imkânı sağlar. Hem dashboard üzerinde hem de sayfalara entegre edilebilen toggle chat widget ile kullanıcı dostu bir deneyim sunar. Minimalist tasarımı ve tamamen responsive yapısı sayesinde her cihazda şık ve tutarlı bir arayüz sağlar.",
    category: "fullstack, ai",
    images: [
      "./assets/images/project2-chatbot/image1.png",
      "./assets/images/project2-chatbot/image2.png",
      "./assets/images/project2-chatbot/image3.png",
      "./assets/images/project2-chatbot/image4.png",
      "./assets/images/project2-chatbot/image5.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/chatbot", icon: "fab fa-github" }
    ]
  },
  {
    title: "Realtime Speech-to-Speech Project",
    slug: "realtime-sts-project",
    tags: "Node.js, Express.js, WebRTC, OpenAI API",
    description: "Bu proje, OpenAI'nin GPT-4o Realtime API’si kullanılarak geliştirilen, gerçek zamanlı sesli etkileşim sunan bir chatbot sistemidir. Kullanıcı, push-to-talk butonuyla sesli komut verebilir; model yanıtlarını anlık olarak sesli ve metin formatında alabilir. Sistem; fonksiyon çağrıları, değişken tanımı ve dinamik talimat güncellemeleri gibi gelişmiş özellikler sunar. Hava durumu ve döviz kuru gibi sorgular API üzerinden çekilir. Modern arayüz ve WebRTC altyapısıyla hızlı ve etkileşimli bir deneyim sağlar.",
    category: "fullstack, ai",
    images: [
      "./assets/images/project3-realtime-sts-project/image1.png",
      "./assets/images/project3-realtime-sts-project/image2.png",
      "./assets/images/project3-realtime-sts-project/image3.png",
      "./assets/images/project3-realtime-sts-project/image4.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/realtime-sts-project", icon: "fab fa-github" }
    ],
  },
  {
    title: "AI Media Studio",
    slug: "ai-media-studio",
    tags: "Node.js, Express.js, OpenAI API",
    description: "Bu proje, GPT-4o, GPT-4 Vision ve Whisper modelleri kullanılarak geliştirilen, gerçek zamanlı görsel oluşturma ve medya analizi sunan etkileşimli bir uygulamadır. Kullanıcılar detaylı prompt’larla AI görselleri oluşturabilir, görsel ve video dosyalarını analiz ettirerek içerik tabanlı açıklamalar elde edebilir. Sistem; sürükle-bırak desteği, aşamalı görsel oluşturma, transkripsiyon tabanlı video analizi ve görsel indirme gibi özelliklerle modern ve akıcı bir deneyim sunar.",
    category: "fullstack, ai",
    images: [
      "./assets/images/project4-ai-media-studio/image1.png",
      "./assets/images/project4-ai-media-studio/image2.png",
      "./assets/images/project4-ai-media-studio/image3.png",
      "./assets/images/project4-ai-media-studio/image4.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/ai-media-studio", icon: "fab fa-github" }
    ]
  },
  {
    title: "Animal Danger Detector",
    slug: "animal-danger-detector",
    tags: "Python, TensorFlow",
    description: "Bu proje, YAMNet ve Whisper modelleri kullanılarak geliştirilen, gerçek zamanlı ses analiziyle çevresel tehlikeleri algılayan bir güvenlik izleme sistemidir. 16kHz ses dosyalarını analiz ederek tehlikeli sesleri sınıflandırır, tehlike seviyelerine göre anlık alarm tetikler ve detaylı analiz raporları oluşturur. Sistem; eşik değerlerine dayalı alarm mantığı, kategorize edilmiş tehdit seviyeleri, sesli ve görsel uyarı sistemi ile entegre çalışır. JSON ve CSV formatında raporlama ile izlenebilirlik sağlar.",
    category: "backend, ai",
    images: [
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/animal-danger-detector", icon: "fab fa-github" }
    ]
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    tags: "HTML5, CSS3, JavaScript",
    description: "Bu proje, kişisel yazılım projelerini profesyonel ve erişilebilir bir şekilde sergilemek amacıyla geliştirilen dinamik bir portföy sitesidir. Kullanıcı dostu arayüzüyle ziyaretçiler, projeleri kategori bazlı filtreleyebilir, detaylı modal önizlemelerle inceleyebilir ve kaynak kodlarına hızlıca erişebilir. Platform; gelişmiş CSS animasyonları, responsive grid yapısı, erişilebilirlik desteği ve mobil uyumluluk özellikleriyle öne çıkar. Ayrıca modern stil ve özelleştirilebilir JavaScript altyapısıyla sürdürülebilir bir deneyim sunar.",
    category: "frontend",
    images: [
      "./assets/images/project6-portfolio-website/image1.png",
      "./assets/images/project6-portfolio-website/image2.png",
      "./assets/images/project6-portfolio-website/image3.png",
      "./assets/images/project6-portfolio-website/image4.png",
      "./assets/images/project6-portfolio-website/image5.png",
      "./assets/images/project6-portfolio-website/image6.png",
      "./assets/images/project6-portfolio-website/image7.png",
      "./assets/images/project6-portfolio-website/image8.png",
    ],
    links: [
      { url: "#", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/portfolio-website", icon: "fab fa-github" },
    ],
  },
  {
    title: "Simon Game Modern",
    slug: "simon-game-modern",
    tags: "HTML5, CSS3, JavaScript",
    description: "Modern tasarım anlayışıyla geliştirilen bu interaktif Simon hafıza oyunu, oyuncuların rastgele oluşturulan renk dizilerini takip ederek hafıza becerilerini test etmelerini sağlar. Proje; Web Audio API ile ses efektleri, responsive tasarım, klavye kontrolleri ve localStorage ile yüksek skor takibi gibi işlevleri içerir. Gelişmiş CSS animasyonları ve modern JavaScript teknikleri ile akıcı bir oyun deneyimi sunar. Ayrıca, Progressive Web App özellikleriyle tüm cihazlarda yüksek performansla çalışır.",
    category: "frontend, game",
    images: [
      "./assets/images/project7-simon-game-modern/image1.png",
      "./assets/images/project7-simon-game-modern/image2.png",
      "./assets/images/project7-simon-game-modern/image3.png",
    ],
    links: [
      { url: "./projects/project7-simon-game-modern/", icon: "fas fa-play-circle" },
      { url: "https://github.com/omeroztprk/simon-game-modern", icon: "fab fa-github" },
    ],
  }
];