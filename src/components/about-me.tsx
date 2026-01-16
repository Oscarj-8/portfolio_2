'use client'

import React from 'react'
import useScreenSize from "@/hooks/useScreenSize";
import Heading1 from './heading1';

const AboutMe = () => {

  const fromLeft = useScreenSize();
  return (
    <>
      <Heading1
        title="About me, Technologies and Projects"
        left={fromLeft === "small" ? 0 : 90}
      />
      <p className="text-text-color text-lg mb-6">
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
    </>
  );
}

export default AboutMe