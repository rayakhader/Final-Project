import React, { useEffect, useState } from 'react'
import Search from './Search'
import FeatureDeals from './FeatureDeals'
import RecentlyVisited from './RecentlyVisited'
import TrendingDestinations from './TrendingDestinations'
import { getFeatureDeals } from '../../APIs/Home/getFeatureDeals'
import { getRecentHotel } from '../../APIs/Home/getRecentHotel'
import { getTrendingDest } from '../../APIs/Home/getTrendingDest'
import './home.css'

function Home() {
  const [featureDeals, setFeatureDeals] = useState([])
  const [recentHotel, setRecentHotel] = useState([])
  const [trendingDest, setTrendingDest] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      await getFeatureDeals()
        .then((data) => {
          setFeatureDeals(data)
        })
      await getRecentHotel(1)
        .then((data) => {
          setRecentHotel(data)
        })
      await getTrendingDest()
        .then((data) => {
          setTrendingDest(data)
        }).finally(() => {
          setLoading(false)
        })
    }
    fetchData()
  }, [])
  return (
    <div>
      {loading ?
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
        : <>
          <Search />
          <FeatureDeals list={featureDeals} />
          <RecentlyVisited list={recentHotel} />
          <TrendingDestinations list={trendingDest} />
        </>

      }


    </div>
  )
}

export default Home
