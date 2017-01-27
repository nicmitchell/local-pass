import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewAccountModal from './NewAccountModal';

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
    this.form.reset();
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render = () => {
    return (
      <div>
        <NewAccountModal 
          show={ this.state.showModal } 
          onHide={ this.closeModal } 
          // saveNewAccount={ this.props.saveNewAccount } 
          updateNewAccount={ this.props.updateNewAccount } 
          addNewAccount={ this.props.addNewAccount } 
          values={ this.props.accounts.newAccount }
        />
        <Button bsStyle="success" className="new-account-button" onClick={ (e) => this.openModal() }>&#43;</Button>
      </div>
    )
  }
}

export default NewAccount;