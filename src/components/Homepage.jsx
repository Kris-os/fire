import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-huge {
      padding: 0.8rem 3rem;
      font-size: 1.5rem;
    }
  `}
      </style>

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
                A platform to help you reach financial freedom. Giving you
                financial tools used by billion dollar investors - we do the
                complicated math, so you can make better decisions.
              </h5>

              <br />
              <h4 className="bold">What is Financial Freedom?</h4>
              <h5>
                A state of freedom where you can spend your time as you wish,
                free from the need to work for money. Waking up each day and
                deciding how you want to live it. The only requirement - enough
                financial wealth to support your desired lifestyle.
                <br />
                <br />
                The default age in society for financial freedom is after we
                have used up most of our health and time, aged 65 to 70. This is
                when our Governments provide pensions.{" "}
                <text className="bold">
                  However, it is possible to reach financial freedom much sooner
                  than this.{" "}
                </text>
                Across most of the world, 10 years of work is enough to keep you
                sheltered, fed and happy for the rest of your days.
                <br />
                <br />
                You have a choice how simple or luxurious your lifestyle is.
                This is actually the <text className="bold">
                  same choice
                </text>{" "}
                as the number of years you will have to work. This is shown in
                the [Lifestyle] section.
                <br />
                <br />
                The Opul toolkit helps you make this decision and answer other
                questions such as:
                <br />
                <ul className="italic">
                  <li>How much wealth do I need?</li>
                  <li>When can I reach Financial Freedom? </li>
                  <li>
                    What is the trade-off between lifestyle and years worked?
                  </li>
                </ul>
              </h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to="/model">
                  <Button variant="primary" size="lg">
                    Go to model
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col xl="3" />
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
