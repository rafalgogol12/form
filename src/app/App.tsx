import * as React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from '../navigation/Routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;