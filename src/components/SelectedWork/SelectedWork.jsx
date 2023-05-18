import React from "react"
import styles from "./SelectedWork.module.css"

function SelectedWork() {
    const text = "L20 Aid delivery in the hardest-to-reach communities"
    const highlightText = "Aid delivery in the hardest-to-reach communities"

    const highlightedText = text.replace(
        highlightText,
        `<span class=${styles.highlight}>${highlightText}</span>`
    )

    const text2 = "MyExcitel Improve customer support for an internet provider"
    const highlightText2 = "Improve customer support for an internet provider"

    const highlightedText2 = text2.replace(
        highlightText2,
        `<span class=${styles.highlight}>${highlightText2}</span>`
    )

    const text3 = "More work? Browse some recent work in Figma →"
    const highlightText3 = "Browse some recent work in Figma →"

    const highlightedText3 = text3.replace(
        highlightText3,
        `<span class=${styles.highlight}>${highlightText3}</span>`
    )

  return (
    <div className={styles.root}>
        <div className={styles.SelectedWork}>
            <div>
                <h1 className={styles.title}>Selected work</h1>
                <img
                    className={styles.slide01}
                    alt="xd"
                    src="../src/assets/slideshow01.jpg"
                />
                </div>

                <div className={styles.textsWork}>
                <h2
                    className={styles.L20}
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
                <h4 className={styles.UI}>UI/UX, fintech, web, android</h4>
                <p className={styles.design}>
                    Design ecosystem of apps for web and Android helping NGOs, donors
                    and field teams deliver humanitarian aid to the hardest-to-reach
                    communities. Creating solutions that require minimal training and
                    working in offline environments without extra hardware.
                </p>
                <h2 className={styles.K}>10K+</h2>
                <h3 className={styles.people}>
                    People reach in first pilot programmes
                </h3>
            </div>
        </div>

        <div className={styles.MyExcitel}>
            <div className={styles.OtherTexts}>
                <h2
                    className={styles.L20}
                    dangerouslySetInnerHTML={{ __html: highlightedText2 }}
                />
                <h4 className={styles.UI}>UI/UX, fintech, web, android</h4>
                <p className={styles.design}>
                    Design an app that enables internet customers to do quick online payments, do step-by-step DIY troubleshooting, easily report an issue and track progress and save money by finding a better deal.
                </p>
                <h2 className={styles.K}>1M+</h2>
                <h3 className={styles.people}>
                    Downloads in Google Play Store
                </h3>
            </div>

            <img
                className={styles.slide01}
                alt="xd"
                src="../src/assets/slideshow03.jpg"
            />
        </div>

        <div className={styles.MoreWork}>
            <h2
                className={styles.work}
                dangerouslySetInnerHTML={{ __html: highlightedText3 }}
            />

            <button type="button" className={styles.recent}>SEE RECENT WORK</button>
        </div>

        <div className={styles.flesh}>
            <h1 className={styles.fleshOut}>Let's flesh out your product ideas</h1>
            <p className={styles.designcrafter}>
                Designcrafter works in two-week intensives called Product Run at a fixed fee. In week one we choose a direction and create key screens. In week two we expand and polish.
            </p>
        </div>
    </div>
  )
}

export default SelectedWork
