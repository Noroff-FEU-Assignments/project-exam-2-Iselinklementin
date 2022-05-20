import Alertbox from "components/common/alert/AlertBox";
import Icon, { icons } from "constants/icons";
import { StyledFeedbackContainer } from "./Form.styles";

export const ValidationError = ({ errorName }) => {
  return (
    <StyledFeedbackContainer>
      <Icon icon={icons.map((icon) => icon.error)} color="#D11117" fontSize="18px" className="warning-icon" />
      <Alertbox className="mt-2">{errorName}</Alertbox>
    </StyledFeedbackContainer>
  );
};
