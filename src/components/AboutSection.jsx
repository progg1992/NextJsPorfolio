"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
// 		<ul className="list-disc pl-2">
// 		<li>Backend</li>
// 			<ol>
// 				<li>NodeJs</li>
// 				<li>Express</li>
// 				<li>NestJs</li>
// 			</ol>
// 		<li>Frontend</li>
//       </ul>
//     ),
	//   },
  {
    title: "Skills",
    id: "skills",
    content: (
		<>
			Backend
			<ol className="list-disc pl-2 ">
				<li>NodeJs</li>
				<li>Express</li>
				<li>NestJs</li>
			</ol>
		</>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
		<li>Herzing University Bachelors in Technology Management - 2024</li>
		<li>DeVry University - Undergraduate Certificate in IT Essentials - 2022</li>
        <li>Michigan State University - Certificate in Full Stack Web Development - 2021</li>
      </ul>
    ),
  },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li></li>
//       </ul>
//     ),
//   },
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
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        	<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          	<p className="text-white texxt-base md:text-lg">
				Embarking on a journey that intertwines technology mastery with the art of leadership, I am a highly skilled Web Development professional. My passion for both intricate code and nurturing minds has led me to a pivotal role in driving transformation and empowerment within the tech realm.
				<br></br>
				<br></br>	  
				Let's connect, collaborate, and script the future of technology together. Reach out to me today – together, we can turn ideas into reality and redefine what's possible in the world of software engineering and project management.
          	</p>
          	<div className="flex flex-row justify-start mt-8">
            	<TabButton
              		selectTab={() => handleTabChange("skills")}
              		active={tab === "skills"}
            	>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
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