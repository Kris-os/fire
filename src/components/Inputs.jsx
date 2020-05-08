import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
  render() {
    return (
      <div className={"inputs " + this.props.className}>
        <h4>Inputs</h4>
        <Form>
          <Row controlid="age" className="paddingTopAndBottomSmall">
            <Col column sm={4}>
              Age
            </Col>
            <Col sm={8}>
              <NumberInput id="age" updateState={this.props.updateState} />
            </Col>
          </Row>

          <Row controlid="networth" className="paddingTopAndBottomSmall">
            <Col column sm={4}>
              Networth
            </Col>
            <Col sm={8}>
              <NumberInput id="networth" updateState={this.props.updateState} />
            </Col>
          </Row>

          <Row controlid="expenditure" className="paddingTopAndBottomSmall">
            <Col column sm={4}>
              Yearly expenditure
            </Col>
            <Col sm={8}>
              <NumberInput
                id="expenditure"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row controlid="netEarnings" className="paddingTopAndBottomSmall">
            <Col column sm={4}>
              Yearly earnings after tax
            </Col>
            <Col sm={8}>
              {" "}
              <NumberInput
                id="netEarnings"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row
            controlid="marginForErrorPlusDesiredInheritence"
            className="paddingTopAndBottomSmall"
          >
            <Col column sm={4}>
              Margin of safety
            </Col>
            <Col sm={8}>
              {" "}
              <NumberInput
                id="marginForErrorPlusDesiredInheritence"
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
