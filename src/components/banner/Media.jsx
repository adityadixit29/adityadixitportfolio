import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/aditya-dixit-499798225/" className="bannerIcon" target='blank'>
            <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/AdityaDixit2911" className="bannerIcon" target='blank'>
              <FaTwitter />
            </a>
            <a href="https://github.com/adityadixit29" className="bannerIcon" target='blank'>
              <BsGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon text-3xl">
              {/* <SiNextdotjs /> */}
              <FaNode />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media