/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { AppBody } from './components';
import { AppStyled, AppWrapperStyled } from './styledComponents';
// eslint-disable-next-line import/no-named-as-default
import useData from './hooks/useData';

function App() {
  const {
    data, isLoading, fetchData, isPunchline, setIsPunchline,
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
            isLoading={isLoading}
          />
        </AppWrapperStyled>
      </AppStyled>
    </div>
  );
}

export default App;
