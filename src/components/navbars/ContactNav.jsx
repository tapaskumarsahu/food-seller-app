import React from "react";
import styles from "./ContactNav.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function ContactNav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.contact}>
        <li className={styles.item}>
            <LocalPhoneOutlinedIcon /> <span>(+91) 98989890090</span>
        </li>
        <li className={styles.item}>
          <EmailOutlinedIcon /> <span>yummy@fsdfooder.com</span>
        </li>
      </ul>
      <ul className={styles.social}>
        <li className={styles.item}>
          <FaXTwitter />
        </li>
        <li className={styles.item}>
          <FaFacebook />
        </li>
        <li className={styles.item}>
          <FaInstagram />
        </li>
        <li className={styles.item}>
          <FaLinkedinIn />
        </li>
        <li className={styles.item}>
          <FaPinterest />
        </li>
      </ul>
    </div>
  );
}
