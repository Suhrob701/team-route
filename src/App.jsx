import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
import Advantages from './pages/Advantages'
import OpenClub from './pages/OpenClub'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Start from './pages/Start'
import nav from "./assets/nav.png";
import flag from "./assets/flag.png";

const App = () => {
  return (
    <>
    <div>
         <div className="flex justify-center items-center gap-[90px]">
           <div>
             <img src={nav} alt="logo" />
           </div>
           <div className="flex items-center gap-2">
             <img src={flag} alt="flag" />
             <p>+998 (90)-606-66-66</p>
           </div>
           <button className="w-[238px] h-[36px] bg-[#01AEE7] text-white mt-20 -ml-20">
             Оставить заявку
           </button>
         </div>
   
         <hr className="w-[1239px] mt-7 mx-auto border border-black" />
   
         <div className="flex mx-auto gap-20 justify-around mt-2 w-[1200px] font-bold text-2xl">
           <Link to="/about">О бренде</Link>
           <h1 className="cursor-pointer">Продукции</h1>
           <Link to="/advantages">Преимущества</Link>
           <Link to="/open-club">Открыть клуб</Link>
           <Link to="/contacts">Контакты</Link>
         </div>
       </div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/advantages' element={<Advantages />} />
        <Route path='/open-club' element={<OpenClub />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
