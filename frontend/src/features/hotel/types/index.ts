type RoomAmenity = {
  name: string;
  description: string;
};

export type AvailableRoom = {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: RoomAmenity[];
  price: number;
  availability: boolean;
};
type Amenity = {
  name: string;
  description: string;
};

export type HotelDetails = {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
};

export type Review ={
    reviewId:number,
    customerName: string,
    rating: number,
    description: string
}
