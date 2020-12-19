import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import tree from './assets/tree.png'
import christmas from './assets/christmas-tree-2561029.png'
import qr from './assets/qr.png'
import gift from './assets/gift.png'
import santa from './assets/santa.png'
import snowman from './assets/snowman.png'
import './App.css'
import './App.css';
import React, { useState } from 'react';



function App() {
  const [isDarkMode, setisDarkMode] = useState(false)
  return (
    <div className="App">
      <header className="App-header" style={{background: isDarkMode ? '#03174C' : 'white'}}>
        <div className="background" style={{marginBottom: 8, background: isDarkMode ? '#03174C' : '#F9F0E3', color: isDarkMode ? 'wheat' : 'black'}}>
          <h1 className="title">Jennifer x Finsen</h1>
          {/* <img src={snowman} className="App-logo" alt="snowman"></img> */}
        </div>
        <button
          style={{background: isDarkMode ? 'wheat' : '#03174C', color: isDarkMode ? ' #03174C' : 'wheat'}}
          className="btn-dark"
          onClick={() => setisDarkMode(!isDarkMode)}
        >
        {isDarkMode ? "Light" : "Dark"}
        </button>
        {/* <p className="text">you are one more step closer to the surprise</p> */}
        <div className="main-event" style={{background: '#76C79E'}}>
            <img src={tree} style={{width: 200, height: 150}}></img>
        </div>
        <div className="menu-container">
          <div className="menu" style={{background: '#9BA3FF'}}>
            <img src={snowman} style={{width: 170, height: 130}}></img>
          </div>
          <div className="menu" style={{background: '#F05D48'}}>
            <img src={christmas} style={{width: 170, height: 130}}></img>
          </div>
          <div className="menu" style={{background: '#F4A17C'}}>
            <img src={gift} style={{width: 170, height: 130}}></img>
          </div>
          <div className="menu" style={{background: '#FFCF86'}}>
            <img src={santa} style={{width: 170, height: 130}}></img>
          </div>
          <div className="menu" style={{background: '#D9A5B5'}}>
            <h2>Scan Me {'>'}</h2>
          </div>
          <div className="menu" style={{background: '#4E5567'}}>
            <img src={qr} style={{width: 150, height: 150}}></img>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
