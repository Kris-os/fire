import React, { Component } from "react";
import Chart from "./components/Chart";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import { Card, CardDeck, Col, Container, Form, Row } from "react-bootstrap";
import "./custom.scss";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      networth: 0,
      expenditure: 0,
      netEarnings: 0,
      marginOfSafety: 0,
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
      },
    };
  }

  updateState = (id, value) => {
    console.log("Event Handler Called", id);
    if (id === "age") {
      var ageTemp = value;
    } else {
      ageTemp = this.state.age;
    }

    if (id === "networth") {
      var networthTemp = value;
    } else {
      networthTemp = this.state.networth;
    }

    if (id === "expenditure") {
      var expenditureTemp = value;
    } else {
      expenditureTemp = this.state.expenditure;
    }

    if (id === "netEarnings") {
      var netEarningsTemp = value;
    } else {
      netEarningsTemp = this.state.netEarnings;
    }

    if (id === "marginOfSafety") {
      var marginOfSafetyTemp = value;
    } else {
      marginOfSafetyTemp = this.state.marginOfSafety;
    }

    this.setState(
      {
        age: ageTemp,
        networth: networthTemp,
        expenditure: expenditureTemp,
        netEarnings: netEarningsTemp,
        marginOfSafety: marginOfSafetyTemp,
      },
      () => {
        this.runCalcs();
      }
    );
  };

  runCalcs() {
    const baseUrl = "https://localhost:44302/Prospr";
    const queryString = encodeQueryData(this.state);
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
                <Chart results={this.state.results} age={this.state.age} />
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
                      Saving an extra <text className="bold">[50]</text> a month
                      cuts working lifetime by:
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
                      <text className="bold">[10,000]</text> increases working
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
