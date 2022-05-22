import React from 'react'
import { Link } from 'react-router-dom'

import "./singleCardLink.css"
const SingleCardLink = ({ img, title, id }) => {
    return (
        <Link to={`/picture/${id}`} >
            <div className='card'>
                <div className='img-wrapper'>
                    <img src={img} alt={title} />
                </div>
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default SingleCardLink