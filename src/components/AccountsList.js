import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import AccountForm from './AccountForm';
import DataAdapter from '../DataAdapter';
import FormFields from './FormFields';

class AccountsList extends Component {
  constructor(props) {
    super(props);
    this.data = new DataAdapter();
    this.state = {
      accounts: []
    };
  }

  componentWillMount() {
    this.data.getAccounts()
      .then((data) => {
        console.log('got data');
        this.setState({ accounts: data });
      })
  }

  render() {
    return (
      <Grid>
        <Row className="account-list">
            {
              this.state.accounts.map((account, idx) => {
                return (
                  <AccountForm 
                    key={ account.key }
                    idx={ account.key }
                    ref={ (input) => this.input = input } 
                    values={ account } 
                    fields={ FormFields } 
                  />
                )
              })
            }
        </Row>
      </Grid>
    )
  }
}

export default AccountsList;