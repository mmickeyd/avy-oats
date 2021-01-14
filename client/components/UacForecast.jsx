import React from 'react';
import { convertString, sortAvyProbs } from '../../helpers.js';

const UacForecast = (props) => {
  const forecast = props.forecast;
  const date = forecast.date_issued;
  const overallDanger = forecast.overall_danger_rating;
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
        <div>
          <h3>Overall Danger Rating:</h3>
          {overallDanger}
        </div>
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
        <div>
          <h3>Bottom Line:</h3>
          {bottomLine}
        </div>
      </div>
    </div>
  );
};

export default UacForecast;