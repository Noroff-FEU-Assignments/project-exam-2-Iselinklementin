import { Container, Form } from "react-bootstrap";
import React, { useRef, useState } from "react";
import Icon, { icons } from "constants/icons";
import { StyledFilter } from "./StyledFilter.styles";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";

export const Chips = ({ clicked }) => {
  const [activeButton, setActiveButton] = useState("active");
  const [filterStay, setFilterStay] = useState(true);

  const clickedButtonHandler = (btnName) => {
    setActiveButton(btnName);
    setFilterStay(true);
  };

  const checkClick = (e) => {
    if (e.name === activeButton) {
      setActiveButton("");
      setFilterStay(false);
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

  return (
    <>
      <StyledFilter onClick={clicked}>
        {buttons.map((btnName) => {
          let removeLine = btnName.replace("_", " ");
          let newBtnName = CapitalizeFirstLetter(removeLine);
          return (
            <button
              key={btnName}
              name={btnName}
              className={activeButton === btnName ? `me-2 mt-3 active` : "me-2 mt-3"}
              onClick={(e) => {
                clickedButtonHandler(btnName);
                checkClick(e.target);
              }}
            >
              {ShowIcon(btnName)}
              {newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}
            </button>
          );
        })}
      </StyledFilter>
    </>
  );
};
