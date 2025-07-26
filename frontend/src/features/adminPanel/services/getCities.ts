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
        console.log(localStorage.getItem('token'))
        console.log(response)
        const data = await response.json();
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }


}