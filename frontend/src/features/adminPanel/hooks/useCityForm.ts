import { ChangeEvent, useState } from "react"
import { addCity } from "../services/addCity"
import toast from "react-hot-toast"

export const useCityForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
  function handleDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value)
  }
  function handleAddNewCity() {
    const toastId = toast.loading('Adding city...');
    addCity(name, description)
      .then(() => {
        toast.success('City added successfully!', { id: toastId });
      })
      .catch(() => {
        toast.error('Failed to add city.', { id: toastId });
      });
  }

  return { name, description, onChangeName: handleNameChange, onChangeDescription: handleDescriptionChange, onAddCity: handleAddNewCity }
}