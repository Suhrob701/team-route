import React from "react";
import nav from "../assets/nav.png";
import { Link } from "react-router-dom";
import flag from "../assets/flag.png";
import back from "../assets/back.png";
import pause from "../assets/pause.png";
import arrow from "../assets/arrow.png";
import gym from "../assets/gym.png";
import dot from "../assets/dot.png";
import group from "../assets/group.png";
import rec from "../assets/rec.png";
import headphones from "../assets/headphones.png";
import rectangular from "../assets/rectangular.png";
import settings from "../assets/settings.png";
import youtube from "../assets/youtube.png";
import forest from "../assets/forest.png";
import lorry from "../assets/lorry.png";
import runn from "../assets/runn.png";

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
        <button className="w-[238px] h-[36px] bg-[#01AEE7] text-white mt-20 -ml-70">
          Оставить заявку
        </button>
      </div>
      <hr className="w-[1239px] mt-7 mx-auto border-1 border-black" />
      <div className="flex mx-auto gap-20 justify-around mt-2 w-[1200px] font-bold text-2xl">
        <Link to="/about">О бренде</Link>
        <h1 className="cursor-pointer">Продукции</h1>
        <Link to="/advantages">Преимущества</Link>
        <Link to="open-club">Открыть клуб</Link>
        <Link to="contacts">Контакты</Link>
      </div>

      <div
        className="w-[1440px] h-[672px] mx-auto mt-7 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <img src={pause} alt="" className="mb-6" />
          <h1 className="font-bold text-5xl max-w-[861px] leading-tight text-white mx-auto">
            TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>
      </div>

      <div className="w-[1440px] h-[266px] bg-[#01AEE7] flex flex-col items-center mx-auto justify-center gap-6">
        <hr className="w-[230px] border-t-1 border-[#FFF500] mt-10" />
        <h1 className="w-[893px] text-center font-bold text-white text-4xl">
          TRUE - ведущий мировой производитель премиального фитнес оборудования
        </h1>
        <hr className="w-[230px] border-t-1 border-[#FFF500] mt-10" />
      </div>

      <div className="w-[1440px] mx-auto mt-10 flex justify-evenly gap-40">
        <div>
          <h1 className="w-[27px] h-[146px] font-bold text-5xl">
            TRUE <span className="text-[#01AEE7]">FITNESS</span>
          </h1>
          <hr className="w-[105px] border-t-4 border-[#FFF500]" />
          <h3 className="w-[410px] h-[148px] font-bold text-4xl mt-5">
            Современное и надежное оборудование для фитнес-клубов
          </h3>
          <div className="flex items-center">
            <h4 className="w-[243px] h-[74px] font-bold text-3xl text-[#01AEE7] mt-8">
              КАРДИО ТРЕНАЖЕРЫ
            </h4>
            <img src={arrow} alt="" className="mt-20" />
          </div>
        </div>
        <div>
          <img src={gym} alt="" />
        </div>
      </div>
      <img className="mx-auto -mt-20" src={dot} alt="" />

      <div className="w-[1440px] h-[660px] bg-[#F5F5F5] mx-auto mt-10 flex flex-wrap gap-10 justify-center py-4">
        <div
          className="w-[684px] h-[426px]"
          style={{ backgroundImage: `url(${group})` }}
        >
          <h1 className="w-[427px] h-[74px] font-bold text-4xl text-white pl-20 py-28">
            Лучшие характеристики
          </h1>
          <hr className="w-[243px] border-t-2 border-[#FFF500] ml-20" />
          <p className="w-[577px] h-[88px] font-medium text-normal text-white pl-20 py-5">
            Наши тренажеры имеют самые совершенные характеристики в классе, от
            более мощных технических показателей до расширенных функциональных
            возможностей
          </p>
        </div>
        <div className="w-[684px] h-[213px] bg-[#01AEE7] ">
          <h1 className="w-[531px] h-[74px] font-bold text-3xl text-white pl-10 py-4">
            ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ
          </h1>
          <hr className="w-[243px] border-t-2 border-[#FFF500] ml-10 mt-5" />
          <p className="text-white w-[500px] py-2 pl-10 h-[66px] font-medium text-normal">
            Высокое качество тренажеров - это визитная карточка TRUE. Кроме того
            TRUE предоставляет до 5 лет гарантии на кардиотренажеры.
          </p>
        </div>
        <div className="w-[684px] h-[213px] bg-[#01AEE7] -mt-7">
          <h1 className="w-[531px] h-[74px] font-bold text-3xl text-white pl-10 py-4">
            Низкая СТОИМОСТЬ ВЛАДЕНИЕ
          </h1>
          <hr className="w-[243px] border-t-2 border-[#FFF500] ml-10 mt-5" />
          <p className="text-white w-[500px] py-2 pl-10 h-[66px] font-medium text-normal">
            Надежность оборудования обеспечивает низкие затраты на сервисное
            обслуживание, так по стоимости затрат на эксплуатацию TRUE
            выигрывает у конкурентов.
          </p>
        </div>
        <div
          className="w-[684px] h-[426px] -mt-60"
          style={{ backgroundImage: `url(${rec})` }}
        >
          <h1 className="w-[427px] h-[74px] font-bold text-4xl text-white pl-20 py-28">
            КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС
          </h1>
          <hr className="w-[243px] border-t-2 border-[#FFF500] ml-20" />
          <p className="w-[577px] h-[88px] font-medium text-normal text-white pl-20 py-5">
            Оборудование должно работать бесперебойно, поэтому мы уделяем особое
            внимание наличию всех необходимых запчастей и высокой срочности
            технического реагирования.
          </p>
        </div>
      </div>
