import { createRef } from "react";
import Input from "../../../src/lib/components/inputField/inputElement";
import { screen, render } from "@testing-library/react";

describe("InputElement", () => {
  it("should render correctly", () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input id="id" inputRef={ref} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    ref.current?.focus();
    expect(ref.current).toHaveFocus();
    ref.current?.blur();
    expect(ref.current).not.toHaveFocus();
  });
});
