import React from "react"
import styles from "./Vasil.module.css"

function Vasil() {
  return (
    <div className={styles.container}>
      <img className={styles.img2} alt="xd" src="../src/assets/image02.png" />

      <div className={styles.textsVasil}>
        <h1 className={styles.hey}>Hey, I'm Vasil!</h1>
        <h2 className={styles.senior}>
          Senior product designer and founder of Designcrafter
        </h2>
        <p className={styles.pV}>
          Designcrafter is a solo operation dedicated to helping you tackle the
          most pressing challenges in early product development.
        </p>
        <p className={styles.pV}>
          Funded or not the early days of product development might be fun but
          brutal. There are soo many challenges:
        </p>

        <ul className={styles.list}>
          <li>It's difficult to know if an idea has really been validated</li>
          <li>Find product-market fit before you run out of money</li>
          <li>It takes too long to conduct robust user research</li>
          <li>Coordinating efforts across the teams</li>
        </ul>

        <p className={styles.pV}>
          To make progress, it's important to have people who have a lot of
          experience around you. These people should be able to think for
          themselves and take action without needing constant direction.
        </p>
        <p className={styles.pV}>
          That's why I started Designcrafter, to help you craft better business
          software, faster. Using product design strategically.
        </p>
        <p className={styles.pV}>
          I'm now 16+ years in the industry in the past 8, I’ve been designing
          early-stage business software that users love and businesses value. I
          like to help you do the same.
        </p>

        <h3 className={styles.in}>
          Interested? Book a call below or reach out on{" "}
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/vasil-nedelchev/"
          >
            LinkedIn
          </a>
          .
        </h3>
      </div>
    </div>
  )
}

export default Vasil
