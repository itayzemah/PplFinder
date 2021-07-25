import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import favoriteUsersReducer from "redux/reducers/favoriteUsersReducer"
import pageNumberReducer from "redux/reducers/pageNumberReducer"
import nationsReducer from "redux/reducers/nationsReducer"
import countryReducer from "redux/reducers/countryReducer"

const store = createStore(combineReducers({
  favoritesUsers: favoriteUsersReducer,
  pageNumber: pageNumberReducer,
  nationsArr: nationsReducer,
  countriesArr: countryReducer
}));

const AppRouter = () => {

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
