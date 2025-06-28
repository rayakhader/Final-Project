export const getSearchResults = async (searchTerm:string, checkIn:string,checkOut:string,children:number,rooms:number,adults:number) => {

    try{
         const response = await fetch(
      `https://hotel.foothilltech.net/api/home/search?` +
      `numberOfRooms=${rooms}&adults=${adults}&children=${children}` +
      `&checkIn=${checkIn}&checkOut=${checkOut}&city=${searchTerm}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    const data = await response.json()
    return data;

    }catch(error){
        console.log(error)
    }
   
}