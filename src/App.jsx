import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/NavList'
// import { About, ContactMe, Navigation, NavList, Projects, ProjectsList } from './components'
import Navigation from './components/Navigation'
import NavList from './components/NavList'
import Header from './Header'
import './App.css'
import About from './components/About'
import Project from './components/Projects'
import Contact from './components/ContactMe'
import Resume from './components/Resume'
import { MyButton } from 'react-router-dom'
// import { RouterProvider } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'



function App() {

  return (
  <>
    <MyButton to="" />
    <MyButton to="about" />
    <MyButton to="projects" />
    <MyButton to="contact" />
    <MyButton to="resume" />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe"
            element={<About />} />
        <Route path="/projects"
            element={<Project />} />
        <Route path="/contact"
            element={<Contact />} />
        <Route path="/resume"
            element={<Resume />} />
    </Routes>
  
  <Header />
  <Navigation />
  <Outlet />
  </>

  )
}

export default App
