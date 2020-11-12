import React, { useState } from "react";
import Chart from "./Chart";
import Inputs from "./Inputs";
import NumberInput from "./NumberInput";
import ResultsSummary from "./ResultsSummary";
import { intialReturnAssumption } from "./../Constants.js";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";

const resultsInitial = {
  yearsMonthsDays1: {}, //[0, 0, 0],
  yearsMonthsDays2: {},
  yearsMonthsDays3: {},
  yearsMonthsDays4: {},
  lifeExpectancyResults: {
    lifeExpectancyYearsLeft: [],
    healthyLifeExpectancyYearsLeft: [],
    lifeExpectancyAge: [],
    healthyLifeExpectancyAge: [],
  },
};
const debounceTime = 550;

function Model() {
  const [inputsDictionary, setInputs] = useState({
    age: 0,
    expenditure: 0,
    inheritanceToLeaveBehind: 0,
    lowerSpend: 0,
    netEarnings: 0,
    networth: 0,
    oneOffPurchase: 0,
    returnAboveInflationAssumption: intialReturnAssumption,
  });
  const [results, setResults] = useState(resultsInitial);

  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const updateState = (id, value) => {
    let inputsDictionaryNew = inputsDictionary;
    inputsDictionaryNew[id] = value;
    setInputs(inputsDictionaryNew);

    if (inputsDictionary.expenditure > 0) {
      debounce(runCalcs, debounceTime)();
    } else setResults(resultsInitial);
  };

  const runCalcs = () => {
    const baseUrl =
      "https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=";
    //const url = "http://localhost:7071/api/OpulFunction";
    const url = baseUrl.concat(process.env.REACT_APP_API_KEY);

    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(inputsDictionary),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.log(error);
        setResults(resultsInitial);
      });
  };

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  return (
    <Container fluid>
      <Row className="align-items-start">
        <Col md="4" className="padding30">
          <Inputs
            className="paddingTopAndBottomLarge"
            updateState={updateState}
            intialReturnAssumption={intialReturnAssumption}
          />
        </Col>
        <Col md="8" className="padding30">
          <ResultsSummary
            age={inputsDictionary.age}
            lifeExpectancyResults={results.lifeExpectancyResults}
            baseCasePercentHleWorking={results.baseCasePercentHleWorking}
            baseCasePercentHleFree={results.baseCasePercentHleFree}
            lowerMonthlySpendPercentHleWorking={
              results.lowerMonthlySpendPercentHleWorking
            }
            lowerMonthlySpendPercentHleFree={
              results.lowerMonthlySpendPercentHleFree
            }
          />
          <h3 className="paddingTopAndBottomLarge">
            Projected net-worth over lifetime
          </h3>
          <div style={{ height: "30vw" }}>
            <Chart results={results} age={inputsDictionary.age} />
          </div>
          <CardDeck>
            <Card
              style={{ minWidth: "300px" }}
              className="marginTopAndBottomLarge border-3"
              border="pink"
            >
              <Card.Body>
                <Card.Text>
                  <h4>
                    Projected financial freedom - Age&#160;
                    <text className="bold">
                      {results.baseCaseFinancialFreedomAge}
                    </text>
                  </h4>
                  <div>{"\n"}</div>
                  <text className="bold">{results.yearsMonthsDays1[0]} </text>
                  years&#160;&#160;
                  <text className="bold">{results.yearsMonthsDays1[1]} </text>
                  months&#160;&#160;
                  <text className="bold">
                    {results.yearsMonthsDays1[2]}{" "}
                  </text>{" "}
                  days
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="marginTopAndBottomLarge border-3"
              style={{ minWidth: "300px" }}
              border="green"
            >
              <Card.Body>
                <Card.Text>
                  <h4>Impact of reduction in lifestyle</h4>
                  Cutting back by{" "}
                  <NumberInput id="lowerSpend" updateState={updateState} /> a
                  month cuts working lifetime by:
                  <div>{"\n"}</div>
                  <text className="bold">
                    {results.yearsMonthsDays2[0]}
                  </text>{" "}
                  years&#160;&#160;
                  <text className="bold">
                    {results.yearsMonthsDays2[1]}
                  </text>{" "}
                  months&#160;&#160;
                  <text className="bold">
                    {results.yearsMonthsDays2[2]}
                  </text>{" "}
                  days
                  {/* <Form.Check
                    className="paddingTopAndBottomSmall"
                    type="checkbox"
                    label="Add to chart"
                    style={{ fontStyle: "italic" }}
                  /> */}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="marginTopAndBottomLarge border-3"
              style={{ minWidth: "300px" }}
              border="blue"
            >
              <Card.Body>
                <Card.Text>
                  <h4>One-off purchase</h4>A one-off purchase of{" "}
                  <NumberInput id="oneOffPurchase" updateState={updateState} />
                  increases working lifetime by
                  <div>{"\n"}</div>
                  <text className="bold">
                    {results.yearsMonthsDays3[0]}
                  </text>{" "}
                  years&#160;&#160;
                  <text className="bold">
                    {results.yearsMonthsDays3[1]}
                  </text>{" "}
                  months&#160;&#160;
                  <text className="bold">
                    {results.yearsMonthsDays3[2]}
                  </text>{" "}
                  days
                </Card.Text>
              </Card.Body>
            </Card>

            {/* <Card
              className="marginTopAndBottomLarge border-3"
              style={{ minWidth: "300px" }}
            >
              <Card.Body>
                <Card.Text>
                  <h4>Getting a head start</h4>2 years of saving an extra{" "}
                  <text className="bold">200</text> a month reduces working
                  lifetime by
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
            </Card> */}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default Model;
