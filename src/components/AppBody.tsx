import React from 'react';
import { BodyProps } from '../types';
import { Content, Buttons, Footer } from '.';
import { AppHeaderStyled } from '../styledComponents';

// eslint-disable-next-line func-names
const AppBody: React.FC<BodyProps> = function ({
  data, fetchData, isPunchline, setIsPunchline,
}): React.ReactElement {
  return (
    <div>
      <AppHeaderStyled>Chakra Laffs</AppHeaderStyled>
      <Content isPunchline={isPunchline} data={data} />
      <Buttons fetchData={fetchData} setIsPunchline={setIsPunchline} isPunchline={isPunchline} />
      <Footer data={data} />
    </div>
  );
};
export default AppBody;
