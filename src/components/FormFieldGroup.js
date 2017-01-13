import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Col } from 'react-bootstrap';
import FormFields from './FormFields';

class FormFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyState: null,
      copyText: 'Copy'
    }
  }

  select = (target) => {
    target.select();
  }

  copy = (input) => {
    this.select(input);
    const value = input.value;
    try {
      document.execCommand('copy');
      this.copySuccess(value);
    } catch (e) {
      this.copyError(e);
      window.alert('Error trying to copy to clipboard');
    }
  }

  copySuccess = (value) => {
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
    console.log(FormFields);
    return (
      <Col sm={12}>
      {
        FormFields.map((field) => {
          const name = field.id
          return (
          <FormGroup validationState={ this.state.copyState } key={ name }>
            <InputGroup bsSize="small">
              <FormControl
                name={ name }
                type="text"
                label={ field.label }
                placeholder={ field.placeholder }
                inputRef={ (ref) => this[name] = ref } 
                value={ this.props.values[name] } 
                onClick={ (e) => this.select(e.target) }
                onChange={ (e) => this.update(e) }
                readOnly={ this.props.values.readOnly }
                { ...this.props.attrs }
              />
              <InputGroup.Addon onClick={ (e) => this.copy(this.account) } ref={ (button) => this.copyButton = button }>{ this.state.copyText }</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          )
        })
      }
      </Col>
    )
  }
}

export default FormFieldGroup;
