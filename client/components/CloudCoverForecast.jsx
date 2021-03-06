import React, { useEffect } from 'react';
import styles from '../css/weatherStyles.css';

const CloudCoverForecast = () => {

  useEffect( () => {
    let cloudCover = document.createElement('script');
    cloudCover.type = 'text/javascript';
    cloudCover.async = true;
    cloudCover.defer = true;
    document.body.appendChild(cloudCover);
  }, []);

  const start = () => {
    let rotator = document.getElementById('rotator');
    let delayInSeconds = 1.5;

    let images = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let num = 0;
    let changeImage = function() {
      let length = images.length;
      rotator.src = `https://graphical.weather.gov/images/utah/Sky${images[num++]}_utah.png`;
      if (num === length) {
        num = 0;
      }
    };
    setInterval(changeImage, delayInSeconds * 1000);
  };
  window.onload = () => {
    start();
  };

  return (
    <div className={styles.cloudCover}>
      <h2 className={styles.radarCloudHeader}>Cloud cover next 24 hours</h2>
      <img className={styles.image} src="https://graphical.weather.gov/images/utah/Sky1_utah.png" alt="rotating cloud images" id="rotator" />
    </div>
  );

};

export default CloudCoverForecast;
