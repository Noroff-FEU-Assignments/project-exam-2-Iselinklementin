import React from "react";
import Icon, { icons } from "constants/icons";
import { Container, Form } from "react-bootstrap";
import Paragraph from "components/typography/Paragraph";

function FilterSearch({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default FilterSearch;

{
  /* <Container>
<div className="d-flex py-4">
  <Icon icon={icons.map(icon => icon.star)} className="me-2" fontSize="18px" />
  <Paragraph>Rating</Paragraph>
</div>
<div></div>
</Container>
<Container className="py-4">
<div className="d-flex">
  <Icon icon={icons.map(icon => icon.heart)} className="me-2 " fontSize="14px" />
  <Paragraph>Keywords</Paragraph>
</div>
<div></div>
</Container> */
}
