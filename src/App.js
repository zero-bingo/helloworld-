import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './configs/router'

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map( route => (<Route exact={true} path={route.path} component={route.component} key={route.path} />))
        }
        <Route component={() => (<h1 style={{textAlign: 'center'}}>404!Sorry, Not Found</h1>)} />
      </Switch>
    </Router>
  );
}

export default App;
