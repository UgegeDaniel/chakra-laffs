import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../constants';

export const AppStyled = styled.main`
position: relative;
font-family: sans-serif;
line-height: 1.5;
min-height: 95vh;
margin: auto;
overflow: hidden;
display: grid;
place-items: center;
background:${STYLE_CONSTANTS.primaryColor};
max-width: ${STYLE_CONSTANTS.maxWidth};
padding: auto;
border-radius: 10px;
`;

export const AppWrapperStyled = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: ${STYLE_CONSTANTS.primaryColor};
`;

export const GithubProfileStyled = styled.h2`
position: absolute;
height: 20px;
left: 9.51%;
top: calc(50% - 20px/2 + 162px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 600;
font-size: 0.75rem;
display: flex;
align-items: center;
letter-spacing: 5px;
text-transform: uppercase;
color: #FFFFFF;
margin: auto;
`;

export const JokeStyled = styled.div`
position: absolute;
height: 100px;
left: 8.51%;
right: 17.11%;
top: calc(40% - 100px/2 - 29px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 900;
font-size: 2rem;
display: flex;
align-items: center;
color: #FFFFFF;
text-align: center;
`;

export const AppHeaderStyled = styled.h2`
position: absolute;
top: -25px;
bottom: 100%:
height: 100px;
background: #fff;
font-family: sans-serif;
font-style: italics;
font-weight: 600;
font-size: 1.5rem;
display: flex;
align-items: center;
color: #FFFFFF;
text-align: center;
text-transform: uppercase;
border-radius: 10px;
color:#4CB9FC;
padding: 1.5rem 4.5rem;
minWidth: 100vw;
letter-spacing: 5px;
margin: auto;
left: 9.51%;
`;

export const PuchLineStyled = styled.div`
position: absolute;
height: 15px;
left: 9.51%;
right: 17.11%;
top: calc(50% - 15px/2 + 73.5px);
font-family: 'Graphik Web';
font-style: normal;
font-weight: 400;
font-size: 1.5rem;
line-height: 24px;
display: flex;
align-items: center;
color: #C5E4FC;
`;

export const JokeTypeStyled = styled.div`
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
`;

export const PuchLineButtonStyled = styled.button`
position: absolute;
left: 9.51%;
top: calc(50% - 15px/2 + 73.5px);
margin-top: 2.5rem;
background: #fff;
color: #4CB9FC;
padding: 0.5rem;
text-transform: capitalize;
border-radius: 10px;
transition: all 0.3s linear;
border-color: transparent;
cursor: pointer;
text-transform: uppercase;
text-align: center;
`;

export const AnotherButtonStyled = styled.button`
position: absolute;
right: 9.51%;
top: calc(50% - 15px/2 + 73.5px);
margin-top: 2.5rem;
background: #4CB9FC;
color: #fff;
padding: 0.5rem;
text-transform: capitalize;
border-radius: 10px;
transition: all 0.3s linear;
border: 2px solid #fff;
cursor: pointer;
text-transform: uppercase;
`;
