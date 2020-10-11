import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoardListComponent from "../board/BoardListComponent";
import BoardDetailComponent from "../board/BoardDetailComponent";
import BoardWriteComponent from "../board/BoardWriteComponent";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/board" component={BoardListComponent} />
          <Route path="/board/write" component={BoardWriteComponent} />
          <Route path="/board/:boardIdx" component={BoardDetailComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
