import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import SearchBox from '../components/SearchBox';
import Sort from '../components/Sort';
import CategoryFilter from '../components/CategoryFilter';

const ShopScreen = () => {
  const { page } = useParams();

  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterCategory, setFilterCategory] = useState([]);
  const [search, setSearch] = useState('');

  const { data, isLoading, error } = useGetProductsQuery({
    sort,
    filterCategory,
    page,
    search,
  });

  return (
    <>
      {search.length === 0 ? (
        <p>Welcome to your fashion's online store</p>
      ) : (
        <Link
          to='/shop'
          className='btn btn-light mb-4'
          onClick={(e) => {
            setSearch('');
          }}
        >
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>All Products</h1>{' '}
          <SearchBox setSearch={setSearch} search={search} />
          <CategoryFilter
            filterCategory={filterCategory}
            categories={data.categories}
            setFilterCategory={(category) => setFilterCategory(category)}
          />
          <Sort sort={sort} setSort={(sort) => setSort(sort)} />
          <Row>
            {data?.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default ShopScreen;
