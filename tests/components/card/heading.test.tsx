import { render, screen } from "@testing-library/react";
import Heading from "../../../src/lib/components/card/heading";

describe("Card", () => {
  describe("Heading", () => {
    it("renders with the provided props", () => {
      const wrapperClasses = "text-red-500";
      const tag = "h1";
      const customStyle = { color: "rgb(0, 0, 255)" };

      render(
        <Heading
          el={tag}
          wrapperClassName={wrapperClasses}
          style={customStyle}
          wrapperStyle={customStyle}
        >
          Heading
        </Heading>
      );

      const heading = screen.getByText("Heading");
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe(tag.toUpperCase());
      expect(heading.parentElement).toHaveClass(wrapperClasses);
      expect(heading).toHaveStyle(customStyle);
      expect(heading.parentElement).toHaveStyle(customStyle);
    });
  });
});
