import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";
import {createBrowserHistory } from 'history'
 

import Welcome from './welcome'

function Index(props) {
  useEffect(() => {
    if(!false) {
      setTimeout(() => {
        console.log(123132)
        props.history.push('/login')
      }, 3000)
    }
  });
  return (
    <Router>
    <div>
      放假诶哦我姐夫 i 饿哦我减肥哇哦； 
      fewaf
      <NavLink to="/list/app" activeClassName="selected">手机端</NavLink>
    </div>
    <Switch>
      <Route path="/list/app" component={Welcome} />
    </Switch>
  </Router>
  )
}

export default Index;