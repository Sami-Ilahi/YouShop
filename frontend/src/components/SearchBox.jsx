import { BsSearch } from 'react-icons/bs';

const SearchBox = ({ setSearch, search }) => {
  return (
    <>
      <div className='input-group mb-3'>
    
        <span className='input-group-text' id='basic-addon1'>
         <BsSearch/>
        </span>
        <input
          type='text'
          className='form-control'
          placeholder='Search Products...'
          aria-label='search'
          aria-describedby='basic-addon1'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </>
  );
};

export default SearchBox;
