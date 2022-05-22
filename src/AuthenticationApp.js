import React, { useState } from 'react'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

import "./assets/app.css"

const AuthenticationApp = () => {

  const [visible, setVisile] = useState(false)

  const openSidebar = () => {
    setVisile(!visible)
  }

  return (
    <div className='app'>
      <div className={`sidebar ${visible ? "block" : "none"}`}>
        <Sidebar />
      </div>
      <div className='main'>
        <Header openSidebar={openSidebar} />
        <div className={`main-content ${visible ? "" : "left-padding"}`}>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default AuthenticationApp