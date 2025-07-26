import React, { useEffect, useState } from 'react'
import '../features/home/styles/home.css';
import { getFeatureDeals } from '../features/home/services/getFeatureDeals'
import { getRecentHotel } from '../features/home/services/getRecentHotel'
import { getTrendingDest } from '../features/home/services/getTrendingDest'
import { FeatureDealData,RecentlyVisitedHotelData,DestinationData } from '../features/home/types/types'
import SearchBar from '../features/home/components/Search'
import FeatureDeals from '../features/home/components/FeatureDeals'
import RecentlyVisited from '../features/home/components/RecentlyVisited'
import TrendingDestinations from '../features/home/components/TrendingDestinations'
import LoadingSpinner from '../components/LoadingSpinner'

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
          <SearchBar />
          <FeatureDeals list={featureDeals} />
          <RecentlyVisited list={recentHotel} />
          <TrendingDestinations list={trendingDest} />
        </>

      }


    </div>
  )
}

export default Home
