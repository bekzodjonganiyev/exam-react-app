import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/themeContext'

import "./cardLink.css"
const CardLink = ({ img, title, id }) => {

    const {state} = React.useContext(Context)

    return (
        <Link to={`/picture/${id}`} >
            <div className='card'>
                <div className='img-wrapper'>
                    <img src={img} alt={title} />
                </div>
                <p className={`${state ? "color_white" : ""}`}>{title}</p>
            </div>
        </Link>
    )
}

export default CardLink