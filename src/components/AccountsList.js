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
      accounts: this.data.getAccounts()
    };
  }

  render() {
    return (
      <Grid>
        <Row className="account-list">
            {
              this.state.accounts.map((account, idx) => {
                return (
                  <AccountForm 
                    key={ idx }
                    idx={ idx }
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