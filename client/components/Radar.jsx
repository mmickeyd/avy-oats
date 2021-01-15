import React, { useEffect } from 'react';
import styles from '../css/weatherStyles.css';

const Radar = () => {

  useEffect( () => {
    let script1 = document.createElement('script');
    script1.src = 'http://localhost:3000/radar';
    script1.async = true;
    script1.defer = true;
    script1.className = 'map';
    document.body.appendChild(script1);
  }, []);

  return (
    <div className={styles.radar}>
      <h2 className={styles.radarCloudHeader} >Radar from the last hour</h2>
      <div id="myMap" className={styles.map} ></div>
    </div>
  );
};

export default Radar;
