import { render, screen, waitFor } from "@testing-library/react"
import Alert from "../../../src/lib/components/alert";

describe("<Alert />", () => {
  it("should render correctly", () => {
    const { rerender } = render(<Alert >text</Alert>);
    const component = screen.getByText("text");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("border-bm_primary-300 bg-bm_primary-100 text-bm_primary-800");

    rerender(<Alert intent="secondary">text</Alert>);
    expect(component).toHaveClass("border-bm_secondary-300 bg-bm_secondary-100 text-bm_secondary-800");
  });

  it("should be dismissed after 3 seconds", () => {
    render(<Alert autoDissmissTime={3000}>text</Alert>);
    const alert = screen.getByText("text");

    waitFor(() => {
      expect(alert).not.toBeInTheDocument();
    });
  });
}); 
