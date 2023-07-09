import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <div className='d-md-flex mb-5 mt-5 '>
      <div className='w-100 w-md-75 d-flex flex-column justify-content-center align-items-center mb-4'>
        <h1 className='logo-color'> winter sales</h1>
        <p>Get your favourite clothes on sale for just €50!</p>
        <p>Check our latest collection.</p>
        <Link className='' to='/shop'>
          Go to shop
        </Link>
      </div>

      <div className='col-md-6'>
        <h2> Our top rated products</h2>
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <div key={product._id} className='p-2 '>
                <Link to={`/product/${product._id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fluid
                    className='slider-img'
                  />
                </Link>
                <div className='caption '>
                  <h6 className='p-2 text-center text-white product-carousel-title'>
                    {product.name} <br /> (€{product.price})
                  </h6>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
