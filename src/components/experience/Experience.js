import React, { Fragment } from 'react';
import { ThemeConsumer } from "../../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentHeader, SmallLogo } from '../../styles/Custom';
import Logo from '../../assets/ColorLogoOutline.png';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as darkStyle from '../../styles/TabsDark';
import * as lightStyle from '../../styles/TabsLight';

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
        <Tabs
        value={value}
        showModalButton={false}
        customStyle={value.darkTheme ? darkStyle : lightStyle}
        >
        <TabList>
          <Tab>DevPoint Studios</Tab>
          <Tab>MedData Inc.</Tab>
          <Tab>Service Dimensions Group</Tab>
          <Tab>Ross Stores</Tab>
          <Tab>Waterford Institute</Tab>
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