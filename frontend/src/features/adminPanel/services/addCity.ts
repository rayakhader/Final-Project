export const addCity = async (name: string, description: string) => {
    try {
        const response = await fetch('https://hotel.foothilltech.net/api/cities', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'accept': 'text/plain',
                'Content-Type': 'application/json-patch+json'
            },
            body: JSON.stringify({
                name,
                description
            })
        }
        )
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
    }
}