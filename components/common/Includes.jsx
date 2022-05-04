import React from "react";
import CapitalizeFirstLetter from "./functions/CapitalizeFirstLetter";
import Icon, { icons } from "lib/icons";
import { Col, Row } from "react-bootstrap";
import Paragraph from "components/typography/Paragraph";

// Find icons

export function FindIcons({ includes, iconIncludes }) {
  let stayIcons = [];

  icons.map((icon) => {
    let keys = Object.keys(icon);
    if (includes && keys.includes(iconIncludes)) {
      stayIcons.push(icon);
    }
  });
  return <Icon icon={stayIcons.map((icon) => Object.entries(icon)[0][1])} className="me-2" fontSize="16px" />;
}

// This stay includes

function Includes(props) {
  let includes = Object.entries(props.stay);

  return (
    <Row xs={2} className="g-1 gy-2 mt-2">
      {includes.map((include) => {
        let thisIncludes = include[0].replace("_", " ");
        let date = [];

        // If its check in or checkout, its needs to
        // show the time too.

        if (typeof include[1] === "string") {
          let checkInOut = include[0].replace("_", " ");
          let checkin_out = checkInOut + " : " + include[1];
          date.push(CapitalizeFirstLetter(checkin_out));
        }

        return include[1] ? (
          <Col className="d-flex align-items-center">
            <FindIcons includes={include[1]} iconIncludes={include[0]} />
            <Paragraph className="m-0">{date.length ? date : CapitalizeFirstLetter(thisIncludes)}</Paragraph>
          </Col>
        ) : (
          ""
        );
      })}
    </Row>
  );
}

export default Includes;
