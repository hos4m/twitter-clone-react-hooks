import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './timeline.scss';

export default function Timeline() {
  const { tweets } = useContext(AppContext);

  return tweets.map(tweet => (
    <div key={tweet.uuid} className="tweet">
      <p className="tweet__body">{tweet.value}</p>
      <div className="tweet__author">
        <span className="tweet__author__name">@{tweet.author.name}</span>
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="tweet__author__image"
        />
      </div>
    </div>
  ));
}
