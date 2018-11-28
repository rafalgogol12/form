import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from '../utils/globals';

import Header from '../header/Header';
import Form from '../form/container/Form';
import ConfirmForm from "../common/confirmForm";

export default class Routes extends React.Component {
  render() {
    const route = [
      {
        component: Form,
        path: PATH.ROOT
      },
      {
        component: ConfirmForm,
        path: PATH.CONFIRM
      }
    ];

    const routes = () => route.map((route, index) => {
      return <Route exact path={route.path} component={route.component} key={index} />;
    });

    return (
      <div className="app">
        <Header />
        <div className="app__content" role="main">
          <Switch>
            {routes()}
          </Switch>
        </div>
      </div>
    );
  }
}