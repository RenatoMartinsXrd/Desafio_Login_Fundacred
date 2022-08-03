import React from 'react'
import styles from './Tooltip.module.css'
import classnames from 'classnames'

export const Tooltip = ({ message }) => {
  const classes = classnames({
    [styles.bottom]: true,
    [styles.on]: true
  })
  return (
    <div id={styles.tooltip} className={classes}>
      <div className={styles.tooltipArrow}></div>
      <div className={styles.tooltipLabel}>{message}</div>
    </div>
  )
}
