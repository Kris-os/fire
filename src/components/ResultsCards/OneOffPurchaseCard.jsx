import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";
import YearsMonthsDays from "../YearsMonthsDays";

function OneOffPurchase({ oneOffPurchaseCase, updateInputs }) {
  return (
    <Card className="border-3 marginTopAndBottomLarge" border="blue">
      <Card.Body>
        <Card.Text>
          <h4 className="bold oneOffPurchaseColor">
            Opportunity cost of spending
          </h4>
          The opportunity cost of spending money is your time. Saving and
          investing instead of spending means more of your lifetime financially
          free.
          <br />
          <br />
          A purchase of
          <NumberInput inputId="oneOffPurchase" updateInputs={updateInputs} />
          means less freedom of
          <br />
          <YearsMonthsDays
            yearsMonthsDays={oneOffPurchaseCase.yearsMonthsDays}
          />
          <br />
          <text className="italic">
            Whilst this calculation is a useful to understand the opportunity
            cost of spending money as measured in your time, it is rare that our
            purchases are truly one-off. Consider a phone or a laptop, that
            needs replacing every few years. Most purchases are better modelled
            as a change in lifestyle or a habit.{" "}
          </text>
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
