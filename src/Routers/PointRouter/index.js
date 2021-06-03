import React from "react";
import { Route, Switch } from "react-router";
import { RoutePath } from "../../Commons/Constansts/RoutePath";
import Point from "../../Pages/PointPage";

const PointRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Point} component={Point} />
    </Switch>
  );
};

export default PointRouter;
