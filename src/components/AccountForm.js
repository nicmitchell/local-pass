import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';
import FormFields from './FormFields';


class Account extends Component {
  constructor(){
    super();
    console.log(Object.keys(FormFields));
  }
  render() {
    return (
      <div className="account">
        <FormGroup>
          <ControlLabel>Account Details</ControlLabel>
          <form>
            {
              Object
                .keys(FormFields)
                .map((key) => {
                  return <FormFieldGroup key={ key } fields={ FormFields[key] } />
                }) 
            }
            <Button type="submit">Save</Button>
          </form>
        </FormGroup>
      </div>
    )
  }
}

export default Account;


