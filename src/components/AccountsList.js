import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import SavedAccount from './SavedAccount';

class AccountsList extends Component {
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
                    handleInputChange={ this.props.handleInputChange }
                    updateAccount={ this.props.updateAccount }
                    saveAccount={ this.props.saveAccount }
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