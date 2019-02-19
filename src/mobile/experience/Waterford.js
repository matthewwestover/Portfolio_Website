import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Mobile';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const Waterford = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>The Waterford Institute</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Graphic Artist Intern</ContentText>
        <ContentText value={value} fSize='small'>Sandy, UT (Summers 2005-2010)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Create Clipart and Activities for Educational Software</li>
            <li>Demonstrated a strong ability to work quickly and within tight deadlines</li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default Waterford;