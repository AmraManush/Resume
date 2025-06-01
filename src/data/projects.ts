import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Bravoori",
    href: "/projects",
    tags: ["ReactNative", "Expo", "Firebase", "Google Play Store"],
    image: {
      LIGHT: "/images/projects/bravori.webp",
      DARK: "/images/projects/bravori.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Bravori",
    favicon: "/images/projects/logos/bravori.ico",
    imageUrl: [
      "/images/projects/bravori.webp",
      "/images/projects/bravori.webp",
    ],
    description:
      "Recently, I fixed many bugs in an application called Bravori, which is built on React Native. This application is designed for a music school where children learn about music.",
    sourceCodeHref: "https://github.com/arifulatwork/Music-School",
    liveWebsiteHref: "https://github.com/arifulatwork/Music-School",
  },
  {
    name: "Unique Class Managment System",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/unique.webp",
      "/images/projects/unique.webp",
      "/images/projects/unique.webp",
    ],
    description:
      "This project was a part of our Application Development course, completed with a team of four members under the guidance of Dr. Ahmad Fadhil Yusof during my university years. It provided valuable experience in collaborative software development and project management.",
    sourceCodeHref: "https://shorturl.at/bm7ng",
    liveWebsiteHref: "https://shorturl.at/bm7ng",
  },
  {
    name: "Addar Beauty Application",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/adar.webp",
      "/images/projects/adar.webp",
      "/images/projects/adar.webp",
      "/images/projects/adar.webp",
      "/images/projects/adar.webp",
    ],
    description:
      "In September 2022, I was assigned to a freelance project with Rubysoft Sdn Bhd to develop an application called Addar Beauty. During this project, I created numerous features for the app and authored a comprehensive user manual for primary users.",
    sourceCodeHref: "https://addarapp.com/docs/addar-manual-110.pdf",
    liveWebsiteHref: "https://addarapp.com/docs/addar-manual-110.pdf",
  },
  {
    name: "Portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "This project aimed to facilitate the easy retrieval of lost items through the use of Servlets, JSP, Maven, and MySQL. It involved developing a robust web application with features like item registration, search functionalities, and user authentication to streamline the process effectively",
    sourceCodeHref: "https://github.com/AmraManush/Resume",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
  {
    name: "FindITJobs Web Application",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/job.webp",
      "/images/projects/job.webp",
      "/images/projects/job.webp",
      "/images/projects/job.webp",
    ],
    description:
      "A dynamic job site with an integrated admin panel, built using Laravel. The platform streamlines job postings, applications, and user management, providing a seamless experience for both job seekers and employers. The admi n panel enables efficient management of listings, user accounts, and site settings, ensuring smooth operation and scalability.",
    sourceCodeHref: "https://github.com/arifulatwork/FindITJobs",
    liveWebsiteHref: "https://github.com/arifulatwork/FindITJobs",
  },
  {
    name: "Classified Marketplace Application",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/market.webp",
      "/images/projects/market.webp",
      "/images/projects/market.webp",
      "/images/projects/market.webp",
    ],
    description:
      "I am developing a feature-rich classified marketplace using Laravel and MySQL to enable smooth buying and selling experiences. The platform includes essential features such as user authentication, listing management, advanced search and filter options, and secure transaction handling. My focus is on ensuring scalability, optimizing performance, and designing a user-friendly interface to enhance the overall user experience. The marketplace is continuously updated with modern designs and advanced functionalities to improve usability and increase user engagement.",
    sourceCodeHref: "https://github.com/arifulatwork/FindITJobs",
    liveWebsiteHref: "https://github.com/arifulatwork/FindITJobs",
  },
  {
    name: "Point-of-sales",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
    ],
    description:
      "I developed a Point-of-Sale (POS) system using PHP, following the MVC architecture to ensure better code organization and maintainability. The system includes key features such as inventory management, sales tracking, user authentication, and comprehensive reporting. It is designed for efficiency and scalability, enabling smooth transactions and supporting streamlined business operations.",
    sourceCodeHref: "https://github.com/arifulatwork/Point-of-sales",
    liveWebsiteHref: "https://github.com/arifulatwork/Point-of-sales",
  },
  {
    name: "Restoran Nasi Lounge",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
      "/images/projects/pos.webp",
    ],
    description:
      "This project is an online food ordering system that simplifies the ordering process for restaurants. It enables customers to order online and allows restaurants to manage promotions, track customer benefits, and improve engagement.",
    sourceCodeHref: "https://shorturl.at/7zJHk",
    liveWebsiteHref: "https://shorturl.at/7zJHk",
  },
  {
    name: "Chatbot - Web Programming Project",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/chat.webp",
      "/images/projects/chat.webp",
      "/images/projects/chat.webp",
      "/images/projects/chat.webp",
    ],
    description:
      "I developed a chatbot application for a web programming course, earning the highest grade in the class. The project featured interactive chatbot functionalities, showcasing my skills in web development and AI-driven conversations. I am currently enhancing the application by incorporating advanced techniques and modern design elements to further improve user experience and overall functionality.",
    sourceCodeHref: "https://github.com/arifulUTM/Chatbot-with-PHP",
    liveWebsiteHref: "https://github.com/arifulUTM/Chatbot-with-PHP",
  },
  {
    name: "Malaysian Research Institute Web Application",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/msri.webp",
      "/images/projects/msri.webp",
      "/images/projects/msri.webp",
      "/images/projects/msri.webp",
    ],
    description:
      "I developed a custom web application for a Malaysian client at TraitQuest using PHP, MySQL, and JavaScript. I focused on creating a dynamic, interactive platform with seamless functionality, optimized performance, and a great user experience. The project was successfully delivered, meeting the client’s requirements and business needs.",
    sourceCodeHref: "https://msri.org.my/",
    liveWebsiteHref: "https://msri.org.my/",
  },
  {
    name: "IPTV Application – Flutter-Based Streaming",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/iptv.webp",
      "/images/projects/iptv.webp",
      "/images/projects/iptv.webp",
      "/images/projects/iptv.webp",
    ],
    description:
      "I developed a custom IPTV app using Flutter to address the issue of unreliable IPTV providers in my country. The app delivers a smooth mobile streaming experience for my household, effectively eliminating buffering and lag. It is optimized for high performance and quality playback, featuring a user-friendly interface that ensures easy navigation and an enhanced viewing experience.",
    sourceCodeHref: "https://github.com/arifulatwork/ArifulStream",
    liveWebsiteHref: "https://github.com/arifulatwork/ArifulStream",
  },
  {
    name: "Covid Care",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/covid.webp",
      "/images/projects/covid.webp",
      "/images/projects/covid.webp",
      "/images/projects/covid.webp",
    ],
    description:
      "My project focused on COVID-19. We developed a website that provides health related tips along with real-time updates on the coronavirus situation around the world. The site also features a chatbot system that offers users helpful health advice related to COVID-19.",
    sourceCodeHref: "https://github.com/arifulUTM/COVID-CARE",
    liveWebsiteHref: "https://github.com/arifulUTM/COVID-CARE",
  },
  {
    name: "Mini Project : Photocopying (Xerox) Machine",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/xerox.webp",
      "/images/projects/xerox.webp",
      "/images/projects/xerox.webp",
      "/images/projects/xerox.webp",
    ],
    description:
      " In short, we successfully completed the project and built a working circuit based on the problem we identified. While a real Xerox machine has a more complex design, this project helped us understand its basic components like the decoder, counter, comparator, and clock disable. It also made us realize the gap between theory and practical skills, highlighting the need for more hands-on experience with circuit projects.",
    sourceCodeHref: "https://github.com/arifulUTM/COVID-CARE",
    liveWebsiteHref: "https://github.com/arifulUTM/COVID-CARE",
  },
  {
    name: "Productivity and Task Management Flutter",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/login.webp",
      "/images/projects/login.webp",
      "/images/projects/login.webp",
      "/images/projects/login.webp",
    ],
    description:
      "This is a task management mobile application designed to help users stay  organized and boost productivity. The app offers three main features: Calendar,  Tasks, and Notes. With the Calendar feature, users can schedule and view events at a glance. The Tasks section allows users to create, manage, and track their to do lists, while the Notes feature lets them jot down important information or reminders. ",
    sourceCodeHref: "https://github.com/Yasser-dev/what-to-do",
    liveWebsiteHref: "https://github.com/Yasser-dev/what-to-do",
  },
  {
    name: "Pathfinder - A Travel Guide Application",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/login.webp",
      "/images/projects/login.webp",
      "/images/projects/login.webp",
      "/images/projects/login.webp",
    ],
    description:
      "Pathfinder is a travel guide mobile application developed as my final year thesis project during my undergraduate studies. The app is designed to enhance travel safety and convenience, featuring a contact tracing system to help users avoid potential COVID-19 exposure during their journeys. I built the application using Flutter for cross-platform development, Firebase for real-time database and authentication, and Google Cloud Platform APIs for location-based services and travel-related information. This project enabled me to apply my technical knowledge to solve real-world problems while gaining valuable hands-on experience in mobile app development.",
    sourceCodeHref: "https://shorturl.at/lu58e",
    liveWebsiteHref: "https://shorturl.at/lu58e",
  },
  {
    name: "Travel Guide Web Application",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/travel.webp",
      "/images/projects/travel.webp",
      "/images/projects/travel.webp",
      "/images/projects/travel.webp",
    ],
    description:
      "I am currently working on a full travel guide mobile application for a company in Spain. The app is designed to help users discover destinations, explore local attractions, learn about cultural highlights, compare prices, and receive personalized travel tips. It is being developed using React.js for the frontend and Laravel for the backend, incorporating features such as real-time data, user authentication, and cloud storage. This project builds on my previous experience and aims to deliver a simple, scalable, and user-friendly travel solution.",
    sourceCodeHref: "https://github.com/arifulatwork/Travel-FrontEnd",
    liveWebsiteHref: "https://github.com/arifulatwork/Travel-FrontEnd",
  },
];
