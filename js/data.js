"use strict";

// ===========================================
// HOME SECTION DATA
// ===========================================
window.HOME_DATA = {
  name: "Ömer Öztoprak",
  title: "Welcome to My Portfolio",
  description: "Explore my projects and get to know me better.",
  typewriter: [
    "AI Engineer",
    "Full Stack Developer"
  ]
};

// ===========================================
// ABOUT SECTION DATA
// ===========================================
window.ABOUT_DATA = {
  profileImage: "assets/images/profile.png",
  description: [
    "Hello, my name is Ömer. I am a software developer and a graduate of the Software Engineering program at Beykent University. Throughout my academic journey, I did not limit myself to theoretical knowledge alone; instead, I developed numerous independent projects that enhanced both my technical and practical skills. During this process, I particularly focused on AI-powered full-stack projects, conducting in-depth studies that allowed me to graduate with a strong foundation.",
    "Alongside my education, I completed an internship where I gained valuable experience in developing sustainable and scalable applications. I actively contributed to every stage of project lifecycles, strengthening not only my technical expertise but also my communication skills, while gaining hands-on experience in solving real-world challenges within a professional work environment.",
    "My career goal is to become an AI Engineer specializing in developing AI-driven solutions and full-stack projects. To achieve this, I am committed to continuously improving myself by keeping up with innovative technologies and contributing to the industry through projects that create tangible value."
  ],
  resumeLink: "assets/omeroztoprak-resume.pdf"
};

// ===========================================
// SOCIAL LINKS DATA (Shared between About & Footer)
// ===========================================
window.SOCIAL_DATA = [
  {
    name: "GitHub",
    url: "https://github.com/omeroztprk",
    icon: "fab fa-github",
    class: "icon-github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/omeroztprk",
    icon: "fab fa-linkedin",
    class: "icon-linkedin"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/omeroztprk",
    icon: "fab fa-x-twitter",
    class: "icon-x-twitter"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/omeroztprk",
    icon: "fab fa-instagram",
    class: "icon-instagram"
  }
];

// ===========================================
// SKILLS SECTION DATA
// ===========================================
window.SKILLS_DATA = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "fas fa-code",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored", tooltip: "HTML5" },
      { name: "CSS3", icon: "devicon-css3-plain colored", tooltip: "CSS3" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", tooltip: "JavaScript" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", tooltip: "TypeScript" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", tooltip: "Bootstrap" },
      { name: "Angular", icon: "devicon-angularjs-plain colored", tooltip: "Angular" },
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: "fas fa-database",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored", tooltip: "Python" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", tooltip: "Node.js" },
      { name: "Express", icon: "devicon-express-original", tooltip: "Express" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", tooltip: "MongoDB" },
    ]
  },
  {
    id: "tools",
    title: "Tools & Others",
    icon: "fas fa-tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", tooltip: "Git" },
      { name: "GitHub", icon: "devicon-github-plain colored", tooltip: "GitHub" },
      { name: "Docker", icon: "devicon-docker-plain colored", tooltip: "Docker" },
      { name: "Postman", icon: "devicon-postman-plain colored", tooltip: "Postman" },
    ]
  }
];

// ===========================================
// CONTACT SECTION DATA  
// ===========================================
window.CONTACT_DATA = {
  description: "If you have any questions, you can contact me. I am always open to collaboration and new opportunities. I look forward to hearing from you! See you soon!",
  contacts: [
    {
      id: "email",
      title: "Email",
      icon: "fas fa-envelope",
      type: "link",
      value: "omeroztoprak003@gmail.com",
      href: "mailto:omeroztoprak003@gmail.com"
    },
    {
      id: "location",
      title: "Location",
      icon: "fas fa-map-marker-alt",
      type: "text",
      value: "Istanbul, Turkey"
    }
  ]
};

