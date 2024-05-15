import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'
import{BrowserRouter  as Router,Routes,Route } from "react-router-dom"
function Home() {
    return (
        <>
            <div className="main">
                <Navbar />
                <PopularSlider/>
                <TrendingSlider/>
            </div>
        </>
    )
}

export default Home