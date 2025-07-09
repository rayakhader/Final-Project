import './hotel.css'
import LoadingSpinner from '../LoadingSpinner';
import { useHotel } from '../../hooks/useHotel';
import { MdShoppingBag } from 'react-icons/md';


function Hotel() {
  const { hotelDetails,
    availableRooms,
    checkIn,
    checkOut,
    fullscreen,
    reviews,
    loading,
    cartItems,
    validationError,
    setCheckIn,
    setCheckOut,
    setFullscreen,
    handleFetchAvailableRoom,
    handleAddToCart,
    handleOpenCart } = useHotel()


  const ShoppingCartIcon = MdShoppingBag as unknown as React.FC;

  if (loading) return <LoadingSpinner />

  return (
    <div className="hotel-page">
      <header className="hotel-header">
        <button className="cart-button" onClick={handleOpenCart}>
          <ShoppingCartIcon />
          <span className='cart-items'>{cartItems.length}</span>
        </button>
      </header>

      <div className="hotel-content">
        <aside className="hotel-left">
          <section className="hotel-details">
            <h2>{hotelDetails?.hotelName}</h2>
            <p>⭐ {hotelDetails?.starRating} stars</p>
            <p>{hotelDetails?.description}</p>
            <p><strong>Location:</strong> {hotelDetails?.location}</p>
          </section>

          <section className="hotel-map">
            <h3>Location on Map</h3>
            <div className="map-placeholder">
              {hotelDetails && (
                <iframe
                  title="Hotel Location"
                  className="map-frame"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps?q=${hotelDetails.latitude},${hotelDetails.longitude}&z=15&output=embed`}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </section>
        </aside>

        <main className="hotel-right">
          <section className="hotel-gallery">
            <h3>Picture Gallery</h3>
            <div className={`gallery-placeholder ${fullscreen ? 'fullscreen' : ''}`} onClick={() => setFullscreen(!fullscreen)}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1" alt={hotelDetails?.hotelName} />
              <span className="fullscreen-hint">{fullscreen ? 'Exit fullscreen' : 'Click to view fullscreen'}</span>
            </div>
          </section>

          <section className="hotel-rooms">
            <h3>List of Available Rooms</h3>
            <p>Available Rooms: {hotelDetails?.availableRooms}</p>
            <div className='date-picker'>
              <label>
                <span>Check-in</span>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} name="checkIn" id="checkIn" />
              </label>
              <label>
                <span>Check-out</span>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} name="checkOut" id="checkOut" />
              </label>
              <button disabled={!checkIn || !checkOut || Boolean(validationError)} onClick={handleFetchAvailableRoom}>
                Check Availability
              </button>
            </div>
            {validationError && <p className='date-picker-error'>{validationError}</p>}

            <div className="rooms-placeholder">
              {availableRooms.length === 0 && (
                <p>No available rooms for the selected dates.</p>
              )}
              {availableRooms.map((room) => (
                <div key={room.roomId} className="room-card">
                  <img src={room.roomPhotoUrl} alt={`Room ${room.roomNumber}`} className="room-image" />

                  <div className="room-info">
                    <h4>{room.roomType} — Room #{room.roomNumber}</h4>
                    <p>👤 Adults: {room.capacityOfAdults} | 🧒 Children: {room.capacityOfChildren}</p>
                    <p className="room-price">${room.price} per night</p>

                    <div className="room-amenities">
                      {room.roomAmenities.map((amenity, idx) => (
                        <span key={idx} className="amenity-chip">{amenity.name}</span>
                      ))}
                    </div>
                    <button disabled={cartItems.includes(room.roomId)} className="add-to-cart-btn" onClick={() => handleAddToCart(room.roomId)}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="hotel-reviews">
            <h3>Guest Reviews</h3>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              <ul className="reviews-list">
                {reviews.map((review) => (
                  <li key={review.reviewId} className="review-item">
                    <div className="review-header">
                      <strong>{review.customerName}</strong>
                      <span className="review-rating">⭐ {review.rating}/5</span>
                    </div>
                    <p className="review-description">{review.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

        </main>
      </div>
    </div>
  )
}

export default Hotel
