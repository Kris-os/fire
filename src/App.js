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
      networth: 0
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
      this.runCalcs()
    );
  };

  runCalcs() {
    const baseUrl = "https://localhost:44302/Prospr";
    const queryString = encodeQueryData(this.state);
    const url = baseUrl.concat("?", queryString);

    console.log("test2");
    const response = fetch(url, {
      credentials: "include",
      mode: "cors"
    });

    response
      .then(response => {
        return response.json();
      })
      .then(test => {
        console.log(test);
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
              <Chart />
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
