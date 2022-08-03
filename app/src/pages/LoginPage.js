import React from 'react'
import { FormLogin } from '../forms/Login/FormLogin'
import styles from './LoginPage.module.css'
import logo from '../assets/Logo_50_anos.png'
import iconVestibular from '../assets/iconVestibular.svg'

export const LoginPage = ({}) => {
  return (
    <div className={styles.containerLoginPage}>
      <section className={styles.containerSectionBanner}>
        <div className={styles.containerH1}>
          <h1 className={styles.titleBanner}>Faça login </h1>
          <span className={styles.titleBanner}>para</span>
          <span className={styles.titleSpanBanner}> acessar</span>
          <h2 className={styles.titleSpanBanner}> sua conta</h2>
        </div>
      </section>

      <section className={styles.containerSectionForm}>
        <div className={styles.containerLogoFunda}>
          <img src={logo} alt="logo de 50 anos" className={styles.logoFunda} />
        </div>
        <FormLogin classes={styles.formLogin} />
        <div className={styles.containerVestibular}>
          <div className={styles.containerIconVestibular}>
            <img src={iconVestibular} alt="vestibular digital" />
          </div>
          <h3 className={styles.titleSpanBanner}>Vestibular Digital</h3>
        </div>
      </section>
    </div>
  )
}
