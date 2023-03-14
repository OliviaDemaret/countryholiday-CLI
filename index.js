#!/usr/bin/env node

import axios from "axios";
import { getCode } from "country-list";

async function getHoliday(country) {
  try {
    var date = [];
    const response = await axios.get(
      `https://date.nager.at/api/v3/publicholidays/${getYear()}/${getCode(
        country
      )}`
    );

    for (let i = 0; i < response.data.length; i++) {
      let data = response.data[i];
      date.push(`${data.date} - ${data.localName} - ${data.name}`);
    }
  } catch (error) {
    console.error(error);
  }
  return date;
}

function getYear() {
  let years = new Date().getFullYear();
  return years;
}

export default getHoliday;
