import React, {  useState } from 'react'
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"
import { FiDownload } from "react-icons/fi";

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1f4VdojhlMyuY_UFnI6geujMzrljV6PDS";

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-6">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            EXPERIENCE
          </h3>
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">My Resume</h1>
        </div>
        <a
          href={resumeDownloadUrl}
          download
          className="flex items-center mb-4 justify-center gap-2 px-6 py-3 bg-black bg-opacity-25 text-gray-300 rounded-lg hover:bg-opacity-40 hover:text-white duration-300 border border-transparent hover:border-designColor shadow-shadowOne"
        >
          <FiDownload className="text-xl" />
          <span className="text-sm md:text-base font-medium">Download Resume</span>
        </a>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume