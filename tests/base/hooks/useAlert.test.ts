import useAlert from "../../../src/lib/base/hooks/alert/useAlert";
import { renderHook, act } from "@testing-library/react-hooks";
import { vi } from "vitest";

describe("useAlert", () => {

  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should hide alert on timeout", async () => {
    const { result } = renderHook(() =>
      useAlert({
        visibilityTimeout: 3000,
      })
    );

    expect(result.current.isVisible).toBe(true);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(result.current.isVisible).toBe(false);
    vi.useRealTimers();
  });

  it("should call onTick on each second", () => {
    vi.useFakeTimers();
    const onTickMock = vi.fn();

    const { result } = renderHook(() =>
      useAlert({
        visibilityTimeout: 3000,
        onTick: onTickMock,
      })
    );

    expect(result.current.isVisible).toBe(true);
    expect(result.current.remainingTime).toBe(3000);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(onTickMock).toHaveBeenCalledTimes(2);
    expect(onTickMock).toHaveBeenCalledWith(1000);
    expect(result.current.isVisible).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onTickMock).toHaveBeenCalledTimes(3);
    expect(onTickMock).toHaveBeenCalledWith(0);
    expect(result.current.isVisible).toBe(false);
    expect(result.current.remainingTime).toBe(0);
    vi.useRealTimers();
  });

  it("should call onClosed when alert is closed", () => {
    vi.useFakeTimers();
    const onClosedMock = vi.fn();
    const { result } = renderHook(() =>
      useAlert({
        visibilityTimeout: 3000,
        onClose: onClosedMock,
      })
    );
    expect(result.current.isVisible).toBe(true);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(result.current.isVisible).toBe(false);
    expect(onClosedMock).toHaveBeenCalledTimes(1);

  });

  afterEach(() => {
    vi.useRealTimers();
  });
});
