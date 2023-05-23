import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import HomePage from "./pages/Home/index";
import DocumentationsPage from './pages/Documentations/index';
import LoginPage from './pages/Login/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/docs">
              <DocumentationsPage/>
            </Route>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
