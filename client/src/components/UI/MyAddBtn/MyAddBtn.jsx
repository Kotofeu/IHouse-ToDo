import React from 'react';
import classes from './MyAddBtn.module.scss';

const MyAddBtn = ({ className, onClick }) => {
  const rootClasses = [classes.MyAddBtn, className];
  return (
    <button className={rootClasses.join(' ')} type='button' onClick={onClick}>+</button>
  );
}
export default MyAddBtn;