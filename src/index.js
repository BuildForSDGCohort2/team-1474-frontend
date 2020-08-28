/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './Pages/Home';
import ResetPassword from './Pages/ResetPassword';
import './Assets/Styles/App.scss';
import Dashboard from './Pages/Dashboard';
import CreateLand from './Pages/CreateLand';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/reset-password" render={(props) => (<ResetPassword props={props} />)} />
      <Route path="/dashboard" render={(props) => (<Dashboard props={props} />)} />
      <Route path="/lands/create" render={(props) => (<CreateLand props={props} />)} />

      <Route path="/" render={(props) => (<Home props={props} />)} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
