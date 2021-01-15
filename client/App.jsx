import React, { useState, useEffect } from 'react';
import axios from 'axios';

import oats from './dist/oats.png';
import logo from './dist/avyOatsLogo.png';
import RoseForecast from './components/RoseForecast.jsx';
import UdotTrafficCams from './components/UdotTrafficCams.jsx';
import UacForecast from './components/UacForecast.jsx';
import Radar from './components/Radar.jsx';
import CloudCoverForecast from './components/CloudCoverForecast.jsx';
import Webcams from './components/Webcams.jsx';
import TwitterFeed from './components/TwitterFeed.jsx';

import styles from './css/generalStyles.css';

const App = () => {
  const [forecast, setForecast] = useState('');

  useEffect( () => {
    axios.get('/forecasts')
      .then(res => {
        setForecast(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.oatsFlipped} src={oats} alt='oats'/>
        <h1 className={styles.avyOatsText}>Avy Oats</h1>
        <img className={styles.oats} src={oats} alt='oats'/>
      </div>
      <RoseForecast className={styles.roseForecast} avyRose={forecast.overall_danger_rose_image}/>
      <UacForecast className={styles.uacForecast} forecast={forecast}/>
      <div className={styles.trafficCams}>
        <h2>Traffic Cams</h2>
        <span>
          <UdotTrafficCams canyon={'lcc'} />
          <UdotTrafficCams canyon={'bcc'} />
        </span>
      </div>
      <Webcams className={styles.webcams}/>
      <div className={styles.radarCloudCover}>
        <Radar className={styles.radar}/>
        <CloudCoverForecast className={styles.cloudCover}/>
      </div>
      <TwitterFeed />
    </div>
  );
};

export default App;
