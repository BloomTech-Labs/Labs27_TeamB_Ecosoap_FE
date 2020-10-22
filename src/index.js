import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { BuyerLoginPage } from './components/pages/Login/';
import { AdminLoginPage } from './components/pages/Login';
import Form from './components/common/Form';
import { HomePage } from './components/pages/Home';
import { AdminPage } from './components/pages/Home/';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import RenderHomePageAdmin from './components/pages/Home/RenderHomePageAdmin';
import RenderHomePageBuyer from './components/pages/Home/RenderHomePageBuyer';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/buyerlogin');
    history.push('/adminlogin');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/adminlogin" component={AdminLoginPage} />
        <Route path="/buyerlogin" component={BuyerLoginPage} />

        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}

        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />

        <SecureRoute
          path="/admin"
          exact
          component={() => <AdminPage LoadingComponent={LoadingComponent} />}
        />

        <SecureRoute path="/example-list" component={ExampleListPage} />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/datavis" component={ExampleDataViz} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
