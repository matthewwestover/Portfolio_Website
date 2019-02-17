import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Custom';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const SDG = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>Service Dimensions Group</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>HR Assistant</ContentText>
        <ContentText value={value} fSize='small'>Draper, UT (June 2012 - Aug 2015)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Provide new hire orientations</li>
            <li>Complete e-verify and I-9 compliance</li>
            <li>Assist with human resource issues and projects for clients</li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default SDG;