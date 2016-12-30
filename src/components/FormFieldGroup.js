import React, { Component } from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

class FormFieldGroup extends Component {
  render() {
    return (
      <div>
        <ControlLabel>{ this.props.attrs.label }</ControlLabel>
        <FormControl { ...this.props.attrs } inputRef={ ref => {this.input = ref }} />
      </div>
    )
  }
}

export default FormFieldGroup;
    // return (
    //   <FormGroup controlId={ this.props.details.id }>
    //     <ControlLabel>{ this.props.details.label }</ControlLabel>
    //     <FormControl { ...this.props.details.fields } />
    //   </FormGroup>
    // )

// <ControlLabel>Working example with validation</ControlLabel>
// <FormControl
//   type="text"
//   value={this.state.value}
//   placeholder="Enter text"
//   onChange={this.handleChange}
// />