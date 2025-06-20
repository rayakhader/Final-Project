import React from 'react';

function TrendingDestinations() {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Barcelona',
      image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div>
      <h2>Trending Destination Highlights</h2>
      <div className="destinations" >
        {destinations.map(dest => (
          <div key={dest.id} className="destination-card" >
            <img 
              src={dest.image} 
              alt={dest.name} 
            />
            <p>{dest.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingDestinations;
