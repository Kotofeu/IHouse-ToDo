import React from 'react'
import enter from '../../../assets/images/enter.svg'
import './MyInput.scss'
export default function MyInput({ className, massege, id, value, onChange, onClick }) {
    return (
        <form className={[className, 'input-form'].join(' ')} onSubmit={onClick}>
            <input className='input-form__input'
                type='text'
                placeholder={massege}
                name={id}
                id={id}
                value={value}
                onChange={onChange}
                required
                autoComplete='off' />
            <button className='input-form__button' onClick={onClick}>
                <img src={enter} alt='enter icon' />
            </button>
            <label className='input-form__label' htmlFor={id} >{massege}</label>
        </form>)
}
