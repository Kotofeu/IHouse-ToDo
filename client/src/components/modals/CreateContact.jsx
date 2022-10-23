import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContact, fetchContact, updateContact } from '../../API/contactsApi';
import ContactStore from '../../store/ContactStore';

const CreateContact = observer(() => {
  const [person, setPerson] = useState({
    id: null,
    name: '',
    info: '',
    phone: '',
    email: ''
  });
  useEffect(() => {
    if (ContactStore.selectedСontact) {
      fetchContact(ContactStore.selectedСontact)
        .then(data => setPerson({
          id: ContactStore.selectedСontact,
          name: data.name,
          info: data.info ? data.info : '',
          phone: data.phone ? data.phone : '',
          email: data.email ? data.email : '',
        }));
    }
  }, [ContactStore.selectedСontact]);

  const clearFields = () => {
    setPerson({
      id: null,
      name: '',
      info: '',
      phone: '',
      email: ''
    });
  }
  const changePersonInfo = e => {
    setPerson(prev => ({
      ...prev, [e.target.id]: e.target.value
    }));
  }
  const formSave = e => {
    e.preventDefault();
    let contacts = ContactStore.contacts;
    let isUnique = !(contacts.find(item => item.name === person.name))
      && (!(contacts.find(item => item.phone === person.phone)) || !person.phone)
      && (!(contacts.find(item => item.email === person.email)) || !person.email);
    if (isUnique && person.name) {
      createContact(
        {
          name: person.name,
          info: person.info,
          phone: person.phone ? person.phone : null,
          email: person.email ? person.email : null
        })
        .then(data => ContactStore.addContact(data));
      closeModal()
    }
    else {
      !person.name
        ? alert('Введите ФИО!')
        : alert('Такой контакт уже есть!');
    }
  }
  const formUpdate = e => {
    updateContact({
      id: person.id,
      name: person.name,
      info: person.info,
      phone: person.phone ? person.phone : null,
      email: person.email ? person.email : null
    }).then(() => ContactStore.updateConctact(person));
    closeModal();
  }
  const closeModal = () => {
    ContactStore.setIsShowModal(false);
    const animationDelay = setTimeout(() => {
      ContactStore.setSelectedСontact(null);
      clearFields();
    }, 300);
  }

  return (
    <div className={`contact__modal ${ContactStore.isShowModal
      ? 'contact__modal--active'
      : ''}`}>
      <form className='contact__modal-form' method="POST">
        <h4 className='contact__modal-title'>Добавить контакт</h4>
        <input className="contact__modal-input"
          value={person.name}
          onChange={changePersonInfo}
          placeholder='Введите ФИО'
          type='text'
          id='name'
          autoComplete='off'
          required
        />
        <input className="contact__modal-input"
          value={person.info}
          onChange={changePersonInfo}
          placeholder='Введите информацию'
          type='text'
          id='info'
          autoComplete='off'
        />
        <input className="contact__modal-input"
          value={person.phone}
          onChange={changePersonInfo}
          placeholder='Введите телефон'
          type='tel'
          id='phone'
          autoComplete='off'
        />
        <input className="contact__modal-input"
          value={person.email}
          onChange={changePersonInfo}
          placeholder='Введите почту'
          type='email'
          id='email'
          autoComplete='off'
        />
        <div className="contact__modal-btn-box">
          {ContactStore.selectedСontact
            ? <button
              className="contact__modal-bnt"
              type='button'
              onClick={formUpdate}>
              Обновить
            </button>
            : <button
              className="contact__modal-bnt"
              type='button'
              onClick={formSave}>
              Сохранить
            </button>
          }
          <button
            className="contact__modal-bnt"
            type='button'
            onClick={closeModal}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
});
export default CreateContact;