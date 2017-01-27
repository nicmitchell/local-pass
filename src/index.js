import React from 'react';
import ReactDOM from 'react-dom';

//Router
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import Connect from './components/Connect';
import Settings from './components/Settings';
import AccountGrid from './components/AccountGrid';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Connect } store={ store }>
        <IndexRoute component={ AccountGrid } store={ store }></IndexRoute>
        <Route path="/settings" component={ Settings }></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));