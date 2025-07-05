export const getHotelReviews = async(id:number)=>{
     try {
        const response = await fetch(`https://hotel.foothilltech.net/api/hotels/${id}/reviews
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