import React, { forwardRef, useState } from "react";
import Icon, { icons } from "../../../constants/icons";
import { StyledFilter } from "./StyledFilter.styled";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import styled from "styled-components";
import Heading from "../../../components/typography/Heading";
import { mediaQ } from "../../../styles/global/ThemeConfig";

const StyledHeading = styled(Heading)`
  font-size: 16px;

  @media ${mediaQ.desktop_large} {
    font-size: 18px;
  }
`;

export const Chips = forwardRef((props, ref) => {
  const clickedButtonHandler = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  let stayIcons = "";

  /* Nå er ikke ikonene koblet opp, kan fjernes hvis jeg ikke fikser (med funksjonen) */
  /* {ShowIcon(btnName)} */

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
        name={Object.entries(stayIcons)[0]}
        fontSize="16px"
        className="me-2"
      />
    );
  };

  const stays = ["bed", "apartment", "hotel"];

  return (
    <>
      <StyledFilter className="mt-5 mt-md-0 ms-md-5">
        <div className="filter-tablet">
          <div className="d-flex mt-5 mb-1">
            <Icon icon={icons.map((icon) => icon.heart)} fontSize="15px" className="me-2" />
            <StyledHeading size="3">Type of stay</StyledHeading>
          </div>

          {stays.map((btnName) => {
            let removeUnderscore = btnName.replace("_", " ");
            let newBtnName = CapitalizeFirstLetter(removeUnderscore);
            return (
              <button
                key={btnName}
                name={btnName}
                ref={ref}
                onClick={(e) => {
                  clickedButtonHandler(e, btnName);
                  props.clicked(e.target);
                }}
                className="me-2 mt-2"
              >
                {newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}
              </button>
            );
          })}
        </div>
      </StyledFilter>
    </>
  );
});
