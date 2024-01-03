import { renderHook } from "@testing-library/react-hooks";
import useDismiss from "../../src/lib/base/hooks/alert/useDismiss";
import { waitFor } from "@testing-library/react";

describe("useDismiss", () => {
  it("should change the state on defined timeout", () => {
    const { result } = renderHook(() => useDismiss(1000))
    expect(result.current[0]).toBe(false);

    result.current[1]()
    waitFor(() => {
      expect(result.current[0]).toBe(true);
    });
  })

  it("should change the state on handleDismiss call", () => {
    const { result } = renderHook(() => useDismiss())
    result.current[1]()
    expect(result.current[0]).toBe(true);
  })
})
