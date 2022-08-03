import React from 'react'
import styles from './LabelField.module.css'
import { Tooltip } from '../Tooltip'

export const Text = ({
  label,
  name,
  register,
  messageError,
  isError,
  ...props
}) => {
  return (
    <label className={styles.containerLabelInput}>
      <span className={styles.label}>{label}</span>
      <input
        type="text"
        name={name}
        {...register(name)}
        className={styles.input}
        {...props}
      />
      {isError && <Tooltip message={messageError} />}
    </label>
  )
}

const Field = {
  Text
}
export default Field
