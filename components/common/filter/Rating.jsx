import Heading from "components/typography/Heading";
import Icon, { icons } from "constants/icons";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  font-size: 16px;
`;

export const Rating = ({ click }) => {
  return (
    <div className="rating-container mb-4">
      <div className="d-flex mb-3">
        <Icon icon={icons.map((icon) => icon.star)} fontSize="16px" className="me-2" />
        <StyledHeading size="3">Rating</StyledHeading>
      </div>

      <Form.Label className="d-flex" onClick={click}>
        <Form.Check type="radio" name="stars" className="me-2" />3 stars
      </Form.Label>

      <Form.Label className="d-flex" onClick={click}>
        <Form.Check type="radio" name="stars" className="me-2" />4 stars
      </Form.Label>
      <Form.Label className="d-flex" onClick={click}>
        <Form.Check type="radio" name="stars" className="me-2" />5 stars
      </Form.Label>
    </div>
  );
};
