import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';
import FormFields from './FormFields';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = [];
    this.state = { 
      values: this.props.values,
      key: this.props.idx,
      readOnly: true,
      buttonText: 'Edit'
    }
  }

  render = () => {
    return (
      <Col sm={12}>
        {
          FormFields.map((field) => {
            return (
              <FormFieldGroup 
                key={ field.id }
                field={ field }
                values={ this.props.values }
                updateInput={ this.props.updateInput }
              />)
          })
        }
      </Col>
    )
  }
}

export default AccountForm;