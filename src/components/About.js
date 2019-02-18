import React from 'react';
import { ThemeConsumer } from "../providers/ThemeProvider";
import { ContentWrapper, HeaderDiv, ContentDiv, ContentText, ContentHeader, SmallLogo, PortImage, DownloadButton, } from '../styles/Custom';
import Logo from '../assets/ColorLogoOutline.png';
import Portrait from '../assets/crop.png';
import Resume from '../assets/MattWestoverResume.pdf';
import Ratings from './Ratings';

const About = () => (
  <ThemeConsumer>
    {value => (
      <ContentWrapper value={value}>
        <HeaderDiv>
          <ContentHeader value={value} fSize='big'>
          <SmallLogo src={Logo} value={value} />
            About Me
          </ContentHeader>
        </HeaderDiv>
        <ContentDiv value={value}>
          <ContentText value={value}>
            <PortImage src={Portrait} />
            Matt Westover <br/>
            South Jordan, UT
            <DownloadButton onClick={() => document.getElementById('link').click()}>Download Resume</DownloadButton>
            <a id="link" href={Resume} download hidden></a>
          </ContentText>
        </ContentDiv>
        <ContentDiv value={value}>
          <ContentText value={value}>
            Hi, my name is Matt Westover, and I'm a Full-Stack Developer from South Jordan, Utah. I am a graduate from the University of Utah / DevPoint Labs Professional Education Course - Full Stack Web Development in Salt Lake City, UT. I also have a Bachelor's of Science in Psychology from Westminster College also located in Salt Lake City, UT. 
          </ContentText>
          <br />
          <ContentText value={value}>
            I spent several years working in the medical billing industry both as an appeals specialist and a team supervisor. Prior to that I spend multiple summers working as an intern with the Waterford Institute creating artwork for educational software. 
          </ContentText>
          <br />
          <ContentText value={value}>
            I currently have training on the following:
          </ContentText>
          <ContentText value={value}>
            <ul>
              <li>Ruby on Rails</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>PostgreSQL</li>
              <li>HTML/CSS</li>
              <li>AGILE/Scrum</li>
              <li>GitHub</li>
            </ul>
          </ContentText>
          <ContentText value={value}>
            In my spare time I read a lot of fantasy novels, enjoy Netflix and Movies, and play video games. I also am a hobbyist photographer, focused mainly on landscapes. I'm also a massive Star Wars nerd. 
          </ContentText>
          <br />
          <ContentText value={value}>
            <Ratings />
          </ContentText>
        </ContentDiv>
      </ContentWrapper>
    )}
  </ThemeConsumer>
)

export default About;