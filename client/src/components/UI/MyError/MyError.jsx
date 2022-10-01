import React from 'react'
import classes from './MyError.module.scss';
export default function MyError({children}) {
    
  return (
    <h2 className={classes.MyError}>{children.toString()}</h2>
  );
}
