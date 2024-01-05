import { render, screen, waitFor } from "@testing-library/react"
import Alert from "../../../src/lib/components/alert";

describe("<Alert />", () => {
  it("should render correctly", async () => {
    render(<Alert>Alert</Alert>);
    await waitFor(() => {
      expect(screen.getByText("Alert")).toBeInTheDocument();
    });
  });
}); 
