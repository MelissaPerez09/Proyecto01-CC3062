import React from "react"
import styles from "./Footer.module.css"
import image08 from '/image08.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img className={styles.img8} alt="xd" src="https://web.archive.org/web/20230308142243im_/https://designcrafter.co/assets/images/image08.png?v=f6c57937" />

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
