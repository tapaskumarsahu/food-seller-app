import React from 'react'
import styles from './Blog.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function Blog() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="FSD Fooder"  />
        <div className={styles.blog}>
          <h1>Our Blog</h1>
          <p>Read our latest articles and updates.</p>
        </div>
      <Footer/>
    </>
  )
}
