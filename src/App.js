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
import MobileNavBar from './mobile/global/mNavbar';
import MobileFooter from './mobile/global/mFooter';
import MobileAbout from './mobile/mAbout';
import MobilePortfolio from './mobile/portfolio/mPortfolio';
import MobileExperience from './mobile/experience/mExperience';
import './App.css';

class App extends React.Component {

  renderContent = () => {
    if (isMobile) {
      return(
        <Fragment>
          <MobileNavBar />
          <div>
            <ScrollToTop>
              <Switch>
                <Route exact path='/' component={MobileHome} />
                <Route exact path='/about' component={MobileAbout} />
                <Route exact path='/portfolio' component={MobilePortfolio} />
                <Route exact path='/experience' component={MobileExperience} />
              </Switch>
            </ScrollToTop>
            <MobileFooter />
          </div>
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
