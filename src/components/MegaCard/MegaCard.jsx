import React from "react"
import styles from "./MegaCard.module.css" // Importar el módulo CSS

function MegaCard() {
  return (
    <div className={styles.container}>
      <div className={styles.Mega}>
        <div className={styles.space1}>
          <img
            className={styles.image04}
            alt="xd"
            src="../src/assets/image04.png"
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
