import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
  state = {
    age: 0,
    networth: 0
  };

  updateState = (id, value) => {
    console.log("Event Handler Called", id);
    if (id === "age") {
      var ageTemp = value;
    } else {
      ageTemp = this.state.age;
    }

    if (id === "networth") {
      var networthTemp = value;
    } else {
      networthTemp = this.state.networth;
    }

    this.setState({
      age: ageTemp,
      networth: networthTemp
    });
  };

  render() {
    return (
      <div>
        <h2>Inputs</h2>
        <Form>
          <Form.Group as={Row} controlId="age">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={10}>
              <NumberInput
                id="age"
                placeholder="Age (years)"
                updateState={this.updateState}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="networth">
            <Form.Label column sm={2}>
              Networth
            </Form.Label>
            <Col sm={10}>
              <NumberInput
                id="networth"
                placeholder="Networth"
                updateState={this.updateState}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Inputs;
