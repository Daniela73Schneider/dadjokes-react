import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import avatarUser from './img/user01.png';

const App = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleUpClick = () => {
    setUpLikes(upLikes + 1);
  };
//definuju fci handleUpClick- ta volá f-setUplikes, s parametrem uplikes. Při stisknutí tlačítka má aktualizovat hodnotu uplikes o 1.
  const handleDownClick = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="container">
      <header></header>

      <img
        src={avatarUser}
        alt="avatar-user"
        className="joke__user user-avatar"
      />

      <p className="joke__text">
        The secret service isn't allowed to yell "Get down!" anymore when the
        president is about to be attacked. Now they have to yell "Donald, duck!"
      </p>
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
  );
};

createRoot(document.querySelector('#app')).render(<App />);
