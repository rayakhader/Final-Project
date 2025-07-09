export const getFeatureDeals = async()=>{
    try{
const response = await fetch('https://hotel.foothilltech.net/api/home/featured-deals',{
        method:'GET'
    }
)

const data  = await response.json();
return data

    }catch(error){
        console.log(error)
    }
    

}