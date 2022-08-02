import React from 'react'
import styles from './LabelField.module.css'

export const Text = ({ label, name, ...props }) => {
  return (
    <label className={styles.containerLabelInput}>
      <span className={styles.label}>{label}</span>
      <input
        type="text"
        name={name}
        // {...register(name)}
        className={styles.input}
        {...props}
      />
    </label>
  )
}

const Field = {
  Text
}
export default Field
