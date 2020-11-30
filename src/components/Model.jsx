import React, { useState, useCallback, useEffect } from "react";
import Inputs from "./Inputs";
import * as consts from "../Constants.js";
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
  const debounceTime = 650;

  let unid = "";
  const [inputs, setInputs] = useState({
    age: 0,
    expenditure: 0,
    inheritanceToLeaveBehind: 0,
    lowerSpend: 0,
    netEarnings: 0,
    networth: 0,
    oneOffPurchase: 0,
    returnAboveInflationAssumption: consts.initialReturnAssumption,
    salaryGrowthAssumption: consts.initialSalaryGrowthAssumption,
    salaryGrowthYearsAssumption: consts.initialSalaryGrowthYearsAssumption,
    statePensionAgeAssumption: consts.initialStatePensionAgeAssumption,
    statePensionAmountAssumption: consts.initialstatePensionAmountAssumption,
  });

  const [results, setResults] = useState(resultsInitial);

  const debouncedRunCalcs = useCallback(
    consts.debounce((apiInputs) => runCalcs(apiInputs), debounceTime),
    []
  );

  const updateState = (id, value) => {
    setInputs((prevState) => ({ ...prevState, [id]: value }));
  };

  useEffect(() => {
    if (inputs.expenditure > 0) {
      debouncedRunCalcs(inputs);
    } else setResults(resultsInitial);
  }, [inputs]);

  function runCalcs(apiInputs) {
    const baseUrl =
      "https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=";
    // const url = "http://localhost:7071/api/OpulFunction";
    const url = baseUrl.concat(process.env.REACT_APP_API_KEY);

    let requestId = uuidv4().toString();
    unid = requestId;
    apiInputs.id = requestId;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(apiInputs),
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
          />
        </Col>
        <Col lg="7" className="padding30">
          <Results
            age={inputs.age}
            results={results}
            updateState={updateState}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Model;
