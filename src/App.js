import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import snowman from './snowman.png';
import './App.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="background">
          <h1 className="title">Jennifer x Finsen</h1>
          <img src={snowman} className="App-logo" alt="snowman"></img>
        </div>
        <p className="text">you are one more step closer to the surprise</p>
        <div className="btn-container">
          
            <button className="btn-next">Next</button>
       
        </div>
      </header>
    </div>
  );
}

export default App;
