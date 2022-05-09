import React from "react";
import { Form } from "react-bootstrap";
import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";

function Checkbox({ labelName }) {
  // let label = "";
  // let labelText = CapitalizeFirstLetter(labelName);

  // if (labelText.includes("_")) {
  //   label = labelText.replace("_", " ");
  // }

  return (
    <Form.Check
      className="mt-3"
      type="checkbox"
      // name={name}
      // label={label.length ? label : labelText}
      label={labelName}
    />
  );
}

export default Checkbox;

// return (
//   <>
//     <input className="mt-3" type="checkbox" name={name} />
//     <label htmlFor={name}>{label.length ? label : labelText}</label>
//   </>
// );
