import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, } from '@fortawesome/free-solid-svg-icons';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { ToggleContainer } from '../../styles/Custom';

const Toggle = () => (
  <ThemeConsumer>
    {value => (
      <ToggleContainer onClick={value.change} value={value}>
        {value.darkTheme ? 
          <FontAwesomeIcon icon={faMoon} size='1x' color="#eeeeee" /> :
          <FontAwesomeIcon icon={faSun} size='1x' color="#0e3047" />
        }
      </ToggleContainer>
    )}
  </ThemeConsumer>
)

export default Toggle;