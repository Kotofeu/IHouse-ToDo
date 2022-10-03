import React from 'react'
const ContactItem = ({item}) => {
    const {name, info, phone, email} = item;
    return (    
        <li className='contact__contact-row'>
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
    )
}
export default ContactItem;