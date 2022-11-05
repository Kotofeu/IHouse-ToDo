import React from 'react'
import classes from './MyError.module.scss';
const MyError = ({ children }) => {

  return (
    <h2 className={classes.MyError}>{children.toString()}</h2>
  );
}
export default MyError;