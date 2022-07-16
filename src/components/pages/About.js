import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <section>
      <h1 className="text-5xl font-semibold my-3 text-white">GitHub Finder</h1>
      <p className="text-lg my-4 text-white">
        A React App to search GitHub profiles and see profiles details.
      </p>
      <p className="text-white">
        <span className="text-lg text-gray-200"> Version </span> : 18.2.0
      </p>
      <p className="text-white">
        By : <span className="text-white">Vikas Rajput</span>
      </p>
      <p className="flex items-center gap-3 mt-2 text-white">
        LinkeDin :
        <a
          href="https://www.linkedin.com/in/vikas-rajput-499041223"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-sky-600" />
        </a>
      </p>
      <p className="flex items-center gap-3 mt-2 text-white">
        GitHub :
        <a
          href="https://github.com/VikasRajput-18"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-600" />
        </a>
      </p>
    </section>
  );
};

export default About;
