import React from "react";
import "./App.css";
import MaskedInput from "react-text-mask";
import styled from "styled-components";

export default () => (
  <MaskedInput
    mask={[
      "(",
      /[1-7]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]}
    placeholder="Enter a phone number"
    id="my-input-id"
  />
);
