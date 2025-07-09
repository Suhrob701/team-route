  import React from "react";
  import nav from '../assets/nav.png';
  import { Link } from 'react-router-dom';
  import flag from '../assets/flag.png';


  const Home = () => {
    return (
      <div>
        <div className="flex justify-center items-center gap-[90px]">
          <div>
            <img src={nav} alt="" />
          </div>
          <div className="flex items-center">
            <img src={flag} alt="" />
            <p>+998 (90)-606-66-66</p>
          </div>
          <button className="w-[238px] h-[36px] bg-[#01AEE7] text-white mt-20 -ml-70">Оставить заявку</button>
        </div>
        <hr className="w-[1239px] mt-7 mx-auto border-1 border-black"/>
        <div className="flex mx-auto gap-20 justify-around mt-2 w-[1200px] font-bold text-2xl">
          <Link to="/about">О бренде</Link>
          <h1>Продукции</h1>
          <Link to="/advantages">Преимущества</Link>
          <Link to="open-club">Открыть клуб</Link>
          <Link to="contacts">Контакты</Link>
        </div>
      </div>
    );
  };

  export default Home;
