import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@src/common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 👇 一定要添加 exact */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
      </Switch>
      <Route path={ROUTER.resume} exact>
        <Resume />
      </Route>
      {/* 重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
