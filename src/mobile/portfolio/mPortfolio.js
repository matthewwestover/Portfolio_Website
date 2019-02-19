import React from 'react';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { ContentWrapper, HeaderDiv, ContentHeader, SmallLogo } from '../../styles/Mobile';
import Logo from '../../assets/ColorLogoOutline.png';
import MWPhoto from './mMWPhoto';
import TableApp from './TableApp';

const mPortfolio = () => (
  <ThemeConsumer>
    {value => (
      <ContentWrapper value={value}>
        <HeaderDiv>
          <ContentHeader value={value} fSize='big'><SmallLogo src={Logo} value={value} />Portfolio</ContentHeader>
        </HeaderDiv>
        <TableApp />
        <MWPhoto />
      </ContentWrapper>
    )}
  </ThemeConsumer>
)

export default mPortfolio;