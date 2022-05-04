import React from "react";
import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";
import Icon, { icons } from "lib/icons";

// Find icons

export function FindIcons({ includes, iconIncludes }) {
  let stayIcons = [];

  icons.map((icon) => {
    let keys = Object.keys(icon);
    if (includes && keys.includes(iconIncludes)) {
      stayIcons.push(icon);
    }
  });
  return <Icon icon={stayIcons.map((icon) => Object.entries(icon)[0][1])} className="me-2" />;
}

// This stay includes

function Includes(props) {
  let includes = Object.entries(props.stay);

  return (
    <>
      {includes.map((include) => {
        let thisIncludes = include[0].replace("_", " ");
        return include[1] ? (
          <div className="d-flex mt-2">
            <FindIcons includes={include[1]} iconIncludes={include[0]} />
            <span className="me-2">{CapitalizeFirstLetter(thisIncludes)} </span>
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
}

export default Includes;
