import React from 'react';
import { ButtonsProps } from '../types';
import { PuchLineButtonStyled, AnotherButtonStyled } from '../styledComponents';

// eslint-disable-next-line func-names
const Buttons: React.FC<ButtonsProps> = function ({
  fetchData, isPunchline, setIsPunchline,
}): JSX.Element {
  return (
    <div>
      <PuchLineButtonStyled data-testId="btn-1" onClick={() => setIsPunchline(!isPunchline)} type="button">
        {!isPunchline ? 'See Punchline' : 'Hide Punchline'}
      </PuchLineButtonStyled>
      <AnotherButtonStyled data-testId="btn-2" onClick={() => fetchData} type="button">
        Another Joke
      </AnotherButtonStyled>
    </div>
  );
};
export default Buttons;
