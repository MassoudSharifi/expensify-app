import { removeExpense, addExpense, editExpense } from "../../actions/expenses";
test("should  remove Expense", () => {
  const res = removeExpense({ id: "234abc" });
  expect(res).toEqual({
    type: "REMOVE_EXPENSE",
    id: "234abc"
  });
});
