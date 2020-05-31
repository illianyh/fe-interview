import React from "react";
import { render, screen } from "@testing-library/react";

import BillItem from "./BillItem";

const BILLITEM_PROPS = {
  bill: {
    categoryId: 4,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1026480580156968960/kpcHBd7s.jpg",
    id: "5a5cabd4fe33900100fd8edb",
    isBill: true,
    name: "TFL",
    transactions: [
      {
        amount: 4.99,
        date: "2018-01-22",
        id: 21,
      },
      {
        amount: 6,
        date: "2018-01-22",
        id: 22,
      },
      {
        amount: 2.34,
        date: "2018-03-10",
        id: 23,
      },
      {
        amount: 2.87,
        date: "2018-04-21",
        id: 24,
      },
      {
        amount: 4,
        date: "2018-05-02",
        id: 25,
      },
    ],
  },
  update: () => {},
  category: {
    iconUrl:
      "https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/transport.png",
    id: 4,
    name: "Transport",
  },
};

test("checking presenece of bill items", () => {
  render(<BillItem {...BILLITEM_PROPS} />);
  expect(screen.getByTestId("name").textContent).toBe(BILLITEM_PROPS.bill.name);
  expect(screen.getByTestId("transactions").textContent).toBe(
    `${BILLITEM_PROPS.bill.transactions.length}`,
  );
});
