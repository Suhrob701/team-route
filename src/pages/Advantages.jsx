import React from "react";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import forth from "../assets/forth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import top5 from "../assets/top5.png";
import bg22 from "../assets/bg22.png";
import uzb from "../assets/uzb.png";

const Advantages = () => {
  return (
    <div>
      <div className="w-[1440px] h-[315px] bg-[#01AEE7] mx-auto mt-5 py-15">
        <p className="w-[172px] font-bold text-[13px] text-[#FFF500] mx-auto">
          НАШИ ПРЕИМУЩЕСТВА
        </p>
        <h1 className="w-[599px] font-bold text-[35px] text-white mx-auto pl-10 py-5">
          Преимущества TRUE FITNESS
        </h1>
        <h4 className="text-white w-[700px] mx-auto pl-20 font-bold text-2xl">
          Благодаря которым мы являемся мировым лидером в производстве
          фитнес-оборудования
        </h4>
      </div>

      <div className="w-[1440px] h-[976px] mx-auto flex flex-wrap justify-center gap-10 py-10">
        <div className="w-[295px] h-[456px]">
          <img src={first} alt="" />
          <h1 className="w-[200px] text-center pl-10 font-bold text-2xl text-[#01AEE7]">
            Лучшие характеристики в классе
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Наши тренажеры имеют самые совершенные характеристики в классе, от
            более мощных технических показателей до расширенных функциональных
            возможностей
          </p>
        </div>
        <div className="w-[295px] h-[456px]">
          <img src={second} alt="" />
          <h1 className="w-[200px] text-center pl-10 font-bold text-2xl text-[#01AEE7]">
            Высокая надежность оборудования
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Высокое качество тренажеров - это визитная карточка TRUE. Кроме
            того, TRUE предоставляет до 5 лет полной гарантии на кардио
            тренажеры.
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={third} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Низкая стоимость владения
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Тренажеры способны выдерживать серьезную эксплуатационную нагрузку,
            сохраняя минимальные затраты на сервис, что обеспечивает минимальную
            стоимость владения
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={forth} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Качественный и оперативный сервис
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Оборудование должно работать бесперебойно, поэтому мы уделяем особое
            внимание наличию всех необходимых запчастей и высокой срочности
            технического реагирования
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={fifth} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Цены ниже, чем у аналогов
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы
            полностью превосходим конкурентов, наши цены ниже
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={sixth} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Совершенная производительность
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для
            достижения самых высоких результатов.
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={seven} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Абсолютные лидеры по количеству инноваций
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Наши тренажеры имеют самые совершенные характеристики в классе, от
            более мощных технических показателей до расширенных функциональных
            возможностей
          </p>
        </div>

        <div className="w-[295px] h-[456px]">
          <img src={eight} alt="" />
          <h1 className="w-[295px] text-center font-bold text-2xl text-[#01AEE7]">
            Максимальное удобство и функциональность
          </h1>
          <p className="w-[295px] font-[400] text-[13px] text-center">
            Компания TRUE продумывает все технические нюансы и делает тренажеры
            максимально удобными и функциональными
          </p>
        </div>
      </div>

      <img src={top5} alt="" className="mx-auto" />

      <div
        className="w-[1440px] h-[717px] mx-auto mt-10 py-10"
        style={{ backgroundImage: `url(${bg22})` }}
      >
        <p className="w-[112px] font-bold text-[15px] text-[#FFF500] mx-auto">
          TRUE FITNESS
        </p>
        <h1 className="w-[400px] text-center py-13 font-bold text-4xl mx-auto">
          Получите <span className="text-[#01AEE7]">эксклюзивное</span>{" "}
          предложение на тренажеры{" "}
          <span className="text-[#01AEE7]">TRUE FITNESS</span>
        </h1>
        <p className="font-bold text-[15px] text-[#FFF500] text-center">
          Мы будем рады проконсультировать Вас и помочь с подбором оборудования
        </p>
        <div className="flex gap-5 justify-center mt-10">
          {/* Ism input */}
          <input
            type="text"
            placeholder="имя"
            className="font-bold text-black border-none pl-7 text-[20px] w-[295px] h-[60px] bg-white"
          />

          {/* Telefon input ichida rasm */}
          <div className="relative w-[295px] h-[60px]">
            <img
              src={uzb}
              alt="flag"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-[30px] h-[30px] items-center border-none"
            />
            <input
              type="text"
              className="w-full h-full pl-[45px] bg-[#D9D9D9] text-[22px] font-semibold text-black placeholder:text-black"
              placeholder="+998 (99)-999-99-99"
            />
          </div>
                <input
            type="email"
            placeholder="Email"
            className="font-bold text-black border-none pl-7 text-[20px] w-[295px] h-[60px] bg-white"
          />
          <button className="text-white font-bold w-[295px] h-[60px] bg-[#01AEE7] border-none">отправить</button>
        </div>
        <p className="w-[650px] font-bold text-center mt-10 text-[15px] text-white mx-auto">«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
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
  );
};

export default Advantages;
