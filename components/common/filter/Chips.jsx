import { Container, Form } from "react-bootstrap";
import React, { useRef, useState } from "react";
import Icon, { icons } from "constants/icons";
import { StyledFilter } from "./StyledFilter.styles";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import styled from "styled-components";
import Heading from "components/typography/Heading";

export const Chips = ({ clicked }) => {
  const [activeButton, setActiveButton] = useState([]);
  const [filterStay, setFilterStay] = useState(false);

  const clickedButtonHandler = (btnName) => {
    activeButton.push(btnName);
    setActiveButton(activeButton);
    setFilterStay(true);
  };

  console.log("dette er activeButton, utenfor ANDRE: " + activeButton);

  const checkClick = (e) => {
    if (e.name === activeButton) {
      // setActiveButton([]);
      // setFilterStay(false);
    }
  };

  let stayIcons = "";

  const ShowIcon = (btnName) => {
    icons.map((icon) => {
      let keys = Object.keys(icon);
      if (keys.includes(btnName)) {
        stayIcons = icon;
      }
    });

    return (
      <Icon
        icon={Object.entries(stayIcons)[0][1]}
        fontSize="16px"
        color={Object.entries(stayIcons)[0][0] === activeButton ? "white" : "black"}
        className="me-2"
      />
    );
  };

  const buttons = [
    "swimming_pool",
    "bed",
    "hotel",
    "kitchen",
    "free_parking",
    "breakfast",
    "apartment",
    "pet_friendly",
  ];

  const StyledHeading = styled(Heading)`
    font-size: 16px;
  `;

  return (
    <>
      <StyledFilter onClick={() => ({ clicked })} className="mt-5 mt-md-0 ms-md-5">
        <div className="filter-tablet">
          <div className="d-flex mb-3">
            <Icon icon={icons.map((icon) => icon.heart)} fontSize="15px" className="me-2" />
            <StyledHeading size="3">Keywords</StyledHeading>
          </div>
          {buttons.map((btnName) => {
            let removeLine = btnName.replace("_", " ");
            let newBtnName = CapitalizeFirstLetter(removeLine);
            return (
              <button
                key={btnName}
                name={btnName}
                className={activeButton === btnName ? `me-2 mt-2 active` : "me-2 mt-2"}
                onClick={(e) => {
                  clickedButtonHandler(btnName);
                  // checkClick(e.target);
                  return activeButton;
                }}
              >
                {ShowIcon(btnName)}
                {newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}
              </button>
            );
          })}
        </div>
        {filterStay ? "" : "no"}
      </StyledFilter>
    </>
  );
};
