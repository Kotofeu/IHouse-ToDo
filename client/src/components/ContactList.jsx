import { observer } from 'mobx-react-lite';
import React from 'react'
import ContactStore from '../store/ContactStore';
import ContactItem from './ContactItem';

const ContactList = observer(() => {
  const personInfo = ['ФИО', 'Информация', 'Телефон', 'Почта'];
  return (
    <section className='contact__contact-table'>
      <header className='contact__contact-thead contact__contact-row'>
        {personInfo.map(property =>
          <h6 className='contact__contact-item' key={property}>{property}</h6>
        )}
      </header>
      <ul className='contact__contact-tbody'>
        {ContactStore.contacts.length ?
          ContactStore.contacts.map(item =>
            <ContactItem item={item} key = {item.id}/>
          )
          : null
        }
      </ul>
    </section>
  )
})
export default ContactList;