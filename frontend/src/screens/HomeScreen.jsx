import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import CategoryCarousel from '../components/CategoryCarousel';

const HomeScreen = () => {
  const [sort, setSort] = useState({ sort: 'updatedAt', order: 'desc' });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading, error } = useGetProductsQuery({
    sort,
    filterCategory,
    page,
    search,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <CategoryCarousel />
          <ProductCarousel />
          <h1>Latest Products</h1>
          <Row>
            {data.products.slice(0, 8).map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
