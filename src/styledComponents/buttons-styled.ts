import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../constants';


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