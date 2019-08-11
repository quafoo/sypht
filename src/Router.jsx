import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Admin from './Admin';
import Login from './pages/login';
import Home from './pages/home';
import Predict from './pages/predict';
import Documents from './pages/documents';
import NotFound from './pages/notfound';
import store from './store';

const Router = () => (
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/predict" component={Predict} />
                  <Route path="/documents" component={Documents} />
                  <Redirect to="/home" />
                  <Route component={NotFound} />
                </Switch>
              </Admin>
            )}
          />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
);

export default Router;
