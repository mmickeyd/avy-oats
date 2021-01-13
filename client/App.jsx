import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RoseForecast from './components/RoseForecast.jsx';
import UdotTrafficCams from './components/UdotTrafficCams.jsx';

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
      <RoseForecast />
      <UdotTrafficCams canyon={'lcc'} />
      <UdotTrafficCams canyon={'bcc'} />
    </div>
  );
};

export default App;