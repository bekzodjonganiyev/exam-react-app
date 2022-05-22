import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import HomePage from "../../pages/Home/Home"
import TrendingPage from "../../pages/Trending"
import SubscriptionsPage from "../../pages/Subscriptions"
import LibraryPage from "../../pages/Library"
import HistoryPage from "../../pages/History"
import WatchLaterPage from "../../pages/WatchLater"
import FavouritesPage from "../../pages/Favourites"
import LikedVideosPage from "../../pages/LikedVideos"
import MusicPage from "../../pages/Music"
import GamesPage from "../../pages/Games"
import SingleChanel from '../../pages/SingleChanel/SingleChanel'
import SinglePicture from '../../pages/SinglePicture/SinglePicture'
import Chanel from "../../pages/Chanel/Chanel"

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/watch-later" element={<WatchLaterPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/liked-videos" element={<LikedVideosPage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/chanel/:id" element={<SingleChanel />} />
                <Route path="/picture" element={<Chanel />} />
                <Route path="/picture/:id" element={<SinglePicture />} />
            </Routes>

        </>
    )
}

export default Main