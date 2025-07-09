import React from 'react'
import Home from '../pages/Home'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import igm1 from '../assets/aimg1.png'
import igm2 from '../assets/aimg2.png'
import igm3 from '../assets/aimg3.png'
import igm4 from '../assets/aimg4.png'
import igm5 from '../assets/aimg5.png'
import igm6 from '../assets/aimg6.png'


const About = () => {
  return (
    <div>
      <Home /> 
      <div className="con1 w-[1440px] h-[225px] bg-[#01AEE7] mx-auto mt-[10px]">
        <p className='text-[#FFF500] text-[16px] text-center pt-[28px] font-bold'>О НАШЕМ БРЕНДЕ</p>
        <p className='text-[white] text-[35px] text-center pt-[26px] font-bold'>TRUE - СОВЕРШЕННОE <br /> ФИТНЕС-ОБОРУДОВАНИЕ</p>
      </div>
      <div className="con2 w-[1440px] h-[969px] mx-auto flex items-center" style={{ backgroundImage: `url(${bg1})` }}>
        <div className='w-[1030px] h-[768px] bg-[white] mx-auto'>
          <p className='w-[823px] text-[#01AEE7] text-[22px] font-normal ml-[107px] mt-[71px]'>Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</p>
          <p className='w-[823px] text-[black] text-[22px] font-normal ml-[107px] mt-[24px]'>Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.</p>
          <p className='w-[823px] text-[black] text-[22px] font-normal ml-[107px] mt-[24px]'>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</p>
          <p className='w-[823px] text-[#01AEE7] text-[22px] font-bold ml-[107px] mt-[24px]'>Свяжитес ь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</p>
        </div>
      </div>
      <div className="con3 w-[1440px] h-[1250px] bg-[#01AEE7] mx-auto text-white">
        <h1 className='text-[40px] font-bold text-center pt-[65px]'>Наши инновации</h1>
        <div className="pt-[65px] justify-center flex flex-wrap gap-[30px]">
          <div className="w-[400px] h-[483px]  ">
            <img src={igm1} className='w-[400px] h-[368px]' alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Тренажер Лестница TRUE Palisade</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
          <div className="w-[400px] h-[483px] ">
            <img src={igm2} alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Функциональный тренинг с Composite Strength</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
          <div className="w-[400px] h-[483px] ">
            <img src={igm3} alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Рамы для стрейтчинга TRUE Stretch</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
          <div className="w-[400px] h-[483px] ">
            <img src={igm4} alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Латеральный тренажер TRUE Traverse</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
          <div className="w-[400px] h-[483px] ">
            <img src={igm5} alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Беговая дорожка TRUE Alpine Runner</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
          <div className="w-[400px] h-[483px] ">
            <img src={igm6} alt="" />
            <p className='text-[22px] font-bold mt-[34px]'>Эллиптический тренажер TRUE Spectrum</p>
            <div className='w-[247px] h-[3px] bg-[#FFD233] rounded-[3px] mt-[16px]'></div>
          </div>
        </div>
      </div>
      <div className="con4 w-[1440px] h-[717px] mx-auto flex justify-center items-center text-white" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="w-[1318px] h-[618px] bg-[#120E0E5E]">
          <p className='text-[15px] font-bold text-[#FFFF19] text-center mt-[38px]'>TRUE FITNESS</p>
          <p className='text-[40px] font-bold  text-center mt-[64px] w-[621px] mx-auto'>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</p>
          <p className='text-[15px] font-bold text-[#CDC848] text-center mt-[12px]'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
          <div className="w-[1240px] h-[60px] mx-auto mt-[64px] flex gap-[20px]">
            <input type="text" className='w-[295px] h-[60px] bg-[#D9D9D9] text-[24px] font-seimbold text-[black] pl-[15px] placeholder:text-black' placeholder='имя'/>
            <input type="text" className='w-[295px] h-[60px] bg-[#D9D9D9] text-[22px] font-seimbold pl-[15px] text-[black] placeholder:text-black' placeholder='🇺🇿 +998 (99)-999-99-99'/>
            <input type="text" className='w-[295px] h-[60px] bg-[#D9D9D9] text-[24px] font-seimbold pl-[15px] text-[black] placeholder:text-black' placeholder='e-mail'/>
            <button className='w-[295px] h-[60px] bg-[#01AEE7] text-[24px] font-seimbold'>отправить</button>
          </div>
          <p className='text-[15px] font-bold text-center mt-[25px] w-[767px] mx-auto'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
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

export default About
