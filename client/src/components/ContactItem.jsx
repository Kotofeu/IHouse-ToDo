import React from 'react'
import { useState } from 'react';
import { deleteContact } from '../API/contactsApi';
import ContactStore from '../store/ContactStore';
import MyDeleteBtn from './UI/MyBtn/MyDeleteBtn/MyDeleteBtn';
import MyEditBtn from './UI/MyBtn/MyEditBtn/MyEditBtn';
const ContactItem = ({ item }) => {
    const { id, name, info, phone, email } = item;
    const [isDeleted, setIsDeleted] = useState(false);
    const Delete = () => {
        setIsDeleted(true);
        setTimeout(() => deleteContact({ id }).then(() => ContactStore.deleteContact(id)), 300);
    }
    const Edit = () => {

    }
    return (
        <tr className={`contact__contact-row ${isDeleted
            ? 'contact__contact-row--deleted'
            : ''
            }`}>
            <td className='contact__contact-item contact__contact-row-delete'
                aria-label=" ">
                <MyEditBtn onClick={Edit} />
                <MyDeleteBtn onClick={Delete} />
            </td>
            <td className='contact__contact-item' aria-label="ФИО">{name}</td>
            <td className='contact__contact-item' aria-label="Информация">{info}</td>
            <td className='contact__contact-item' aria-label="Номер">
                <a className='contact__contact-phone' href={`tel:${phone}`}>
                    {phone}
                </a>
            </td>
            <td className='contact__contact-item' aria-label="Почта">
                <a className='contact__contact-mail' href={`mailto:${email}`}>
                    {email}
                </a>
            </td>
        </tr>
    );
}
export default ContactItem;