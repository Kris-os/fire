import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function IncreasedInvestmentCard(props) {
  return (
    <Card
      className="border-3 marginTopAndBottomLarge"
      style={{ minWidth: "300px" }}
      border="green"
    >
      <Card.Body>
        <Card.Text>
          <h4 className="bold increasedInvestmentColor">
            Increased saving and investment
          </h4>
          Increasing investment by{" "}
          <NumberInput id="lowerSpend" updateState={props.updateState} /> a
          month cuts working lifetime by:
          <div>{"\n"}</div>
          <text className="bold">{props.results.yearsMonthsDays2[0]}</text>{" "}
          years&#160;&#160;
          <text className="bold">{props.results.yearsMonthsDays2[1]}</text>{" "}
          months&#160;&#160;
          <text className="bold">
            {props.results.yearsMonthsDays2[2]}
          </text> days <br />
          <br />
          Under this scenario, you spend{" "}
          <text className="bold">
            {props.results.lowerMonthlySpendPercentHleWorking}%
          </text>{" "}
          of your healthy life expectancy working, and{" "}
          <text className="bold">
            {props.results.lowerMonthlySpendPercentHleFree}%
          </text>{" "}
          financially free.
          <br />
          <br />
          <div className="italic">
            You will have <text className="bold">{props.improvement}%</text>{" "}
            more of your healthy life free instead of working.
          </div>
          {/* <Form.Check
                    className="paddingTopAndBottomSmall"
                    type="checkbox"
                    label="Add to chart"
                    style={{ fontStyle: "italic" }}
                  /> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default IncreasedInvestmentCard;
