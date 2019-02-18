import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Custom';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const Westminster = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>Westminster College</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Bachelor's of Science - Psychology</ContentText>
        <ContentText value={value} fSize='small'>Salt Lake City, UT (Sept 2008 - June 2012)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Private Liberal Arts College located in Salt Lake City, UT</li>
            <li>Completed Psychology Major with Biology background work</li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default Westminster;