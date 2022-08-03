import React from 'react'
import styles from './Button.module.css'
import classnames from 'classnames'

export const Button = ({ children, className }) => {
  const classes = classnames({
    [className]: true,
    [styles.btn]: true
  })
  return <button className={classes}>{children}</button>
}
