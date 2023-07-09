import Message from './Message';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetCategoriesQuery } from '../slices/categoriesApiSlice';

const CategoryCarousel = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const categories = data?.filter((item) => item.name !== 'Sample category');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Slider {...settings}>
      {categories?.map((category) => {
        return (
          <div key={category._id} className='bg-image-container   '>
            <div
              className='bg-image d-flex flex-column justify-content-end align-items-center'
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='w-100 w-md-50 m-4 '>
                    <h1 className='mb-3 logo-color'>{category.name}</h1>
                    <h4 className='text-white m-4'>{category.description}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CategoryCarousel;
