import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";
import * as consts from "../Constants.js";
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
        Your <text className="bold baseCaseColor">current situation</text>
      </h3>
      <br />
      <Form onSubmit={handleSubmit}>
        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Age</Col>
          <Col sm={6}>
            <NumberInput
              id="age"
              updateState={props.updateState}
              min={0}
              max={88}
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

      <br />
      <h3>Assumptions</h3>
      <br />
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
              initialValue={consts.initialReturnAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Salary growth per year above inflation (% pa)</Col>
          <Col sm={6}>
            <NumberInput
              id="salaryGrowthAssumption"
              updateState={props.updateState}
              min={0}
              max={10}
              precision={1}
              step={0.1}
              initialValue={consts.initialSalaryGrowthAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>Years until salary growth stops</Col>
          <Col sm={6}>
            <NumberInput
              id="salaryGrowthYearsAssumption"
              updateState={props.updateState}
              min={0}
              max={30}
              initialValue={consts.initialSalaryGrowthYearsAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>State pension age</Col>
          <Col sm={6}>
            <NumberInput
              id="statePensionAgeAssumption"
              updateState={props.updateState}
              min={55}
              max={75}
              initialValue={consts.initialStatePensionAgeAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={6}>State pension amount per year</Col>
          <Col sm={6}>
            <NumberInput
              id="statePensionAmountAssumption"
              updateState={props.updateState}
              min={0}
              initialValue={consts.initialstatePensionAmountAssumption}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Inputs;
