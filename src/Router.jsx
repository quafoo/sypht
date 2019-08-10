import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/login';
// import Home from './pages/home';
import Predict from './pages/predict';
import Documents from './pages/documents';
import NotFound from './pages/notfound';

const Router = () => (
  <HashRouter>
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() => (
            <Admin>
              <Switch>
                {/* <Route path="/home" component={Home} /> */}
                <Route path="/predict" component={Predict} />
                <Route path="/documents" component={Documents} />
                <Redirect to="/documents" />
                <Route component={NotFound} />
              </Switch>
            </Admin>
          )}
        />
      </Switch>
    </App>
  </HashRouter>
);

export default Router;
