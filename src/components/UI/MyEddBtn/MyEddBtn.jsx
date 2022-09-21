import React from 'react'
import classes from './MyEddBtn.module.scss'

export default function MyEddBtn({className, eddClick}) {
  const rootClasses = [classes.MyEddBtn, className]
  return (
    <button className={rootClasses.join(' ')} type='button' onClick={eddClick}>+</button>
  )
}
