import React, { Component } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';
import AccountButton from './AccountButton';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      details:this.props.details,
      readOnly: true
    };
  }

  toggleActiveState(readOnly) {
    let state = this.state;
    state.readOnly = !state.readOnly;
    this.setState({ state });
  }

  editFields(e) {
    e.preventDefault();
    this.toggleActiveState();
  }

  saveFields(e) {
    e.preventDefault();
    this.toggleActiveState();
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

                return (
                  <FormGroup key={ key } bsSize="small" controlId={ this.props.details.id }>
                    <FormFieldGroup attrs={ attrs } value={ value }/>
                  </FormGroup>
                )
              })
          }
          <AccountButton saveFields={ this.saveFields.bind(this) } editFields={ this.editFields.bind(this) } readOnly={ this.state.readOnly }/>
          <hr />
      </Form>
    )
  }
}

export default AccountForm;
