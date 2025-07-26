import { useEffect, useState } from "react"
import { City } from "../types/types"
import { getCities } from "../services/getCities"

export const useCities =()=>{
    const [cities, setCities] = useState<City[]>([])
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

    function handleAddDialogOpen(){
        setIsAddDialogOpen(true)
    }
    function handleCloseDialog(){
        setIsAddDialogOpen(false)
    }
    function fetchCities(){
      getCities()
      .then((data)=>{
        setCities(data)
      })
    }
      useEffect(() => {
       fetchCities()
      }, [])

      return {cities, handleAddDialogOpen, isAddDialogOpen, handleCloseDialog, fetchCities}
}