import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <div>
      <div>Cottonwood Canyon Road Updates</div>
      <span>(Courtesy of UDOT)</span>
      <section>
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
