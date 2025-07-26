import DataTable from '../components/DataTable'
import { useCities } from '../features/adminPanel/hooks/useCities'
import AddDialog from '../components/AddDialog'
import CityForm from '../features/adminPanel/components/CityForm'
import { Toaster } from 'react-hot-toast'

function Cities() {
  const { cities, handleAddDialogOpen, isAddDialogOpen,handleCloseDialog, fetchCities } = useCities()
  return (
    <div className='border-2 border-gray-400 p-2 rounded-xl shadow-xl'>
      <h1 className='font-start'>Manage Cities</h1>
      <div className='flex justify-end px-2'>
        <button onClick={handleAddDialogOpen} className='p-2 border-2 rounded-lg  text-white bg-[#0E1B6B] text-sm'>
        + Add new City
      </button>
      </div>
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

      {
        isAddDialogOpen &&
        <AddDialog title="Add New City" isOpen={isAddDialogOpen} onClose={handleCloseDialog}>
          <CityForm onClose={handleCloseDialog} onRefetch={fetchCities} />
        </AddDialog>
      }

      <Toaster position='bottom-right' />
    </div>
  )
}

export default Cities
