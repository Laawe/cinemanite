import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './components/home/home.component';
import ShortFilmsComponent from './components/shortfilms/shortfilms.component';

export default function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route path="/short-films">
             <ShortFilmsComponent /> 
        </Route>
          </Switch>
      </div>
    </Router>
  );
};


