import React from "react";
import { Form } from "react-bootstrap";
import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";

function Checkbox({ name }) {
  let label = "";
  let labelText = CapitalizeFirstLetter(name);

  if (labelText.includes("_")) {
    label = labelText.replace("_", " ");
  }

  return (
    <Form.Check
      className="mt-3"
      type="checkbox"
      name={name}
      label={label.length ? label : labelText}
    />
  );
}

export default Checkbox;
