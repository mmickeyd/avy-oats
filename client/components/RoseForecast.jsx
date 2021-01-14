import React from 'react';

const RoseForecast = (props) => {
  return (
    <div>
      <h2>Salt Lake Avalanche Forecast:</h2>
      <div>
      <img src={'https://utahavalanchecenter.org' + props.avyRose} alt='Avalanche forecast rose (Salt Lake)' />
      </div>
    </div>
  );
};

export default RoseForecast;