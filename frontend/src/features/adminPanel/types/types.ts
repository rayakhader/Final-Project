export type City = {
    id:number, 
    name:string,
    description : string
}

export type Hotel={
    
}

export interface CityFormProps {
  onClose: () => void,
  onRefetch : () => void
}