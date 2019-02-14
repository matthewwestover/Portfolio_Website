import React from 'react';
import { Link, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import { ThemeConsumer } from "../providers/ThemeProvider";

const NoMatch = () => (
  <ThemeConsumer>
    {value => (
      <Container value={value}>
        Page not found return
        <Link to="/"> Home</Link>
      </Container>
    )}
</ThemeConsumer>
)

export default NoMatch;