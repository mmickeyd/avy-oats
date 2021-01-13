import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    axios.get('/filepath')
      .then(res => {
        setState(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      MY WEBPAGE
    </div>
  );
};

export default App;