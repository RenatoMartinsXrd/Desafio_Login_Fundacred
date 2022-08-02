import React from 'react'
import LabelField from '../components/Form/LabelField'
import { Button } from './Form/Button';
import styles from './FormLogin.module.css'

export const FormLogin = ({classes}) => {
  return (
    <form className={classes}>
      <LabelField.Text label="E-mail" name="email" type="email" />
      <LabelField.Text label="Senha" name="password" type="password" />
      <Button className={styles.buttonLogin}>Enviar</Button>
    </form>
  )
}
