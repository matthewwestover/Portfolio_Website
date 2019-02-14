import React from 'react';
import { ThemeConsumer } from "../providers/ThemeProvider";
import { HomeWrapper, HomeWrapper2, Title, InfoWrapper, HomeLogo } from '../styles/Custom';
import Logo from '../assets/ColorLogoOutline.png';

const Home = () => (
  <ThemeConsumer>
    {value => (
      <HomeWrapper value={value}>
        <HomeWrapper2>
          <HomeLogo value={value} src={Logo} />
        <InfoWrapper>
          <Title value={value}>HAI</Title>
        </InfoWrapper>
        </HomeWrapper2>
      </HomeWrapper>
    )}
  </ThemeConsumer>
)

export default Home;