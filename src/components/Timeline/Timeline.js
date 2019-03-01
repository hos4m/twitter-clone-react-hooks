import React,{ useContext } from 'react';
import { AppContext } from '../../AppContext'

export default () => {
  console.log('----------------------------------')
  console.log(useContext(AppContext))
  console.log('----------------------------------')
  return <h1>Timeline</h1>;
};
