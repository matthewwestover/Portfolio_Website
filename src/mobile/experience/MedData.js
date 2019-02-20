import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Mobile';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const MedData = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>MedData</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Worker's Compensation Supervisor</ContentText>
        <ContentText value={value} fSize='small'>Draper, UT (Nov 2017 - April 2018)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Manage team of 10-15 members</li>
            <li>Manage team schedules, time cards, work lists, performance reviews, and weekly team meetings</li>
            <li>Maintain knowledge of all department roles, different state regulations for multiple clients</li>
            <li>Act as primary contact for clients and issue resolution</li>
          </ul>
        </ContentText>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Worker's Compensation Specialist</ContentText>
        <ContentText value={value} fSize='small'>Draper, UT (Aug 2015 - Nov 2017)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Investigate, Gather Insurance Info, Bill, and Appeal Worker's Compensation Claims</li>
            <li>Coordinate with payers to ensure appropriate filing guidelines are met for reimbursement</li>
            <li>Understand and investigate various state fee schedules</li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default MedData;