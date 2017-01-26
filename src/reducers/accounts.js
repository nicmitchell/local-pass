import shortid from 'shortid';
import Data from '../helpers/DataAdapter';
import { newAccountValues } from '../helpers/FormFields';
const data = new Data();

function accounts(state = {}, { type, key, values }) {
  console.log(...arguments);
  switch(type) {
    case 'SAVE_NEW_ACCOUNT' :
      console.log('newAccountValues', newAccountValues());
      console.log('Saving new account:', values);
      const newKey = shortid.generate();
      const newAccount = Object.assign({}, state.newAccount, { key: newKey });
      data.set(newKey, newAccount);
      return Object.assign(state, { [newKey]: newAccount }, { newAccount: newAccountValues() });
    case 'UPDATE_NEW_ACCOUNT' :
      if (key === 'newAccount') {
        const updatedNewAccount = Object.assign({}, state.newAccount, values);
        return Object.assign({}, state, { newAccount: updatedNewAccount });
      }
    case 'UPDATE_SAVED_ACCOUNT' :
      console.log('Updating account:', values);
      return Object.assign({}, state[key], values);
    case 'SAVE_SAVED_ACCOUNT' :
      console.log('Saving account to localStorage key', key);
      console.log('State', state);
      console.log('State at key', state[key]);
      data.set(key, state[key]);
      return state;
    case 'REMOVE_ACCOUNT' :
      console.log('Removing account:', values);
      data.remove(key);
      delete state[key];
      return state;
    default:
      return state;
  }
}

export default accounts;

// add new account
// addNewAccountToState = (key) => {
//   const accounts = { ...this.state.accounts };
//   const newAccount = this.state.newAccount;
//   accounts[key] = Object.assign(newAccount, { readOnly: true, buttonText: 'Edit' });
//   this.setState({ accounts });
//   this.saveAccountToStorage(key, newAccount);
//   this.resetNewAccount();
// }

// saveNewAccount = (key, account) => {
//   const newAccount = this.state.newAccount;
//   this.addNewAccountToState(key);
//   this.saveAccountToStorage(key, newAccount);
// }

// saveAccountToStorage = (key, values) => {
//   const account = this.state.accounts[key] || values;
//   this.data.set(key, account);
// }

// updateNewAccount = (key, values) => {
//   const previous = this.state.newAccount;
//   const updated = {
//     ...previous,
//     ...values
//   }
//   this.setState({ newAccount: updated }); 
// }

// resetNewAccount = () => {
//   const newAccount = FormFields.reduce((acc, field) => {
//     return Object.assign(acc, { [field.id]: '' });
//   }, {})
//   newAccount.key = shortid.generate();
//   this.setState({ newAccount });
// }


