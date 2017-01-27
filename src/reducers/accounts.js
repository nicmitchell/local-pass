import shortid from 'shortid';
import Data from '../helpers/DataAdapter';
import { newAccountValues } from '../helpers/FormFields';
const data = new Data();

function accounts(state = {}, { type, key, values }) {
  switch(type) {
    case 'SAVE_NEW_ACCOUNT' :
      const newKey = shortid.generate();
      return {
        ...state,
        [state[newKey]]: saveNewAccount(state.newAccount, newKey),
        newAccount: newAccountValues()
      }
    case 'UPDATE_NEW_ACCOUNT' :
      return {
        ...state,
        newAccount: updateNewAccount(state.newAccount, values)
      }
    case 'UPDATE_SAVED_ACCOUNT' :
      return {
        ...state,
        [key]: updateSavedAccount(state[key], values)
      }
    case 'SAVE_SAVED_ACCOUNT' :
      data.set(key, state[key]);
      return state;
    case 'REMOVE_ACCOUNT' :
      data.remove(key);
      delete state[key];
      return Object.assign({}, state)
    default:
      return state;
  }
}

function saveNewAccount(state, newKey) {
  const newAccount = {
    ...state, 
    key: newKey
  };
  data.set(newKey, newAccount);
  return newAccount
}

function updateNewAccount(newAccount, values) {
  return {
    ...newAccount,
    ...values
  }
}

function updateSavedAccount(state, values) {
  return { 
    ...state, 
    ...values
  }
}

export default accounts;
