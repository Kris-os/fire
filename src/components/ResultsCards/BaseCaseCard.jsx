import React from "react";
import { Card } from "react-bootstrap";

function BaseCaseCard(props) {
  return (
    <Card
      style={{ minWidth: "300px" }}
      className="border-3 marginTopAndBottomLarge"
      border="pink"
    >
      <Card.Body>
        <Card.Text tag="div">
          <h4>
            <text className="baseCaseColor bold">Base case</text> financial
            freedom - Age&#160;
            <text className="bold">
              {props.results.baseCaseFinancialFreedomAge}
            </text>
          </h4>
          <div>{"\n"}</div>
          <text className="bold">{props.results.yearsMonthsDays1[0]} </text>
          years&#160;&#160;
          <text className="bold">{props.results.yearsMonthsDays1[1]} </text>
          months&#160;&#160;
          <text className="bold">
            {props.results.yearsMonthsDays1[2]}{" "}
          </text>{" "}
          days
          <br />
          <br />
          <div>
            Under your base case inputs, you spend{" "}
            <text className="bold">
              {props.results.baseCasePercentHleWorking}%
            </text>{" "}
            of your healthy life expectancy working, and{" "}
            <text className="bold">
              {props.results.baseCasePercentHleFree}%
            </text>{" "}
            financially free.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BaseCaseCard;
