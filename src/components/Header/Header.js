import React from 'react'

import { Apps, Menu, Notification, VideoCamera } from "../../assets/Icons/Icons"
import YtLogo from "../../assets/Images/you-tube-logo.png"
import Avatar from "../../assets/Images/Userpic.png"

import "./header.css"

const Header = ({ openSidebar }) => {
    return (
        <header className='header'>
            <div className='left-elements'>
                <div>
                    <button type='button' onClick={openSidebar} className="open-close">
                        <Menu />
                    </button>
                    <img src={YtLogo} alt="YuoTube Logo" />
                </div>
                <input className='search-input' type="search" placeholder='Search...' />
            </div>

            <div className='right-elements'>
                <VideoCamera />
                <Apps />
                <Notification />
                <img src={Avatar} alt='Profile Img' />
            </div>

        </header>
    )
}

export default Header