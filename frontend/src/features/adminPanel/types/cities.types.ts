export type City = {
  id: number,
  name: string,
  description: string
}

export interface CityFormProps {
  onClose: () => void,
  onRefetch: () => void,
  selectedCity?: number,
  type:string
}