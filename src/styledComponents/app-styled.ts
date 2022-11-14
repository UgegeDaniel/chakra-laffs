import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../constants';

export const AppWrapperStyled = styled.div`
position: absolute;
${STYLE_CONSTANTS.zero};
background: ${STYLE_CONSTANTS.primaryColor};
`;
export const AppStyled = styled.main`
position: relative;
font-family: sans-serif;
line-height: 1.5;
min-height: ${STYLE_CONSTANTS.appHeight};
margin: auto;
overflow: hidden;
display: grid;
place-items: center;
background:${STYLE_CONSTANTS.primaryColor};
max-width: ${STYLE_CONSTANTS.maxWidth};
padding: auto;
border-radius: 10px;
`;
