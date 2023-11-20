import { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPages from '../form-pages/FormPages';
import Emissions from '../form-pages/Emissions';
import Homepage from '../homepage/Homepage';
import Login from '../userEntryForms/Login';
import Register from '../userEntryForms/Register';
import Dashboard from '../dashboard/Dashboard';
import Navbar from '../navbar/Navbar';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import Logout from '../logout/Logout';

function App() {
  const { token, setToken } = useContext(carbonFootprintContext);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setToken(true);
    }
  })

  return (
    <div className="App" style={{"font-family": "ui-rounded"}}>
        <Router>
        <Navbar token={token} />
          <div className="App-container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/carbon-footprint" component={FormPages} />
            <Route exact path="/carbon-emissions" component={Emissions} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
