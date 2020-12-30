import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";
import * as consts from "../Constants.js";

function Inputs(props) {
  const firstColumnWidth = 6;
  const secondColumnWidth = 6;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="inputs">
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
      <Form
        onSubmit={handleSubmit}
        style={{
          textAlign: "right",
        }}
      >
        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Age</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="age"
              updateInputs={props.updateInputs}
              min={0}
              max={88}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Net-worth</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput inputId="networth" updateInputs={props.updateInputs} />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Earnings per year (after tax)</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="netEarnings"
              updateInputs={props.updateInputs}
              min={0}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Lifestyle cost per year</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="expenditure"
              updateInputs={props.updateInputs}
              min={0}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Inheritance to leave behind</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="inheritanceToLeaveBehind"
              updateInputs={props.updateInputs}
              min={0}
            />
          </Col>
        </Row>
      </Form>

      <br />
      <h3>Assumptions</h3>
      <br />
      <Form
        onSubmit={handleSubmit}
        style={{
          textAlign: "right",
        }}
      >
        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>
            Investment return above inflation (% pa)
          </Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="returnAboveInflationAssumption"
              updateInputs={props.updateInputs}
              min={0}
              max={8}
              precision={1}
              step={0.1}
              initialValue={consts.initialReturnAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>
            Salary growth per year above inflation (% pa)
          </Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="salaryGrowthAssumption"
              updateInputs={props.updateInputs}
              min={0}
              max={10}
              precision={1}
              step={0.1}
              initialValue={consts.initialSalaryGrowthAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Years until salary growth stops</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="salaryGrowthYearsAssumption"
              updateInputs={props.updateInputs}
              min={0}
              max={30}
              initialValue={consts.initialSalaryGrowthYearsAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>State pension age</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="statePensionAgeAssumption"
              updateInputs={props.updateInputs}
              min={55}
              max={75}
              initialValue={consts.initialStatePensionAgeAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>State pension amount per year</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput
              inputId="statePensionAmountAssumption"
              updateInputs={props.updateInputs}
              min={0}
              initialValue={consts.initialstatePensionAmountAssumption}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>You live in a developed country</Col>
          <Col sm={secondColumnWidth} />
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Everything is linked to inflation</Col>
          <Col sm={secondColumnWidth} />
        </Row>
      </Form>
    </div>
  );
}

export default Inputs;
