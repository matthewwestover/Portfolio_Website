import React from 'react';
import { Link, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import { ThemeConsumer } from "../providers/ThemeProvider";
import NoMatchPart from './NoMatchPart';

const NoMatch = () => (
  <ThemeConsumer>
    {value => (
      <div style={{backgroundColor: '#393e46'}}>
      <Container value={value} fluid>
        Page not found return
        <Link to="/"> Home</Link>
      </Container>
      <NoMatchPart />
      </div>
    )}
</ThemeConsumer>
)

export default NoMatch;