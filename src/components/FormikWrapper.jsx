//libraries
import React, { useState, useEffect } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import jQuery from "jquery";
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
    .positive("Must be positive")
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
  const ValueChangeListener = () => {
    const { values } = useFormikContext();
    //formik doesn't update values if there's an error
    //this component is here to pull state out of Formik

    useEffect(() => {
      handleApiInputsChange(values);
    }, [values]);

    return null;
  };

  const ErrorListener = () => {
    const { errors } = useFormikContext();

    useEffect(() => {
      if (jQuery.isEmptyObject(errors)) {
        handleFormErrorChange(false);
      } else handleFormErrorChange(true);
    }, [errors]);

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
                  <Inputs
                  // className="paddingTopAndBottomLarge"
                  />
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

            <ValueChangeListener />
            <ErrorListener />
          </Form>
        )}
      </Formik>

      {/* <hr />

      <div>
        State: <pre>{JSON.stringify(formikState, null, 2)}</pre> IsError:{" "}
        <pre>{JSON.stringify(isError, null, 2)}</pre>{" "}
      </div> */}
    </section>
  );
};

export default FormikWrapper;