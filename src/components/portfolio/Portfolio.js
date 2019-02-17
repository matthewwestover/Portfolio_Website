import React from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentHeader, SmallLogo } from '../../styles/Custom';
import Logo from '../../assets/ColorLogoOutline.png';

const Portfolio = () => (
  <ThemeConsumer>
    {value => (
      <ContentWrapper value={value}>
        <HeaderDiv>
          <ContentHeader value={value} fSize='big'><SmallLogo src={Logo} value={value} />Portfolio</ContentHeader>
        </HeaderDiv>
        <ContentDiv value={value}>Portfolio things here</ContentDiv>
      </ContentWrapper>
    )}
  </ThemeConsumer>
)

export default Portfolio;