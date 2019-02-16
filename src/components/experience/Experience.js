import React, { Fragment } from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentHeader, SmallLogo } from '../../styles/Custom';
import Logo from '../../assets/ColorLogoOutline.png';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';

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
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
        I do Work At Places
        </ContentDiv>
        <HeaderDiv>
          <ContentHeader value={value} fSize='big'>
            <SmallLogo src={Logo} value={value} />
            Education
          </ContentHeader>
        </HeaderDiv>
        <ContentDiv value={value}>I learn stuff</ContentDiv>
      </ContentWrapper>
      </Fragment>
    )}
  </ThemeConsumer>
)

export default Experience;