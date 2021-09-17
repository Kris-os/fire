import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as consts from "../Constants.js";

function Homepage({ setActivePage }) {
  const clickHandler = () => {
    console.log("test");
    setActivePage(consts.oneOffModellingPageId);
  };

  return (
    <Container fluid>
      <Row>
        <Col xl="3" />
        <Col xl="6" className="padding30">
          <div
            style={{
              textAlign: "left",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <h4 className="bold">Opul</h4>
            <h5>
              A platform to help you make{" "}
              <text className="bold cyan">optimal financial decisions</text> to
              best reach your{" "}
              <text className="bold baseCaseColor">financial freedom</text>{" "}
              goals. Giving you the same financial tools that billion dollar
              investors use - we do the complicated math, so you can make better
              decisions.
            </h5>

            <br />
            <h4 className="bold">What is Financial Freedom?</h4>
            <h5>
              A state of freedom where you can spend your time as you wish, free
              from the need to work for money. Waking up each day and deciding
              how you want to live it. The only requirement - enough financial
              wealth to support your desired lifestyle.
              <br />
              <br />
              The default age in society for financial freedom is after we have
              used up most of our health and time, aged 65 to 70. This is when
              our Governments provide pensions.{" "}
              <text className="bold">
                However, it is possible to reach financial freedom much sooner
                than this
              </text>{" "}
              - find out exactly how soon by using our{" "}
              <Link to={"/" + consts.oneOffModellingPageId}>toolkit</Link>, and
              answer other questions such as:
              <br />
              <br />
              <ul className="italic">
                <li>How much wealth is needed to support a given lifestyle?</li>
                <li>When can I reach Financial Freedom? </li>
                <li>
                  What is the precise opportunity cost of a more expensive
                  lifestyle measured in freedom?
                </li>
              </ul>
            </h5>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to={"/" + consts.oneOffModellingPageId}>
                <Button variant="primary" size="lg" onClick={clickHandler}>
                  Go to toolkit
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xl="3" />
      </Row>
    </Container>
  );
}

export default Homepage;
