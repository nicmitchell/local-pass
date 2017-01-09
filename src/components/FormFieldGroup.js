import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Col } from 'react-bootstrap';

class FormFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyText: 'Copy',
      copyState: null,
      value: props.value
    };
  }

  select() {
    this.input.select();
  }

  copy(value){
    this.select();
    try {
      document.execCommand('copy');
      this.copySuccess(value);
    } catch (e) {
      this.copyError(e);
      window.alert('Error trying to copy to clipboard');
    }
  }

  copySuccess(value) {
    console.log('Copied to clipboard:', value);
    this.setState({ 
      copyText: 'Copied',
      copyState: 'success'
    });
    this.resetCopyButton();
  }

  copyError(e) {
    console.log('Error copying to clipboard:', e);
    this.setState({ 
      copyText: 'Error',
      copyState: 'error'
    });
    this.resetCopyButton();
  }

  resetCopyButton() {
    window.setTimeout(() => {
      this.setState({
        copyText: 'Copy',
        copyState: null
      });
    }, 2000);
  }

  update() {
    this.setState({ value: this.input.value });
  }

  render() {
    return (
      <Col sm={12}>
        <FormGroup validationState={ this.state.copyState }>
          <InputGroup bsSize="small">
            <FormControl 
              inputRef={ (ref) => { this.input = ref }} 
              defaultValue={ this.state.value } 
              onClick={ () => this.select() }
              onChange={ () => this.update() }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ () => this.copy(this.props.value) }>{ this.state.copyText }</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Col>
    )
  }
}

export default FormFieldGroup;
