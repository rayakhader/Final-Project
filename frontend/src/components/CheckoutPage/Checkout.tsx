import React, { useEffect, useState } from 'react';
import { getCartItemsFromStorage } from '../../utils/cartStorage';
import { getRoomById } from '../../APIs/Room/getRoomById';
import { Room } from './types';
import './checkout.css';
import { useParams } from 'react-router-dom';
import { getHotelById } from '../../APIs/Hotel/getHotelById';
import { HotelDetails } from '../Hotel/types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Checkout() {
  const { id } = useParams();
  const items = getCartItemsFromStorage();
  const [hotel, setHotel] = useState<HotelDetails>();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  useEffect(() => {
    if (items.length > 0) {
      const fetchRooms = async () => {
        const promises = items.map((id) => getRoomById(id));
        const data = await Promise.all(promises);
        setRooms(data);
      };
      fetchRooms();
    }
  }, [items]);

  useEffect(() => {
    if (!id) return;
    const fetchHotel = async () => {
      const data = await getHotelById(parseInt(id));
      setHotel(data);
    };
    fetchHotel();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      paymentMethod: 'credit_card',
      specialRequests: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      paymentMethod: Yup.string().required('Payment method is required')
    }),
    onSubmit: (values) => {
      if (!selectedRoomId) {
        alert('Please select a room.');
        return;
      }
      console.log({
        ...values,
        selectedRoomId
      });
      alert('Booking submitted!');
    }
  });

  return (
    <div className="checkout-page">
      <h1>Secure Checkout</h1>

      <section className="checkout-section">
        <h2>1️⃣ Select Your Room</h2>
        <div className="rooms-summary">
          {rooms.map((room) => (
            <label key={room.roomId} className="room-summary-card">
              <input
                type="radio"
                name="selectedRoom"
                checked={selectedRoomId === room.roomId}
                onChange={() => setSelectedRoomId(room.roomId)}
              />
              <img src={room.roomPhotoUrl} alt={room.roomType} className="room-image" />
              <div>
                <h3>{room.roomType} Room #{room.roomNumber}</h3>
                <p>Price: ${room.price}</p>
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
              Credit Card
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formik.values.paymentMethod === 'paypal'}
                onChange={formik.handleChange}
              />
              PayPal
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

        <button type="submit" className="confirm-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Checkout;
