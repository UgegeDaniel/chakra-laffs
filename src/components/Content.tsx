import React from 'react';
import { ContentProps } from '../types';
import { JokeStyled, PuchLineStyled } from '../styledComponents';

// eslint-disable-next-line func-names
const Content: React.FC<ContentProps> = function ({
  data, isPunchline,
}): JSX.Element {
  return (
    <div>
      <JokeStyled data-testId="joke">
        {' '}
        {data?.setup}
        {' '}
      </JokeStyled>
      {isPunchline && (
        <PuchLineStyled data-testId="punchline">
          {data?.punchline}
        </PuchLineStyled>
      )}
    </div>
  );
};
export default Content;
