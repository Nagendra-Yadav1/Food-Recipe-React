import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const TrendingSlider = ({ idMeal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
        const data = await api.json();
        setData(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idMeal]);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  return (
    <div style={{
      height:'26vh',
      width:'99%',
      margin:'auto',
      overflowX:'hidden'
    }}>
      <Slider {...settings}
        style={{
          marginTop:'1rem'
        }} 
      >
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className='slider2'>
              <img src={d.strMealThumb} alt={d.strMeal} style={{ width:'10rem', height:'7rem' }} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingSlider;
