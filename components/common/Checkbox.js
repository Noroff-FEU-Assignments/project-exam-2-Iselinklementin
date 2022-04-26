import React from "react";

function Checkbox({ name, upper }) {
  return (
    <>
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{upper}</label>
    </>
  );
}

export default Checkbox;
