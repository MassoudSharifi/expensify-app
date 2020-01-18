import React, { Component } from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { AdminInfo, AuthenticationInfo } from "./Plaground/hoc";
import "./styles/style.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
const store = configureStore();

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
