import React from 'react';
import { ContentDiv, ContentText, } from '../../styles/Custom';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const DevPoint = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentText value={value} fSize='large' style={{fontWeight: '600'}}>DevPoint Studios</ContentText>
        <ContentText value={value}>Software Engineer</ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default DevPoint;