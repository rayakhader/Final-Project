import { Toaster } from "react-hot-toast";
import AddDialog from "../features/adminPanel/components/AddDialog";
import CityForm from "../features/adminPanel/components/CityForm";
import ConfirmDialog from "../features/adminPanel/components/ConfirmDeleteDialog";
import EditDialog from "../features/adminPanel/components/EditDialog";
import { useCities } from "../features/adminPanel/hooks/useCities";
import DataTable from "../components/table/DataTable";

function Cities() {
  const {
    cities,
    handleAddDialogOpen,
    isAddDialogOpen,
    handleCloseAddDialog,
    fetchCities,
    handleDeleteCity,
    handleOpenConfirmDelete,
    isOpenConfirmDelete,
    deleteCityId,
    handleCloseConfirmDelete,
    isLoading,
    isEditDialogOpen,
    handleEditDialogOpen,
    handleCloseEditDialog,
    editCityId
  } = useCities();

  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">🏙️ Manage Cities</h1>
        <button
          onClick={handleAddDialogOpen}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-all"
        >
          + Add New City
        </button>
      </div>

      <DataTable
        data={cities}
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Description", accessor: "description" },
        ]}
        onOpenEditDialog={handleEditDialogOpen}
        onOpenConfirmDeleteDialog={handleOpenConfirmDelete}
        isLoading={isLoading}
      />

      {isAddDialogOpen && (
        <AddDialog title="Add New City" isOpen={isAddDialogOpen} onClose={handleCloseAddDialog}>
          <CityForm onClose={handleCloseAddDialog} onRefetch={fetchCities} type="add" />
        </AddDialog>
      )}

      {isEditDialogOpen && (
        <EditDialog title="Edit City" isOpen={isEditDialogOpen} onClose={handleCloseEditDialog}>
          <CityForm onClose={handleCloseEditDialog} onRefetch={fetchCities} selectedCity={editCityId} type="edit" />
        </EditDialog>
      )}

      {isOpenConfirmDelete && deleteCityId && (
        <ConfirmDialog
          open={isOpenConfirmDelete}
          title="Confirm Delete City"
          description="Are you sure you want to delete this city?"
          onClose={handleCloseConfirmDelete}
          onConfirm={() => handleDeleteCity(deleteCityId)}
        />
      )}

      <Toaster position="bottom-right" />
    </div>
  );
}

export default Cities
