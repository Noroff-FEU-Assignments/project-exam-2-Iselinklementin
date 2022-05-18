import styled from "styled-components";
import { device } from "global/ThemeConfig";

export const StyledCloseBtn = styled.button`
  background-color: transparent;
  border: none;
`;

export const StyledCalendar = styled.div`
  .egen-class-her {
    display: inline-block;
    margin-bottom: 1rem;
  }

  .react-datepicker__navigation {
    top: 30px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: unset;
  }

  .react-datepicker__navigation:hover {
    color: ${(props) => props.theme.primaryColour};
  }

  .react-datepicker__navigation--previous {
    right: 50px;
    left: unset;
  }

  .react-datepicker__header {
    background-color: ${(props) => props.theme.backgroundColour};
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: none;
    width: 99%;

    .react-datepicker__current-month {
      text-align: left;
      padding-left: 33px;
      font-family: "Roboto", sans-serif;
    }

    .react-datepicker__day-names {
      margin-top: 1rem;
    }
  }

  .react-datepicker__month-container,
  .egen-class-her {
    width: 100%;

    @media ${device.tablet} {
      width: 430px;
    }

    .react-datepicker__month {
    }

    .react-datepicker__week {
    }

    .react-datepicker__day--disabled {
    }

    .react-datepicker__day,
    .react-datepicker__day-name {
      line-height: 2.5rem;
      width: 12%;

      @media ${device.tablet} {
        width: 13%;
        width: 50px;
      }

      @media ${device.laptop} {
        line-height: 2.2rem;
      }

      :hover {
        background: ${(props) => props.theme.primaryColour};
        color: ${(props) => props.theme.light};
      }
    }

    .react-datepicker__day--range-start {
    }

    .react-datepicker__day--in-selecting-range {
      background: pink;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--range-start,
    .react-datepicker__day--in-range,
    .react-datepicker__day--keyboard-selected {
      background: ${(props) => props.theme.secondaryColour};
    }
  }
`;
