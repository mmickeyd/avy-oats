import React, { useState, useEffect } from 'react';
import axios from 'axios';

import oats from './dist/oats.png';
import RoseForecast from './components/RoseForecast.jsx';
import UdotTrafficCams from './components/UdotTrafficCams.jsx';
import UacForecast from './components/UacForecast.jsx';
import Radar from './components/Radar.jsx';
import CloudCoverForecast from './components/CloudCoverForecast.jsx';
import Webcams from './components/Webcams.jsx';
import AltaWxStations from './components/AltaWxStations.jsx';
import TwitterFeed from './components/TwitterFeed.jsx';

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
    <div>
      <img src={oats} alt='oats'/>
      <h1>Avy Oats</h1>
      <img src={oats} alt='oats'/>
      <RoseForecast avyRose={forecast.overall_danger_rose_image} />
      <UacForecast forecast={forecast} />
      <h2>Traffic Cams</h2>
      <UdotTrafficCams canyon={'lcc'} />
      <UdotTrafficCams canyon={'bcc'} />
      <Webcams />
      <Radar />
      <CloudCoverForecast />
      <TwitterFeed />
    </div>
  );
};

export default App;