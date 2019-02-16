import React from 'react';
import { ThemeConsumer } from "../providers/ThemeProvider";

const About = () => (
  <ThemeConsumer>
    {value => (
      <div>About Page</div>
    )}
  </ThemeConsumer>
)

export default About;