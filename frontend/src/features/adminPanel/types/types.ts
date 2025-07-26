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
export interface AddDialogProps {
    title: string
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}
export type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
};