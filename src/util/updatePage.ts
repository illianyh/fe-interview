// updating current page through cb function passed down from ../components/BillList
export const updatePage = ({ type, bills, limit, page }, cb) => {
  switch (type) {
    case "next":
      if (bills.length < limit) return false;
      else {
        cb((prev: number) => prev + 1);
        return true;
      }
    case "prev":
      if (page === 1) return;
      cb((prev: number) => prev - 1);
      break;
    default:
      cb(1);
  }
};
