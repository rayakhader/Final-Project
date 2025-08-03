import { ChangeEvent, useEffect, useState } from "react"
import { Booking } from "../types"
export const useBookings =()=>{
     const [bookings, setBookings] = useState<Booking[]>([])
      const [searchTerm, setSearchTerm] = useState('')
    
      useEffect(() => {
        const bookingsList = JSON.parse(localStorage.getItem('bookings') || '[]')
        setBookings(bookingsList)
      }, [])
    
      const filtered = bookings.filter(b =>
        b.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.confirmationNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
      function onChangeSearchTerm(e:ChangeEvent<HTMLInputElement>){
        setSearchTerm(e.target.value)
      }

      return {searchTerm,onChangeSearchTerm, filtered}


    
}