import React, { useRef } from 'react'
import './Navbar.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Navbar = ()=>{
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  useGSAP(()=>{
   gsap.from('.header h2',{
      y:-50,
      opacity:0
    })
    gsap.from('.header .links a',{
      opacity:0,
      y:-5,
      color:'black',
      stagger:0.25
  })
  gsap.from('header .links .nav-connect',{
    x:200,
    opacity:0
  },-2)
  })
  return(
    <div class="header">
    <h2>Web Portfolio</h2>
    <div onClick={openMenu} className="nav-mob-open">
      <i class="fa-solid fa-bars"></i></div>
   <div ref={menuRef} className="links">
    <div onClick={closeMenu} className="nav-mob-close">
    <i class="fa-regular fa-rectangle-xmark"></i></div>
    <a href="#home">Home</a>
    <a href="#about">About me</a>
    <a href="#acdmics">Academics</a>
    <a href="#project">Projects</a>
    <a href="#contact">Contact Me</a>
    <div className='nav-connect'><a href='#contact'>Connect with me</a></div>
    </div>
    </div>
  )
}
export default Navbar