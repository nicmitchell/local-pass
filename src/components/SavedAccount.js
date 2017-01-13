import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';

class SavedAccount extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = [];
    this.idx = this.props.idx;
    this.state = { 
      readOnly: true,
      buttonText: 'Edit'
    };
  }

  toggleButton = (e) => {
    e.preventDefault();
    if (this.props.values.readOnly) {
      this.editFields(this.idx);
    } else {
      this.saveFields(this.idx);
    }
  }

  editFields = (key) => {
    this.props.updateAccount(key, { readOnly: false, buttonText: 'Save' });
  }

  saveFields = (key) => {
    this.props.saveAccount(key, { readOnly: true, buttonText: 'Edit' });
  }

  updateInput = (key, values) => {
    this.props.updateInput(key, values);
  }

  render = () => {
    return (
      <Form horizontal className="account-card" ref={ (form) => this.form = form }>
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          ref={ (form) => this.form = form }
          handleClick={ this.toggleButton }
          updateInput={ this.updateInput }
          updateAccount={ this.props.updateAccount }
        />
        <Button block bsStyle="primary" type="submit" name={ this.props.idx } onClick={ (e) => this.toggleButton(e) } ref={ (button) => this.button = button }>{ this.props.values.buttonText }</Button>
      </Form>
    )
  }
}

export default SavedAccount;
