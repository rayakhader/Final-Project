import React, { JSX } from 'react'
import { FaSort } from 'react-icons/fa'
import { useBookings } from '../features/bookings/hooks/useBookings'



function Bookings() {
  const { searchTerm, onChangeSearchTerm, filtered } = useBookings()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>

      <input
        type="text"
        placeholder="Search by name, hotel or confirmation..."
        className="w-full mb-4 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={onChangeSearchTerm}
      />

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Confirmation {FaSort({}) as JSX.Element}</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Hotel</th>
              <th className="px-4 py-3 text-left">Room</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((b, index) => (
              <tr key={index} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2" title={b.confirmationNumber}>
                  {b.confirmationNumber.length > 10
                    ? b.confirmationNumber.slice(0, 10) + '...'
                    : b.confirmationNumber}
                </td>
                <td className="px-4 py-2">{b.fullName}</td>
                <td className="px-4 py-2">{b.hotelName}</td>
                <td className="px-4 py-2">
                  #{b.roomNumber} - {b.roomType}
                </td>
                <td className="px-4 py-2 text-green-600 font-semibold">${b.price}</td>
                <td className="px-4 py-2 capitalize">{b.paymentMethod.replace('_', ' ')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center py-6 text-gray-500">No bookings found.</p>
        )}
      </div>
    </div>
  )
}

export default Bookings
