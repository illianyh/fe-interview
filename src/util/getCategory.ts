// helper function for filtering out category for each item rendered to the page
// called from ../components/BillList
export const getCat = ({ categories, categoryId }) => {
  return categories.filter((cat) => cat.id === categoryId)[0];
};
