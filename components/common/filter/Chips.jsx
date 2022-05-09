import { Container, Form } from "react-bootstrap";
import React from "react";
import Icon, { icons } from "constants/icons";

export const Chips = ({ name, iconName, clicked }) => {
  let stayIcons = [];
  let thisIcon;

  icons.map(icon => {
    let keys = Object.keys(icon);
    if (keys.includes(iconName)) {
      stayIcons.push(icon);
      thisIcon = (
        <Icon
          icon={stayIcons.map(icon => Object.entries(icon)[0][1])}
          className="me-2"
          fontSize="16px"
        />
      );
    }
  });
  return (
    <button className="me-2 mt-3" onClick={clicked}>
      {thisIcon}
      {name}
    </button>
  );
};
