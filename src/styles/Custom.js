import styled, { keyframes, } from 'styled-components';
import { Header } from 'semantic-ui-react';

const fontSize = (size) => {
  switch(size) {
    case 'huge':
      return '60px';
    case 'big':
      return '45px';
    case 'large':
      return '30px';
    case 'small':
      return '15px';
    default:
      return '20px';
  }
};

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1.0;
    }
`;

export const HomeWrapper = styled.div`
  background-color: ${props => props.value.darkTheme ? '#222831' : '#f8f5e4'}
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 0.75s;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
  z-index: 1;
  animation: ${fadeIn} 1s linear;
`

export const HomeWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1em;
  hr {
    width: 100%;
    height: 2px;
    background-color: #ccc;
    border: none;
    margin: 5px 0;
  }
`;

export const Title = styled(Header)`
  font-family: 'Montserrat !important';
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  text-decoration: ${props => props.bold ? 'bold' : ''} !important;
  text-decoration: ${props => props.italics ? 'italics' : ''} !important;
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  
`

export const HomeLogo = styled.img`
  height: 45vh;
  padding-right: 10%;
  border-right: 3px solid ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'};
  margin-right: 10%;
`