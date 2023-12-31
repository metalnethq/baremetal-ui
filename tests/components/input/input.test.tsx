import { render, screen } from "@testing-library/react";
import Input from "../../../src/lib/components/inputField";

describe("<Input />", () => {
  it("should show correct color in errors", () => {
    const error = "This is an error"
    render(<Input label="Label" intent="error" error={[error]} />);
    const errorEl = screen.getByText(error);

    expect(errorEl?.parentNode?.parentNode).toHaveClass("text-bm_danger-600");
  });
});
