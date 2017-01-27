import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import NewAccount from './NewAccount';
import SavedAccount from './SavedAccount';

class AccountGrid extends Component {
  render = () => {
    return (
      <Grid>
        <Row className="account-list">
          {
            Object
              .keys(this.props.accounts)
              .map((key, i) => {
                return ( key !== 'newAccount' &&
                  <SavedAccount 
                    key={ key }
                    idx={ key }
                    values={ this.props.accounts[key] } 
                    updateSavedAccount={ this.props.updateSavedAccount }
                    saveSavedAccount={ this.props.saveSavedAccount }
                    removeAccount={ this.props.removeAccount }
                  />
                )
              })
          }
        </Row>
        <NewAccount { ...this.props }/>
      </Grid>
    )
  }
}

export default AccountGrid;
// <NewAccount 
//   saveNewAccount={ this.props.saveNewAccount } 
//   updateNewAccount={ this.props.updateNewAccount } 
//   addNewAccount={ this.props.addNewAccount } 
//   values={ this.props.accounts.newAccount }
// />