import React from 'react';

const RoseForecast = (props) => {
  if (!props.avyRose) {
    return (
      <div>
        <h2>Salt Lake Avalanche Forecast</h2>
        Image loading...
      </div>
    );
  }
  return (
    <div >
      <h2>Salt Lake Avalanche Forecast</h2>
      <div>
        <img src={'https://utahavalanchecenter.org' + props.avyRose} alt='Avalanche forecast rose (Salt Lake)' />
      </div>
    </div>
  );
};

export default RoseForecast;
