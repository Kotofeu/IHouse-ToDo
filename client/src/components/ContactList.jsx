import { observer } from 'mobx-react-lite';
import React from 'react'
import ContactStore from '../store/ContactStore';
import ContactItem from './ContactItem';

const ContactList = observer(() => {
  const personInfo = ['ФИО', 'Информация', 'Телефон', 'Почта'];
  return (
    ContactStore.contacts.length
    ? <section className='contact__contact-table'>
      <header className='contact__contact-thead contact__contact-row'>
        {personInfo.map(property =>
          <h6 className='contact__contact-item contact__contact-item-title' key={property}>{property}</h6>
        )}
      </header>
      <ul className='contact__contact-tbody'>
          {ContactStore.contacts.map(item =>
            <ContactItem item={item} key = {item.id}/>
          )}
      </ul>
    </section>
    : null
  )
})
export default ContactList;