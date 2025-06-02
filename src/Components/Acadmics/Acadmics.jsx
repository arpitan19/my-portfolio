import React from "react";
import "./Acadmics.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Acadmics = () => {
const educationData = [
    
    {
      id: 1,
      title: "B.Tech in AI & Data Science",
      institution: "Shree Siddheshwar Women'S College Of Engineering, Solapur.",
      year: "Expected Graduation: 2025",
      icon: "https://cdn-icons-png.flaticon.com/512/1157/1157034.png",
    },
    {
      id: 2,
      title: "Diploma in Computer Engineering",
      institution: "Solapur Education Society's Polytechnic, Solapur.",
      year: "Graduated: 2022",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135756.png",
      
    },
    {
      id: 3,
      title: "Secondary School (10th)",
      institution: "Shri Siddheshwar bal mandir, Solapur.",
      year: "Completed: 2018",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135765.png",
    },
  ];
  useGSAP(()=>{
    const tl1 = gsap.timeline();
    tl1.from(".container-title h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.container-title h1',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
      }
    })
      tl1.from('.education-card',{
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger:{
          trigger:'.education',
          scroller:"body",
          start:"top 30%",
          end:"top 10%",
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
    <div className="container" id="acdmics">
    <div className="container-title">
            <h1>Acadmics</h1>
    </div>
    <section className="education">
      {educationData.map((edu) => (
        <div key={edu.id} className="education-card">
          <div className="icon">
            <img src={edu.icon} alt="Education Icon" />
          </div>
          <h2>{edu.title}</h2>
          <p>{edu.institution}</p>
          <p>{edu.year}</p>
        </div>
      ))}
    </section>
    </div>

  );
};

export default Acadmics;
