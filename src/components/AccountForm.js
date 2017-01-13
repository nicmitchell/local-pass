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

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleClick(e);
  }

  getFieldValues = () => {
    return this.inputRefs.map((input, idx) => {
      console.log(this.inputRefs);
      let data = {};
      data[input.id] = input.state.value;
      return data;
    });
  }

  render = () => {
    return (
      <Col sm={12}>
        {
          FormFields.map((field) => {
            return (
              <FormFieldGroup key={ field.id }
                field={ field }
                values={ this.props.values }
                actions={ this.props.actions }
                updateInput={ this.props.updateInput }
              />)
          })
        }
      </Col>
    )
  }
}

export default AccountForm;