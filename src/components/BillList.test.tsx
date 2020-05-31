import React from "react";
import { render, screen } from "@testing-library/react";

import BillList from "./BillList";

test("checking presenece of tabs and nav buttons", () => {
  render(<BillList />);
  expect(screen.getByTestId("tab-icon-payment")).toBeTruthy();
  expect(screen.getByTestId("tab-icon-receipt")).toBeTruthy();
  expect(screen.getByTestId("prev-page")).toBeTruthy();
  expect(screen.getByTestId("next-page")).toBeTruthy();
});
