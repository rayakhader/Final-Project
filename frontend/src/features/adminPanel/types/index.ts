export interface AddDialogProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
export interface EditDialogProps {
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