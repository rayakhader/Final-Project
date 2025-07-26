import React, { useState } from 'react'
import { CityFormProps } from '../types/types'
import { useCityForm } from '../hooks/useCityForm'

const CityForm: React.FC<CityFormProps> = ({ onClose, onRefetch }) => {
  const { name, description, onChangeName, onChangeDescription, onAddCity } = useCityForm()
  const isEmptyFields = !name || !description

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddCity()
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
