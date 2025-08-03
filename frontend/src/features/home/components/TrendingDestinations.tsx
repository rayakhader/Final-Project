import React from 'react';
import { DestinationData } from '../types';
import { useNavigate } from 'react-router-dom';

function TrendingDestinations({list}:{list:DestinationData[]}) {
  const navigate = useNavigate()
  function handleViewCity(cityId:number){
    const city = list.find(c=>c.cityId === cityId)
    navigate(`/cities/${cityId}`,{
      state:{city : city}
    })
  }
  return (
    <div>
      <h2>Trending Destination Highlights</h2>
      <div className="destinations"  >
        {list.map(dest => (
          <div key={dest.cityId} className="destination-card" onClick={()=>handleViewCity(dest.cityId)} >
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
