import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

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
              <NumberInput
                id="age"
                updateState={this.props.updateState}
                min={0}
                max={89}
              />
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
              Annual net earnings
            </Col>
            <Col sm={6}>
              <NumberInput
                id="netEarnings"
                updateState={this.props.updateState}
                min={0}
              />
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
                min={0}
              />
            </Col>
          </Row>

          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Inheritance to leave behind
            </Col>
            <Col sm={6}>
              <NumberInput
                id="inheritanceToLeaveBehind"
                updateState={this.props.updateState}
                min={0}
              />
            </Col>
          </Row>
        </Form>

        <br></br>
        <h3>Assumptions</h3>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <Row className="paddingTopAndBottomSmall">
            <Col column sm={6}>
              Investment return above inflation (% pa)
            </Col>
            <Col sm={6}>
              <NumberInput
                id="returnAboveInflationAssumption"
                updateState={this.props.updateState}
                min={0}
                max={8}
                precision={1}
                step={0.1}
                initialValue={4}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Inputs;
