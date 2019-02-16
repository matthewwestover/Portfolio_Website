import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';
import ScrollToTop from './components/global/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import NoMatch from './components/NoMatch';
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer';
import MobileHome from './mobile/MobileHome';
import './App.css';

class App extends React.Component {

  renderContent = () => {
    if (isMobile) {
      return(
        <Fragment>
          <Route exact path='/' component={MobileHome} />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Navbar />
          <Container fluid>
            <ScrollToTop>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/experience' component={Experience} />
                <Route component={NoMatch} />
              </Switch>
            </ScrollToTop>
          </Container>
          <Footer />
        </Fragment>
      )
    }
  }

  render() {
    return (
      this.renderContent()
    );
  }
}

export default App;
