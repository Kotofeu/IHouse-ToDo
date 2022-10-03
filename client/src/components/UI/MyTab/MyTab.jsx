import React from 'react';
import classes from './Tab.module.scss';
const MyTab = ({ children, ...props }) => {
  const rootClasses = [classes.MyTab];
  return (
    <button className={rootClasses.join(' ')} {...props}>{children}</button>
  );
}
export default MyTab;