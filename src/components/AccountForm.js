import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';

class Account extends Component {

  render() {
    return (
      <div className="account">
        <FormGroup bsSize="small">
          <ControlLabel>{ this.props.details.id }</ControlLabel>
          <form>
            { 
              Object
                .keys(this.props.fields)
                .map((attr) => {
                  return <FormFieldGroup key={ this.props.fields[attr].id } attrs={ this.props.fields[attr] } details={ this.props.details } />
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
