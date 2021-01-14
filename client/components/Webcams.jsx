import React from 'react';

const Webcams = () => {
  const devilsCastle = { order: 1, name: 'devilsCastle', url: 'https://app.prismcam.com/public/helpers/realtime_preview.php?c=65&s=720' };
  const snowstake = { order: 2, name: 'snowstake', url: 'https://www.skiutah.com/members/snowbird/webcams/snowstakecam' };
  const superior = { order: 3, name: 'superior', url: 'https://altaskiarea.s3-us-west-2.amazonaws.com/mountain-cams/Superior.jpg' };
  const webcamUrls = [superior, snowstake, devilsCastle];
  return (
    <div>
      <span>Webcams</span>
      <div>
        {webcamUrls.map(url =>
          <div>
            <div>{ url.order === 1 ? 'Devil\'s Castle' : url.order === 2 ? 'Snowbird Snowstake' : url.order === 3 ? 'Mount Superior' : null }</div>
            <img src={`${url.url}`} alt="webcam"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Webcams;