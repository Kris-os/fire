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
      contacts: []
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

    this.setState({
      age: ageTemp,
      networth: networthTemp
    });

    this.runCalcs();
  };

  runCalcs() {
    //want a POST request as this both gives data and gets back a response?

    fetch("https://localhost:44302/Opul")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
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

export default App;
