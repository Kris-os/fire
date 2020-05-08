import React, { Component } from "react";
import Chart from "./components/Chart";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import { Card, CardDeck, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

    if (id === "marginForErrorPlusDesiredInheritence") {
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
        marginForErrorPlusDesiredInheritence: marginOfSafetyTemp,
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
            <Col sm="4">
              <Inputs
                className="paddingTopAndBottomLarge"
                updateState={this.updateState}
              />
            </Col>
            <Col sm="8" className="paddingTopAndBottomLarge">
              {/* <Card style={{ width: "18rem" }}>
                <Card.Body> */}
              <div style={{ height: "33vw" }}>
                <Chart results={this.state.results} age={this.state.age} />
              </div>
              {/* </Card.Body>
              </Card> */}
              <CardDeck>
                <Card
                  style={{ width: "30rem" }}
                  className="marginTopAndBottomLarge"
                >
                  <Card.Body>
                    <Card.Text>
                      Projected financial freedom:{" "}
                      {this.state.results.yearsMonthsDays1[0]} years,{" "}
                      {this.state.results.yearsMonthsDays1[1]} months,{" "}
                      {this.state.results.yearsMonthsDays1[2]} days.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="marginTopAndBottomLarge"
                  style={{ width: "30rem" }}
                >
                  <Card.Body>
                    <Card.Text>
                      If you cut your expenditure by [add input], your projected
                      working lifetime is reduced by [3] years, [2] months, [3]
                      days.
                      <Form.Check
                        className="paddingTopAndBottomSmall"
                        type="checkbox"
                        label="Add to chart"
                        style={{ fontStyle: "italic" }}
                      />
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
