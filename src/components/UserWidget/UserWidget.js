import React from 'react';

export default function UserWidget({ user }) {
  return (
    <div className="timeline__tweet__author">
      <b className="timeline__tweet__author__name">{user.name}</b>
      <img
        src={user.avatar}
        alt={user.name}
        className="timeline__tweet__author__image"
      />
    </div>
  );
}
