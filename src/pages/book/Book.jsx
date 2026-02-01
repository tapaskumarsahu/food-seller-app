import React from 'react'
import styles from './Book.module.css';
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function Book() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="Book a Table at FSD Fooder"  />
      <div className={styles.book}>
        <h1>Book Page</h1>
        <p>Reserve your table at FSD Fooder.</p>
      </div>
      <Footer/>
    </>
  )
}
