import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import AccountForm from './AccountForm';

class NewAccountModal extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.props.onHide();
    }
  }

  render() {
    return(
      <Modal show={ this.props.show } bsSize="small" onKeyUp={ (e) => this.handleKeyPress(e) }>
        <Form className="new-account" ref={ (form) => this.form = form } onSubmit={ (e) => this.saveNewAccount(e) }>
          <Modal.Header ><h4>New Account</h4></Modal.Header>
          <Modal.Body>
            <AccountForm
              values={ this.props.values } 
              key={ this.props.idx } 
              idx={ this.props.idx } 
              update={ this.update }
              readOnly={ false }
            />
            <Button block bsStyle="primary" type="submit" ref={ (button) => this.button = button }>Save</Button>
            <Button bsStyle="link" className="cancel" onClick={ this.props.onHide }>Cancel</Button>
          </Modal.Body>
        </Form>
      </Modal>
    )
  }
}

export default NewAccountModal;