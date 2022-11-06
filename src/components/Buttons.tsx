import React from 'react';
import { ButtonsProps } from '../types';
import { PuchLineButtonStyled, AnotherButtonStyled } from '../styledComponents';

// eslint-disable-next-line func-names
const Buttons: React.FC<ButtonsProps> = function ({
  fetchData, isPunchline, setIsPunchline,
}): JSX.Element {
  return (
    <div>
      <PuchLineButtonStyled onClick={() => setIsPunchline(!isPunchline)}>
        {!isPunchline ? 'See Punchline' : 'Hide Punchline'}
      </PuchLineButtonStyled>
      <AnotherButtonStyled onClick={() => fetchData()}>
        Another Joke
      </AnotherButtonStyled>
    </div>
  );
};
export default Buttons;
