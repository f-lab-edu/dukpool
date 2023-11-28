import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchId } = useParams();
  return <div>{searchId}</div>;
};

export default Search;
