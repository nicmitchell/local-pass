import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      details: this.props.details,
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
    this.setState({
      buttonText: 'Edit',
      readOnly: !this.state.readOnly
    });
  }

  render() {
    return (
      <Form horizontal>
        { 
          Object
            .keys(this.props.fields)
            .map((attr) => {
              let attrs = this.props.fields[attr];
              let key = attrs.id;
              let value = this.props.details[key];
              attrs.readOnly = this.state.readOnly;

              return <FormFieldGroup attrs={ attrs } value={ value } key={ key } controlId={ this.props.details.id }/>
            })
        }
        <Button block bsStyle="primary" type="submit" onClick={ (e) => this.toggleButton(e) } ref={ (button) => this.button = button }>{ this.state.buttonText }</Button>
      </Form>
    )
  }
}

export default AccountForm;
