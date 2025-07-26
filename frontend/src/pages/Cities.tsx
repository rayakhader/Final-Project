import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'
import { getCities } from '../features/adminPanel/services/getCities'
import { City } from '../features/adminPanel/types/types'

function Cities() {
  const [cities, setCities] = useState<City[]>([])
  useEffect(() => {
    getCities()
      .then((data) => {
        setCities(data)
      })
  }, [])
  return (
    <div className='border-2 border-gray-400 p-2 rounded-xl shadow-xl'>
      <h1 className='font-start'>Manage Cities</h1>
      <DataTable
        data={cities}
        columns={[
          { header: "id", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Description", accessor: "description" },
        ]}
        onOpenEditDialog={(id) => console.log("Edit", id)}
        onOpenConfirmDeleteDialog={(id) => console.log("Delete", id)}
        isLoading={false}
      />

    </div>
  )
}

export default Cities
