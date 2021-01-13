import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RoseForecast from './components/RoseForecast.jsx';
import UdotTrafficCams from './components/UdotTrafficCams.jsx';

const App = () => {

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