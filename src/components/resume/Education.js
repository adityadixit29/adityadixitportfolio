import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech. CSE"
            subTitle="ITM, Gwalior"
            result="8.4/10"
            des="Learning coding, algorithms, and software engineering pursuing B.Tech. from ITM Gwalior"
          />
          <ResumeCard
            title="Class 12th"
            subTitle="The Oracle Public School"
            result="73.2/100%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Intern"
            subTitle="TechieShubhDeep IT Solutions (MAR 2023 - APR 2023)"
            result="Gwalior"
            des="At TechieShubhDeep IT Solutions, I successfully completed projects and fulfilled diverse responsibilities Developed booking and school management systems, and created captivating Figma designs for music search technology and healthcare websites"
          />
          <ResumeCard
            title="Technical Content Writing Intern"
            subTitle="GeeksforGeeks - (DEC 2022 - MAR 2023)"
            result="Remote"
            des="As a contributor to GeeksforGeeks, I have successfully written and published 16 tech based articles, they are plagiarism-free and provide valuable insights to the readers."
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="The Sparks Foundation - (NOV 2022 - NOV 2022)"
            result="Remote"
            des="Implemented the Design for payment gateway service. Developed the payment gateway portal. Integrated the authentication facility for users."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education