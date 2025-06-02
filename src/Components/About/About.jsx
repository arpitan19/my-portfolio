import React from 'react'
import './About.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const About = ()=>{
  useGSAP(()=>{
    const tl1 = gsap.timeline();
    tl1.from(".about-title h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.about-title h1',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
      }
    })
    tl1.from(".about-left ", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.about-left ',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
        }
    }, "-=0.5")
    tl1.from(".about-right", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:'.about-right',
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
      }
    }, "-=0.5")
    window.addEventListener('scroll',()=>{
      console.log(window)
      if(window.scrollY>450){
        tl1.restart()
      }
    })
  })
  return(
    <div className="about" id='about'>
        <div className="about-title">
            <h1>About me</h1>
          </div>
        <div className="about-sections">
         <div className="about-left">
         
         </div>
         <div className="about-right">
        <div className="about-para">
            <p>I am a highly motivated Computer Science student with a passion for software development and front-end design. Proficient in various programming languages, I focus on creating impactful and user-friendly websites that provide seamless digital experiences.</p>
            <p>I am always eager to learn and explore emerging technologies to enhance my skillset.</p>
        </div>
        <div className="about-skills">
        <div className="bar"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
        <div className="bar"><p>JavaScript</p><hr style={{width:"55%"}}/></div>
        <div className="bar"><p>ReactJs</p><hr style={{width:"65%"}}/></div>
        <div className="bar"><p>Angular</p><hr style={{width:"74%"}}/></div>
        <div className="bar"><p>Python</p><hr style={{width:"65%"}}/></div>
        </div>
        </div>
        </div>
        </div>
        )
    }
    export default About