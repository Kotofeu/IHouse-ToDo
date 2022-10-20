import { observer } from 'mobx-react-lite';
import React from 'react'
import ContactStore from '../store/ContactStore';
import ContactItem from './ContactItem';

const ContactList = observer(() => {
  const personInfo = ['', 'ФИО', 'Информация', 'Телефон', 'Почта'];
  return (
    ContactStore.contacts.length
      ? <table className='contact__contact-table'>
        <thead className='contact__contact-thead contact__contact-row'>
          <tr className='contact__contact-row'>
            {personInfo.map(property =>
              <th className='contact__contact-item contact__contact-item-title' key={property}>{property}</th>
            )}
          </tr>

        </thead>
        <tbody className='contact__contact-tbody'>
          {ContactStore.contacts.map(item =>
            <ContactItem item={item} key={item.id} />
          )}
        </tbody>
      </table>
      : null
  );
})
export default ContactList;