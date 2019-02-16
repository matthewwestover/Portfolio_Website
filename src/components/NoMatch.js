import React from 'react';
import { Link, } from 'react-router-dom';
import { ThemeConsumer } from "../providers/ThemeProvider";
import { HomeWrapper, Title, } from '../styles/Custom';
import NoMatchParticles from './NoMatchParticles';

const NoMatch = () => (
  <ThemeConsumer>
    {value => (
      <HomeWrapper value={value}>
        <Title value={value} fSize='large'>Error 404: Page not found. Please return <Link to="/" value={value} style={{cursor: 'pointer', color: '#fd7014' }}>Home</Link>.</Title>
        <NoMatchParticles />
      </HomeWrapper>
    )}
  </ThemeConsumer>
)

export default NoMatch;