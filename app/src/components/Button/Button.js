import React from 'react'
import styles from './Button.module.css'
import classnames from 'classnames';

export const Button = ({ children, className,isBackgroundYellow,isBackgroundBlue }) => {
  const classes = classnames({
    [className]: true,
    [styles.btn]: true,
    [styles.backgroundYellow]: isBackgroundYellow,
    [styles.backgroundBlue] : isBackgroundBlue,
  });
  return <button className={classes}>{children}</button>
}
