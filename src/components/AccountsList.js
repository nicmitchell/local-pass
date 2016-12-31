import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import AccountForm from './AccountForm';
import sampleData from '../sample-data.js';
import FormFields from './FormFields';

class AccountsList extends Component {
  render() {
    return (
      <Grid>
        <Row className="account-list">
            {
              Object
                .keys(sampleData)
                .map((account) => {
                  return (
                    <div key={ account } className="account-card">
                      <AccountForm 
                        ref={ (input) => this.input = input } 
                        details={ sampleData[account] } 
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