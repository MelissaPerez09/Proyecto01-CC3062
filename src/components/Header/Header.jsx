import React from "react"
import styles from "./Header.module.css"
import logo from '/logo.png'

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="xd" src="https://web.archive.org/web/20230308142241im_/https://designcrafter.co/assets/images/image09.png?v=f6c57937" />

      <div className={styles.botones}>
        <button className={styles.work}>WORK</button>
        <button className={styles.how}>HOW</button>
        <button className={styles.contact}>CONTACT</button>
      </div>
    </div>
  )
}

export default Header
