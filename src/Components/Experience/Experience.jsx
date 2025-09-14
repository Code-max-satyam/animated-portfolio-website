import React from 'react';
import Heylogo from '../../assets/company_logo/heyLogo.png';

const experience = {
  id: 0,
  img: Heylogo,
  role: "Web Developer Intern",
  company: "Hey IT Solution Pvt Ltd",
  date: "Feb 2025 - Jul 2025",
  desc: "Worked as a Web Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, React.js, and SQL. Collaborated with the design team to translate wireframes and prototypes into interactive, user-friendly web pages.",
  skills: [
    "React JS",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

        {/* Single Experience Entry */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-end">
          {/* Timeline Circle */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Section */}
          <div
            className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl tw-shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 transform transition-transform duration-300 hover:scale-105"
          >
            {/* Flex container for image and text */}
            <div className="flex items-center space-x-6">
              {/* Company Logo/Image */}
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role, Company Name, and Date */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">{experience.desc}</p>
            <div className="mt-4">
              <h5 className="font-medium text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
