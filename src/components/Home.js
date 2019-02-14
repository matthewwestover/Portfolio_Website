import React from 'react';
import { ThemeConsumer } from "../providers/ThemeProvider";
import { Container } from 'semantic-ui-react';

const Home = () => (
  <ThemeConsumer>
    {value => (
      <Container value={value}>
        <div>
          <p style={{fontFamily: 'Montserrat', fontSize: '40px'}}>HAI</p>
        </div>
      </Container>
    )}
  </ThemeConsumer>
)

export default Home;