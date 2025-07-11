export const submitBooking = async (customerName: string, hotelName: string, roomNumber: number, roomType: string, totalCost: number, paymentMethod: string) => {
    try {
        const response = await fetch('https://hotel.foothilltech.net/api/bookings', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json-patch+json',
            },
            body: JSON.stringify({
                customerName: customerName,
                hotelName: hotelName,
                roomNumber: roomNumber,
                roomType: roomType,
                totalCost: totalCost,
                paymentMethod: paymentMethod
            })
        }
        )
        const data = await response.json();
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }


}