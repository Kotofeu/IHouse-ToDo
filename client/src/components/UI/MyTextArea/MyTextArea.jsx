import React from 'react';
import classes from './MyTextArea.module.scss';

const MyTextArea = ({ placeholder, className, inputvalue, setValue, ...props }) => {
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
export default MyTextArea;