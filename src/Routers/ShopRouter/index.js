import React from "react";
import { Route, Switch } from "react-router";
import { RoutePath } from "../../Commons/Constansts/RoutePath";
import Shop from "../../Pages/ShopPage";

const ShopRouter = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Shop} component={Shop} />
    </Switch>
  );
};

export default ShopRouter;
