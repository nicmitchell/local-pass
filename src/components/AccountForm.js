import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import FormFieldGroup from './FormFieldGroup';

class Account extends Component {
  toggleButton(e) {
    e.preventDefault();
    console.log('button', this.button);
    this.button.classList.toggle('active');
  }

  render() {
    return (
      <Form horizontal>
          { 
            Object
              .keys(this.props.fields)
              .map((attr) => {
                let key = this.props.fields[attr].id;
                return <FormGroup key={ key } bsSize="small" controlId={ this.props.details.id }>
                  <FormFieldGroup 
                    attrs={ this.props.fields[attr] } 
                    value={ this.props.details[key] } 
                  />
                </FormGroup>
              })
          }
          <Button block type="submit" ref={ (button) => this.button = button } onClick={ (e)=> this.toggleButton(e) }>Save</Button>
          <hr />
      </Form>
    )
  }
}

export default Account;
