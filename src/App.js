import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ScrollToTop from './components/global/ScrollToTop';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/global/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </ScrollToTop>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
