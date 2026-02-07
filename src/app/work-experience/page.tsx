import WorkExperienceCard from "@/components/work-experience-card";
import Heading1 from "@/components/heading1";
import PageLayout from "@/components/layouts/page-layout";

export type WorkExperience = {
  key: string;
  title: string;
  company: string;
  image: string;
  date: string;
  description: string;
  responsibilities: string[];
};

const workExperience: WorkExperience[] = [
  {
    key: "work-experience-6",
    title: "Co-founder and CTO",
    company: "Marvels Creative Technology",
    image: "/images/marvels.svg",
    date: "Feb 2025 – Present",
    description: "Co-founded a creative technology firm and directed the technical vision for internal and client-facing products. As CTO, I balanced high-level strategy with hands-on project management to deliver innovative digital solutions.",
    responsibilities: [
      "Defined the technical roadmap and oversaw the successful delivery of multiple internal and client projects.",
      "Led the technical strategy for a startup environment, making key decisions on stack selection and architecture.",
      "Managed client relationships and translated business requirements into executable technical specifications."
    ]
  },
  {
    key: "work-experience-5",
    title: "Frontend Team Lead",
    company: "MedEAfrica Technology",
    image: "/images/vasfloLogo.png",
    date: "Dec 2024 – Jul 2025",
    description: "Stepped into a leadership role to guide the front-end engineering department and ensure technical excellence across healthcare projects. I focused on mentoring junior talent and maintaining a scalable code structure for long-term product growth.",
    responsibilities: [
      "Led and mentored a team of 3 junior software engineers, conducting code reviews and sprint planning.",
      "Oversaw the overall project structure to ensure consistency and modularity across the codebase.",
      "Collaborated with cross-functional leads to align technical strategy with healthcare business goals."
    ]
  },
  {
    key: "work-experience-4",
    title: "Intermediate Frontend Developer",
    company: "MedEAfrica Technology",
    image: "/images/vasfloLogo.png",
    date: "Jul 2024 – Jul 2025",
    description: "Focused on building a high-impact healthcare SaaS product that connects hospitals, pharmacies, and patients across the region. I translated complex healthcare workflows into intuitive UI/UX designs using Figma and ReactJS.",
    responsibilities: [
      "Developed the front-end architecture for a healthcare ecosystem connecting patients and drug providers.",
      "Designed and implemented high-fidelity dashboards and landing pages using Figma and ReactJS.",
      "Optimized the SaaS interface for accessibility and performance across various medical facility environments."
    ]
  },
  {
    key: "work-experience-3",
    title: "Junior Software Engineer",
    company: "Cloud251",
    image: "/images/cloud251Logo.webp",
    date: "Feb 2024 – May 2025",
    description: "Contributed to the development and deployment of cloud-based infrastructure tools and the company's official digital presence. My role bridged the gap between front-end development and DevOps by managing VPS configurations and automated deployments.",
    responsibilities: [
      "Developed a sophisticated user console for customers to configure and control cloud services in real-time.",
      "Built and deployed the official company website, utilizing VPS configurations for optimized hosting.",
      "Collaborated with the engineering team to implement responsive front-end components and manage production releases."
    ]
  },
  {
    key: "work-experience-2",
    title: "Junior Software Engineer (Remote)",
    company: "Harari Construction Office",
    image: "/images/harariLogo.png",
    date: "Jan 2024 – Nov 2024",
    description: "Engineered a digital governance platform to modernize land and building permit services for citizens. I took ownership of the full-stack lifecycle, from initial architectural design to the final implementation of the user interface and server-side logic.",
    responsibilities: [
      "Designed the full-stack architecture for a government-facing online permit service.",
      "Developed both front-end interfaces and back-end logic to handle complex land service workflows.",
      "Collaborated with stakeholders to ensure the digital service met strict regulatory and usability requirements."
    ]
  },
  {
    key: "work-experience-1",
    title: "Junior Software Engineer Intern",
    company: "Camara Education Ethiopia",
    image: "/images/camara.png",
    date: "Jul 2022 – Oct 2022",
    description: "Supported educational technology initiatives by developing recruitment software and maintaining critical IT infrastructure. I balanced software development with hands-on hardware refurbishment and systems optimization to ensure seamless technical operations.",
    responsibilities: [
      "Developed a web-based application to streamline the onboarding process for new volunteer applicants.",
      "Performed hardware maintenance and OS customization, including refurbishing computers for educational use.",
      "Managed networking tasks and technical troubleshooting while maintaining detailed system documentation."
    ]
  }
]

const page = () => {
  return (
    <PageLayout>
      <Heading1 title="Work Experience" />
      <div className="flex flex-col gap-8 w-full">
        {workExperience.map((workExperience) => (
          <WorkExperienceCard
            key={workExperience.title}
            workExperience={workExperience}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default page;
