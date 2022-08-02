import React from 'react'
import { FormLogin } from '../components/FormLogin'
import styles from './LoginPage.module.css'
import logo from '../assets/Logo_50_anos.png'

export const LoginPage = ({}) => {
  return (
    <div className={styles.containerLoginPage}>
      <section className={styles.containerSectionBanner}>
        <div className={styles.containerH1}>
          <h1 className={styles.titleBanner}>Faça login</h1>
          <span className={styles.titleBanner}>para</span>
          <span className={styles.titleSpanBanner}> acessar</span>
          <h2 className={styles.titleSpanBanner}>sua conta</h2>
        </div>
      </section>
      <section className={styles.containerSectionForm}>
        <img src={logo} alt="logo de 50 anos" className={styles.logoFunda}/>
        <FormLogin classes={styles.formLogin} />
        <a>Vestibular digital</a>
      </section>
    </div>
  )
}
