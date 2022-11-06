import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FooterProps } from '../types';
import { GithubProfileStyled, JokeTypeStyled } from '../styledComponents';

// eslint-disable-next-line func-names
const Footer: React.FC<FooterProps> = function ({ data }): JSX.Element {
  return (
    <footer>
      <JokeTypeStyled>
        {' '}
        {data?.category}
        {' '}
      </JokeTypeStyled>
      <GithubProfileStyled>
        <FaGithub style={{ marginRight: '0.25rem' }} />
        UgegeDaniel
      </GithubProfileStyled>
    </footer>
  );
};
export default Footer;
