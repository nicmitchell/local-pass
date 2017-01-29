import React, { Component } from 'react';
import Inputs from './Inputs';
import FormFields from '../helpers/FormFields';
import './AccountForm.css';

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