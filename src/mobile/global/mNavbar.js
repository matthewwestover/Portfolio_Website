import React, { Fragment } from 'react';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ColorLogoOutline.png';
import { NavDiv, NavLogo, NavButton, MenuDiv, MenuButtonDiv, MenuButton } from '../../styles/Mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class MobileNavbar extends React.Component {
  state = {open: false}

  menuOpen = () => {
    this.setState({ open: !this.state.open})
  }

  Navbar = () => {
    return(
    <ThemeConsumer>
      {value => (
        <NavDiv>
          <Link to='/'>
            <NavLogo src={Logo} onClick={() => this.setState({ open: false})} />
          </Link>
          <NavButton value={value}>
            <FontAwesomeIcon icon={faBars} size='2x' color="#eeeeee" onClick={() => this.menuOpen()} /><br />
          </NavButton>
        </NavDiv>
      )}
    </ThemeConsumer>
    )
  }

  Menu = () => {
    return(
      <ThemeConsumer>
        {value => (
          <MenuDiv value={value}>
            <NavDiv>
              <Link to='/'>
                <NavLogo src={Logo} onClick={() => this.menuOpen()}/>
              </Link>
              <NavButton value={value}>
                <FontAwesomeIcon icon={faTimes} size='2x' color="#eeeeee" onClick={() => this.menuOpen()} /><br />
              </NavButton>
            </NavDiv>
            <MenuButtonDiv>
              <Link to='/about'>
                <MenuButton value={value} onClick={() => this.menuOpen()}>About</MenuButton>
              </Link>
              <Link to='/portfolio>'>
                <MenuButton value={value} onClick={() => this.menuOpen()}>Portfolio</MenuButton>
              </Link>
              <Link to='/experience'>
                <MenuButton value={value} onClick={() => this.menuOpen()}>Experience</MenuButton>
              </Link>
            </MenuButtonDiv>
          </MenuDiv>
        )}
      </ThemeConsumer>
    )
  }

  render() {
    const { open } = this.state;
    return(
      <Fragment>
        { open ? this.Menu() : this.Navbar() }
      </Fragment>
    )
  }
}

export default MobileNavbar;