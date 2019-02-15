import styled, { keyframes, } from 'styled-components';
import { Header } from 'semantic-ui-react';

const fontSize = (size) => {
  switch(size) {
    case 'huge':
      return '100px';
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
    flex-direction: row;
    align-items: center;
    padding-right: 9.5%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 5px 0;
`;

export const Title = styled(Header)`
  font-family: 'Montserrat !important', sans-serif;
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  font-style: ${props => props.italic ? 'italic' : ''} !important;
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  transition: 700ms;
`

export const HomeLogo = styled.img`
  height: 55vh;
  padding-right: 10%;
  border-right: 3px solid ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'};
  margin-right: 10%;
  transition: 700ms;
`

export const HomePart = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
`

export const FooterDiv = styled.div`
  background-color: ${props => props.value.darkTheme ? '#393e46' : '#10828c'}
  height: 40px;
  width: 100%;
  border-top: 2px solid #fd7014;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  transition: 700ms;
`

export const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%
  padding-left: 2vw;
  padding-right: 2vw;
`

export const ToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100px;
  margin-left: auto;
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: ${props => props.value.darkTheme ? 'flex-end' : 'flex-start'};
  align-items: center;
  width: 70px;
  height: 30px;
  background-color: ${props => props.value.darkTheme ? '#222831' : '#fffef6'};
  position: relative;
  border-radius: 15px;
  border: 2px solid #fd7014;
  cursor: pointer;
  padding: 5px;
  box-shadow: inset 10px 10px 12px rgba(0, 0, 0, 0.3);
  transition: 700ms;
`

export const NavDiv = styled.div`
  height: 75px;
  width: 100%;
  top: 0px;
  position: fixed;
  z-index: 25;
  margin-top: 0px;
  transition: 700ms;
  display: flex;
  align-items: center;
  padding: 0px 75px 0px 75px;
  justify-content: space-between;
  background-color: ${props => props.solid ? `${props.value.darkTheme ? '#222831' : '#fffef6'}` : '' }
`

export const NavLogo = styled.img`
  height: 60px;
  transition: 700ms;
  cursor: pointer;
`

export const NavLinksDiv = styled.div`
  height: 100%
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavButton = styled.div`
  height: 45px
  padding-left: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  color: ${props => props.solid ? `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` : `${props.value.darkTheme ? '#eeeeee' : '#0e3047'}` }
  font-family: 'Titillium Web', sans-serif;
  font-size: 22px;
  font-weight: 200;
`