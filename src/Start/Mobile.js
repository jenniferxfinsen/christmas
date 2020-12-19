import React from 'react'
import './style.css'
import snowman from '../snowman.png'
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';

class StartPage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="background">
            <h1 className="title">Jennifer x Finsen</h1>
            <img src={snowman} className="App-logo" alt="snowman"></img>
          </div>
          <p className="text">you are one more step closer to the surprise</p>
          <div className="btn-container">
            <Link to="/dashboard">
              <button className="btn-next">Next</button>
            </Link>
          </div>
        </header>
      </div>
    )
  }
}

export default StartPage