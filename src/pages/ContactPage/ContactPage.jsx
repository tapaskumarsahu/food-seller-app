import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact'
import MenuBarExp from '../../components/navbars/MenuBarExp'

export default function ContactPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp />
      <Contact />
      <Footer/>
    </>
  )
}
