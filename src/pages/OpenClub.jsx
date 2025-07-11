import React from 'react';
import bg from "../assets/bg.png";

const OpenClub = () => {
  return (
    <div>
      <div className='w-[1440px] mx-auto h-[153px] bg-[#01AEE7] mt-7 py-8'>
        <p className='w-[102px] font-bold text-[18px] text-[#FFF500] mx-auto'>КЛУБ TRUE</p>
        <h1 className='text-white font-bold text-[40px] text-center'>Открыть клуб вместе с TRUE</h1>
      </div>
      <img src={bg} alt="Background" className='mx-auto' />

      {/* Ariza yuborish qismi */}
      <div className='w-[1440px] h-[1147px] bg-[#D9D9D9] mx-auto py-10'>
        <h1 className='font-bold text-[30px] text-black text-center mb-8'>Отправить заявку</h1>

        {/* Ariza shakli */}
        <form className='w-[600px] mx-auto p-8 bg-[#D9D9D9] rounded-lg shadow-md'>
          {/* Har bir input maydoni uchun div */}
          <div className='mb-4'>
            <label htmlFor='fullName' className='block text-gray-700 text-sm font-bold mb-2'>ВАШЕ ИМЯ</label>
            <input
              type='text'
              id='fullName'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Введите ваше имя'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>E-MAIL</label>
            <input
              type='email'
              id='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Введите ваш E-mail'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='phone' className='block text-gray-700 text-sm font-bold mb-2'>НОМЕР ТЕЛЕФОНА</label>
            <input
              type='tel'
              id='phone'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='+998 (XX) XXX-XX-XX'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='city' className='block text-gray-700 text-sm font-bold mb-2'>ГОРОД</label>
            <input
              type='text'
              id='city'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Введите город'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='openType' className='block text-gray-700 text-sm font-bold mb-2'>ХОТИТЕ ОТКРЫТЬ:</label>
            <select
              id='openType'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value=''>Выберите вариант</option>
              <option value='Fitness studio'>Фитнес студия</option>
              <option value='Fitness club'>Фитнес клуб</option>
              <option value='Home gym'>Домашний спортзал</option>
              <option value='Gym in a hotel, sanatorium'>Тренажерный зал в отеле, санатории</option>
              <option value='Corporate gym'>Корпоративный спортзал</option>
              
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='projectPlan' className='block text-gray-700 text-sm font-bold mb-2'>ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</label>
            <input
              type='text'
              id='projectPlan'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Введите срок'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='interestedServices' className='block text-gray-700 text-sm font-bold mb-2'>КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</label>
            <input
              type='text'
              id='interestedServices'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Опишите услуги'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='uploadPlan' className='block text-gray-700 text-sm font-bold mb-2'>ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ:</label>
            <input
              type='file'
              id='uploadPlan'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <button
              type='button'
              className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              ADD PLAN
            </button>
          </div>

          <div className='mb-6'>
            <label htmlFor='comments' className='block text-gray-700 text-sm font-bold mb-2'>КОММЕНТАРИИ</label>
            <textarea
              id='comments'
              rows='4'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Ваши комментарии...'
            ></textarea>
          </div>

          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-[#01AEE7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
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

export default OpenClub;