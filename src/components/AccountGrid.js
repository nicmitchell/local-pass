import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import NewAccount from './NewAccount';
import SavedAccount from './SavedAccount';

class AccountGrid extends Component {
  render = () => {
    return (
      <Grid>
        <Row className="account-list">
          <NewAccount 
            saveNewAccount={ this.props.saveNewAccount } 
            updateNewAccount={ this.props.updateNewAccount } 
            addNewAccount={ this.props.addNewAccount } 
            values={ this.props.accounts.newAccount }
            store={ this.props.store }
          />
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
      </Grid>
    )
  }
}

export default AccountGrid;