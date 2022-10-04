import React, { useState, useEffect } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.jsx';
import MyAddBtn from '../UI/MyAddBtn/MyAddBtn.jsx';
import ContactList from '../ContactList.jsx';
import ContactStore from '../../store/ContactStore.js';
import MyLoader from '../UI/MyLoader/MyLoader.jsx';
import MyError from '../UI/MyError/MyError.jsx';
import CreateContact from '../modals/CreateContact.jsx';
import { fetchContacts } from '../../API/contactsApi.js';
import useRequest from '../../hooks/useRequest.js';
import { observer } from 'mobx-react-lite';
const Contact = observer(() => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [contact, contactLoading, contactError] = useRequest(fetchContacts);
  useEffect(() => {
    document.title = 'Контакты';
  }, []);
  useEffect(() => {
    ContactStore.setContact(contact)
  }, [contact]);

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
            {ContactStore.contacts.length
              ? <MyTitle>Список контактов</MyTitle>
              : <MyTitle>Контактов нет</MyTitle>
            }
            <MyAddBtn
              className={'contact__header-btn'}
              onClick={() => setIsShowModal(true)}
            />
          </header>
          <ContactList />
          <CreateContact
            closeModal={() => setIsShowModal(false)}
            isShowModal={isShowModal}
          />
        </div>
      </div>
    </div>
  );
})
export default Contact;