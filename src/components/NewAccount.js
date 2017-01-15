import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';
// import DataAdapter from '../DataAdapter';
// import FormFields from './FormFields';

class NewAccount extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (key, values) => {
    this.props.updateNewAccount(key, values);
  }

  saveFields = (e) => {
    e.preventDefault();
    this.props.saveNewAccount(this.props.values.key);
    // this.form.reset();
  }

  render = () => {
    return (
      <Form horizontal className="account-card" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveFields(e) }>
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          ref={ (form) => this.form = form }
          handleInputChange={ this.handleInputChange }
        />
        <Button block bsStyle="primary" type="submit" ref={ (button) => this.button = button }>Save</Button>
      </Form>
    )
  }
}

export default NewAccount;