import React from 'react'
import { AddDialogProps } from './types/addDialog'


const AddDialog: React.FC<AddDialogProps> = ({ title, isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 flex items-center justify-center z-[999]">
            <div className="bg-white p-5 w-[500px] rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button className="text-2xl leading-none bg-transparent border-none cursor-pointer" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default AddDialog
