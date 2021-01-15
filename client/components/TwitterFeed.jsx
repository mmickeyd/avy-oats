import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from '../css/generalStyles.css';

const TwitterFeed = () => {
  return (
    <div className={styles.twitterContainer}>
      <div className={styles.twitterFeedHeader}>Cottonwood Canyon Road Updates</div>
      <span className={styles.twitterFeedSubheader}>(Courtesy of UDOT)</span>
      <section className={styles.twitterFeed}>
        <div>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='UDOTcottonwoods'
            options={{
              tweetLimit: '5',
              width: '100%',
              height: '100%'
            }}
            theme='dark'
            noHeader='true'
            noBorders='true'
            noFooter='true'
          ></TwitterTimelineEmbed>
        </div>
      </section>
    </div>
  );
};

export default TwitterFeed;
