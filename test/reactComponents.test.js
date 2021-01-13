const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const App = require('../client/App.jsx').default;
const RoseForecast = require('../client/components/RoseForecast.jsx').default;
const UacForecast = require('../client/components/UacForecast.jsx').default;
const UdotTrafficCams = require('../client/components/UdotTrafficCams.jsx').default;
const Radar = require('../client/components/Radar.jsx').default;
const React = require('react');
enzyme.configure({ adapter: new Adapter() });

const forecast = {
  'date_issued': 'Saturday, January 2, 2021 - 5:06am',
  'date_issued_timestamp': '1609589181',
  'current_conditions': 'This Morning,&nbsp;skies are partly cloudy with a temperature inversion in the mountains, temperatures range from the low teens F at trailheads to upper teens F near ridgelines. Winds are currently westerly, and transitioning to west-northwesterly and generally light, but gusting near 30&nbsp;mph at 11,000\' and near 20 mph&nbsp;at mid-elevations.\r\r',
  'recent_activity': 'Yesterday, two new avalanches were reported in the backcountry:&nbsp;\r\r&nbsp;\r\rNo Name Bowl. 9400\'. East Aspect. Skier triggered soft slab on the persistent weak layer 12" down. Broke 300\' above the skier, 150\' wide, and ran 500\' in total. Read Pro Observer Mark White\'s entire avalanche report HERE.&nbsp;\r\r&nbsp;\r\rChicken&nbsp;S#!T Ridge/Days Draw. 9500\'. Northeast Aspect. Skier triggered soft slab on the persistent weak layer 1.5\' down. Broke 10\' wide, and ran 50\'. We have seen quite a few human triggered avalanches in this area over the past few weeks. Find the entire avalanche report HERE.\r\r',
  'avalanche_problem_1': 'Persistent Weak Layer',
  'avalanche_problem_1_description': 'The dominant avalanche problem this season continues to be the persistent weak layer of weak faceted snow in the bottom half of our snowpack. Every forecaster that went out yesterday noted the same weak snowpack structure in their travels, you can see a photo below from Trent\'s pit in Mineral Fork that illustrates the widespread pattern of stronger snow (a cohesive slab) on top of the weaker faceted snow.\r\r',
  'bottom_line': '\r\rThe avalanche danger is MODERATE on steep mid and upper elevation slopes facing west through north and east as well as upper-elevation southeast aspects. Human-triggered avalanches are possible on these slopes, especially if they have a denser slab of wind-blown snow on top of weaker, faceted snow.&nbsp;These avalanches may be triggered remotely and from lower-angled terrain below.&nbsp;&nbsp;\rAll other aspects have a LOW&nbsp;avalanche danger.\r\r',
  'overall_danger_rose_image': '/sites/default/files/forecast/202101/20210102-071109-3.png',
  'overall_danger_rating': 'Moderate',
  'region': 'Salt Lake'
};

it('renders App component without crashing', () => {
  enzyme.shallow(<App />);
});

it('renders the RoseForecast component', () => {
  enzyme.shallow(<RoseForecast avyRose={forecast.overall_danger_rose_image} />);
});

it(' RoseForecast component doesn\'t throw an error when waiting for info from database', () => {
  enzyme.shallow(<RoseForecast avyRose={undefined} />);
});

it('renders the UacForecast component', () => {
  enzyme.shallow(<UacForecast forecast={forecast} />);
});

it('renders the UdotTrafficCams component for BCC', () => {
  enzyme.shallow(<UdotTrafficCams canyon={'bcc'} />);
});

it('renders the UdotTrafficCams component for LCC', () => {
  enzyme.shallow(<UdotTrafficCams canyon={'lcc'} />);
});

it('renders the Radar component', () => {
  enzyme.shallow(<Radar />);
});

it('renders the date of forecast in UacForecast component', () => {
  const wrapper = enzyme.shallow(<UacForecast forecast={forecast} />);
  const date = 'Saturday, January 2, 2021 - 5:06am';
  expect(wrapper.contains(date)).toEqual(true);
});

it('renders Traffic Cams header in App component', () => {
  const wrapper = enzyme.shallow(<App />);
  const header = <h2>Traffic Cams</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders Forecast header in RoseForecast component', () => {
  const wrapper = enzyme.shallow(<RoseForecast avyRose={forecast.overall_danger_rose_image} />);
  const header = <h2>Salt Lake Avalanche Forecast:</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders Detailed Forecast header in UacForecast component', () => {
  const wrapper = enzyme.shallow(<UacForecast forecast={forecast} />);
  const header = <h2>Detailed Forecast:</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});

it('renders an avalanche problem using .map function in UacForecast component', () => {
  const wrapper = enzyme.shallow(<UacForecast forecast={forecast} />);
  const avyProblem = <div><span>Persistent Weak Layer: </span>The dominant avalanche problem this season continues to be the persistent weak layer of weak faceted snow in the bottom half of our snowpack. Every forecaster that went out yesterday noted the same weak snowpack structure in their travels, you can see a photo below from Trent's pit in Mineral Fork that illustrates the widespread pattern of stronger snow (a cohesive slab) on top of the weaker faceted snow.<br/><br/></div>;
  expect(wrapper.contains(avyProblem)).toEqual(true);
});

it('renders Radar header in Radar component', () => {
  const wrapper = enzyme.shallow(<Radar />);
  const header = <h2>Radar from the last hour:</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});