import React from "react"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img className={styles.img8} alt="xd" src="/image08.png" />

        <div className={styles.footerTexts}>
          <h1 className={styles.question}>
            Are you ready to act on your product ideas?
          </h1>
          <p className={styles.footerText}>
            If you think we might be a good fit for working together – book a 15
            min call and let's talk. No strings attached.
          </p>
          <button className={styles.book}>BOOK A CALL</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
