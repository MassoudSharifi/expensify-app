import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/style.scss";
import { AdminInfo, AuthenticationInfo } from "./Plaground/hoc";
const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(addExpense({ description: "water bill", amount: 20 }));
store.dispatch(addExpense({ description: "Gose bill", amount: 30 }));
store.dispatch(addExpense({ description: "pos bill", createdAt: 25 }));
store.dispatch(addExpense({ description: "fix bill", amount: 40 }));

class App extends Component {
  render() {
    return (
      <div>
        <AuthenticationInfo isAuthentecated={false} />
        <AdminInfo isAdmin={true} info="thera is information about" />
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
