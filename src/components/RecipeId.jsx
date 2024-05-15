import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'
function RecipeId() {
    const { idMeal } = useParams()
    const [data, setData] = useState([])
    const[active,setActive]=useState("ingredient")
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        const fetchData = async () => {
            const api = await fetch(url)
            const data = await api.json();
            setData(data.meals[0])
        }
        fetchData();
    }, [idMeal])
    return (
        <>
            <main className='main'>
                <Navbar />
                <div style={{
                    width: "90%",
                    margin: "2rem",
                    textAlign: "center"
                }}>
                    <h1 style={{ marginLeft: "100px" }}>{data.strMeal}</h1>

                    <div style={{
                        display: "flex",
                        width: "90%",
                        margin: "auto",
                        textAlign: "center",
                        gap:"2rem"
                    }}>
                        <div className='img' style={{ width: "30%" }}>
                            <img src={data.strMealThumb} style={{ width: "18rem" }} />
                        </div>
                        <div className='content' style={{ width: "60%" }}>
                            <button className='btn' onClick={()=>setActive("ingredient")}>Ingredient</button>
                            <button className='btn' onClick={()=>setActive("instruction")}>Instruction</button>
                            {active==="ingredient"?(                            <div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient1} - {data.strMeasure1}</div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient2} - {data.strMeasure2}</div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient3} - {data.strMeasure3}</div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient4} - {data.strMeasure4}</div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient5} - {data.strMeasure5}</div>
                                <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{data.strIngredient6} - {data.strMeasure6}</div>
                            </div>):<p>{data.strInstructions}</p>}
                        </div>
                    </div>
                </div>
                <div>
                <TrendingSlider/>
                </div>
            </main>
        </>
    )
}

export default RecipeId