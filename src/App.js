import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      networth: 0,
      results: {
        bestEstimateResults: [
          10000,
          100000,
          500000,
          490000,
          480000,
          360000,
          100000,
          0
        ]
      }
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

    this.setState(
      {
        age: ageTemp,
        networth: networthTemp
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
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ results: data });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className="my-container">
          <Row className="my-row">
            <Col className="my-col col-inputs">
              <Inputs updateState={this.updateState} />
            </Col>
            <Col className="my-col col-chart">
              <Chart results={this.state.results} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return ret.join("&");
}

export default App;
