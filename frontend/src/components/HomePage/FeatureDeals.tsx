import StarRating from './StarRating';
import { FeatureDealData } from './types';

function FeatureDeals({ list }: { list: FeatureDealData[] }) {
  return (
    <div>
      <h2>Feature Deals</h2>
      <div className="feature-deals">
        {list.map((hotel) => (
          <div key={hotel.hotelId} className="hotel-card">
            <div className='hotel-gallery'>
              <img src={hotel.roomPhotoUrl} alt={hotel.hotelName} className="hotel-image" />
            </div>
            <h3>{hotel.hotelName}</h3>
            <p>{hotel.cityName}</p>
            <p>${hotel.originalRoomPrice} per night</p>
            <p>Discount: ${hotel.finalPrice}</p>
            <StarRating rating={hotel.hotelStarRating} />
          </div>
        ))}
      </div>



    </div>
  )
}

export default FeatureDeals
