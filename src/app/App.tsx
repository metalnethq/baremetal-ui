import "./App.css";

import React from "react";
import { Label, InputField, Error } from "../../dist";

function App() {
  return (
    <>
      <InputField>
        <Label htmlFor="id">First Name</Label>
        <input id="id" />
        <Error>error</Error>
      </InputField>
    </>
  );
}

export default App;
