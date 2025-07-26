import React, { useEffect, useState } from 'react'
import { getHotels } from '../features/adminPanel/services/getHotels'
import DataTable from '../components/DataTable'
import { Hotel } from '../features/adminPanel/types/types'

function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  useEffect(() => {
    getHotels()
      .then((data) => {
        setHotels(data)
      })
  }, [])
  return (
    <div className='border-2 border-gray-400 p-2 rounded-xl shadow-xl'>
      <h1 className='font-start'>Manage Hotels</h1>
      {/* <DataTable
        data={hotels}
        columns={[
          { header: "id", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Description", accessor: "description" },
        ]}
        onOpenEditDialog={(id) => console.log("Edit", id)}
        onOpenConfirmDeleteDialog={(id) => console.log("Delete", id)}
        isLoading={false}
      /> */}

    </div>
  )
}

export default Hotels
