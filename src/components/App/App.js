import React, { useState } from 'react';
import 'typeface-lato';
import 'font-awesome/css/font-awesome.min.css';

import { AppContext } from '../../AppContext';
import Tweet from '../Tweet/Tweet';
import Timeline from '../Timeline/Timeline';
import UserWidget from '../UserWidget/UserWidget';
import useDarkMode from '../../hooks/useDarkMode/useDarkMode';
import useMyUser from '../../hooks/useMyUser/useMyUser';
import generateTweets from '../../utils/generateTweets';
import './app.scss';

export default () => {
  const [tweets, updateTweets] = useState(generateTweets(20));
  const { isDarkMode, DarkModeController } = useDarkMode();
  const mySuperCoolUser = useMyUser();

  const addNewTweet = tweet => {
    updateTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ tweets }}>
      <main className={`main-content ${isDarkMode ? 'dark-mode' : ''}`}>
        <section className="top-bar">
          <DarkModeController />
          <UserWidget user={mySuperCoolUser} />
        </section>
        <Timeline tweets={tweets} />
        <Tweet addNewTweet={tweet => addNewTweet(tweet)} user={mySuperCoolUser} />
      </main>
    </AppContext.Provider>
  );
};
