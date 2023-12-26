import Footer from "../../../src/lib/components/card/footer";

import { render, screen } from "@testing-library/react";

describe("Card", () => {
  describe("Footer", () => {
    it("renders correctly", () => {
      const customStyle = { backgroundColor: "rgb(0, 0, 255)" };
      const wrapperClass = "customWrapperClass";

      render(
        <Footer el="span" wrapperClassName={wrapperClass} style={customStyle}>
          Footer
        </Footer>
      );
      const footer = screen.getByText("Footer");

      expect(footer).toBeInTheDocument();
      expect(screen.getByText("Footer")?.tagName).toBe("SPAN");
      expect(footer).toHaveClass(wrapperClass);
      expect(footer).toHaveStyle(customStyle);
    });

    it("renders with the provided props", () => {
      const wrapperClasses = "wrapperClasses";
      const actionWrapperClasses = "actionWrapperClasses";

      render(
        <Footer
          wrapperClassName={wrapperClasses}
          actionWrapperClassName={actionWrapperClasses}
          actions={<>Actions</>}
        >
          Footer
        </Footer>
      );

      const footer = screen.getByText("Footer");
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveClass(wrapperClasses);

      const actions = screen.getByText("Actions");
      expect(actions).toBeInTheDocument();
      expect(actions.parentElement).toHaveClass(actionWrapperClasses);
    });

    it("toggles bordered actions", () => {
      const actions = [
        ...Array(3)
          .fill(null)
          .map((_, i) => <div key={i}>Action {i}</div>),
      ];

      const { rerender } = render(
        <Footer actions={actions} align="left">
          Footer
        </Footer>
      );

      let action1 = screen.getByText("Action 0");

      expect(action1).toBeInTheDocument();
      expect(action1.parentElement?.parentElement).toHaveClass("justify-start");
      expect(action1.parentElement).toHaveClass("mr-2");

      rerender(
        <Footer actions={actions} bordered>
          Footer
        </Footer>
      );

      action1 = screen.getByText("Action 1");
      expect(action1).toBeInTheDocument();
      expect(action1.parentElement).toHaveClass(
        "justify-center",
        "items-center"
      );
    });
  });
});
