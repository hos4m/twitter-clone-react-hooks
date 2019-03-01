import React, { useState } from 'react';
import 'typeface-lato';
import 'font-awesome/css/font-awesome.min.css';

import { AppContext } from '../../AppContext';
import Tweet from '../Tweet/Tweet';
import Timeline from '../Timeline/Timeline';
import Trends from '../Trends/Trends';
import './app.scss';

export default () => {
  const [tweets, updateTweets] = useState([]);

  const addNewTweet = (tweet) => {
    updateTweets([tweet, ...tweets])
  }

  return (
    <AppContext.Provider value={{ tweets }}>
      <Tweet addNewTweet={tweet => addNewTweet(tweet)} />
      <Timeline />
      <Trends />
    </AppContext.Provider>
  );
};
