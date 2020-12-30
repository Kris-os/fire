import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import YearsMonthsDays from "../YearsMonthsDays";

function BaseCaseCard({ currentSituationCase }) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function ffDate() {
    var d = new Date();
    d = d.addDays(currentSituationCase.daysUntilFinancialFreedom);
    return d;
  }

  return (
    <Card className="border-3 marginTopAndBottomLarge" border="pink">
      <Card.Body>
        <Card.Text tag="div">
          <h4>
            <text className="baseCaseColor bold">
              Your financial freedom age:&#160;
              {currentSituationCase.financialFreedomAge}
            </text>
          </h4>
          <YearsMonthsDays
            yearsMonthsDays={currentSituationCase.yearsMonthsDays}
          />
          <br />({moment(ffDate()).format("MMMM Do YYYY")})
          <br />
          <br />
          Under your current situation, you spend{" "}
          <text className="bold">
            {currentSituationCase.percentHleWorking}%
          </text>{" "}
          of your remaining healthy life expectancy working, and{" "}
          <text className="bold">
            {100 - currentSituationCase.percentHleWorking}%
          </text>{" "}
          financially free.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BaseCaseCard;
