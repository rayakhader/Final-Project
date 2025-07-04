import React, { useEffect, useState } from 'react'
import Search from './Search'
import FeatureDeals from './FeatureDeals'
import RecentlyVisited from './RecentlyVisited'
import TrendingDestinations from './TrendingDestinations'
import { getFeatureDeals } from '../../APIs/Home/getFeatureDeals'
import { getRecentHotel } from '../../APIs/Home/getRecentHotel'
import { getTrendingDest } from '../../APIs/Home/getTrendingDest'
import './home.css'
import { DestinationData, FeatureDealData, RecentlyVisitedHotelData } from './types'
import LoadingSpinner from '../LoadingSpinner'

function Home() {
  const [featureDeals, setFeatureDeals] = useState<FeatureDealData []>([])
  const [recentHotel, setRecentHotel] = useState<RecentlyVisitedHotelData[]>([])
  const [trendingDest, setTrendingDest] = useState<DestinationData []>([])
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
        <LoadingSpinner />
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
