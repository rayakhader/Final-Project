import { useCheckout } from '../features/checkout/hooks/useCheckout';
import '../features/checkout/styles/checkout.css';


function Checkout() {
  const { rooms, formik, selectedRoomId, handleChangeRoomId } = useCheckout();
  const isFormInvalid =
  !selectedRoomId ||
  !formik.values.fullName ||
  !formik.values.email ||
  !formik.values.phone ||
  !formik.values.paymentMethod ||
  Object.keys(formik.errors).length > 0;

  return (
    <div className="checkout-page">
      <h1>Checkout - Book Your Room</h1>

      <section className="checkout-section">
        <h2>1️⃣ Select Your Room</h2>
        <div className="rooms-summary">
          {rooms.map((room) => (
            <label key={room.roomId} className="room-summary-card">
              <div className="room-radio">
                <input
                  type="radio"
                  name="selectedRoom"
                  value={room.roomId}
                  checked={selectedRoomId === room.roomId}
                  onChange={handleChangeRoomId}
                />
              </div>

              <div className="room-details">
                <img src={room.roomPhotoUrl} alt={room.roomType} className="room-image" />
                <div className="room-info">
                  <h3>{room.roomType} Room #{room.roomNumber}</h3>
                  <p className="price">Price: ${room.price}</p>
                  <p>Adults: {room.capacityOfAdults} | Children: {room.capacityOfChildren}</p>
                  <ul className="amenities">
                    {room.roomAmenities.map((amenity, index) => (
                      <li key={index}>
                        <strong>{amenity.name}:</strong> {amenity.description}
                      </li>
                    ))}
                  </ul>
                  {!room.availability && (
                    <span className="unavailable">Currently Unavailable</span>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>

      <form onSubmit={formik.handleSubmit} className="checkout-form">
        <section className="checkout-section">
          <h2>2️⃣ Your Information</h2>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="error">{formik.errors.fullName}</div>
            )}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}
          </label>
        </section>

        <section className="checkout-section">
          <h2>3️⃣ Payment Method</h2>
          <div className="payment-methods">
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={formik.values.paymentMethod === 'credit_card'}
                onChange={formik.handleChange}
              />
              <img
                src="/images/atm-card.png"
                alt="PayPal"
                width={50}
                height={50}
              />
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formik.values.paymentMethod === 'paypal'}
                onChange={formik.handleChange}
              />
              <img
                src="/images/paypal-logo.png"
                alt="PayPal"
                width={50}
                height={50}
              />
            </label>
          </div>
        </section>


        <section className="checkout-section">
          <h2>4️⃣ Special Requests</h2>
          <textarea
            name="specialRequests"
            placeholder="Special requests"
            value={formik.values.specialRequests}
            onChange={formik.handleChange}
          />
        </section>

        <button type="submit" className="confirm-btn" disabled={isFormInvalid}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Checkout;
