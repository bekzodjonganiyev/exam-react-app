import React, {
    // useEffect,
    useState
} from 'react'
import {
    NavLink,
    // useParams
} from 'react-router-dom'

import {
    Trending,
    Subscriptions,
    Library,
    History,
    WatchLater,
    Favourites,
    Liked,
    Music,
    Games,
    Setting,
} from "../../assets/Icons/Icons"
import Avatar from "../../assets/Images/Userpic.png"
import DarkMode from "../../assets/Images/dark-mode.png"
import LightMode from "../../assets/Images/light-mode.png"

import "./sidebar.css"
// import axios from 'axios'
// import ChanelLink from '../ChanelLink/ChanelLink'

const Sidebar = () => {

    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    // const [chanel, setChanel] = useState({
    //     isFatched: false,
    //     data: {},
    //     error: null
    // })

    // const { id } = useParams

    // useEffect(() => {

    //     axios.get(`https://jsonplaceholder.typicode.com/photos`)
    //         .then((res) => {
    //             setChanel({
    //                 isFatched: true,
    //                 data: res.data,
    //                 error: false
    //             })
    //         })
    //         .catch(() => {
    //             setChanel({
    //                 isFatched: true,
    //                 data: {},
    //                 error: true
    //             })
    //         })
    // }, [id])


    return (
        <div className='links'>
            <NavLink className={`link`} to="/"><Trending /> Home</NavLink>
            <NavLink className={`link`} to="/trending"><Trending /> Trending</NavLink>
            <NavLink className={`link`} to="/subscriptions"><Subscriptions /> Subscriptions</NavLink>
            <br />
            <NavLink className={`link`} to="/library"><Library /> Library</NavLink>
            <NavLink className={`link`} to="/history"><History /> History</NavLink>
            <NavLink className={`link`} to="/watch-later"><WatchLater /> Watch Later</NavLink>
            <NavLink className={`link`} to="/favourites"><Favourites /> Favourites</NavLink>
            <NavLink className={`link`} to="/liked-videos"><Liked /> Liked Videos</NavLink>
            <NavLink className={`link`} to="/music"><Music /> Music </NavLink>
            <NavLink className={`link`} to="/games"> <Games /> Games  </NavLink>
            <br />

            <h2>Subscriptions</h2>
            <br />
            {/* {
                chanel.isFatched ? 
                    chanel.data.splice(0,8).map(item => (
                        <ChanelLink chanelId={item.albumId} chanelName="Chanel Name" img={item.thumbnailUrl}/>
                    )) : ""
            } */}
            <NavLink className={`link`} to="/chanel/4"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Single Chanel</NavLink>
            <NavLink className={`link`} to="/chanel/5"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> History</NavLink>
            <NavLink className={`link`} to="/chanel/6"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Watch Later</NavLink>
            <NavLink className={`link`} to="/chanel/7"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Favourites</NavLink>
            <NavLink className={`link`} to="/chanel/8"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Liked Videos</NavLink>
            <NavLink className={`link`} to="/chanel/9"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Music </NavLink>
            <NavLink className={`link`} to="/chanel/10"><img src={Avatar} alt="Chanel avatar" width="25" height="25" /> Games  </NavLink>
            <br />

            <ul className={`mode-setting ${theme ? "sidebar-hidden" : "sidebar-block"}`}>
                <li className='mode light-mode'> <img src={LightMode} className='mode-img' alt='Mode Img' /> Light </li>
                <li className='mode dark-mode'> <img src={DarkMode} className='mode-img' alt='Mode Img' /> Dark  </li>
            </ul>
            <NavLink className={`link`} to="#" onClick={toggleTheme}><Setting /> Setting </NavLink>


        </div>
    )
}

export default Sidebar