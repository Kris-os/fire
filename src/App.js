import React, { Component } from "react";
import Chart from "./components/Chart";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import NumberInput from "./components/NumberInput";
import { Card, CardDeck, Col, Container, Form, Row } from "react-bootstrap";
import "./custom.scss";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputsDictionary: {
        age: 0,
        networth: 0,
        expenditure: 0,
        netEarnings: 0,
        marginOfSafety: 0,
        lowerSpend: 0,
        oneOffPurchase: 0,
      },
      results: {
        // baseCaseResults: [
        //   10000,
        //   100000,
        //   100000,
        //   0,
        // ],
        // daysUntilFinancialIndependence: 0,
        yearsMonthsDays1: [0, 0, 0],
        yearsMonthsDays2: [0, 0, 0],
        yearsMonthsDays3: [0, 0, 0],
      },
    };
  }

  updateState = (id, value) => {
    var inputsDictionaryNew = this.state.inputsDictionary;
    inputsDictionaryNew[id] = value;
    this.setState(
      {
        inputsDictionary: inputsDictionaryNew,
      },
      () => {
        this.runCalcs();
      }
    );
  };

  runCalcs() {
    const baseUrl = "https://localhost:44302/Prospr";
    const queryString = encodeQueryData(this.state.inputsDictionary);
    const url = baseUrl.concat("?", queryString);

    const response = fetch(url, {
      credentials: "include",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ results: data });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid>
          <Row className="align-items-center">
            <Col md="4" className="padding30">
              <Inputs
                className="paddingTopAndBottomLarge"
                updateState={this.updateState}
              />
            </Col>
            <Col md="8" className="padding30">
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

                <Card
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
                    </Card.Text>
                  </Card.Body>
                </Card>
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
