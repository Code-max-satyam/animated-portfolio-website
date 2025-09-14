import React from 'react';
import Tilt from 'react-parallax-tilt';

// Importing all logos
import bootstrapLogo from '../../assets/tech_logo/bootstrap.png';
import cLogo from '../../assets/tech_logo/c.png';
import canvaLogo from '../../assets/tech_logo/canva_logo.jpeg';
import cssLogo from '../../assets/tech_logo/css.png';
import expressLogo from '../../assets/tech_logo/express.png';
import gitLogo from '../../assets/tech_logo/git.png';
import githubLogo from '../../assets/tech_logo/github.png';
import htmlLogo from '../../assets/tech_logo/html.png';
import javaLogo from '../../assets/tech_logo/java.png';
import jsLogo from '../../assets/tech_logo/javascript.png';
import mysqlLogo from '../../assets/tech_logo/mysql.png';
import netlifyLogo from '../../assets/tech_logo/netlify.png';
import nodejsLogo from '../../assets/tech_logo/nodejs.png';
import reactLogo from '../../assets/tech_logo/reactjs.png';
import tailwindLogo from '../../assets/tech_logo/tailwindcss.png';
import vercelLogo from '../../assets/tech_logo/vercel.png';
import vscodeLogo from '../../assets/tech_logo/vscode.png';

// Skills data
const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React JS', logo: reactLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: jsLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Canva', logo: canvaLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-[5vw] bg-skills-gradient font-sans clip-path-custom"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Boxes */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full sm:w-[45%] lg:w-[42%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Tilted Skill Grid */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
