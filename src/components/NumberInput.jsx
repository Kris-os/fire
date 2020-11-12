import React, { useState } from "react";
import NumericInput from "react-numeric-input";

function NumberInput(props) {
  const [value, setValue] = useState(props.initialValue);

  function onInputChange(event) {
    var num = event;
    if (num != null) num = num.toFixed(props.precision);
    if (num != null && num > props.max) num = props.max;
    if (num != null && num < props.min) num = props.min;
    setValue(num);
    props.updateState(props.id, num);
  }

  return (
    <NumericInput
      className="form-control"
      id={props.id}
      min={props.min}
      max={props.max}
      onChange={onInputChange.bind(this)}
      precision={props.precision}
      value={value}
      step={props.step}
      style={false}
      snap
    />
  );
}

export default NumberInput;
