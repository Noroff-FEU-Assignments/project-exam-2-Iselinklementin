import axios from "axios";
import { CONTACT_URL } from "constants/api";

export async function getMessages() {
  let message = [];

  try {
    const response = await axios.get(CONTACT_URL);
    message = response.data;
  } catch (error) {
    console.log(error);
  }
  return message;
}
