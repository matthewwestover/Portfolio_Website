import React from 'react';
import { ThemeConsumer } from '../providers/ThemeProvider';
import { HomeWrapper, HomeWrapper2, HomeLogo, InfoWrapper, Title, } from '../styles/Mobile';
import HomeParticles from './HomeParticles';
import Logo from '../assets/ColorLogoOutline.png';

const MobileHome = () => (
  <ThemeConsumer>
    {value => (
      <HomeWrapper value={value}>
        <HomeWrapper2>
          <HomeLogo src={Logo} />
          <InfoWrapper>
            <Title value={value} fSize='huge' style={{fontWeight: 'bold'}}>Matt</Title>
            <Title value={value} fSize='huge' style={{fontWeight: 'bold', marginTop: '-30px'}}>Westover</Title>
          </InfoWrapper>
        </HomeWrapper2>
        <HomeWrapper2>
          <Title value={value} fsize='large' style={{marginTop: '30px'}}>Software Engineer</Title>
          <Title value={value} fsize='large' style={{marginTop: '-20px'}}>Salt Lake City, Utah</Title>
        </HomeWrapper2>
        <HomeParticles />
      </HomeWrapper>
    )}
  </ThemeConsumer>
)

export default MobileHome;