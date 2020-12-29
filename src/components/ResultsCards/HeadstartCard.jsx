import React from "react";
import { Card } from "react-bootstrap";
import NumberInput from "../NumberInput";

function Headstart(props) {
  return (
    <Card className="marginTopAndBottomLarge border-3">
      <Card.Body>
        <Card.Text>
          <h4>Getting a head start</h4>2 years of saving an extra{" "}
          <text className="bold">200</text> a month reduces working lifetime by
          <div>{"\n"}</div>
          <text className="bold">
            {this.state.results.yearsMonthsDays4[0]}
          </text>{" "}
          years&#160;&#160;
          <text className="bold">
            {this.state.results.yearsMonthsDays4[1]}
          </text>{" "}
          months&#160;&#160;
          <text className="bold">
            {this.state.results.yearsMonthsDays4[2]}
          </text>{" "}
          days
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Headstart;
