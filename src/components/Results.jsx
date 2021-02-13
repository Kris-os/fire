import React from "react";
import Chart from "./Chart";
import { CardDeck } from "react-bootstrap";
import YourStoryCard from "./ResultsCards/YourStoryCard";
import BaseCaseCard from "./ResultsCards/BaseCaseCard";
import ReducedExpenditureCard from "./ResultsCards/ReducedExpenditureCard";
import OneOffPurchaseCard from "./ResultsCards/OneOffPurchaseCard";
import LifestyleCard from "./ResultsCards/LifestyleCard";

function Results({
  age,
  alternateLifestyle1,
  alternateLifestyle2,
  results,
  expenditure,
  netEarnings,
}) {
  function GetImprovement(casePercentHleWorking) {
    let num =
      results.currentSituationCase.percentHleWorking - casePercentHleWorking;
    if (isNaN(num)) return "-";
    else return num;
  }

  return (
    <div>
      <h3 className="marginTopAndBottomLarge">Financial freedom toolkit</h3>
      <CardDeck>
        <YourStoryCard
          age={age}
          lifeExpectancyResults={results.lifeExpectancyResults}
        />
        <BaseCaseCard currentSituationCase={results.currentSituationCase} />
        <ReducedExpenditureCard
          lowerSpendCase={results.lowerMonthlySpendCase}
          improvement={GetImprovement(
            results.lowerMonthlySpendCase.percentHleWorking
          )}
          frequency={"monthly"}
          themeColor={"monthlyHabit"}
        />
        <ReducedExpenditureCard
          lowerSpendCase={results.lowerDailySpendCase}
          improvement={GetImprovement(
            results.lowerDailySpendCase.percentHleWorking
          )}
          frequency={"daily"}
          themeColor={"dailyHabit"}
        />
        <LifestyleCard
          expenditure={expenditure}
          netEarnings={netEarnings}
          alternateLifestyle1Case={results.alternateLifestyle1Case}
          alternateLifestyle2Case={results.alternateLifestyle2Case}
          alternateLifestyle1={alternateLifestyle1}
          alternateLifestyle2={alternateLifestyle2}
        />
        <OneOffPurchaseCard oneOffPurchaseCase={results.oneOffPurchaseCase} />
      </CardDeck>
      <br />
      <h4 className="marginTopAndBottomLarge">
        Your journey to financial freedom visualised:
      </h4>
      <div
        className="paddingBottomLarge"
        style={{ height: "30vw", minHeight: "225px" }}
      >
        <Chart results={results} age={age} />
      </div>
    </div>
  );
}

export default Results;
