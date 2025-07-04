export interface Hotel {
    hotelId: number,
    cityName: string,
    hotelName: string,
}

export interface FeatureDealData extends Hotel {
    originalRoomPrice: number,
    discount: number,
    finalPrice: number,
    hotelStarRating: number,
    title: string,
    description: string,
    roomPhotoUrl: string
}

export interface RecentlyVisitedHotelData extends Hotel {
    starRating: number,
    thumbnailUrl: string,
    priceLowerBound: number,
    priceUpperBound: number,
    visitDate: Date
}
export type DestinationData = {
    cityId: number,
    cityName: string,
    countryName: string,
    description: number,
    thumbnailUrl: string,
}
export type StarRatingProps = {
    rating: number;
};
export type Amenity = {
    id: number,
    name: string,
    description: string
}
export interface SearchResultHotelData  extends Hotel {
    starRating: number,
    latitude: number,
    longitude: number,
    roomPrice: number,
    roomType: string,
    roomPhotoUrl: string,
    discount: number,
    amenities: Amenity[]
}
