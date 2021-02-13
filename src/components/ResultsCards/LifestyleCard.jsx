import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";
import YearsMonthsDays from "../YearsMonthsDays";

function LifestyleCard({
  expenditure,
  netEarnings,
  alternateLifestyle1Case,
  alternateLifestyle2Case,
  alternateLifestyle1,
  alternateLifestyle2,
}) {
  return (
    <Card className="border-3 marginTopAndBottomLarge" border="cyan">
      <Card.Body>
        <Card.Text>
          <h4 className="bold cyan">Lifestyle tool</h4>
          The cost of your lifestyle has a big impact on your financial freedom.
          There is a balance between more time financially free and a more
          expensive lifestyle. Find the best balance for you.
          <br />
          <br />
          Currently, your lifestyle is{" "}
          <text className="bold">{expenditure}</text> per year (saving{" "}
          <text className="bold">{netEarnings - expenditure}</text> per year).
          <br />
          <br />
          <div className="cyan">
            <text className="bold">Alternate Lifestyle 1 </text>(cost per year)
            <NumberInput fieldName="alternateLifestyle1" />
            <div className="italic">
              (saving{" "}
              <text className="bold">{netEarnings - alternateLifestyle1}</text>{" "}
              per year). <br />
            </div>
            Means more freedom of:
            <YearsMonthsDays
              yearsMonthsDays={alternateLifestyle1Case?.yearsMonthsDays}
            />
          </div>
          <br />
          <div className="darkBlue">
            <text className="bold">Alternate Lifestyle 2 </text>(cost per year)
            <NumberInput fieldName="alternateLifestyle2" />
            <div className="italic">
              (saving{" "}
              <text className="bold">{netEarnings - alternateLifestyle2}</text>{" "}
              per year).
            </div>
            Means more freedom of:
            <YearsMonthsDays
              yearsMonthsDays={alternateLifestyle2Case?.yearsMonthsDays}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LifestyleCard;
