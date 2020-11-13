import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function OneOffPurchase(props) {
  return (
    <Card
      className="border-3 marginTopAndBottomLarge"
      style={{ minWidth: "300px" }}
      border="blue"
    >
      <Card.Body>
        <Card.Text>
          <h4 className="bold oneOffPurchaseColor">One-off purchase</h4>The
          effect on your financial freedom of a one-off purchase of
          <NumberInput id="oneOffPurchase" updateState={props.updateState} />
          is to increase your working lifetime by
          <div>{"\n"}</div>
          <text className="bold">{props.results.yearsMonthsDays3[0]}</text>{" "}
          years&#160;&#160;
          <text className="bold">{props.results.yearsMonthsDays3[1]}</text>{" "}
          months&#160;&#160;
          <text className="bold">{props.results.yearsMonthsDays3[2]}</text> days
          {/* <br />
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
          </div> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OneOffPurchase;
