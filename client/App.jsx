import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RoseForecast from './components/RoseForecast.jsx';
import UdotTrafficCams from './components/UdotTrafficCams.jsx';
import UacForecast from './components/UacForecast.jsx';
import Radar from './components/Radar.jsx';

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
      <h1>Avy Oats</h1>
      <RoseForecast avyRose={forecast.overall_danger_rose_image} />
      <UacForecast forecast={forecast} />
      <h2>Traffic Cams</h2>
      <UdotTrafficCams canyon={'lcc'} />
      <UdotTrafficCams canyon={'bcc'} />
      <Radar />
    </div>
  );
};

export default App;