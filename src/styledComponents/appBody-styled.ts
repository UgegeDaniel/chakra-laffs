import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../constants';

const AppHeaderStyled = styled.h2`
align-items: center;
background: #fff;
border-radius: ${STYLE_CONSTANTS.borderRadius};
bottom: 100%:
color: ${STYLE_CONSTANTS.primaryFontColor}
display: flex;
font-family: sans-serif;
font-size: 1.5rem;
font-style: italics;
font-weight: 600;
height: 100px;
left: 9.51%;
letter-spacing: 5px;
margin: auto;
minWidth: 100vw;
padding: 1.5rem 4.5rem;
position: absolute;
text-align: center;
text-transform: uppercase;
top: -25px;
`;
export default AppHeaderStyled;
