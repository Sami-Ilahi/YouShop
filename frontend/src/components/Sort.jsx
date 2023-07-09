import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Sort = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === 'asc') {
      setSort({ sort: sort.sort, order: 'desc' });
    } else {
      setSort({ sort: sort.sort, order: 'asc' });
    }
  };
  return (
    <div className='sort'>
      <p className='sort-by'>Sort By:</p>
      <select
        className='form-select form-select-sm w-50 sort-select'
        aria-label='form-select-sm '
        onChange={onSelectChange}
        defaultValue={sort.sort}
      >
        <option value='rating'>Rating</option>
        <option value='price'>Price</option>
      </select>
      <span onClick={onArrowChange}>
        <AiOutlineArrowUp />
        <AiOutlineArrowDown />
      </span>
    </div>
  );
};

export default Sort;
