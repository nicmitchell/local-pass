import shortid from 'shortid';
import Data from '../helpers/DataAdapter';
import { newAccountValues } from '../helpers/FormFields';

function newAccount(state = {}, { type, key, values }) {
  switch(type) {
    // case 'UPDATE_NEW_ACCOUNT' :
    //   console.log('Updating new account:', values);
    //   Object.assign(state, values);
    //   console.log('updated new account state', state)
    //   return state;
    // case 'SAVE_NEW_ACCOUNT' :
    //   console.log('newAccountValues', newAccountValues());
    //   const newKey = shortid.generate();
    //   const newAccount = Object.assign({}, state.newAccount, { key: newKey });
    //   // state.newAccount.key = newKey;
    //   state[newKey] = newAccount;
    //   delete state.newAccount;
    //   state.newAccount = newAccountValues();
    //   console.log(state);
    //   return state;
    default :
      return state;
  }
}

export default newAccount;