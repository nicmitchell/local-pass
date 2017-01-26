import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';

class NewAccount extends Component {
  update = (values) => {
    console.log('values in new account update', values);
    this.props.updateNewAccount(Object.assign(values, { key: 'newAccount' }));
  }

  // updateSavedAccount = (values) => {
  //   this.props.updateSavedAccount(values);
  // }

  saveNewAccount = (e) => {
    e.preventDefault();
    this.props.saveNewAccount();
  }

  render = () => {
    return (
      <Col md={3}>
      <Form className="account-card new" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveNewAccount(e) }>
        <AccountForm
          values={ this.props.values } 
          key={ this.props.idx } 
          idx={ this.props.idx } 
          update={ this.update }
          showCopyButton={ false }
          readOnly={ false }
        />
        <Button block bsStyle="primary" type="submit" ref={ (button) => this.button = button }>Save</Button>
      </Form>
      </Col>
    )
  }
}

export default NewAccount;