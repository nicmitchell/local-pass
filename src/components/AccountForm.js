import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';
import FormFields from './FormFields';

class AccountForm extends Component {

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
                handleInputChange={ this.props.handleInputChange }
                showCopyButton={ this.props.showCopyButton }
              />
            )
          })
        }
      </Col>
    )
  }
}

export default AccountForm;