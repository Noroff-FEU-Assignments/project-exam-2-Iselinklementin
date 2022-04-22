import React from "react";

function DateFunction() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = new Date().toLocaleDateString("en-GB", options);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}

export default DateFunction;
