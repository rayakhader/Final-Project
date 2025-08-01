import DataTable from '../components/table/DataTable'
import { useCities } from '../features/adminPanel/hooks/useCities'
import AddDialog from '../features/adminPanel/components/AddDialog'
import CityForm from '../features/adminPanel/components/CityForm'
import { Toaster } from 'react-hot-toast'
import ConfirmDialog from '../features/adminPanel/components/ConfirmDeleteDialog'
import EditDialog from '../features/adminPanel/components/EditDialog'

function Cities() {
  const { cities, handleAddDialogOpen, isAddDialogOpen, handleCloseAddDialog, fetchCities, handleDeleteCity, handleOpenConfirmDelete, isOpenConfirmDelete, deleteCityId, handleCloseConfirmDelete, isLoading, isEditDialogOpen, handleEditDialogOpen, handleCloseEditDialog, editCityId } = useCities()
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
        onOpenEditDialog={(id) => handleEditDialogOpen(id)}
        onOpenConfirmDeleteDialog={(id) => handleOpenConfirmDelete(id)}
        isLoading={isLoading}
      />

      {
        isAddDialogOpen &&
        <AddDialog title="Add New City" isOpen={isAddDialogOpen} onClose={handleCloseAddDialog}>
          <CityForm onClose={handleCloseAddDialog} onRefetch={fetchCities} type='add'/>
        </AddDialog>
      }
      {
        isEditDialogOpen &&
        <EditDialog title="Edit City" isOpen={isEditDialogOpen} onClose={handleCloseEditDialog}>
          <CityForm onClose={handleCloseEditDialog} onRefetch={fetchCities} selectedCity={editCityId} type='edit' />
        </EditDialog>
      }
      {
        isOpenConfirmDelete && Boolean(deleteCityId) && <ConfirmDialog open={isOpenConfirmDelete} title='Confirm Delete City' description='Are you sure that you want to delete this city?' onClose={handleCloseConfirmDelete} onConfirm={() => handleDeleteCity(deleteCityId)} />

      }

      <Toaster position='bottom-right' />
    </div>
  )
}

export default Cities
