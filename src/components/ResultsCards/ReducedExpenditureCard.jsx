import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";
import { capitaliseFirstLetter } from "../../Util.js";
import YearsMonthsDays from "../YearsMonthsDays";

function IncreasedInvestmentCard({
  lowerSpendCase,
  frequency,
  improvement,
  themeColor,
}) {
  return (
    <Card className="border-3 marginTopAndBottomLarge" border={themeColor}>
      <Card.Body>
        <Card.Text>
          <h4 className={`bold ${themeColor}`}>
            Effect of a {frequency} habit?
          </h4>
          Reducing your lifestyle by
          <NumberInput
            fieldName={`lowerSpend${capitaliseFirstLetter(frequency)}`}
          />
          {frequency} increases freedom by:
          <br />
          <YearsMonthsDays yearsMonthsDays={lowerSpendCase.yearsMonthsDays} />
          <br />
          Under this scenario, you spend{" "}
          <text className="bold">{lowerSpendCase.percentHleWorking}%</text> of
          your healthy life expectancy working, and{" "}
          <text className="bold">
            {100 - lowerSpendCase.percentHleWorking}%
          </text>{" "}
          financially free.
          <br />
          <br />
          <div className="italic">
            Compared to your current situation, you will have{" "}
            <text className="bold">{improvement}%</text> more of your healthy
            life free instead of working.
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
