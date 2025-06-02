import React from 'react';
import './Contact.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Contact = () =>{
useGSAP(()=>{
       const tl1 = gsap.timeline();
       tl1.from('.contact-title',{
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger:{
          trigger:'.contact-title h1',
          scroller:"body",
          start:"top 40%",
          end:"top 20%",
          scrub:2
        }
       })
        tl1.from('.contact-left',{
              opacity: 0,
              x: -50,
              duration: 1,
              ease: "power2.out",
              scrollTrigger:{
              trigger:'.contact-left',
              scroller:"body",
              start:"top 40%",
              end:"top 20%",
              scrub:2
              }
        })
        tl1.from('.contact-right',{
          opacity: 0,
          x: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger:{
          trigger:'.contact-left',
          scroller:"body",
          start:"top 40%",
          end:"top 20%",
          scrub:2
         }
        })
    tl1.from(".contact-detail", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger:{
            trigger:'.contact-detail',
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

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2343757d-f0a3-4d50-98c9-50b7d9081abe");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert(res.message);
      }
    };
  
    return(
        <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Get in touch with me for collaborations, project discussions, or any queries. I’m always excited to connect and learn—let’s build something great together!</p>
                <div className="contact-details">
                   <div className='contact-detail'>
                   <i class="fa-solid fa-envelope"></i>
                   <p>arpitanagmoti19@gmail.com</p>
                </div>
                <div className="contact-detail">
                   <i class="fa-solid fa-phone"></i>
                   <p>91+8669122388</p>
                </div>
                <div className="contact-detail">
                   <i class="fa-solid fa-location-dot"></i>
                   <p>Maharashtra,Solapur</p>
        </div>
        </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label>Enter Your Name </label>
            <input type="text" placeholder='Name is Required'/>
            <label>Enter Your email </label>
            <input type="email" placeholder='Email is Required'/>
            <label>Write Your Message Here</label>
            <textarea name='message' rows="8" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>

        </form>
        </div>
        </div>
    )
} 
export default Contact