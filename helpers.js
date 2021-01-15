const convertString = (string) => {
  if (string) {
    string = string.split('|>').join('\'').split('&nbsp;').join(' ').split('\\r').join('').split('\\').join('').split('&lt;').join(' < ').split('&gt;').join(' > ').split('&amp;').join(' & ');
    return string;
  }
  return '';
};

const sortAvyProbs = (avyProbs) => {
  if (avyProbs.length === 1) {
    return ['Avalanche Problems Loading'];
  }
  const avyProblemsArray = [];
  for (var i = 1; i < avyProbs.length; i += 2) {
    const problem = convertString(avyProbs[i].split(':')[1].split('"')[1]);
    const description = convertString(avyProbs[i + 1].split('":')[1].split('\\r"')[0]);
    const singleAvyProblem = {
      problem: [problem],
      description: [description]
    };
    avyProblemsArray.push(singleAvyProblem);
  }
  return avyProblemsArray;
};

const checkTime = () => {
  const time = JSON.stringify(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })).split(/[ :]+/)[1];
  const amPM = JSON.stringify(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })).split(' ')[2].substr(0, 2);
  if (time < 8 && time > 3 && amPM === 'AM') {
    return true;
  } else {
    return false;
  }
};

let changingDay = '14';

const checkDay = () => {
  let result;
  const currentDay = JSON.stringify(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })).split('/')[1];
  currentDay !== changingDay ? (result = true, changingDay = currentDay) : result = false;
  return result;
};

module.exports = {
  convertString,
  sortAvyProbs,
  checkTime,
  checkDay
};
