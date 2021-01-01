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
              Help <text className="bold darkBlue">individuals</text> make{" "}
              <text className="bold cyan">optimal financial decisions</text> to
              best reach their{" "}
              <text className="bold baseCaseColor">financial freedom</text>{" "}
              goals.
            </h5>
            <br />
            <h4 className="bold">How?</h4>
            <h5>
              Give individuals a deep understanding of their finances over their
              lifetime, by providing education on financial freedom.
            </h5>
            <h5>
              This is primarily delivered through the interactive toolkit that
              can be explored to allow deep intuitiions to be built.
            </h5>
            <br />
            <h4 className="bold">Who am I?</h4>
            <h5>Actuary, investment consultant, software engineer.</h5>
            <h5>
              Qualified actuary (with{" "}
              <a className="bold" href="https://www.actuaries.org.uk/">
                FIA
              </a>{" "}
              qualification). Formerly an investment consultant to billion
              dollar investors. Currently working as a software engineer
              building investment models for a multi-billion dollar investment
              advisory firm.
            </h5>
            <br />
            <h4 className="bold">Contact</h4>
            <h5>
              <a href="mailto:opul.contact@gmail.com">opul.contact@gmail.com</a>
            </h5>
            <br />
          </div>
        </Col>
        <Col xl="3" />
      </Row>
    </Container>
  );
}

export default AboutPage;
