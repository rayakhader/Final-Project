import { useEffect, useState } from "react"
import { City } from "../types/types"
import { getCities } from "../services/getCities"
import { deleteCity } from "../services/deleteCity"
import toast from "react-hot-toast"

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false)
  const [selectedCityId, setSelectedCityId] = useState(0)

  function handleAddDialogOpen() {
    setIsAddDialogOpen(true)
  }
  function handleCloseDialog() {
    setIsAddDialogOpen(false)
  }
  function fetchCities() {
    getCities()
      .then((data) => {
        setCities(data)
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
  function handleOpenConfirmDelete(id:number) {
    setIsOpenConfirmDelete(true)
    setSelectedCityId(id)
  }
  function handleCloseConfirmDelete(){
    setIsOpenConfirmDelete(false)
    setSelectedCityId(0)
  }
  useEffect(() => {
    fetchCities()
  }, [])

  return { cities, handleAddDialogOpen, isAddDialogOpen, handleCloseDialog, fetchCities, handleDeleteCity, handleOpenConfirmDelete, isOpenConfirmDelete , selectedCityId, handleCloseConfirmDelete}
}