import React, { Component } from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardpage";
import AddExpansePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
const Header = () => (
  <header>
    <h1>expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact>
          home page
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          AddExpansePage
        </NavLink>
      </li>

      <li>
        <NavLink to="/help" activeClassName="is-active">
          HelpPage
        </NavLink>
      </li>
    </ul>
  </header>
);
class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpansePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
