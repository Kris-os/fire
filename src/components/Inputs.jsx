import React from "react";
import { Col, Row } from "react-bootstrap";
import NumberInput from "./NumberInput";

function Inputs() {
  const firstColumnWidth = 6;
  const secondColumnWidth = 6;
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="inputs">
      <h3 className="marginTopAndBottomLarge">
        Your <text className="bold baseCaseColor">current situation</text>
      </h3>
      <br />
      <div
        // onSubmit={handleSubmit}
        style={{
          textAlign: "right",
        }}
      >
        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Age</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="age" />
          </Col>
        </Row>
        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Net-worth</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="networth" />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Earnings per year (after tax)</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="netEarnings" />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Lifestyle cost per year</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="expenditure" />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Inheritance to leave behind</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="inheritanceToLeaveBehind" />
          </Col>
        </Row>
      </div>

      <br />
      <h3>Assumptions</h3>
      <br />
      <div
        // onSubmit={handleSubmit}
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
              fieldName="returnAboveInflationAssumption"
              decimals={1}
            />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>
            Salary growth per year above inflation (% pa)
          </Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="salaryGrowthAssumption" decimals={1} />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>Years until salary growth stops</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="salaryGrowthYearsAssumption" />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>State pension age</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="statePensionAgeAssumption" />
          </Col>
        </Row>

        <Row className="paddingTopAndBottomSmall">
          <Col sm={firstColumnWidth}>State pension amount per year</Col>
          <Col sm={secondColumnWidth}>
            <NumberInput fieldName="statePensionAmountAssumption" />
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
      </div>
    </div>
  );
}

export default Inputs;
