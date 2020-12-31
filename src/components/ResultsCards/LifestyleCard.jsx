import React, { useState } from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";
import YearsMonthsDays from "../YearsMonthsDays";

function LifestyleCard({
  updateInputs,
  expenditure,
  netEarnings,
  alternateLifestyle1Case,
  alternateLifestyle2Case,
}) {
  const [lifestyleInputs, setLifestyleInputs] = useState({
    alternateLifestyle1: 0,
    alternateLifestyle2: 0,
  });

  const updateLifeStyleInputs = (inputId, value) => {
    setLifestyleInputs((prevState) => ({ ...prevState, [inputId]: value }));
    updateInputs(inputId, value);
  };

  const isYearsMonthsDaysPositive = (yearsMonthsDays) => {
    if (yearsMonthsDays === null) return null;
    if (
      yearsMonthsDays.years + yearsMonthsDays.months + yearsMonthsDays.days >
      0
    )
      return true;
    return false;
  };

  return (
    <Card className="border-3 marginTopAndBottomLarge" border="cyan">
      <Card.Body>
        <Card.Text>
          <h4 className="bold cyan">Lifestyle tool</h4>
          The cost of your lifestyle has a big impact on your financial freedom.
          There is a balance between more time financially free and a more
          expensive lifestyle. Use this tool to help decide the best balance for
          you.
          <br />
          <br />
          From your Current Situation inputs your current lifestyle is{" "}
          <text className="bold">{expenditure}</text> per year.
          {/* Your net
          earnings are <text className="bold">{netEarnings}</text> per year,
          meaning  */}
          (saving <text className="bold">{netEarnings - expenditure}</text> per
          year).
          <br />
          <br />
          <div className="cyan">
            <text className="bold">Alternate Lifestyle 1 </text>(cost per year)
            <NumberInput
              inputId="alternateLifestyle1"
              updateInputs={updateLifeStyleInputs}
            />
            <div className="italic">
              (saving{" "}
              <text className="bold">
                {netEarnings - lifestyleInputs.alternateLifestyle1}
              </text>{" "}
              per year). <br />
            </div>
            Means more time financially free by:
            <YearsMonthsDays
              yearsMonthsDays={alternateLifestyle1Case?.yearsMonthsDays}
            />
          </div>
          <br />
          <div className="darkBlue">
            <text className="bold">Alternate Lifestyle 2 </text>(cost per year)
            <NumberInput
              inputId="alternateLifestyle2"
              updateInputs={updateLifeStyleInputs}
            />
            <div className="italic">
              (saving{" "}
              <text className="bold">
                {netEarnings - lifestyleInputs.alternateLifestyle2}
              </text>{" "}
              per year).
            </div>
            Means more time financially free by:
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
