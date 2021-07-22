import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import usersReducer from "redux/reducers/usersReducer"
import pageNumberReducer from "redux/reducers/pageNumberReducer"
import nationsReducer from "redux/reducers/nationsReducer"

const store = createStore(combineReducers({ users: usersReducer, pageNumber: pageNumberReducer, nationsArr: nationsReducer }));

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
