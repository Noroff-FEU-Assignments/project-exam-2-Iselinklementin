import { device } from "global/ThemeConfig";
import styled from "styled-components";
import Heading from "./Heading";

export const StyledHeadingH1 = styled(Heading)`
  max-width: 200px;
  line-height: 1.3;
  font-size: 28px;

  @media ${device.tablet} {
    max-width: 500px;
    font-size: 34px;
  }
`;

export const StyledHeadingH2 = styled(Heading)`
  line-height: 1.3;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;
