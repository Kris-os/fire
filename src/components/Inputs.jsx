import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
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
                updateState={this.props.updateState}
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
                updateState={this.props.updateState}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="expenditure">
            <Form.Label column sm={2}>
              Expenditure
            </Form.Label>
            <Col sm={10}>
              <NumberInput
                id="expenditure"
                placeholder="Expenditure"
                updateState={this.props.updateState}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="netEarnings">
            <Form.Label column sm={2}>
              Net Earnings
            </Form.Label>
            <Col sm={10}>
              <NumberInput
                id="netEarnings"
                placeholder="Net Earnings"
                updateState={this.props.updateState}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Inputs;
