import React from 'react';
import { ThemeConsumer } from "../providers/ThemeProvider";
import HomeParticles from './HomeParticles'
import Footer from './global/Footer';
import { HomeWrapper, HomeWrapper2, Title, InfoWrapper, HomeLogo } from '../styles/Custom';
import Logo from '../assets/ColorLogoOutline.png';

const Home = () => (
  <ThemeConsumer>
    {value => (
      <HomeWrapper value={value}>
        <HomeWrapper2>
          <HomeLogo value={value} src={Logo} />
          <InfoWrapper>
            <Title value={value} fSize='huge'>Matt</Title>
            <Title value={value} fSize='huge'>Westover</Title>
          </InfoWrapper>
        </HomeWrapper2>
        <Title value={value} fsize='large'> Software Engineer - Salt Lake City, Utah</Title>
        <HomeParticles />
        <Footer />
      </HomeWrapper>
    )}
  </ThemeConsumer>
)

export default Home;