<div className="w-[1440px] h-[850px] mx-auto bg-[#EEEEEE] py-10 mt-8">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row px-10">
    {/* Chap blok */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-[#01AEE7] text-3xl font-bold mb-10">
        МЫ ПРЕДЛАГАЕМ <br /> ПОЛНЫЙ КОМПЛЕКС УСЛУГ
      </h1>

      {/* Flex konteyner: 2 ustunli xizmatlar */}
      <div className="flex flex-wrap gap-x-8 gap-y-10">
        {/* 1 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={headphones} alt="консалтинг" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">КОНСАЛТИНГ</h4>
            <p className="text-sm text-gray-600">
              Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={youtube} alt="монтаж" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h4>
            <p className="text-sm text-gray-600">
              Пуско-наладочные работы и сервисное обслуживание тренажеров.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={rectangular} alt="оборудование" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h4>
            <p className="text-sm text-gray-600">
              Проектируем расстановку и визуализируем ваш будущий проект.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={forest} alt="showroom" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">ФИРМЕННЫЙ SHOW-ROOM</h4>
            <p className="text-sm text-gray-600">
              Пройдите тест-драйв оборудования перед покупкой.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={settings} alt="запчасти" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">ПОСТАВКА ЗАПЧАСТЕЙ</h4>
            <p className="text-sm text-gray-600">
              Поставка гарантийных и постгарантийных запчастей.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="w-[300px] flex gap-4 items-start">
          <img src={lorry} alt="доставка" className="w-10 h-10 mt-1" />
          <div>
            <h4 className="font-bold text-sm">ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ</h4>
            <p className="text-sm text-gray-600">
              Мы доставляем оборудование по всей стране.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* O‘ng blok (rasm) */}
    <div className="w-full lg:w-1/2 flex justify-end mt-10 lg:mt-0">
      <img src={runn} alt="Runn" className="w-[900px] h-[800px] object-contain" />
    </div>
  </div>
</div>



      

      <footer className="bg-[#00B4EB] text-white py-10 px-20 text-[14px] w-[1440px] h-[383px] mx-auto">
        <div className="flex flex-wrap justify-between gap-10">
   ``
          <div>
            <h3 className="font-bold mb-4">КАТАЛОГ ТОВАРОВ</h3>
            <ul className="space-y-2">
              <li>КАРДИО ТРЕНАЖЕРЫ</li>
              <li>COMPOSITE STRENGTH</li>
              <li>TRUE</li>
              <li>САЙКЛИНГ</li>
              <li>ГРУППОВЫЕ ТРЕНИРОВКИ</li>
              <li>СИЛОВЫЕ ТРЕНАЖЕРЫ</li>
              <li>КОНСОЛИ</li>
            </ul>
            <p className="mt-4">© TRUE FITNESS</p>
          </div>

          {/* 2. Информация */}
          <div>
            <h3 className="font-bold mb-4">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2">
              <li>О БРЕНДЕ</li>
              <li>ПРЕИМУЩЕСТВА</li>
              <li>ОТКРЫТЬ КЛУБ</li>
              <li>ПРОДУКЦИИ</li>
              <li>КОНТАКТЫ</li>
            </ul>
          </div>

          {/* 3. Контакты */}
          <div>
            <h3 className="font-bold mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
              <li>КОНТАКТЫ</li>
            </ul>
          </div>

          {/* 4. Подписка */}
          <div>
            <h3 className="font-bold mb-4">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
            <div className="flex mb-4 gap-[15px]">
              <input
                type="email"
                placeholder="E - MAIL"
                className="px-4 py-2 text-black placeholder:text-black w-[200px] bg-[#D9D9D9]"
              />
              <button className="bg-yellow-400 text-black px-4">➤</button>
            </div>
            <div className="flex space-x-3 text-[20px]">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
