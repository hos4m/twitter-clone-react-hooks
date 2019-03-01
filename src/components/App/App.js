import React from 'react';
import 'typeface-lato';
import 'font-awesome/css/font-awesome.min.css';

import { AppContext } from '../../AppContext';
import Tweet from '../Tweet/Tweet';
import Timeline from '../Timeline/Timeline';
import Trends from '../Trends/Trends';
import './app.scss';

export default () => (
  <AppContext.Provider value={{ tweets: [] }}>
    <Tweet />
    <Timeline />
    <Trends />
  </AppContext.Provider>
);
