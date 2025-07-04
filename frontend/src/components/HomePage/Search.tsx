import React, { useState } from 'react';
import './home.css'; 
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date:Date) => date.toISOString().split('T')[0];

  // State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>(formatDate(today));
  const [checkOut, setCheckOut] = useState<string>(formatDate(tomorrow));
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);
  const navigate = useNavigate()

  const handleSearch = async() => {
   const params = new URLSearchParams({
    searchTerm,
    checkIn, 
    checkOut,
    rooms :rooms.toString(),
    adults: adults.toString(),
    children: children.toString()
   }).toString()

   navigate(`/search-results?${params}`)
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for hotels, cities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="date-section">
        <label>
          Check-in:
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label>
          Check-out:
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>
      </div>

      <div className="guest-section">
        <label>
          Adults:
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          />
        </label>

        <label>
          Children:
          <input
            type="number"
            min="0"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
          />
        </label>

        <label>
          Rooms:
          <input
            type="number"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          />
        </label>
      </div>

      <button onClick={handleSearch} className='search-button'>Search</button>
    </div>
  );
}

export default SearchBar;
