import React, { useState } from "react";

function NumberInputDecimalRestricted({ decimals, fireResult }) {
  const [value, setValue] = useState("");

  function onInputChange(num) {
    if (num != null) num = Math.round(num * 10 * decimals) / 10;
    setValue(num);
    fireResult(num);
  }

  return (
    <input
      type="number"
      onChange={(event) => onInputChange(event.target.value)}
      value={value}
      step={0.1}
    />
  );
}

export default NumberInputDecimalRestricted;
