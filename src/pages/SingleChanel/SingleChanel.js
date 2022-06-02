import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Notification, SearchIcon } from '../../assets/Icons/Icons'

import SingleImg from "../../assets/Images/Cover.png"
import Img from "../../assets/Images/Userpic.png"
import ChanelCover from "../../assets/Images/chanel-cover.png"
import Oval1 from "../../assets/Images/Oval-1.png"
import Oval2 from "../../assets/Images/Oval-2.png"
import Oval3 from "../../assets/Images/Oval-3.png"

import "./singleChanel.css"
import axios from 'axios'
import CardLink from '../../components/CardLink/CardLink'
// import { Context } from '../../context/themeContext'


const SingleChanel = () => {

    const { id } = useParams()

    // const {state} = React.useContext(Context)

    const [chanel, setChanel] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {

        //SHOW PICTURE 
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(res => {
                setChanel({
                    isFatched: true,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setChanel({
                    isFatched: true,
                    data: {},
                    error: true
                })
            })

    }, [id])


    return (
        <div className='single-chanel'>

            <img className='big-img' src={SingleImg} alt="Single Img" />

            <div className='single-chanel-info'>
                <div className='left-side'>
                    <img src={Img} alt={"img"} />
                    <div>
                        <h3>Chanel Name</h3>
                        <p>Subscribers Number</p>
                    </div>
                </div>

                <div className='right-side'>
                    <Notification />
                    <button className='right-side-btn'>Subscribe</button>
                </div>
            </div>

            <div className='single-chanel-header'>
                <div className='header-links'>
                    <Link to="#">Home</Link>
                    <Link to="#">Videos</Link>
                    <Link to="#">Playlists</Link>
                    <Link to="#">Channels</Link>
                    <Link to="#">Discussion</Link>
                    <Link to="#">About</Link>
                    <SearchIcon />
                </div>

                <h4>Recommended Channel</h4>
            </div>

            <div className='single-chanel-section'>
                <div className='left-section'>
                    <div style={{ width: "350px", marginRight: "20px " }}>
                        <img src={ChanelCover} alt="chanel cover" width="100%" />
                    </div>
                    <div style={{ width: "400px" }}>
                        <h3>
                            Choosing The Best Audio Player Software For Your Computer
                        </h3>
                        <p>
                            Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads.
                        </p>

                    </div>
                </div>

                <div className='right-section' style={{ marginTop: "-20px" }}>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <img src={Oval1} alt="Avatar1" style={{ marginRight: "20px" }} />
                        <p style={{}}>Flora Benson</p>
                    </div>

                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <img src={Oval2} alt="Avatar1" style={{ marginRight: "20px" }} />
                        <p style={{}}>Violet Cobb</p>
                    </div>

                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <img src={Oval3} alt="Avatar1" style={{ marginRight: "20px" }} />
                        <p style={{}}>Phillip Mullins</p>
                    </div>
                </div>
            </div>

            <div className='section'>
                {
                    chanel.isFatched ?
                        chanel.data.splice(0, 10).map(item => (
                            <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
                        )) : ""
                }
            </div>

        </div>
    )
}

export default SingleChanel