import React from 'react'
import styles from './LabelField.module.css'

export const Text = ({ label, name, register, ...props }) => {
  return (
    <label className={styles.containerLabelInput}>
      <input
        type="text"
        name={name}
        {...register(name)}
        className={styles.input}
        {...props}
      />
      <span className={styles.label}>{label}</span>
    </label>
  )
}

const Field = {
  Text
}
export default Field
