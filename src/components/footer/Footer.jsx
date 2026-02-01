import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <h3 className={styles.title}><img className={styles.logoImg} src="/src/assets/logo.png" alt="FSD Fooder Logo" />FSD Fooder</h3>
          </div>
          <p className={styles.desc}>
            In the new era of technology we look a in the future with certainty and pride to for our company and.
          </p>

          <div className={styles.socials}>
            <button aria-label="twitter" className={styles.socialBtn}><FaXTwitter /></button>
            <button aria-label="facebook" className={styles.socialBtn}><FaFacebook /></button>
            <button aria-label="instagram" className={styles.socialBtn}><FaInstagram /></button>
            <button aria-label="linkedin" className={styles.socialBtn}><FaLinkedinIn /></button>
            <button aria-label="pinterest" className={styles.socialBtn}><FaPinterest /></button>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.navColumns}>
            <div className={styles.col}>
              <h4>Pages</h4>
              <ul>
                <li className={styles.items}><Link to="/">Home</Link></li>
                <li className={styles.items}><Link to="/about">About</Link></li>
                <li className={styles.items}><Link to="/menu">Menu</Link></li>
                <li className={styles.items}><Link to="/pricing">Pricing</Link></li>
                <li className={styles.items}><Link to="/blog">Blog</Link></li>
                <li className={styles.items}><Link to="/contact">Contact</Link></li>
                <li className={styles.items}><Link to="/delivery">Delivery</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Utility Pages</h4>
              <ul>
                <li className={styles.items}><Link to="/#">Start Here</Link></li>
                <li className={styles.items}><Link to="/#">Styleguide</Link></li>
                <li className={styles.items}><Link to="/#">Password Protected</Link></li>
                <li className={styles.items}><Link to="/#">404 Not Found</Link></li>
                <li className={styles.items}><Link to="/#">Licenses</Link></li>
                <li className={styles.items}><Link to="/#">Changelog</Link></li>
                <li className={styles.items}><Link to="/#">View More</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h4>Follow Us On Instagram</h4><br />
          <div className={styles.instagramGrid}>
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=60" alt="food1" />
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=60" alt="fries" />
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=60" alt="food3" />
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=60" alt="pancakes" />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p>Copyright © 2026 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  )
}
