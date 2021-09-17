import React, { useState, useCallback, useEffect } from "react";
import * as consts from "../Constants.js";
import jQuery from "jquery";

import { v4 as uuidv4 } from "uuid";
import FormikWrapper from "./FormikWrapper";

const resultsInitial = {
  currentSituationCase: {
    yearsMonthsDays: { years: [], months: [], days: [] },
  },
  lowerMonthlySpendCase: {
    yearsMonthsDays: { years: [], months: [], days: [] },
  },
  lowerDailySpendCase: { yearsMonthsDays: { years: [], months: [], days: [] } },
  oneOffPurchaseCase: { yearsMonthsDays: { years: [], months: [], days: [] } },
  alternateLifestyle1Case: {
    yearsMonthsDays: { years: [], months: [], days: [] },
  },
  alternateLifestyle2Case: {
    yearsMonthsDays: { years: [], months: [], days: [] },
  },
  lifeExpectancyResults: {
    lifeExpectancyYearsLeft: [],
    healthyLifeExpectancyYearsLeft: [],
    lifeExpectancyAge: [],
    healthyLifeExpectancyAge: [],
  },
};

function OneOffModelling() {
  const debounceTime = 650;
  const debugMode = false;
  let unid = "";
  const [apiInputs, setApiInputs] = useState({
    age: 0,
    alternateLifestyle1: 0,
    alternateLifestyle2: 0,
    expenditure: 0,
    inheritanceToLeaveBehind: 0,
    lowerSpendMonthly: 0,
    lowerSpendDaily: 0,
    netEarnings: 0,
    networth: 0,
    oneOffPurchase: 0,
    returnAboveInflationAssumption: consts.initialReturnAssumption,
    salaryGrowthAssumption: consts.initialSalaryGrowthAssumption,
    salaryGrowthYearsAssumption: consts.initialSalaryGrowthYearsAssumption,
    statePensionAgeAssumption: consts.initialStatePensionAgeAssumption,
    statePensionAmountAssumption: consts.initialstatePensionAmountAssumption,
  });

  const handleApiInputsChange = (values) => {
    setApiInputs(values);
  };

  const handleFormErrorChange = () => {
    setResults(resultsInitial);
  };

  const [results, setResults] = useState(resultsInitial);

  const debouncedRunCalcs = useCallback(
    consts.debounce((apiInputs) => runCalcs(apiInputs), debounceTime),
    []
  );

  const getUrl = () => {
    if (debugMode) return "http://localhost:7071/api/OpulFunction";
    else {
      const baseUrl =
        "https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=";
      return baseUrl.concat(process.env.REACT_APP_API_KEY);
    }
  };

  useEffect(() => {
    if (jQuery.isEmptyObject(apiInputs.errors)) {
      debouncedRunCalcs(apiInputs);
    } else setResults(resultsInitial);
  }, [apiInputs]);

  useEffect(() => {
    const url = getUrl();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: "",
    });
  }, []);

  function runCalcs(apiInputs) {
    const url = getUrl();

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
        if (data.id === unid) {
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
    <FormikWrapper
      age={apiInputs.age}
      apiInputs={apiInputs}
      handleApiInputsChange={handleApiInputsChange}
      handleFormErrorChange={handleFormErrorChange}
      results={results}
      expenditure={apiInputs.expenditure}
      netEarnings={apiInputs.netEarnings}
      alternateLifestyle1={apiInputs.alternateLifestyle1}
      alternateLifestyle2={apiInputs.alternateLifestyle2}
    ></FormikWrapper>
  );
}

export default OneOffModelling;
