import Layout from '@components/common/Layout';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchId } = useParams();
  return <Layout>{searchId}</Layout>;
};

export default Search;
