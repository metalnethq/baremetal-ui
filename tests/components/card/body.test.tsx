import { render, screen } from "@testing-library/react";
import Body from "../../../src/lib/components/card/body";

describe("Card", () => {
  describe("Body", () => {
    it("renders with the provided props", () => {
      const wrapperClasses = "text-red-500";
      const tag = "h1";
      const customStyle = { color: "rgb(0, 0, 255)" };

      render(
        <Body el={tag} className={wrapperClasses} style={customStyle}>
          Body
        </Body>
      );

      const body = screen.getByText("Body");
      expect(body).toBeInTheDocument();
      expect(body.tagName).toBe(tag.toUpperCase());
      expect(body).toHaveStyle(customStyle);
      expect(body).toHaveClass(wrapperClasses);
    });
  });
});
