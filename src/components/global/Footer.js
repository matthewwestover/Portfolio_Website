import React from 'react';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import Toggle from '../global/ThemeToggle';
import { FooterDiv, SocialDiv, ToggleDiv } from '../../styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faFacebookSquare, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
  
  SocialIcons = () => (
    <SocialDiv>
      <a
        href="https://github.com/matthewwestover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} size='2x' color="#eeeeee" style={{marginRight: '10px'}} />
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-westover/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' color="#eeeeee" style={{marginRight: '10px'}} />
      </a>
      <a
        href="https://twitter.com/MattKWestover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} size='2x' color="#eeeeee" style={{marginRight: '10px'}} />
      </a>
      <a
        href="https://www.facebook.com/matt.westover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size='2x' color="#eeeeee" style={{marginRight: '10px'}} />
      </a>
      <a
        href="https://www.instagram.com/mattkwestover/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={faInstagram} size='2x' color="#eeeeee" style={{marginRight: '10px',}} />
      </a>
      <a href="mailto:matthew.westover@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' color="#eeeeee" style={{marginRight: '10px'}} />
      </a>
      <ToggleDiv>
        <Toggle />
      </ToggleDiv>
    </SocialDiv>
  )

  render(){
    return(
      <ThemeConsumer>
        {value => (
          <div>
            <FooterDiv value={value}>
              {this.SocialIcons()}
            </FooterDiv>
          </div>
        )}
      </ThemeConsumer>
    )
  }
}

export default Footer;