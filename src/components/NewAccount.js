import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import DataAdapter from '../DataAdapter';
import FormFields from './FormFields';

class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.data = new DataAdapter();
    this.fields = FormFields;
    this.inputRefs = {};
    this.buttonText = 'Save';
    // this.state = { 
    //   values: {
    //     account: '',
    //     email: '',
    //     username: '',
    //     password: ''
    //   },
    //   key: props.idx,
    //   buttonText: 'Save'
    // };
  }

  getFieldValues = () => {
    let values = {};
    let refs = this.inputRefs;
    Object
      .keys(this.inputRefs)
      .forEach((input) => {
        console.log(input);
        values[input] = refs[input].value;
      });
      console.log(values);
    return values;
  }

  saveFields = (e) => {
    console.log('Save Fields');
    e.preventDefault();
    let values = this.getFieldValues();
    let key = this.state.key;
    this.data.set(key, values);
    this.props.insertNewAccount(values);
  }

  update = (e) => {
    console.log(e);
    let state = {};
    let field = e.target.id;
    state[field] = e.target.value;
    this.setState(state);
  }

  render = () => {
    return (
      <Form horizontal className="account-card">
        { 
          this.fields.map((attrs) => {
            // console.log('fields', this.fields);
            let key = attrs.id;
            let value = '';//this.state.values[key];

            return <Col sm={12} key={ key }>
              <FormGroup>
                <InputGroup bsSize="small">
                  <FormControl 
                    ref={ (input) => this.inputRefs[key] = input } 
                    inputRef={ (ref) => this.input = ref } 
                    defaultValue={ value } 
                    onBlur={ (thing) => this.update(thing) }
                    { ...attrs }
                  />
                  <InputGroup.Addon></InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Col>
          })
        }
        <Button block bsStyle="primary" type="submit" onClick={ (e) => this.saveFields(e) } ref={ (button) => this.button = button }>{ this.buttonText }</Button>
      </Form>
    )
  }
}

export default NewAccount;