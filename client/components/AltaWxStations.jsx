import React from 'react';

const AltaWxStations = () => {
  const webpage = <iframe src={'https://www.wxstns.net/ALTA.html'} />;

  return (
    <div>
      {webpage}
    </div>
  );
};

export default AltaWxStations;