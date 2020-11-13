import React from "react";

function YourStory(props) {
  return (
    <div style={{ textAlign: "left" }}>
      {" "}
      <div>
        You are <text className="bold">{props.age}</text> years old.{" "}
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
        years).
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
        years). This is the number of years you are expected to be in good
        health.
      </div>
      <br />
      <div className="italic">
        Life expectancies are calculated from{" "}
        <a
          href={
            "https://www.who.int/data/gho/data/indicators/indicator-details/GHO/healthy-life-expectancy-(hale)-at-birth-(years)"
          }
        >
          WHO data
        </a>
        .
      </div>
    </div>
  );
}

export default YourStory;
