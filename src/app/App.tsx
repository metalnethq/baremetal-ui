import "./App.css";

import React from "react";
import { InputLabel, InputField, InputError } from "../../dist";

function App() {
  return (
    <>
      <InputField>
        <InputLabel htmlFor="id">First Name</InputLabel>
        <input id="id" />
        <InputError>error</InputError>
      </InputField>
    </>
  );
}

export default App;
