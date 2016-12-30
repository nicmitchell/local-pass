import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';

class AccountButton extends Component {
  render() {
    return (
      <div>
        <Collapse in={this.props.readOnly}>
          <div>
            <Button block bsStyle="primary" type="submit" ref={ (button) => this.editButton = button } onClick={ (e)=> this.props.editFields(e) }>Edit</Button>
          </div>
        </Collapse>
        <Collapse in={!this.props.readOnly}>
          <div>
            <Button block bsStyle="primary" type="submit" ref={ (button) => this.saveButton = button } onClick={ (e)=> this.props.saveFields(e) }>Save</Button>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default AccountButton;