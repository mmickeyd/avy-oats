import React from 'react';
import styles from '../css/weatherStyles.css';

const UdotTrafficCams = (props) => {
  let trafficCamUrls;
  let canyon;
  const url = 'http://udottraffic.utah.gov/1_devices/aux';
  const lccUrls = [`${url}14895.jpeg`, `${url}14604.jpeg`, `${url}16266.jpeg`, `${url}16270.jpeg`];
  const bccUrls = [`${url}14606.jpeg`, `${url}14605.jpeg`, `${url}16213.jpeg`, `${url}16215.jpeg`];
  props.canyon === 'lcc' ? (trafficCamUrls = lccUrls, canyon = 'Little Cottonwood Canyon') : (trafficCamUrls = bccUrls, canyon = 'Big Cottonwood Canyon');
  return (
    <div className={styles.canyonCams}>
      <div className={styles.canyonName}>{canyon}</div>
      {trafficCamUrls.map(url =>
        <div className={styles.singleCam}>
          <img className={styles.webcamImage} src={`${url}`} alt={`UDOT traffic cam in ${canyon}`} />
        </div>
      )}
      <br/>
    </div>
  );
};

export default UdotTrafficCams;
