export const getTrendingDest = async () => {

    try {
        const response = await fetch(`https://hotel.foothilltech.net/api/home/destinations/trending
`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    }


}