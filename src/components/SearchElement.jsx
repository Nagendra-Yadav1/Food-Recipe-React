import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams } from 'react-router-dom';

function SearchElement() {
    const { searchTerm } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
                const response = await fetch(url);
                const result = await response.json();
                setData(result.meals || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [searchTerm]);

    return (
        <>
            <Navbar />
            <div style={{ width: "90%", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(15rem,1fr)", gridGap: "1rem", marginTop: "2rem" }}>
                {data && data.map((item) => (
                    <Link key={item.idMeal} to={`/${item.idMeal}`} className='link'>
                        <div style={{ textAlign: "center" }}>
                            <div className="img">
                                <img src={item.strMealThumb} alt={item.strMeal} style={{ width: "13rem" }} />
                            </div>
                            <h2 style={{ marginTop: "7px" }}>{item.strMeal}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <TrendingSlider />
        </>
    );
}

export default SearchElement;
