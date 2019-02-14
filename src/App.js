import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Container>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </ScrollToTop>
        </Container>
      </Fragment>
    );
  }
}

export default App;
