import { useNavigate } from "react-router-dom"
import { FeatureDealData } from "../types"
import StarRating from "./StarRating"

function FeatureDeals({ list }: { list: FeatureDealData[] }) {
  const navigate = useNavigate()
  function handleViewHotel (hotelId:number){
    navigate(`/hotels/${hotelId}`)
  }
  return (
    <div>
      <h2>Feature Deals</h2>
      <div className="feature-deals">
        {list.map((hotel) => (
          <div key={hotel.hotelId} className="hotel-card" onClick={()=>handleViewHotel(hotel.hotelId)}>
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
