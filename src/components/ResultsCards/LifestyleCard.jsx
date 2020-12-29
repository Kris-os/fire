import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function LifestyleCard({ updateInputs, expenditure }) {
  return (
    <Card className="border-3 marginTopAndBottomLarge" border="cyan">
      <Card.Body>
        <Card.Text>
          <h4 className="bold cyan">Lifestyle tool</h4>
          The cost of your lifestyle is a tradeoff between how you want to live
          and how much time you will have financially free. Use this tool to
          understand the relationship of this tradeoff, and help decide on the
          best balance for you.
          <br />
          <br />
          Your current lifestyle is <text className="bold">
            {expenditure}
          </text>{" "}
          per year (from your Current Situation inputs). Try out alternative
          lifestyles here to see their impact on your financial freedom.
          <br />
          <br />
          <text className="bold">Alternate Lifestyle 1 </text>(cost per year)
          <text className="italic">
            - you could try a simpler lifestyle to see how much more freedom you
            get
          </text>
          <NumberInput
            inputId="alternateExpenditure"
            updateInputs={updateInputs}
          />
          <br />
          <text className="bold">Alternate Lifestyle 2 </text>(cost per year)
          <text className="italic">
            - you could try a more luxurious lifestyle
          </text>
          <NumberInput inputId="new2" updateInputs={updateInputs} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LifestyleCard;
