import React from 'react';
import ModalImage from 'react-modal-image'
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { ContentDiv, ContentHeader, ContentText, ProjectTech, Tech, PortfolioImages, DemoButton, SourceButton } from '../../styles/Custom';
import MainSmall from '../../assets/tableappmainsmall.png';
import MainBig from '../../assets/tableappmain.png';
import EventSmall from '../../assets/eventmainsmall.png';
import EventBig from '../../assets/eventmain.png';
import CalSmall from '../../assets/Calendarsmall.png';
import CalBig from '../../assets/Calendar.png';

const TableApp = () => (
<ThemeConsumer>
  {value => (
    <ContentDiv value={value}>
      <ContentHeader value={value} fSize='large' style={{fontWeight: 'bold'}} underlined>Ticketing and Table Reservation App</ContentHeader>
      <ProjectTech>
        <a
          href="https://mw-table-app.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DemoButton value={value}>View Live Demo</DemoButton>
        </a>
        <a
          href="https://github.com/devpointlabs/table-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SourceButton value={value}>View Source Code</SourceButton>
        </a>
      </ProjectTech>
      <br />
      <ContentText value={value} fSize='tiny' style={{fontWeight: 'bold',}}>This application is hosted on the free tier of Heroku. If viewing the live demo and the site hasn't been open in the last 30 minutes it can take around 15 seconds for Heroku to bring the site back up. </ContentText> <br />
      <ContentText value={value} fSize='small'>This application was developed for DevPoint Studios. It is a dynamic website for nightclubs to allow for ticketing purchase and table reservation. Eventually it is to be developed for VIP table reservation splitting, much like a UBER share ride. This was developed by a team of five, made to display info for SLC local nightclub, SkySLC.</ContentText>
      <ProjectTech>
        <Tech value={value}>React</Tech>
        <Tech value={value}>Ruby on Rails</Tech>
        <Tech value={value}>PostgreSQL</Tech>
        <Tech value={value}>Devise Authentication</Tech>
        <Tech value={value}>MapBox</Tech>
        <Tech value={value}>StyledComponents</Tech>
        <Tech value={value}>Braintree Payments</Tech>
      </ProjectTech>
      <PortfolioImages>
        <ModalImage
          small={MainSmall}
          large={MainBig}
          // alt="Main Page"
          hideDownload={true}
          hideZoom={true}
          />
        <ModalImage
          small={EventSmall}
          large={EventBig}
          alt="Event Details"
          hideZoom={true}
          hideDownload={true}
          />
        <ModalImage
          small={CalSmall}
          large={CalBig}
          alt="Calendar Event View"
          hideDownload={true}
          hideZoom={true}
          />
        </PortfolioImages><br /><br />
        <ContentText value={value} underlined style={{fontWeight: 'bold',}}> Key Features I Worked On:</ContentText><br />
        <ContentText value={value} underlined fSize='small' style={{fontWeight: 'bold',}}>Dynamic Site</ContentText>
        <ContentText value={value} fSize='small' style={{paddingTop: '3px'}}>Website allows for full customization, including uploading new venue logo, setting map coordinates, and all venue information.</ContentText><br />
        <ContentText value={value} underlined fSize='small' style={{fontWeight: 'bold',}}>Add and Edit Events</ContentText>
        <ContentText value={value} fSize='small' style={{paddingTop: '3px'}}>Add as many events as you wish with auto population to the coming event's calendar, and the main page coming artist's component</ContentText><br />
        <ContentText value={value} underlined fSize='small' style={{fontWeight: 'bold',}}>Functional Event Calendar</ContentText>
        <ContentText value={value} fSize='small' style={{paddingTop: '3px'}}>View coming events for each specific month.</ContentText><br />
        <ContentText value={value} underlined fSize='small' style={{fontWeight: 'bold',}}>Table Reservations</ContentText>
        <ContentText value={value} fSize='small' style={{paddingTop: '3px'}}>Automatically send an email to the venue requesting a VIP Table Experience.</ContentText><br />
        <ContentText value={value} underlined fSize='small' style={{fontWeight: 'bold',}}>Hero Image Management</ContentText>
        <ContentText value={value} fSize='small' style={{paddingTop: '3px'}}>Upload the scrolling carousel images and manage which are displayed from the admin panel</ContentText><br />
    </ContentDiv>
  )}
</ThemeConsumer>
)

export default TableApp;