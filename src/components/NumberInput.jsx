import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import { Form } from "react-bootstrap";

class NumberInput extends Component {
  state = {
    value: this.props.initialValue,
  };

  onInputChange(event) {
    var num = event;
    if (num != null) num = num.toFixed(this.props.precision);
    if (num != null && num > this.props.max) num = this.props.max;
    if (num != null && num < this.props.min) num = this.props.min;
    this.setState({ value: num });
    this.props.updateState(this.props.id, num);
  }

  render() {
    return (
      <NumericInput
        className="form-control"
        id={this.props.id}
        min={this.props.min}
        max={this.props.max}
        onChange={this.onInputChange.bind(this)}
        precision={this.props.precision}
        value={this.state.value}
        step={this.props.step}
        style={false}
        snap
      />
    );
  }
}

export default NumberInput;
