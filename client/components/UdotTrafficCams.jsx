import React from 'react';

const UdotTrafficCams = (props) => {
  let trafficCamUrls;
  let canyon;
  const lccUrls = ['http://udottraffic.utah.gov/1_devices/aux14895.jpeg', 'http://udottraffic.utah.gov/1_devices/aux14604.jpeg', 'http://udottraffic.utah.gov/1_devices/aux16266.jpeg', 'http://udottraffic.utah.gov/1_devices/aux16270.jpeg'];
  const bccUrls = ['http://udottraffic.utah.gov/1_devices/aux14606.jpeg', 'http://udottraffic.utah.gov/1_devices/aux14605.jpeg', 'http://udottraffic.utah.gov/1_devices/aux16213.jpeg', 'http://udottraffic.utah.gov/1_devices/aux16215.jpeg'];
  props.canyon === 'lcc' ? (trafficCamUrls = lccUrls, canyon = 'Little Cottonwood Canyon') : (trafficCamUrls = bccUrls, canyon = 'Big Cottonwood Canyon');
  return (
    <div>
      {canyon}
      {trafficCamUrls.map(url =>
        <div>
          <img src={`${url}`} alt={`UDOT traffic cam in ${canyon}`} />
        </div>
      )}
      <br/>
    </div>
  );
};

export default UdotTrafficCams;