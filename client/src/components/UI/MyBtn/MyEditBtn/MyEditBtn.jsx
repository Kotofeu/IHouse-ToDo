import React from 'react'
import classes from './MyEditBtn.module.scss';
import editBtn from '../../../../assets/images/edit.svg'
const MyEditBtn = ({ className, onClick }) => {
    const rootClasses = [classes.MyEditBtn, className];
    return (
        <button className={rootClasses.join(' ')} type='button' onClick={onClick}>
            <img src={editBtn} alt='edit image' />
        </button>
    )
}

export default MyEditBtn