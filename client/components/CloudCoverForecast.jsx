import React, { useEffect } from 'react';

const CloudCoverForecast = () => {

  useEffect( () => {
    let cloudCover = document.createElement('script');
    cloudCover.type = 'text/javascript';
    cloudCover.async = true;
    cloudCover.defer = true;
    document.body.appendChild(cloudCover);
  }, []);

  const start = () => {
    let rotator = document.getElementById('rotator');
    let delayInSeconds = 1;

    let images = ['https://graphical.weather.gov/images/utah/Sky1_utah.png', 'https://graphical.weather.gov/images/utah/Sky3_utah.png', 'https://graphical.weather.gov/images/utah/Sky5_utah.png', 'https://graphical.weather.gov/images/utah/Sky7_utah.png', 'https://graphical.weather.gov/images/utah/Sky9_utah.png'];

    let num = 0;
    let changeImage = function() {
      let length = images.length;
      rotator.src = images[num++];
      if (num === length) {
        num = 0;
      }
    };
    setInterval(changeImage, delayInSeconds * 1000);
  };
  window.onload = () => {
    start();
  };

  return (
    <div>
      <h2>Fill</h2>
      <h2>Cloud cover for next 24 hours</h2>
      <img src="https://graphical.weather.gov/images/utah/Sky1_utah.png" alt="rotating cloud images" id="rotator" />
    </div>
  );

};

export default CloudCoverForecast;