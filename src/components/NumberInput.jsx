import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import { Form } from "react-bootstrap";

class NumberInput extends Component {
  state = {
    value: 0,
  };

  onInputChange(event) {
    this.props.updateState(this.props.id, event.target.value);
  }

  render() {
    return (
      <Form.Control type="number" onChange={this.onInputChange.bind(this)} />
    );
  }
}

export default NumberInput;
