import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteContact } from '../API/contactsApi';
import ContactStore from '../store/ContactStore';
import MyDeleteBtn from './UI/MyDeleteBtn/MyDeleteBtn';
const ContactItem = ({ item }) => {
    const { id, name, info, phone, email } = item;
    const [isDeleted, setIsDeleted] = useState(false);
    const Delete = () => {
        setIsDeleted(true);
        setTimeout(() => deleteContact({ id }).then(() => ContactStore.deleteContact(id)), 300);
    }
    return (
        <li className={`contact__contact-row ${isDeleted
            ? 'contact__contact-row--deleted'
            : ''
            }`}>
            <MyDeleteBtn className='contact__contact-row-delete' onClick={Delete} />
            <div className='contact__contact-item'>{name}</div>
            <div className='contact__contact-item'>{info}</div>
            <div className='contact__contact-item'>
                <a className='contact__contact-phone' href={`tel:${phone}`}>
                    {phone}
                </a>
            </div>
            <div className='contact__contact-item' >
                <a className='contact__contact-mail' href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
        </li>
    );
}
export default ContactItem;