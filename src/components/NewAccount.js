import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';

class NewAccount extends Component {
  update = (key, values) => {
    this.props.updateNewAccount(key, values);
  }

  saveFields = (e) => {
    e.preventDefault();
    this.props.saveNewAccount(this.props.values.key);
  }

  render = () => {
    return (
      <form className="account-card new" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveFields(e) }>
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          update={ this.update }
          showCopyButton={ false }
          readOnly={ false }
        />
        <Button block bsStyle="primary" type="submit" ref={ (button) => this.button = button }>Save</Button>
      </form>
    )
  }
}

export default NewAccount;