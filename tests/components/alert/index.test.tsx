import { render, screen, waitFor } from "@testing-library/react"
import Alert from "../../../src/lib/components/alert";

describe("<Alert />", () => {
  it("should render correctly", () => {
    render(<Alert>text</Alert>);

    const alert = screen.getByText("text");
    expect(alert).toBeInTheDocument()
  })

  it("should be dismissed after 3 seconds", () => {
    render(<Alert autoDissmissTime={3000}>text</Alert>);
    const alert = screen.getByText("text");

    waitFor(() => {
      expect(alert).not.toBeInTheDocument()
    });
  })
}); 
