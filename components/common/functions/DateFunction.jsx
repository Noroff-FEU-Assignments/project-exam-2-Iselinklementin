import { DATEOPTIONS } from "constants/misc";

export default function DateFunction() {
  // const options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // };

  const date = new Date().toLocaleDateString("en-GB", DATEOPTIONS);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}
