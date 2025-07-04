import React from 'react'
import StarRating from './StarRating';
// import ReactStars from "react-rating-stars-component";

 type Hotel = {
        id: number;
        name: string;
        location: string;
        price: number;
        images: string[];
        discountPrice: number;
        rating: number; // Optional rating field
    }
    const hotels =[
        {
            id: 1,
            name: 'Hotel Sunshine',
            location: 'Miami, FL',
            price: 150,
            images: [ 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
            ],
            discountPrice: 120,
            rating: 4.5 // Example rating
        },
        {
            id: 2,
            name: 'Mountain Retreat',
            location: 'Aspen, CO',
            price: 200,
            images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
            ],
            discountPrice: 180,
            rating: 4.0 // Example rating
        },
        {
            id: 3,
            name: 'City Center Inn',
            location: 'New York, NY',
            price: 250,
            images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'],
            discountPrice: 220,
            rating: 4.8 // Example rating
        },{
            id: 4,
            name: 'Beachside Resort',
            location: 'San Diego, CA',
            price: 300,
            images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
                 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'],
            discountPrice: 270,
            rating: 4.2 // Example rating
        }
        ,{
            id: 5,
            name: 'Countryside Lodge',
            location: 'Napa Valley, CA',
            price: 180,
            images: ['https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
                ,
                'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=600&q=80'],
            discountPrice: 150,
            rating: 4.6 // Example rating
        }
    ]

function FeatureDeals() {
   
    const [currentIndex, setCurrentIndex] = React.useState<number[]>(
        hotels.map(() => 0)
    );
    function handlePrevious(index:number) {
        console.log(currentIndex[index]);
         setCurrentIndex(prev => {
    return prev.map((item, idx) => {
      if (idx === index && item > 0) {
        return item - 1;
      }
      return item;
    });
  });
    }
    function handleNext(hotel :Hotel,index:number) {
        console.log(currentIndex[index]);
        setCurrentIndex(prev => {
    return prev.map((item, idx) => {
      if (idx === index && item < hotel.images.length - 1) {
        return item + 1;
      }
      return item;
    });
  });
       
    }
  return (
    <div>
        <h2>Feature Deals</h2>
        <div className="feature-deals">
            {hotels.map((hotel,index) => (
                <div key={hotel.id} className="hotel-card">
                   <div className='hotel-gallery'>
                    <span className='prev-arrow' onClick={()=>handlePrevious(index)}>⬅</span>
                    <span className='next-arrow' onClick={()=>handleNext(hotel,index)}>➡</span>
                    <img src={hotel.images[currentIndex[index]]} alt={hotel.name} className="hotel-image" />
                    </div>
                    <h3>{hotel.name}</h3>
                    <p>{hotel.location}</p>
                    <p>${hotel.price} per night</p>
            <p>Discount: ${hotel.discountPrice}</p>
          <StarRating rating={hotel.rating} />
                </div>
            ))}
            </div>


      
    </div>
  )
}

export default FeatureDeals
