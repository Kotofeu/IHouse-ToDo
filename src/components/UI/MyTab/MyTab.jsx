import React from 'react'
import classes from './Tab.module.scss'
export default function MyTab({ children, ...props }) {
  const rootClasses = [classes.MyTab]
  return (
    <button className={rootClasses.join(' ')} {...props}>{children}</button>
  )
}
