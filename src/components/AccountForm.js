import React, { Component } from 'react';
import Inputs from './Inputs';
import FormFields from '../helpers/FormFields';

class AccountForm extends Component {
  render = () => {
    return (
      <div>
        {
          FormFields.map((field) => {
            return (
              <Inputs 
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