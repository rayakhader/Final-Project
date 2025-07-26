export interface AddDialogProps {
    title: string
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}