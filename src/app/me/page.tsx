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
  features: string[];
};

const projects: Projects[] = [
  {
    key: "project-1",
    title: "HealthConnect Portal",
    description:
      "A full-stack SaaS solution for hospitals, pharmacies, and patients to manage appointments, prescriptions, and real-time communication.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    features: [
      "Role-based authentication",
      "Appointment booking and management",
      "Prescription uploads and secure messaging",
      "Admin reporting dashboard",
    ],
    link: "https://github.com/yourusername/healthconnect-portal",
  },
  {
    key: "project-2",
    title: "EduQuiz Web App",
    description:
      "A quiz and assignment platform for live and asynchronous learning, supporting teachers and students with real-time feedback.",
    image:
      "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "NextJS",
      "ReactJS",
      "TypeScript",
      "Chakra UI",
      "Node.js",
      "MongoDB",
      "Socket.IO",
    ],
    features: [
      "Live quiz sessions",
      "Question randomization",
      "Automated grading",
      "Progress analytics",
    ],
    link: "https://eduquiz-app-demo.vercel.app/",
  },
  {
    key: "project-3",
    title: "Real Estate CRM",
    description:
      "A CRM dashboard for property managers and agents to track leads, manage listings, and automate client communications.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "ReactJS",
      "Redux",
      "Node.js",
      "Express",
      "MySQL",
      "TailwindCSS",
    ],
    features: [
      "Lead management and scoring",
      "Listing uploads and search",
      "Email automation",
      "Interactive analytics",
    ],
    // No link for this one
  },
  {
    key: "project-4",
    title: "Harari building permit and inspection authority",
    description:
      "Welcome to the Harari Building Permit and Inspection Authority repository! Our project aims to simplify construction processes by providing services like Plan Consent, Design Evaluation, Building Permit, and Building Inspection. Join us in ensuring compliance, safety, and quality in construction.",
    image: "/images/harari.png",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "NativeWind",
    ],
    features: [
      "Personalized notifications",
      "Task dependency management",
      "Team sharing and chat",
      "Dark/light mode",
    ],
    link: "https://expo.dev/@yourusername/smarttodo-mobile",
  },
  {
    key: "project-5",
    title: "EcoMarket E-commerce",
    description:
      "Marketplace platform focused on eco-friendly products, supporting sellers with inventory and shipping integrations.",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "NextJS",
      "ReactJS",
      "Stripe API",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Stripe payments integration",
      "Product review system",
      "Order tracking",
      "Inventory management",
    ],
    // No link for this one
  },
  {
    key: "project-6",
    title: "TravelMate",
    description:
      "An itinerary planning website enabling collaborative trip planning, budget calculation, and booking recommendations.",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "ReactJS",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Google Maps API",
    ],
    features: [
      "Drag-and-drop itinerary builder",
      "Collaborative trip editing",
      "Budget estimator",
      "API-based hotel and flight recommendations",
    ],
    link: "https://travelmate-app-demo.vercel.app/",
  },
  {
    key: "project-7",
    title: "BookReview Social",
    description:
      "A social web app for readers to share book reviews, follow authors, and join community reading challenges.",
    image:
      "https://images.pexels.com/photos/159711/books-book-pages-read-literature-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "NextJS",
      "ReactJS",
      "PostgreSQL",
      "TailwindCSS",
      "Node.js",
      "tRPC",
    ],
    features: [
      "Review and rating system",
      "Friend and follow features",
      "Group reading events",
      "Reading progress tracking",
    ],
    // No link for this one
  },
  {
    key: "project-8",
    title: "FitTrack Dashboard",
    description:
      "A modern dashboard for tracking fitness progress, goals, and custom workout plans with real-time analytics.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MySQL",
      "Chart.js",
    ],
    features: [
      "Goal and progress tracking",
      "Workout template creation",
      "Sync with wearable devices",
      "Interactive charts",
    ],
    link: "https://github.com/yourusername/fittrack-dashboard",
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
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectsCard key={project.key} project={project} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Me;
