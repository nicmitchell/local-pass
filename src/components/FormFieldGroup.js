import React, { Component } from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

class FormFieldGroup extends Component {
  selectAll() {
    this.input.select();
  }
  render() {
    return (
      <div>
        <ControlLabel>{ this.props.attrs.label }</ControlLabel>
        <FormControl 
          inputRef={ ref => {this.input = ref }} 
          defaultValue={ this.props.value } 
          onClick={ () => this.selectAll() }
          { ...this.props.attrs } 
        />
      </div>
    )
  }
}

export default FormFieldGroup;
