import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHotelById } from '../../APIs/Hotel/getHotelById'
import './hotel.css'

type Amenity = {
  name: string;
  description: string;
};

type HotelDetails = {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
};

function Hotel() {
    const {id} = useParams()
    const [hotelDetails, setHotelDetails] = useState<HotelDetails>()
    const [availableRooms,setAvailableRooms] = useState([])
    useEffect(()=>{
        if(id){
            const fetchData = async()=>{
           await getHotelById(parseInt(id))
           .then((data)=>{
            console.log(data)
            setHotelDetails(data)
           })
        }
            fetchData()
        }
    },[id])
  return (
     <div className="hotel-page">
      {/* Top Bar */}
      <header className="hotel-header">
        <button className="cart-button">
          {/* <FaShoppingBag /> */}
        </button>
      </header>

      {/* Main Content */}
      <div className="hotel-content">
        <aside className="hotel-left">
          <section className="hotel-details">
            <h3>4.1 Hotel Information</h3>
            <p><strong>Name:</strong> {hotelDetails?.hotelName}</p>
            <p><strong>City:</strong> {hotelDetails?.location}</p>
            <p><strong>Description:</strong> {hotelDetails?.description}</p>
          </section>

          <section className="hotel-map">
            <h3>Location on Map</h3>
            {/* You can embed Google Map or a static placeholder */}
            <div className="map-placeholder">Map Here</div>
          </section>
        </aside>

        <main className="hotel-right">
          <section className="hotel-gallery">
            <h3>4.2 Picture Gallery</h3>
            <div className="gallery-placeholder">
                <img src={hotelDetails?.imageUrl} alt={hotelDetails?.hotelName} />
            </div>
          </section>

          <section className="hotel-rooms">
            <h3>4.2 List of Available Rooms</h3>
            <p>Available Rooms: {hotelDetails?.availableRooms}</p>
            <div className="rooms-placeholder">Rooms List Here</div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Hotel
