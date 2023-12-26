import Label from "../../../src/lib/components/inputField/label";
import { screen, render } from "@testing-library/react";

describe("InputField", () => {
  describe("Label", () => {
    it("it renders correctly", () => {
      const errorMessage = "Test";
      const style = { background: "rgb(0, 0, 0)" };
      const largeTextClass = "text-lg";

      render(
        <Label htmlFor="id" intent="primary" size="lg" style={style} bold>
          {errorMessage}
        </Label>
      );

      const label = screen.getByText(errorMessage);

      expect(label).toBeInTheDocument();
      expect(label).toHaveClass(largeTextClass);
      expect(label).toHaveStyle(style);
      expect(label).toHaveClass("font-bold");
    });
  });
});
