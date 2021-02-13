import React from "react";

function NumberInputDecimalRestricted({
  decimals,
  fireResult,
  onBlur,
  name,
  initialValue,
}) {
  NumberInputDecimalRestricted.defaultProps = {
    decimals: 0,
  };

  function onInputChange(num) {
    if (num != null && num !== "") {
      if (decimals === 0) num = Math.round(num);
      else num = Math.round(num * 10 * decimals) / (10 * decimals);
    }
    fireResult(num);
  }

  return (
    <input
      name={name}
      onBlur={onBlur}
      type="number"
      onChange={(event) => onInputChange(event.target.value)}
      value={initialValue || ""}
      step={1 / Math.pow(10, decimals)}
    />
  );
}

export default NumberInputDecimalRestricted;
