import React, { Component } from 'react';
import { Col, Form, Button, Glyphicon } from 'react-bootstrap';
import AccountForm from './AccountForm';
import DeleteModal from './DeleteModal';
import './SavedAccount.css';

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
    const buttonClass = this.state.readOnly ? 'inactive' : 'active';
    return (
      <Col lg={3} md={4} sm={6} className="account-card-wrapper">
        <Form className={`account-card ${ buttonClass }`} ref={ (form) => this.form = form } onSubmit={ (e) => this.toggleButton(e) } >
          <Button bsSize="small" className={ `delete ${ buttonClass }` } onClick={ (e) => this.openModal() }><Glyphicon glyph="remove" /> Delete</Button>
          <AccountForm
            values={ this.props.values } 
            key={ this.props.idx } 
            idx={ this.props.idx } 
            update={ this.updateSavedAccount }
            readOnly={ this.state.readOnly }
            buttonProps={ this.buttonProps }
          />
          <Button block className={`edit ${ buttonClass }` } type="submit" bsSize="large" name={ this.props.idx } ref={ (button) => this.button = button }>{ this.state.buttonText }</Button>
        </Form>
        <DeleteModal 
          show={ this.state.showModal } 
          onHide={ this.closeModal } 
          account={ this.props.values.account } 
          idx={ this.props.idx }
          removeAccount={ this.removeAccount } 
        />
      </Col>
    )
  }
}

export default SavedAccount;
