import React, { Component } from 'react';
import styled from 'styled-components';
import routes from './routes.js';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import NoMatch from './pages/NoMatch';
import Header from './components/Header';

// Our single Styled Component definition
const AppContaienr = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

class App extends Component {
  render() {
    return (
      <AppContaienr>
        <Header/>
        <Switch>
          {routes.map(({ path, exact, component: C}) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <C {...props}/>
                )}
              />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </AppContaienr>
    )
  }
}
export default hot(module)(App);
