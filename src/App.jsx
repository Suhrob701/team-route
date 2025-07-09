import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Advantages from './pages/Advantages'
import OpenClub from './pages/OpenClub'
import About from './pages/About'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/advantages' element={<Advantages />} />
        <Route path='/open-club' element={<OpenClub />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
