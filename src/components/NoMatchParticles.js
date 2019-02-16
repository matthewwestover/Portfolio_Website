import React from "react";
import Particles from 'react-particles-js';
import Dark from './dark.json';
import Light from './light.json';
import { HomePart } from '../styles/Custom';
import { ThemeConsumer } from "../providers/ThemeProvider.js";

const NoMatchParticles = () => (
  <ThemeConsumer>
    {value => (
      <HomePart>
        <Particles 
          height="100vh" 
          width="100%" 
          params={value.darkTheme ? Dark : Light} 
        />
      </HomePart>
    )}
  </ThemeConsumer>
);

export default NoMatchParticles;