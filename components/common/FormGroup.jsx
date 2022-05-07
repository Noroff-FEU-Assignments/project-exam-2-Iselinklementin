// import React from "react";
// import Icon, { icons } from "constants/icons";
// import { Form } from "react-bootstrap";
// import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";

// function FormGroup({ name }) {
//   let label = "";
//   let labelText = CapitalizeFirstLetter(name);

//   if (labelText.includes("_")) {
//     label = labelText.replace("_", " ");
//   }
//   return (
//     <Form.Group className="mt-3">
//       <div className="d-flex align-items-center">
//         <Icon icon={icons.map(icon => icon.price)} fontSize="20px" className="me-3" />
//         <Form.Control
//           name={name}
//           label={name}
//           type="text"
//           placeholder={label.length ? label : labelText}
//         />
//       </div>
//     </Form.Group>
//   );
// }

// export default FormGroup;
