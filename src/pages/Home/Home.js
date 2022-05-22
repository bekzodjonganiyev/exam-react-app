import React, { useEffect, useState } from 'react'
import axios from "axios"

import CardLink from '../../components/CardLink/CardLink'

import AvatarHome1 from "../../assets/Images/avatar-home-1.png"
import AvatarHome2 from "../../assets/Images/food-and-drenk.png"


import "./home.css"
import { Link, useParams } from 'react-router-dom'

const Home = () => {

  const { albumId } = useParams()

  const [homeData, setHomeData] = useState({
    isFatched: false,
    data: {},
    error: null,
  })

  const [middleData, setMiddleData] = useState({
    isFatched: false,
    data: {},
    error: null,
  })

  const [bottomData, setBottomData] = useState({
    isFatched: false,
    data: {},
    error: null,
  })


  useEffect(() => {

    // TOP SECTION
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
      .then((res) => {
        setHomeData({
          isFatched: true,
          data: res.data,
          error: false
        })
      })
      .catch(() => {
        setHomeData({
          isFatched: true,
          data: {},
          error: true
        })
      })

    // MIDDLE SECTION
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=2`)
      .then((res) => {
        setMiddleData({
          isFatched: true,
          data: res.data,
          error: false
        })
      })
      .catch(() => {
        setMiddleData({
          isFatched: true,
          data: {},
          error: true
        })
      })

    // BOTTOM SECTION
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=3`)
      .then((res) => {
        setBottomData({
          isFatched: true,
          data: res.data,
          error: false
        })
      })
      .catch(() => {
        setBottomData({
          isFatched: true,
          data: {},
          error: true
        })
      })

  }, [albumId])


  return (
    <div className='home-page'>

      {/*TOP SECTION*/}
      <div className='top-section'>
        <Link to={`/chanel/1`} className='top-section-header'>
          <img src={AvatarHome1} alt="Avatar Home 1" />
          <h3>Dollie Blair</h3>
        </Link>
        <div className='section'>
          {
            homeData.isFatched ?
              homeData.data.map(item => (
                <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
              )) : ""
          }
        </div>
      </div>

      {/*MiDDLE SECTION*/}
      <div className='middle-section'>
        <h3>Recommended</h3>
        <div className='section'>
          {
            middleData.isFatched ?
              middleData.data.map(item => (
                <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
              )) : ""
          }
        </div>
      </div>

      {/*BOTTOM SECTION*/}
      <div className='bottom-section'>
        <Link to={`/chanel/3`} className='bottom-section-header'>
          <img src={AvatarHome2} alt="Avatar Home 1" />
          <h3>Food & Drink</h3>
        </Link>
        <div className='section'>
          {
            bottomData.isFatched ?
              bottomData.data.map(item => (
                <CardLink id={item.id} img={item.thumbnailUrl} title={item.title} key={item.id} />
              )) : ""
          }
        </div>
      </div>

    </div>
  )
}

export default Home