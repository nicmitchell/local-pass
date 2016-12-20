import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class FormFieldGroup extends Component {

  render() {
    return (
      <FormGroup controlId={ this.props.id }>
        <ControlLabel>{ this.props.label }</ControlLabel>
        <FormControl { ...this.props.fields } />
      </FormGroup>
    )
  }
}

export default FormFieldGroup