import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';
import './NewAccount.css';

class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonText: 'Save',
      showModal: false
    };
  }

  update = (values) => {
    this.props.updateNewAccount(Object.assign(values, { key: 'newAccount' }));
  }

  saveNewAccount = (e) => {
    e.preventDefault();
    this.props.saveNewAccount();
    this.closeModal();
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  }

  render = () => {
    return (
      <div>
        <Modal show={ this.state.showModal } bsSize="small" onKeyUp={ (e) => this.handleKeyPress(e) }>
          <form className="new-account" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveNewAccount(e) }>
            <Modal.Header closeButton onClick={ this.closeModal }><h4>New Account</h4></Modal.Header>
            <AccountForm
              values={ this.props.accounts.newAccount } 
              key={ this.props.idx } 
              idx={ this.props.idx } 
              update={ this.update }
            />
            <Button block bsStyle="primary" type="submit" bsSize="large" ref={ (button) => this.button = button }>Save</Button>
            <Button bsStyle="link" className="cancel" bsSize="small" onClick={ this.closeModal }>Cancel</Button>
          </form>
        </Modal>
        <Button bsStyle="success" bsSize="large" className="new-account-button" onClick={ (e) => this.openModal() }></Button>
      </div>
    )
  }
}

export default NewAccount;