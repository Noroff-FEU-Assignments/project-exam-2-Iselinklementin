import React from "react";
import { Form } from "react-bootstrap";
import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";

function Checkbox({ name }) {
  let Thistext = "";
  let labelText = CapitalizeFirstLetter(name);

  if (labelText.includes("_")) {
    Thistext = labelText.replace("_", " ");
  }

  return (
    <Form.Check
      className="mt-3"
      type="checkbox"
      name={name}
      label={Thistext.length ? Thistext : labelText}
    />
  );
}

export default Checkbox;
