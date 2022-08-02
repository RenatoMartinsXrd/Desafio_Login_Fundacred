import React from 'react'

export const Text = ({label,name,register,...props}) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <input type="text" name={name} {...register(name)} {...props} />
    </React.Fragment>
  )
}

const Field = {
  Text
}
export default Field;

