import { Dna } from 'react-loader-spinner';
// eslint-disable-next-line func-names
const Loader: React.FC = ()
    : React.ReactElement => (
    <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
);
export default Loader;