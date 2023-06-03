import React from 'react';
import './style.css';
import { useState } from 'react';

const Joke = (props) => {
  const { userAvatar, userName, text, likes, dislikes } = props;
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);

  const handleUpClick = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDownClick = () => {
    setDownLikes(downLikes + 1);
  };
  return (
    <div className="container">
      <div className="profileUser">
        <img
          src={userAvatar}
          alt="avatar-user"
          className="joke__user user-avatar"
        />
        <h3 className="user-name">{userName}</h3>
      </div>
      <div className="textLikes">
        <p className="joke__text">{text}</p>

        <div className="joke__likes">
          <button
            onClick={handleUpClick}
            className="btn-like btn-like--up"
          ></button>
          <span className="likes-count likes-count--up">{upLikes}</span>
          <button
            onClick={handleDownClick}
            className="btn-like btn-like--down"
          ></button>
          <span className="likes-count likes-count--down">{downLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default Joke;
