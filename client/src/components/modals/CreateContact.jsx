import React, { useState } from 'react'
import { createContact } from '../../API/contactsApi';
import ContactStore from '../../store/ContactStore';
import MyInput from '../UI/MyInput/MyInput';

export default function CreateContact({ closeModal, isShowModal}) {
  const [person, setPerson] = useState({
    name: '',
    info: '',
    phone: '',
    email: ''
  });
  const changePersonInfo = e => {
    setPerson(prev => ({
      ...prev, [e.target.id]: e.target.value
    }));
  }
  const formInput = e => {
    e.preventDefault();
    let contacts = ContactStore.contacts;
    let isUnique = !(contacts.find(item => item.name === person.name))
      && !(contacts.find(item => item.phone === person.phone))
      && !(contacts.find(item => item.email === person.email));
    if (isUnique && person.name) {
      createContact({ name: person.name, info: person.info, phone: person.phone, email: person.email })
        .then(data => ContactStore.addContact(data));
      setPerson({
        name: '',
        info: '',
        phone: '',
        email: ''
      });
      closeModal();
    }
    else {
      !person.name
        ? alert('Введите ФИО!')
        : alert('Такой контакт уже есть!');
    }
  }
  return (
    <div className={`contact__modal ${isShowModal?'contact__modal--active':''}`}>
      <form className='contact__modal-form' method="POST">
        <h4 className='contact__modal-title'>Добавить контакт</h4>
        <input className="contact__modal-input"
          value={person.name}
          onChange={changePersonInfo}
          placeholder='Введите ФИО'
          type='text'
          id='name'
          autoComplete = 'off'
          required
        />
        <input className="contact__modal-input"
          value={person.info}
          onChange={changePersonInfo}
          placeholder='Введите информацию'
          type='text'
          id='info'
          autoComplete = 'off'
        />
        <input className="contact__modal-input"
          value={person.phone}
          onChange={changePersonInfo}
          placeholder='Введите телефон'
          type='tel'
          id='phone'
          autoComplete = 'off'
        />
        <input className="contact__modal-input"
          value={person.email}
          onChange={changePersonInfo}
          placeholder='Введите почту'
          type='email'
          id='email'
          autoComplete = 'off'
        />
        <div className="contact__modal-btn-box">
          <button className="contact__modal-bnt" type='button' onClick={formInput}>Сохранить</button>
          <button className="contact__modal-bnt" type='button' onClick={closeModal}>Отмена</button>
        </div>
      </form>
    </div>
  )
}
