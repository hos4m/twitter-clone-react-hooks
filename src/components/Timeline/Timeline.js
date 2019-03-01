import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './timeline.scss';

export default function Timeline() {
  const { tweets } = useContext(AppContext);

  return tweets.map(tweet => (
    <div key={tweet.uuid} className="timeline__tweet">
      <p className="timeline__tweet__body">{tweet.value}</p>
      <div className="timeline__tweet__author">
        <span className="timeline__tweet__author__name">{tweet.author.name}</span>
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="timeline__tweet__author__image"
        />
      </div>
    </div>
  ));
}
