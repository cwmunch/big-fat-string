"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  document.querySelector("#generate").addEventListener("click", readOptVal);
}

function readOptVal() {
  const readInput = document.querySelector("#input").value;

  const operatorInput = document.querySelector("#operator");
  const firstSpace = readInput.indexOf(" ");
  const lastSpace = readInput.lastIndexOf(" ");
  const lastPng = readInput.lastIndexOf(".");
  const lastJpg = readInput.lastIndexOf(".");
  const isPng = readInput.substring(lastPng + 1);
  const isJpg = readInput.substring(lastJpg + 1);
  const hiddenPass = "*";
  const firstAfter = readInput.indexOf("-");

  let outputResult = "";

  if (operatorInput.value === "op1") {
    outputResult = readInput.substring(0, 1).toUpperCase() + readInput.substring(1).toLowerCase();
    showOutput();
  } else if (operatorInput.value === "op2") {
    outputResult = readInput.substring(0, firstSpace);
    showOutput();
  } else if (operatorInput.value === "op3") {
    outputResult = readInput.substring(0, firstSpace).length;
    showOutput();
  } else if (operatorInput.value === "op4") {
    outputResult = readInput.substring(firstSpace + 1, lastSpace) + " " + `first letter position is: ${firstSpace} and last letter position is: ${lastSpace}`;
    showOutput();
  } else if (operatorInput.value === "op5") {
    if (isJpg === "jpg" || isPng === "png") {
      console.log("true");
      outputResult = readInput;
    } else {
      outputResult = "WRONG WRONG WRONG";
      console.log(outputResult);
    }
    showOutput();
  } else if (operatorInput.value === "op6") {
    outputResult = hiddenPass.repeat(readInput.length);
    showOutput();
  } else if (operatorInput.value === "op7") {
    const caplet = readInput.substring(0, 2).toLowerCase();
    const lowlet = readInput[2].toUpperCase();
    const rest = readInput.substring(3).toLowerCase();

    outputResult = caplet + lowlet + rest;
    showOutput();
  } else {
    /*    outputResult = readInput.substring(0, readInput.substring(readInput.indexOf("-") + 1) + readInput.substring(readInput.indexOf("-") + 1, readInput.indexOf("-") + 2).toUpperCase()) + readInput.substring(readInput.indexOf("-") + 2);
    showOutput();
    console.log("big fat conf", readInput.substring(0, readInput.indexOf("-") + 1));
    console.log("big fat confussion", readInput.substring(readInput.indexOf("-") + 1, readInput.indexOf("-") + 2).toUpperCase());
    console.log("big fat", readInput.substring(readInput.indexOf("-") + 2)); */

    const hyph = readinput.(readInput.includs("-") + 1).toUpperCase();
    console.log(hyph);
  }
  console.log(outputResult);

  function showOutput() {
    console.log(showOutput);
    document.querySelector("#output").value = outputResult.toString();
  }
}
