import React from 'react';
import { DestinationData } from './types';

function TrendingDestinations({list}:{list:DestinationData[]}) {
  return (
    <div>
      <h2>Trending Destination Highlights</h2>
      <div className="destinations" >
        {list.map(dest => (
          <div key={dest.cityId} className="destination-card" >
            <img 
              src={dest.thumbnailUrl} 
              alt={dest.cityName} 
            />
            <p>{dest.cityName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingDestinations;
