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
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className="my-container">
          <Row className="my-row">
            <Col className="my-col col-inputs">
              <Inputs />
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
