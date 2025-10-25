export const languages: Record<'fr' | 'en', { name: string; flag: string }> = {
  fr: { name: 'Français', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'fr';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      polkadotNetworkPulse: {
        title: 'Polkadot Network Pulse',
        description: "Un tableau de bord en temps réel pour surveiller et visualiser le réseau Polkadot avec PAPI.",
        imageAltText: "Capture d'écran du tableau de bord Polkadot Network Pulse",
        categoryText: 'Dashboard Blockchain Analytics',
        dateText: 'Octobre 2025',
        detailedDescription:
          "Un tableau de bord blockchain moderne qui démontre la puissance de PAPI pour interagir avec le réseau Polkadot. L'application offre une surveillance en temps réel des blocs, des métriques de réseau et une visualisation interactive des données blockchain.",
        keyFeatures: {
          realTimeUpdates: {
            title: 'Mises à jour en temps réel',
            description: 'Flux de blocs en direct avec des animations fluides et des mises à jour instantanées.',
          },
          blockchainMetrics: {
            title: 'Métriques blockchain',
            description: 'Surveillance des numéros de blocs finalisés et calcul du temps moyen des blocs.',
          },
          websocketIntegration: {
            title: 'Intégration WebSocket',
            description: 'Connexion WebSocket persistante avec gestion automatique de la reconnexion.',
          },
          reactiveSubscriptions: {
            title: 'Souscriptions réactives',
            description: 'Utilisation des observables pour une gestion efficace des flux de données en temps réel.',
          },
          performanceOptimized: {
            title: 'Optimisation des performances',
            description: 'Bundle size réduit et gestion efficace de la mémoire pour une expérience fluide.',
          },
        },
        challenges:
          "Le plus grand défi a été de gérer efficacement les mises à jour fréquentes des données blockchain tout en maintenant une interface utilisateur réactive. L'implémentation des reconnexions automatiques et la gestion de l'état de connexion ont également nécessité une attention particulière.",
        learnings: "Ce projet m'a permis de maîtriser PAPI et les concepts de programmation réactive. J'ai appris l'importance de la gestion efficace des connexions WebSocket et des stratégies d'optimisation des performances pour les applications en temps réel.",
      },
      web3wayafrica: {
        title: 'Web3way Africa Official Website',
        description: "Plateforme communautaire pour connecter et éduquer les développeurs blockchain en Afrique.",
        imageAltText: "Capture d'écran du site Web3way Africa",
        categoryText: 'Plateforme Communautaire',
        dateText: 'Septembre 2025',
        detailedDescription:
          "Une plateforme communautaire dynamique conçue pour connecter, éduquer et soutenir les développeurs blockchain à travers l'Afrique. Le site sert de hub central pour les ressources éducatives, les événements et les opportunités de networking dans l'écosystème Web3.",
        keyFeatures: {
          communityEngagement: {
            title: 'Engagement communautaire',
            description: 'Forums de discussion et espaces de collaboration pour les développeurs.',
          },
          educationalResources: {
            title: 'Ressources éducatives',
            description: 'Bibliothèque de contenus éducatifs sur la blockchain et le développement Web3.',
          },
          eventManagement: {
            title: 'Gestion des événements',
            description: 'Système intégré pour organiser et gérer les événements communautaires.',
          },
        },
        challenges:
          "La création d'une plateforme accessible et engageante pour une communauté diverse, tout en assurant des performances optimales et une expérience utilisateur cohérente.",
        learnings: "L'importance de la conception centrée sur l'utilisateur et de l'architecture évolutive pour les plateformes communautaires.",
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces utilisateur interactives et performantes.",
      },
      backendDevelopment: {
        title: 'Développement Backend',
        description: "Construction de logiques serveur robustes et d'API.",
      },
      uiUxDesign: {
        title: 'Design UI/UX',
        description:
          "Conception d'expériences utilisateur intuitives et esthétiques.",
      },
      blockchainDevelopment: {
        title: 'Développement Blockchain',
        description:
          "Conception et développement d'applications décentralisées (dApps), smart contracts et intégrations Web3.",
      },
      database: {
        title: 'Bases de Données',
        description: 'Conception et gestion de bases de données relationnelles et NoSQL.',
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatisation des processus de développement et de déploiement.',
      },
    },
    site: {
      title: 'Mon Super Template',
      description:
        'Un template Astro moderne et performant pour démarrer votre projet.',
    },
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      experience: 'Experience',
      gallery: 'Galerie',
      community: 'Communauté',
      contact: 'Contact',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    homePage: {
      pageTitle: 'Accueil |  Développeur FullStack',
      pageDescription:
        "Bienvenue sur le portfolio de YOUR_NAME, développeur FullStack passionné par la création d'expériences web innovantes.",
      heroGreeting: "Salut, c'est Cheryl",
      heroSubtitlePart1: 'Développeur FullStack',
      heroSubtitlePart2: 'Blockchain • Rédactrice technique',
      heroIntroduction:
        "Je me spécialise dans le développement full-stack, créant des interfaces utilisateur responsives et dynamiques avec des systèmes backend efficaces. En tant que développeuse blockchain, je me concentre sur la création d'applications décentralisées (dApps) et de smart contracts.",
      heroViewWorkButton: 'Mes réalisations',
      heroContactButton: 'Me contacter',
      heroImageAlt:
        'Illustration représentant YOUR_NAME ou un concept de développement',
      featuredProjectsTitle: '2 derniers projets',
      featuredProjectsDescription:
        "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
      projectCardViewProject: 'Voir le projet',
      projectCardViewCode: 'Voir le code',
      imageNotAvailable: 'Image bientôt disponible',
      mySkillsTitle: 'Mes Compétences',
      mySkillsDescription:
        "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
    },
    blogPage: {
      pageTitle: 'Mon Blog Technique',
      pageDescription:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      title: 'Mon Blog Technique',
      description:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      comingSoon:
        'Les articles de blog apparaîtront ici bientôt. Revenez plus tard !',
      heroImageAlt: "Image de couverture pour l'article : ",
      publishedOn: 'Publié le : ',
      readMore: 'Lire la suite',
      readingTimeSuffix: 'min de lecture',
      searchPlaceholder: 'Rechercher des articles...',
      filterByTagButtonLabel: 'Filtrer par tag',
      noTagFound: 'Aucun tag trouvé.',
      selectTagCommandPlaceholder: 'Rechercher un tag...',
      allTagsLabel: 'Tous les tags',
      noPostsFound: 'Aucun article trouvé.',
    },
    blogPost: {
      publishedOn: 'Publié le : ',
      updatedOn: 'Mis à jour le : ',
      heroImageAlt: "Image de couverture pour l'article : ",
      backToList: 'Retour à la liste des articles',
      readingTimeSuffix: 'min de lecture',
      relatedPostsTitle: 'Je te recommande aussi :',
      readMore: 'Lire la suite',
      editOnGithub: 'Proposer une modification sur GitHub',
    },
    toc: {
      title: "Sommaire de l'article",
    },
    contactPage: {
      pageTitle: 'Me Contacter',
      pageDescription:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
      title: 'Me Contacter',
      description:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

      formTitle: 'Envoyer un message',
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Envoyer',
      firstNamePlaceholder: 'Ton prénom',

      lastNamePlaceholder: 'Ton nom de famille',
      emailPlaceholder: 'Ton adresse e-mail',
      messagePlaceholder: 'Ton message ici...',
      calendarTitle: 'Planifier un RDV',
      calendarDescription:
        'Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.',
      calendarButtonLabel: 'Voir mes disponibilités',
      calendarLinkLabel: 'Voir mon agenda',
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
      orSeparatorText: 'OU',
      toastSuccessMessageSent: 'Message envoyé avec succès !',
      toastErrorFailedToSend: "Échec de l'envoi du message.",
      toastErrorUnexpected: "Une erreur inattendue s'est produite.",
      toastErrorDetails: "Détails de l'erreur:",
      toastErrorValidationFailed: 'Validation du formulaire échouée.',
    },
    projectDetailPage: {
      backToProjects: 'Retour aux Projets',
      categoryLabel: 'Catégorie :',
      dateLabel: 'Date :',
      aboutTitle: 'À propos de ce projet',
      keyFeaturesTitle: 'Fonctionnalités Clés',
      galleryTitle: 'Galerie',
      challengesTitle: 'Défis Rencontrés',
      learningsTitle: 'Leçons Apprises',
      visitProjectButton: 'Visiter le Projet',
      viewCodeButton: 'Voir le Code',
    },
    projectsPage: {
      title: 'Mes Projets',
      metaTitle: 'Mes Projets | Portfolio',
      metaDescription: 'Découvrez tous les projets.',
      noProjects: 'Aucun projet à afficher pour le moment.',
      noProjectsDescription:
        "Il semble que vous n'ayez pas encore de projets à afficher.",
    },
    notFoundPage: {
      pageTitle: 'Page Non Trouvée',
      title: 'Oups ! Page Non Trouvée',
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
      homeLink: "Retourner à l'Accueil",
    },

    tipsPage: {
      metaTitle: 'Astuces de Développement',
      metaDescription:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      description:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      title: 'Nos Dernières Astuces',
      noTips: 'Aucune astuce à afficher pour le moment.',
      readTip: "Lire l'astuce",
      backToList: 'Retour à la liste des astuces',
      featuredTips: 'Astuces recommandées',
      allTips: 'Toutes les astuces',
      tipsAvailable: 'astuces disponibles',
      tipAvailable: 'astuce disponible',
      editOnGithub: 'Modifier sur GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      polkadotNetworkPulse: {
        title: 'Polkadot Network Pulse',
        description: 'A real-time dashboard to monitor and visualize the Polkadot network using PAPI.',
        imageAltText: 'Screenshot of the Polkadot Network Pulse dashboard',
        categoryText: 'Blockchain Analytics Dashboard',
        dateText: 'October 2025',
        detailedDescription:
          'A modern blockchain dashboard that showcases the power of PAPI for interacting with the Polkadot network. The application provides real-time block monitoring, network metrics, and interactive blockchain data visualization.',
        keyFeatures: {
          realTimeUpdates: {
            title: 'Real-time Updates',
            description: 'Live block feed with smooth animations and instant updates.',
          },
          blockchainMetrics: {
            title: 'Blockchain Metrics',
            description: 'Monitor finalized block numbers and calculate average block time.',
          },
          websocketIntegration: {
            title: 'WebSocket Integration',
            description: 'Persistent WebSocket connection with automatic reconnection handling.',
          },
          reactiveSubscriptions: {
            title: 'Reactive Subscriptions',
            description: 'Utilizing observables for efficient real-time data stream management.',
          },
          performanceOptimized: {
            title: 'Performance Optimized',
            description: 'Reduced bundle size and efficient memory management for a smooth experience.',
          },
        },
        challenges:
          'The biggest challenge was efficiently handling frequent blockchain data updates while maintaining a responsive user interface. Implementing automatic reconnections and managing connection state also required careful consideration.',
        learnings: 'This project helped me master PAPI and reactive programming concepts. I learned the importance of efficient WebSocket connection management and performance optimization strategies for real-time applications.',
      },
      web3wayafrica: {
        title: 'Web3way Africa Official Website',
        description: 'Community platform connecting and educating blockchain developers across Africa.',
        imageAltText: 'Screenshot of Web3way Africa website',
        categoryText: 'Community Platform',
        dateText: 'September 2025',
        detailedDescription:
          'A dynamic community platform designed to connect, educate, and support blockchain developers across Africa. The site serves as a central hub for educational resources, events, and networking opportunities in the Web3 ecosystem.',
        keyFeatures: {
          communityEngagement: {
            title: 'Community Engagement',
            description: 'Discussion forums and collaboration spaces for developers.',
          },
          educationalResources: {
            title: 'Educational Resources',
            description: 'Library of educational content on blockchain and Web3 development.',
          },
          eventManagement: {
            title: 'Event Management',
            description: 'Integrated system for organizing and managing community events.',
          },
        },
        challenges:
          'Creating an accessible and engaging platform for a diverse community while ensuring optimal performance and consistent user experience.',
        learnings: 'The importance of user-centered design and scalable architecture for community platforms.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      blockchainDevelopment: {
        title: 'Blockchain Development',
        description:
          'Designing and building decentralized applications (dApps), smart contracts and Web3 integrations.',
      },
      database: {
        title: 'Databases',
        description: 'Designing and managing relational and NoSQL databases.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'My Awesome Template',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      gallery: 'Gallery',
      community: 'Community',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | YOUR_NAME - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm Cheryl.",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'Blockchain • Technical Writer',
      heroIntroduction:
        'I specialize in full-stack development, creating responsive and dynamic user interfaces with efficient backend systems. As a blockchain developer, I focus on building decentralized applications (dApps) and smart contracts.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '2 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | YOUR_NAME's Portfolio",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | YOUR_NAME',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
