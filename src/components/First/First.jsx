import React from "react"
import styles from "./First.module.css"
import image07 from '/image07.png'
import image01 from '/image01.png'

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
            src="https://web.archive.org/web/20230308142241im_/https://designcrafter.co/assets/images/image07.png?v=f6c57937"
          />
        </div>
        <img
          className={styles.image01}
          alt="xd"
          src="https://web.archive.org/web/20230308142242im_/https://designcrafter.co/assets/images/image01.png?v=f6c57937"
        />
      </div>
    </div>
  )
}

export default First
