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

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ accounts: this.data.getAccounts() });
  }

  render() {
    return (
      <Grid>
        <Row className="account-list">
            {
              Object
                .keys(this.state.accounts)
                .map((account) => {
                  return (
                    <div key={ account } className="account-card">
                      <AccountForm 
                        ref={ (input) => this.input = input } 
                        values={ this.state.accounts[account] } 
                        fields={ FormFields } 
                      />
                    </div>
                  )
                })
            }
        </Row>
      </Grid>
    )
  }
}

export default AccountsList;