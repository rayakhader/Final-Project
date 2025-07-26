export const getRecentHotel = async(userId:number)=>{
    try{
        const response = await fetch(`https://hotel.foothilltech.net/api/home/users/${userId}/recent-hotels
`,{
    method:'GET',
    headers:{
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
})
const data = await response.json();
return data
}
catch(error){
    console.log(error)
}

    }
    