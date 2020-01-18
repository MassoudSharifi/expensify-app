import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
test("should setUp remove action", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});
test("should edit the the expense", () => {
  const action = editExpense("456abc", { note: "new not value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "456abc",
    update: {
      note: "new note value"
    }
  });
});
