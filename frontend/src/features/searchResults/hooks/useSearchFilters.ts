import { useState } from "react";
import { SearchResultHotelData } from "../../home/types";
import { SearchFilters } from "../types";


export function useSearchFilters(hotels:SearchResultHotelData[]){
    const [filters, setFilters] = useState<SearchFilters>({
            priceRange: [0, 500],
            starRating: 0,
            roomType: ''
        })

        const filteredHotels = hotels.filter(hotel => {
        const matchesPrice = hotel.roomPrice >= filters.priceRange[0] && hotel.roomPrice <= filters.priceRange[1];
        const matchesStar = filters.starRating ? hotel.starRating >= filters.starRating : true;
        const matchesRoomType = filters.roomType ? hotel.roomType === filters.roomType : true;
        return matchesPrice && matchesStar && matchesRoomType;
    });

    return {
        filters,
        setFilters,
        filteredHotels
    }



}