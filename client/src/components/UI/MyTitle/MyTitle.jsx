import React from 'react';
import classes from './MyTitle.module.scss';

export default function MyTitle({children, className, ...props}) {
    const rootClasses = [classes.MyTitle, className];
    return (
        <h2 className={rootClasses.join(' ')} {...props}>{children}</h2>
    );
}
