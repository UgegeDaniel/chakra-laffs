import React from 'react';
import { BodyProps } from '../types';
import { Content, Buttons, Footer } from '.';
import { AppHeaderStyled } from '../styledComponents';
import Loader from './Loader';

// eslint-disable-next-line func-names
const AppBody: React.FC<BodyProps> = function ({
  isLoading, data, fetchData, isPunchline, setIsPunchline,
}): React.ReactElement {
  return (
    <div>
      <AppHeaderStyled>Chakra Laffs</AppHeaderStyled>
      {(!isLoading && data) ? (
        <div data-testId="app-content">
          <Content isPunchline={isPunchline} data={data} />
          <Buttons fetchData={fetchData} setIsPunchline={setIsPunchline} isPunchline={isPunchline} />
        </div>
      ) : <div data-testId="loader" style={{ margin: '50% 40%' }}><Loader /></div>}
      <Footer data={data} />
    </div>
  );
};
export default AppBody;
