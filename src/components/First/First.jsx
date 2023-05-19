import React from "react"
import styles from "./First.module.css"

function First() {
  return (
    <div className={styles.root}>
      <div className={styles.first}>
        <div className={styles.texts}>
          <div className={styles.text1}>FLAT RATE UI/UX DESIGN</div>
          <div className={styles.text2}>From idea to product, faster</div>
          <div className={styles.text3}>
            Collaborate with a seasoned product designer to bring your product
            ideas to life with confidence in two weeks' time.
          </div>
          <button className={styles.learn}>LEARN HOW</button>
          <img
            className={styles.image07}
            alt="xd"
            src="/public/image07.png"
          />
        </div>
        <img
          className={styles.image01}
          alt="xd"
          src="/public/image01.png"
        />
      </div>
    </div>
  )
}

export default First
