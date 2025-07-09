export const getRoomById = async(id:number)=>{
     try {
        const response = await fetch(`https://hotel.foothilltech.net/api/rooms/${id}
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