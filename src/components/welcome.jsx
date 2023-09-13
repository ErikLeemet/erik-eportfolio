import { styled, keyframes } from 'styled-components'

export default function welcome() {
    return (
        <Home>
            <WelcomeWrapper>
                <Welcome>WELCOME</Welcome>
            </WelcomeWrapper>
            <NavMenu>
                <NavigationButton $background='#EF58D7' $margin='0px 0px 0px 150px'><NavSpan>#</NavSpan>_About</NavigationButton>
                <NavigationButton $background='#E09B33' $margin='0px 150px 0px 0px'><NavSpan>#</NavSpan>_Skills</NavigationButton>
                <NavigationButton $background='#2D22A9' $margin='0px 50px 0px 100px'><NavSpan>#</NavSpan>_Projects</NavigationButton>
                <NavigationButton $background='#C33131' $margin='0px 105px 0px 45px'><NavSpan>#</NavSpan>_Contact</NavigationButton>
            </NavMenu>
        </Home>
    )
}

const Home = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 250px;
`;
const WelcomeWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const pan = keyframes`
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
`;
const Welcome = styled.h1`
    padding: 2rem;
    // font styling
    font-family: 'Sen', sans-serif;
    font-weight: 400;
    letter-spacing: 19.2px;
    line-height: normal;
    font-size: 96px;
    //animtion & color gradiant
    animation: ${pan} 2s linear infinite;
    background: var(--idk, linear-gradient(90deg, #EF58D7 0%, #E09B33 23.75%, #2D22A9 50.31%, #C33131 76.35%, #EF58D7 100%));
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
`;
const NavSpan = styled.span`
    color: #7800EF;
    font-family: Roboto Mono;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const NavigationButton = styled.div`
// Text
    line-height: 2;
    font-size: 28px;
    text-align: center;
    color: #fff;
// Size/Border
    height: 60px;
    width: 336px;
    border-radius: 50px;
    margin: ${props => props.$margin};
// background color
    background-color: ${props => props.$background};

`;
