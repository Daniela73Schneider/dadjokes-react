import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { jokes } from './jokes';
import Joke from './Joke';

const App = () => {
  console.log(jokes);
  return (
    <div>
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
createRoot(document.querySelector('#app')).render(<App />);
