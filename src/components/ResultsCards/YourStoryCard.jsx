import React from "react";
import { Card } from "react-bootstrap";
import YourStory from "./YourStory";

function YourStoryCard({ age, lifeExpectancyResults }) {
  return (
    <Card border="dark" className="border-3 marginTopAndBottomLarge">
      <Card.Body>
        <Card.Text>
          <h4 className="bold darkColor">Your life expectancies</h4>
          <YourStory age={age} lifeExpectancyResults={lifeExpectancyResults} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default YourStoryCard;
