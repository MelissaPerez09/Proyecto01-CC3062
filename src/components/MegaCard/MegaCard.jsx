import React from "react"
import styles from "./MegaCard.module.css"
import image04 from '/image04.png'

function MegaCard() {
  return (
    <div className={styles.container}>
      <div className={styles.Mega}>
        <div className={styles.space1}>
          <img
            className={styles.image04}
            alt="xd"
            src="https://web.archive.org/web/20230308142243im_/https://designcrafter.co/assets/images/image04.png?v=f6c57937"
          />
          <h1 className={styles.oneOne}>
            1-on-1 design collaboration for product visionaries
          </h1>
        </div>

        <div className={styles.space}>
          <p>This is for</p>
          <ul className={styles.yes}>
            <li>Founders or empowered product leads</li>
            <li>Creating products for professionals</li>
            <li>Designing solutions</li>
          </ul>

          <p>This is not for</p>
          <ul className={styles.no}>
            <li>Teams or middle managers</li>
            <li>Creating casual consumer products</li>
            <li>Small design tasks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MegaCard
