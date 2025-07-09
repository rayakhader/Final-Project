export const submitBooking = async (customerName: string, hotelName: string, roomNumber: number, roomType: string, bookingDateTime: Date, totalCost: number, paymentMethod: string) => {
    try {
        const response = await fetch('https://hotel.foothilltech.net/api/bookings', {
            method: 'POST',
            body: JSON.stringify({
                customerName: customerName,
                hotelName: hotelName,
                roomNumber: roomNumber,
                roomType: roomType,
                bookingDateTime: bookingDateTime,
                totalCost: totalCost,
                paymentMethod: paymentMethod
            })
        }
        )

        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
    }


}