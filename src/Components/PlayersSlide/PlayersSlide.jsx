import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PlayersSlide.css';
import data_product from '../Assets/data';
import Players from '../Players/Players';

const PlayersSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='players-slide'>
      <h1>Active Players</h1>
      <hr />
      <div className='players-slide-home slick-track'>
  <Slider {...settings}>
    {data_product.map((players, i) => {
      return <Players key={i} id={players.id} name={players.name} image={players.image} contry_state={players.contry_state} position={players.position} />;
    })}
  </Slider>
</div>
    </div>
  )
}

export default PlayersSlide
