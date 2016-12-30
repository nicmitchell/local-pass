import React, { Component } from 'react';
import AccountForm from './AccountForm';
import sampleData from '../sample-data.js';
import FormFields from './FormFields';

class AccountsList extends Component {
  render() {
    return (
      <div>
        {
          Object
            .keys(sampleData)
            .map((account) => {
              return <AccountForm key={ account } ref={ (input) => this.input = input } details={ sampleData[account] } fields={ FormFields } />
            })
        }
      </div>
    )
  }
}

export default AccountsList;