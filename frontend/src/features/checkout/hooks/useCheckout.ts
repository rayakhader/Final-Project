import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getCartItemsFromStorage } from '../../../utils/cartStorage';
import { HotelDetails } from '../../hotel/types';
import { Room } from '../types';
import { submitBooking } from '../services/submitBooking';
import { getRoomById } from '../services/getRoomById';
import { getHotelById } from '../../hotel/services/getHotelById';


const initialFormValues = {
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'credit_card',
    specialRequests: '',
};

export function useCheckout() {
    const { hotelId } = useParams();
    const navigate = useNavigate();

    const items = getCartItemsFromStorage();
    const [hotel, setHotel] = useState<HotelDetails>();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: Yup.object({
            fullName: Yup.string()
                .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces')
                .min(3, 'Full name must be at least 3 characters')
                .required('Full name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().matches(/^\+?[0-9]{7,15}$/, 'Phone number is not valid').required('Phone is required'),
            paymentMethod: Yup.string().required('Payment method is required')
        }),
        onSubmit: async (values) => {
            if (!selectedRoomId) {
                Swal.fire('Please select a room.', '', 'warning');
                return;
            }

            const roomDetails = rooms.find((room) => room.roomId === selectedRoomId);
            if (!roomDetails || !hotel) return;

            try {
                const data = await submitBooking(
                    values.fullName,
                    hotel.hotelName,
                    roomDetails.roomNumber,
                    roomDetails.roomType,
                    roomDetails.price,
                    values.paymentMethod
                );

                const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
                const updatedBookings = [
                    ...existing,
                    {
                        fullName: values.fullName,
                        hotelName: hotel.hotelName,
                        roomNumber: roomDetails.roomNumber,
                        roomType: roomDetails.roomType,
                        price: roomDetails.price,
                        paymentMethod: values.paymentMethod,
                        confirmationNumber: data.confirmationNumber,
                    },
                ];
                localStorage.setItem('bookings', JSON.stringify(updatedBookings));

                Swal.fire({
                    icon: 'success',
                    title: 'Booking Confirmed!',
                    text: `Confirmation Number: ${data.confirmationNumber}`,
                    confirmButtonText: 'View Confirmation',
                }).then(() => {
                    navigate(`/hotels/${hotelId}/checkout/confirmation`, {
                        state: { confirmationDetails: data },
                    });
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Booking Failed',
                    text: 'Something went wrong while submitting your booking.',
                });
            }
        },
    });
    function handleChangeRoomId(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectedRoomId(Number(e.target.value))
    }

    useEffect(() => {
        document.title = "Secure Checkout - Book Your Room";
    }, []);

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
        if (!hotelId) return;
        const fetchHotel = async () => {
            const data = await getHotelById(parseInt(hotelId));
            setHotel(data);
        };
        fetchHotel();
    }, [hotelId]);

    return {
        rooms,
        hotel,
        formik,
        selectedRoomId,
        handleChangeRoomId,
    };
}
