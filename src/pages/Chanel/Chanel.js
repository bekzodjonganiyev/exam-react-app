import "./chanel.css"

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import CardLink from "../../components/CardLink/CardLink"

const Chanel = () => {

    const { id } = useParams()


    const [showPicture, setShowPicture] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    const [pictureList, setPictureList] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {

        //SHOW PICTURE 
        axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
            .then(res => {
                setShowPicture({
                    isFatched: true,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setShowPicture({
                    isFatched: true,
                    data: {},
                    error: true
                })
            })

        //LIST PICTURE
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(res => {
                setPictureList({
                    isFatched: true,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setPictureList({
                    isFatched: true,
                    data: {},
                    error: true
                })
            })

    }, [id])

    console.log(showPicture);
    console.log(pictureList , "hhhhh");

    return (
        <div className="single-picture-page">
            <div className="show-picture">
                {
                    showPicture.isFatched ?
                        showPicture.data.map(item => (
                            <img src={item.url} alt={item.title} />
                        )) : ""
                }
            </div>
            <div className="list-picture">
                <h1>Next</h1>
                <div style={{ margin: "0 auto" }}>
                    {
                        pictureList.isFatched ?
                            pictureList.data.splice(0, 20).map(item => (
                                <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
                            )) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Chanel