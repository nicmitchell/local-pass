import React, { Component } from 'react';
import { ControlLabel, FormControl, InputGroup, Col } from 'react-bootstrap';

class FormFieldGroup extends Component {
  select() {
    this.input.select();
  }

  copy(value){
    this.select();
    try {
      document.execCommand('copy');
      console.log('Copied to clipboard:', value)
    } catch (e) {
      window.alert('Error trying to copy to clipboard');
    }
  }

  render() {
    return (
      <div>
        <Col componentClass={ ControlLabel } sm={2}>
          <ControlLabel>{ this.props.attrs.label }</ControlLabel>
        </Col>
        <Col sm={10}>
          <InputGroup>
            <FormControl 
              inputRef={ ref => {this.input = ref }} 
              defaultValue={ this.props.value } 
              onClick={ () => this.select() }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ ()=> this.copy(this.props.value) }>Copy</InputGroup.Addon>
          </InputGroup>
        </Col>
      </div>
    )
  }
}

export default FormFieldGroup;
