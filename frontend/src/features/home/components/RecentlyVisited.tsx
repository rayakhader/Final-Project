import React from 'react'
import { RecentlyVisitedHotelData } from '../types';
import { useNavigate } from 'react-router-dom';


function RecentlyVisited({ list }: { list: RecentlyVisitedHotelData[] }) {
  const navigate = useNavigate()

  const renderStars = (rating: number) => (
    <>
      {Array(rating).fill(0).map((_, i) => (
        <span key={i} style={{ color: 'gold' }}>★</span>
      ))}
      {Array(5 - rating).fill(0).map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#ccc' }}>★</span>
      ))}
    </>
  );
  function handleViewHotel(hotelId: number) {
    navigate(`/hotels/${hotelId}`)
  }

  return (
    <div>
      <h2>User's Recently Visited Hotels</h2>
      <div className="recent-hotels">
        {list.map(hotel => (
          <div key={hotel.hotelId} className="hotel-card" onClick={() => handleViewHotel(hotel.hotelId)}>
            <img src={hotel.thumbnailUrl} alt={hotel.hotelName} className='hotel-image' />
            <h3>{hotel.hotelName}</h3>
            <p>{hotel.cityName}</p>
            <div>{renderStars(hotel.starRating)}</div>
            <p>${hotel.priceLowerBound} per night</p>
            <p>${hotel.priceUpperBound} per night</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyVisited;
