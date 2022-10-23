import React from 'react'
import classes from './MySaveBtn.module.scss';
import editBtn from '../../../../assets/images/save.svg'
const MySaveBtn = ({ className, onClick }) => {
    const rootClasses = [classes.MySaveBtn, className];
    return (
        <button className={rootClasses.join(' ')} type='button' onClick={onClick}>
            <img src={editBtn} alt='save image' />
        </button>
    )
}

export default MySaveBtn