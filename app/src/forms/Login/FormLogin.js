import React from 'react'
import LabelField from '../../components/Form/LabelField'
import { Button } from '../../components/Form/Button'
import styles from './FormLogin.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from '../validations.js'

export const FormLogin = ({ classes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  })
  const loginSubmit = (user) => {
    console.log(user)
  }
  return (
    <form className={classes} onSubmit={handleSubmit(loginSubmit)}>
      <LabelField.Text
        label="E-mail"
        name="email"
        register={register}
        isError={errors.email?.message ? true : false}
        messageError={errors.email?.message}
      />

      <LabelField.Text
        label="Senha"
        name="password"
        type="password"
        register={register}
        isError={errors.password?.message ? true : false}
        messageError={errors.password?.message}
      />

      <div className={styles.containerLinks}>
        <a href={() => false}>Esqueci minha senha</a>
        <a href={() => false}>Ainda não sou cliente</a>
      </div>
      <Button className={styles.buttonLogin}>Enviar</Button>
    </form>
  )
}
