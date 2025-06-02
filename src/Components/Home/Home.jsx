import React, {useEffect} from 'react'
import './Home.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = ()=>{
  useGSAP(()=>{
    gsap.from(".hero .img", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    })
    gsap.from(".hero h1 span",
      {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5" ,)
    gsap.from(".hero p",
      {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    )
    gsap.from(".hero-action div",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.2, 
      },
      "-=0.5"
    );
  })
  return(
    <div className='hero' id='home'>
        <div className="img">

        </div>
        <h1><span>I'm Arpita Nagmoti,</span>FrontEnd Developer</h1>
        <p>I am a passionate FrontEnd Developer with expertise in HTML, CSS, JavaScript, and React. I craft intuitive and dynamic web experiences that bring ideas to life.</p>
    <div className="hero-action">
        <div className="hero-connect"><a href='#contact'>Connect with me</a></div>
        <div className="hero-resume"><a href='https://drive.google.com/file/d/1XFC5vj2L6gN1VjGFKD6MUK_VqyOtpERI/view?usp=drive_link'>Download resume</a></div>
    </div>
    </div>
    
       
    
  )
}
export default Home