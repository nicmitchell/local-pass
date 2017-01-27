import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import AccountForm from './AccountForm';
import DeleteModal from './DeleteModal';

class SavedAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      readOnly: true,
      buttonText: 'Edit',
      showModal: false
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

  updateSavedAccount = (values) => {
    this.props.updateSavedAccount(values);
  }

  removeAccount = (idx) => {
    this.props.removeAccount(idx);
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
        <Col md={3} className="account-card-wrapper">
          <Form className="account-card" ref={ (form) => this.form = form } onSubmit={ (e) => this.toggleButton(e) } >
            <AccountForm
              values={ this.props.values } 
              key={ this.props.idx } 
              idx={ this.props.idx } 
              update={ this.updateSavedAccount }
              readOnly={ this.state.readOnly }
              buttonProps={ this.buttonProps }
            />
            <Button block bsStyle="primary" type="submit" name={ this.props.idx } ref={ (button) => this.button = button }>{ this.state.buttonText }</Button>
          </Form>
          <Button 
            bsSize="xsmall" 
            bsStyle="danger" 
            className="delete" 
            onClick={ (e) => this.openModal() }
          >&times; Delete</Button>
        </Col>
        <DeleteModal 
          show={ this.state.showModal } 
          onHide={ this.closeModal } 
          account={ this.props.values.account } 
          idx={ this.props.idx }
          removeAccount={ this.removeAccount } 
        />
      </div>
    )
  }
}

export default SavedAccount;
