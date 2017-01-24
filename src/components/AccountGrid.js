import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import NewAccount from './NewAccount';
import SavedAccount from './SavedAccount';

          // <NewAccount saveNewAccount={ this.props.saveNewAccount } updateNewAccount={ this.props.updateNewAccount } values={ this.props.newAccountValues }/>
class AccountGrid extends Component {
  render = () => {
    return (
      <Grid>
        <Row className="account-list">
          {
            Object
              .keys(this.props.accounts)
              .map((key) => {
                return (
                  <SavedAccount 
                    key={ key }
                    idx={ key }
                    values={ this.props.accounts[key] } 
                    updateSavedAccount={ this.props.updateSavedAccount }
                    saveSavedAccount={ this.props.saveSavedAccount }
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