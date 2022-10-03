import React, { useState, useEffect } from 'react';
import MyInput from '../UI/MyInput/MyInput.jsx';
import MyTitle from '../UI/MyTitle/MyTitle';
import ContactList from '../ContactList.jsx';
import ContactStore from '../../store/ContactStore.js';
import MyLoader from '../UI/MyLoader/MyLoader.jsx';
import MyError from '../UI/MyError/MyError.jsx';
import { createContact, fetchContacts } from '../../API/contactsApi.js';
import useRequest from '../../hooks/useRequest.js';
const Contact = () => {
  const [person, setPerson] = useState('');
  useEffect(() => {
    document.title = 'Контакты';
  }, []);
  const [contact, contactLoading, contactError] = useRequest(fetchContacts);
  useEffect(() => {
    ContactStore.setContact(contact)
  }, [contact]);
  const formInput = e => {
    e.preventDefault();
    let isUnique = !(ContactStore.contacts.find(item => item.name === person));
    if (isUnique && person) {
      createContact(person)
        .then(data => ContactStore.addContact(data));
      setPerson('');
    }
    else {
      !person
        ? alert('Введите значение!')
        : alert('Такой контакт уже есть!');
    }
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
            <MyTitle>Список контактов</MyTitle>
          </header>
          <div className='contact__form'>
            <MyInput className='contact__form-search'
              massege='Поиск'
              id='findPerson'
              value={person}
              onChange={e => setPerson(e.target.value)}
              onSubmit={formInput}
            />
          </div>
          <ContactList />
        </div>
      </div>
    </div>
  );
}
export default Contact;