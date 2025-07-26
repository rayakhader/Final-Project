export const getAvailableRoomsByHotelId = async(id:number,checkInDate:string, checkOutDate:string)=>{
     try {
        const response = await fetch(`https://hotel.foothilltech.net/api/hotels/${id}/available-rooms?checkInDate=${checkInDate}&CheckOutDate=${checkOutDate}
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