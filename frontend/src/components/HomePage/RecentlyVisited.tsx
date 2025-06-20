import React from 'react';

function RecentlyVisited() {
  const visitedHotels = [
    {
      id: 1,
      name: 'Hotel Sunshine',
      location: 'Miami, FL',
      price: 150,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: 200,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'City Center Inn',
      location: 'New York, NY',
      price: 250,
      rating: 3,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const renderStars = (rating:number) => (
    <>
      {Array(rating).fill(0).map((_, i) => (
        <span key={i} style={{ color: 'gold' }}>★</span>
      ))}
      {Array(5 - rating).fill(0).map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#ccc' }}>★</span>
      ))}
    </>
  );

  return (
    <div>
      <h2>User's Recently Visited Hotels</h2>
      <div className="recent-hotels">
        {visitedHotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className='hotel-image' />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <div>{renderStars(hotel.rating)}</div>
            <p>${hotel.price} per night</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyVisited;
