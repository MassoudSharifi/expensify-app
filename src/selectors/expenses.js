import moment from "moment";

export default (expenses, { startDate, endDate, sortBy, text }) => {
  return expenses
    .filter(expense => {
      const createMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createMoment, "day")
        : true;

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createMoment, "day")
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? 1 : -1;
      }
    });
};
