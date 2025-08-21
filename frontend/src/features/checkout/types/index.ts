export interface RoomAmenity {
  name: string;
  description: string;
}

export interface Room {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string; 
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: RoomAmenity[];
  price: number;
  availability: boolean;
}
