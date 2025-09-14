import React from "react";
import BcaLogo from "../../assets/education_logo/bca.logo.png";
import McaLogo from "../../assets/education_logo/mca.logo.png";
import OpsLogo from "../../assets/education_logo/ops.logos.png";

export const education = [
  {
    id: 0,
    img: McaLogo,
    school: "Dr. Rammanohar Lohia Avadh University",
    date: "2023 - 2025",
    grade: "70%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Dr.rmlau University, Ayodhya. During my time at dr.rmlau, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at dr.rmlau University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: BcaLogo,
    school: "Dr. Rammanohar Lohia Avadh University",
    date: "2020 - 2023",
    grade: "68%",
    desc: "I completed my Bachelor's degree (BCA) from dr.rmlau University, Ayodhya. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring OOPs concepts to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at dr.rmlau University allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: OpsLogo,
    school: "OPS Inter College, Ayodhya",
    date: "2018 - 2020",
    grade: "59%",
    desc: "I completed my class 12 education from OPS Inter College, Ayodhya, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Intermediate (12th) - PCM",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute top-0 bottom-0 right-6 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-white rounded"></div>

        {/* Timeline Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div
              className={`absolute top-0 sm:top-4 z-10 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center
                right-6 sm:left-[calc(50%-32px)]
              `}
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card Content */}
            <div
              className={`w-full max-w-[350px] sm:max-w-[350px] p-6 rounded-2xl tw-shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
                ${
                  index % 2 === 0
                    ? "sm:ml-12"
                    : "sm:mr-12"
                }
              `}
            >
              <div className="flex items-center space-x-6">
                {/* School Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
