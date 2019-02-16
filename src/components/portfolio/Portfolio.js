import React from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";

const Portfolio = () => (
  <ThemeConsumer>
    {value => (
      <div>Portfolio Page</div>
    )}
  </ThemeConsumer>
)

export default Portfolio;