import axios from "axios";
import { CONTACT_URL } from "constants/api";

export async function getMessages() {
  let messages = [];

  try {
    const response = await axios.get(CONTACT_URL);
    messages = response.data;
  } catch (error) {
    console.log(error);
  }
  return messages;
}
