import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSearchResults } from '../../APIs/Home/getSearchResults';
import { FaShoppingBag } from 'react-icons/fa';
import './search.css'
type Amenity = {
    id: number,
    name: string,
    description: string
}
type Hotel = {
    hotelId: number,
    hotelName: string,
    starRating: number,
    latitude: number,
    longitude: number,
    roomPrice: number,
    roomType: string,
    cityName: string,
    roomPhotoUrl: string,
    discount: number,
    amenities: Amenity[]
}
function SearchResultsPage() {
    const [searchParams] = useSearchParams()
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [filters, setFilters] = useState({
        priceRange: [0, 500],
        starRating: 0,
        roomType: ''
    })
    const fetchHotels = async () => {
        const searchTerm = searchParams.get('searchTerm') || '';
        const checkIn = searchParams.get('checkIn') || '';
        const checkOut = searchParams.get('checkOut') || '';
        const adults = Number(searchParams.get('adults'));
        const children = Number(searchParams.get('children'));
        const rooms = Number(searchParams.get('rooms'));

        const data = await getSearchResults(searchTerm, checkIn, checkOut, children, rooms, adults);
        setHotels(data);
    };

    useEffect(() => {
        fetchHotels();
    }, [searchParams]);

    const filteredHotels = hotels.filter(hotel => {
        const matchesPrice = hotel.roomPrice >= filters.priceRange[0] && hotel.roomPrice <= filters.priceRange[1];
        const matchesStar = filters.starRating ? hotel.starRating >= filters.starRating : true;
        const matchesRoomType = filters.roomType ? hotel.roomType === filters.roomType : true;
        return matchesPrice && matchesStar && matchesRoomType;
    });
    return (
        <>
            <div className='search-header'>
                <div className="search-summary">
                    <div className="search-term">
                        <span>📍 {searchParams.get('searchTerm') || 'Where are you going?'}</span>
                    </div>
                    <div className="date-range">
                        <span>📅 {searchParams.get('checkIn')} → {searchParams.get('checkOut')}</span>
                    </div>
                    <div className="guests-rooms">
                        <span>👤 {searchParams.get('adults')} adults, 🧒 {searchParams.get('children')} children, 🏠 {searchParams.get('rooms')} room(s)</span>
                    </div>
                </div>
                {/* <div className='cart'>
                    <button className="cart-button">
                        <FaShoppingBag />
                    </button>
                </div> */}
            </div>
            <div className="results-page">
                <aside className="filters-sidebar">
                    <h3>Filters</h3>
                    <label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                        <input type="range"
                            min="0"
                            max="2000"
                            step="50"
                            value={filters.priceRange[1]}
                            onChange={(e) => {
                                setFilters({
                                    ...filters,
                                    priceRange: [filters.priceRange[0], Number(e.target.value)]
                                })
                            }} />
                    </label>

                    <label>
                        Min Star Rating:
                        <input
                            type="number"
                            min="1"
                            max="5"
                            value={filters.starRating}
                            onChange={(e) => setFilters({ ...filters, starRating: Number(e.target.value) })}
                        />
                    </label>
                    <label>
                        Room Type:
                        <select value={filters.roomType} onChange={(e) => setFilters({ ...filters, roomType: e.target.value })}>
                            <option value="">All</option>
                            <option value="luxury">Luxury</option>
                            <option value="budget">Budget</option>
                            <option value="boutique">Boutique</option>
                        </select>
                    </label>
                </aside>

                <main className="hotel-listings">
                    {filteredHotels.length > 0 ? filteredHotels.map((hotel, idx) => (
                        <div className="hotel-card" key={idx}>
                            <img src={hotel.roomPhotoUrl} alt={hotel.hotelName} />
                            <h4>{hotel.hotelName}</h4>
                            <p>⭐ {hotel.starRating} stars</p>
                            <p>${hotel.roomPrice} per night</p>
                            <div className="amenities">
                                {hotel.amenities.map((h) => (
                                    <span className="amenity" key={h.id}>{h.name}</span>
                                ))}
                            </div>
                        </div>
                    )) : <div className="no-results">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                            alt="No results"
                            className="no-results-image"
                        />
                        <h4>No results found</h4>
                        <p>Try adjusting your filters or search criteria.</p>
                    </div>}
                </main>
            </div>
        </>
    )
}

export default SearchResultsPage
