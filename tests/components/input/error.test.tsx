import Error from "../../../src/lib/components/inputField/error";
import { screen, render } from "@testing-library/react";
describe("InputField", () => {
  describe("Error", () => {
    it("it renders correctly", () => {
      const errorMessage = "Test";
      const primaryClassName = "text-bm_primary-600";
      const style = { background: "rgb(0, 0, 0)" };
      const largeTextClass = "text-lg";

      render(
        <Error intent="primary" size="lg" style={style}>
          {errorMessage}
        </Error>
      );

      const error = screen.getByText(errorMessage);

      expect(error).toBeInTheDocument();
      expect(error).toHaveClass(largeTextClass);
      expect(error).toHaveClass(primaryClassName);
      expect(error).toHaveStyle(style);
    });
  });
});
