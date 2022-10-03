import React from 'react';
import classes from './MyAddBtn.module.scss';

const MyAddBtn = ({ className, eddClick }) => {
  const rootClasses = [classes.MyAddBtn, className];
  return (
    <button className={rootClasses.join(' ')} type='button' onClick={eddClick}>+</button>
  );
}
export default MyAddBtn;