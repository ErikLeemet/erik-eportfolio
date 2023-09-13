import { styled } from 'styled-components'

export default function about() {
    return (
        <About>
            <AboutTextWrapper>
                <Title>#_About</Title>
                <Text>
                    Olen noorem tarkvaraarendaja.
                    Minu oskused programmeerimises kalduvad rohkem frontendi poole ja olen huvitatud UI ja UX arendamises.
                    Backendis pole mul palju kogemust.
                    Minu suhtlemisoskused on head ja saan teistega hästi läbi.
                    Oma vabal ajal meeldib mul otsida midagi huvitavat
                    teha, sellekes võib olla Jaapani kirjanduse lugemine,
                    animatsoonide- ja seriaalide vaatamine või siis veebilehe
                    kujundamine ja tegemine.
                </Text>
            </AboutTextWrapper>
            <SpaceWrapper>
                <Image src='Erik.png'></Image>
                <Bubble $size='20px' />
                <Bubble $size='20px' />
                <Bubble $size='20px' />
                <Bubble $size='50px' />
                <Bubble $size='70px' />
                <Bubble $size='100px' />
            </SpaceWrapper>
        </About>
    )
}
const About = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const AboutTextWrapper = styled.div`

`;
const Title = styled.h2`
    color: var(--pink, #EF58D7);
    font-family: Roboto Mono;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Text = styled.p`
    width: 510px;
    height: 450px;
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Bubble = styled.div`
    position: absolute;
    width: ${props => props.$size};
    height: ${props => props.$size};
    background-color: #EF58D7;
    border-radius: 50px;
    z-index: 100;
`;

const Image = styled.img`
    z-index: -100;
`;

const SpaceWrapper = styled.div`
    height: 665px;
    width: 1184px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
