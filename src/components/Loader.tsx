import React from 'react';
import { Dna } from 'react-loader-spinner';
// eslint-disable-next-line func-names
const Loader: React.FC = function ()
: React.ReactElement {
  return (
    <Dna
      visible
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
export default Loader;
