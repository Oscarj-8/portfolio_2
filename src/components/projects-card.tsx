import { Projects } from "@/app/me/page";
import Image from "next/image";
import Link from "next/link";
const ProjectsCard = ({ project }: { project: Projects }) => {
  return (
    <div className="flex items-start w-full gap-4" key={project.key}>
        <div className="relative w-12 h-12 lg:w-24 lg:h-24 shrink-0">
          <Image
            src={project.image}
            alt="Work Experience"
            fill
            className="rounded-md object-cover border-2 border-gray-400"
          />
        </div>
      <div className="flex flex-col items-start -mt-1">
        <div className="flex justify-between items-center gap-4">
          <p className="text-xl font-semibold mb-2">{project.title}</p>
          {project?.link && (
            <Link href={project.link} target="_blank" className="underline">
              Check out
            </Link>
          )}
        </div>
        <div className="flex items-center text-gray-400  flex-wrap mb-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="after:content-['|'] after:mx-2 last:after:content-['']"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mt-1 leading-snug">{project.description}</p>
        {
          project?.features && (
            <div className="mt-2">
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="text-gray-400 mt-1 leading-snug">
                {project?.features?.map((feature) => (
                  <li key={feature} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProjectsCard;
