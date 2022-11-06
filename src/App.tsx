/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import AppBody from './components/AppBody';
import { AppStyled, AppWrapperStyled } from './styledComponents';
import useData from './hooks/useData';

function App() {
  const {
    data, fetchData, isPunchline, setIsPunchline,
  } = useData();
  return (
    <div>
      <AppStyled>
        <AppWrapperStyled>
          <AppBody
            data={data}
            fetchData={fetchData}
            isPunchline={isPunchline}
            setIsPunchline={setIsPunchline}
          />
        </AppWrapperStyled>
      </AppStyled>
    </div>
  );
}

export default App;