// ===========================================
// PROJECTS DATA (Categories + Projects Combined)
// ===========================================
window.PROJECTS_DATA = {
  categories: [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
    { key: "game", label: "Game" },
    { key: "mobile", label: "Mobile" },
    { key: "ai", label: "AI" },
  ],

  defaults: {
    project: "assets/images/projects/defaults/project-default.png",
    empty: "assets/images/projects/defaults/empty-default.png"
  },
  projects: [
    {
      id: "admin-panel-dashboard",
      title: "Admin Panel Dashboard",
      description: [
        "Admin Panel Dashboard is a comprehensive full-stack administration platform designed to provide organizations with a scalable, secure, and professional environment for managing users, roles, permissions, categories, and customers. Built with Node.js, Express, and MongoDB on the backend, and Angular on the frontend, it delivers a modular architecture that ensures each core entity is fully manageable through dedicated CRUD components.",
        "Beyond standard management features, the system integrates a customer-focused chatbot assistant, allowing tailored prompts and interactions to be configured directly within the dashboard. Additionally, the application includes detailed audit logs, session tracking, and advanced statistics dashboards, providing full visibility into system health, user activities, and organizational performance.",
        "The platform offers robust authentication mechanisms, including JWT access/refresh tokens and optional two-factor authentication, combined with a flexible role-based access control system. This guarantees fine-grained authorization across all modules, empowering administrators to enforce security and compliance with ease.",
        "With its responsive, card-based UI design, consistent global style guidelines, and efficient list views with pagination, filtering, and sorting, the Admin Panel Dashboard ensures a seamless and intuitive user experience. Its modular, extensible structure makes it adaptable for organizations of varying sizes, offering both sustainability and long-term scalability."
      ],
      cover: "assets/images/projects/admin-panel-dashboard/dashboard.png",
      images: [
        "assets/images/projects/admin-panel-dashboard/login.png",
        "assets/images/projects/admin-panel-dashboard/register.png",
        "assets/images/projects/admin-panel-dashboard/tfa.png",
        "assets/images/projects/admin-panel-dashboard/dashboard.png",
        "assets/images/projects/admin-panel-dashboard/statistics.png",
        "assets/images/projects/admin-panel-dashboard/profile-details.png",
        "assets/images/projects/admin-panel-dashboard/profile-edit.png",
        "assets/images/projects/admin-panel-dashboard/sessions.png",
        "assets/images/projects/admin-panel-dashboard/users.png",
        "assets/images/projects/admin-panel-dashboard/roles.png",
        "assets/images/projects/admin-panel-dashboard/permissions.png",
        "assets/images/projects/admin-panel-dashboard/customers.png",
        "assets/images/projects/admin-panel-dashboard/customer-details.png",
        "assets/images/projects/admin-panel-dashboard/chatbot.png",
        "assets/images/projects/admin-panel-dashboard/audit-logs.png",
        "assets/images/projects/admin-panel-dashboard/categories.png",
      ],
      categories: ["fullstack", "ai"],
      tags: ["Node.js", "Express", "MongoDB", "Angular", "OpenAI API"],
      repo: "https://github.com/omeroztprk/admin-panel-dashboard",
      badges: ["featured"]
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description: [
        "AI Chatbot is a full-stack conversational platform designed to provide users with a seamless and interactive experience through real-time communication. Built with Angular on the frontend and Node.js/Express on the backend, the system combines modern web technologies with OpenAI integration to deliver intelligent and context-aware responses.",
        "The application features a dual interface, allowing users to chat either through the main dashboard or a floating chatbot widget. With its real-time streaming capabilities, messages are delivered instantly, while optional additional prompts enable users to personalize conversations and create richer context for the assistant.",
        "Beyond simple chat, the platform offers secure authentication with JWT tokens, session management, and persistent chat history. These features ensure both security and continuity, giving users a professional and reliable environment to interact with the chatbot across different sessions and devices.",
        "With its modern design, responsive layout, and intuitive user experience, the AI Chatbot provides a visually appealing and highly functional communication tool. Its scalable and modular architecture makes it suitable for integration into larger platforms, offering both flexibility and long-term sustainability."
      ],
      cover: "assets/images/projects/ai-chatbot/chatbot-talk.png",
      images: [
        "assets/images/projects/ai-chatbot/login.png",
        "assets/images/projects/ai-chatbot/register.png",
        "assets/images/projects/ai-chatbot/chatbot.png",
        "assets/images/projects/ai-chatbot/chatbot-talk.png",
        "assets/images/projects/ai-chatbot/chatbot-talk1.png",
        "assets/images/projects/ai-chatbot/chatbot-floating.png",
        "assets/images/projects/ai-chatbot/n8n.png",
      ],
      categories: ["fullstack", "ai"],
      tags: ["Node.js", "Express", "MongoDB", "Angular", "OpenAI API"],
      repo: "https://github.com/omeroztprk/ai-chatbot",
    },
    {
      id: "realtime-sts-bot",
      title: "Realtime Speech-to-Speech Bot",
      description: [
        "Realtime Speech-to-Speech Bot is an advanced conversation platform that leverages OpenAI's cutting-edge Realtime API to provide seamless voice interactions. Built with vanilla JavaScript on the frontend and Node.js/Express on the backend, the application delivers real-time audio processing with WebRTC technology for ultra-low latency communication.",
        "The platform features an intuitive push-to-talk interface with multiple voice options, allowing users to select from eight different AI personalities including Alloy, Ash, Ballad, Coral, Echo, Sage, Shimmer, and Verse. Advanced voice activity detection automatically manages conversation flow, while users can customize system prompts and utilize dynamic variables for personalized interactions.",
        "Beyond basic voice chat, the system integrates practical tools including real-time weather information and currency exchange rate queries. These function calls are handled seamlessly within conversations, providing users with actionable data without breaking the conversational flow. The application also features comprehensive session management and detailed logging for monitoring system performance.",
        "With its responsive design, real-time audio streaming, and professional WebRTC implementation, the Speech-to-Speech Bot offers a production-ready solution for voice-enabled applications. The modular architecture supports easy extension with additional tools and features, making it suitable for various use cases from personal assistants to business automation platforms."
      ],
      cover: "assets/images/projects/realtime-sts-bot/interface1.png",
      images: [
        "assets/images/projects/realtime-sts-bot/interface.png",
        "assets/images/projects/realtime-sts-bot/voice.png",
        "assets/images/projects/realtime-sts-bot/prompt.png",
        "assets/images/projects/realtime-sts-bot/interface1.png",
      ],
      categories: ["fullstack", "ai"],
      tags: ["Node.js", "Express", "WebRTC", "OpenAI API"],
      repo: "https://github.com/omeroztprk/realtime-sts-bot",
    },
    {
      id: "ai-media-studio",
      title: "AI Media Studio",
      description: [
        "AI Media Studio is a comprehensive multimedia analysis and generation platform that combines OpenAI's advanced AI capabilities with intuitive media processing tools. Built with Node.js, Express, and vanilla JavaScript, the application provides users with three powerful modules: real-time image generation, intelligent image analysis, and advanced video content analysis.",
        "The image generation module features real-time streaming with progressive image updates, allowing users to witness the creation process through multiple stages. Users can create detailed prompts and watch as AI transforms their descriptions into high-quality images with downloadable results and session management for seamless workflow continuation.",
        "The intelligent image analysis system leverages GPT-4 Vision to examine uploaded images and generate optimized prompts for AI image generation. This reverse-engineering capability enables users to understand visual elements, composition, and styling techniques, making it perfect for creative inspiration and prompt optimization workflows.",
        "The video analysis module represents the platform's most advanced feature, combining visual frame extraction with audio transcription using Whisper AI. The system analyzes video content holistically, examining both visual elements and spoken content to provide comprehensive insights about scenes, atmosphere, narrative flow, and technical aspects, making it invaluable for content creators and media professionals."
      ],
      cover: "assets/images/projects/ai-media-studio/gen-image.png",
      images: [
        "assets/images/projects/ai-media-studio/gen-image.png",
        "assets/images/projects/ai-media-studio/gen-image1.png",
        "assets/images/projects/ai-media-studio/analyze-image.png",
        "assets/images/projects/ai-media-studio/analyze-image1.png",
        "assets/images/projects/ai-media-studio/analyze-video.png",
        "assets/images/projects/ai-media-studio/analyze-video1.png",
      ],
      categories: ["fullstack", "ai"],
      tags: ["Node.js", "Express", "FFmpeg", "OpenAI API"],
      repo: "https://github.com/omeroztprk/ai-media-studio",
    },
    {
      id: "covid19-dashboard",
      title: "COVID-19 Dashboard",
      description: [
        "COVID-19 Dashboard is a data engineering project that ingests global time-series case data into Elasticsearch and visualizes it in Kibana. The pipeline fetches the official Johns Hopkins CSSE dataset, normalizes it, and indexes geospatial documents for fast querying and mapping.",
        "Built with Python and Pandas, the processor melts the wide CSV into a tidy format, parses dates, fills missing province/state values, and enriches each record with a geo_point field for accurate geospatial visualizations. The Elasticsearch mapping is created programmatically to ensure proper types and efficient indexing.",
        "A robust loader uses the official Elasticsearch Python client and bulk helpers for high-throughput ingestion with progress feedback and verification via index counts. The setup includes a Docker Compose stack for one-click local development with Elasticsearch and Kibana.",
        "With Kibana, users can explore trends over time, filter by country or region, and build maps and dashboards that provide real-time insights into the spread and intensity of confirmed cases."
      ],
      cover: "assets/images/projects/covid19-dashboard/charts.png",
      images: [
        "assets/images/projects/covid19-dashboard/charts.png",
        "assets/images/projects/covid19-dashboard/charts1.png",
      ],
      categories: ["backend"],
      tags: ["Python", "Elasticsearch", "Kibana", "Docker"],
      repo: "https://github.com/omeroztprk/covid19-dashboard",
      badges: []
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: [
        "This project is a comprehensive portfolio website developed to present personal software projects in a professional and accessible way. With a strong focus on user experience, the design emphasizes simplicity, clarity, and interactivity, creating an interface that feels both modern and intuitive.",
        "Visitors can easily explore projects through a category-based filtering system and gain quick access to detailed previews via interactive modals. Each project showcase includes visuals, descriptions, and technical information, while direct links to source code allow seamless access to repositories on GitHub or other platforms.",
        "The platform delivers a smooth experience across all environments thanks to advanced CSS animations, a responsive grid layout, and full compliance with accessibility standards. Its design achieves visual harmony through a carefully curated color palette, typography, and iconography, resulting in a minimal yet powerful aesthetic.",
        "On the backend, a customizable and modular JavaScript architecture enables effortless addition and management of new projects. This structure makes content updates more practical while ensuring that the portfolio remains continuously fresh, scalable, and sustainable."
      ],
      cover: "assets/images/projects/portfolio-website/home.png",
      images: [
        "assets/images/projects/portfolio-website/home.png",
        "assets/images/projects/portfolio-website/about.png",
        "assets/images/projects/portfolio-website/skills.png",
        "assets/images/projects/portfolio-website/projects.png",
        "assets/images/projects/portfolio-website/project-details.png",
        "assets/images/projects/portfolio-website/contact.png",
      ],
      categories: ["frontend"],
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://omeroztprk.github.io",
      repo: "https://github.com/omeroztprk/portfolio-website",
      badges: []
    }
  ]
};