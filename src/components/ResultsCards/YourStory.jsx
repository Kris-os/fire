import React from "react";

function YourStory({ age, lifeExpectancyResults }) {
  return (
    <div style={{ textAlign: "left" }}>
      <text className="italic">
        How much time do I have? How much healthy time?
      </text>
      <br />
      <br />
      You are <text className="bold">{age}</text> years old. <br />
      Your life expectancy is age{" "}
      <text className="bold">
        {lifeExpectancyResults.lifeExpectancyAge}
      </text>{" "}
      (in{" "}
      <text className="bold">
        {lifeExpectancyResults.lifeExpectancyYearsLeft}
      </text>{" "}
      years).
      <br />
      Your healthy life expectancy is age{" "}
      <text className="bold">
        {lifeExpectancyResults.healthyLifeExpectancyAge}
      </text>{" "}
      (in{" "}
      <text className="bold">
        {lifeExpectancyResults.healthyLifeExpectancyYearsLeft}
      </text>{" "}
      years). This is the number of years you are expected to be in good health.
      <br />
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
