import { Container } from "react-bootstrap";
import styled from "styled-components";

export const ExploreContainer = styled(Container)`
  position: absolute;
  left: 5px;
  top: 65px;
  color: ${(props) => props.theme.light};

  h2 {
    font-size: 20px;
    max-width: 220px;
    line-height: 1.4;
    margin-bottom: 2rem;
    text-shadow: 2px 3px 2px #4d4c4c88;
  }
`;
