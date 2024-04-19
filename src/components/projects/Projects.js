import React from 'react'
import Title from '../layouts/Title'
import {dashboard, todo, newsproject, projectTwo } from "../../assets/index";
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
          title="Data Analysis Dashboard"
          des=" Developed a data analysis dashboard using React.js and Node.js for
          in-depth exploration of India's economic landscape. "
          src={dashboard}
          linc ="https://react-dashboard-new-bice.vercel.app/"
          git="https://github.com/adityadixit29/react-dashboard-new.git"
        />
        <ProjectsCard
          title="Todo App"
          des="The objective of our project is to make an app or software
          application that can handle the todos or tasks on which we can add,
          remove and update the tasks. "
          src={todo}
          linc="https://react-todo-gamma-ruddy.vercel.app/"
          git="https://github.com/adityadixit29/react-todo.git"
        />
        <ProjectsCard
          title="News App"
          des="Developed a News App through witch the user can Publish, View the News as well as can see the Performance of Different articles through visually appealing graph"
          src={newsproject}
          linc="https://news-app-pied-nine.vercel.app/"
          git="https://github.com/adityadixit29/news-app.git"
        />
        <ProjectsCard
          title="Alarm Clock With the help of Python and Tkinter"
          des="The objective of our project is to implement an alarm clock using
          Python. "
          src={projectTwo}
          linc="https://github.com/adityadixit29/clock.git"
          git="https://github.com/adityadixit29/clock.git"
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