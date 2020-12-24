import React from "react";
import Chart from "./Chart";
import { CardDeck } from "react-bootstrap";
import YourStoryCard from "./ResultsCards/YourStoryCard";
import BaseCaseCard from "./ResultsCards/BaseCaseCard";
import IncreasedInvestmentCard from "./ResultsCards/IncreasedInvestmentCard";
import OneOffPurchaseCard from "./ResultsCards/OneOffPurchaseCard";

function Results(props) {
  function GetImprovement() {
    let num =
      props.results.baseCasePercentHleWorking -
      props.results.lowerMonthlySpendPercentHleWorking;
    if (isNaN(num)) return "-";
    else return num;
  }

  return (
    <div>
      <h3 className="marginTopAndBottomLarge">
        Financial freedom tools and results
      </h3>
      <CardDeck>
        <YourStoryCard age={props.age} results={props.results} />
        <BaseCaseCard results={props.results} />
        <IncreasedInvestmentCard
          results={props.results}
          updateInputs={props.updateInputs}
          improvement={GetImprovement()}
        />
        <OneOffPurchaseCard
          results={props.results}
          updateInputs={props.updateInputs}
        />
      </CardDeck>
      <br />
      <h4 className="marginTopAndBottomLarge">
        Play around with model inputs to gain an intuition on how financial
        freedom works for you:
      </h4>
      <div
        className="paddingBottomLarge"
        style={{ height: "30vw", minHeight: "225px" }}
      >
        <Chart results={props.results} age={props.age} />
      </div>
    </div>
  );
}

export default Results;
