import React, { useRef } from "react";
import { Form, FormLabel } from "react-bootstrap";
import styled from "styled-components";

export const UploadLabel = styled(FormLabel)`
  border: transparent;
  background-color: ${props => props.theme.secondaryColour};
  color: ${props => props.theme.light};
  width: 230px;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem 0 1rem 0;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
`;

function FileUploader(props) {
  const hiddenFileInput = useRef(null);

  const handleChange = e => {
    const fileUploaded = e.target.files[0];
    props.setImg(URL.createObjectURL(fileUploaded));
  };

  return (
    <>
      <UploadLabel for={props.uploadBtn}>Upload image</UploadLabel>
      <Form.Control
        id={props.uploadBtn}
        type="file"
        name={props.name}
        ref={hiddenFileInput}
        onChange={handleChange}
        // style={{ display: "none" }}
      />
    </>
  );
}

export default FileUploader;
