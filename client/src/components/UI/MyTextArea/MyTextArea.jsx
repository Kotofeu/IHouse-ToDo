import React from 'react';
import classes from './MyTextArea.module.scss';

export default function MyTextArea({ placeholder, className, inputvalue, setValue, ...props }) {
    const rootClasses = [classes.MyTextArea, className];
    return (
        <textarea
            className={rootClasses.join(' ')}
            {...props}
            value={inputvalue}
            onChange={setValue}
            placeholder={placeholder}
        />
    );
}
