export const getHotelById = async (id: number) => {
    try {
        const response = await fetch(`https://hotel.foothilltech.net/api/hotels/${id}?includeRooms=false
`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
    }

}