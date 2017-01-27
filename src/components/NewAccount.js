import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';
// import { saveNewAccount } from '../actions/actionCreators';

class NewAccount extends Component {
  update = (values) => {
    this.props.updateNewAccount(Object.assign(values, { key: 'newAccount' }));
  }

  saveNewAccount = (e) => {
    e.preventDefault();
    this.props.saveNewAccount();
    this.form.reset();
  }

  render = () => {
    return (
      <Col md={3}>
      <form className="account-card new" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveNewAccount(e) }>
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
      </Col>
    )
  }
}

export default NewAccount;