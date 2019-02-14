import React from 'react';
import { ThemeConsumer } from '../../providers/ThemeProvider';
import { PhantomFoot, FooterDiv, } from '../../styles/Custom';

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

const Footer = () => (
  <ThemeConsumer>
    {value => (
      <div>
        <PhantomFoot />
        <FooterDiv value={value}>Footer</FooterDiv>
      </div>
    )}
  </ThemeConsumer>
)

export default Footer;