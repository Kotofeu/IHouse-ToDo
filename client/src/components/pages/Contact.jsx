import React, { useState, useEffect } from 'react';
import MyInput from '../UI/MyInput/MyInput.jsx';
import MyTitle from '../UI/MyTitle/MyTitle';
import { fetchContacts, createContact } from '../../API/contactsApi';
import useRequest from '../../hooks/useRequest.js';
import MyError from '../UI/MyError/MyError.jsx';
import MyLoader from '../UI/MyLoader/MyLoader.jsx';
export default function Contact() {
  const [contact, contactLoading, contactError] = useRequest(fetchContacts);
  const personInfo = ['ФИО', 'Информация', 'Телефон', 'Почта'];
  const [personInput, setPersonInput] = useState({
    addNewPerson: '',
    findPerson: ''
  });
  useEffect(() => {
    document.title = 'Контакты';
  }, []);
  const formChange = e => {
    setPersonInput(prev => ({
      ...prev, [e.target.name]: e.target.value
    }));
  }
  const formInput = e => {
    e.preventDefault();
    setPersonInput(prev => ({
      ...prev, [e.target.name]: ''
    }));
  }
  if (contactError) {
    return (<MyError>{contactError}</MyError>);
  }
  if (contactLoading) {
    return (<MyLoader />);
  }
  return (
    <div className='contact'>
      <div className='container'>
        <div className='contact__inner'>
          <header className='contact__header'>
            <MyTitle>Список контактов
            </MyTitle>
          </header>
          <div className='contact-form'>
            <MyInput className='contact__form-add'
              massege='Добавить человка'
              id='addNewPerson'
              value={personInput.addNewPerson}
              onChange={formChange}
              onSubmit={formInput}
            />
            <MyInput className='contact__form-search'
              massege='Поиск'
              id='findPerson'
              value={personInput.findPerson}
              onChange={formChange}
              onSubmit={formInput}
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
                  <div className='contact__contact-item'>{item.name}</div>
                  <div className='contact__contact-item'>{item.info}</div>
                  <div className='contact__contact-item'>
                    <a className='contact__contact-phone' href={`tel:${item.phone}`}>
                      {item.phone}
                    </a>
                  </div>
                  <div className='contact__contact-item' >
                    <a className='contact__contact-mail' href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
