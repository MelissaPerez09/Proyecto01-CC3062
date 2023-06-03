import React from "react"
import styles from "./Cards.module.css"

function Cards() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h1 className={styles["only-header"]}>
              Two ways we can work together
            </h1>
          </div>
          <div className={styles.card}>
            <img
              className={styles.imageC}
              alt="xd"
              src="/image05.png"
            />
            <h1 className={styles.Hc}>Flesh out your product idea</h1>
            <p className={styles.pc}>
              Bring your software idea to life in two weeks, giving you the
              opportunity to validate and gain momentum in your business faster.
            </p>
          </div>
          <div className={styles.card}>
            <img
              className={styles.imageC}
              alt="xd"
              src="/image03.png"
            />
            <h1 className={styles.Hc}>Improve user retention</h1>
            <p className={styles.pc}>
              Improve the onboarding and core features to ensure that your new
              users have a smooth first experience and make your product a part
              of their daily work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
