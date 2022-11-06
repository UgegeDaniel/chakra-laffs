import React from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader';
const StyleContants = {
  maxWidth: '500px'
}
const AppStyled = styled.main`
position: relative;
font-family: sans-serif;
line-height: 1.5;
min-height: 95vh;
margin: auto;
overflow: hidden;
display: grid;
place-items: center;
background: #4CB9FC;
max-width: ${StyleContants.maxWidth};
padding: auto;
border-radius: 10px;
`
const AppWrapperStyled = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #4CB9FC;
`
function App() {
  return (
    <div>
      <AppStyled>
        <AppWrapperStyled>
          <AppHeader />
        </AppWrapperStyled>
      </AppStyled>
    </div>
  );
}

export default App;
