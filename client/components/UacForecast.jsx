import React from 'react';
import { convertString, sortAvyProbs } from './helpers.js';

const UacForecast = (props) => {
  const forecast = props.forecast;
  const date = forecast.date_issued;
  const currentConditions = convertString(forecast.current_conditions);
  const recentActivity = convertString(forecast.recent_activity);
  const bottomLine = convertString(forecast.bottom_line);
  const avalancheProblems = sortAvyProbs(JSON.stringify(forecast).split('avalanche_problem'));
  return (
    <div>
      <h2>Detailed Forecast:</h2>
      <div>
        <span>Date Issued:&nbsp;</span>
        {date}
        <br/>
        <br/>
        <span>Current Conditions:&nbsp;</span>
        {currentConditions}
        <br/>
        <br/>
        <span>Recent Activity:</span>
        {recentActivity}
        <br/>
        <br/>
        <h3>Avalanche Problems: </h3>
        {avalancheProblems.map(avyProblem =>
          <div>
            <span>{avyProblem.problem}</span>
            <br/>
            {avyProblem.description}
            <br/><br/>
          </div>
        )}
        <span>Bottom Line:&nbsp;</span>
        {bottomLine}
      </div>
    </div>
  );
};

export default UacForecast;