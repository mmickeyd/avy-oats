import React, { useState } from 'react';
import { convertString, sortAvyProbs, onExpand } from '../../helpers.js';
import styles from '../css/uacForecastStyles.css';

const UacForecast = (props) => {

  const [expandForecast, setExpandForecast] = useState(false);
  const [expandCurrentCondtions, setExpandCurrentCondtions] = useState(false);
  const [expandRecentActivity, setExpandRecentActivity] = useState(false);
  const [expandAvalancheProblems, setExpandAvalancheProblems] = useState(false);
  const [expandBottomLine, setExpandBottomLine] = useState(false);

  const forecast = props.forecast;
  const date = forecast.date_issued;
  const overallDanger = forecast.overall_danger_rating;
  const currentConditions = convertString(forecast.current_conditions);
  const recentActivity = convertString(forecast.recent_activity);
  const bottomLine = convertString(forecast.bottom_line);
  const avalancheProblems = sortAvyProbs(JSON.stringify(forecast).split('avalanche_problem'));

  const onExpand = (state, changeState, identifier) => {
    const elementId = document.getElementById(identifier);
    !state ? (
      changeState(true),
      document.getElementsByClassName(identifier)[0].classList.add(styles.iconExpanded),
      elementId ? elementId.classList.add(styles.blackBackground) : null
    ) : state ? (
      changeState(false),
      document.getElementsByClassName(identifier)[0].classList.remove(styles.iconExpanded),
      elementId ? elementId.classList.remove(styles.blackBackground) : null
    ) : null;
  };

  return (
    <div className={styles.entireForecast}>
      <div className={styles.detailedForecast}>
        <button className={styles.forecastButton} onClick={ () => onExpand(expandForecast, setExpandForecast, 'detailedForecast') }>
          Detailed Forecast
          <span className={`${styles.expandIcon} detailedForecast`}>
            <svg viewBox="-9 -10 52 52">
              <g>
                <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
              </g>
            </svg>
          </span>
        </button>
        <br/>
        <span className={styles.forecastNoExpandSection}>{date}</span>
      </div>
      {expandForecast ? (
        <div>
          <div className={styles.expandedForecastGrid}>
            <button className={styles.overallDanger}>
              Overall Danger Rating
              <span className={styles.Icon}>
                <svg viewBox="-9 -10 52 52">
                  <g>
                    <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
                  </g>
                </svg>
              </span>
            </button>
            <span className={styles.forecastNoExpandSection}>{overallDanger}</span>
            <br/>
          </div>
          <div className={styles.expandedForecastGrid}>
            <button className={styles.expandButton} onClick={ () => onExpand(expandCurrentCondtions, setExpandCurrentCondtions, 'currentConditions') }>
              Current Conditions
              <span className={`${styles.expandIcon} currentConditions`}>
                <svg viewBox="-9 -10 52 52">
                  <g>
                    <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
                  </g>
                </svg>
              </span>
            </button>
            <br/>
            <span className={styles.forecastSection} id={'currentConditions'}>{ expandCurrentCondtions ? currentConditions : null }</span>
          </div>
          <div className={styles.expandedForecastGrid}>
            <button className={styles.expandButton} onClick={ () => onExpand(expandRecentActivity, setExpandRecentActivity, 'recentActivity') }>
              Recent Activity
              <span className={`${styles.expandIcon} recentActivity`}>
                <svg viewBox="-9 -10 52 52">
                  <g>
                    <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
                  </g>
                </svg>
              </span>
            </button>
            <br/>
            <span className={styles.forecastSection} id={'recentActivity'}>{ expandRecentActivity ? recentActivity : null }</span>
          </div>
          <div>
            <div className={styles.expandedForecastGrid}>
              <button className={styles.expandButton} onClick={ () => onExpand(expandAvalancheProblems, setExpandAvalancheProblems, 'avalancheProblems') }>
                Avalanche Problems
                <span className={`${styles.expandIcon} avalancheProblems`}>
                  <svg viewBox="-9 -10 52 52">
                    <g>
                      <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
                    </g>
                  </svg>
                </span>
              </button>
              <br/>
              { expandAvalancheProblems ? avalancheProblems.map(avyProblem =>
                <span className={styles.avySection}>
                  <span className={`${styles.forecastSection} ${styles.avyProblem} `}>{avyProblem.problem}: </span>
                  <span className={styles.forecastSection} id={'avalancheProblems'}>{avyProblem.description}</span>
                </span>
              ) : null }
            </div>
            <div className={styles.expandedForecastGrid}>
              <button className={styles.expandButton} onClick={ () => onExpand(expandBottomLine, setExpandBottomLine, 'bottomLine') }>
                Bottom Line
                <span className={`${styles.expandIcon} bottomLine`}>
                  <svg viewBox="-9 -10 52 52">
                    <g>
                      <polyline className={styles.caretDetails} points="23.7,31.5 8.3,16 23.7,0.5" />
                    </g>
                  </svg>
                </span>
              </button>
              <br/>
              <span className={styles.forecastSection} id={'bottomLine'}>{ expandBottomLine ? bottomLine : null}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UacForecast;
