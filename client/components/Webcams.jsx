import React from 'react';
import styles from '../css/weatherStyles.css';

const Webcams = () => {
  const devilsCastle = { order: 1, name: 'devilsCastle', url: 'https://app.prismcam.com/public/helpers/realtime_preview.php?c=65&s=720' };
  const snowstake = { order: 2, name: 'snowstake', url: 'https://www.skiutah.com/members/snowbird/webcams/snowstakecam' };
  const superior = { order: 3, name: 'superior', url: 'https://altaskiarea.s3-us-west-2.amazonaws.com/mountain-cams/Superior.jpg' };
  const webcamUrls = [superior, snowstake, devilsCastle];

  const addHeight = () => {
    const element = document.getElementsByClassName('superior')[0];
    element ? (element.classList.add(styles.superior), element.classList.remove(styles.singleWebcam)) : null;
  };

  return (
    <div className={styles.webcamsSection}>
      <span className={styles.webcamsHeader}>Weather</span>
      <div className={styles.webcams}>
        {webcamUrls.map(url =>
          <div>
            <div className={styles.webcamName}>{ url.order === 1 ? 'Devil\'s Castle' : url.order === 2 ? 'Snowbird Snowstake' : url.order === 3 ? 'Mount Superior' : null }</div>
            <img className={`${styles.singleWebcam} ${styles.webcamImage} ${`${url.name}`}`} src={`${url.url}`} alt="webcam"/>
          </div>
        )}
      </div>
      {addHeight()}
    </div>
  );
};

export default Webcams;