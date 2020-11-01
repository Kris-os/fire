import React, { Component } from "react";

class ResultsSummary extends Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          You are <text className="bold">{this.props.age}</text> years old{" "}
        </div>
        <div>
          Your life expectancy is{" "}
          <text className="bold">{this.props.lifeExpectancy}</text> years{" "}
        </div>
        <div>
          Your healthy life expectancy is{" "}
          <text className="bold">{this.props.healthyLifeExpectancy}</text> years{" "}
        </div>
        <div>
          Under your base case inputs, you spend{" "}
          <text className="bold">62%</text> of your healthy life expectancy
          working, and <text className="bold">28%</text> financially free.
        </div>
        <div>
          Under the reduced expenditure scenario, you spend{" "}
          <text className="bold">52%</text> of your healthy life expectancy
          working, and <text className="bold">48%</text> financially free.
        </div>
      </div>
    );
  }
}

export default ResultsSummary;
