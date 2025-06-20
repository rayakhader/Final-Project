import React from 'react'
import Search from './Search'
import FeatureDeals from './FeatureDeals'
import RecentlyVisited from './RecentlyVisited'
import TrendingDestinations from './TrendingDestinations'

function Home() {
  return (
    <div>
    <Search />
    <FeatureDeals />
    <RecentlyVisited />
    <TrendingDestinations />
      
    </div>
  )
}

export default Home
