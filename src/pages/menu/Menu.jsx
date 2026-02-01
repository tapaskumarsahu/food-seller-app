import React from 'react'
import styles from './Menu.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function Menu() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="FSD Fooder Menu"  />
        <div className={styles.menu}>
          <h1>Our Menu</h1>
          <p>Discover our delicious offerings!</p>
        </div>
      <Footer/>
    </>
  )
}
