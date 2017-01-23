import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Settings from './components/Settings';
import AccountGrid from './components/AccountGrid';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ AccountGrid }></IndexRoute>
      <Route path="/settings" component={ Settings }></Route>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));