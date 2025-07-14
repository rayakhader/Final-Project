import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AvailableRoom, HotelDetails, Review } from "../components/Hotel/types"
import { getAvailableRoomsByHotelId } from "../APIs/Hotel/getAvailableRoomsByHotelId"
import { getHotelById } from "../APIs/Hotel/getHotelById"
import { getHotelReviews } from "../APIs/Hotel/getHotelReviews"
import { getCartItemsFromStorage, saveCartItemsToStorage } from "../utils/cartStorage"

export function useHotel() {
    const { id } = useParams()
    const [hotelDetails, setHotelDetails] = useState<HotelDetails>()
    const [availableRooms, setAvailableRooms] = useState<AvailableRoom[]>([])
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [fullscreen, setFullscreen] = useState(false)
    const [reviews, setReviews] = useState<Review[]>([])
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState<number[]>(() => getCartItemsFromStorage())
    const [validationError, setValidationError] = useState<string | null>('')
    const navigate = useNavigate()
    const isAvailabilityCheckDisabled = !checkIn || !checkOut || Boolean(validationError)

    const isRoomInCart = (id: number) => {
        return cartItems.includes(id)
    }

    function handleToggleFullScreen() {
        setFullscreen(!fullscreen)
    }
    function handleChangeCheckIn(e: React.ChangeEvent<HTMLInputElement>) {
        setCheckIn(e.target.value)
    }
    function handleChangeCheckOut(e: React.ChangeEvent<HTMLInputElement>) {
        setCheckOut(e.target.value)
    }

    function handleFetchAvailableRoom() {
        if (id) {
            getAvailableRoomsByHotelId(parseInt(id), checkIn, checkOut).then((data) => setAvailableRooms(data))
        }
    }
    function handleAddToCart(id: number) {
        const updatedItems = [...cartItems, id]
        setCartItems(updatedItems)
        saveCartItemsToStorage(updatedItems)
    }
    function handleOpenCart() {
        navigate(`/hotels/${id}/checkout`)
    }
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                await getHotelById(parseInt(id))
                    .then((data) => {
                        setHotelDetails(data)
                    })
                await getHotelReviews(parseInt(id))
                    .then((data) => {
                        setReviews(data)
                    })
            }
            setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'))
            fetchData().finally(() => setLoading(false))
        }
    }, [id])

    useEffect(() => {
        if (!checkIn || !checkOut) {
            setValidationError(null)
            return
        }
        const now = new Date()
        const today = new Date(now.toISOString().split('T')[0])

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        if (checkInDate < today) {
            setValidationError('Check-in date cannot be in the past.')
            return
        }
        if (checkOutDate < today) {
            setValidationError('Check-out date cannot be in the past.')
            return
        }
        if (checkInDate >= checkOutDate) {
            setValidationError('Check-in date must be before check-out date.')
            return
        }
        setValidationError(null)
    }, [checkIn, checkOut])

    return {
        hotelDetails,
        availableRooms,
        checkIn,
        checkOut,
        fullscreen,
        reviews,
        loading,
        cartItems,
        validationError,
        onChangeCheckIn: handleChangeCheckIn,
        onChangeCheckOut: handleChangeCheckOut,
        onToggleFullScreen: handleToggleFullScreen,
        handleFetchAvailableRoom,
        handleAddToCart,
        handleOpenCart,
        isAvailabilityCheckDisabled,
        isRoomInCart
    }


}