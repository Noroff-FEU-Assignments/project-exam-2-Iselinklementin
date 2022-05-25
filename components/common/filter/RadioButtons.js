import React, { forwardRef, useState } from "react";
import { Form } from "react-bootstrap";
import Icon, { icons } from "../../../constants/icons";
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

export const RadioButtons = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.classList.toggle("active");

    if (value === e.value) {
      e.checked = false;
      setValue("");
      e.classList.remove("active-filter");
    }
  };

  const keywords = ["swimming_pool", "kitchen", "free_parking", "breakfast", "pet_friendly", "wifi"];

  return (
    <>
      <div className="d-flex mt-5 mb-2">
        <Icon icon={icons.map((icon) => icon.heart)} fontSize="15px" className="me-2" />
        <StyledHeading size="3">Keywords</StyledHeading>
      </div>
      {keywords.map((btnName) => {
        let removeUnderscore = btnName.replace("_", " ");
        let newBtnName = CapitalizeFirstLetter(removeUnderscore);
        return (
          <div id="radio-btns">
            <Form.Check
              type="radio"
              onChange={(e) => setValue(e.target.value)}
              name="keywords"
              value={btnName}
              ref={ref}
              onClick={(e) => {
                props.clicked(e.target);
                handleClick(e.target);
              }}
              className="me-2 mt-2"
              id="keyword-btn"
            />
            <label>{newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}</label>
          </div>
        );
      })}
    </>
  );
});
