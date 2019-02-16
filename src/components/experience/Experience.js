import React from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";

const Experience = () => (
  <ThemeConsumer>
    {value => (
      <div>Work History and Education Page</div>
    )}
  </ThemeConsumer>
)

export default Experience;