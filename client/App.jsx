import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RoseForecast from './components/RoseForecast.jsx';

const App = () => {

  return (
    <div>
      <h1>Avy Oats</h1>
      <RoseForecast />
    </div>
  );
};

export default App;