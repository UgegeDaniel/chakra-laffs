import React from 'react';
import styled from 'styled-components';
const AppHeaderStyled = styled.h2`
position: absolute;
height: 20px;
left: 9.51%;
right: 65.4%;
top: calc(50% - 20px/2 + 162px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #FFFFFF;
`
const JokeStyled = styled.div`
position: absolute;
height: 100px;
left: 9.51%;
right: 17.11%;
top: calc(50% - 100px/2 - 29px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 900;
font-size: 3.5rem;
display: flex;
align-items: center;
color: #FFFFFF;
`
const PuchLineStyled = styled.div`
position: absolute;
height: 15px;
left: 9.51%;
right: 17.11%;
top: calc(50% - 15px/2 + 73.5px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 15px;
display: flex;
align-items: center;
color: #C5E4FC;
`
const JokeTypeStyled = styled.div`
position: absolute;
height: 20px;
left: 53.99%;
right: 9.51%;
top: calc(50% - 20px/2 + 163px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
text-align: right;
color: #C5E4FC;
text-transform: uppercase;
`

const PuchLineButtonStyled = styled.button`
position: absolute;
left: 9.51%;
top: calc(50% - 15px/2 + 73.5px);
margin-top: 2.5rem;
background: #C5E4FC;
color: #4CB9FC;
padding: 0.5rem;
text-transform: capitalize;
border-radius: 10px;
transition: all 0.3s linear;
border-color: transparent;
cursor: pointer;
`
const AppHeader: React.FC = function ({
    ...Props
}): JSX.Element {
    return (
        <div>
            <AppHeaderStyled>Chakra Laffs</AppHeaderStyled>
            <JokeStyled>Bad at golf?</JokeStyled>
            <PuchLineButtonStyled>Punchline</PuchLineButtonStyled>
            <PuchLineStyled>Join the club</PuchLineStyled>
            <JokeTypeStyled>general</JokeTypeStyled>
        </div>
    );
};
export default AppHeader