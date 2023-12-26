import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Text from "../../../src/lib/components/text";

describe("Text", () => {
  it("should render correctly", async () => {
    const text = "This is text";
    const { rerender } = render(<Text el="p">{text}</Text>);

    screen.getByText(text);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveClass("text-base");

    rerender(
      <Text el="p" intent="secondary" weight="bold">
        {text}
      </Text>
    );

    expect(screen.getByText(text)).toHaveClass("text-bm_gray-600 font-bold");

    rerender(
      <>
        <Text el="label" htmlFor="id" intent="primary" weight="light">
          {text}
        </Text>
        <input id="id" />
      </>
    );

    const input = screen.getByLabelText(text);
    const label = screen.getByText(text);

    expect(input).toBeInTheDocument();
    userEvent.click(label);
    // I am not sure why focus is not instantaneously set.
    // So I had to use waitFor.
    await waitFor(() => expect(input).toHaveFocus());

    rerender(<Text el="h1">{text}</Text>);

    expect(screen.getByText(text)).toHaveClass("text-4xl");
  });
});
