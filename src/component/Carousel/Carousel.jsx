import React from "react";
import Slider from "react-slick";

const Carousel = ({ images }) => {
  const settings = {
    initialSlide: 0,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.63,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            width={"250px"}
            height={"150px"}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
