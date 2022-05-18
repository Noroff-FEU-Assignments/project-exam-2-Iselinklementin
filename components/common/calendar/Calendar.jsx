import Icon, { icons } from "constants/icons";
import { CALENDAR_OPTIONS } from "constants/misc";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

const StyledCalendar = styled.div`
  .egen-class-her {
    width: 600px;
    display: inline-block;
    /* border: red solid thin; */
  }

  .react-datepicker__navigation {
    /* border: red solid thin; */
    top: 30px;
    /* color: ${(props) => props.theme.body}; */
  }

  .react-datepicker__navigation-icon::before {
    border-color: unset;
  }

  .react-datepicker__navigation:hover {
    color: ${(props) => props.theme.primaryColour};
  }

  .react-datepicker__navigation--previous {
    /* border: blue solid thin; */
    right: 50px;
    left: unset;
  }

  .react-datepicker__header {
    background-color: ${(props) => props.theme.backgroundColour};
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: none;

    .react-datepicker__current-month {
      /* border: blue solid thin; */
      text-align: left;
      padding-left: 33px;
      font-family: "Roboto", sans-serif;
    }

    .react-datepicker__day-names {
      margin-top: 1rem;
    }
  }

  .react-datepicker__month-container {
    width: 100%;
    .react-datepicker__month {
      /* border: green solid thin; */
    }

    .react-datepicker__week {
    }

    .react-datepicker__day--disabled {
    }

    .react-datepicker__day,
    .react-datepicker__day-name {
      width: 4.7rem;
      line-height: 2.5rem;

      :hover {
        background: ${(props) => props.theme.primaryColour};
        color: ${(props) => props.theme.light};
      }
    }

    .react-datepicker__day--range-start {
      border: coral thin solid;
    }

    .react-datepicker__day--in-selecting-range {
      background: pink;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--range-start,
    .react-datepicker__day--in-range {
      background: ${(props) => props.theme.secondaryColour};
    }
  }

  /* .react-datepicker-popper[data-placement^="bottom"] {
    border: green solid thin;
  } */

  /* .date-picker-field__range {
    background-color: red !important;
  }

  .date-picker-field__active--start {
    background-color: red !important;
  }

  .date-picker-field__active--end {
    background-color: red !important;
  }

  .date-picker-field__active {
    background-color: blue !important;
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__year-text--in-selecting-range {
    background-color: transparent;
    color: black;
  } */
`;

export const Calendar = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const testClick = () => {
    console.log(dateRange);
  };

  const clicked = () => {
    console.log("");
  };

  // mnd, dag, år
  // const booked = [new Date("07/06/2022"), new Date("06/05/2022")];
  const booked = [
    {
      start: new Date("06/24/2022"),
      end: new Date("06/28/2022"),
    },
    {
      start: new Date("06/06/2022"),
      end: new Date("06/11/2022"),
    },
    {
      start: new Date("07/15/2022"),
      end: new Date("07/22/2022"),
    },
  ];

  // const setDates = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  //   console.log(startDate);
  //   console.log(endDate);
  // };

  // let startFormatted = RemoveLastWord(startDate.toLocaleDateString("en-GB", DATEOPTIONS));
  let startDateFormatted = startDate ? startDate.toLocaleDateString("en-GB", CALENDAR_OPTIONS).replace(",", "") : "";
  let endDateFormatted = endDate ? endDate.toLocaleDateString("en-GB", CALENDAR_OPTIONS).replace(",", "") : "";

  return (
    <StyledCalendar>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        selectsRange
        fixedHeight={true}
        // onChange={setDates}
        inline
        calendarClassName="egen-class-her"
        isClearable={true}
        onChange={(update) => {
          setDateRange(update);
          testClick;
        }}
        minDate={new Date()}
        excludeDateIntervals={booked}
        // locale="en-GB"
        // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        // selectsDisabledDaysInRange={false}
        // dayClassName={(date) => (getDate(date) < Math.random() * 31 ? "random" : undefined)}
      />
      <div className="position-relative">
        <input type="text" value={startDateFormatted} />
        <input type="text" value={endDateFormatted} />
        <button type="button" aria-label="Close" onClick={clicked}>
          <Icon icon={icons.map((icon) => icon.close)} />
        </button>
      </div>

      {/* <p>{startDate ? startDate : ""}</p>
      <p>{endDate ? endDate : ""}</p> */}
    </StyledCalendar>
  );
};
