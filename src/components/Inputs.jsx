import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
  render() {
    return (
      <div className={"inputs " + this.props.className}>
        <h3>Inputs</h3>
        <br></br>
        <Form>
          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Age
            </Col>
            <Col sm={6}>
              <NumberInput id="age" updateState={this.props.updateState} />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Net-worth
            </Col>
            <Col sm={6}>
              <NumberInput id="networth" updateState={this.props.updateState} />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Annual cost of lifestyle
            </Col>
            <Col sm={6}>
              <NumberInput
                id="expenditure"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Annual net earnings
            </Col>
            <Col sm={6}>
              {" "}
              <NumberInput
                id="netEarnings"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Inheritance to leave behind
            </Col>
            <Col sm={6}>
              {" "}
              <NumberInput
                id="inheritanceToLeaveBehind"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Margin of safety
            </Col>
            <Col sm={6}>
              {" "}
              <NumberInput
                id="marginOfSafety"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Inputs;
