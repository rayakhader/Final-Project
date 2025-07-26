import React from "react";
import { ConfirmDialogProps } from "../types/types";


const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800 text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {description && (
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <button
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className="px-4 py-2 bg-[#0E1B6B] text-white rounded hover:bg-[#363d5e]"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
