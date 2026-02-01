import React from 'react'
import styles from './BlogDetails.module.css'
import ContactNav from '../../components/navbars/ContactNav'
import MenuBar from '../../components/navbars/MenuBar'
import Footer from '../../components/footer/Footer'

export default function BlogDetails() {
  return (
    <>
      <ContactNav/>
      <MenuBar title="FSD Fooder" />
      <div className={styles.blogDetails}>
        <h1>Blog Details</h1>
        <p>Read more about our latest blog posts.</p>
      </div>
      <Footer/>
    </>
  )
}
