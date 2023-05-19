import React from "react"
import styles from "./Product.module.css"

function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.space1}>
          <div>
            <h1 className={styles.t}>Product Run</h1>
            <h2 className={styles.sub}>Turnaround time — 2 Weeks</h2>
          </div>
          <h1 className={styles.price}>€ 2499</h1>
        </div>

        <div className={styles.space2}>
          <div>
            <p className={styles.p}>Benefits</p>
            <ul className={styles.yes}>
              <li>Move fast</li>
              <li>Work with a pro</li>
              <li>Transparent pricing</li>
            </ul>
          </div>

          <div>
            <p className={styles.p}>Design 1 of 3 things</p>
            <ul className={styles.yes}>
              <li>App website & logo</li>
              <li>New web or mobile app</li>
              <li>Better user experience for an app</li>
            </ul>
          </div>

          <div>
            <p className={styles.p}>What you get</p>
            <ul className={styles.yes}>
              <li>Follow the progress live and iterate</li>
              <li>One-hour strategy session each Monday</li>
              <li>All designs in Figma ready for development</li>
            </ul>
          </div>
        </div>

        <div className={styles.space3}>
          <button className={styles.see}>SEE IF WE ARE A FIT</button>
          <img
            className={styles.img6}
            alt="xd"
            src="../src/assets/image06.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Product
