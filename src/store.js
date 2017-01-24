import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/root';
import accounts from './data/sample-data';

// const defaultState = {
//   accounts
// };

const store = createStore(rootReducer, { accounts });

export const history = syncHistoryWithStore(browserHistory, store);

export default store;