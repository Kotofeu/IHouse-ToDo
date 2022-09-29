import React from 'react';
import classes from './MyAddBtn.module.scss';

export default function MyEddBtn({ className, eddClick }) {
  const rootClasses = [classes.MyAddBtn, className];
  return (
    <button className={rootClasses.join(' ')} type='button' onClick={eddClick}>+</button>
  );
}
