import React from 'react'
import styles from './Contact.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="Contact Us" />
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>
      <Footer/>
    </>
  )
}
