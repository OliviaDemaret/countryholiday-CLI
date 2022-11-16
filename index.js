#!/usr/bin/env node

import axios from "axios";
import { getCode, getNames } from "country-list";
import chalk from "chalk";
import ora from "ora";

const country = process.argv[2];
// const spinner = ora("Loading holiday date").start();

getHoliday();

// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "Loading hol";
// }, 3000);

async function getHoliday() {
  try {
    const response = await axios.get(
      `https://date.nager.at/api/v3/publicholidays/${getYear()}/${getCountryCode()}`
    );

    for (let i = 0; i < response.data.length; i++) {
      let data = response.data[i];
      console.log(`${data.date} - ${data.localName} - ${data.name}`);
    }
  } catch (error) {
    console.error(error);
  }
}

function getYear() {
  let years = new Date().getFullYear();
  return years;
}

function getCountryCode() {
  if (typeof getCode(country) == "undefined") {
    console.log("error");
  } else {
    return getCode(country);
  }
}
