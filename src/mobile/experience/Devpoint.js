import React from 'react';
import { ContentDiv, ContentText, ContentHeader } from '../../styles/Mobile';
import { ThemeConsumer } from '../../providers/ThemeProvider';

const DevPoint = () => (
  <ThemeConsumer>
    {value => (
      <ContentDiv value={value}>
        <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}}>DevPoint Studios</ContentHeader>
        <ContentText value={value} style={{fontWeight: 'bold'}}>Software Engineer</ContentText>
        <ContentText value={value} fSize='small'>Salt Lake City, UT (Nov 2018 - Feb 2019)</ContentText>
        <ContentText value={value} fSize='small'>
          <ul>
            <li>Night Club Ticketing and Table Reservation App
              <ul>
                <li>React Front-End, Ruby on Rails Back-End</li>
                <li>AGILE based team work</li>
                <li>Adherence to set wire frames</li>
                <li>Code Development, Review, Deployment</li>
              </ul>
            </li>
            <li>Participated in and won two Hack-a-thons
              <ul>
                <li>Single Day Events</li>
                <li>Made aware of application and teams day of</li>
                <li>Clear goals for applications</li>
                <li>Trip Tracker - Trip planning and Itinerary</li>
                <li>UToob - YouTube Clone</li>
              </ul>
            </li>
          </ul>
        </ContentText>
      </ContentDiv>
    )}
  </ThemeConsumer>
)

export default DevPoint;