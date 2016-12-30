import React, { Component } from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

class FormFieldGroup extends Component {
  render() {
    return (
      <div>
        <ControlLabel>{ this.props.attrs.label }</ControlLabel>
        <FormControl { ...this.props.attrs } inputRef={ ref => {this.input = ref }} value={ this.props.value } />
      </div>
    )
  }
}

export default FormFieldGroup;
