import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

class Inputs extends Component {
  render() {
    return (
      <div>
        <h4>The financial freedom calculator</h4>
        <Form>
          <Row controlid="age" className="paddingTopAndBottom">
            <Col column sm={3}>
              Age
            </Col>
            <Col sm={9}>
              <NumberInput
                id="age"
                placeholder="Age (years)"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row controlid="networth" className="paddingTopAndBottom">
            <Col column sm={3}>
              Networth
            </Col>
            <Col sm={9}>
              <NumberInput
                id="networth"
                placeholder="Networth"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row controlid="expenditure" className="paddingTopAndBottom">
            <Col column sm={3}>
              Yearly expenditure
            </Col>
            <Col sm={9}>
              <NumberInput
                id="expenditure"
                placeholder="Expenditure"
                updateState={this.props.updateState}
              />
            </Col>
          </Row>

          <Row controlid="netEarnings" className="paddingTopAndBottom">
            <Col column sm={3}>
              Yearly earnings after tax
            </Col>
            <Col sm={9}>
              <NumberInput
                id="netEarnings"
                placeholder="Net Earnings"
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
