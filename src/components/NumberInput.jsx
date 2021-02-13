import React from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import NumberInputDecimalRestricted from "./NumberInputDecimalRestricted";

const NumberInput = ({ fieldName, decimals }) => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field, form: { values, setFieldValue } }) => (
      <div>
        {/* <label htmlFor={fieldName} className={"label-color"}>
          {fieldName}
        </label> */}
        <div>
          <NumberInputDecimalRestricted
            initialValue={values[fieldName]}
            name={fieldName}
            {...field}
            decimals={decimals}
            fireResult={(number) => setFieldValue(fieldName, number)}
          />
          <div className="error">
            <ErrorMessage name={fieldName} />
          </div>
        </div>
      </div>
    )}
  </Field>
);

export default NumberInput;
