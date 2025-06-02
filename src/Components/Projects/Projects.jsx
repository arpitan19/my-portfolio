import React from "react";
import { useGSAP } from "@gsap/react";
import "./Projects.css";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";

const projectsData = [
  {
    id: 1,
    title: "Appointment Booking System",
    description:"A web application to schedule and manage doctor appointments efficiently.",
    technologies: "ReactJS",
    link: "#",
  },
  { id: 2,
    title: "Student Management System",
    description:"A full-stack application using Angular and MongoDB for managing student records. It supports seamless CRUD operations with a user-friendly interface and efficient data storage.",
    technologies: "Angular, Mongodb",
    link: "#",
  },
  {
    id: 3,
    title: "Random API Generator",
    description: " This application generates profiles of random users,including details like name, email, phone number, and location, using real-time data from APIs.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://www.linkedin.com/posts/arpita-nagmoti-164b6727a_webdevelopment-javascript-frontenddevelopment-activity-7264217670084907008-u0vC?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "Interactive Calculator",
    description: "A responsive calculator built with HTML, CSS, and JavaScript.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://web-calculator-lime.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website built with HTML, CSS,and ReactJS to showcase projects, skills, and professional experience.Fully responsive design with interactive animations to engage visitors and highlight achievements.",
    technologies: "HTML, CSS, ReacJs",
    link: "#",
  },
  {
    id: 6,
    title: "Employee Attrition Prediction",
    description:"A machine learning model to predict employee attrition with 85% accuracy.",
    technologies: "Python, scikit-learn",
    link: "#",
  },

];
const Projects = () => {
  useGSAP(()=>{
    const tl1 = gsap.timeline();
    tl1.from(".projects-title h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.projects-title h1',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
      }
    })
    tl1.from(".projects-container",{
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.projects-container',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
        }
      })
      window.addEventListener('scroll',()=>{
        console.log(window)
        if(window.scrollY>450){
          tl1.restart()
        }
      })
    
  })
  return (
    <section className="projects" id="project">
      <div className="projects-title">
            <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;                                                                  