import { Container, Form } from "react-bootstrap";
import React from "react";
import Icon, { icons } from "constants/icons";

export const Chips = ({ name, iconName, clicked, cssIcon, cssBtn }) => {
  let stayIcons = [];
  let thisIcon;

  icons.map(icon => {
    let keys = Object.keys(icon);
    if (keys.includes(iconName)) {
      stayIcons.push(icon);
      thisIcon = (
        <Icon
          icon={stayIcons.map(icon => Object.entries(icon)[0][1])}
          className={cssIcon}
          fontSize="16px"
        />
      );
    }
  });
  return (
    <button className={cssBtn} onClick={clicked}>
      {thisIcon}
      {name}
    </button>
  );
};

// icon: className="me-2"
// btn : className="me-2 mt-3"
