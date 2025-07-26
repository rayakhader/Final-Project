export const deleteCity =async(id:number)=>{
     try {
        const response = await fetch(`https://hotel.foothilltech.net/api/cities/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }
        )

    } catch (error) {
        console.log(error)
    }
}