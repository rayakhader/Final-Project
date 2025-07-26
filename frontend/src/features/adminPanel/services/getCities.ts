export const getCities = async () => {
    try {
        const response = await fetch('https://hotel.foothilltech.net/api/cities?pageSize=10&pageNumber=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'accept': 'text/plain'
            },
        }
        )
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
    }


}