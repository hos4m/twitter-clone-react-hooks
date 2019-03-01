import React, { useState } from 'react';
import 'typeface-lato';
import 'font-awesome/css/font-awesome.min.css';

import { AppContext } from '../../AppContext';
import Tweet from '../Tweet/Tweet';
import Timeline from '../Timeline/Timeline';
import generateTweets from '../../utils/generateTweets';
import './app.scss';

export default () => {
  const [tweets, updateTweets] = useState(generateTweets(20));

  const addNewTweet = tweet => {
    updateTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ tweets }}>
      <main className="main-content">
        <Tweet addNewTweet={tweet => addNewTweet(tweet)} />
        <Timeline tweets={tweets} />
      </main>
    </AppContext.Provider>
  );
};
