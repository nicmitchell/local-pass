import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
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
                    <Col sm={4} xs={6} key={ account }>
                      <AccountForm 
                        ref={ (input) => this.input = input } 
                        details={ sampleData[account] } 
                        fields={ FormFields } 
                      />
                    </Col>
                  )
                })
            }
        </Row>
      </Grid>
    )
  }
}

export default AccountsList;