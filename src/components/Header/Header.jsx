import React from "react"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="xd" src="/logo.png" />

      <div className={styles.botones}>
        <button className={styles.work}>WORK</button>
        <button className={styles.how}>HOW</button>
        <button className={styles.contact}>CONTACT</button>
      </div>
    </div>
  )
}

export default Header
