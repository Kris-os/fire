//libraries
import React, { useEffect } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";

//my components
import Inputs from "./Inputs";
import Results from "./Results";

//other imports
import * as consts from "../Constants.js";

const initialFormikState = {
  returnAboveInflationAssumption: consts.initialReturnAssumption,
  salaryGrowthAssumption: consts.initialSalaryGrowthAssumption,
  salaryGrowthYearsAssumption: consts.initialSalaryGrowthYearsAssumption,
  statePensionAgeAssumption: consts.initialStatePensionAgeAssumption,
};

const validationSchema = Yup.object({
  age: Yup.number()
    .min(0, "Must be positive")
    .max(89, "Must be 89 or less")
    .required("Required"),
  expenditure: Yup.number().positive("Must be positive").required("Required"),
  returnAboveInflationAssumption: Yup.number()
    .positive()
    .max(8, "Must be 8 or less"),
  salaryGrowthAssumption: Yup.number()
    .min(0, "Must be positive")
    .max(10, "Must be 10 or less"),
  salaryGrowthYearsAssumption: Yup.number()
    .min(0, "Must be positive")
    .max(30, "Must be 30 or less"),
  statePensionAgeAssumption: Yup.number()
    .min(55, "Must be 55 or more")
    .max(75, "Must be 75 or less"),
  statePensionAmountAssumption: Yup.number().min(0, "Must be positive"),
});

const FormikWrapper = ({
  age,
  handleApiInputsChange,
  handleFormErrorChange,
  alternateLifestyle1,
  alternateLifestyle2,
  results,
  expenditure,
  netEarnings,
}) => {
  const AutoSubmitToken = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      var validationResult = validationSchema.validate(values);
      validationResult.then(
        function (result) {
          handleApiInputsChange(result);
        },
        function (err) {
          handleFormErrorChange();
        }
      );
    }, [values]);
    return null;
  };

  return (
    <section>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormikState}
      >
        {() => (
          <Form>
            <Container fluid>
              <Row className="align-items-start">
                <Col lg="5" className="padding30">
                  <Inputs />
                </Col>
                <Col lg="7" className="padding30">
                  <Results
                    age={age}
                    results={results}
                    expenditure={expenditure}
                    netEarnings={netEarnings}
                    alternateLifestyle1={alternateLifestyle1}
                    alternateLifestyle2={alternateLifestyle2}
                  />
                </Col>
              </Row>
            </Container>

            <AutoSubmitToken />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormikWrapper;
