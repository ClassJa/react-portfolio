import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/NavList'
// import { About, ContactMe, Navigation, NavList, Projects, ProjectsList } from './components'
import Navigation from './components/Navigation'
import NavList from './components/NavList'
import Header from './Header'
import './App.css'


function App() {

  return (
  <>
  <Header />
  <Navigation />
  </>
  )
}

export default App
