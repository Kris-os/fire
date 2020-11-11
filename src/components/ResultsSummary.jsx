import React from "react";

function ResultsSummary(props) {
  return (
    <div>
      {" "}
      <div>
        You are <text className="bold">{props.age}</text> years old{" "}
      </div>
      <div>
        Your life expectancy is age{" "}
        <text className="bold">
          {props.lifeExpectancyResults.lifeExpectancyAge}
        </text>{" "}
        (in{" "}
        <text className="bold">
          {props.lifeExpectancyResults.lifeExpectancyYearsLeft}
        </text>{" "}
        years)
      </div>
      <div>
        Your healthy life expectancy is age{" "}
        <text className="bold">
          {props.lifeExpectancyResults.healthyLifeExpectancyAge}
        </text>{" "}
        (in{" "}
        <text className="bold">
          {props.lifeExpectancyResults.healthyLifeExpectancyYearsLeft}
        </text>{" "}
        years)
      </div>
      <div>
        Under your base case inputs, you spend{" "}
        <text className="bold">{props.baseCasePercentHleWorking}%</text> of your
        healthy life expectancy working, and{" "}
        <text className="bold">{props.baseCasePercentHleFree}%</text>{" "}
        financially free.
      </div>
      <div>
        Under the reduced expenditure scenario, you spend{" "}
        <text className="bold">
          {props.lowerMonthlySpendPercentHleWorking}%
        </text>{" "}
        of your healthy life expectancy working, and{" "}
        <text className="bold">{props.lowerMonthlySpendPercentHleFree}%</text>{" "}
        financially free.
      </div>
    </div>
  );
}

export default ResultsSummary;
