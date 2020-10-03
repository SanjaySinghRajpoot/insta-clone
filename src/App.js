import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__headerImage"
        src="https://i.pinimg.com/originals/57/6c/dd/576cdd470fdc0b88f4ca0207d2b471d5.png" alt=""/>
      </div>

      <Post />
    </div>
  );
}

export default App;
