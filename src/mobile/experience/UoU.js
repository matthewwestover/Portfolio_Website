import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Mobile';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const UoU = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>The University of Utah</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Full Time Web Development Certification, Professional Education, Dev Point Labs</ContentText>
        <ContentText value={value} fSize='small'>Salt Lake City, UT (Nov 2018 - Feb 2019)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Attended University of Utah certified software engineering bootcamp</li>
            <li>Three month accelerated full-stack coding program</li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default UoU;