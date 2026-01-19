import AboutMe from "@/components/about-me";
import Heading1 from "@/components/heading1";
import PageLayout from "@/components/layouts/page-layout";
import ProjectsCard from "@/components/projects-card";
import { getTechnologiesIcons } from "@/lib/utils";
import Image from "next/image";

export type Projects = {
  key: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
  features?: string[];
};

const projects: Projects[] = [
  {
    key: "project-452",
    title: "Mela Jobs: AI Job Search App",
    description:
      "AI-powered companion for fast job hunting: curated listings, one-tap applies, smart suggestions, and tailored cover letters/resumes. Track apps, get notifications, unlock exclusive roles. Dark mode, multi-language, hiring portal included.",
    image:
      "/images/mela.png",
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "EsLint",
      "NextJs Backend",
      "i18next",
      "NativeWind",
      "React Redux",
      "Zod"
    ],
    features: [
      "AI-powered job matching",
      "Curated job listings",
      "ATS-ready resume builder",
      "AI cover letter generator",
      "One-tap application",
      "Real-time job alerts",
      "Application status tracking",
      "Multi-source filtering",
      "Amharic and Oromifa language support",
      "Dark mode UI",
      "Employer portal for verified candidates",
      "Secure data encryption"
    ],
    link: "https://play.google.com/store/apps/details?id=com.abdulahi_muha.Mela&hl=en",
  },
  {
    key: "project-52",
    title: "Mela Jobs: Hire quality talent",
    description:
      "Mela Jobs is a Next.js-powered job platform designed to streamline the hiring process for companies. It features secure company authentication, comprehensive job posting and management, and an intuitive applicant tracking system. The platform empowers employers with efficient tools to manage job listings and streamline applicant reviews, ultimately enhancing recruitment workflows.",
    image:
      "/images/melaWeb.png",
    technologies: [
      "NextJs",
      "Vercel AI SDK",
      "TypeScript",
      "ShadCN",
      "Framer Motion",
      "MySql",
      "Tailwind",
      "React Redux",
      "Zod",
      "ReCharts",
      "Prisma"
    ],
    features: [
      "Company Account & Authentication",
      "Company Profile Management",
      "Job Posting & Management",
      "Job Visibility & Publishing Control",
      "Applicant Management System (ATS-lite)",
      "Applicant Filtering & Search"
    ],
    link: "https://melajobs.com/",
  },
  {
    key: "project-2",
    title: "GitHub User Finder",
    description:
      "The GitHub User Finder is a web application developed using Vite and React, designed to streamline the process of discovering GitHub users and exploring their profiles. Leveraging the GitHub API for seamless data retrieval, this project provides an intuitive and efficient platform for users to search, view, and gather information about GitHub profiles.",
    image:
      "/images/github.png",
    technologies: [
      "Vite",
      "ReactJS",
      "JavaScript",
      "EsLint",
      "GitHub API",
    ],
    features: [
      "Search Github Accounts",
      "Browse first 10 repos of search result including their link"
    ],
    link: "https://github-user-finder-main.vercel.app/",
  },
  {
    key: "project-4",
    title: "Harari building permit and inspection authority",
    description:
      "Welcome to the Harari Building Permit and Inspection Authority repository! Our project aims to simplify construction processes by providing services like Plan Consent, Design Evaluation, Building Permit, and Building Inspection. Join us in ensuring compliance, safety, and quality in construction.",
    image: "/images/harari.png",
    technologies: [
      "React",
      "Node Js",
      "Express Js",
      "EsLint",
      "Tailwind CSS",
      "React Redux",
      "Material UI",
    ],
    features: [
      "User Authentication",
    ],
    link: "https://expo.dev/@yourusername/smarttodo-mobile",
  },
  {
    key: "project-6",
    title: "Dagoo portfolio website",
    description:
      "Welcome to the GitHub repository for the Dagoo.inc portfolio website project! Explore the source code for this digital marketing showcase, highlighting services, projects, and expertise. Built with Vite, React, and Tailwind CSS, this project demonstrates modern web development and design practices for impactful digital experiences.",
    image:
      "/images/dagoo.png",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "EsLint",
      "Vite",
      "Style Component",
    ],
    link: "https://dagoo-potfolio-website.vercel.app/",
  },
  {
    key: "project-8",
    title: "OscarEstate",
    description:
      "Welcome to Oscar Estate, where luxury living meets timeless elegance. Discover a world of refined sophistication and comfort in our meticulously designed homes. Experience the pinnacle of modern luxury at Oscar Estate—your destination for elevated living.",
    image:
      "/images/oscar.png",
    technologies: [
      "ReactJS",
      "NodeJS",
      "TailwindCSS",
      "Express",
      "MySQL",
    ],
    features: [
      "Goal and progress tracking",
      "Workout template creation",
      "Sync with wearable devices",
      "Interactive charts",
    ],
    link: "https://mern-real-esate.onrender.com/",
  },
  {
    key: "project-8",
    title: "React Weather Web App",
    description:
      "This is a simple weather application built with Vite and React, utilizing the OpenWeather API to fetch real-time weather data. Users can enter a city name, and the app will display information such as the current weather, description, and temperature.",
    image:
      "/images/weather.png",
    technologies: [
      "ReactJS",
      "NodeJS",
      "TailwindCSS",
      "Express",
      "MySQL",
    ],
    features: [
      "Goal and progress tracking",
      "Workout template creation",
      "Sync with wearable devices",
      "Interactive charts",
    ],
    link: "https://react-weather-app-seven-wine.vercel.app/",
  },
  {
    key: "project-7",
    title: "Lewach Items Exchange",
    description:
      "This platform offers users a dynamic and intuitive interface to effortlessly trade items. powered by Node.js, the backend ensures swift and secure communication, allowing users to list, browse, and connect with others for mutually beneficial exchanges.",
    image:
      "/images/lewach.png",
    technologies: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "JavaScript",
      "MongoDB",
      "EsLint"
    ],
    features: [
      "Review and rating system",
      "Friend and follow features",
      "Group reading events",
      "Reading progress tracking",
    ],
  },

];

const Me = () => {
  const images = getTechnologiesIcons();
  return (
    <PageLayout>
      <AboutMe />
      <Heading1 title="Technologies I use" left={0} />
      <div className="-mt-6 mb-6 w-full flex flex-wrap gap-4 items-start justify-start py-4">
        {images.map((url) => (
          <Image
            src={url}
            alt="Tech Icon"
            key={url}
            width={50}
            height={50}
            unoptimized
            className="rounded-md object-contain border-2 border-teal-900 p-2"
          />
        ))}
      </div>
      <Heading1 title="Projects" left={0} />
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.key} project={project} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Me;
