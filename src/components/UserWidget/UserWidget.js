import React from 'react';

export default function UserWidget({ user }) {
  return (
    <div className="timeline__tweet__author">
      <span className="timeline__tweet__author__name">{user.name}</span>
      <img
        src={user.avatar}
        alt={user.name}
        className="timeline__tweet__author__image"
      />
    </div>
  );
}
