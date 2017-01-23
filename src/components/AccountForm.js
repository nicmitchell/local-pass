import React, { Component } from 'react';
import InputGroup from './InputGroup';
import FormFields from '../data/FormFields';
import store from '../store';

class AccountForm extends Component {
  render = () => {
    return (
      <div>
        {
          FormFields.map((field) => {
            return (
              <InputGroup 
                key={ field.id }
                field={ field }
                values={ this.props.values }
                update={ this.props.update }
                showCopyButton={ this.props.showCopyButton }
                readOnly={ this.props.readOnly }
              />
            )
          })
        }
      </div>
    )
  }
}

export default AccountForm;