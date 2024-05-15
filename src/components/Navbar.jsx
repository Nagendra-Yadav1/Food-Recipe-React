import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate=useNavigate()
    const[input,setInput]=useState(" ")
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search/${input}`)

    }
    return (
        <>
            <div className="nav">
                <div className="left">
                    <div>
                        <Link className='link' to={"/"}>
                            <h2>React Recipe</h2>
                        </Link>
                    </div>
                </div>

                <div className="search">
                    <form onSubmit={handleSubmit} >
                        <input type="text" onChange={(event)=>setInput(event.target.value)} />
                    </form>
                </div>

                <div className="right">
                    <Link to={"/category/indian"} className='link'>
                        <div>Indian</div>
                    </Link>
                    <Link className='link' to={"/category/american"}>
                        <div>American</div>
                    </Link>
                    <Link className='link' to={"/category/british"}>
                        <div>British</div>
                    </Link>
                    <Link className='link' to={"/category/chinese"}>
                        <div>Chinese</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar