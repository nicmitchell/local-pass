import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';

class Account extends Component {

  render() {
    return (
      <div className="account">
        <FormGroup bsSize="small" controlId={ this.props.details.id }>
          <ControlLabel></ControlLabel>
          <form>
            { 
              Object
                .keys(this.props.fields)
                .map((attr) => {
                  let key = this.props.fields[attr].id;
                  return <FormFieldGroup key={ key } attrs={ this.props.fields[attr] } value={ this.props.details[key] } />
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
