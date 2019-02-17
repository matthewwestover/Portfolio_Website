import React, { Fragment } from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentHeader, SmallLogo } from '../../styles/Custom';
import Logo from '../../assets/ColorLogoOutline.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../styles/Tabs.css";
import DevPoint from './DevPoint';

const Experience = () => (
  <ThemeConsumer>
    {value => (
      <Fragment>
        <ContentWrapper value={value}>
          <HeaderDiv>
            <ContentHeader value={value} fSize='big'>
              <SmallLogo src={Logo} value={value} />
              Work History
            </ContentHeader>
          </HeaderDiv>
          <ContentDiv value={value}>
            <Tabs>
              <TabList>
                <Tab>DevPoint Studios</Tab>
                <Tab>MedData Inc.</Tab>
                <Tab>Service Dimensions Group</Tab>
                <Tab>Ross Stores</Tab>
                <Tab>The Waterford Institute</Tab>
              </TabList>
              <TabPanel>
                <DevPoint />
              </TabPanel>
              <TabPanel>
                Any content 2
              </TabPanel>
            </Tabs>
          </ContentDiv>
          <HeaderDiv>
            <ContentHeader value={value} fSize='big'>
              <SmallLogo src={Logo} value={value} />
              Education
            </ContentHeader>
          </HeaderDiv>
          <ContentDiv value={value}>
            <Tabs>
              <TabList>
                <Tab>The University of Utah</Tab>
                <Tab>Westminster College</Tab>
              </TabList>
              <TabPanel>
                DevPoint Studios
              </TabPanel>
              <TabPanel>
                Any content 2
              </TabPanel>
            </Tabs>
          </ContentDiv>
        </ContentWrapper>
      </Fragment>
    )}
  </ThemeConsumer>
)

export default Experience;