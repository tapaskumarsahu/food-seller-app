import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import MenuBarExp from '../../components/navbars/MenuBarExp'

export default function MenuPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp />
      <Menu/>
      <Footer/>
    </>
  )
}
