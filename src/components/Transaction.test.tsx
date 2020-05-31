import React from "react";
import { render, screen } from "@testing-library/react";

import Transaction from "./Transaction";

const TRANSACTION = [
  {
    date: "2020-05-29",
    amount: 20.99,
  },
  {
    date: "2020-05-27",
    amount: 20,
  },
];

test("testing transaction component", () => {
  const { rerender } = render(<Transaction {...TRANSACTION[0]} />);
  expect(screen.getByTestId("date").textContent).toBe("2020-05-29");
  expect(screen.getByTestId("amount").textContent).toBe("$ 20.99");

  // re-render the same component with different props
  rerender(<Transaction {...TRANSACTION[1]} />);
  expect(screen.getByTestId("date").textContent).toBe("2020-05-27");
  expect(screen.getByTestId("amount").textContent).toBe("$ 20.00");
});
