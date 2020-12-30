import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";
import { capitaliseFirstLetter } from "../../Util.js";

function IncreasedInvestmentCard({
  updateInputs,
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
            inputId={`lowerSpend${capitaliseFirstLetter(frequency)}`}
            updateInputs={updateInputs}
          />
          {frequency} increases the time you have financially free by:
          <br />
          <text className="bold">
            {lowerSpendCase.yearsMonthsDays.years}
          </text>{" "}
          years&#160;&#160;
          <text className="bold">
            {lowerSpendCase.yearsMonthsDays.months}
          </text>{" "}
          months&#160;&#160;
          <text className="bold">
            {lowerSpendCase.yearsMonthsDays.days}
          </text>{" "}
          days <br />
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
