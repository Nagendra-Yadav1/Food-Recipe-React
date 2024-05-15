import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
function Category() {
    const { name } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
        const fetchData = async () => {
            const api = await fetch(url)
            const data = await api.json();
            setData(data.meals)
        }
        fetchData();
    }, [name,data])







    return (
        <>
            <Navbar />

            <div style={{ width: "90%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(15rem,1fr)", gridGap: "1rem", marginTop: "2rem" }}>
                {data.map((item) => {
                    return (
                        <Link to={`/${item.idMeal}`} className='link'>
                        <div style={{ textAlign: "center" }}>
                            <div className="img">
                                <img src={item.strMealThumb} style={{ width: "13rem" }} />
                            </div>
                            <h2 style={{marginTop:"7px"}}>{item.strMeal}</h2>
                        </div>
                        </Link>
                    )
                })}
            </div>
            <TrendingSlider />
        </>
    )
}
export default Category