import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';
import DataAdapter from '../DataAdapter';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.data = new DataAdapter();
    this.fields = props.fields;
    this.inputRefs = {};
    this.state = { 
      values: props.values,
      key: props.idx,
      readOnly: true,
      buttonText: 'Edit'
    };
  }

  toggleButton(e) {
    e.preventDefault();

    if (this.state.readOnly) {
      this.editFields();
    } else {
      this.saveFields();
    }
  }

  editFields() {
    console.log('Edit Fields');
    this.setState({
      buttonText: 'Save',
      readOnly: !this.state.readOnly
    });
  }

  saveFields() {
    console.log('Save Fields');
    let values = this.getFieldValues();
    let key = this.state.key;
    this.setState({
      buttonText: 'Edit',
      readOnly: !this.state.readOnly,
      values: values
    });
    this.data.set(key, values);
  }

  getFieldValues() {
    let values = {};
    Object
      .keys(this.inputRefs)
      .forEach((input) => {
        values[input] = this.inputRefs[input].state.value;
      });
    return values;
  }

  render() {
    return (
      <Form horizontal className="account-card">
        { 
          this.props.fields.map((attrs) => {
            let key = attrs.id;
            let value = this.state.values[key];
            attrs.readOnly = this.state.readOnly;

            return <FormFieldGroup 
              attrs={ attrs } 
              value={ value } 
              key={ key } 
              controlId={ this.state.values.id } 
              ref={ (input) => this.inputRefs[key] = input } 
            />
          })
        }
        <Button block bsStyle="primary" type="submit" onClick={ (e) => this.toggleButton(e) } ref={ (button) => this.button = button }>{ this.state.buttonText }</Button>
      </Form>
    )
  }
}

export default AccountForm;
