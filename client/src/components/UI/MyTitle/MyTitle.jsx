import React from 'react';
import classes from './MyTitle.module.scss';

const MyTitle = ({ children, className, ...props }) => {
    const rootClasses = [classes.MyTitle, className];
    return (
        <h2 className={rootClasses.join(' ')} {...props}>{children}</h2>
    );
}
export default MyTitle;