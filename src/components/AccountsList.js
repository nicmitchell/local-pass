import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AccountForm from './AccountForm';
import sampleData from '../sample-data.js';
import FormFields from './FormFields';

class AccountsList extends Component {
  render() {
    return (
      <Row className="account-list">
        <Col sm={4}></Col>
        <Col sm={4}>
          {
            Object
              .keys(sampleData)
              .map((account) => {
                return <AccountForm 
                  key={ account } 
                  ref={ (input) => this.input = input } 
                  details={ sampleData[account] } 
                  fields={ FormFields } 
                />
              })
          }
        </Col>
        <Col sm={4}></Col>
      </Row>
    )
  }
}

export default AccountsList;