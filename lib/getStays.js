import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../constants/api";

export async function getStays() {
  let holidaze = [];

  try {
    const response = await axios.get(API_URL);
    holidaze = response.data;
  } catch (error) {
    console.log(error);
  }
  return holidaze;
}
