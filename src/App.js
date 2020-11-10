import React, { Component } from "react";
import Chart from "./components/Chart";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import NumberInput from "./components/NumberInput";
import ResultsSummary from "./components/ResultsSummary";
import Intro from "./components/Intro";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import "./custom.scss";
import "./App.css";
import { intialReturnAssumption } from "./Constants.js";

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputsDictionary: {
        age: 0,
        expenditure: 0,
        inheritanceToLeaveBehind: 0,
        lowerSpend: 0,
        netEarnings: 0,
        networth: 0,
        oneOffPurchase: 0,
        returnAboveInflationAssumption: intialReturnAssumption,
      },
      results: resultsInitial,
    };
  }

  updateState = (id, value) => {
    var inputsDictionaryNew = this.state.inputsDictionary;
    inputsDictionaryNew[id] = value;
    this.setState({
      inputsDictionary: inputsDictionaryNew,
    });

    if (this.state.inputsDictionary.expenditure > 0) {
      this.runCalcs();
    } else this.setState({ results: resultsInitial });
  };

  runCalcs() {
    const baseUrl =
      "https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=";
    //const url = "http://localhost:7071/api/OpulFunction";
    const url = baseUrl.concat(process.env.REACT_APP_API_KEY);

    try {
      const response = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.state.inputsDictionary),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ results: data });
        });
    } catch (error) {
      this.setState({ results: resultsInitial });
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid>
          <Row className="align-items-start">
            <Col md="4" className="padding30">
              <Intro />
              <Inputs
                className="paddingTopAndBottomLarge"
                updateState={this.updateState}
                intialReturnAssumption={intialReturnAssumption}
              />
            </Col>
            <Col md="8" className="padding30">
              <ResultsSummary
                age={this.state.inputsDictionary.age}
                lifeExpectancyResults={this.state.results.lifeExpectancyResults}
                baseCasePercentHleWorking={
                  this.state.results.baseCasePercentHleWorking
                }
                baseCasePercentHleFree={
                  this.state.results.baseCasePercentHleFree
                }
                lowerMonthlySpendPercentHleWorking={
                  this.state.results.lowerMonthlySpendPercentHleWorking
                }
                lowerMonthlySpendPercentHleFree={
                  this.state.results.lowerMonthlySpendPercentHleFree
                }
              />
              <h3 className="paddingTopAndBottomLarge">
                Projected net-worth over lifetime
              </h3>
              <div style={{ height: "30vw" }}>
                <Chart
                  results={this.state.results}
                  age={this.state.inputsDictionary.age}
                />
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
                          {this.state.results.baseCaseFinancialFreedomAge}
                        </text>
                      </h4>
                      <div>{"\n"}</div>
                      <text className="bold">
                        {this.state.results.yearsMonthsDays1[0]}{" "}
                      </text>
                      years&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays1[1]}{" "}
                      </text>
                      months&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays1[2]}{" "}
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
                      <NumberInput
                        id="lowerSpend"
                        updateState={this.updateState}
                      />{" "}
                      a month cuts working lifetime by:
                      <div>{"\n"}</div>
                      <text className="bold">
                        {this.state.results.yearsMonthsDays2[0]}
                      </text>{" "}
                      years&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays2[1]}
                      </text>{" "}
                      months&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays2[2]}
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
                      <NumberInput
                        id="oneOffPurchase"
                        updateState={this.updateState}
                      />
                      increases working lifetime by
                      <div>{"\n"}</div>
                      <text className="bold">
                        {this.state.results.yearsMonthsDays3[0]}
                      </text>{" "}
                      years&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays3[1]}
                      </text>{" "}
                      months&#160;&#160;
                      <text className="bold">
                        {this.state.results.yearsMonthsDays3[2]}
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
      </div>
    );
  }
}

function encodeQueryData(data) {
  const output = [];
  for (let d in data)
    output.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return output.join("&");
}

export default App;
