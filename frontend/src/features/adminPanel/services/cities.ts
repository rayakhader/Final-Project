import { City } from "../types/cities.types";

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
export const deleteCity = async (id: number) => {
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
export const editCity = async (id: number, name: string, description: string) => {
    try {
        const response = await fetch(`https://hotel.foothilltech.net/api/cities/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                name,
                description
            })
        }
        )

    } catch (error) {
        console.log(error)
    }
}
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

export const getCityById = async (cityId:number) => {
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
        const city = data.find((c:City)=>c.id===cityId)
        return city
    } catch (error) {
        console.log(error)
    }


}