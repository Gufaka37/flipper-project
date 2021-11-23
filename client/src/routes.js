import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ScoresPage} from "./pages/ScoresPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {AuthPage} from "./pages/AuthPage";
import {MainPage} from "./pages/mainPage/MainPage";
import {DicesPage} from "./pages/gamesPages/dicesPage/DicesPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
          <Switch>
              <Route path="/" exact>
                  <MainPage />
              </Route>
              <Route path="/games/dices" exact>
                  <DicesPage />
              </Route>
            <Route path="/scores/:id">
                <ScoresPage />
            </Route>
            <Redirect to="/404" />
          </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/games/dices" exact>
                <DicesPage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Route path="/404" exact>
                <NotFoundPage />
            </Route>
            <Redirect to="/404" />
        </Switch>
    );
}