import React, { useEffect } from 'react'
import { useCityForm } from '../hooks/useCityForm'
import { CityFormProps } from '../types/cities.types'
import { getCityById } from '../services/cities'

const CityForm: React.FC<CityFormProps> = ({ onClose, onRefetch, selectedCity, type }) => {
  const { name, description, onChangeName, onChangeDescription, onAddCity, onEditCity } = useCityForm()
  const isEmptyFields = !name || !description

  useEffect(() => {
    if (!selectedCity) return
    getCityById(selectedCity).then((data) => {
      onChangeName(data.name)
      onChangeDescription(data.description)
    })
  }, [selectedCity])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (type === 'add') {
      onAddCity()
    } else if (selectedCity) {
      onEditCity(selectedCity)
    }
    onRefetch()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" >
      <div>
        <label htmlFor="name">Name</label><br />
        <input
          id="name"
          value={name}
          onChange={onChangeName}
          className="border w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label><br />
        <input
          id="description"
          value={description}
          onChange={onChangeDescription}
          className="border w-full p-2"
        />
      </div>
      <div className='flex justify-center'>
        <button disabled={isEmptyFields} type="submit" className="px-4 py-2 border-2 rounded-lg  text-white bg-[#0E1B6B] text-sm">
          Save City
        </button>
      </div>

    </form>
  )
}

export default CityForm
