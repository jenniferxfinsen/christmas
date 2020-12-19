import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import './App.css';
import StartPage from './Start/Mobile'
import Dashboard from './Dashboard/Mobile'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/start" render={() => <StartPage />}></Route>
        <Route path="/dashboard" render={() => <Dashboard />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
