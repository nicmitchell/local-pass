import React, { Component } from 'react';
import AccountsList from './components/AccountsList';
import DataAdapter from './DataAdapter';
import shortid from 'shortid';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.data = new DataAdapter();
    this.state = {
      accounts: {},
      newAccount: {
        key: shortid.generate()
      }
      // Example account:
      // {
      //  key: 'aasdfuiop'
      //  account: 'Faceyspace',
      //  email: 'the@thing.com',
      //  password: 'badpass',
      //  username: 'thingy',
      //  readOnly: boolean,
      //  buttonText: Save || Edit
      // }
    };
  }

  componentWillMount = () => {
    const accounts = this.data.getAccounts();
    Object.keys(accounts).forEach((key) => {
      accounts[key].readOnly = true;
      accounts[key].buttonText = 'Edit';
    })
    this.setState({ accounts });
  }

  resetNewAccount = () => {
    this.setState({
      newAccount: {
        key: shortid.generate()
      }
    })
  }

  addNewAccountToState = (key) => {
    const accounts = { ...this.state.accounts };
    const newAccount = this.state.newAccount;
    accounts[key] = Object.assign(newAccount, { readOnly: true, buttonText: 'Edit' });
    this.setState({ accounts });
    this.saveAccountToStorage(key, newAccount);
    this.resetNewAccount();
  }

  saveNewAccount = (key, account) => {
    const newAccount = this.state.newAccount;
    this.addNewAccountToState(key);
    this.saveAccountToStorage(key, newAccount);
  }

  saveSavedAccount = (key, values) => {
    this.data.set(key, values);
  }

  updateSavedAccount = (key, values) => {
    const accounts = { ...this.state.accounts };
    const previous = accounts[key];
    const updated = {
      ...previous,
      ...values
    }
    accounts[key] = updated;
    this.setState({ accounts }); 
  }

  saveAccountToStorage = (key, values) => {
    const account = this.state.accounts[key] || values;
    this.data.set(key, account);
  }

  updateNewAccount = (key, values) => {
    const previous = this.state.newAccount;
    const updated = {
      ...previous,
      ...values
    }
    this.setState({ newAccount: updated }); 
  }

  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PassKeeper Thingy</h2>
        </div>
        <AccountsList 
          accounts={ this.state.accounts } 
          updateSavedAccount={ this.updateSavedAccount } 
          saveSavedAccount={ this.saveAccountToStorage }
          newAccountValues={ this.state.newAccount }
          saveNewAccount={ this.saveNewAccount } 
          updateNewAccount={ this.updateNewAccount } 
        />
      </div>
    );
  }
}

export default App;
