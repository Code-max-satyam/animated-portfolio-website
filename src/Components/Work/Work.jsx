import React, { useState } from 'react'
import CrudLogo from '../../assets/work_logo/crud.png';
import DelicacyLogo from '../../assets/work_logo/delicacy.png';
import ElectronicLogo from '../../assets/work_logo/electronic.png';
import FoodLogo from '../../assets/work_logo/food.png';
import JarvisLogo from '../../assets/work_logo/jarvis.png';
import LoginLogo from '../../assets/work_logo/login.png';
import MegaShopLogo from '../../assets/work_logo/mega.shop.png';
import PortfolioLogo from '../../assets/work_logo/potfolio.png';
import QuizLogo from '../../assets/work_logo/quiz.png';
import RestaruntLogo from '../../assets/work_logo/Restarunt.png';
import SpotifyLogo from '../../assets/work_logo/spotify.png';
import VideoCallLogo from '../../assets/work_logo/video.call.png';
import WeatherLogo from '../../assets/work_logo/weather.png';
import { BsNutFill } from 'react-icons/bs';

 const projects = [
  {
    id: 0,
    title: "Student Record Management System",
    description:
      "A modern React-based Student Records Management application that offers seamless CRUD (Create, Read, Update, Delete) functionality with a clean, user-friendly interface and robust REST API integration for efficient data handling.",
    image: CrudLogo,
    tags: ["React", "HTML", "CSS",  "Node.js", "Express"],
    github: "https://github.com/Code-max-satyam/Student-Records-Management-Website",
    webapp: "https://github.com/Code-max-satyam/Student-Records-Management-Website",
  },
  {
    id: 1,
    title: "Delicacy Restaurant Website",
    description:
      "This is a fully responsive Fruits and Vegetables Website built using HTML, CSS, and JavaScript. The website provides an attractive and user-friendly interface for showcasing fresh fruits and vegetables with smooth navigation and interactive features",
    image: DelicacyLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/fruit-and-vegetable-website",
    webapp: "https://falsabjilelo-website.netlify.app/",
  },
  {
    id: 2,
    title: "Electronic Store",
    description:
      "Electronic E-Commerce Website An interactive and fully responsive Electronic E-Commerce Website built using HTML, CSS, and JavaScript. This project provides a seamless online shopping experience with product listings, search functionality, and an intuitive user interface.",
    image: ElectronicLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/Electronic-E-commerce-Website",
    webapp: "https://github.com/Code-max-satyam/Electronic-E-commerce-Website",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description:
      "A modern Food Delivery Web Application built with React.js, designed to provide a smooth and interactive user experience. Features include dynamic menu display, real-time order tracking, and responsive design for all devices.",
    image: FoodLogo,
    tags: ["React.js", "CSS", "JavaScript", "API", "HTML"],
    github: "https://github.com/Code-max-satyam/Food-Delivery",
    webapp: "https://github.com/Code-max-satyam/Food-Delivery",
  },
  {
    id: 4,
    title: "Jarvis AI Assistant",
    description:
      "A voice-controlled AI assistant using web APIs and JavaScript. Performs basic tasks on voice commands.",
    image: JarvisLogo,
    tags: ["JavaScript","HTML","CSS", "Speech Recognition", "Web APIs"],
    github: "https://github.com/Code-max-satyam/-jarvis-virtual-assistant-",
    webapp: "https://jarvis-assistant-website.netlify.app/",
  },
  {
    id: 5,
    title: "Login Authentication",
    description:
      "This project is a simple Login & Registration System built using React.js (Frontend), Node.js & Express (Backend), and MySQL (Database). It allows users to register with their Name, Email, Password and then log in securely. All user information is stored in a MySQL database.",
    image: LoginLogo,
    tags: ["React", "Node.js", "Express", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/Code-max-satyam/React-login-form",
    webapp: "https://github.com/Code-max-satyam/React-login-form",
  },
  {
    id: 6,
    title: "Mega Shop",
    description:
      "MEGA SHOP is a modern and responsive e-commerce frontend website built with HTML, CSS, and JavaScript. It includes essential pages like homepage, product details, blog, contact, cart, and user account.",
    image: MegaShopLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/Mega-Shop-Website",
    webapp: "https://megashopsy.netlify.app/",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "This is a Personal Portfolio Website created using HTML, CSS, and JavaScript to showcase my skills, projects, and achievements as a web developer.",
    image: PortfolioLogo,
    tags: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/Code-max-satyam/Personal-Portfolio-Website",
    webapp: "https://satyammaxportfolio.netlify.app/",
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "A quiz-based web application allowing users to test knowledge on various topics. Tracks scores and provides feedback.",
    image: QuizLogo,
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Code-max-satyam/Quiz-App-",
    webapp: "https://quiz-app-blush-phi.vercel.app/",
  },
  {
    id: 9,
    title: "Restaurant UI",
    description:
      "This is a responsive and modern restaurant website named RamJi, built using HTML, CSS, and JavaScript. The website focuses on promoting healthy eating and providing a clean and inviting user experience.",
    image: RestaruntLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/Restaurant-Website",
    webapp: "https://ramji-resort.netlify.app/",
  },
  {
    id: 10,
    title: "Spotify Clone",
    description:
      "Frontend clone of Spotify music player interface using React. Features album view and song listing.",
    image: SpotifyLogo,
    tags: ["React", " Tailwind CSS", "Vite", "JavaScript", "HTML"],
    github: "https://github.com/Code-max-satyam/Spotify-App",
    webapp: "https://spotifyapp-musicplayer.netlify.app/",
  },
  {
    id: 11,
    title: "Video Call App UI",
    description:
      "A fully functional Real-Time Video Calling App built using React.js, enabling seamless one-on-one video communication. This project demonstrates the power of modern web technologies in building real-time communication platforms",
    image: VideoCallLogo,
    tags: [ "React.js", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/Real-Time-Videocall-App",
    webapp: "https://real-time-videocall-app.vercel.app/",
  },
  {
    id: 12,
    title: "Weather Forecast App",
    description:
      "Fetches real-time weather data using OpenWeather API. Shows temperature, conditions, and forecast.",
    image: WeatherLogo,
    tags: ["HTML", "API", "CSS", "JavaScript"],
    github: "https://github.com/Code-max-satyam/WeatherApp",
    webapp: "https://github.com/Code-max-satyam/WeatherApp",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

const handleOpenModal = (project) => setSelectedProject(project);
const handleCloseModal = () => setSelectedProject(null);


  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work