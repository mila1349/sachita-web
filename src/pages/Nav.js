import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'

export default function(){
    return(
        <div className="nav">
            <Link
                to="/"
            >
            <h2>Home</h2>
            </Link>


            <Link
                to="/contact"
            >
            <h2>Contact</h2>
            </Link>
        </div>
    )
}