import React from 'react';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { NavDiv, NavLogo, NavLinksDiv, NavButton } from '../../styles/Custom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/ColorLogoOutline.png';

class Navbar extends React.Component {
  state = { solid: false }

  componentDidMount() {
    window.addEventListener("scroll", this.NavOnScroll.bind(this));
  }

  NavOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100

    if (distanceY > shrinkOn) {
      this.setState({ solid: true })
    } else if (distanceY < shrinkOn) {
      this.setState({ solid: false })
    }
  }

  render(){
    return(
      <ThemeConsumer>
        {value => (
          <NavDiv value={value} solid={this.state.solid}>
            <Link to='/'>
              <NavLogo src={Logo} />
            </Link>
            <NavLinksDiv>
              <Link to='/about'>
                <NavButton value={value} solid={this.state.solid}>About</NavButton>
              </Link>
              <Link to='/portfolio'>
                <NavButton value={value} solid={this.state.solid}>Portfolio</NavButton>
              </Link>
              <Link to='/experience'>
                <NavButton value={value} solid={this.state.solid}>Experience</NavButton>
              </Link>
              <Link to='/contact'>
                <NavButton value={value} >Contact</NavButton>
              </Link>
            </NavLinksDiv>
          </NavDiv>
        )}
      </ThemeConsumer>
    )
  }
}

export default Navbar;