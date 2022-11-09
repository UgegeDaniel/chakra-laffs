import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../constants';
export const AppWrapperStyled = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: ${STYLE_CONSTANTS.primaryColor};
`;
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