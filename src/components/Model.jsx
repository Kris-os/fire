import React, { useState, useCallback } from "react";
import Inputs from "./Inputs";
import { intialReturnAssumption } from "../Constants.js";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Results from "./Results";

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

function Model() {
  const debounceTime = 550;

  let unid = "";
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
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }

  const debouncedRunCalcs = React.useCallback(
    debounce(runCalcs, debounceTime),
    []
  );

  const updateState = (id, value) => {
    let inputsDictionaryNew = inputsDictionary;
    inputsDictionaryNew[id] = value;
    setInputs(inputsDictionaryNew);

    if (inputsDictionary.expenditure > 0) {
      debouncedRunCalcs();
    } else setResults(resultsInitial);
  };

  function runCalcs() {
    const baseUrl =
      "https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=";
    // const url = "http://localhost:7071/api/OpulFunction";
    const url = baseUrl.concat(process.env.REACT_APP_API_KEY);

    let requestId = uuidv4().toString();
    unid = requestId;
    let inputs = inputsDictionary;
    inputs.id = requestId;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(inputs),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.id == unid) {
          setResults(data);
        }
      })
      .catch((error) => {
        console.log(error);
        setResults(resultsInitial);
      });
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  return (
    <Container fluid>
      <Row className="align-items-start">
        <Col lg="5" className="padding30">
          <Inputs
            // className="paddingTopAndBottomLarge"
            updateState={updateState}
            intialReturnAssumption={intialReturnAssumption}
          />
        </Col>
        <Col lg="7" className="padding30">
          <Results
            age={inputsDictionary.age}
            results={results}
            updateState={updateState}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Model;
