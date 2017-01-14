import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';

class SavedAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      readOnly: true,
      buttonText: 'Edit'
    };
  }

  toggleButton = (e) => {
    e.preventDefault();
    if (this.props.values.readOnly) {
      this.editFields(this.props.idx);
    } else {
      this.saveFields(this.props.idx);
    }
  }

  editFields = (key) => {
    this.props.updateAccount(key, { readOnly: false, buttonText: 'Save' });
  }

  saveFields = (key) => {
    this.props.saveAccount(key, { readOnly: true, buttonText: 'Edit' });
  }

  handleInputChange = (key, values) => {
    this.props.handleInputChange(key, values);
  }

  render = () => {
    return (
      <Form horizontal className="account-card" ref={ (form) => this.form = form }>
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          ref={ (form) => this.form = form }
          handleInputChange={ this.handleInputChange }
          showCopyButton={ true }
        />
        <Button block bsStyle="primary" type="submit" name={ this.props.idx } onClick={ (e) => this.toggleButton(e) } ref={ (button) => this.button = button }>{ this.props.values.buttonText }</Button>
      </Form>
    )
  }
}

export default SavedAccount;
