import React from 'react'
import styles from './Home.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <header>
        <ContactNav/>
        <MenuBar title="FSD Fooder"  />
      </header>
        <section>
          <h1 className={styles.home}>Welcome to FSD Fooder</h1>
          <p className={styles.p}>Your favorite food delivery service is here!</p>
        </section>
      <Footer/>
    </div>
  )
}
