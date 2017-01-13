import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Col, Glyphicon } from 'react-bootstrap';

class FormFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.copyState = null;
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
    return (
      <Col sm={12}>
        <FormGroup validationState={ this.copyState }>
          <InputGroup bsSize="small">
            <FormControl
              id="account"
              type="text"
              label="Account"
              placeholder="Login URL"
              inputRef={ (ref) => this.account = ref } 
              value={ this.props.values.account } 
              onClick={ (e) => this.select(e.target) }
              onChange={ (e) => this.update(e) }
              readOnly={ this.props.values.readOnly }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ (e) => this.copy(this.account) }>{ this.props.values.copyText }</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup validationState={ this.copyState }>
          <InputGroup bsSize="small">
            <FormControl
              id="email"
              type="text"
              label="Email"
              placeholder="Email"
              inputRef={ (ref) => this.email = ref } 
              value={ this.props.values.email } 
              onClick={ (e) => this.select(e.target) }
              onChange={ (e) => this.update(e) }
              readOnly={ this.props.values.readOnly }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ (e) => this.copy(this.email) }>{ this.props.values.copyText }</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup validationState={ this.copyState }>
          <InputGroup bsSize="small">
            <FormControl
              id="username"
              type="text"
              label="Username"
              placeholder="Username"
              inputRef={ (ref) => this.username = ref } 
              value={ this.props.values.username } 
              onClick={ (e) => this.select(e.target) }
              onChange={ this.update }
              readOnly={ this.props.values.readOnly }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ (e) => this.copy(this.username) }>{ this.props.values.copyText }</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <FormGroup validationState={ this.copyState }>
          <InputGroup bsSize="small">
            <FormControl
              id="password"
              type="text"
              label="Password"
              placeholder="Password" 
              inputRef={ (ref) => this.password = ref } 
              value={ this.props.values.password } 
              onClick={ (e) => this.select(e.target) }
              onChange={ this.update }
              readOnly={ this.props.values.readOnly }
              { ...this.props.attrs }
            />
            <InputGroup.Addon onClick={ () => this.copy(this.password) }>{ this.props.values.copyText }</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Col>
    )
  }
}

export default FormFieldGroup;
