import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});
