import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function PopularSlider() {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s"
    const fetchData = async () => {
      const api = await fetch(url)
      const data = await api.json();
      setData(data.meals)
    }
    fetchData();
  }, [])
  


  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };



  return (
    <>
      <div
        style={{
          height: "56vh", width: "90%", margin: "auto",

        }}>
        <Slider {...settings}
          style={{ margin: "1rem" }}>

          {data.map((data) => {
            return (
              <Link to={`/${data.idMeal}`} key={data.idMeal}>
                <div className='slider'>
                  <img src={data.strMealThumb
                  } style={{ width: "18rem", height: "17rem", }} />
                </div>
              </Link>
            )
          })}

        </Slider>


      </div>
    </>
  )
}

export default PopularSlider