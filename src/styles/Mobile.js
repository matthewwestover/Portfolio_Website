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

export const RatingWrapper = styled.div`
  background-color: ${props => props.value.darkTheme ? '#222831' : '#fffef6'}
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  z-index: 2;
  `

  export const ScoreDiv = styled.div`
  display: flex;
  align-items: center;
`

export const Score = styled.div`
  background-color: ${props => props.filled ? '#fd7014' : '#393e46'}
  border: 1px solid ${props => props.value.darkTheme ? '#eeeeee' : '#0e3047'};
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin: 0px 2px 0px 2px;
`
export const Rating = styled.div`
    width: 95%;
    display: flex;
    align-items: space-around;
    justify-content: space-between;
    color: ${props => props.value.darkTheme ? '#eeeeee' : '#0e3047'};
`

export const ContentWrapper = styled.div`
  background-color: ${props => props.value.darkTheme ? '#222831' : '#fffef6'}
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  height: 100%;
  transition: 700ms;
  min-height: 100vh;
  width: 100%;
  padding: 75px 2em 4em 2em;
  z-index: 1;
`

export const HeaderDiv = styled(Container)`
  display: flex !important;
  justify-content: flex-start !important;
  align-items: center !important;
  padding-bottom: 10px;
`

export const ContentHeader = styled.p`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: flex-start;
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  font-style: ${props => props.italic ? 'italic' : ''} !important;
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  transition: 700ms;
`

export const SmallLogo = styled.img`
  width: 30px !important;
  padding-right: 10px;
  transition: 700ms;
`
export const ContentText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  font-style: ${props => props.italic ? 'italic' : ''} !important;
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  margin-top: -30px;
  display: flex !important;
  flex-direction: column;
  align-items: center !important;
  justify-content: center;
  padding-bottom: 10px;
`

export const ContentDiv = styled(Container)`
  color: ${props => props.value.darkTheme ? '#eeeeee !important' : '#0e3047 !important'}
  font-family: 'Raleway', sans-serif;
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  font-style: ${props => props.italic ? 'italic' : ''} !important;
  padding-bottom: 10px;
`

export const PortImage = styled.img`
  width: 250px;
  padding-right: 10px;
  transition: 700ms;
  padding-bottom: 10px;
`

export const DownloadButton = styled.div`
  width: 160px;
  height: 40px;
  background-color: #fd7014;
  padding-top: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #eeeeee
  margin-top: 10px;
`
export const ProjectTech = styled.ul`
  list-style: none;
  margin-top: -20px;
  margin-left: -20px;
`

export const Tech = styled.li`
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #fd7014;
  border-radius: 5px;
  margin: 5px;
  font-size: 15px
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  color: #eeeeee;
  background-color: ${props => props.value.darkTheme ? '#393e46' : "#0e3047" };
  `
  export const SourceButton = styled.li`
  display: inline-block;
  background-color: #fd7014;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid ${props => props.value.darkTheme ? '#eeeeee' : "#0e3047" };
  font-size: 12px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  margin: 5px;
  cursor: pointer;
  color: #eeeeee
`
  export const DemoButton = styled.li`
  display: inline-block;
  background-color: #85A720;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid ${props => props.value.darkTheme ? '#eeeeee' : "#0e3047" };
  font-size: 12px;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  margin: 5px;
  cursor: pointer;
  color: #eeeeee
`

export const PortfolioImages = styled.div`
  display: flex;
  justify-content: space-around;
`