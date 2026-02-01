import React from 'react'
import styles from './About.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import MenuBar from '../../components/navbars/MenuBar'

export default function About() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="FSD Fooder" />
      <div className={styles.about}>
        <h1>About Us</h1>
        <p>Learn more about FSD Fooder and our mission.</p>
      </div>
      <Footer/>
    </>
  )
}
