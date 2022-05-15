import React from "react";
import Icon, { icons } from "constants/icons";

function ReturnIcon(value) {
  let stayType = value;
  switch (stayType) {
    case "Hotel":
      return <Icon icon={icons.map((icon) => icon.hotel)} fontSize="28px" className="me-3 mt-1" />;
      break;
    case "Apartment":
      return <Icon icon={icons.map((icon) => icon.apartment)} fontSize="24px" className="me-3 mt-1" />;
      break;
    case "Bed & Breakfast":
      return <Icon icon={icons.map((icon) => icon.bed)} fontSize="24px" className="me-3 mt-1" />;
      break;
  }
}

export default ReturnIcon;