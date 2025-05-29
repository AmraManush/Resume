import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import phpSvg from "@/public/icons/php.svg";
import DartSvg from "@/public/icons/dart.svg";
import JavaSvg from "@/public/icons/java.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import JSPSvg from "@/public/icons/jsp.svg";
import AngularSvg from "@/public/icons/angular.svg";
import FlutterSvg from "@/public/icons/flutter.svg";
import SvelteSvg from "@/public/icons/svelte.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import LaraSvg from "@/public/icons/laravel.svg";
import DjangoSvg from "@/public/icons/django.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import MySQLSvg from "@/public/icons/mysql.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import VSSvg from "@/public/icons/vs.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import SupSvg from "@/public/icons/supbase.svg";
import FireSvg from "@/public/icons/firebase.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "PHP",
        icon: phpSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Dart",
        icon: DartSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "JSP",
        icon: JSPSvg,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "React Native",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Svelte",
        icon: SvelteSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: LaraSvg,
      },
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Django",
        icon: DjangoSvg,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySQL",
        icon: MySQLSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "VS Code",
        icon: VSSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Supbase",
        icon: SupSvg,
      },
      {
        name: "Firebase",
        icon: FireSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
