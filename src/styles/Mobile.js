import styled, { keyframes, } from 'styled-components';
import { Container } from 'semantic-ui-react';

const fontSize = (size) => {
  switch(size) {
    case 'huge':
      return '45px';
    case 'big':
      return '30px';
    case 'large':
      return '25px';
    case 'small':
      return '15px';
    case 'tiny':
      return '10px';
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
  background-color: ${props => props.value.darkTheme ? '#222831' : '#fffef6'}
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 700ms;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
  z-index: 1;
  animation: ${fadeIn} 1s linear;
`

export const HomeWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeLogo = styled.img`
  height: 30vh;
  transition: 700ms;
  margin-bottom: 20px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  font-style: ${props => props.italic ? 'italic' : ''} !important;
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  transition: 700ms;
  font-family: 'Raleway', sans-serif;
`

export const HomePart = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
`

export const NavDiv = styled.div`
  height: 50px;
  width: 100%;
  top: 0px;
  position: fixed;
  z-index: 25;
  margin-top: 0px;
  transition: 700ms;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  justify-content: space-between;
`

export const NavLogo = styled.img`
  height: 44px;
  transition: 700ms;
  cursor: pointer;
`

export const NavButton = styled.div`
  height: 44px
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: ${props => props.solid ? `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` : `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` }
  font-family: 'Titillium Web', sans-serif;
`

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: ${props => props.solid ? `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` : `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` }
  font-family: 'Titillium Web', sans-serif;
  font-size: 40px;
  height: 75px;
`

export const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color:  ${props => props.value.darkTheme ? '#222831' : '#fffef6'}; 
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 20;
  transition: 700ms;
  animation: ${fadeIn} .5s linear;
`

export const MenuButtonDiv = styled.div`
  width: 100%;
  z-index: 25;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
  margin-top: 100px;
  justify-content: space-between;
`