import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutPage() {
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
            <h4 className="bold">Mission</h4>
            <h5>
              Help people make{" "}
              <text className="bold">optimal financial decisions</text> to reach
              their <text className="bold">financial freedom</text> goals.
            </h5>
            <br />
            <h4 className="bold">How?</h4>
            <h5>
              Provide education on financial freedom. <br /> Give individuals a
              deep understanding of their finances over their lifetime.
            </h5>
            <br />
            <h4 className="bold">Who am I?</h4>
            <h5>Actuary, investment consultant, software engineer.</h5>
            <h5>
              Qualified actuary (FIA) and formerly an investment consultant to
              billion dollar investors. Now working as a software engineer to
              build investment models for a multi-billion dollar investment
              advisory firm.
            </h5>
            <br />
            <div></div> <br />
            <div>
              To add: Financial freedom toolkit. Financial freedom exploratory
              education. Give email.
            </div>
          </div>
        </Col>
        <Col xl="3" />
      </Row>
    </Container>
  );
}

export default AboutPage;
