import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

interface NavItem {
  id: number;
  icon: string;
  title: string;
  url: string;
  isActive: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private languageService: LanguageService) { }

  private navListEn: NavItem[] = [
    {
      id: 1,
      icon: "bx bx-home-alt",
      title: "Home",
      url: "/home",
      isActive: true,
    },
    {
      id: 2,
      icon: "bx bx-user",
      title: "About",
      url: "/about",
      isActive: false
    },
    {
      id: 3,
      icon: "bx bx-detail",
      title: "Resume",
      url: "/resume",
      isActive: false
    },
    {
      id: 4,
      icon: "bx bx-briefcase",
      title: "Portfolio",
      url: "/portfolio",
      isActive: false
    },
    {
      id: 5,
      icon: "bx bx-envelope",
      title: "Contact",
      url: "/contact",
      isActive: false
    }
  ]
  private navListFr: NavItem[] = [
    {
      id: 1,
      icon: "bx bx-home-alt",
      title: "Accueil",
      url: "/home",
      isActive: true,
    },
    {
      id: 2,
      icon: "bx bx-user",
      title: "À propos",
      url: "/about",
      isActive: false
    },
    {
      id: 3,
      icon: "bx bx-detail",
      title: "CV",
      url: "/resume",
      isActive: false
    },
    {
      id: 4,
      icon: "bx bx-briefcase",
      title: "Portfolio",
      url: "/portfolio",
      isActive: false
    },
    {
      id: 5,
      icon: "bx bx-envelope",
      title: "Contact",
      url: "/contact",
      isActive: false
    }
  ];

  private profileDataFr = {
    hello: "👋 Bienvenue, Je suis",
    name: "Josue Ouedraogo",
    profession: "Développeur Fullstack",
    description: "Ingénieur en informatique, passionné par la digitalisation, je mets mes compétences au service de l'innovation. Mon objectif ? Transformer les défis actuels en solutions numériques simples et performantes, adaptées aux besoins de chaque entreprise.",
    cv: {
      label: "Télécharger le CV",
      url: "./images/cv_josue_ouedraogo.pdf"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "https://github.com/Panagnimba/"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "https://www.linkedin.com/in/panagnimba-josue-ouedraogo/"
      }
    ]
  }
  private profileDataEn = {
    hello: "👋 Welcome, I am",
    name: "Joshua Ouedraogo",
    profession: "Fullstack Developer",
    description: "Computer engineer, passionate about digitalization, I leverage my skills to drive innovation. My goal? To transform current challenges into simple and efficient digital solutions, tailored to the unique needs of each business.",
    cv: {
      label: "Download CV",
      url: "./images/cv_josue_ouedraogo.pdf"
    },
    social_links: [
      {
        platform: "Github",
        icon: "bx bxl-github",
        url: "https://github.com/Panagnimba/"
      },
      {
        platform: "LinkedIn",
        icon: "bx bxl-linkedin",
        url: "https://www.linkedin.com/in/panagnimba-josue-ouedraogo/"
      }
    ]
  }

  // ------------------- ABOUT ME -------------------------------
  private aboutDataEn = {
    imgBox: {
      src: "./images/josue_ouedraogo.png",
      alt: ""
    }
    ,
    info: {
      title: "About me",
      profession: "Fullstack Developer",
      description: "Computer engineer, passionate about digitalization, I leverage my skills to drive innovation. My goal? To transform current challenges into simple and efficient digital solutions, tailored to the unique needs of each business. Throughout my career, I’ve had the opportunity to work on real-world projects, such as the VinoTicket ticketing platform, as well as Chrome extensions and mobile applications, which have helped me strengthen my expertise in both web and mobile development. My skills also include managing relational and non-relational databases (SQL, Oracle, MongoDB), as well as technologies such as Node.js, React.js, Angular, Java, Nuxt.js, React Native, and Docker...",
      btn: {
        text: "View more",
        url: "https://github.com/Panagnimba/"
      }
    }
  }
  private aboutDataFr = {
    imgBox: {
      src: "./images/josue_ouedraogo.png",
      alt: ""
    }
    ,
    info: {
      title: "A propos de moi",
      profession: "Développeur Fullstack",
      description: "Ingénieur en informatique, passionné par la digitalisation, je mets mes compétences au service de l'innovation. Mon objectif ? Transformer les défis actuels en solutions numériques simples et performantes, adaptées aux besoins de chaque entreprise. Au cours de mon parcours, j'ai eu l'opportunité de travailler sur des projets concrets, tels que la plateforme de billetterie VinoTicket, ainsi que des extensions Chrome et des applications mobiles, ce qui m'a permis de renforcer mon expertise en développement web et mobile. Mes compétences incluent également la gestion de bases de données relationnelles et non relationnelles (SQL, Oracle, MongoDB), ainsi que des technologies telles que Node.js, React.js, Angular,Java,Nuxt.js, React Native, Docker...",
      btn: {
        text: "En savoir plus",
        url: "https://github.com/Panagnimba/"
      }
    }
  }

  //----------- RESUME DATA ----------------------------------
  private tabsFr = [
    {
      id: 0,
      title: "Éducation",
      isActive: true,
    },
    {
      id: 1,
      title: "Compétences",
    },
    {
      id: 2,
      title: "Expérience",
    },
  ]
  private tabsEn = [
    {
      id: 0,
      title: "Education",
      isActive: true
    },
    {
      id: 1,
      title: "Skills",
    },
    {
      id: 2,
      title: "Experience",
    },
  ];

  private educationDataEn = [
    {
      "date": "2022 - On going",
      "course": "Computer Engineering",
      "institution": "National Higher School of Computer Science and Systems Analysis (ENSIAS)",
      "description": "Engineering program focused on the convergence of computer science and logistics technologies"
    },
    {
      "date": "2021 - 2022",
      "course": "Professional Bachelor's Degree",
      "institution": "Higher School of Technology Essaouira (ESTE)",
      "description": "Professional Bachelor's Degree in Computer Systems and Software Engineering"
    },
    {
      "date": "2019 - 2021",
      "course": "University Diploma of Technology",
      "institution": "Higher School of Technology Agadir (ESTA)",
      "description": "University Diploma of Technology in Computer Engineering"
    },
    {
      "date": "2018 - 2019",
      "course": "Technological Baccalaureate",
      "institution": "Polytechnic Center for Vocational Training (CPFP)",
      "description": "Technological Baccalaureate in Electronics: Series F2"
    }
  ]
  private educationDataFr = [
    {
      date: "2022 - En cours",
      course: "Ingénieur en Informatique",
      institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
      description: "Formation d'ingénieur axée sur la convergence de l'informatique et des technologies logistiques"
    },
    {
      date: "2021 - 2022",
      course: "Licence Professionnelle",
      institution: "École Supérieure de Technologie Essaouira (ESTE)",
      description: "Licence Professionnelle en Ingénierie des Systèmes Informatiques et Logiciels"
    },
    {
      date: "2019 - 2021",
      course: "Diplôme Universitaire de Technologie",
      institution: "École Supérieure de Technologie Agadir (ESTA)",
      description: "Diplôme Universitaire de Technologie en Génie Informatique"
    },
    {
      date: "2018 - 2019",
      course: "Baccalauréat Technologique",
      institution: "Centre Polytechnique de Formation Professsionnelle (CPFP)",
      description: "Baccalauréat Technologique option Electronique: Série F2"
    }
  ];
  private skillsDataEn = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-css3",
      name: "CSS 3"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      name: "TypeScript"
    },
    {
      icon: "bx bxl-react",
      name: "React"
    },
    {
      icon: "bx bxl-angular",
      name: "Angular"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Vue.js"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Nuxt.js"
    },
    {
      icon: "bx bxl-react",
      name: "React Native"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    },
    {
      icon: "bx bxl-docker",
      name: "Docker"
    },
    {
      icon: "bx bxl-tailwind-css",
      name: "Tailwind CSS"
    },
    {
      icon: "bx bxl-git",
      name: "Git"
    },
    {
      icon: "bx bxl-github",
      name: "GitHub"
    },
    {
      icon: "bx bx-data",
      name: "SQL"
    },
    {
      icon: "bx bxs-data",
      name: "Oracle"
    },
    {
      icon: "bx bxl-mongodb",
      name: "MongoDB"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C"
    },
    {
      icon: "bx bxl-java",
      name: "Java"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C++"
    },
    {
      icon: "bx bxl-adobe",
      name: "Adobe XD"
    }
  ];
  private skillsDataFr = [
    {
      icon: "bx bxl-html5",
      name: "HTML 5"
    },
    {
      icon: "bx bxl-css3",
      name: "CSS 3"
    },
    {
      icon: "bx bxl-javascript",
      name: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      name: "TypeScript"
    },
    {
      icon: "bx bxl-react",
      name: "React"
    },
    {
      icon: "bx bxl-angular",
      name: "Angular"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Vue.js"
    },
    {
      icon: "bx bxl-vuejs",
      name: "Nuxt.js"
    },
    {
      icon: "bx bxl-react",
      name: "React Native"
    },
    {
      icon: "bx bxl-nodejs",
      name: "Node.js"
    },
    {
      icon: "bx bxl-docker",
      name: "Docker"
    },
    {
      icon: "bx bxl-tailwind-css",
      name: "Tailwind CSS"
    },
    {
      icon: "bx bxl-git",
      name: "Git"
    },
    {
      icon: "bx bxl-github",
      name: "GitHub"
    },
    {
      icon: "bx bx-data",
      name: "SQL"
    },
    {
      icon: "bx bxs-data",
      name: "Oracle"
    },
    {
      icon: "bx bxl-mongodb",
      name: "MongoDB"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C"
    },
    {
      icon: "bx bxl-java",
      name: "Java"
    },
    {
      icon: "bx bxl-c-plus-plus",
      name: "C++"
    },
    {
      icon: "bx bxl-adobe",
      name: "Adobe XD"
    }
  ];
  private experienceDataEn = [
    {
      date: "Oct. 2024",
      position: "Text Justification API",
      company: "Tictactrip",
      description: "This text justification API enables users to format raw text into fully justified lines. Security is maintained through a unique token-based authentication system, with a daily usage limit of 80,000 words."
    },
    {
      date: "Juil. 2024 - Sept. 2024",
      position: "ERP (Odoo) consultant",
      company: "Portnet",
      description: "Enhanced Odoo's ERP e-Learning module with BigBlueButton integration during my internship at Portnet, improving online training with video conferencing tools."
    },
    {
      date:"Juin 2023 - Sept 2023",
      position:"Full stack mobile developper",
      company:"Alsaba",
      description:"ALSABA MONEY is a mobile banking application that enables users to carry out financial transactions easily and securely using their phone number."
    },
    {
      date: "Juin 2023 - Sept. 2024",
      position: "Chrome extension developer",
      company: "AIBOOSTEZ",
      description: "AIBOOSTER is a Chrome extension that helps businesses and entrepreneursto automatically generate comments on social networks (Linkedin, X, Facebook , instagram, youtube,...)"
    },
    {
      date:"Juin 2022 - Août 2024",
      position:"Mobile Application Developer",
      company:"VinoTicket",
      description:"Vinoticket is a ticketing platform that allows users to purchase event tickets: sports, cinema, concerts, and festivals, directly from their phone. It supports mobile payment methods like Orange Money and Coris Money."
    },
    {
      date:"Avr. 2022 - Juil. 2022",
      position:"Full stack web developper",
      company:"Storeino",
      description:"Development of an e-commerce platform for restaurants customizable according to the visual identity and brand image of the owner."
    }
  ];
  private experienceDataFr = [
    {
      "date": "Oct. 2024",
      "position": "API de justification de texte",
      "company": "Tictactrip",
      "description": "Cette API de justification de texte permet aux utilisateurs de formater du texte brut en lignes entièrement justifiées. La sécurité est assurée grâce à un système d'authentification par jeton unique, avec une limite quotidienne de 80 000 mots."
    },
    {
      "date": "Juil. 2024 - Sept. 2024",
      "position": "Consultant ERP (Odoo)",
      "company": "Portnet",
      "description": "Amélioration du module e-learning d'ERP Odoo avec l'intégration de BigBlueButton durant mon stage chez Portnet, optimisant la formation en ligne avec des outils de visioconférence."
    },
    {
      "date": "Juin 2023 - Sept. 2023",
      "position": "Développeur mobile full stack",
      "company": "Alsaba",
      "description": "ALSABA MONEY est une application de Mobile Banking qui permet aux utilisateurs de réaliser des transactions financières de manière simple et sécurisée en utilisant leur numéro de téléphone."
    },
    {
      "date": "Juin 2023 - Sept. 2024",
      "position": "Développeur d'extensions Chrome",
      "company": "AIBOOSTEZ",
      "description": "AIBOOSTER est une extension Chrome qui aide les entreprises et les entrepreneurs à générer automatiquement des commentaires sur les réseaux sociaux (LinkedIn, X, Facebook, Instagram, YouTube, etc.)."
    },
    {
      "date": "Juin 2022 - Août 2024",
      "position": "Développeur d'applications mobiles",
      "company": "VinoTicket",
      "description": "Vinoticket est une plateforme de billetterie permettant aux utilisateurs d'acheter des billets pour des événements : sport, cinéma, concerts, festivals, directement depuis leur téléphone. Elle prend en charge les méthodes de paiement mobile telles que Orange Money et Coris Money."
    },
    {
      "date": "Avr. 2022 - Juil. 2022",
      "position": "Développeur web full stack",
      "company": "Storeino",
      "description": "Développement d'une plateforme de e-commerce pour restaurants, personnalisable selon l'identité visuelle et l'image de marque du propriétaire."
    }
]

  // ---------- PORTFOLIO -------------------

  private portfolioTabsFr = [
    {
      id: 0,
      title: "Mes Travaux",
      isActive: true,
    },
    {
      id: 1,
      title: "Mes Services",
    },

  ]
  private portfolioTabsEn = [
    {
      id: 0,
      title: "My Works",
      isActive: true,
    },
    {
      id: 1,
      title: "My Services",
    }
  ];
  private projectsEn = [
    {
      title: "Vinoticket platform",
      description: "Vinoticket is a ticketing platform that allows users to purchase event tickets: sports, cinema, concerts, and festivals, directly from their phone. It supports mobile payment methods like Orange Money and Coris Money.",
      technologies: ["NuxtJs", "Tailwind css", "NodeJs", "Abobe XD"],
      image: "./images/projects/vinoticket.png",
      links: {
        preview: {
          url: "https://www.vinoticket.com/",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/Panagnimba/",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "Chrome extension",
      description: "AIBOOSTER is a Chrome extension that helps businesses and entrepreneursto automatically generate comments on social networks (Linkedin, X, Facebook , instagram, youtube,...)",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      image: "./images/projects/aiboostez.png",
      links: {
        preview: {
          url: "https://aiboostez.com/",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/Panagnimba/",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "ALSABA MONEY",
      description: "ALSABA MONEY is a mobile banking application that enables users to carry out financial transactions easily and securely using their phone number.",
      technologies: ["React native","NodeJs"],
      image: "./images/projects/alsaba.png",
      links: {
        preview: {
          url: "#",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/Panagnimba/",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
    {
      title: "E-commerce Platform for Restaurants",
      description: "Development of an e-commerce platform for restaurants customizable according to the visual identity and brand image of the owner",
      technologies: ["NuxtJs","NodeJs", "Tailwind css"],
      image: "./images/projects/storeino.png",
      links: {
        preview: {
          url: "#",
          icon: "bx bx-left-arrow-alt",
          tooltip: "Preview"
        },
        github: {
          url: "https://github.com/Panagnimba/",
          icon: "bx bxl-github",
          tooltip: "GitHub repository"
        }
      }
    },
  ]
  private projectsFr = [
    {
      "title": "Plateforme Vinoticket",
      "description": "Vinoticket est une plateforme de billetterie permettant aux utilisateurs d'acheter des billets pour des événements : sport, cinéma, concerts, et festivals, directement depuis leur téléphone. Elle prend en charge les méthodes de paiement mobile telles que Orange Money et Coris Money.",
      "technologies": ["NuxtJs", "Tailwind css", "NodeJs", "Adobe XD"],
      "image": "./images/projects/vinoticket.png",
      "links": {
        "preview": {
          "url": "https://www.vinoticket.com/",
          "icon": "bx bx-left-arrow-alt",
          "tooltip": "Aperçu"
        },
        "github": {
          "url": "https://github.com/Panagnimba/",
          "icon": "bx bxl-github",
          "tooltip": "Dépôt GitHub"
        }
      }
    },
    {
      "title": "Extension Chrome",
      "description": "AIBOOSTER est une extension Chrome qui aide les entreprises et les entrepreneurs à générer automatiquement des commentaires sur les réseaux sociaux (LinkedIn, X, Facebook, Instagram, YouTube, etc.).",
      "technologies": ["Node.js", "Express", "MongoDB", "React"],
      "image": "./images/projects/aiboostez.png",
      "links": {
        "preview": {
          "url": "https://aiboostez.com/",
          "icon": "bx bx-left-arrow-alt",
          "tooltip": "Aperçu"
        },
        "github": {
          "url": "https://github.com/Panagnimba/",
          "icon": "bx bxl-github",
          "tooltip": "Dépôt GitHub"
        }
      }
    },
    {
      "title": "ALSABA MONEY",
      "description": "ALSABA MONEY est une application de mobile banking qui permet aux utilisateurs d'effectuer des transactions financières de manière simple et sécurisée en utilisant leur numéro de téléphone.",
      "technologies": ["React Native", "NodeJs"],
      "image": "./images/projects/alsaba.png",
      "links": {
        "preview": {
          "url": "#",
          "icon": "bx bx-left-arrow-alt",
          "tooltip": "Aperçu"
        },
        "github": {
          "url": "https://github.com/Panagnimba/",
          "icon": "bx bxl-github",
          "tooltip": "Dépôt GitHub"
        }
      }
    },
    {
      "title": "Plateforme E-commerce pour Restaurants",
      "description": "Développement d'une plateforme e-commerce pour les restaurants, personnalisable selon l'identité visuelle et l'image de marque du propriétaire",
      "technologies": ["NuxtJs", "NodeJs", "Tailwind css"],
      "image": "./images/projects/storeino.png",
      "links": {
        "preview": {
          "url": "#",
          "icon": "bx bx-left-arrow-alt",
          "tooltip": "Aperçu"
        },
        "github": {
          "url": "https://github.com/Panagnimba/",
          "icon": "bx bxl-github",
          "tooltip": "Dépôt GitHub"
        }
      }
    }    
]


  // ---------------- Contact ------------------

  contactEn = {
    "title": "Let's work together",
    "fields": [
      {
        "label": "Full Name",
        "type": "text",
        "name": "fullName",
        "placeholder": "Full name",
        "required": true
      },
      {
        "label": "Email Address",
        "type": "email",
        "name": "email",
        "placeholder": "Email address",
        "required": true
      },
      {
        "label": "Phone Number",
        "type": "text",
        "name": "phoneNumber",
        "placeholder": "Phone number",
        "required": true
      },
      {
        "label": "Email Subject",
        "type": "text",
        "name": "emailSubject",
        "placeholder": "Email subject",
        "required": true
      }
    ],
    "submitButton": {
      "text": "Send message",
    }
  }

  contactFr = {
    "title": "Travaillons ensemble",
    "fields": [
      {
        "label": "Nom complet",
        "type": "text",
        "name": "fullName",
        "placeholder": "Nom complet",
        "required": true
      },
      {
        "label": "Adresse e-mail",
        "type": "email",
        "name": "email",
        "placeholder": "Adresse e-mail",
        "required": true
      },
      {
        "label": "Numéro de téléphone",
        "type": "text",
        "name": "phoneNumber",
        "placeholder": "Numéro de téléphone",
        "required": true
      },
      {
        "label": "Objet de l'e-mail",
        "type": "text",
        "name": "emailSubject",
        "placeholder": "Objet de l'e-mail",
        "required": true
      },
    ],
    "submitButton": {
      "text": "Envoyer le message",
      "class": "btn"
    }
  }

  // Get the navList based on the selected language
  get navList() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.navListFr : this.navListEn;
  }

  get profileData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.profileDataFr : this.profileDataEn;
  }

  get aboutData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.aboutDataFr : this.aboutDataEn;
  }
  //------------------ RESUME DATA ----------------------
  get tabs() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.tabsFr : this.tabsEn;
  }
  get experienceData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.experienceDataFr : this.experienceDataEn;
  }
  get skillsData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.skillsDataFr : this.skillsDataEn;
  }
  get educationData() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.educationDataFr : this.educationDataEn;
  }
  // ----------- END RESUME ----------------------------

  get portfolioTabs() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.portfolioTabsFr : this.portfolioTabsEn;
  }
  get projects() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.projectsFr : this.projectsEn;
  }

  //------------ Contact data ----------------------

  get contactInfo() {
    return this.languageService.getCurrentLanguage() === 'fr' ? this.contactFr : this.contactEn;
  }
}