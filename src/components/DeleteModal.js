import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class DeleteModal extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.props.onHide();
    }
  }

  render() {
    return (
      <Modal show={ this.props.show } bsSize="small" onKeyUp={ (e) => this.handleKeyPress(e) }>
        <Modal.Header><h4>Are you sure?</h4></Modal.Header>
        <Modal.Body>You are about to delete the credentials for { this.props.account }. Are you sure you want to do this?</Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={ this.props.onHide }>Cancel</Button>
          <Button bsStyle="danger" onClick={ (e) => this.props.removeAccount(this.props.idx) }>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default DeleteModal;