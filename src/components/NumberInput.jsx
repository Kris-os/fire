import React, { Component } from "react";

import { Form } from "react-bootstrap";

class NumberInput extends Component {
  state = {
    value: 0,
  };

  onInputChange(event) {
    this.setState({ value: event.target.value });
    this.props.updateState(this.props.id, event.target.value);
  }

  render() {
    return (
      <Form.Control type="number" onChange={this.onInputChange.bind(this)} />
    );
  }
}

export default NumberInput;
