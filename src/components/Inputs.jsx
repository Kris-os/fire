import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";
import "../custom.scss";

function Inputs(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={"inputs " + props.className}>
      <h3 className="marginTopAndBottomLarge">
        How can I reach financial freedom?
      </h3>
      <div style={{ textAlign: "left" }}>
        Step 1 - Choose the lifestyle you want to live. Understand there's a
        trade-off between the cost of your lifestyle and how many years you will
        work. Use the lifestyle tool to help make this choice.
        <br />
        Step 2 - Invest. <br /> Step 3 - Track progress & update as life changes
        <br />
        <br />
      </div>

      <h3 className="marginTopAndBottomLarge">
        Your current situation (this is your{" "}
        <text className="bold baseCaseColor">base case</text>)
      </h3>
      <br></br>
      <Form>
        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Age</Col>
          <Col sm={6}>
            <NumberInput
              id="age"
              updateState={props.updateState}
              min={0}
              max={89}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Net-worth</Col>
          <Col sm={6}>
            <NumberInput id="networth" updateState={props.updateState} />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Annual net earnings</Col>
          <Col sm={6}>
            <NumberInput
              id="netEarnings"
              updateState={props.updateState}
              min={0}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Annual cost of lifestyle</Col>
          <Col sm={6}>
            <NumberInput
              id="expenditure"
              updateState={props.updateState}
              min={0}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Inheritance to leave behind</Col>
          <Col sm={6}>
            <NumberInput
              id="inheritanceToLeaveBehind"
              updateState={props.updateState}
              min={0}
            />
          </Col>
        </Row>
      </Form>

      <br></br>
      <h3>Assumptions</h3>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Investment return above inflation (% pa)</Col>
          <Col sm={6}>
            <NumberInput
              id="returnAboveInflationAssumption"
              updateState={props.updateState}
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

export default Inputs;
