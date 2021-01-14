import React from 'react';
import { useEffect } from 'react';

var mapStyle = {
  width: '25vw',
  height: '25vw'
};

const Radar = () => {

  useEffect( () => {
    var script1 = document.createElement('script');
    script1.src = 'http://localhost:3000/radar';
    script1.async = true;
    script1.defer = true;
    document.body.appendChild(script1);
  }, []);

  return (
    <div>
      <h2>Radar from the last hour:</h2>
      <div id="myMap" style={mapStyle} ></div>
    </div>
  );
};

export default Radar;
