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
      expenditure: 0,
      netEarnings: 0,
      results: {
        // baseCaseResults: [
        //   10000,
        //   100000,
        //   100000,
        //   0,
        // ],
        // daysUntilFinancialIndependence: 0,
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

    this.setState(
      {
        age: ageTemp,
        networth: networthTemp,
        expenditure: expenditureTemp,
        netEarnings: netEarningsTemp,
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
        <Container fluid className="my-container">
          <Row className="my-row">
            <Col className="inputs-col">
              <Inputs className="inputs" updateState={this.updateState} />
            </Col>
            <Col className="chart">
              <Chart results={this.state.results} />
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
