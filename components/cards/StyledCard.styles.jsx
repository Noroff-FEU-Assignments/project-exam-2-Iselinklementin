import styled from "styled-components";
import { Card } from "react-bootstrap";
import { device } from "global/ThemeConfig";

export const StyledCard = styled(Card)`
  border: none;
  cursor: pointer;
  min-height: 400px;

  @media ${device.tablet} {
    min-height: 375px;
  }

  .card-title {
    font-family: ${(props) => props.theme.secondaryFont};
    font-weight: 600;
  }

  .card-body {
    padding: 20px;
    background: ${(props) => props.theme.secondaryColour};
    color: ${(props) => props.theme.light};
    border-radius: 0px 0px 8px 8px;
    font-size: 14px;
  }

  .card-img {
    border-radius: 8px 8px 0px 0px;
  }

  .badge {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  .rating-container {
    //
  }
`;
