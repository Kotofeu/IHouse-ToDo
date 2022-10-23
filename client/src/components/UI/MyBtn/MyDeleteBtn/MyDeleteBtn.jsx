import React from 'react'
import classes from './MyDeleteBtn.module.scss';
import deleteIcon from '../../../../assets/images/delete.svg'
const MyDeleteBtn = ({ className, onClick }) => {
  const rootClasses = [classes.MyDeleteBtn, className];
  return (
    <button className={rootClasses.join(' ')} type='button' onClick={onClick}>
      <img src={deleteIcon} alt="delete icon" />
    </button>
  );
}
export default MyDeleteBtn;