import React, { useState } from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function LifestyleCard({ updateInputs, expenditure, netEarnings }) {
  const [lifestyleInputs, setLifestyleInputs] = useState({
    alternateLifestyle1: 0,
    alternateLifestyle2: 0,
  });

  const updateLifeStyleInputs = (inputId, value) => {
    setLifestyleInputs((prevState) => ({ ...prevState, [inputId]: value }));
    updateInputs(inputId, value);
  };

  return (
    <Card className="border-3 marginTopAndBottomLarge" border="cyan">
      <Card.Body>
        <Card.Text>
          <h4 className="bold cyan">Lifestyle tool</h4>
          The main lever in your immediate control to change when you reach
          financial freedom is the cost of your lifestyle. A simpler lifestyle
          means more of your lifetime financially free. Use this tool to help
          decide on the best balance for you of these competing goals. A simpler
          lifestyle to see how much more freedom you get, a more luxurious
          lifestyle to see what is affordable.
          <br />
          <br />
          From your Current Situation inputs your current lifestyle is{" "}
          <text className="bold">{expenditure}</text> per year. Your net
          earnings are <text className="bold">{netEarnings}</text> per year,
          meaning savings of{" "}
          <text className="bold">{netEarnings - expenditure}</text> per year.
          <br />
          <br />
          <div className="cyan">
            <text className="bold">Alternate Lifestyle 1 </text>(cost per year)
            <NumberInput
              inputId="alternateLifestyle1"
              updateInputs={updateLifeStyleInputs}
            />
            <div className="italic">
              (savings of{" "}
              <text className="bold">
                {netEarnings - lifestyleInputs.alternateLifestyle1}
              </text>{" "}
              per year).
            </div>
          </div>
          <br />
          <div className="darkBlue">
            <text className="bold">Alternate Lifestyle 2 </text>(cost per year)
            <NumberInput
              inputId="alternateLifestyle2"
              updateInputs={updateLifeStyleInputs}
            />
            <div className="italic">
              (savings of{" "}
              <text className="bold">
                {netEarnings - lifestyleInputs.alternateLifestyle2}
              </text>{" "}
              per year).
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LifestyleCard;
