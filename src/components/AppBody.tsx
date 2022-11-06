import React from 'react';
import { FaGithub } from 'react-icons/fa';
import BodyProps from '../types/propTypes';
import {
  GithubProfileStyled,
  JokeStyled,
  AppHeaderStyled,
  PuchLineStyled,
  JokeTypeStyled,
  PuchLineButtonStyled,
  AnotherButtonStyled,
} from '../styledComponents';

// eslint-disable-next-line func-names
const AppBody: React.FC<BodyProps> = function ({
  data, fetchData, isPunchline, setIsPunchline,
}): JSX.Element {
  return (
    <div>
      <AppHeaderStyled>Chakra Laffs</AppHeaderStyled>
      <GithubProfileStyled>
        <FaGithub style={{ marginRight: '0.25rem' }} />
        UgegeDaniel
      </GithubProfileStyled>
      <JokeStyled>
        {data?.setup}
      </JokeStyled>
      <PuchLineButtonStyled onClick={() => setIsPunchline(!isPunchline)}>
        {!isPunchline ? 'See Punchline' : 'Hide Punchline'}
      </PuchLineButtonStyled>
      <AnotherButtonStyled onClick={() => fetchData()}>
        Another Joke
      </AnotherButtonStyled>
      {isPunchline && (
        <PuchLineStyled>
          {data?.punchline}
        </PuchLineStyled>
      )}
      <JokeTypeStyled>
        {data?.category}
      </JokeTypeStyled>
    </div>
  );
};
export default AppBody;
