import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import accounts from './accounts';
import newAccount from './newAccount';

const rootReducer = combineReducers({ accounts, newAccount, routing: routerReducer });

export default rootReducer;