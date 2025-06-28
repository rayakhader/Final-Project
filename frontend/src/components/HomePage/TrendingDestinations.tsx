import React from 'react';

type Destination = {
  cityId: number,
  cityName: string,
  countryName: string,
  description: number,
  thumbnailUrl: string,
}

function TrendingDestinations({list}:{list:Destination[]}) {
   

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
