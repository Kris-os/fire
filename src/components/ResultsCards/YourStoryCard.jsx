import React from "react";
import { Card } from "react-bootstrap";
import YourStory from "./YourStory";

function YourStoryCard(props) {
  return (
    <Card
      border="dark"
      className="border-3 marginTopAndBottomLarge"
      style={{ minWidth: "300px" }}
    >
      <Card.Body>
        <Card.Text>
          <h4 className="bold darkColor">Your life expectancies</h4>
          <YourStory
            age={props.age}
            lifeExpectancyResults={props.results.lifeExpectancyResults}
            lowerMonthlySpendPercentHleWorking={
              props.results.lowerMonthlySpendPercentHleWorking
            }
            lowerMonthlySpendPercentHleFree={
              props.results.lowerMonthlySpendPercentHleFree
            }
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default YourStoryCard;
