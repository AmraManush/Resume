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
    name: "Lost and Found Application",
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
];
