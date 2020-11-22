import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

function BaseCaseCard(props) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function ffDate() {
    var d = new Date();
    d = d.addDays(props.results.daysUntilFinancialIndependence);
    return d;
  }

  return (
    <Card
      style={{ minWidth: "300px" }}
      className="border-3 marginTopAndBottomLarge"
      border="pink"
    >
      <Card.Body>
        <Card.Text tag="div">
          <h4>
            <text className="baseCaseColor bold">
              Your financial freedom age:&#160;
              {props.results.baseCaseFinancialFreedomAge}
            </text>
          </h4>
          <text className="bold">{props.results.yearsMonthsDays1[0]} </text>
          years&#160;&#160;
          <text className="bold">{props.results.yearsMonthsDays1[1]} </text>
          months&#160;&#160;
          <text className="bold">
            {props.results.yearsMonthsDays1[2]}{" "}
          </text>{" "}
          days.
          <br />({moment(ffDate()).format("MMMM Do YYYY")})
          <br />
          <br />
          Under your base case inputs, you spend{" "}
          <text className="bold">
            {props.results.baseCasePercentHleWorking}%
          </text>{" "}
          of your healthy life expectancy working, and{" "}
          <text className="bold">{props.results.baseCasePercentHleFree}%</text>{" "}
          financially free.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BaseCaseCard;
