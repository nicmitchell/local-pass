import React, { Component } from 'react';
import FormFieldGroup from './FormFieldGroup';

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
        <FormFieldGroup 
          values={ this.props.values }
          actions={ this.props.actions }
          updateInput={ this.props.updateInput }
        />
    )
  }
}

export default AccountForm;