import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Acadmics from './Components/Acadmics/Acadmics'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = ()=>{
  return(
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Acadmics/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default App