import Heading1 from "@/components/heading1";
import PageLayout from "@/components/layouts/page-layout";
import { getTechnologiesIcons } from "@/lib/utils";
import Image from "next/image";

const Me = () => {
   const images = getTechnologiesIcons();
  return (
    <PageLayout>
      <Heading1 title="About me, Technologies and Projects" left={90} />
      <p className="text-text-color text-lg mb-4">
        A software engineering graduate with 3+ years of hands-on experience,
        specializing in front-end development for web and mobile applications,
        backend integration, and deployment. Proficient in building responsive
        user experiences using ReactJs, NextJS, Tailwind, and React Native
        (Expo, NativeWind). Experienced in database management with MySQL and
        MongoDB. Proven ability to design and develop scalable solutions,
        demonstrated by leading a frontend team and contributing to the
        development of a healthcare SaaS product connecting hospitals,
        pharmacies, and patients. Adept at configuring and deploying
        applications using Linux, Ubuntu, and Nginx, with experience in CI/CD
        pipelines and utilizing tools like Jira, Confluence, and Git for
        collaborative development.
      </p>
      <Heading1 title="Technologies I use" left={0} />
      <div className="-mt-6 w-full flex flex-wrap gap-4 items-start justify-start py-4">
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
    </PageLayout>
  );
};

export default Me;
