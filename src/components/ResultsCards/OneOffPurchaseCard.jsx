import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function OneOffPurchase({ oneOffPurchaseCase, updateInputs }) {
  return (
    <Card className="border-3 marginTopAndBottomLarge" border="blue">
      <Card.Body>
        <Card.Text>
          <h4 className="bold oneOffPurchaseColor">
            Opportunity cost of spending
          </h4>
          The opportunity cost of spending money is the amount of time you have
          financially free. A purchase of
          <NumberInput inputId="oneOffPurchase" updateInputs={updateInputs} />
          means less financial freedom of
          <div>{"\n"}</div>
          <text className="bold">
            {oneOffPurchaseCase.yearsMonthsDays.years ?? null}
          </text>{" "}
          years&#160;&#160;
          <text className="bold">
            {oneOffPurchaseCase.yearsMonthsDays.months ?? null}
          </text>{" "}
          months&#160;&#160;
          <text className="bold">
            {oneOffPurchaseCase.yearsMonthsDays.days ?? null}
          </text>{" "}
          days
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
