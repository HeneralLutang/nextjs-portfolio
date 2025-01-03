"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="border-b-2 border-[#2ebf91]">Web Design</span> -
          HTML, CSS, Tailwindcss, NextJs, JavaScript & React
        </li>
        <li>
          <span className="border-b-2 border-[#2ebf91]">Customer Service</span>{" "}
          - Communication Skills, Organizational Skills, Time Management, Basic
          Accounting, Email Management, Confidentiality & Event Planning
        </li>
        <li>
          <span className="border-b-2 border-[#2ebf91]">Data Entry</span> -
          Typing Proficiency, Attention to Detail, Technical Skills, Data
          Management, Advance Computer Skills, Problem-Solving Skills, Basic
          Knowledge of Databases & Adaptability
        </li>
        <li>
          Basic Knowledge in{" "}
          <span className="border-b-2 border-[#2ebf91]">
            Adobe Photoshop, Canva & Figma{" "}
          </span>
        </li>
          <li>
          <span className="border-b-2 border-[#2ebf91]">SEO</span> -
          Keyword Research & Analysis, On-Page SEO, & SEO Tools & Analytics
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Eastern Visayas State University Philippines
        <span className="border-b-2 border-[#2ebf91]">
          <br /> -  {" "}
            Bachelor of Science in Information Technology
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2 ">
        <li>
          Work as{" "}
          <span className="border-b-2 border-[#2ebf91]"> Data Entry</span> in
          FPOSI
        </li>
        <li>
          Work as{" "}
          <span className="border-b-2 border-[#2ebf91]">Receptionist</span> in
          SunKissed Beach Resort
        </li>
        <li>
          {" "}
          <span className="border-b-2 border-[#2ebf91]">Web Designing</span> for
          practice
        </li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16s">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Dedicated and detail-oriented professional with a strong track
            record in accurately inputting, updating, and managing data across
            various databases and software systems. Skilled in verifying and
            cleaning data to maintain integrity and quality. Adept at generating
            clear and concise reports to aid in decision-making. Recognized for
            excellent organizational skills and a commitment to efficiency and
            accuracy in all tasks.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
