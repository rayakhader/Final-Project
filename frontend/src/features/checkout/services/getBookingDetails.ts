export const getBookingDetails = async () => {
    try {
        const response = await fetch('https://hotel.foothilltech.net/api/bookings', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json-patch+json',
            },
        }
        )
        const data = await response.json();
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }

}