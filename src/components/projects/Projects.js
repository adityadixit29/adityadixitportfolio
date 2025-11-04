import React from 'react'
import Title from '../layouts/Title'
import { dashboard, todo, newsproject, projectTwo, ProfileSense, BGVS } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Data Analysis Dashboard using React.js and Node.js"
          des="Developed a data analysis dashboard using React.js and Node.js for in- depth exploration of India's economic landscape. 
          Highlighted the relevance, intensity, and likelihood of various sectors. Designed a user-friendly interface with a customizable analysis option. Provided valuable insights for strategic decision-making in a rapidly evolving
economic environment. "
          src={dashboard}
          linc="https://react-admin-dashboard-psi-kohl.vercel.app/"
          git="https://github.com/adityadixit29/React-Admin-Dashboard.git"
        />
        <ProjectsCard
          title="ProfileSense: AI-Powered Resume Analysis Platform"
          des="Built ProfileSense, an AI-powered resume analysis platform using React.js, TypeScript, and Node.js.
Integrated Puter.js for secure authentication, file storage, and AI-driven
analysis. Designed a responsive dashboard with Tailwind CSS and implemented
PDF-to-image conversion. Configured the project with Vite for fast builds and TypeScript for type
safety, ensuring maintainable and scalable code."
          src={ProfileSense}
          linc="https://ai-resume-checker-react.vercel.app/"
          git="https://github.com/adityadixit29/AI-Resume-Checker-React.git"
        />
        <ProjectsCard
          title="Enterprise Background Verification Management System"
          des="Technologies: React.js, Node .js, Express.js , MySQL, JWT Authentication, Redux Toolkit, Tailwind CSS
Built a full-stack verification platform with RBAC for Admin, Verifier, and
Company roles, reducing manual processes by 70% through workflow
automation.
Implemented secure JWT authentication with bcrypt and middleware
authorization, ensuring 100% data security across multi-tenant operations. Optimized MySQL schema with 8+ normalized tables and indexing,
improving query performance by 60% . Deployed scalable cloud infrastructure on Vercel/Render with Aiven MySQL, achieving 99.9% uptime and supporting concurrent user sessions. "
          src={BGVS}
          linc="https://bgvs-frontend.vercel.app/"
          git="https://github.com/adityadixiteducase29/BGVS.git"
        />
        {/* <ProjectsCard
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects