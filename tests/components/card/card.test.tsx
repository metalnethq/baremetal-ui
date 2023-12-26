import Card from "../../../src/lib/components/card";
import { screen, render } from "@testing-library/react";

describe("Card", () => {
  it("renders correctly with props", () => {
    const customStyle = { backgroundColor: "rgb(0, 0, 255)" };
    const wrapperClass = "customWrapperClass";
    const actions = [...Array(3)].map((_, i) => <div key={i}>div {i}</div>);
    const title = "Card Title";

    const { rerender } = render(
      <Card
        className={wrapperClass}
        style={customStyle}
        actions={actions}
        title={title}
      >
        Card
      </Card>
    );
    const card = screen.getByText("Card").parentElement;

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass(wrapperClass);
    expect(card).toHaveStyle(customStyle);

    const action = screen.getByText("div 0");
    expect(action).toBeInTheDocument();

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    rerender(<Card loading={true} />);
    const shimmerLoader = screen.getByTestId("shimmer-loader");
    expect(shimmerLoader).toBeInTheDocument();
  });

  it("renders with provided classes and styles", () => {
    const headerWrapperClasses = "headerWrapperClass";
    const headerStyles = { backgroundColor: "rgb(0, 0, 255)" };
    const bodyStyles = { backgroundColor: "rgb(0, 0, 255)" };
    const footerWrapperClassName = "footerWrapperClass";
    const footerStyles = { backgroundColor: "rgb(0, 0, 255)" };
    const title = "title";
    const actions = [...Array(3)].map((_, i) => <div key={i}>div {i}</div>);

    render(
      <Card
        headerWrapperClassName={headerWrapperClasses}
        headerStyle={headerStyles}
        bodyStyle={bodyStyles}
        footerWrapperClassName={footerWrapperClassName}
        footerStyle={footerStyles}
        actions={actions}
        title="title"
        actionAlignment="right"
        borderedActions={false}
      />
    );

    const actionsWrapper =
      screen.getByText("div 0").parentElement?.parentElement?.parentElement;

    expect(actionsWrapper).toHaveClass(footerWrapperClassName);
    expect(actionsWrapper).toHaveStyle(footerStyles);
    expect(screen.getByText("div 0").parentElement?.parentElement).toHaveClass(
      "justify-end"
    );

    const titleElement = screen.getByText(title).parentElement;
    expect(titleElement).toHaveClass(headerWrapperClasses);
    expect(titleElement?.firstChild).toHaveStyle(headerStyles);
  });
});
