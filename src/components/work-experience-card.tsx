import { WorkExperience } from "@/app/work-experience/page";
import Image from "next/image";

const WorkExperienceCard = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <div className="flex items-start w-full gap-4" key={workExperience.key}>
      {/* 1. Use a fixed aspect ratio (e.g., w-24 h-16 for a 3:2 ratio)
          2. Use flex-shrink-0 to prevent the image container from being squeezed by text
      */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src={workExperience.image}
          alt="Work Experience"
          fill
          className="rounded-md object-cover border-2 border-gray-400"
        />
      </div>

      <div className="flex flex-col items-start -mt-1">
        <p className="text-xl font-semibold">{workExperience.title}</p>
        <div className="flex items-center text-gray-400 justify-between gap-2">
          <span className=" ">{workExperience.company}</span>{" "}
          <span className="">|</span>
          <p className=" leading-snug">{workExperience.date}</p>
        </div>
        <p className="text-gray-300 mt-1 leading-snug">
          {workExperience.description}
        </p>
        <div className="mt-2">
          <h3 className="font-semibold mb-2">Key Responsibilities</h3>
          <ul className="text-gray-400 mt-1 leading-snug">
            {workExperience.responsibilities.map((responsibility) => (
              <li key={responsibility} className="list-disc list-inside">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
