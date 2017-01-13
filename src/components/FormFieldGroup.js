import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class FormFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyState: null,
      copyText: 'Copy'
    }
  }

  // select = (target) => {
  //   target.select();
  // }

  // copy = (input) => {
  //   // this.select(input);
  //   const value = input.value;
  //   try {
  //     document.execCommand('copy');
  //     this.copySuccess(value);
  //   } catch (e) {
  //     this.copyError(e);
  //     window.alert('Error trying to copy to clipboard');
  //   }
  // }
  // 
  select() {
    this.input.select();
  }

  copy(e, input){
    input.select();
    try {
      document.execCommand('copy');
      this.copySuccess(e.target, input.value);
    } catch (err) {
      this.copyError(err);
      window.alert('Error trying to copy to clipboard');
    }
  }

  copySuccess = (copyButton, value) => {
    console.log('Copied to clipboard:', value);
    this.setState({
      copyText: 'Copied',
      copyState: 'success'
    });
    this.resetCopyButton();
  }

  copyError = (e) => {
    console.log('Error copying to clipboard:', e);
    this.setState({ 
      copyText: 'Error',
      copyState: 'error'
    });
    this.resetCopyButton();
  }

  resetCopyButton = () => {
    window.setTimeout(() => {
      this.setState({
        copyText: 'Copy',
        copyState: null
      });
    }, 2000);
  }

  update = (e) => {
    console.log(e);
    const value = e.target.value;
    const input = e.target.id;
    const key = this.props.values.key;
    this.props.updateInput(key, { [input]: value });
  }

  render = () => {
    const name = this.props.field.id;
    return (
      <FormGroup validationState={ this.state.copyState } key={ `${this.props.values.key}-${name}` }>
        <InputGroup bsSize="small">
          <FormControl
            name={ this.props.field.name }
            type="text"
            label={ this.props.field.label }
            placeholder={ this.props.field.placeholder }
            inputRef={ (ref) => this[name] = ref } 
            value={ this.props.values[name] } 
            onClick={ (e) => this.select(e.target) }
            onChange={ (e) => this.update(e) }
            readOnly={ this.props.values.readOnly }
            { ...this.props.attrs }
          />
          <InputGroup.Addon onClick={ (e) => this.copy(e, this[name]) } ref={ (button) => this.copyButton = button }>{ this.state.copyText }</InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default FormFieldGroup;
