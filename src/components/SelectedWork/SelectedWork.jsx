import React from 'react';
import styles from './SelectedWork.module.css';

function SelectedWork() {
  const text = 'L20 Aid delivery in the hardest-to-reach communities';
  const highlightText = 'Aid delivery in the hardest-to-reach communities';

  const highlightedText = text.replace(
    highlightText,
    `<span class=${styles.highlight}>${highlightText}</span>`
  );

  return (
    <div className={styles.root}>
      <div className={styles.SelectedWork}>
        <div>
          <h1 className={styles.title}>Selected work</h1>
          <img className={styles.slide01} alt="xd" src="../src/assets/slideshow01.jpg" />
        </div>

        <div className={styles.textsWork}>
          <h2 className={styles.L20} dangerouslySetInnerHTML={{ __html: highlightedText }} />
          <h4 className={styles.UI}>UI/UX, fintech, web, android</h4>
          <p className={styles.design}>
            Design ecosystem of apps for web and Android helping NGOs, donors and field teams deliver humanitarian aid to the hardest-to-reach communities. Creating solutions that require minimal training and working in offline environments without extra hardware.
          </p>
          <h2 className={styles.K}>10K+</h2>
          <h3 className={styles.people}>People reach in first pilot programmes</h3>
        </div>
      </div>
    </div>
  );
}

export default SelectedWork;
