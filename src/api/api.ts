import { BACKEND } from "../shared/constants";
import { BILLS } from "../shared/db";
import { Bill } from "../models/api-model";

// api call to get all categories from db at /categories
export const getCategories = async () => {
  const response = await fetch(`${BACKEND}/categories`);
  return await response.json();
};

// api call to get all bills from db at /bills with some filtering options
// for pagination, whether isBill is true or false - based on the tab,
// sorted by name of transaction
export const getBills = async ({ isBill, page, limit }) => {
  const response = await fetch(
    `${BACKEND}/bills?_sort=name&_order=asc&isBill=${isBill}&_page=${page}&_limit=${limit}`,
  );
  return await response.json();
};

// api call to update bills when `remove` or `add` is clicked on the bill item
export const updateBill = async ({ bills, id }) => {
  const oldBill = bills.filter((bill: Bill) => bill.id === id)[0];
  const updatedBill = { ...oldBill, isBill: !oldBill.isBill };
  await fetch(`${BACKEND}/bills/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBill),
  });
};

// HOSTED

// const LOCAL_BILLS = BILLS;

// export const getCategories = async () => {
//   return LOCAL_BILLS.categories;
// };

// export const getBills = async ({ isBill, page, limit }) => {
//   const data = LOCAL_BILLS.bills
//     .filter((bill) => bill.isBill === isBill)
//     .sort((a, b) => a.name.localeCompare(b.name));

//   return data.slice(limit * (page - 1), limit * page);
// };

// const merge = (billsList, update) => {
//   LOCAL_BILLS.bills = [...billsList, update];
//   console.log(LOCAL_BILLS);
// };

// export const updateBill = async ({ bills, id }) => {
//   const billsList = LOCAL_BILLS.bills.filter((bill) => bill.id !== id);
//   const oldBill = LOCAL_BILLS.bills.filter((bill) => bill.id === id)[0];
//   const updatedBill = { ...oldBill, isBill: !oldBill.isBill };
//   merge(billsList, updatedBill);
// };
