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
    key: "work-experience-1",
    title: "Senior Software Engineer",
    company: "TechNova Solutions",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 2024 - Present",
    description:
      "Leading the core platform team in architecting microservices and improving system reliability across global regions.",
    responsibilities: [
      "Architected a scalable real-time data pipeline processing 1M+ events daily.",
      "Mentored junior developers and conducted weekly code architecture reviews.",
      "Optimized database queries, reducing API latency by 40%.",
    ],
  },
  {
    key: "work-experience-21",
    title: "Software Engineer",
    company: "Quantum Leap AI",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Mar 2023 - Dec 2023",
    description:
      "Developed scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Implemented responsive UI components using React and Tailwind CSS.",
      "Integrated third-party authentication services using NextAuth.js.",
      "Reduced build times by 25% through Webpack optimization.",
    ],
  },
  {
    key: "work-experience-31",
    title: "Product Manager",
    company: "Horizon Digital",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jun 2022 - Feb 2023",
    description:
      "Led product development lifecycle from concept to launch. Conducted market research and gathered user feedback to prioritize features.",
    responsibilities: [
      "Defined product roadmap and managed a backlog of 50+ features.",
      "Conducted 20+ user interviews to identify core pain points in the checkout flow.",
      "Increased user retention by 15% through a redesigned onboarding experience.",
    ],
  },
  {
    key: "work-experience-41",
    title: "Data Scientist",
    company: "DataViz Analytics",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Aug 2021 - May 2022",
    description:
      "Built predictive models and performed data analysis to drive business decisions. Presented insights to stakeholders in clear and actionable formats.",
    responsibilities: [
      "Developed a churn prediction model with 85% accuracy using Random Forest.",
      "Automated weekly reporting dashboards using Python and Tableau.",
      "Cleaned and processed large datasets from SQL and NoSQL sources.",
    ],
  },
  {
    key: "work-experience-51",
    title: "UI/UX Designer",
    company: "Creative Pulse Studio",
    image:
      "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Sep 2020 - Jul 2021",
    description:
      "Designed intuitive user interfaces and conducted usability testing. Created wireframes, prototypes, and high-fidelity designs for web and mobile applications.",
    responsibilities: [
      "Created a comprehensive design system adopted by the entire engineering team.",
      "Facilitated A/B testing on landing pages, resulting in a 10% conversion lift.",
      "Hand-crafted high-fidelity prototypes using Figma for stakeholder presentations.",
    ],
  },
  {
    key: "work-experience-61",
    title: "Marketing Specialist",
    company: "Skyline Media Group",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 2020 - Aug 2020",
    description:
      "Executed digital marketing campaigns and analyzed performance metrics. Managed social media channels and created engaging content to increase brand awareness.",
    responsibilities: [
      "Managed an annual ad spend of $50k across Google and Meta Ads.",
      "Grew organic social media following by 40% in six months.",
      "Drafted weekly email newsletters with an average open rate of 32%.",
    ],
  },
  {
    key: "work-experience-71",
    title: "Project Coordinator",
    company: "Streamline Operations",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "May 2019 - Dec 2019",
    description:
      "Coordinated project timelines and resources to ensure timely delivery. Facilitated communication between teams and stakeholders to align project goals.",
    responsibilities: [
      "Managed project timelines using Jira and Trello for 12 simultaneous workstreams.",
      "Reduced project bottlenecks by implementing a daily stand-up routine.",
      "Ensured all project documentation was centralized and up-to-date.",
    ],
  },
  {
    key: "work-experience-81",
    title: "Financial Analyst",
    company: "Apex Capital Partners",
    image:
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Mar 2018 - Apr 2019",
    description:
      "Analyzed financial data and prepared reports for senior management. Developed forecasting models to support strategic decision-making.",
    responsibilities: [
      "Built complex financial models to evaluate potential $2M+ investments.",
      "Presented quarterly financial performance summaries to the executive board.",
      "Identified $100k in annual cost savings by auditing vendor contracts.",
    ],
  },
];

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
