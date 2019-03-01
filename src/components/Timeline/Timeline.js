import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

export default () => {
  const { tweets } = useContext(AppContext);
  console.log('----------------------------------')
  console.log(tweets)
  console.log('----------------------------------')
  return <h1>Timeline</h1>;
};
