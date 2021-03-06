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
    if (this.state.readOnly) {
      this.editFields(this.props.idx);
    } else {
      this.saveFields(this.props.idx);
    }
  }

  editFields = (key) => {
    this.setState({ readOnly: false, buttonText: 'Save' });
  }

  saveFields = (key) => {
    this.setState({ readOnly: true, buttonText: 'Edit' });
    this.props.saveSavedAccount(key);
  }

  updateSavedAccount = (key, values) => {
    this.props.updateSavedAccount(key, values);
  }

  render = () => {
    return (
      <Form className="account-card" ref={ (form) => this.form = form } onSubmit={ (e) => this.toggleButton(e) } >
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          update={ this.updateSavedAccount }
          showCopyButton={ true }
          readOnly={ this.state.readOnly }
        />
        <Button block bsStyle="primary" type="submit" name={ this.props.idx } ref={ (button) => this.button = button }>{ this.state.buttonText }</Button>
      </Form>
    )
  }
}

export default SavedAccount;
