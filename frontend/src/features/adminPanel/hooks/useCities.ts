import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { City } from "../types/cities.types"
import { deleteCity, getCities } from "../services/cities"

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false)
  const [editCityId, setEditCityId] = useState<number>(0);
  const [deleteCityId, setDeleteCityId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true)

  function handleAddDialogOpen() {
    setIsAddDialogOpen(true)
  }
  function handleEditDialogOpen(id: number) {
    setIsEditDialogOpen(true)
    setEditCityId(id)
  }
  function handleCloseAddDialog() {
    setIsAddDialogOpen(false)
  }
  function handleCloseEditDialog() {
    setIsEditDialogOpen(false)
    setEditCityId(0)
  }

  function fetchCities() {
    setIsLoading(true)
    getCities()
      .then((data) => {
        setCities(data)
      }).finally(() => {
        setIsLoading(false)
      })
  }
  function handleDeleteCity(id: number) {
    const toastId = toast.loading('Deleting city...');
    deleteCity(id)
      .then(() => {
        toast.success('City deleted successfully!', { id: toastId });
        fetchCities()
        handleCloseConfirmDelete()
      })
      .catch(() => {
        toast.error('Failed to delete city.', { id: toastId });
      });

  }
  function handleOpenConfirmDelete(id: number) {
    setIsOpenConfirmDelete(true)
    setDeleteCityId(id)
  }
  function handleCloseConfirmDelete() {
    setIsOpenConfirmDelete(false)
    setDeleteCityId(0)
  }
  useEffect(() => {
    fetchCities()
  }, [])

  return { cities, handleAddDialogOpen, isAddDialogOpen, handleCloseAddDialog, fetchCities, handleDeleteCity, handleOpenConfirmDelete, isOpenConfirmDelete, deleteCityId, handleCloseConfirmDelete, isLoading, isEditDialogOpen, handleEditDialogOpen, handleCloseEditDialog, editCityId }
}