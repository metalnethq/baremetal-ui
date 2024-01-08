import { render, screen } from "@testing-library/react";
import Alert from "../../../src/lib/components/alert";

describe("<Alert />", () => {
  it("should render correctly with variants", async () => {
    const { rerender } = render(<Alert>This is an alert</Alert>);
    const alert = screen.getByText("This is an alert");

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass(
      "border-bm_primary-300 bg-bm_primary-100 text-bm_primary-800"
    );

    rerender(
      <Alert intent="secondary" alertWeight="bold" rounded="sm">
        This is an alert
      </Alert>
    );
    expect(alert).toHaveClass(
      "border-bm_secondary-300 bg-bm_secondary-100 text-bm_secondary-800 rounded-sm font-bold"
    );
  });
});
