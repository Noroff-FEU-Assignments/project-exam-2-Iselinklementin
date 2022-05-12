import { device } from "global/ThemeConfig";
import styled from "styled-components";

export const StyledIconWrap = styled.div`
  position: relative;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100vw;
  background: ${(props) => props.theme.primaryColour};
  color: white;

  @media ${device.tablet} {
    max-width: 720px;
    padding: 0 1rem;
    margin: auto;
    color: ${(props) => props.theme.body};
    background: ${(props) => props.theme.backgroundColour};
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  input {
    padding-left: 38px;
    border: none;

    @media ${device.tablet} {
      border: ${(props) => props.theme.primaryColour} solid thin;
    }
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.body};
    opacity: 0.8;
  }

  .search-icon {
    position: absolute;
    bottom: -1.6rem;
    left: 0.6rem;
  }
`;

export const StyledWideContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const StyledButtonContainer = styled.div`
  border-left: solid thin grey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 1.5rem;
  height: 40px;
  margin-left: 1rem;
  padding-left: 1rem;

  a {
    height: 40px;
    line-height: 2;
    width: 165px;

    svg {
      margin-top: 5px;
    }
  }
`;
