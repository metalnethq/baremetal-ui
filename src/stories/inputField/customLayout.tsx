import React from "react";
import "../../index.css";
import {
  InputField,
  Label,
  InputElement,
  Error,
} from "../../lib/components/inputField";

export function CustomLayout() {
  const id = "x";
  const type = "text";
  const error = ["This field is required.", "This is another error."];
  const onChange = () => {};
  const label = "Label";

  return (
    <>
      <p className="mb-10 text-blue-800 bg-blue-50 p-2 rounded">
        Please use the code from the documentation.
      </p>
      <InputField size={"lg"}>
        <div className="flex items-center">
          <Label
            htmlFor={id}
            className="mr-1 text-gray-600 pb-0"
            bold
            size={"sm"}
          >
            {label}
          </Label>
          <InputElement
            id={id}
            type={type}
            onChange={onChange}
            inputWrapperClasses=""
            inputClasses=""
          />
        </div>
        <Error size={"sm"} className="ml-10 mt-2">
          {typeof error === "string" && error}

          {Array.isArray(error) && (
            <ul>
              {error.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
        </Error>
      </InputField>
    </>
  );
}
