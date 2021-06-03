import React from "react";
import { Route, Switch } from "react-router";
import { RoutePath } from "../../Commons/Constansts/RoutePath";
import Home from "../../Pages/HomePage";

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Home} component={Home} />
    </Switch>
  );
};

export default HomeRouter;
