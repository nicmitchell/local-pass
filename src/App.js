import React, { Component } from 'react';
import AccountsList from './components/AccountsList';
import NewAccount from './components/NewAccount';
import DataAdapter from './DataAdapter';
import shortid from 'shortid';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.data = new DataAdapter();
    this.state = {
      accounts: {}
      // Example:
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

  addAccount = (account) => {
    console.log('adding account:', account);
    const accounts = { ...this.state.accounts };
    const key = shortid.generate();
    accounts[key] = account;
    this.setState({ accounts });
  }

  updateAccount = (key, values) => {
    const accounts = { ...this.state.accounts };
    const previous = accounts[key];
    const updated = {
      ...previous,
      ...values
    }
    accounts[key] = updated;
    this.setState({ accounts }); 
  }

  saveAccount = (key) => {
    const account = this.state.accounts[key];
    this.updateAccount(key, { readOnly: true, buttonText: 'Edit' });
    this.data.set(key, account);
  }

  updateInput = (key, account) => {
    this.updateAccount(key, account)
  }

  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PassKeeper Thingy</h2>
        </div>
        <NewAccount addAccount={ this.addAccount }/>
        <AccountsList 
          accounts={ this.state.accounts } 
          updateInput={ this.updateInput } 
          updateAccount={ this.updateAccount }
          saveAccount={ this.saveAccount }
        />
      </div>
    );
  }
}

export default App;
