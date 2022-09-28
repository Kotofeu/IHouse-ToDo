import React, { useState, useEffect } from 'react'
import MyInput from '../UI/MyInput/MyInput.jsx'
import MyTitle from '../UI/Title/MyTitle'

export default function Contact() {
  const personInfo = ['ФИО', 'Информация', 'Телефон', 'Почта'];
  const [contact, setContact] = useState([
    {
      id: '1',
      person: { name: 'Крупчатниковаоваова Александрина Красильникова', post: 'Дизайнер', phone: '89114968216', mail: 'cras.petrov@yandex.ru' }
    },
    {
      id: '2',
      person: { name: 'Фадеев Иван Макарович', post: 'Электрик', phone: '+7(971)172-73-80', mail: 'prauffobrawafa-2326@yopmail.com' }
    },
    {
      id: '3',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '31',
      person: { name: 'Виноградова Ксения Владиславовна', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '32',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '33',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '34',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '35',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '36',
      person: { name: 'Чернов Никита Олегович', post: 'Владелец', phone: '+7(911)671-64-62', mail: 'sourepoipreihe@gmail.com' }
    },
    {
      id: '4',
      person: { name: 'Лосева Диана Александровна', post: 'Строитель', phone: '8(911)563-55-62', mail: 'hovoufauppabra@mail.ru' }
    }
  ]);
  const [personInput, setPersonInput] = useState({
    addNewPerson: '',
    findPerson: ''
  });
  useEffect(() => {
    document.title = 'Контакты';
  })
  const formChange = e =>{
    setPersonInput(prev => ({
      ...prev, [e.target.name]:e.target.value
    }))
  }
  const formInput = e =>{
    e.preventDefault()
    setPersonInput(prev => ({
      ...prev, [e.target.name]:''
    }))
  }
  return (
    <div className='contact'>
      <div className='container'>
        <div className='contact__inner'>
          <header className='contact__header'>
            <MyTitle>Список контактов
            </MyTitle>
          </header>
          <div className="contact-form">
            <MyInput className='contact__form-add'
              massege='Добавить человка'
              id='addNewPerson'
              value={personInput.addNewPerson}
              onChange={formChange}
              onClick={formInput}
            />
            <MyInput className='contact__form-search'
              massege='Поиск'
              id='findPerson'
              value={personInput.findPerson}
              onChange={formChange}
              onClick={formInput}
            />
          </div>

          <section className='contact__contact-table'>
            <header className='contact__contact-thead contact__contact-row'>
              {personInfo.map(property =>
                <p className='contact__contact-item' key={property}>{property}</p>
              )}
            </header>
            <ul className='contact__contact-tbody'>
              {contact.map(item =>
                <li className='contact__contact-row' key={item.id} >
                  <div className='contact__contact-item'>{item.person.name}</div>
                  <div className='contact__contact-item'>{item.person.post}</div>
                  <div className='contact__contact-item'>
                    <a className='contact__contact-phone' href={`tel:${item.person.phone}`}>
                      {item.person.phone}
                    </a>
                  </div>
                  <div className='contact__contact-item' >
                    <a className='contact__contact-mail' href={`mailto:${item.person.mail}`}>
                      {item.person.mail}
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}