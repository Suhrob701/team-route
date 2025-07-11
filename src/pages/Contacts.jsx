import React from 'react'
// import Home from '../pages/Home'
import img from '../assets/rasm.png'


const Contacts = () => {
  return (
    <div>
      <div className="con1 w-[1440px] h-[225px] bg-[#01AEE7] mx-auto mt-[10px] text-white">
        <p className='text-[#FFF500] text-[16px] text-center pt-[28px] font-bold'>КОНТАКТЫ</p>
        <p className='text-[white] text-[35px] text-center pt-[26px] font-bold'>ШОУ РУМ TRUE В ТАШКЕНТЕ  <br /> <span className='text-[27px]'>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</span></p>
      </div>
      <div className="con2 w-[1440px] h-[840px] mx-auto flex justify-evenly items-center text-white">
        <button className='w-[60px] h-[60px]rounded-[100px] text-[40px]'>⬅️</button>
        <img src={img} className='w-[1030px] h-[692px]' alt="" />
        <button className='w-[60px] h-[60px] rounded-[100px] text-[40px]'>➡️</button>
      </div>
      <div className="con3 w-[1440px] h-[662px] mx-auto bg-[#D9D9D9] flex">
        <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.336522500461!2d69.28418477629978!3d41.366772797273235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d2b7364ca3b%3A0x17ae9b1138235319!2sMARS%20IT%20school%20yunusobod!5e0!3m2!1sru!2s!4v1752064079226!5m2!1sru!2s"
            width="704"
            height="662"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <p className='text-[28px] text-[#01AEE7] font-bold mt-[140px] ml-[115px] w-[528px]'>Официальный Дистрибьютер в Узбекистане - ProWellness </p>
          <p className='text-[25px] text-black  mt-[48px] ml-[115px]'>+998 (90)-606-66-66 </p>
          <p className='text-[25px] text-[#01AEE7] mt-[10px] ml-[115px]'>INFO@PROWELLNESS.UZ </p>
          <p className='text-[25px] text-black  mt-[10px] ml-[115px] w-[428px]'>Адрес: Ташкент Сити, Булевард, ул. Фурката 2А </p>
          <p className='text-[28px] text-[#01AEE7] font-bold mt-[48px] ml-[115px] w-[304px]'>ПН-СБ с 9:00-19:00 ВС НЕ РАБОЧИЙ </p>
        </div>
      </div>
      <footer className="bg-[#00B4EB] text-white py-10 px-20 text-[14px] w-[1440px] h-[383px] mx-auto">
        <div className="flex flex-wrap justify-between gap-10">
          {/* 1. Katalog tovarov */}
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
  )
}

export default Contacts
