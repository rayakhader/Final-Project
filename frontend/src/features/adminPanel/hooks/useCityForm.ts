import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"
import { addCity, editCity } from "../services/cities"

export const useCityForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleNameChange(e: ChangeEvent<HTMLInputElement> | string) {
    if (typeof e === 'string') {
      setName(e)
    } else {
      setName(e.target.value)
    }
  }
  function handleDescriptionChange(e: ChangeEvent<HTMLInputElement> | string) {
    if (typeof e === 'string') {
      setDescription(e)
    }
    else {
      setDescription(e.target.value)
    }
  }
  function handleAddNewCity() {
    const toastId = toast.loading('Adding city...');
    addCity(name, description)
      .then(() => {
        toast.success('City added successfully!', { id: toastId });
      })
      .catch(() => {
        toast.error('Failed to add city.', { id: toastId });
      })
  }
  function handleEditCity(id: number) {
    const toastId = toast.loading('Editing city...');
    editCity(id, name, description)
      .then(() => {
        toast.success('City changed successfully!', { id: toastId });
      })
      .catch(() => {
        toast.error('Failed to edit city.', { id: toastId });
      })
  }
  

  return { name, description, onChangeName: handleNameChange, onChangeDescription: handleDescriptionChange, onAddCity: handleAddNewCity, onEditCity: handleEditCity }
}