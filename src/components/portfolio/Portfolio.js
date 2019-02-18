import React from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentHeader, SmallLogo } from '../../styles/Custom';
import Logo from '../../assets/ColorLogoOutline.png';
import TableApp from './TableApp';
import MWPhoto from './MWPhotography';

const Portfolio = () => (
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

export default Portfolio;