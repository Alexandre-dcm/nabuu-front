import './App.css'
import HomePage from "./pages/HomePage";
import DocumentationsPage from './pages/DocumentationsPage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Menu/NavBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className="content">
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
